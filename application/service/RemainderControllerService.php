<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
');
include "DatabaseConnection.php";
require 'JWT.php';

/**
 * class Api notes contoller methods
 */

 class RemainderControllerService
 {
    
/**
 * @var string $connect PDO object
 */
public $connect = "";
/**
 * @var string $title title
 * @var string $notes notes
 * @var string $email email
 * @var string $color color
 * @var string $isArchive isArchive
 * @var string $label label
 * @var string $remainder remainder
 */
/**
 * @method constructor to establish the database connection
 * @return void
 */
    public function __construct()
    {
        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        $this->constants = new Constant();
    }
    /**
     * @method fetchRemainderNote() to fetch the remainder notes
     * @return void
     */
        public function fetchRemainderNote($email)
        {
            $headers = apache_request_headers();
            $token   = explode(" ", $headers['Authorization']);
            $reff    = new JWT();
            if ($reff->verify($token[0])) {
                /**
                 * @var string $query has query to Insert data into database (notes) table name
                 */
                $query = "SELECT * FROM notes where email='$email' and remainder != 'undefined' and isDeleted='0'  order by dragId desc";
                /**
                 * @var string $statement holds statement object
                 */
                $statement = $this->connect->prepare($query);
                if ($statement->execute()) {
                    /**
                     * @var array $arr to store result
                     */
                    $arr = $statement->fetchAll(PDO::FETCH_ASSOC);
                    for ($i = 0; $i < count($arr); $i++) {
                        $arr[$i]['image'] = $this->constants->base64 . base64_encode($arr[$i]['image']);
                    }

                    /**
                     *  returns json array response
                     */

                    print json_encode($arr);
                } else {
                    $data = array(
                        "error" => "404",
                    );
                    /**
                     *  returns json array response
                     */

                    print json_encode($data);
                }
            } else {
                $data = array(
                    "error" => "404",
                );
                /**
                 *  returns json array response
                 */
                print json_encode($data);
            }
        }
 }
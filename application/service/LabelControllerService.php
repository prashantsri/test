<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
');
include "DatabaseConnection.php";
require 'JWT.php';


/**
 * class Api labeled notes contoller methods
 */

class LabelControllerService
{
/**
 * @var string $connect PDO object
 */
/**
 * @var string $title title
 * @var string $notes notes
 * @var string $email email
 * @var string $color color
 * @var string $isArchive isArchive
 * @var string $label label
 * @var string $remainder remainder
 */
    public $connect = "";
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
     * @method fetchLabelNote() fetch label notes
     * @return void
     */
    public function fetchLabelNote($label, $email)
    {
        $headers = apache_request_headers();
        $token   = explode(" ", $headers['Authorization']);
        $reff    = new JWT();
        if ($reff->verify($token[0])) {
            /**
             * @var string $query has query to select all notes with label
             */
            $query ="SELECT NN.id, NN.email, NN.title, NN.notes, NN.remainder, NN.isArchive, NN.color, NN.label, NN.dragId, NN.isDeleted, NN.image, NN.isPin 
                    FROM notes NN JOIN labelnotes LL
                     ON NN.ID = LL.noteid
                     WHERE LL.labelname='$label' and NN.email='$email'";
                      ;
       // $query = "SELECT * FROM notes where email='$email'  and label='$label'  order by dragId desc";
            //$query = "SELECT * FROM notes where email='$email' and isDeleted='no' and label='$label'  order by dragId desc";
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
                 * returns json array response
                 */
                print json_encode($arr);

            } else {
                $data = array(
                    "error" => "404",
                );
                /**
                 * returns json array response
                 */
                print json_encode($data);
            }
        } else {
            $data = array(
                "error" => "404",
            );
            /**
             * returns json array response
             */
            print json_encode($data);
        }
    }
}

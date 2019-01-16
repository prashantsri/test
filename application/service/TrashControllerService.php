<?php
/*******************************************************************
 * @discription API for Trash
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
');
include "DatabaseConnection.php";
require 'JWT.php';


/**
 * class Api notes contoller methods
 */
/**
 * @var string $email email
 * @var string $id id
 */

class TrashControllerService
{

    /**
     * @var string $connect PDO object
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
     * @method fetchTrashNote()
     * @return void
     */
    public function fetchTrashNote($email)
    {
        $headers = apache_request_headers();
        $token   = explode(" ", $headers['Authorization']);
        $reff    = new JWT();
        if ($reff->verify($token[0])) {

            /**
             * @var string $query has query to select deleted notes data from database
             */
            $query = "SELECT * FROM notes where email='$email' and isDeleted = '1' order by id desc";
            /**
             * @var string $statement holds statement object
             */
            $statement = $this->connect->prepare($query);
            $statement->execute();
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
    }


     /**
     * @method deleteNote()
     * @return void
     */
    public function deleteNote($id, $email)
    {
        $headers = apache_request_headers();
        $token   = explode(" ", $headers['Authorization']);
        $reff    = new JWT();
        if ($reff->verify($token[0])) {
            $ref           = new DatabaseConnection();
            $this->connect = $ref->Connection();
            /**
             * @var string $query has query to delete the roe permanently
             */
            $query     = "DELETE FROM notes WHERE id = '$id'";
            $statement = $this->connect->prepare($query);
            if ($statement->execute()) {
                $reff = new TrashControllerService();
                $reff->fetchTrashNotee($email);

            } else {
                $data = array(
                    "error" => "202",
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


        /**
     * @method restoreDeletedNote
     * @return void
     */
    public function restoreDeletedNote($id, $email)
    {
        $headers = apache_request_headers();
        $token   = explode(" ", $headers['Authorization']);
        $reff    = new JWT();
        if ($reff->verify($token[0])) {
            $ref           = new DatabaseConnection();
            $this->connect = $ref->Connection();
            $query         = "UPDATE notes SET isDeleted = '0' where id = '$id'";
            $statement     = $this->connect->prepare($query);
            if ($statement->execute()) {
                /**
                 * @var string $query has query to select deleted notes data from database
                 */
                $query = "SELECT * FROM notes where email='$email' and isDeleted = '1' order by dragId desc";
                /**
                 * @var string $statement holds statement object
                 */
                $statement = $this->connect->prepare($query);
                $statement->execute();
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
                    "error" => "202",
                );
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

    /**
 * @method fetchTrashNotee()
 * @param email
 * @return void
 */
public function fetchTrashNotee($email)
{
    $headers = apache_request_headers();
    $token   = explode(" ", $headers['Authorization']);

    $reff = new JWT();
    if ($reff->verify($token[0])) {

        /**
         * @var string $query has query to select deleted notes data from database
         */
        $query = "SELECT * FROM notes where email='$email' and isDeleted = '1' order by id desc";
        /**
         * @var string $statement holds statement object
         */
        $statement = $this->connect->prepare($query);
        $statement->execute();
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
}
}

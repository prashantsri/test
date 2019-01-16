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

 class ArchiveService
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
     * @var string base64
     */
    public $constants="";
    // public $serviceReference = "";
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
 

    public function noteSaveImage($url, $email, $id)
    {
        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        $file          = base64_decode($url);
        /**
         * @var string $query has query to update the user profile pic
         */
        $query     = "UPDATE notes  SET `image` = :file  where `email`= :email  and `id`= :id ";
        $statement = $this->connect->prepare($query);
        $statement->execute(array(
            ':file'  => $file,
            ':email' => $email,
            ':id'    => $id));
            
        if ($statement->execute(array(
            ':file'  => $file,
            ':email' => $email,
            ':id'    => $id))) {
        } else {
            $data = array(
                "message" => "203",
            );
            print json_encode($data);

        }
    }

    /**
     * @method userNotes() fetch data from the database
     * @return void
     */
    public function userNotes($email)
    {
        /**
         * @var string $ref holds DatabaseConnection class object
         */
        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to select the all the notes
         */
        $query = "SELECT * FROM notes where  isArchive = '1' and isDeleted='0' and (email = '$email' or id in ( SELECT noteId from collabarator WHERE email='$email') )  order by dragId desc ";

        /**
         * @var string $statement holds statement object
         */
        $statement = $this->connect->prepare($query);
        $temp      = $statement->execute();
        /**
         * @var array $arr to store result
         */
    
        $arr = $statement->fetchAll(PDO::FETCH_ASSOC);
    
        for ($i = 0; $i < count($arr); $i++) {
            $tes=base64_encode($arr[$i]['image']);
            //$arr[$i]['image'] = $this->constants->base64.base64_encode($arr[$i]['image']);
            $arr[$i]['image'] = "data:image/jpeg;base64,".base64_encode($arr[$i]['image']);
        }
        
        /**
         * returns json array response
         */
        print json_encode($arr);

       // return "200";
    }
    /**
     * @method changeDateTime() function to update the remainder date and time
     * @return void
     */
    public function changeDateTime($id, $presentDateTime)
    {

        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to update the remainder
         */
        $query     = "UPDATE notes SET remainder = '$presentDateTime' where id = '$id'";
        $statement = $this->connect->prepare($query);
        $statement->execute();
    }

    /**
     * @method changeColor() to change the note color
     * @return void
     */
    public function changeColor($id, $color)
    {

        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to set the color to user notes
         */
        $query     = "UPDATE notes SET color = '$color' where id = '$id'";
        $statement = $this->connect->prepare($query);
        $statement->execute();

    }
    
     /**
     * @method curdopration() to change the note color
     * @return void
     */
    public function curdopration($id, $data,$flag)
    {

        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to set the color to user notes
         */ 
        if($flag=="color")
        {
            $query     = "UPDATE notes SET color = '$data' where id = '$id'";
        }
        if($flag=="Archive")
        {
            $query         = "UPDATE notes SET isArchive = '0' where id = '$id'";           
            $query1="SELECT email from notes where id='$id'";
        }
        
        if($flag=="delete_Reminder")
        {
            $query="UPDATE notes SET remainder='undefined' where id ='$id'";
            $query1="SELECT email from notes where id='$id'";
        }
       // $query     = "UPDATE notes SET color = '$color' where id = '$id'";
        $statement = $this->connect->prepare($query);
        $statement->execute();
        $statement1 = $this->connect->prepare($query1);       
        $statement1->execute();
        $email = $statement1->fetch();
        $email=$email['email'];
        $reff      = new Archiveservice();
        $reff->userNotes($email);

    }
 }
 
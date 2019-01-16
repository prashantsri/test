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

 class NotesControllerService
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
    /**
     * @method createNotes() insert data into the database
     * @return void
     */
    public function createNotes($remainder, $isHaveCollabarator, $label, $title, $notes, $email, $color, $isArchive,$image)
    {
        $headers = apache_request_headers();
        $token   = explode(" ", $headers['Authorization']);
        $reff    = new JWT();

        if ($reff->verify($token[0])) 
        {
            /**
             * @var string $query has query to Insert data into database (notes) table name
             */
           
            if($remainder !='undefined' || $title!="" || $notes !=""  || $image !="")
            {
                
                /**
                 * @var string $query has query to Insert data into database (notes) table name
                 */
                $query = "INSERT INTO notes (email,title,notes,remainder,isArchive,color,label) VALUES('$email','$title','$notes','$remainder','$isArchive','$color','$label')";
                /**
                 * @var string $statement holds statement object
                 */
                $statement = $this->connect->prepare($query);
                if ($statement->execute()) 
                {
                    $query     = " SELECT COUNT(id) FROM notes WHERE email ='$email' ";
                    $statement = $this->connect->prepare($query);
                    $countid    = $statement->execute();
                    $dragId    = $statement->fetchColumn();
                   // $dragId    = $statement->fetch(PDO::FETCH_ASSOC);
                   // $dragId    = $dragId['id'];
                    $query     = "UPDATE notes SET dragId = '$dragId' where id = '$dragId' ";
                    $statement = $this->connect->prepare($query);
                    $countid    = $statement->execute();
                    if($image !="")
                    {
                        $query     = " SELECT MAX(id) id FROM notes";
                        $statement = $this->connect->prepare($query);
                        $statement->execute();
                        $id=$statement->fetch();
                        $id=$id['id'];
                        $this->noteSaveImage($image,$email,$id)     ;   
                        
                        
                    }
                    $reff      = new NotesControllerService();
                    $reff->userNotes($email);
                }
                
                else 
                {
                    $data = array(
                        "error" => "202",
                    );
                    /**
                     * returns json array response
                     */
                    print json_encode($data);
                }
            }
            else{
                
                $data = array(
                    "error" => "202",
                );
                /**
                 * returns json array response
                 */
                print json_encode($data);
            }
        } 
        
        else 
        
        {
            $data = array(
                "error" => "404",
            );
            /**
             * returns json array response
             */
            print json_encode($data);
        }

       
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
        $query = "SELECT * FROM notes where  isArchive = '0' and isDeleted='0' and (email = '$email' or id in ( SELECT noteId from collabarator WHERE email='$email') )  order by dragId desc ";

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
            $query         = "UPDATE notes SET isArchive =  $data where id = '$id'";           
        }
        
        if($flag=="delete_Reminder")
        {
            $query="UPDATE notes SET remainder='undefined' where id ='$id'";
          
        }
        if($flag=="pin")
        {
            $query="UPDATE NOTES SET ispin=$data where id='$id'";
        }
        if($flag=="delete_note")
        {
            $query="UPDATE NOTES SET isDeleted='1' where id='$id'";
        }
       // $query     = "UPDATE notes SET color = '$color' where id = '$id'";
        $statement = $this->connect->prepare($query);
       
        $statement->execute();
        $query1="SELECT email from notes where id='$id'";
        $statement1 = $this->connect->prepare($query1);
        $statement1->execute();
        $email = $statement1->fetch();
        $email=$email['email'];
  
            $reff      = new NotesControllerService();
            $reff->userNotes($email);
       
     

    }
    /**
 * @method changeLabel() update the old label
 * @return void
 */
public function changeLabel($name, $id, $email)
{
    $ref           = new DatabaseConnection();
    $this->connect = $ref->Connection();
    /**
     * @var string $query has query to update new label to old
     */
    $query     = "UPDATE label SET name = '$name' where id = '$id'";
    $statement = $this->connect->prepare($query);
    if ($statement->execute()) {
        $reff = new NotesControllerService();
        $reff->saveLabels($email);

    } else {
        $data = array(
            "error" => "404",
        );
        /**
         *  returns json array response
         */
        print json_encode($data);
        return "404";
    }

}


/**
 * @method addLabel() add labels to the user
 * @return void
 */
    public function addLabel($label, $email)
    {
        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        $reff          = new NotesControllerService();
        $check         = $reff->checkLabel($label, $email);
        if ($email != '' && $check) {
            /**
             * @var string $query has query to Insert data into database (label) table name
             */
            $query     = "INSERT INTO label (name,email) VALUES('$label','$email')";
            $statement = $this->connect->prepare($query);
            if ($statement->execute()) {
                $reff = new NotesControllerService();
                $reff->saveLabels($email);

            } else {
                $data = array(
                    "error" => "404",
                );
                /**
                 *  returns json array response
                 */
                print json_encode($data);
            }} else {
            $reff = new NotesControllerService();
            $reff->saveLabels($email);

        }

    }
    /**
 * @method checkLabel() insert data into the database
 * @return boolean
 * @param label
 * @param email
 */
    public function checkLabel($label, $email)
    {
        /**
         * @var string $query has query to select all labels
         */
        $query     = "SELECT * FROM label WHERE email='$email' ORDER BY id";
        $statement = $this->connect->prepare($query);
        $statement->execute();
        $arr = $statement->fetchAll(PDO::FETCH_ASSOC);
        foreach ($arr as $titleData) {
            if ($titleData['name'] == $label) {
                return false;
            }
        }
        return true;
    }

    /**
 * @method saveLabelss() fetch all labels
 * @return void
 */
    public function saveLabels($email)
    {

        /**
         * @var string $query has query to select label data from database (label) table name
         */
        $query = "SELECT * FROM label where email = '$email' order by id desc";
        /**
         * @var string $statement holds statement object
         */
        $statement = $this->connect->prepare($query);
        $statement->execute();
        /**
         * @var array $arr to store result
         */
        $arr = $statement->fetchAll(PDO::FETCH_ASSOC);
        /**
         * returns json array response
         */
        print json_encode($arr);
    }

    /**
     * @method deleteLabel() delete the label
     * @return void
     */
    public function deleteLabel($id, $email)
    {
        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to select all label
         */
        $query     = "SELECT * FROM label WHERE id = '$id' and email='$email'";
        $statement = $this->connect->prepare($query);
        $statement->execute();
        $arr  = $statement->fetch(PDO::FETCH_ASSOC);
        $name = $arr['name'];
        /**
         * @var string $query has query to set the label
         */
        $query     = "UPDATE notes SET label = null where label = '$name'";
        $statement = $this->connect->prepare($query);
        $statement->execute();
        /**
         * @var string $query has query to delete the label
         */
        $query     = "DELETE FROM label WHERE id = '$id'";
        $statement = $this->connect->prepare($query);
        if ($statement->execute()) {
            $reff = new NotesControllerService();
            $reff->saveLabels($email);

        } else {
            $data = array(
                "error" => "404",
            );
            /**
             *  returns json array response
             */
            print json_encode($data);
            return "404";
        }

    }

    /**
     * @method noteLabel() add label
     * @return void
     */
    public function noteLabel($id, $label)
    {

        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to add label to the notes
         */

         $query ="SELECT * from labelnotes where labelname='$label' and noteid='$id'  " ;
         $statement = $this->connect->prepare($query);
         $vallll= $statement->execute();
         $count  = $statement->fetch(PDO::FETCH_ASSOC);
         if($count==0 && $label != "abel")
         {
            $query ="INSERT INTO labelnotes (labelname,noteid) values ('$label','$id')";
            $statement = $this->connect->prepare($query);
            $statement->execute();
         }

         if($id=='id')
         {
            $query ="SELECT * from labelnotes";
         }else if($id=="id1")
         {
            $query ="SELECT * FROM labelnotes where  labelname='$label'";
         }        
         else {
            $query ="SELECT * from labelnotes where noteid='$id'  " ;
         }
         

         /**
          * @var string $statement holds statement object
          */
         $statement = $this->connect->prepare($query);
         $temp      = $statement->execute();
         /**
          * @var array $arr to store result
          */
     
         $arr = $statement->fetchAll(PDO::FETCH_ASSOC);

          /**
         * returns json array response
         */
        print json_encode($arr);

    }


    /**
     * @method deleteNoteLabel() delete the label note
     * @return void
     */
    public function deleteNoteLabel($id)
    {

        $ref           = new DatabaseConnection();
        $this->connect = $ref->Connection();
        /**
         * @var string $query has query to update the label to null
         */
        $query ="DELETE from labelnotes WHERE id='$id'";
   
        $statement = $this->connect->prepare($query);
       $check= $statement->execute();
       $this->service=new NotesControllerService();

       $this->service->noteLabel('id','');
       
    }
 }
 
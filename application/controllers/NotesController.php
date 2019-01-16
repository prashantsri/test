<?php
/*******************************************************************
 * @discription API for Notes
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
');

include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/NotesControllerService.php";

/**
 * class Api notes contoller methods
 */

class NotesController
{
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
     * @var string $serviceReference serviceReference
     */
    
     public $serviceReference = "";

    /**
     * @method constructor to establish the service connection
     * @return void
     */
     public function __construct()
     {
        $this->serviceReference=new NotesControllerService();
     }

     /**
     * @method createNotes() insert data into the database
     * @return void
     */
    public function createNotes()
    {
        $title              = $_POST["title"];
        $notes              = $_POST["notes"];
        $email              = $_POST["email"];
        $color              = $_POST["color"];
        $isArchive          = $_POST["isArchive"];
        $label              = $_POST["label"];
        $isHaveCollabarator = $_POST["isHaveCollabarator"];
        $remainder          = $_POST["remainder"];
        $image              =$_POST["image"];
        if($title=="null" || $title =="undefined")
        {
            $title="";
        }
        if($notes=="null" || $notes =="undefined")
        {
            $notes="";
        }
        
        $this->serviceReference->createNotes($remainder, $isHaveCollabarator, $label, $title, $notes, $email, $color, $isArchive,$image);
       
      }

      /**
     * @method userNotes() fetch data from the database
     * @return void
     */
        public function userNotes()
        {

            $email = $_POST["email"];
            return $this->serviceReference->userNotes($email);
        }

        /**
 * @method changeDateTime() function to update the remainder date and time
 * @return void
 */
    public function changeDateTime()
    {
        $id              = $_POST["id"];
        $presentDateTime = $_POST["presentDateTime"];
        $this->serviceReference->changeDateTime($id, $presentDateTime);
    }

    /**
     * @method changeColor() to change the note color
     * @return void
     */
    public function changeColor()
    {

        $id    = $_POST["id"];
        $color = $_POST["color"];
        $this->serviceReference->changeColor($id, $color);

    }

      /**
     * @method curdopration() to change the note color
     * @return void
     */
    public function curdopration()
    {

        $id    = $_POST["id"];
        $data = $_POST["data"];
        $flag=$_POST["flag"];
        $this->serviceReference->curdopration($id, $data,$flag);

    }

    /**
 * @method changeLabel() update the old label
 * @return void
 */
public function changeLabel()
{
    $name  = $_POST["name"];
    $id    = $_POST["id"];
    $email = $_POST["email"];
    return $this->serviceReference->changeLabel($name, $id, $email);

}

/**
 * @method addLabel() add labels to the user
 * @return void
 */
    public function addLabel()
    {

        $label = $_POST["label"];
        $email = $_POST["email"];
        $this->serviceReference->addLabel($label, $email);
    }
    /**
     * @method saveLabels() save the entered labels
     * @return void
     */
    public function saveLabels()
    {
        $email = $_POST["email"];
        $this->serviceReference->saveLabels($email);
    }

        /**
     * @method deleteLabel() delete the label
     * @return void
     */
    public function deleteLabel()
    {

        $id    = $_POST["id"];
        $email = $_POST["email"];
        return $this->serviceReference->deleteLabel($id, $email);
    }

    /**
     * @method noteLabel() add label
     * @return void
     */
    public function noteLabel()
    {

        $id    = $_POST["id"];
        $label = $_POST["label"];
        $this->serviceReference->noteLabel($id, $label);

    }

    /**
     * @method deleteNoteLabel() delete the label note
     * @return void
     */
    public function deleteNoteLabel()
    {

        $id    = $_POST["id"];
       
        $this->serviceReference->deleteNoteLabel($id);

    }

}

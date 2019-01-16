<?php
/*******************************************************************
 * @discription API for Collabarator
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");

include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/CollabaratorService.php";

/**
 * class Api Collabarator notes contoller methods
 */

class Collabarator
{

/**
 * @var string $id id
 * @var string $email email
 */
/**
 * @var string $serviceReference serviceReference
 */

    public $serviceReference = "";
/**
 * @method constructor to establish the database connection
 * @return void
 */

    public function __construct()
    {
        $this->serviceReference = new CollabaratorService();
    }
/**
 * @method addCollabarator() to add the collabarator
 * @return void
 */
    public function addCollabarator()
    {

        $id               = $_POST["id"];
        $owneremail            = $_POST["owneremail"];
        $shareemail = $_POST["shareemail"];
         $this->serviceReference->addCollabarator($id, $owneremail, $shareemail);
    }
/**
 * @method fetchCollabarator() fetch all collabarator
 * @return void
 */
    public function fetchCollabarator()
    {

        $id    = $_POST["id"];
        $email = $_POST["email"];
          $this->serviceReference->fetchCollabarator($id, $email);

    }
/**
 * @method deleteCollabaratorData() delete the collabarator
 * @return void
 */
    public function deleteCollabaratorData()
    {
        $collId       = $_POST["collId"];
        $noteId       = $_POST["noteId"];
        $email        = $_POST["email"];
        $currentEmail = $_POST["currentEmail"];
          $this->serviceReference->deleteCollabaratorData($collId, $noteId, $currentEmail, $email);

    }
/**
 * @method fetchOwner() fetch the owner of the note
 * @return void
 */
    public function fetchOwner()
    {
        $id = $_POST["id"];
        $email=$_POST["email"];
          $this->serviceReference->fetchOwner($id,$email);
    }
/**
 * @method collabaratorsOfNotes() fetch all collabarator
 * @return void
 */
    public function collabaratorsOfNotes()
    {

        $email = $_POST["email"];
            $this->serviceReference->collabaratorsOfNotes($email);

    }
/**
 * @method deleteMainCollabaratorData() delete the main collabarators
 * @return void
 */
    public function deleteMainCollabaratorData()
    {
        $noteId       = $_POST["noteId"];
        $email        = $_POST["email"];
        $currentEmail = $_POST["currentEmail"];
          $this->serviceReference->deleteMainCollabaratorData($noteId, $email, $currentEmail);
    }
/**
 * @method deleteAllMainCollabaratorData() delete all collabarator
 * @return void
 */
    public function deleteAllMainCollabaratorData()
    {

        $noteId = $_POST["noteId"];
        $email  = $_POST["email"];
          $this->serviceReference->deleteAllMainCollabaratorData($noteId, $email);
    }


}

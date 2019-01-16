<?php
/*******************************************************************
 * @discription API for Notes
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
');

include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/Archiveservice.php";

/**
 * class Api notes contoller methods
 */

class ArchiveController
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
        $this->serviceReference = new ArchiveService();
    }

    /**
     * @method userNotes() fetch data from the database
     * @return void
     */
    public function userNotesArc()
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
        $id = $_POST["id"];
        $presentDateTime = $_POST["presentDateTime"];
        $this->serviceReference->changeDateTime($id, $presentDateTime);
    }

    /**
     * @method changeColor() to change the note color
     * @return void
     */
    public function changeColor()
    {

        $id = $_POST["id"];
        $color = $_POST["color"];
        $this->serviceReference->changeColor($id, $color);

    }

    /**
     * @method curdopration() to change the note color
     * @return void
     */
    public function curdoprationArc()
    {

        $id = $_POST["id"];
        $data = $_POST["data"];
        $flag = $_POST["flag"];
        $this->serviceReference->curdopration($id, $data, $flag);

    }

    

}

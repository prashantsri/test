<?php
/*******************************************************************
 * @discription API for Trash
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
');

include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/TrashControllerService.php";


/**
 * class Api notes contoller methods
 */
/**
 * @var string $email email
 * @var string $id id
 */

class TrashController
{
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
        $this->serviceReference = new TrashControllerService();

    }

    /**
     * @method fetchTrashNote()
     * @return void
     */
    public function fetchTrashNote()
    {
        $email = $_POST["email"];
        $this->serviceReference->fetchTrashNote($email);
    }


     /**
     * @method deleteNote()
     * @return void
     */
    public function deleteNote()
    {

        $id    = $_POST["id"];
        $email = $_POST["email"];
        $this->serviceReference->deleteNote($id, $email);

    }
    /**
     * @method restoreDeletedNote
     * @return void
     */
    public function restoreDeletedNote()
    {

        $id    = $_POST["id"];
        $email = $_POST["email"];
        $this->serviceReference->restoreDeletedNote($id, $email);
    }
}
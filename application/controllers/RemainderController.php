<?php
/*******************************************************************
 * @discription API for Remainder
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/RemainderControllerService.php";

/**
 * class Api remainder contoller methods
 */

class RemainderController
{

    /**
     * @var string $serviceReference serviceReference
     */

    public $serviceReference = "";
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
     * @method constructor to establish the service connection
     * @return void
     */
        public function __construct()
        {
            $this->serviceReference = new RemainderControllerService();

        }
        /**
         * @method fetchRemainderNote() to fetch the remainder notes
         * @return void
         */
            public function fetchRemainderNote()
            {

                $email = $_POST["email"];
                $this->serviceReference->fetchRemainderNote($email);
            }

}
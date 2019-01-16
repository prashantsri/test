<?php
/*******************************************************************
 * @discription API for labels
 ********************************************************************/

header('Access-Control-Allow-Origin: *');
header("Content-type: image/gif");
header("Access-Control-Allow-Headers: Authorization");

include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/LabelControllerService.php";
class LabelController
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
         $this->serviceReference=new LabelControllerService();
     }
     /**
 * @method fetchLabelNote() fetch label notes
 * @return void
 */
    public function fetchLabelNote()
    {

        $label = $_POST["label"];
        $email = $_POST["email"];
        $this->serviceReference->fetchLabelNote($label, $email);
    }
}

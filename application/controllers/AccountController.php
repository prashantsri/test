<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");

/*********************************************************************
 * @discription  Controller API
 *********************************************************************/
// require 'phpmailer/index.php';
include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/service/Accountservice.php";

class AccountController extends CI_Controller
{
    /**
     * @var string $serviceReference serviceReference
     */
    public $serviceReference = "";

    /**
     * constructor establish DB connection
     */
    public function __construct()
    {
        parent::__construct();
        $this->serviceReference = new Accountservice();
    }

    /**
     * @method registration() Adds data into the database
     * @return void
     */
    public function registration()
    {

        $name = $_POST["username"];
        $email = $_POST["email"];
        $number = $_POST["mobilenumber"];
        $pass = $_POST["password"];
        /**
         * adding email to the chache
         */
        return $this->serviceReference->registration($name, $email, $number, $pass);
    }

    /**
     * @method login() login in to fundo logic
     * @return void
     */
    public function login()
    {
        $email = $_POST["email"];
        $pass = $_POST["password"];

        $key = explode("@", $email);
        $key = $key[0];
        /**
         * adding email to redis
         */
        // $this->load->library('Redis');
        // $redis = $this->redis->config();
        // $redis->set($key, $email);
        return $this->serviceReference->login($email, $pass);

    }

    /**
     * @method veryfyEmailId() verify the email and send verify link to user
     * @return void
     */
    public function veryfyEmailId()
    {
        $token = $_POST["token"];
        return $this->serviceReference->veryfyEmailId($token);
    }


    /**
     * @method forgotPassword() sending resetting password ink to registered mail
     * @return void
     */
    public function forgotPassword()
    {
        $email = $_POST["email"];
        return $this->serviceReference->forgotPassword($email);

    }
    /**
     * @method getEmailId() ge the forgoten email id
     * @return void
     */
    public function getEmailId()
    {
        $token = $_POST["token"];
        return $this->serviceReference->getEmailId($token);

    }


    /**
     * @method resetPassword() resets the pass word of corresesponding email
     * @return void
     */
    public function resetPassword()
    {
        $token = $_POST["token"];
        $pass  = $_POST["pass"];
        return $this->serviceReference->resetPassword($token, $pass);

    }

}


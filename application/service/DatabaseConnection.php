<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Authorazation');
include "C:/xampp/htdocs/php_CodeIgniter/CodeIgniter/application/static/Constant.php";
class DatabaseConnection
{
    /**
     * @method DB Connection establish
     * @return PDO object
     */
    public function Connection()
    {
        $data = new Constant();
        //return new PDO("$obj->database:host=$obj->host;dbname=$obj->databaseName", "$obj->user", "$obj->password");
        return new PDO("$data->database:host=$data->host;dbname=$data->dbname", "$data->user", "$data->password");
        //  return new PDO('mysql:host=localhost;dbname=test', 'root', 'root');

    }
}

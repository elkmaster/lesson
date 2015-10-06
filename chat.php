<?php
/**
 * Created by PhpStorm.
 * User: Vlad
 * Date: 02.10.2015
 * Time: 18:21
 */

$message = $_GET['m'];

if ($message != ''){

    switch ($message) {
        case "hello":
            echo "hello friend!";
            break;
        case "how are you":
            echo "fine, thanks";
            break;
        default:
            echo "sorry, I don't understand you";
    }

}

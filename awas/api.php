<?php
session_start();

header('Access-Control-Allow-Origin: https://www.yigitusta.com', false); //production

//header('Access-Control-Allow-Origin: http://localhost:8080');    //dev

header('Access-Control-Allow-Credentials: true'); 
header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $_SESSION["aim"] = rand(1,100);
    $_SESSION["number"] = 0;
    $response["aim"] = $_SESSION["aim"];
    $response["number"] = $_SESSION["number"];

    if (isset($_SESSION["timeswon"])) {
        $response["timeswon"] = $_SESSION["timeswon"];
    }
    if (isset($_SESSION["timeslost"])) {
        $response["timeslost"] = $_SESSION["timeslost"];
    }
    echo json_encode($response);
} else if (isset($_POST["add"])) {
    $add = intval($_POST["add"]);
    $_SESSION["number"] += $add;
    $response["added"] = $add;
    $response["aim"] = $_SESSION["aim"];
    $response["number"] = $_SESSION["number"];
    $response["gameover"] = "false";

    if ($_SESSION["number"] >= $_SESSION["aim"]) {
        if ($_SESSION["number"] == $_SESSION["aim"]) {
            $response["gameover"] = "win";

            if (!isset($_SESSION["timeswon"])) {
                $_SESSION["timeswon"] = 1;
            }else {
                $_SESSION["timeswon"]++;
            }

        } else {
            $response["gameover"] = "lose";

            if (!isset($_SESSION["timeslost"])) {
                $_SESSION["timeslost"] = 1;
            }else {
                $_SESSION["timeslost"]++;
            }
        }
    }
    echo json_encode($response);
}

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allItems = mysqli_query($db_conn, "SELECT * FROM `item`");
if (mysqli_num_rows($allItems) > 0) {
    $all_items = mysqli_fetch_all($allItems, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "items" => $all_items]);
} else {
    echo json_encode(["success" => 0]);
}

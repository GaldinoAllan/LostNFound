<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->nome)
    && isset($data->local)
    && isset($data->data)
    && isset($data->descricao)
    && isset($data->categoria)
    && isset($data->contido)
    && is_numeric($data->id)
    && !empty(trim($data->nome))
    && !empty(trim($data->local))
    // && !empty(trim($data->data))
    && !empty(trim($data->descricao))
    && !empty(trim($data->categoria))
    && !empty(trim($data->contido))
) {
    $nome = mysqli_real_escape_string($db_conn, trim($data->nome));
    $local = mysqli_real_escape_string($db_conn, trim($data->local));
    $descricao = mysqli_real_escape_string($db_conn, trim($data->descricao));
    $categoria = mysqli_real_escape_string($db_conn, trim($data->categoria));
    $contido = mysqli_real_escape_string($db_conn, trim($data->contido));
    $originalData = mysqli_real_escape_string($db_conn, $data->data);
    $date = date('Y-m-d', strtotime($originalData));

    $updateItem = mysqli_query($db_conn, "UPDATE `item` SET `nome`='$nome', `local`='$local',`data`='$date', `descricao`='$descricao',`categoria`='$categoria', `contido`='$contido' WHERE `id`='$data->id'");
    if ($updateItem) {
        echo json_encode(["success" => 1, "msg" => "Item Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Item Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}

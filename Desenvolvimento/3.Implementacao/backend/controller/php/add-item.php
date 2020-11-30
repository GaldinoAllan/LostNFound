<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->nome)
    && isset($data->local)
    && isset($data->data)
    && isset($data->descricao)
    && isset($data->categoria)
    && isset($data->contido)
    && !empty(trim($data->nome))
    && !empty(trim($data->local))
    && !empty(trim($data->data))
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
    $data = date('Y-m-d', strtotime($originalData));

    $insertItem = mysqli_query($db_conn, "INSERT INTO `item`(`nome`, `local`, `data`, `descricao`, `categoria`, `contido`) VALUES('$nome','$local','$data','$descricao','$categoria','$contido')");

    if ($insertItem) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success" => 1, "msg" => "Item Inserted.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Item Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}

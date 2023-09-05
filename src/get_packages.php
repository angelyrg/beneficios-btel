<?php
require_once("utils/Beneficio.php");
$beneficio = new Beneficio();

$tokenRequest = $beneficio->getToken();

if ($tokenRequest['status'] == 'FAIL'){
    echo $tokenRequest['message'];
    exit;
}

$token =  $tokenRequest['token'];

$filter_data = $_POST['filter_type'];

$acumulatePointsRequest = $beneficio->getPackages($token, $filter_data);

echo json_encode($acumulatePointsRequest);

?>
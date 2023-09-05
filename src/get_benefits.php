<?php
require_once("utils/Beneficio.php");
$beneficio = new Beneficio();

$tokenRequest = $beneficio->getToken();

if ($tokenRequest['status'] == 'FAIL'){
    echo $tokenRequest['message'];
    exit;
}

$token =  $tokenRequest['token'];
$bpoints = $_POST['input_points'];
$package_id = $_POST['packages_options'];

$benefits = $beneficio->calculateBenefits($token, $bpoints, $package_id);

// $benefits = $beneficio->calculateBenefits($token, 100, '64edab1220c9a8905f0d02c2');
// $benefits = $beneficio->calculateBenefits($token, 1200, '620f1fe1bd5dad685c41529d');



echo json_encode($benefits);

?>
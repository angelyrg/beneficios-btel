<?php
require_once("utils/Beneficio.php");
$beneficio = new Beneficio();

$tokenRequest = $beneficio->getToken();

if ($tokenRequest['status'] == 'FAIL'){
    echo $tokenRequest['message'];
    exit;
}

$token =  $tokenRequest['token'];

$levelsRequest = $beneficio->getInfoExChange($token);

echo json_encode($levelsRequest);

?>
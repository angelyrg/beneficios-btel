<?php
header("Access-Control-Allow-Origin: *");

require_once("utils/Beneficio.php");
$beneficio = new Beneficio();

$levelsRequest = $beneficio->getAds();

echo json_encode($levelsRequest);

?>
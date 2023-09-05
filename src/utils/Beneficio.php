<?php
require_once "CurlRequests.php";

class Beneficio extends CurlRequests{

    public $api_url_base = "https://biteltest.coquan.vn/api/Project/MyBitel/API";
    
    public function getToken(){
        $tokenUrl = $this->api_url_base . "/User/login";
        $loginData = ["username" => "api_bitel", "password" => "fhKjk!9fjJFS432cvm89%$#fds@"];

        $tokenResult = $this->postRequest($tokenUrl, $loginData);

        $response = [];
        if (!$tokenResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($tokenResult);
            
            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect login data.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "token"=>$resultObject->token);
            }
        }

        return $response;
    }

    public function getLevels($token){
        $levelsParams = array("token" => $token);
        $levelsUrl = $this->api_url_base . "/Loyalty/MobileMenu/select";

        $requestResult = $this->getRequest($levelsUrl, $levelsParams);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }

    public function getAds(){
        $full_url = "https://loyalty.bitel.com.pe/api/coup_category";
        $data = [
            "clientID" => "5977422",
            "categoryID" => "2",
            "level" => "1",
            "home" => "1",
            "pageNumber" => "1",
            "couponNumber" => "10",
        ];

        $requestResult = $this->postRequest($full_url, $data);
        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");
        }else{
            $resultObject = json_decode($requestResult);
            
            if ($resultObject->code != '0'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
                
            }else{
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->couponList);
            }
        }


        // $resultObject = json_decode($requestResult);
        // $response = array("status"=>"SUCCESS", "data"=>$resultObject->couponList);        

        return $response;
    }

    public function getInfoExChange($token){
        $params = array("token" => $token);
        $full_url = $this->api_url_base . "/Loyalty/LoyaltyPoint/getInfoExChange";

        $requestResult = $this->getRequest($full_url, $params);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }

    public function getRatioInfo($token){
        $params = array("token" => $token);
        $full_url = $this->api_url_base . "/Loyalty/LoyaltyPoint/getRatio";

        $requestResult = $this->getRequest($full_url, $params);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }

    public function getAcumulatePoints($token){
        $levelsUrl = $this->api_url_base . "/Loyalty/LoyaltyPoint/selectAll";
        $levelsParams = array(
            "filters[type]"=>"accumulated",
            "token" => $token
        );

        $requestResult = $this->getRequest($levelsUrl, $levelsParams);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }

    public function getMinusPoints($token){
        $levelsUrl = $this->api_url_base . "/Loyalty/LoyaltyPoint/selectAll";
        $levelsParams = array(
            "filters[type]"=>"minus",
            "token" => $token
        );

        $requestResult = $this->getRequest($levelsUrl, $levelsParams);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }

    public function getPackages($token, $filter_data="all"){
        $levelsUrl = $this->api_url_base . "/Loyalty/PackageGroup/selectAll";
        $levelsParams = array(
            "filters[type]"=>$filter_data,
            "token" => $token
        );

        $requestResult = $this->getRequest($levelsUrl, $levelsParams);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }

    public function calculateBenefits($token, $bpoints, $packageId){
        $levelsUrl = $this->api_url_base . "/Loyalty/MobilePackage/selectAll";
        $levelsParams = array(
            "filters[BPoint]"=>$bpoints,
            "filters[packageGroupIds]"=>$packageId,
            "token" => $token
        );

        $requestResult = $this->getRequest($levelsUrl, $levelsParams);

        return json_decode($requestResult);

        $response = [];

        if (!$requestResult){
            $response = array("status"=>"FAIL", "message"=>"Service request failed.");

        }else{
            $resultObject = json_decode($requestResult);

            if ($resultObject->status == 'FAIL'){
                $response = array("status"=>"FAIL", "message"=>"Incorrect token.");
    
            }else if ($resultObject->status == 'SUCCESS'){
                $response = array("status"=>"SUCCESS", "data"=>$resultObject->data);
            }
        }

        return $response;
    }


}

?>
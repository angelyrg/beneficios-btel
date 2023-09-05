<?php

class CurlRequests{

    public function postRequest($url, $data){
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        $response = curl_exec($ch);
        curl_close($ch);
        if(!$response) {
            return false;
        }else{
            return $response;
        }
    }

    public function getRequest($url, $params){

        $fullUrl = $url . '?' . http_build_query($params);
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, $fullUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPGET, true);

        $response = curl_exec($ch);
        curl_close($ch);

        if(!$response) {
            return false;
        }else{
            return $response;
        }
    }

}

?>
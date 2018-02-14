<?php

//vi börjar sessionen
$ch = curl_init();

//vi sätter inställningarna 
curl_setopt($ch, CURLOPT_URL, "http://api.sl.se/api2/realtimedepartures.json?key=3a6448ed31e64442a0cd0042191971e5&siteid=9180&timewindow=20");

//vi kör sessionen
curl_exec($ch);

//vi stänger sessionen 
curl_close($ch);
?>
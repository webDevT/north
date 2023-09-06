<?php

$recepient = "karinadesyatnik27@gmail.com";
$sitename = "North";

$name = trim($_POST["name"]);
$lastName = trim($_POST["lastName"]);
$company = trim($_POST["company"]);
$indastry = trim($_POST["indastry"]);
$email = trim(["email"]);
$mobileNumber = trim($_POST["mobileNumber"]);
$msg = trim($_POST["msg"]);
$message = "Name: $name \n Last name: $lastName \n Company: $company \n Indastry: $indastry \n Email: $email \n Mobile Number: $mobileNumber \n Text: $msg";

$pagetitle = "New message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
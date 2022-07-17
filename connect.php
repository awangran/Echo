<?php
   /*  $name = $_POST['name'];
    $type = $_POST['type'];
    $toptype = $_POST['top-type'];
    $bottomtype = $_POST['bottom-type'];
    $shoestype = $_POST['shoes-type'];
    $season = $_POST['season'];
    $dresscode = $_POST['dresscode'];
    $img = $_POST['cover-img'];

    //db connection

    $conn = new mysqli('127.0.0.1', 'ashlee', '0000', 'echo');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into clothes(name, type, toptype, bottomtype, shoestype, season, dresscode, img)
        values(?,?,?,?,?,?,?,?)");
        $stmt->bind_param("sssssssb", $name, $type, $toptype, $bottomtype, $shoestype, $season, $dresscode, $img);
        $stmt->execute();
        echo "clothes registered successfully...";
        $stmt->close();
        $conn->close();
    } */


?> 
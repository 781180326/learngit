<?php
	header("Content-type: text/html; charset=utf-8");
	require_once './connectConfig.php';
	$mysqli = new mysqli(PATH, USERNAME, PASSWORD, DBSNAME);
	if( !$mysqli ->set_charset("utf8")){ die("charset : no set"); }
	$mysqli->query("set names utf8");	
	
	if( isset($_GET['id']) ){
		$id = $_GET['id'];
		
		$query = "select * from scenic where id={$id}";
		$result = $mysqli->query($query);
		$numRows = $result->num_rows;
		$row = $mysqli->fetch_assoc($result);
		echo $row['id'].$row['name'];
		
		
		
		
		$result->free();
	}
	$mysqli->close();
	
?>
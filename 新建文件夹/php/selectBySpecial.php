<?php
	header("Content-type: text/html; charset=utf-8");
	$dbs = mysqli_connect("localhost","root","781180326","webgis");
		   mysqli_query($dbs,"set names utf8");
	if( !$dbs ->set_charset("utf8")){
		die("charset : no set");
	}
	mysqli_query($dbs,"set names utf8");	
	
//	$query = "select img_index,img_num from webgis where id={$_GET['id']}";
	$result = mysqli_query($dbs,$query);
	$row = mysqli_fetch_assoc($result);
	$img_index = $row['img_index'];
	$img_num = $row['img_num'];
	$str = '';
	for($i = $img_index; $i < ($img_num + $img_index); $i++){
		$str .= "image/{$i}.jpg ";
	}
	echo $str;
	
?>

create database LinTongView character set utf8;
create table scenic(
	scenic_id   		int         	primary key auto_increment not null,
	scenic_name 		varchar(100) 	not null,
	scenic_address 		varchar(200),
	scenic_price 		float,
	scenic_opentime 	time,
	scenic_closetime 	time,
	scenic_intro 		text,
	scenic_special_id 	int,
	scenic_imgnum 		int 			not null,
	foreign key(scenic_special_id) references special(special_id)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

create table special(
	special_id 		int primary key auto_increment not null,
	special_type 	varchar(30)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

special={
	0: '历史文化',
	1: '休闲度假',
	2: '地质探索',
	3: '人文艺术',
	4: '红色文化',
	5: '自然风光'
}

scenic=[
	{id:0, name:'兵马俑', address:'陕西省西安市临潼区。。。', price:'60', opentime:'08:00:00', closetime:'18:00:00', intro:'...................', specialId:0, imgNum:8}
]

for in
	mysqli_query



select ...
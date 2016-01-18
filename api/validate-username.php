<?php 

//Connect to the database 

$dbc = new mysqli('localhost', 'root', '', 'live_validation');

// Filter the username
$username = $dbc->real_escape_string( $_POST['username'] );

//Prepare the query 
$sql = "SELECT username FROM users WHERE username = '$username'";

//Run the query 

$result = $dbc->query( $sql );

//If result failed 
if( !$result ) {
	//Query failed 
	echo 'Something went wrong with database';
} elseif( $result->num_rows == 1 ) {
	//Username in use
	echo 'Username already in use';
} else {
	//No results found
	//Username not in use
	echo 'username available';
}
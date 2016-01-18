<?php 

//Connect to the database 

$dbc = new mysqli('localhost', 'root', '', 'live_validation');

// Filter the username
$email = $dbc->real_escape_string( $_POST['email'] );

//Prepare the query 
$sql = "SELECT email FROM users WHERE email = '$email'";

//Run the query 

$result = $dbc->query( $sql );

//If result failed 
if( !$result ) {
	//Query failed 
	echo 'Something went wrong with database';
} elseif( $result->num_rows == 1 ) {
	//Username in use
	echo 'Emailalready in use';
} else {
	//No results found
	//Username not in use
	echo 'Email available';
}
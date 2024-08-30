<?php
// db.php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testzone";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM tests";
$result = $conn->query($sql);

$tests = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tests[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($tests);
$conn->close();
?>
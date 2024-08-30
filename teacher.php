<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <title>TestZone</title>
    <link rel="icon" href="assets/images/page_logo.png">
    
    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-grad-school.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">
    <link rel="stylesheet" href="assets/css/students.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <style>
      .highlight-text {
        font-style: normal;
        font-weight: 900;
        font-size: 6vw;
      }
      .dm {
        color: #f5a425;
      }
      .tm {
        color: white;
      }
      .profile_images {
        border-radius: 50%;
        width: 20rem;
      }
    </style>
</head>








  
<?php
$servername = "localhost";
$username = "root";  // your database username
$password = "";  // your database password
$dbname = "testzone";  // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// if ($_SERVER["REQUEST_METHOD"] == "POST")
if(isset($_POST['submit'])){
    $testName = $_POST['testName'];
    $subject = $_POST['subjectName'];
    $testDate = $_POST['testDate'];
    $totalMarks = $_POST['totalMarks'];
    $totalQues = $_POST['totalQues'];
    
    $totalTime = $_POST['totaltime'];

    $sql = "INSERT INTO tests (test_name, subject, test_date, total_marks, total_questions,total_time)
            VALUES ('$testName', '$subject', '$testDate', $totalMarks, $totalQues,$totalTime)";
            // $rs = mysqli_query($conn,$sql);
    

if ($conn->query($sql) === TRUE) {
  echo "New test created successfully!";
  header("Location: create_test.php"); // Redirect to create_test.php
  exit(); // Stop further script execution
} else {
  
  echo "Error: " . $sql . "<br>" . $conn->error;
  // ... error handling code ...
}


    $conn->close();
}
?>



<body>
  <!--header-->
  <header class="main-header clearfix" role="header">
    <img src="assets/images/navi_bar.png" class="icn menuicn" id="menuicn" alt="menu-icon">
    <div class="logo">
      <a style="margin-left: 3rem;" href="#"><em>Test</em> Zone</a>
    </div>
    <a href="#menu" class="menu-link"><i class="fa fa-bars"></i></a>
    <nav id="menu" class="main-nav" role="navigation">
      <ul class="main-menu">
        <li><a href="teacher.php">Home</a></li>
        <li><a href="test.php">Test</a></li>
      </ul>
    </nav>
  </header>

  <div class="main-container">
    <div class="navcontainer">
      <nav class="nav">
        <div class="nav-upper-options">
          <div class="nav-option option5 slide-option" id="profile">
            <img src="assets/images/profile.png" class="nav-img" alt="Profile">
            <h3>Profile</h3>
          </div>
          <div class="nav-option option4 slide-option" id="create">
            <img src="assets/images/dashboard.png" class="nav-img" alt="Create Test">
            <h3>Create Test</h3>
          </div>
          <div class="nav-option option4 slide-option" id="list">
            <img src="assets/images/institution.png" class="nav-img" alt="View Test">
            <h3>Test List</h3>
          </div>
          <div class="nav-option option6 slide-option" id="details">
            <img src="assets/images/settings.png" class="nav-img" alt="Get Details">
            <h3>Test Details</h3>
          </div>
          <div class="nav-option logout slide-option" id="logout">
            <img src="assets/images/log-out.png" class="nav-img" alt="Logout">
            <h3>Logout</h3>
          </div>
        </div>
      </nav>
    </div>
    <div class="main">
      <div class="box-container">
        <img class="profile_images" src="assets/images/male.png">
        <h2><span class="highlight-text dm">Hii</span> <span class="highlight-text tm">SIR!!!</span></h2>
        <div>
          <h2 style="margin-top: 2rem;text-align: center;">Your Data Report will be uploaded as soon as possible</h2>
        </div>
        <div> 
          <img class="profile_images" src="assets/images/chart.png">
        </div>
      </div>
    </div>
  </div>

  <script src="assets/js/student.js"></script>
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <script src="assets/js/dynamics_tchr.js"></script>  
  <script src="assets/js/fetch_tests.js"></script>
  

  </body>
</html>

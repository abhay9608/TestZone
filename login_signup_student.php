<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
   <title>TestZone</title>
    <link rel="stylesheet" href="assets/css/login_signup.css" />
    <link rel="icon" href="assets/images/page_logo.png">

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-grad-school.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/gender.css">




  
  </head>
  <body styles="background-color:rgba(22,34,57,0.95)">


     <!--header-->
  <header class="main-header clearfix" role="header">
    <div class="logo">
      <a style="margin-left: 3rem;" href="#"><em>Test</em> Zone</a>
    </div>
    <a href="#menu" class="menu-link"><i class="fa fa-bars"></i></a>
    <nav id="menu" class="main-nav" role="navigation">
      <ul class="main-menu">
        <li><a href="index.php">Home</a></li>
      </ul>
    </nav>
  </header>



    <section class="wrapper">
      <div class="form login">
        <header>Login</header>
        <form action="student.php">  
          
          <input type="name" placeholder="Name" required />   
          <input class="ID" type="number" placeholder="ID number" required />
          
          <input type="submit" value="login" />
        </form>
      </div>

      <div class="form signup">
        <header>Signup</header>
        <form action="student.php"> 
          <input class="name" type="text" placeholder="First name" required />
          <input class="name" type="text" placeholder="Last name" required /> 
          <input class="ID" type="number" placeholder="ID number" required /> 
          <input class="roll" type="number" placeholder="Roll number" required />
            
          
          
          <!-- radio button to select gender -->
            <div class="normal-container">
              <div class="smile-rating-container">
                <div class="smile-rating-toggle-container">
                    <input id="meh" name="satisfaction" type="radio" /> 
                    <input id="fun" name="satisfaction" type="radio" /> 
                    <label for="meh" class="rating-label rating-label-meh">Male</label>
                    <div class="smile-rating-toggle"></div>
                    <div class="rating-eye rating-eye-left"></div>
                    <div class="rating-eye rating-eye-right"></div>
                    <div class="mouth rating-eye-bad-mouth"></div>
                    <div class="toggle-rating-pill"></div>
                    <label for="fun" class="rating-label rating-label-fun">Female</label>
                </div>
              </div>
            </div>
            
<!-- end of gender -->

          <div class="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="signup" />
        </form>
      </div>

      <script>
        const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".login header"),
          loginHeader = document.querySelector(".signup header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });
      </script>
        <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/custom.js"></script>


    </section>
  </body>
</html>
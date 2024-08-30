document.addEventListener('DOMContentLoaded', function() {
  // Select all nav-option elements
  const navOptions = document.querySelectorAll('.nav-option');
  const nav = document.querySelector('nav.nav');


  // Simulate a click on the "dashboard" option by default
  const dashboardOption = document.getElementById('dashboard');
  dashboardOption.click();

    // Add click event listener to menu icon
    const menuIcon = document.getElementById('menuicn');
    menuIcon.addEventListener('click', function() {
      const nav = document.querySelector('nav.nav');
      nav.classList.toggle('nav-active');
    });



  // Add click event listeners to each nav-option (using arrow function)
  navOptions.forEach(option => option.addEventListener('click', () => {
    const id = option.id;
    handleNavClick(id);
  }));

  function handleNavClick(id) {
    if (id === 'logout') {
      // Redirect to login page or handle logout here
      window.location.href = 'login.php'; // Change 'login.html' to your actual login page
    } else {
      updateBoxContainer(id);
      slideNavOption(id);
    }
  }

  function updateBoxContainer(id) {
    const boxContainer = document.querySelector('.box-container');

    // Define content for each option
    const content = {
      dashboard: `
        <div class="box box4">
          <div class="text">
            <h2 class="topic-heading">0</h2>
            <h2 class="topic">Tests</h2>
          </div>
          <img src="assets/images/test.png" alt="published">
        </div>

        <div class="box box1">
          <div class="text">
            <h2 class="topic-heading">0</h2>
            <h2 class="topic">Average score</h2>
          </div>
          <img src="assets/images/avg.png" alt="Views">
        </div>

        <div class="box box2">
          <div class="text">
            <h2 class="topic-heading">0</h2>
            <h2 class="topic">Highest Score</h2>
          </div>
          <img src="assets/images/high.png" alt="likes">
        </div>

        <div class="box box3">
          <div class="text">
            <h2 class="topic-heading">0</h2>
            <h2 class="topic">Topper Score</h2>
          </div>
          <img src="assets/images/top.png" alt="comments">
        </div>

        <div class="report-container">
          <div class="report-header">
            <h1 class="recent-Articles">List of Tests</h1>
            <button class="view">View All</button>
          </div>

          <div class="report-body">
            <table>
              <thead>
                <tr>
                  <th class="t_row">Test</th>
                  <th class="t_row">Date</th>
                  <th class="t_row">Subject</th>
                  <th class="t_row">Marks Obtained</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="t_row">Test 1</td>
                  <td class="t_row">01/01/2024</td>
                  <td class="t_row">Math</td>
                  <td class="t_row">85</td>
                </tr>
                <tr>
                  <td class="t_row">Test 2</td>
                  <td class="t_row">05/01/2024</td>
                  <td class="t_row">Science</td>
                  <td class="t_row">90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      profile: `
        <div class="profile-summary">
          <h2>Profile Details</h2>
          <p>Name: Abhay</p>
          <p>Email: abhay@example.com</p>
          <p>ID No: 123456</p>
        </div>

        <div class="profile-picture">
          <img class="profile_images" src="assets/images/male.png" alt="Profile Picture">
        </div>

        <div class="profile-stats">
          <div class="box">
            <h2 class="topic-heading">5</h2>
            <h2 class="topic">Completed Tests</h2>
          </div>
          <div style="margin-top: 2rem" class="box">
            <h2 class="topic-heading">3.8</h2>
            <h2 class="topic">Average Grade</h2>
          </div>
        </div>
        <div>
          <h2 style="margin-top: 2rem;text-align: center;">Your Progress Report will updoaded as soon as possible</h2>
        </div>
        <div>
          <img class="profile_images" src="assets/images/chart.png">
        </div>
      `,
      institution: `
        <div class="institution-details">
          <h2>Institution Information</h2>
          <p>Name: XYZ University</p>
          <p>Location: City, Country</p>
          <p>Founded: 1950</p>
        </div>

        <div class="institution-stats">
          <div style="margin-top: 4rem;" class="box">
            <h2 class="topic-heading">1500</h2>
            <h2 class="topic">Students Enrolled</h2>
          </div>
          <div style="margin-top: 2rem;" class="box">
            <h2 class="topic-heading">200</h2>
            <h2 class="topic">Courses Offered</h2>
          </div>
        </div>
      `,
      settings: `
        <div class="settings-options">
          <center>
            <h2>Settings</h2>
          </center>
          <br>
          <div style="width:20rem" class="box">
            <h2 class="topic-heading">Account Settings</h2>
            <p style="margin-left:2rem">Update your account details and preferences.</p>
            <br>
          </div>

          <div style="margin-top: 2rem; width: 20rem;" class="box">
            <h2 class="topic-heading">Privacy Settings</h2>
            <p>Manage your privacy and security settings.</p>
          </div>
        </div>
      `,
      // Add content for other options as needed
    };

    // Check if the id exists in the content mapping
    if (content[id]) {
      boxContainer.innerHTML = content[id];
  } else {
      console.error('No content available for id:', id);
      boxContainer.innerHTML = '<p>Content not available</p>';
  }
}

function slideNavOption(id) {
  navOptions.forEach(option => option.classList.remove('slide-active'));
  document.getElementById(id).classList.add('slide-active');
  if (nav.classList.contains('nav-active')) {
      nav.classList.remove('nav-active');
  }
}
});
document.addEventListener("DOMContentLoaded", function() {
  const generateButton = document.getElementById('generateQuestions');
  const questionCountInput = document.getElementById('questionCount');
  const questionsForm = document.getElementById('questionsForm');

  generateButton.addEventListener('click', function() {
      const questionCount = parseInt(questionCountInput.value);

      // Clear previous questions
      questionsForm.innerHTML = '';

      for (let i = 1; i <= questionCount; i++) {
          // Create a div for each question
          const questionDiv = document.createElement('div');
          questionDiv.classList.add('question');

          // Create a textarea for the question
          const questionLabel = document.createElement('label');
          questionLabel.textContent = `Question ${i}:`;
          const questionInput = document.createElement('textarea');
          questionInput.name = `question_${i}`;
          questionInput.placeholder = `Enter question ${i}`;
          questionDiv.appendChild(questionLabel);
          questionDiv.appendChild(questionInput);

          // Create inputs for the options
          for (let j = 1; j <= 4; j++) {
              const optionLabel = document.createElement('label');
              optionLabel.textContent = `Option ${j}:`;
              const optionInput = document.createElement('input');
              optionInput.type = 'text';
              optionInput.name = `question_${i}_option_${j}`;
              optionInput.placeholder = `Enter option ${j}`;
              questionDiv.appendChild(optionLabel);
              questionDiv.appendChild(optionInput);
          }

          // Create an input for the correct option
          const correctOptionLabel = document.createElement('label');
          correctOptionLabel.textContent = 'Correct Option:';
          const correctOptionInput = document.createElement('input');
          correctOptionInput.type = 'text';
          correctOptionInput.name = `question_${i}_correct_option`;
          correctOptionInput.placeholder = 'Enter the correct option (e.g., 1, 2, 3, or 4)';
          questionDiv.appendChild(correctOptionLabel);
          questionDiv.appendChild(correctOptionInput);

          // Append the question div to the form
          questionsForm.appendChild(questionDiv);
      }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  // Select all nav-option elements
  const navOptions = document.querySelectorAll('.nav-option');
  const nav = document.querySelector('nav.nav');

  // Simulate a click on the "profile" option by default
  const profileOption = document.getElementById('profile');
  profileOption.click();

  // Add click event listener to menu icon
  const menuIcon = document.getElementById('menuicn');
  menuIcon.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
  });

  // Add click event listeners to each nav-option
  navOptions.forEach(option => option.addEventListener('click', () => {
    const id = option.id;
    handleNavClick(id);
  }));

  function handleNavClick(id) {
    if (id === 'logout') {
      // Redirect to login page or handle logout here
      window.location.href = 'login.php'; // Change 'login.php' to your actual login page
    } else {
      updateBoxContainer(id);
      slideNavOption(id);
    }
  }

  function updateBoxContainer(id) {
    const boxContainer = document.querySelector('.box-container');

    // Define content for each option
    const content = {
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
            <h2 class="topic">Created Tests</h2>
          </div>
          <div style="margin-top: 2rem" class="box">
            <h2 class="topic-heading">3.8</h2>
            <h2 class="topic">Published Tests</h2>
          </div>
        </div>
        <div>
          <h2 style="margin-top: 2rem;text-align: center;">Your Progress Report will be uploaded as soon as possible</h2>
        </div>
        <div>
          <img class="profile_images" src="assets/images/chart.png">
        </div>
      `,
      create: `
    
      <div>
        <h2>Create Test</h2>
        
        <!-- Form to create a new test -->
        <form method="post">
          
          <!-- Test Name Input -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="testName" style="display: block; font-weight: bold;">Test Name:</label>
            <input type="text" id="testName" name="testName" class="form-control" placeholder="Enter test name" required style="width: 100%; padding: 0.5rem;">
          </div>
          
          <!-- Subject Input -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="subject" style="display: block; font-weight: bold;">Subject:</label>
            <input type="text" id="subject" name="subjectName" class="form-control" placeholder="Enter subject" required style="width: 100%; padding: 0.5rem;">
          </div>
  
          <!-- Date Input -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="testDate" style="display: block; font-weight: bold;">Test Date:</label>
            <input type="date" id="testDate" name="testDate" class="form-control" required style="width: 100%; padding: 0.5rem;">
          </div>
  
          <!-- Total Marks Input -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="totalMarks" style="display: block; font-weight: bold;">Total Marks:</label>
            <input type="number" id="totalMarks" name="totalMarks" class="form-control" placeholder="Enter total marks" required style="width: 100%; padding: 0.5rem;">
          </div>

          <!-- Total Time Input -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="totaltime" style="display: block; font-weight: bold;">Total Time:</label>
            <input type="number" id="totaltime" name="totaltime" class="form-control" placeholder="Enter total time" required style="width: 100%; padding: 0.5rem;">
          </div>
  
          <!-- Total Number of Question Input -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="totalQues" style="display: block; font-weight: bold;">Total No. of Questions:</label>
            <input type="number" id="totalQues" name="totalQues" class="form-control" placeholder="Enter number of questions" required style="width: 100%; padding: 0.5rem;">
          </div>
          
          <div class="form-group" style="margin-top: 1rem;">
            <button name="submit" type="submit" class="btn btn-primary" style="width: 100%; padding: 0.5rem; background-color: #007bff; color: white; border: none; cursor: pointer;">Generate Question</button>
          </div>
        </form>
      </div>
      `,
      list: `
      
      <ul>
      <button id="test-container" onclick="loadData()" type="submit">List Of Test</button>
      <div name="test_cont" id="test-container"></div>
      </ul>
      `,
      details: `
      <h2>Test Details</h2>
      <p>Select a test from the list to view its details.</p>
      `
    };

    // Update box-container content based on selected option
    boxContainer.innerHTML = content[id] || 'Content not found.';
  }

  function slideNavOption(id) {
    const clickedOption = document.getElementById(id);

    // Slide the clicked option to the right
    clickedOption.style.transform = 'translateX(20px)';
    clickedOption.style.transition = 'transform 0.3s ease';

    // Reset transform for other options
    navOptions.forEach(option => {
      if (option !== clickedOption) {
        option.style.transform = 'translateX(0)';
      }
    });
  }
});
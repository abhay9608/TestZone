function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'fetch_tests.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Assuming the data is returned as JSON
            var data = JSON.parse(xhr.responseText);
            
            console.log(data); // Log the data to the console

            var output = '<table class="table table-striped table-dark"><thead><tr><th scope="col"> Test ID </th><th scope="col"> Test Name </th><th scope="col"> Subject </th><th scope="col"> No. of QUestion </th><th scope="col"> Total Marks </th><th scope="col"> Total Time (min) </th></tr></thead>';

            // Loop through data and create HTML content
            data.forEach(function(item) {
                output += '<tbody><tr><th scope="row">' + item.test_id + '</th><td>' + item.test_name + '</td><td>' + item.subject + '</td><td>' +  item.total_questions + '</td><td>' + item.total_marks + '</td><td>' + item.total_time + '</td></tr>'; // Adjust this line based on your data structure
            });

            output += '</tbody></table>';

            // Check if the div exists
            var showDiv = document.getElementById('test-container');
            if (showDiv) {
                // Insert data into the div with id="test-container"
                showDiv.innerHTML = output;
            } else {
                console.log('Div not found');
            }
        }
    };
    xhr.send();
}
	


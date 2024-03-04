// function validateForm() {
//     var name = document.getElementById('name').value.trim();
//     var mobile = document.getElementById('mobile').value.trim();
//     var gender = document.getElementById('gender').value.trim();
//     var age = document.getElementById('age').value.trim();
//     var email = document.getElementById('email').value.trim();
//     var username = document.getElementById('username').value.trim();
//     var password = document.getElementById('password').value;

//     // Check if email contains '@'
//     if (email.indexOf('@') === -1) {
//         alert('Please enter a valid email address.');
//         return false;
//     }

//     // Check if mobile number is 10 digits
//     if (mobile.length !== 10 || isNaN(mobile)) {
//         alert('Please enter a valid 10-digit mobile number.');
//         return false;
//     }

//     // Check if age is in ddmmyyyy format
//     if (age.length !== 8 || isNaN(age)) {
//         alert('Please enter your date of birth in ddmmyyyy format.');
//         return false;
//     }

//     // Check if age is greater than or equal to 18
//     var currentYear = new Date().getFullYear();
//     var birthYear = parseInt(age.substring(4, 8), 10);
//     if (currentYear - birthYear < 18) {
//         alert('You must be at least 18 years old to register.');
//         return false;
//     }

//     // Check if username and password are not the same
//     if (username === password) {
//         alert('Username and password cannot be the same.');
//         return false;
//     }

//     return true;
// }
// function validateForm() {
//     var dobInput = document.getElementById('dob').value;

//     // Regular expression to match the format dd-mm-yyyy
//     var dobRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;

//     if (!dobRegex.test(dobInput)) {
//         alert("Please enter DOB in the format dd-mm-yyyy");
//         return false;
//     }

//     // Extracting day, month, and year from the DOB input
//     var dobParts = dobInput.split('-');
//     var dobDay = parseInt(dobParts[0], 10);
//     var dobMonth = parseInt(dobParts[1], 10);
//     var dobYear = parseInt(dobParts[2], 10);

//     // Calculating current date
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     var currentMonth = currentDate.getMonth() + 1; // Month is zero-indexed
//     var currentDay = currentDate.getDate();

//     // Calculating age
//     var age = currentYear - dobYear;
//     if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
//         age--;
//     }

//     // Checking if age is less than 18
//     if (age < 18) {
//         alert("You must be at least 18 years old to register.");
//         return false;
//     }

//     return true;
// }



function registerUser(){
    var name = document.getElementById('name').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var age = document.getElementById('dob').value.trim();
    var email = document.getElementById('email').value.trim();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;
    // Check if email contains '@'
    // console.log(email.indexOf('@'),username,password,isNaN(mobile))
    if (email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
        return false;
    }
        // Check if username and password are not the same
    if (username === password) {
        alert('Username and password cannot be the same.');
        return false;
    }
        // Check if mobile number is 10 digits
    if (mobile.length !== 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }

    // Data object containing user information
    var userData = {
        User_name: name,
        User_mobile: mobile,
        gender: gender,
        dob: age,
        User_email: email,
        username: username,
        password: password
    };



    // Options for the fetch request
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    // Make the fetch request
    fetch("http://localhost:8000/api/register", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else{
                window.location.href = "login.html"
                window.alert("User created successfully")
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with your fetch operation:', error);
        });
}

const registerBtn = document.getElementById("register-btn")
registerBtn.addEventListener("click",registerUser)
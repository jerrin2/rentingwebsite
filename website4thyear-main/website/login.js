function login(){
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    if (email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
        return false;
    }
    if(password.length===0){
        alert("Please enter the password")
        return false;
    }
    const userData = {
        email:email,
        password:password
    }
    // Options for the fetch request
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    // Make the fetch request
    fetch("http://localhost:8000/api/login", requestOptions)
        .then(response => {
            if (!response.ok) {
                window.alert("Invalid credentials")
                throw new Error('Network response was not ok');
            } else{
                window.alert("User Logged In successfully")
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data
            localStorage.setItem("token",data.token)
            window.location.href = "../index.html"
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with your fetch operation:', error);
        });
}

const loginBtn = document.getElementById("login-btn")
loginBtn.addEventListener("click",login)
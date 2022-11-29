// Login Function, method is POST because we're sending data to the API to see if we are 
// allowed entry with valid username + password
function login(){
    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: document.getElementById(`username`).value,
            password: document.getElementById(`password`).value,
        }
    }).then(loginSuccess).catch(loginFailure)
}

function loginSuccess(response){
    // Setting a cookie with the login Token then send user to home.html
    Cookies.set(`loginToken`, response.data.token);
    location.href = `/pages/home.html`;
}

function loginFailure(error){
    alert(error.response.data.error)
}

document.getElementById(`loginSubmit`).addEventListener(`click`, login);

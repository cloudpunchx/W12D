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
    Cookies.set(`loginToken`, response.data.token);
    // if this doesnt work, add /
    location.href = `/pages/home.html`;
}

function loginFailure(error){
    alert(error.response.data.error)
}

// Variables and Event Listeners
document.getElementById(`loginSubmit`).addEventListener(`click`, login);

// Ahhhh I think I got this to work now by setting a variable down below to get the Cookie I set previously with the log-in
// then I said IF logged in do ___ else ___
function colorSuccess(response){
    let colors = response.data.data;
    if(loggedIn){
        for(color of colors){
            colorResults.insertAdjacentHTML(`beforeend`,
                                            `<div style="background-color:${color.color};"><h3>${color.name} was created in ${color.year}</h3></div>`);
        }
    } else{
        loginHeader.innerText= `You are not logged in.`;
        colorResults.insertAdjacentHTML(`beforeend`, 
                                        `<button><a href="/index.html">Back to Login</a></button>`);
    }
}

function colorFailure(error){
    console.log(error);
}

function logout(){
    Cookies.remove(`loginToken`);
    location.href = `/index.html`;
}

// run on startup
axios.request({
    url: `https://reqres.in/api/unknown`,
    method: `GET`
}).then(colorSuccess).catch(colorFailure)

// Variables and Event Listenerss
let colorResults = document.getElementById(`colorResults`);
let loginHeader = document.getElementById(`loginHeader`);
let loggedIn = Cookies.get(`loginToken`)

document.getElementById(`logoutButton`).addEventListener(`click`, logout);

// Leaving this in to kind of show what I was thinking along the way to getting the page to do what I wanted:
// I've tried everything I can think of to get the page to show colors if you're certified, and the button + not logged in notice if you're not certified
// function colorSuccess(response){
//     let colors = response.data.data;
//     let userCredentials = response.status;
//     if(userCredentials == 200){
//         for(color of colors){
//             colorResults.insertAdjacentHTML(`beforeend`,
//                                             `<div style="background-color:${color.color};"><h3>${color.name} was created in ${color.year}</h3></div>`);
//         }
//     }else{
//         loginHeader.innerText= `You are not logged in.`
//         colorResults.insertAdjacentHTML(`beforeend`, 
//                                         `<button><a href="/index.html">Back to Login</a></button>`);
//     }
// }
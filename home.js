function colorSuccess(response){
    let colors = response.data.data;
    for(color of colors){
        document.getElementById(`colorResults`).insertAdjacentHTML(`beforeend`,
                                                                    `<div style="background-color:${color.color};"><h3>${color.name} was created in ${color.year}</h3></div>`);
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

document.getElementById(`logoutButton`).addEventListener(`click`, logout);
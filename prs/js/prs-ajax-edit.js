let user = null;

// Ready function
$(() => {

    $("#save").on("click", () => {
        editUser();
    })

    let id = getUrlParms(document.URL).id;

    $.getJSON(`http://localhost:5000/api/users/${id}`)
        .done((res) => {
            console.debug(res);
            user = res;
            setUserData(user);
        })
        .fail((err) => {
            console.error(err);
        });

});

const setUserData = (user) => {
    $("#xId").val(user.id), 
    $("#xUsername").val(user.username), 
    $("#xPassword").val(user.password), 
    $("#xFirstname").val(user.firstname), 
    $("#xLastname").val(user.lastname),
    $("#xPhone").val(user.phone), 
    $("#xEmail").val(user.email), 
    $("#xReviewer").prop("checked", user.isReviewer), 
    $("#xAdmin").prop("checked", user.isAdmin)
}

const getUserData = () => {
    let euser = {
        id: +$("#xId").val(),
        username: $("#xUsername").val(),
        password: $("#xPassword").val(),
        firstname: $("#xFirstname").val(),
        lastname:  $("#xLastname").val(),
        phone:  $("#xPhone").val(),
        email: $("#xEmail").val(),
        isReviewer: $("#xReviewer").prop("checked"),
        isAdmin: $("#xAdmin").prop("checked")
    }
    return euser;
}

const editUser = () => {
        
    let editUser = getUserData();
    console.log(editUser);
    
    $.ajax({
        method: 'PUT',
        url: `http://localhost:5000/api/users/${editUser.id}`,
        data: JSON.stringify(editUser),
        contentType: 'application/json'
    })
    .done((res) => {
        console.debug(res);
        document.location.href = "prs-ajax.html";
        
    })
    .fail((err) => {
        console.error(err);
    });
}

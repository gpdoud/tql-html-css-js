// Ready function
$(() => {

    $("#save").on("click", () => {
        addNewUser();
    })

    const getUserData = () => {
        let newUser = {
            id: 0, 
            username: $("#xUsername").val(), 
            password: $("#xPassword").val(), 
            firstname: $("#xFirstname").val(), 
            lastname: $("#xLastname").val(),
            phone: $("#xPhone").val(), 
            email: $("#xEmail").val(), 
            isReviewer: $("#xReviewer").prop("checked"), 
            isAdmin: $("#xAdmin").prop("checked")
        };
        return newUser;
    }

    const addNewUser = () => {
        
        let newUser = getUserData();
        
        $.ajax({
            method: 'POST',
            url: 'http://localhost:5000/api/users',
            data: JSON.stringify(newUser),
            contentType: 'application/json'
        })
        .done((res) => {
            console.debug(res);
            document.location.href = "http://localhost:5500/prs-ajax.html";
            
        })
        .fail((err) => {
            console.error(err);
        });
    }

});
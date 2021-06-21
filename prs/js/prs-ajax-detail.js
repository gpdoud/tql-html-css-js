let user = null;

// Ready function
$(() => {

    let id = getUrlParms(document.URL).id;

    $.getJSON(`http://localhost:5000/api/users/${id}`)
        .done((res) => {
            console.debug(res);
            user = res;
            display();
        })
        .fail((err) => {
            console.error(err);
        });

});

const display = () => {
    $("#xId").text(user.id);
    $("#xUsername").text(user.username);
    $("#xFirstname").text(user.firstname);
    $("#xLastname").text(user.lastname);
    $("#xPhone").text(user.phone);
    $("#xEmail").text(user.email);
    $("#xReviewer").text(user.isReview ? "Yes" : "No");
    $("#xAdmin").text(user.isAdmin ? "Yes" : "No");
};
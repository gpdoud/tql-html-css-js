let users = [];

// jQuery Ready Function
$(() => {

    $.getJSON("http://localhost:5000/api/users")
        .done((res) => {
            console.debug(res);
            users = res;
            display();
        })
        .fail((err) => {
            console.error(err);
        });

});

const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let u of users) {
        let tr = $("<tr></tr>")
        tr.append($(`<td>${u.id}</td>`));
        tr.append($(`<td>${u.username}</td>`));
        tr.append($(`<td>${u.firstname} ${u.lastname}</td>`));
        tr.append($(`<td>${(u.isReviewer ? "Yes" : "No")}</td>`));
        tr.append($(`<td>${(u.isAdmin ? "Yes" : "No")}</td>`));
        tr.append($(`<a href="http://localhost:5500/prs-ajax-detail.html?id=${u.id}">Detail</a>`));
        tbody.append(tr);
    }
};
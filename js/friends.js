class Friend {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    toTr() {
        return `<tr>`
            + `<td>${this.name}</td>`
            + `<td>${this.phone}</td>`
            + `<td>${this.email}</td>`
            + `</tr>`;
    }
}

let friends = [];

const add = () => {
    // get the values from the input controls
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    
    // create an instance of Friend using the values
    let friend = new Friend(name, phone, email);
    
    // push the friend instance into the array of friends
    friends.push(friend);
    console.log(friends);

    // display all the friends in the array
    display();
};

const display = () => {
    let tbodyCtrl = document.getElementById("friends");
    
    // clear the table body
    tbodyCtrl.innerHTML = "";

    // iterate through the array
    for(let friend of friends) {
        tbodyCtrl.innerHTML += friend.toTr();
    }
};
let students = [
    { student: "Jane", color: "pink", number: 4 },
    { student: "Jim", color: "blue", number: 8 }
];

const loaded = () => {
    let body = document.getElementsByTagName("body")[0];
    body.style.fontFamily = "Courier New";
    body.style.fontSize = "2em";
    display();
}

const add = () => {
    let studentValue = document.getElementById("student").value;
    let colorValue = document.getElementById("color").value;
    let numberValue = document.getElementById("number").value;
    let studentJson = {
        student: studentValue,
        color: colorValue,
        number: numberValue
    };
    students.push(studentJson);
    display();
};

const display = () => {
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "" 
    for(let s of students) {
        let tr = "<tr>";
        tr += `<td>${s.student}</td>`;
        tr += `<td>${s.color}</td>`;
        tr += `<td>${s.number}</td>`;
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
};



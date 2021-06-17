class Assessments {
    constructor(topic, score) {
        this.topic = topic;
        this.score = score;
    }
    toTr() {
        return `<tr>`
            + `<td>${this.topic}</td>`
            + `<td>${this.score}</td>`
            + `</tr>`;
    }
}

let assessments = [];

const add = () => {
    let topic = document.getElementById("topic").value;
    let score = document.getElementById("score").value;
    assessments.push(new Assessments(topic, score));
    display();
    document.getElementById("topic").value = "";
    document.getElementById("score").value = "";
};
const display = () => {
    let tbodyCtrl = document.getElementById("assessments");
    tbodyCtrl.innerHTML = "";
    let sum = 0;
    for(let a of assessments) {
        sum += +a.score;
        tbodyCtrl.innerHTML += a.toTr();
    }
    let avg = sum / assessments.length;
    console.log("Avg=",avg, "Sum=", sum, "Len=", assessments.length);
    tbodyCtrl.innerHTML += `<tr>`
                        + `<td>Average</td>`
                        + `<td>${sum / assessments.length}</td>`
                        + `</tr>`
}
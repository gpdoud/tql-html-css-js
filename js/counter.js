let nbr = 0;
const plus = () => {
    nbr++;
    display();
};
const minus = () => {
    nbr--;
    display();
};
const display = () => {
    let inpCtrl = document.getElementById("nbr");
    inpCtrl.value = nbr;
    inpCtrl.style.color = (nbr % 2 == 0) ? "red" : "black";
    inpCtrl.style.fontStyle = (nbr % 3 == 0) ? "italic" : "normal";
    inpCtrl.style.fontWeight = (nbr % 7 == 0) ? "bold" : "normal";
}

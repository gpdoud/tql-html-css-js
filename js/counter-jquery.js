let nbr = 0;

$(() => {

    $("#plus").on("click", () => {
        display(++nbr);
    })
    $("#minus").on("click", () => {
        display(--br);
    })

    display(nbr);
});

const display = (nbrks) => {
    let inpCtrl = $("input").val(nbr);
    inpCtrl.css("color", (nbr % 2 == 0 ? "red" : "black"))
            .css("fontStyle", (nbr % 3 == 0 ? "italic" : "normal"))  
            .css("fontWeight", (nbr % 7 == 0 ? "bold" : "normal"))  
}
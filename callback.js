function welcomeMessage(name, greatHandler) {
    // console.log(greatHandler);
    greatHandler(name);
};
const name = ["tom hanks", "tom brady", "tom cruise"];
const myObj = { name: "tom chinku", age: 11 };
function greatMorning(name) {
    console.log("good morning", name);
}
function greatAfterNoon(name) {
    console.log("good afternoon", name);
}
function greatEvening(name) {
    console.log("good evening", name);
}
welcomeMessage("tom hanks", greatMorning);
welcomeMessage("sakib hanks", greatAfterNoon);
welcomeMessage("bappa raj", greatEvening);

/* //
function handleClick() {
    console.log("button is clicked");
}
document.getElementById("my-btn").addEventListener("click", handleClick);
//
document.getElementById("my-btn").addEventListener("click", function () {
    console.log("button is clicked");
}); */
import { Automobile } from "./automobile";

let mazda = new Automobile("Mazda", "CX-5", 2014);
let app = document.getElementById("app");
app.innerHTML = `<p>${mazda.getInfo()}</p>`
let numVar = 1;
let numVar2 = 2.2;
let strVar = 'This is a string.';
let strVar2 = "So as this"
let bool = true;
let undefinedVar = undefined;
let nullVar = null;


let obj = {
    name: null,
    age: null
}

console.log(obj.name)
obj.name = "Géza"
console.log(obj.name);

let btn = document.getElementById('button');
let text = document.getElementById('text');
btn.addEventListener("click", (event) => {
    text.style.color = "red";
});
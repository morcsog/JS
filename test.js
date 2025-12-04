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
};

console.log(obj.name);
obj.name = "Géza"
console.log(obj.name);

let arrVar = [1,2,3];

let btn = document.getElementById('button');
let text = document.getElementById('text');
btn.addEventListener("click", (event) => {
    text.style.color = "red";
});

let mapVar = new Map();
let user1 = {name: "Eszter"};
let user2 = {name: "Gábor"};
mapVar.set("name", "Géza");
mapVar.set("age", 15);
mapVar.set("hairColor", "Blue");
mapVar.set(user1, "Admin");
mapVar.set(user2, "Guest");

while (condition) {
    
}

do {
    
} while (condition);

for (let index = 0; index < array.length; index++) {
    //anything, mostly arrays

}

for (const key in object) {
 //objects       
    
}

for (const [key, value] of mapVar) {
    console.log(key, value);
    
}
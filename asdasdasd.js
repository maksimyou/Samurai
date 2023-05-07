let verbs = ["go", "jump", "kidding", "run", "observe"];
let animals = ["aligator", "badger", "beaver", "dingo", "duck"];
let weathers = ["sunny", "rainy", "foggy", "snowy", "cloudy"];
let seasons = ["зима", "весна", "лето", "осень", "межсезонье"];
let verb = verbs[Math.floor(Math.random() * 5)];
let animal = animals[Math.floor(Math.random() * 5)];
let weather = weathers[Math.floor(Math.random() * 5)];
let season = seasons[Math.floor(Math.random() * 5)];
console.log(`Вы ${verb} как ${animal} во время ${weather} ${season}`);

let irritant = function () {
    let verbs = ["go", "jump", "kidding", "run", "observe"];
    let animals = ["aligator", "badger", "beaver", "dingo", "duck"];
    let weathers = ["sunny", "rainy", "foggy", "snowy", "cloudy"];
    let seasons = ["зима", "весна", "лето", "осень", "межсезонье"];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let animal = animals[Math.floor(Math.random() * animals.length)];
    let weather = weathers[Math.floor(Math.random() * weathers.length)];
    let season = seasons[Math.floor(Math.random() * seasons.length)];
    return (`Вы ${verb} как ${animal} во время ${weather} ${season}`);
}


n < 5 ? n *= 100 : n >= 5 || n < 10 ? n *= 95 : n >= 10 ? n *= 90;

let mas = [3, 2, 1];
console.log(mas);
mas[0] = "3 больше";
mas[1] = "чем 2 больше";
mas[2] = "чем 1";
mas;
mas.join(",");
mas;





//let randomizer = irritant =  (calcRand) {
//result = calcRand[Math.floor(Math.random() * 5)];
//return calc
//}



let name = prompt("Введите ваше имя", " ");
if (name === "Максим") alert("Привет мне!")
else if (name === " ") alert("Привет незнакомец!")
else if (name === "Папа") alert("Привет отец!")
else (name === "undefined") alert("Привет незнакомец!");



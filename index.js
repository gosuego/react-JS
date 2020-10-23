const human = {
    name: "Nico",
    lastName: "Serrano",
     nationality: "Wish i was korean",
     favFood: {
         breakfast: "grape",
         lunch: "meat",
         dinner:"cheeze"

     }
}

const name= human.name;

const {
    name,
    lastName,
    nationality: difName,
    favFood: {dinner, breakfast, lunch}
} = human;

console.log(name, lastName, difName, dinner, breakfast, lunch);
// console.log("test foodapi.js");      Test. Works.

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(returnedFoods => {                //named "returnedFoods" because it has just been returned from JSON
        console.table(returnedFoods)
        returnedFoods.forEach(food => {
            const foodInIndexHTML = createFoodCard(food)
            addFoodToDom(foodInIndexHTML)
        })
    })

// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.
// Create a function that inserts an HTML representation of a food into the DOM

// let foodArray = [
//     {
//         foodName = 0,
//        foodType = 0,
//        foodEthnicity = 0
//     }
// ]
let foodContainer = [];

const  createFoodContainer = () => {
    return `<section><div>${foodContainer}</div></section>`
}


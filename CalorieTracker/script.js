var array = []
var placeholder 
onload = ()=> {
console.log(burger)
    console.log(sandwich.computeCalories())
    console.log(fries.computeCalories())
    placeholder = document.querySelector("#placeholder")
    document.querySelector("#saveFood").onclick = saveFoodItem
}

function saveFoodItem(){
    let name = document.querySelector("#food_name").value
    let quantity = document.querySelector("#quantity").value
    let portion = document.querySelector("#portion").value
    let calories = document.querySelector("#calories").value

    let foodItem = new Food(calories,name,portion,quantity)
    array.push(foodItem)
    displayFoodItems()
    console.log(array)
}

function displayFoodItems(){
    placeholder.innerHTML = ""
    array.forEach((food)=>{
        let div = document.createElement("div")
        div.innerHTML = food.foodItemContent() 
        placeholder.appendChild(div)
    })
}


class Food{

    constructor(calories, name, ratio, quantity) {
        this.calories = calories
        this.name = name
        this.ratio = ratio
        this.quantity = quantity
    }  

    computeCalories() {
        console.log("us: " + this)
        let total = this.ratio * this.quantity * this.calories
        return total.toFixed(2)
    }

    foodItemContent() {
        let content = "<h1>" + this.name + "</h1>"
        content += "<p>" + this.computeCalories() + "</p>"
        return content
    }
}

var sandwich = new Food(250,"sandwich", 0.5, 2)
var burger = new Food(500,"burger", 1, 1)
var fries = new Food(160,"fries", 1, 3)



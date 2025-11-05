
//Lecture8- Demo1

let myArray = [];

onload = () => {
    promptForArray()
    document.querySelector("#button1").onclick = displayForLoop 
    document.querySelector("#button2").onclick = displayForEach 
}

function promptForArray(){
    let length = prompt("How big is the array?",0)
    if(isNaN(length)){
        alert("Invalid input")
        reutrn
    }
    let arraySize = parseInt(length)
    for(let i = 0; i < arraySize; i++){
        let input = prompt("What do you want in your array", "")
        myArray.push(input)
    }
    console.log(myArray)
}

function displayForLoop(){ 
    let displayDiv = document.querySelector("#placeHolder1")
    let content = ""
    for(let i = 0; i < myArray.length; i++){
        let item = myArray[i]
        // ***** alternative approach, not recommended for this case for scalability purposes *****
        // let paragraph = document.createElement("p")
        // paragraph.innerHTML = item
        // displayDiv.append(paragraph)
         content += "<p>" + item + "</p>"
    }
    displayDiv.innerHTML = content
}

function displayForEach(){ 
    let displayDiv = document.querySelector("#placeHolder2")
    let content = ""
    myArray.forEach((item)=>{
        content += "<p>" + item + "</p>"
    })
    displayDiv.innerHTML = content
}


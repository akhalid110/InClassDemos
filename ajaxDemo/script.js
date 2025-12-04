
var pokeArray = []
var displayArray = []
var count = 0
var timeout = 3000 // Hoisted variable for Timeout duration
var timer // Hoisted variable for interval ID

$(() => {
    // Make call to pokeAPI and get charmander
    //$.ajax()
    callAjax("https://pokeapi.co/api/v2/pokemon/charmander", null, "GET", "json", handlePokemon, handlePokeError)
    //Looping through radio buttons, handling on change for radio buttons
    $('.pokeClass').each((index,element)=>{
        console.log(element)
        // Old way, no marks
        // element.onchange =(e)=>{
        //     console.log(e.target.value)
        // }
        // New way, marks
        // $(element).change(()=>{
        //     console.log($(element).val())
        // })
        
        $(element).change(handleRadioChange)
    })
    // !!!!!!!!!!!!! Registering Event handler for SELECT (dropdown)
    $("#dropdown").change(handleDropdownChange)
    
    
    // ------ FOR LAB 3 -----------
    callAjax(
        "https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php", 
        { "action": "propertyPrices" }, 
        "POST", 
        JSON, 
        handleTest, 
        handleTestError
    )
    callAjax("https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php", { "action": "diceroll" }, "POST", JSON, handleTest, handleTestError)
    $("#getPokemon").click(getPokemon)
    $("#playPokemon").click(startPokemonTimer)
    
})
/// Handling DropDown (SELECT element) change event
function handleDropdownChange(){
    console.log(this.value) // this = Select element itself
    console.log($("#dropdown").val()) // Selecting the SELECT element using jquery
    console.log($("#dropdown option:selected").val())// Using pseudo Selector ":selected" to 
    //^ directly fetch selected OPTION element, that is a DESCENDANT of our SELECT id="dropdown"
    //Safely parsing selected option value
    let newTimeout = parseInt(this.value)
    if(isNaN(newTimeout)){
        alert("SELECTED A NON-NUMERICAL OPTION")
        return
    }
    // Storing new timeout
    timeout = newTimeout
    restartTimer()
}


function handleRadioChange(){
    let type = $(this).val()
    displayArray = []
    pokeArray.forEach((item)=>{
        console.log(item)
        if(item.type == type.toLowerCase())
            displayArray.push(item)
    })
    console.log("Display array: ")
    console.log(displayArray)
}

function startPokemonTimer() {
    // Hoisting interval ID so that we can clear it 
    timer = setInterval(loopThroughPokemon, timeout)
}

function restartTimer(){
    // Clearing and restarting interval
    clearInterval(timer)
    startPokemonTimer()
}

function loopThroughPokemon(){
    console.log("Type found: " + displayArray[count].type)
    $("#pokePicture").attr("src", `${displayArray[count].picture}`)
    count = (count + 1) % displayArray.length
}

function getPokemon() {
    let pokeInput = $("#pokemonName").val()
    if (pokeInput.length < 0)
        return
    callAjax(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`, null, "GET", "json", handlePokemonFetch, handlePokeError)
}

function handleTestError(data) {
    console.log("error:" + data)
}
function handleTest(data) {
    console.log(data)
}

function callAjax(url, data, type, datatype, successCallback, errorCallback) {
    let options = {}
    options['url'] = url
    options['data'] = data
    options['type'] = type
    options['datatype'] = datatype
    options['success'] = successCallback
    options['error'] = errorCallback

    $.ajax(options)
}

function handlePokemon(data) {
    console.log(data.sprites.front_shiny)
    let src = data.sprites.front_shiny
    let img = $(`<img src=${src} alt='charmander'><img>`)
    $("#placeholder").append(img)
}

function handlePokemonFetch(data) {
    console.log(data)
    console.log(data.types[0].type.name)
    console.log(data.sprites.front_default)
    let src = data.sprites.front_default
    pokeArray.push({picture: src, type: data.types[0].type.name })
}


function handlePokeError(data){
    console.log("something went wrong:" + data)
}
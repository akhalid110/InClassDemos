

$(document).ready(()=>{
    // Make call to pokeAPI and get charmander
    //$.ajax()
    callAjax("https://pokeapi.co/api/v2/pokemon/charmander",null,"GET","json",handlePokemon, handlePokeError)
    // ------ FOR LAB 3 -----------
    callAjax("https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php",{"action":"propertyPrices"},"POST", JSON, handleTest, handleTestError )
    callAjax("https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php",{"action":"diceroll"},"POST", JSON, handleTest, handleTestError )
    $("#getPokemon").click(getPokemon)
})

function getPokemon(){
    let pokeInput = $("#pokemonName").val()
    if (pokeInput.length < 0)
        return
    callAjax(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`,null,"GET","json",handlePokemonFetch, handlePokeError)
}

function handleTestError(data){
    console.log("error:"+ data)
}
function handleTest(data){
    console.log(data)
}

function callAjax(url,data,type,datatype,successCallback,errorCallback){
    let options = {}
    options['url']=url
    options['data']=data
    options['type']=type
    options['datatype']=datatype
    options['success']=successCallback
    options['error']=errorCallback

    $.ajax(options)
}

function handlePokemon(data){
    console.log(data.sprites.front_shiny)
    let src = data.sprites.front_shiny
    let img = $(`<img src=${src} alt='charmander'><img>`)
    $("#placeholder").append(img)
}

function handlePokemonFetch(data){
    console.log(data.sprites.front_shiny)
    let src = data.sprites.front_shiny
    let img = $(`<img src=${src} alt='charmander'><img>`)
    $("#placeholder2").append(img)
}


function handlePokeError(data){
    console.log("something went wrong:" + data)
}

onload = () => {

    document.querySelectorAll("[name=contact]").forEach((element)=>{
        element.onchange = sanityCheck
    })

}


function sanityCheck(){
    console.log("hello from sanity check: " + this.value)
    let label = document.querySelector("#id1")
    if(this.value == "email"){
        console.log("email selected change bg color")
        label.style.backgroundColor = "blue"
        label.style.setProperty("background-color","blue")
    }else{
        // label.style.backgroundColor = "red"
        label.style.setProperty("background-color","red")
    }
}
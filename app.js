var t_number = document.querySelector("#t_number")

var quantity = document.querySelector("#quantity")

var output = document.querySelector("#output")



function table() {
    
    output.innerHTML = "<h1> Your Written Table is here! </h1>"

    for (var i = 1; i <= quantity.value; i++) {
        
        // console.log(`${t_number.value} x ${i} = ${t_number.value * i}`);

        output.innerHTML += `${t_number.value} x ${i} = ${t_number.value * i} <br />`
        
    }
}



function empty() {
    
    output.innerHTML = ""
    t_number.value = ""
    quantity.value = ""

}









var array = ["red" , "blue" , "green" , "pink" , "orangered" , "slategray" , "yellow" , "aqua" , "white"]

var body = document.querySelector("body")

var S_arr = document.querySelector ("#arr")




for (var i = 0; i < array.length; i++) {

    arr.innerHTML += `<button onclick = "colorBtn(${i})"> ${array[i]} </button>`

}



function colorBtn(index) {
    
    // console.log("btn Clicked" , array[index]);

    body.style.backgroundColor= array[index]


}


// body.style.backgroundColor = array[index]


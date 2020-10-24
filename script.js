$("#lol").css("background-color","black")

$("#red").click(()=>{
    $("#lol").css("background-color","red")
})

$("#blue").click(()=>{
    $("#lol").css("background-color","blue")
})

$("#hide").click(()=>{
    $("#lol").hide()
})

$("#show").click(()=>{
    $("#lol").show()
})

var width= 100;
var height = 100

$("#big").click(()=>{
width+=20
height+=20
$("#lol").css("width", width + "px")
$("#lol").css("height", height + "px")

})

$("#small").click(()=>{
width-=20
height-=20
$("#lol").css("width", width + "px")
$("#lol").css("height", height + "px")

})

console.log("hi yee ha")
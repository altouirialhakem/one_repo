let img = document.querySelector('.img');
let container = document.querySelector('header');

function phones(phone){
    img.src = phone;
}
function colors(color){
    container.style.background = color;
}
function show()
{
    var id = document.getElementById('sh');
    id.style.display = "none";
    id.style.transition = .5;
    
    var d =document.getElementById("ll");
    d.style.width = "100%";
}
function hide()
{
    var id = document.getElementById('sh');
    id.style.display = "block";
    var d =document.getElementById("ll");
    d.style.width = "60%";
}


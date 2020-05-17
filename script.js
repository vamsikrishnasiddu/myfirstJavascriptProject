var color = ['purple','red','blue','yellow'];

document.getElementById('btn').addEventListener('click',changeBackground);


function changeBackground(){
    var a = Math.round(Math.random()*color.length);
    //console.log(a);
    document.querySelector('body').style.backgroundColor = color[a];
}
const media = document.querySelector('#portrait');
const text = document.querySelector('.text_section');


function draw(){
    const media_height = media.offsetHeight;
    text.style.minHeight = media_height.toString() + "px";
}setInterval(draw, 100);
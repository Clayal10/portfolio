const media = document.querySelector('#portrait');
const text = document.querySelector('.text_section');
const canvas_wrapper = document.querySelectorAll('.display_box')[2];
const cnvs = document.querySelector('canvas');

const canvas_height = canvas_wrapper.offsetHeight * 0.9;
cnvs.style.height = canvas_height.toString() + "px";

function draw(){
    const media_height = media.offsetHeight;
    text.style.minHeight = media_height.toString() + "px";

}setInterval(draw, 100);
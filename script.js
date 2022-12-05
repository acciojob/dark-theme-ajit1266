//your code here

document.querySelector('#swap').addEventListener('click', function(){
document.querySelector('#swap').classList.remove("button_day");
document.querySelector('#app').classList.remove("day");
document.querySelector('#swap').classList.add("button_night");
document.querySelector('#app').classList.add("night");
})

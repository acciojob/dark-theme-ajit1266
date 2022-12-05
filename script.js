//your code here
function swapTheme(){
document.querySelector('#swap').classList.remove("button_day");
document.querySelector('#app').classList.remove("day");
document.querySelector('#swap').classList.add("button_night");
document.querySelector('#app').classList.add("night");
}
document.querySelector('#swap').addEventListener('click', swapTheme());

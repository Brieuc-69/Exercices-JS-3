const green=document.querySelector('.green')
const red=document.querySelector('.red')
const blue=document.querySelector('.blue')
console.log(green,red,blue)

green.addEventListener('click', () => {
    document.querySelector("#text").style.color="green";
})
red.addEventListener('click', () => {
    document.querySelector("#text").style.color="red";
})
blue.addEventListener('click', () => {
    document.querySelector("#text").style.color="blue";
})
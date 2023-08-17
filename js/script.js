let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let button = document.querySelector("button");
let contant = document.querySelector(".contant");
let x = document.querySelector(".X");
let sha = document.querySelector(".sha");
let num = 100;
// const obj = {
// id: Date.now(),
// title: email.value,
// completd:false,
// };
let arr = [];
// button.onclick = function (){
// add(email.value);
// chack();
// }

// function add(v){
// arr.push(JSON.stringify);
// }
// function chack(){
// if(email.value != "" && pass.value != ""){
// if(window.localStorage.getItem("user")){
// if(obj.user == email.value){
// setTime();
// }
// }else{
// window.localStorage.setItem("user",email.value);
// window.localStorage.setItem("pass",pass.value);
// console.log(obj.title);
// }
// }
// }

button.onclick = function () {
    if (email.value !== "" && pass.value !== "") {
        arr.push(email.value);
        window.localStorage.setItem("email", arr[0]);
        button.classList.add("active");
        setTimeout(() => {
            button.classList.remove("active");
        }, 1700);
        if (email.value == arr[0]) {
            setTimeout(() => {
                setTime();
            }, 1700);
        }
        console.log(arr);

    }
}
x.onclick = () => {
    contant.classList.remove("active");
}
function setTime() {
    contant.classList.add("active");
    let set = setInterval(() => {
        num--;
        sha.style.width = num + "%";
        if (num === 0) {
            clearInterval(set);
            num = 100;
        }
    }, 30);
    setTimeout(() => {
        contant.classList.remove("active");
    }, 3000);
}

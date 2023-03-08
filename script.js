let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let reset = document.querySelector('#reset');

add.addEventListener("click", function() {
    console.log('add');
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;
    output.innerText = result;
});

subtract.addEventListener('click', function() {
    console.log('subtract');
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
    if (result < 0) {
        result = 0;
    };
    output.innerText = result;
});

reset.addEventListener('click', function() {
    console.log('reset');
    let output = document.querySelector("#output");
    output.innerText = 0;
});

console.log(add, subtract);
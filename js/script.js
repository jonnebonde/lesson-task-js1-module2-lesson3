// question 1

const btn = document.querySelector(".btn");

function buttonEvent() {
    console.log("I'm a button");
};

btn.addEventListener("click", buttonEvent);

// question 2

const input = document.querySelector("input")
const button = document.querySelector("form button");
const count = document.querySelector("b.count");

function CountingNumbers() {
    const textCount = input.value.trim().length;
    count.innerHTML = textCount;

}

button.addEventListener("click", CountingNumbers);

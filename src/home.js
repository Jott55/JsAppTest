const text_input = document.getElementById("text-input");
const text_container = document.getElementById("text-container");
const text_words = document.getElementById("text-words");
const points = document.getElementById("points-span");

const random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const text_generate_words = () => {
    let arr = ["mango", "sprite", "pepsi"];
    return arr[random(0, 2)];
}


let word = text_generate_words();
let word_i = 0;
let score = 0;

text_words.textContent = word;

const text_check_words = () => {
    if (word === text_input.value.replace(/\s/g, "")) {
        text_container.textContent = "yay";
        score += 1;
    } else {
        text_container.textContent = "ohh";
        score -= 1;
    }
    text_input.value = "";
    points.innerText = score;
    word = text_generate_words();
    text_words.textContent = word;
}

const text_get_input = () => {
    word_i = text_input.value.length;

    if (word_i > word.length) {
        text_container.style.backgroundColor = "black";
        return text_check_words();
    }

    let word_slice = word.slice(0, text_input.value.length);
    
    if (text_input.value === word_slice) {
        text_container.style.backgroundColor = "green";
    }
    else { 
        text_container.style.backgroundColor = "red";
    }

    if (text_input.value !== word_slice) {
    }
}

text_input.addEventListener("input", (e) => {
    console.log(word);
    text_get_input();
})
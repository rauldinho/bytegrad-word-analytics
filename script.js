const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebooksNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");
const invalidWords = ["<script>"];

const inputHandler = () => {
    //example of inmput validation
    if (textareaEl.value.includes(invalidWords)) {
        alert("You cannot use that!");
        textareaEl.value = textareaEl.value.replace("<script>", "");
    }

    //determine new numbers
    const totalChars = textareaEl.value.length;
    const twitterChars = 280 - totalChars;
    const facebookChars = 2200 - totalChars;
    let totalWords = textareaEl.value.split(" ").length;

    if (textareaEl.value.length === 0) {
        totalWords = 0;
    }

    //add visual indicator if limit is exceeded
    if (twitterChars < 0) {
        twitterNumberEl.classList.add("stat__numer--limit");
    } else {
        twitterNumberEl.classList.remove("stat__numer--limit");
    }

    if (facebookChars < 0) {
        facebooksNumberEl.classList.add("stat__numer--limit");
    } else {
        facebooksNumberEl.classList.remove("stat__numer--limit");
    }

    //set new numbers
    charactersNumberEl.textContent = totalChars;
    twitterNumberEl.textContent = twitterChars;
    facebooksNumberEl.textContent = facebookChars;
    wordsNumberEl.textContent = totalWords;
};

textareaEl.addEventListener("input", inputHandler);

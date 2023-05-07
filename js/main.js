// check localstorage
if (window.localStorage.color) {
    document.documentElement.style.setProperty(
        "--main-color",
        `#${window.localStorage.color}`
    );
}

// settings hide & open
let gearIcon = document.querySelector(".settings .gear");
let settings = document.querySelector(".settings");

gearIcon.addEventListener("click", () => {
    settings.classList.toggle("open");
});

// change main color
let colors = Array.from(
    document.querySelectorAll(".settings .all-settings .color .options span")
);

colors.forEach((color) => {
    color.addEventListener("click", () => {
        document.documentElement.style.setProperty(
            "--main-color",
            `#${color.getAttribute("data-color")}`
        );

        window.localStorage.color = color.getAttribute("data-color");
    });
});

// active or disactive random background
let activeRandom = document.querySelector(".yes");
let disActiveRandom = document.querySelector(".no");

activeRandom.addEventListener("click", () => {
    randomBg();

    activeRandom.style.opacity = "1";
    disActiveRandom.style.opacity = "0.5";

    window.localStorage.bgRandom = "yes";
});

disActiveRandom.addEventListener("click", () => {
    clearInterval(changeBgImage);

    disActiveRandom.style.opacity = "1";
    activeRandom.style.opacity = "0.5";

    window.localStorage.bgRandom = "no";
});

let changeBgImage;

// functions
function randomBg() {
    // random background image
    let landing = document.querySelector(".landing");

    changeBgImage = setInterval(() => {
        let randomNum = Math.round(Math.random() * 4) + 1;
        landing.style.backgroundImage = `url('./images/0${randomNum}.jpg')`;
    }, 5000);
}

if (window.localStorage.bgRandom == "yes") {
    activeRandom.click();
} else {
    disActiveRandom.click();
}

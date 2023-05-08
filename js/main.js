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

// skills progress animation
let bars = Array.from(
    document.querySelectorAll(
        ".our-skills .container .skills .skill .bar .progress"
    )
);

// image popup
let galleryImages = Array.from(
    document.querySelectorAll(".gallery .images > img")
);
let popup = document.querySelector(".gallery .image-popup");
let overlay = document.getElementsByClassName("overlay")[1];
let exitPopup = document.querySelector(".gallery .image-popup span");
let popupImage = document.querySelector(".gallery .image-popup > img");
let popupHeading = document.querySelector(".gallery .image-popup > h3");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        overlay.style.display = `block`;
        popup.style.display = `block`;

        popupImage.setAttribute("src", `${image.getAttribute("src")}`);
        popupHeading.textContent = `image ${image.getAttribute("data-num")}`;
    });
});

exitPopup.addEventListener("click", () => {
    overlay.style.display = `none`;
    popup.style.display = `none`;
});

// about us animation
let aboutText = document.querySelector(".about-us .container .text");
let aboutImage = document.querySelector(".about-us .container .image");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        aboutText.style.transform = `translateX(0)`;
        aboutText.style.opacity = `1`;

        aboutImage.style.transform = `translateX(0)`;
        aboutImage.style.opacity = `1`;
    }

    if (window.scrollY >= 900) {
        bars.forEach((bar) => {
            bar.style.width = `${bar.getAttribute("data-width")}`;
        });
    }

    if (window.scrollY >= 1300) {
        document.querySelector(".gallery .images").style.opacity = `1`;
        document.querySelector(
            ".gallery .images"
        ).style.transform = `translateY(0)`;
    }

    if (window.scrollY >= 3000) {
        let features = document.querySelector('.our-features .features');

        features.style.opacity = `1`;
        features.style.transform = `translateY(0)`;
    }
});

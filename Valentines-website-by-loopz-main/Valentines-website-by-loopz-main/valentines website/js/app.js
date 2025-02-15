const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

document.body.style.backgroundColor = "#0F172A"; // Dark blue background
document.body.style.color = "#93C5FD"; // Light blue text

yes.style.backgroundColor = "#3B82F6"; // Blue button
no.style.backgroundColor = "#1E40AF"; // Darker blue button

yes.style.color = "#FFFFFF";
no.style.color = "#FFFFFF";

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4.crying.gif",
  "../resources/5.crying.gif",
  "../resources/idc.gif"
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "../resources/rusure.gif";
    text.innerHTML = "Anong no!!???🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
  } else if (count == 3) {
    gif.src = "../resources/3shocked-1.gif";
    text.innerHTML = "Ahhh talagang inulit mo pa ahh!!!???";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
  } else if (count == 4) {
    gif.src = "../resources/4.crying.gif";
    text.innerHTML = "Umiiyak na yung pusa oh?? Di ka ba naaawa??!!!";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
  } else if (count == 5) {
    gif.src = "../resources/5.crying.gif";
    text.innerHTML = "Pangit talaga ng ugali nito ohh!!!";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  } else {
    let currentHeight = parseInt(yes.style.height) || 90;
    let currentWidth = parseInt(yes.style.width) || 96;
    yes.style.height = `${currentHeight + 5}%`;
    yes.style.width = `${currentWidth + 5}%`;
  }
  count++;
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "../resources/idc.gif";
  text.innerHTML = "Ganyan dapat Jasmin!!!!";
  yes.innerHTML = '<a href="https://www.facebook.com/abigail.palenbadana/" style="color: white;">Message me</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});

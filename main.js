// set the initial paths
// rotate paths and animate

const darkPath = document.getElementById("dark");
const lightPath = document.getElementById("light");
let index = 1;

const rotateImages = () => {
  if (index == 0) {
    index++;
  } else {
    index--;
  }
  darkPath.setAttribute("d", darks[index]);
  lightPath.setAttribute("d", lights[index]);
}

rotateImages();
let interval = setInterval(() => {
  rotateImages();
}, 10000);

const transition = () => {
  if (interval != null) {
    clearInterval(interval);
  }
  rotateImages();
  interval = setInterval(() => {
    rotateImages();
  }, 10000);
}

darkPath.addEventListener("click", transition);
lightPath.addEventListener("click", transition);

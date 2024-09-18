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
setInterval(() => {
  rotateImages();
}, 10000);

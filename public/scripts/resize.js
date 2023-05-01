const fonts = [10, 40];
const widths = [375, 3840];

const computeFontSize = (width) => {
  const slope = (fonts[1] - fonts[0]) / (widths[1] - widths[0]);
  const intercept = fonts[0] - slope * widths[0];
  return slope * width + intercept;
}

const changeFontSize = () => {
  const winWidth = window.innerWidth;
  window.document.documentElement.style.setProperty(
    "--font-size",
    `${computeFontSize(winWidth)}px`
  );
}

changeFontSize();

window.addEventListener("resize", changeFontSize);

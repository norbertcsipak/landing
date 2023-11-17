const genNumber = () => {
  document.getElementById("value").style.setProperty("--timer", 7);
};

setInterval(genNumber, 2000);
setTimeout(genNumber);

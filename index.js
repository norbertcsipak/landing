const genNumber = () => {
  const value = document.querySelector(".value")
  value.style.setProperty("--timer", 7);
};

setInterval(genNumber, 2000);
setTimeout(genNumber);

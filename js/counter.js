function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const obj = document.getElementById("learning-hours");
const ins = document.getElementById("counter-assignment");
const ytd = document.getElementById("counter-internship");
animateValue(obj, 0, 600, 3000);
animateValue(ins, 0, 13, 3000);
animateValue(ytd, 0, 2, 3000);
// select all children of form element

const form = [...document.querySelector(".form").children];

form.forEach((item, i) => {
  // set item's opacity to 1 after some interval
  setTimeout(() => {
    item.style.opacity = 1;
  }, i * 100);
});

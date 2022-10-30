let lastScroll = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-100px";
  }
  lastScroll = window.scrollY;
  console.log(lastScroll, "scrollY");
});

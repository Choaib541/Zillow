document.querySelector(".bi-list").onclick = () => {
  document
    .querySelector(".nav_bar_list")
    .classList.add("nav_bar_list_showcloseanimation");
};
document.querySelector(".bi-x").onclick = () => {
  document
    .querySelector(".nav_bar_list")
    .classList.remove("nav_bar_list_showcloseanimation");
};

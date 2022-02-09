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

document.querySelector(".trigger").onclick = () => {
  document.querySelector(".listing").classList.add("unclip_listing");
  document.querySelector(".innerlisting").classList.add("unclip_listing");
};

document.querySelector(".trigger_close").onclick = () => {
  document.querySelector(".innerlisting").classList.remove("unclip_listing");
  document.querySelector(".listing").classList.remove("unclip_listing");
};
window.onscroll = () => {
  if (window.scrollY >= 350) {
    document.querySelector(".trigger").style.cssText =
      "opacity: 1;pointer-events: auto;transform: translateY(0px);";
  } else {
    document.querySelector(".trigger").style.cssText =
      "opacity: 0;pointer-events: none;transform: translateY(20px);";
  }
};
document.querySelector(".Sign_up").onclick = () => {
  document.querySelector(".fstttt").classList.add("backun");
  document.querySelector(".seconnnnnd").classList.add("backzeroo");

  if (
    document.querySelector(".seconnnnnd").classList.contains("backon") &&
    document.querySelector(".fstttt").classList.contains("backzeroo")
  ) {
    document.querySelector(".seconnnnnd").classList.remove("backon");
    console.log(3);
    document.querySelector(".fstttt").classList.remove("backzeroo");
  }
  console.log(2);
};
document.querySelector(".log_in_in").onclick = () => {
  document.querySelector(".fstttt").classList.remove("backun");
  document.querySelector(".seconnnnnd").classList.remove("backzeroo");

  document.querySelector(".seconnnnnd").classList.toggle("backon");
  console.log(1);
  document.querySelector(".fstttt").classList.toggle("backzeroo");
};

function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
    } else {
      menuContent.style.display = "block";
    }
  }
//分割线-------------------------------------------------

document.querySelector('.toggle-button').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
});

window.addEventListener('click', (e) => {
  if (!document.querySelector('.toggle-button').contains(e.target) && !document.querySelector('.menu').contains(e.target)) {
      document.querySelector('.menu').classList.remove('active');
  }
});
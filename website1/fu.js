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
    const menu2 = document.querySelector('.menu2');
    if (menu2.style.display === 'flex') {
        menu2.style.display = 'none';
    } else {
        menu2.style.display = 'flex';
    }
});
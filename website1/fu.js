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
  const menu = document.querySelector('.menu2');
  if (menu2.style.display === 'flex') {
      menu2.style.display = 'none';
  } else {
      menu2.style.display = 'flex';
  }
});


function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function submitInput() {
  let input = document.getElementById('userInput').value;
  alert("您输入的信息是: " + input);
  closePopup();
  const containerToDelete = document.getElementById('containerToDelete');//搞到容器信息
  containerToDelete.remove();//拆了!
}


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

function closePopup2() {
  document.getElementById('popup2').style.display = 'none';
}



function submitInput() {
  const correctImages = ['image4', 'image3', 'image5', 'image8','image9']; // 这5个是正确的图片
  const selectedImages = [];
  const userInput = document.getElementById('userInput');
  const userInput2 = document.getElementById('userInput2');
  const containerToDelete = document.getElementById('containerToDelete');
  const containerToDelete2 = document.getElementById('containerToDelete2');

  //alert("您输入的信息是: " + userInput.value);
  alert("信息分析中......");

  document.querySelectorAll('input[name="image"]:checked').forEach(checkbox => {
    selectedImages.push(checkbox.value);
});




if (selectedImages.length === 5 && selectedImages.every(image => correctImages.includes(image))) {
  closePopup(); // 关闭第一个弹窗
  if (containerToDelete) {
      containerToDelete.remove(); // 移除第一个容器
  }
  if (userInput2) {
      alert("你 过 关 !");
  }
  closePopup2(); // 关闭第二个弹窗
  if (containerToDelete2) {
      containerToDelete2.remove(); // 移除第二个容器
  }
} else {
  alert("你的机械成分疑似过高");
  closePopup(); // 关闭第一个弹窗
  if (containerToDelete) {
      containerToDelete.remove(); // 移除第一个容器
  }
}
}
//------------------------------------------------------------------------------

function submitInput2() {
  const correctImages = ['image11', 'image13', 'image15', 'image16','image17']; // 这5个是正确的图片
  const selectedImages = [];
  const userInput2 = document.getElementById('userInput2');
  const containerToDelete2 = document.getElementById('containerToDelete2');

  alert("信息分析中......");


  document.querySelectorAll('input[name="image"]:checked').forEach(checkbox => {
    selectedImages.push(checkbox.value);
});




if (selectedImages.length === 5 && selectedImages.every(image => correctImages.includes(image))) {
  //closePopup(); // 关闭第一个弹窗
  //if (containerToDelete) {
//      containerToDelete.remove(); // 移除第一个容器
//  }
  if (userInput2) {
      alert("你 过 关 !");
  }
  closePopup2(); // 关闭第二个弹窗
  if (containerToDelete2) {
      containerToDelete2.remove(); // 移除第二个容器
  }
} else {
  alert("准备好光速飞船吧");

  //closePopup(); // 关闭第一个弹窗
  //if (containerToDelete) {
   //   containerToDelete.remove(); // 移除第一个容器
  }
}

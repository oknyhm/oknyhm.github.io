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

/*function submitInput() {
  let input = document.getElementById('userInput').value;
  alert("您输入的信息是: " + input);
  closePopup();
  const containerToDelete = document.getElementById('containerToDelete');//搞到容器信息
  containerToDelete.remove();//拆了!
}*/

function submitInput() {
  const correctImages = ['image1', 'image3', 'image5', 'image6','image7']; // 这5个是正确的图片
  const selectedImages = [];
  const userInput = document.getElementById('userInput');
  const userInput2 = document.getElementById('userInput2');
  const containerToDelete = document.getElementById('containerToDelete');
  const containerToDelete2 = document.getElementById('containerToDelete2');

  alert("您输入的信息是: " + userInput.value);


  document.querySelectorAll('input[name="image"]:checked').forEach(checkbox => {
    selectedImages.push(checkbox.value);
});


// 检查是否选择了正确的图片
/*if (selectedImages.length === 3 && selectedImages.every(image => correctImages.includes(image))) {
    //document.getElementById('popup').style.display = 'none';
    //document.getElementById('popup2').style.display = 'block';
    //const containerToDelete = document.getElementById('containerToDelete');//搞到容器信息
   // closePopup();
    containerToDelete.remove();//拆了!
    
   // let input2 = document.getElementById('userInput2').value;
   // const containerToDelete2 = document.getElementById('containerToDelete2');//搞到容器信息
    containerToDelete2.remove();//拆了!
   // closePopup2();

} else {
    //alert(" ");
   // const containerToDelete = document.getElementById('containerToDelete');//搞到容器信息
    //closePopup();
    containerToDelete.remove();//拆了!

}
}*/


// 假设image1是错误选项
/*if (selectedImages.includes('image1')&&('image3')&&('image5')&&('image6')&&('image7')) {
    alert("您选择的图片是: " + selectedImages.join(", "));
    closePopup();
    const containerToDelete = document.getElementById('containerToDelete');//搞到容器信息
    containerToDelete.remove();//拆了!
} else {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup2').style.display = 'block';
}
}*/

if (selectedImages.length === 5 && selectedImages.every(image => correctImages.includes(image))) {
  closePopup(); // 关闭第一个弹窗
  if (containerToDelete) {
      containerToDelete.remove(); // 移除第一个容器
  }
  if (userInput2) {
      alert("第二个输入框的信息是: " + userInput2.value);
  }
  closePopup2(); // 关闭第二个弹窗
  if (containerToDelete2) {
      containerToDelete2.remove(); // 移除第二个容器
  }
} else {
  alert("请确保您选择了正确的5个图片。");
  closePopup(); // 关闭第一个弹窗
  if (containerToDelete) {
      containerToDelete.remove(); // 移除第一个容器
  }
}
}
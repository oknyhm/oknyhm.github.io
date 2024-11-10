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
  const container11 = document.getElementById('container11');
  const container22 = document.getElementById('container22');
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
      alert("你 过 关 !");
     // console.log('1');
     var user = "666";
     setCookie('username',user,5)
      container11.style.display = 'flex';
      container22.style.display = 'flex';
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
      containerToDelete2.style.display = 'flex';
  }
}
}
//------------------------------------------------------------------------------

function submitInput2() {
  const correctImages = ['image11', 'image13', 'image15', 'image16','image17']; // 
  const selectedImages = [];
  const userInput2 = document.getElementById('userInput2');
  const containerToDelete2 = document.getElementById('containerToDelete2');
  const container11 = document.getElementById('container11');
  const container22 = document.getElementById('container22');
  const button = document.getElementById('myButton');
  alert("信息分析中......");


  document.querySelectorAll('input[name="image"]:checked').forEach(checkbox => {
    selectedImages.push(checkbox.value);
});




if (selectedImages.length === 5 && selectedImages.every(image => correctImages.includes(image))) {
  //closePopup(); // 关闭第一个弹窗
  //if (containerToDelete) {
//      containerToDelete.remove(); // 移除第一个容器
//  }
  if (1) {
      alert("你 过 关 !");
     // console.log('1');
     //var user=getCookie("username");
    var user = "666";
            setCookie('username',user,5)
     container22.style.display = 'flex';
     container11.style.display = 'flex';
  }
  closePopup2(); // 关闭第二个弹窗
  if (containerToDelete2) {
      containerToDelete2.remove(); // 移除第二个容器
  }
} else {
  alert("准备好光速飞船吧");
button.remove();
var tempwindow=window.open('_blank'); // 先打开页面
tempwindow.location='https://www.bilibili.com/video/BV1ct4y1n7t9/'; // 后更改页面地址
  window.close();

  //closePopup(); // 关闭第一个弹窗
  //if (containerToDelete) {
   //   containerToDelete.remove(); // 移除第一个容器
  }
}
//--------------------------------------------------------------------------
function setCookie(cname,cvalue,exminute){       //单位是分钟!!!
	var d = new Date();
	d.setTime(d.getTime()+(exminute*60*1000));//1分钟=60000毫秒
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}

function checkCookie(){

  const userInput = document.getElementById('userInput');
  const userInput2 = document.getElementById('userInput2');
  const containerToDelete = document.getElementById('containerToDelete');
  const container11 = document.getElementById('container11');
  const container22 = document.getElementById('container22');
  const containerToDelete2 = document.getElementById('containerToDelete2');

	var user=getCookie("username");
	if (user!=""){
		alert("欢迎再次访问");
    containerToDelete.remove(); // 移除第一个容器
    container11.style.display = 'flex';
    container22.style.display = 'flex';
	}
	else {
		//user = "1";
    ////prompt("请输入你的名字:","");
  		//if (user!="" && user!=null){
    	//	setCookie("username",user,1);
    //	}
	}
}

let form = document.querySelector('form')
let returnBtn = document.querySelector('.card-back .return')
let timerBtn = document.querySelector('.card-back .timer')
let timer
let setTimer = document.querySelector('.set-timer')
let timer30 = document.querySelector('.set-timer-30')
let timer60 = document.querySelector('.set-timer-60')
let timer90 = document.querySelector('.set-timer-90')
let cancelBtn = document.querySelector('.cancel-btn')
let videoLink = document.querySelector('#video')
let delay

function loadXMLDoc(api,url,callback){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
        console.log('qingqiu成功')
        typeof callback == "function" && callback(xmlhttp.responseText)
		}
	}
	xmlhttp.open("GET",api+url,true);
	xmlhttp.send();
}


window.onresize = function () {
  document.body.style.minHeight = window.innerHeight + 'px'
}
window.onresize()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let mediaInput = document.querySelector('#media-url')
  let mediaURL = mediaInput.value
  let api = document.querySelector('.api:checked').value
  let card = document.querySelector('.card')
  let player = document.querySelector('.player')
  
  mediaInput.blur()
  card.classList.add('turn-to-back')
  delay = window.setTimeout(function () {
    let strArr=mediaURL.split('?id=')
    let str=''
    if(strArr[1]){
      let subStrArr=strArr[1].split('&')
      str=subStrArr[0]
    }
    console.log(str,'str----')

    player.src = api + str

    setTimeout(() => {
      alert('转化成功，用浏览器打开下载吧！！！') 
    }, 3000);
    // loadXMLDoc(api,mediaURL,(res)=>{
    //   let res_=JSON.parse(res)

    //   console.log('---------',typeof res_,res_,typeof res,JSON)
    //   if(res_.code==200){
    //     player.src=res_.url
    //   }else{
    //     alert('转化失败，请重试！！！')
    //     location.reload()
    //   }
    // })
  }, 0)

  returnBtn.addEventListener('click', (e) => {
    player.src = ''
    card.classList.remove('turn-to-back')
    mediaInput.value = ''
    window.clearTimeout(delay)
  })
})

timerBtn.addEventListener('click', function () {
  console.log('clicked')
  setTimer.classList.toggle('show-set-timer')
})

timer30.addEventListener('click', (e) => {
  setTimer.classList.remove('show-set-timer')
  timer = window.setTimeout(function turnToFront() {
    returnBtn.click()
  }, 1800000)
})

timer60.addEventListener('click', (e) => {
  setTimer.classList.remove('show-set-timer')
  timer = window.setTimeout(function turnToFront() {
    returnBtn.click()
  }, 3600000)
})

timer90.addEventListener('click', (e) => {
  setTimer.classList.remove('show-set-timer')
  timer = window.setTimeout(function turnToFront() {
    returnBtn.click()
  }, 5400000)
})

cancelBtn.addEventListener('click', (e) => {
  setTimer.classList.remove('show-set-timer')
  if(timer) {
    window.clearTimeout(timer)
  }
})

videoLink.addEventListener('click',(e)=>{
  e.preventDefault()
  console.log('click')
  console.log(location.href,location.origin)
  location.href=location.origin
})
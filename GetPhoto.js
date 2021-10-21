let gettacherphoto = document.createElement('p');
gettacherphoto.id = 'getphototeacher';
gettacherphoto.innerHTML = '<a style="color: black; cursor: pointer;">Get photo</a>';
let teacherphoto = document.createElement('img');
teacherphoto.id = 'URLphoto';
teacherphoto.style.width = "150px";
teacherphoto.style.height = "180px";

let getteacheridformaf;
gettacherphoto.onclick = function() {  //функция добычи фото П из ТРМ и отображении в АФ по нажатию на Get photo
	    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
            getteacheridformaf = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        console.log("getteacheridformaf = " + ' ' + getteacheridformaf);
    }
	
		document.getElementById('responseTextarea1').value = '{}'
		document.getElementById('responseTextarea2').value = "https://skyeng.ru/teachers/details/"+getteacheridformaf
		document.getElementById('responseTextarea3').value = 'imageurl'
		document.getElementById('sendResponse').click()
	
	    function getImageUrl() {
        document.getElementById('responseTextarea1').value = '{}'
        document.getElementById('responseTextarea2').value = "https://skyeng.ru/teachers/details/"+getteacheridformaf
        document.getElementById('responseTextarea3').value = 'imageurl'

        var rezresp = document.getElementById('responseTextarea1').getAttribute('imageurl')
        var convertrezresp= rezresp.match(/(https:\/\/auth-avatars-skyeng.imgix.net.*?\d+.\S+).auto/)[1];
		document.getElementById('responseTextarea1').removeAttribute('imageurl');
		teacherphoto.src = convertrezresp;
    }
    setTimeout(getImageUrl, 1000);
	
	document.getElementById('getphototeacher').replaceWith(teacherphoto)
	
	document.querySelector('#URLphoto').onclick = function() {
	document.querySelector('#URLphoto').replaceWith(gettacherphoto)
	}
}

				for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) { //добавление кнопки Get Photo
							if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "teacher") {
								  for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
										if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id")											{
											document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].append(gettacherphoto)
										}
									}
							}
					}

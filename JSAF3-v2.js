

function mystyles() {
	let mstl = document.createElement('style');
	document.body.append(mstl);
	var style = `.win_btn {
		background-color: #768d87;
		border-radius: 10px;
		border: 1px solid #566963;
		color: #ffffff;
		font-size: 12px;
		padding: 3px 2px;
		margin: -2px 1px;
	}
	button {
		background-color:#768d87;
		border-radius:5px; 
		border:1px solid #566963; 
		color:#ffffff; 
		padding:2px 2px;
	}

	.switch-btn {
		display: inline-block;
		width: 62px; /* ширина переключателя */
		height: 24px; /* высота переключателя */
		border-radius: 12px; /* радиус скругления */
		background: #bfbfbf; /* цвет фона */
		z-index: 0;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		position: relative;
		transition-duration: 300ms; /* анимация */
	}
	.switch-btn::after {
		content: "";
		height: 36px; /* высота кнопки */
		width: 36px; /* ширина кнопки */
		border-radius: 18px; /* радиус кнопки */
		background: #fff; /* цвет кнопки */
		top: -6px; /* положение кнопки по вертикали относительно основы */
		left: -6px; /* положение кнопки по горизонтали относительно основы */
		transition-duration: 300ms; /* анимация */
		box-shadow: 0 0 10px 0 #999999; /* тень */
		position: absolute;
		z-index: 1;
	}
	.switch-on {
		background: #fff;
		box-shadow: inset 0 0 10px 0 #999999; /* тень */
	}
	.switch-on::after {
		left: 30px;
		background: #118c4e;
	}`
	mstl.innerHTML = style;
}

var win_AFhelper =  
    `<div style="display: flex; width: 301px;">
        <span style="width: 301px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" style="width:100px">Русский</button>
					<button id="hideMenu" style="margin-left: 50px">hide</button>
					<button id="setting" style="margin-left: 80px">S</button>
				</div>
				<div style="margin: 5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
				<button id="tmplt1_save">save</button>
				<button id="tmplt1_snd">send</button>
				
				<button id="tmplt2_save" style="margin-left: 25px">save</button>
				<button id="tmplt2_snd">send</button>
				
				<button id="tmplt3_save" style="margin-left: 25px">save</button>
				<button id="tmplt3_snd">send</button>
			</div>
			<div style="margin: 5px;" id="7str">
				<textarea style="width: 291px; height: 125px;" id="inp"></textarea>
				<button id="msg1" style="width:100px;">Отправить</button>
				<button id="snd" style="width:50px; margin-left:16px">send</button>
				<button id="msg" style="width:100px; margin-left:16px">Заметки</button>
			</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 300px">
			</div>
		</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
			<div style="margin: 5px; width: 300px">
				<input id="sound_adr" placeholder="Адрес звука" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				<button id="sound_save">save</button>
				<button id="switcher">ВКЛ</button>
			</div>
			<div style="margin: 5px; width: 300px">
				<p style="color:white; margin:0 0 5px 0;"> Отдел: 
				<button id="type_KC">КЦ</button>
				<button id="type_TP">ТП</button>
				<button id="type_TS">TS</button>
				</p>
			</div>
			<div style="margin: 5px; width: 300px" id="testDiv">
				<button id="takeNewChat">Взять чат</button>
				<p style="color:white; margin:0 0 5px 0;" id="howManyChats"></p>
			</div>
		</div>
	</span>
    </div>`;
	
let audio


if (localStorage.getItem('winTopAF') == null) {
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}



if (localStorage.getItem('scriptAdr') == null) {
    localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec');
}

let button2 = document.createElement('p');
button2.id = 'userIdScript';
button2.innerHTML = "Info";
let button22 = document.createElement('p');
button22.id = 'userShowcaseScript';
button22.innerHTML = "Showcase";

let button3 = document.createElement('p');
button3.id = 'nextStudentIdScript';
button3.innerHTML = "Info";
let button33 = document.createElement('p');
button33.id = 'nextStudentShowcaseScript';
button33.innerHTML = "Showcase";

let button4 = document.createElement('p');
button4.id = 'nextTeacherIdScript';
button4.innerHTML = "Info";
let button44 = document.createElement('p');
button44.id = 'nextTeacherShowcaseScript';
button44.innerHTML = "Showcase";
let template_flag = 0
let template_flag2 = 0
let word_text = ""
let template_text = ""
let flagggg = 0

button2.onclick = function() {
	if(document.getElementById('btn_hide').style.display != 'none')
		btn_hide.click()
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
			document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
	}
	btn1_student.click()
}
button22.onclick = function() {
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
			copyToClipboard1('https://profile.skyeng.ru/profile/' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0] + '/showcase')
	}
}

button3.onclick = function() {
	if(document.getElementById('btn_hide').style.display != 'none')
		btn_hide.click()
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
			document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
	}
	btn1_student.click()
}
button33.onclick = function() {
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
			copyToClipboard1('https://profile.skyeng.ru/profile/' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText + '/showcase')
	}
}
button4.onclick = function() {
	if(document.getElementById('btn_hide').style.display != 'none')
		btn_hide.click()
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
			document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
	}
	btn1_student.click()
}
button44.onclick = function() {
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
			copyToClipboard1('https://profile.skyeng.ru/profile/' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText + '/showcase')
	}
}

let addInfoUser = document.createElement('div')

let hashBut = document.createElement('div')
hashBut.id = "hashBut"
hashBut.innerHTML = "Хэш"
hashBut.style.marginRight = "15px";


let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";

maskBack.onclick = function () {
	name = document.getElementById('maskBack').getAttribute('name')
	email = document.getElementById('maskBack').getAttribute('email')
	phone = document.getElementById('maskBack').getAttribute('phone')
	mask = document.getElementById('maskBack').getAttribute('mask')
	if(document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText == name &&
	document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText == email &&
	document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText == phone) {
		document.getElementsByClassName('ant-modal-wrap')[mask].style.display = ''
		document.getElementsByClassName('ant-modal-mask')[mask].style.display = ''
		document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = '' // кнопки сверху
		document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = '' // кнопка заметок
		document.getElementById('maskBack').style.display = 'none'
	} else {
		document.getElementById('maskBack').innerHTML = "Открыт неверный чат"
		setTimeout(function() {document.getElementById('maskBack').innerHTML = "Вернуть"}, 3000)
	}
}



let maskBackHide = document.createElement('span')
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style.marginRight = "15px";
maskBackHide.style.marginLeft = "15px";
maskBackHide.style.display = "";

maskBackHide.onclick = function () {
	if(document.getElementsByClassName('ant-modal-content')[0].childNodes[1].firstChild.innerText == "Добавить комментарий к диалогу") {
			document.getElementsByClassName('ant-modal-wrap')[0].style.display = 'none'
			document.getElementsByClassName('ant-modal-mask')[0].style.display = 'none'
			document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
			document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
			document.getElementById('maskBack').style.display = ''
	
			document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
			document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
			document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
			document.getElementById('maskBack').setAttribute('mask', 0)
	} else
		for(i = 0;; i++) {
			if(document.getElementsByClassName('ant-modal-wrap')[i] == undefined) {
				document.getElementsByClassName('ant-modal-wrap')[i - 1].style.display = 'none'
				document.getElementsByClassName('ant-modal-mask')[i - 1].style.display = 'none'
				document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
				document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
				document.getElementById('maskBack').style.display = ''
				
		
				document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
				document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
				document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
				document.getElementById('maskBack').setAttribute('mask', i - 1)
				break;
			}
		}
}


hashBut.onclick = function () {
	adr = document.location.href
	adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	if((adr1 == undefined || adr1 == "") || window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1) {
		if(window.location.href.indexOf('skyeng.autofaq.ai/logs') === -1) {
			document.getElementById('hashBut').innerHTML = "Ошибка"
			setTimeout(function() {document.getElementById('hashBut').innerHTML = "Хэш"}, 3000)
		} else {
			adr1 = document.getElementsByClassName('ant-spin-nested-loading')[1].firstChild.firstChild.firstChild.childNodes[1].textContent
			copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1)
			document.getElementById('hashBut').innerHTML = "Скопировано"
			setTimeout(function() {document.getElementById('hashBut').innerHTML = "Хэш"}, 3000)
		}
	} else {
		if(localStorage.getItem('scriptAdr') == TS_addr)
			copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-18/'+adr1)
		else
			copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1)
		document.getElementById('hashBut').innerHTML = "Скопировано"
		setTimeout(function() {document.getElementById('hashBut').innerHTML = "Хэш"}, 3000)
	}
	
}

let wintAF = document.createElement('div');
document.body.append(wintAF);
wintAF.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintAF.setAttribute('id' ,'AF_helper');
wintAF.innerHTML = win_AFhelper; 
var chatsArray = []
var TS_addr = 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec'
var KC_addr = 'https://script.google.com/macros/s/AKfycbzNJgvbbgMIRzEuIMv2yR2VRE5lT7xrhouGVod0/exec'
var TP_addr = 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec'
var TP_addr2 = 'https://script.google.com/macros/s/AKfycbxnGXdfgYTfmBiviW_sxBa2Q1YhhiutNv5FEk9ZVw/exec'
var flagLangBut = 0
function move_again_AF() {

    if(window.location.href.indexOf('autofaq') === -1) {
		document.getElementById('AF_helper').style.display = 'none';
	}
		
		
    var listener2 = function(e , a) {
        wintAF.style.left = Number(e.clientX - myX2) + "px";
        wintAF.style.top = Number(e.clientY - myY2) + "px";
        localStorage.setItem('winTopAF', String(Number(e.clientY - myY2)));
        localStorage.setItem('winLeftAF', String(Number(e.clientX - myX2)));
    };

    wintAF.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
        window.myX2 = a.layerX; 
        window.myY2 = a.layerY; 
        document.addEventListener('mousemove', listener2);
    }
    wintAF.onmouseup = function () {document.removeEventListener('mousemove', listener2);}
	
	
    document.getElementById('msg').onclick = function () {
        if(this.innerHTML == "Чат") {
            this.innerHTML = "Заметки";
			localStorage.setItem('msg', 'Заметки')
        } else {
            this.innerHTML = "Чат";
			localStorage.setItem('msg', 'Чат')
        }
	}
    document.getElementById('type_KC').onclick = function () {
		localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbzNJgvbbgMIRzEuIMv2yR2VRE5lT7xrhouGVod0/exec')
		document.getElementById('msg1').style.display = 'none'
		document.getElementById('snd').style.marginLeft = '120px'
		document.getElementById('msg1').innerHTML = 'Доработать'
		document.getElementById('testUsers').style.display = 'none'
		document.getElementById('takeNewChat').style.display = 'none'
		document.getElementById('howManyChats').style.display = 'none'
		getText()
	}
    document.getElementById('type_TP').onclick = function () {
		localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec')
		prepTp()
	}
    document.getElementById('type_TS').onclick = function () {
		localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec')
		document.getElementById('msg1').style.display = 'none'
		document.getElementById('snd').style.marginLeft = '120px'
		document.getElementById('msg1').innerHTML = 'Доработать'
		document.getElementById('testUsers').style.display = 'none'
		document.getElementById('takeNewChat').style.display = 'none'
		document.getElementById('howManyChats').style.display = 'none'
		getText()
	}
	if(localStorage.getItem('scriptAdr') != TP_addr && localStorage.getItem('scriptAdr') != TP_addr2) {
		document.getElementById('msg1').style.display = 'none'
		document.getElementById('snd').style.marginLeft = '120px'
		document.getElementById('msg1').innerHTML = 'Доработать'
		document.getElementById('testUsers').style.display = 'none'
		document.getElementById('takeNewChat').style.display = 'none'
		document.getElementById('howManyChats').style.display = 'none'
	} else {
		prepTp()
	}
	
    document.getElementById('hideMenu').onclick = function () {
		document.getElementById('AF_helper').style.display = 'none'
		document.getElementById('scriptBut').style.display = ''
	}
    document.getElementById('takeNewChat').onclick = function () {
		getNewChat()
	}
	
    document.getElementById('setting').onclick = function () {
		if(document.getElementById('set_bar').style.display == '')
			document.getElementById('set_bar').style.display = 'none'
		else
			document.getElementById('set_bar').style.display = ''
	}
    document.getElementById('sound_save').onclick = function () {
		localStorage.setItem('sound_str', document.getElementById('sound_adr').value);
		if(document.getElementById('sound_adr').value == "") 
			audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");	
		else
			audio = new Audio(document.getElementById('sound_adr').value);
		document.getElementById('sound_adr').value = "";
	}
	
	if(flagLangBut == 0) {
		document.getElementById('languageAF').onclick = function () {
			if(this.innerHTML == "Русский") {
				this.innerHTML = "Английский";
				document.getElementById('AF_helper').style.background = "#EBC7DF"
			} else {
				this.innerHTML = "Русский";
				document.getElementById('AF_helper').style.background = "#464451"
			}
		}
	}
	
	
	if(document.getElementById('tmplt1_save') != undefined)
		document.getElementById('tmplt1_save').onclick = function () {
			if(document.getElementById('languageAF').innerHTML == "Русский") {
				txt = document.getElementById('inp').value
				localStorage.setItem('tmplt1_ru', txt)
			} else {
				txt = document.getElementById('inp').value
				localStorage.setItem('tmplt1_en', txt)
			}
		}
		
	if(document.getElementById('tmplt2_save') != undefined)
		document.getElementById('tmplt2_save').onclick = function () {
			if(document.getElementById('languageAF').innerHTML == "Русский") {
				txt = document.getElementById('inp').value
				localStorage.setItem('tmplt2_ru', txt)
			} else {
				txt = document.getElementById('inp').value
				localStorage.setItem('tmplt2_en', txt)
			}
		}
		
	if(document.getElementById('tmplt3_save') != undefined)
		document.getElementById('tmplt3_save').onclick = function () {
			if(document.getElementById('languageAF').innerHTML == "Русский") {
				txt = document.getElementById('inp').value
				localStorage.setItem('tmplt3_ru', txt)
			} else {
				txt = document.getElementById('inp').value
				localStorage.setItem('tmplt3_en', txt)
			}
		}
	
	if(document.getElementById('tmplt1_snd') != undefined)
		document.getElementById('tmplt1_snd').onclick = function () {
			if(document.getElementById('languageAF').innerHTML == "Русский") {
				txt = localStorage.getItem('tmplt1_ru')
			} else {
				txt = localStorage.getItem('tmplt1_en')
			}
			if(txt == null || txt == "")
				document.getElementById('inp').value = "Не введен текст 1 шаблона"
			else 
				sendAnswer(txt)
		}
	if(document.getElementById('tmplt2_snd') != undefined)
		document.getElementById('tmplt2_snd').onclick = function () {
			if(document.getElementById('languageAF').innerHTML == "Русский") {
				txt = localStorage.getItem('tmplt2_ru')
			} else {
				txt = localStorage.getItem('tmplt2_en')
			}
			if(txt == null || txt == "")
				document.getElementById('inp').value = "Не введен текст 2 шаблона"
			else 
				sendAnswer(txt)
		}
	if(document.getElementById('tmplt3_snd') != undefined)
		document.getElementById('tmplt3_snd').onclick = function () {
			if(document.getElementById('languageAF').innerHTML == "Русский") {
				txt = localStorage.getItem('tmplt3_ru')
			} else {
				txt = localStorage.getItem('tmplt3_en')
			}
			if(txt == null || txt == "")
				document.getElementById('inp').value = "Не введен текст 3 шаблона"
			else 
				sendAnswer(txt)
		}
	
	
    document.getElementById('msg1').onclick = function () {
        if(this.innerHTML == "Отправить") {
            this.innerHTML = "Доработать";
			localStorage.setItem('msg1', 'Доработать')
        } else {
            this.innerHTML = "Отправить";
			localStorage.setItem('msg1', 'Отправить')
        }
	}
    document.getElementById('snd').onclick = function () {
		document.getElementById('snd').setAttribute('disabled', 'disabled')
		setTimeout(function() {document.getElementById('snd').removeAttribute('disabled')}, 500)
		if(document.getElementById('msg').innerHTML == "Чат") {
			if(template_flag == 1) {
				if(template_flag2 == 1)
					sendAnswerTemplate2(document.getElementById('inp').value, 1)
				else
					sendAnswerTemplate("", "", 1, document.getElementById('inp').value, 1)
			} else {
				sendAnswer(document.getElementById('inp').value, 0)
			}
		}
		else 
			sendComment(document.getElementById('inp').value)
		document.getElementById('inp').value = ""
		
		if(document.getElementById('phone_tr') != undefined)
			document.getElementById('phone_tr').value = ""
		if(document.getElementById('email_tr') != undefined)
			document.getElementById('email_tr').value = ""
	}	

	window.onkeydown = function(e) {
			if(e.key == 'Control') {
					bool = 1;
			}
			if(e.key == 'Enter' && bool == 1) {
				refCurTimer('15:00')
			}
		}
	window.onkeyup = function(e) {
		if(e.key == 'Control') {
			bool = 0;
		}
	}
	
	let button1 = document.createElement('div');
	button1.id = 'scriptBut';
	button1.innerHTML = "Скрипт";
	button1.style.marginRight = "15px";
	button1.style.display = 'none'
	button1.onclick = function() {
		document.getElementById('AF_helper').style.display = 'flex'
		this.style.display = 'none'
	}
	var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
	btnAdd.insertBefore(button1, btnAdd.children[0])
	
	
	
	function screenshots(){
		if(document.getElementsByClassName('expert-chat-display-inner')[0] != undefined)
			for(i = 0; document.getElementsByClassName('expert-chat-display-inner')[0].children[i] != undefined; i++) {
				if(document.getElementsByClassName('expert-chat-display-inner')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
					var div = document.getElementsByClassName('expert-chat-display-inner')[0].children[i]
					var img = document.createElement('img')
					img.src = div.querySelector('a').href
					img.onclick = function() {
						if(this.style.width == '500px')
							this.style.width='100px'
						else
							this.style.width='500px'
					}
					img.style.width = '100px'
					div.querySelector('a').replaceWith(img)
				}
			}
	}
	screenshots()
	setInterval(screenshots, 5000)
	function screenshots2(){
	if(document.getElementsByClassName('chat-messages')[0] != undefined)
		for(i = 0; document.getElementsByClassName('chat-messages')[0].children[i] != undefined; i++) {
			if(document.getElementsByClassName('chat-messages')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
				var div = document.getElementsByClassName('chat-messages')[0].children[i]
				var img = document.createElement('img')
				img.src = div.querySelector('a').href
					img.onclick = function() {
						if(this.style.width == '500px')
							this.style.width='100px'
						else
							this.style.width='500px'
					}
				img.style.width = '100px'
				div.querySelector('a').replaceWith(img)
			}
		}
	}
	screenshots2()
	setInterval(screenshots2, 5000)
	
    document.getElementById('switcher').onclick = function () {
        if(this.innerHTML == "ВКЛ") {
            this.innerHTML = "ВЫКЛ";
			localStorage.setItem('audio', '0');
        } else {
            this.innerHTML = "ВКЛ";
			localStorage.setItem('audio', '1');
        }
	}
	
	
	if (localStorage.getItem('audio') == 0) {
		document.getElementById('switcher').innerHTML = "ВЫКЛ"
	}
	if (localStorage.getItem('audio') == 1) {
		document.getElementById('switcher').innerHTML = "ВКЛ"
	}
	
	if(localStorage.getItem('audio') != null) {
		if(localStorage.getItem('audio') == '0')
			document.getElementById('switcher').innerHTML = 'ВЫКЛ';
		else
			document.getElementById('switcher').innerHTML = 'ВКЛ';
	}
	addInfoUser.style.textAlign = "center"
	addInfoUser.style.color = "white"
	addInfoUser.style = "color: white; text-align: center; cursor: -webkit-grab;"
	loginer = document.getElementById('testUsers')
	loginer.appendChild(addInfoUser)


	loginer.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
	var listener3 = function(e , a) {
		loginer.style.left = Number(e.clientX - myX3) + "px";
		loginer.style.top = Number(e.clientY - myY3) + "px";
		localStorage.setItem('winTop3', String(Number(e.clientY - myY3)));
		localStorage.setItem('winLeft3', String(Number(e.clientX - myX3)));
	};
	loginer.childNodes[1].onmousedown = function (a) {
		window.myX3 = a.layerX; 
		window.myY3 = a.layerY; 
		document.addEventListener('mousemove', listener3);
	}
	loginer.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
	
	user = "student"
	
	if(localStorage.getItem('msg') != null) {
		document.getElementById('msg').innerHTML = localStorage.getItem('msg') 
	}
	if(localStorage.getItem('msg1') != null) {
		document.getElementById('msg1').innerHTML = localStorage.getItem('msg1') 
	}
	
	if(localStorage.getItem('includeTestDiv') != null) {
		document.getElementById('testDiv').style.display = ''
		
		setInterval(function(){
			if(document.getElementById('howManyChats').style.display == "")
				if(document.getElementsByClassName('user_menu-status-name')[0].innerText == "Занят")
					getNewChat(1)
				else
					document.getElementById('howManyChats').innerHTML = ""
		}, 10000)
	} else {
		document.getElementById('testDiv').style.display = 'none'
	}

	getText()
}


function pageClick(pageId) {
	b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
	for(i = 0; i < b.childElementCount; i++) {
		try {
			b.children[1].children[i].style.backgroundColor = '#768d87'
			document.getElementById(i + "page").style.display = 'none'
		} catch (e){}
	}
	document.getElementById(pageId).style.backgroundColor = 'green'
		document.getElementById(pageId[0] + "page").style.display = ''
}

function bagPageButtons(butId) {
	txt = document.getElementById(butId).parentElement.childNodes[0].textContent
	for(l = 0; l < table.length; l++)
		if(table[l][0] == txt) {
			resetFlags()
			document.getElementById('inp').value = table[l][Number(butId[4]) + 1]
			break
		}
}
function transfPageButtons(butName) {
	resetFlags()
	textFromTable = ""
	for(l = 0; l < table.length; l++)
		if(table[l][0] == butName) {
			if(table[l][1] == "Поле") {
				textFromTable = table[l][2]
			} else {
				msgFromTable(table[l][0])
			}
			break
		}
	if(textFromTable == "")
		return
	phone = ""
	textFromTable = textFromTable.split('(phone)')
	if(textFromTable.length > 1) {
		if(document.getElementById('phone_tr').value == "")
			phone = document.getElementById('phone_tr').placeholder
		else
			phone = document.getElementById('phone_tr').value
		if(phone == "Телефон") {
			document.getElementById('inp').value = "Введите номер телефона"
			return
		}
	}
	textFromTable = textFromTable.join(phone)
	
	email = ""
	textFromTable = textFromTable.split('(email)')
	if(textFromTable.length > 1) {
		if(document.getElementById('email_tr').value == "")
			email = document.getElementById('email_tr').placeholder
		else
			email = document.getElementById('email_tr').value
		if(email == "Почта") {
			document.getElementById('inp').value = "Введите почту"
			return
		}
	}
	textFromTable = textFromTable.join(email)
	
	document.getElementById('inp').value = textFromTable
}

async function buttonsFromDoc(butName) {
	if(butName == "ус+брауз")
		if(user == 'student')
			butName = "ус+брауз (У)"
		else
			butName = "ус+брауз (П)"
		
	if(butName == 'Привет') {
		try{
			adr = adr1 = uid = ""
			var values = await getInfo(0).then(values => {adr = values[0]; adr1 = values[1]; uid = values[2];});

			count = await checkHistory(uid.split(',')[0])
			if(count > 1 && flagggg == 0) {
				if(document.getElementById('languageAF').innerHTML == "Русский") {
					if(localStorage.getItem('scriptAdr') == TS_addr)
						txt = 'Помогите мне'
					if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
						txt = "Подождите ТП"
					if(localStorage.getItem('scriptAdr') == KC_addr)
						txt = "Сейчас я вам помогу"
				}
				else {
					if(localStorage.getItem('scriptAdr') == TS_addr)
						txt = "I’m going to help you now."
					if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
						txt = "Подождите (англ)"
					if(localStorage.getItem('scriptAdr') == KC_addr)
						txt = "Подождите (англ)"
				}
				flagggg = 1
			} else {
				flagggg = 0
				a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText
				a = a.split(' ')
				const cyrillicPattern = /^[\u0400-\u04FF]+$/;
				
				if(document.getElementById('languageAF').innerHTML == "Русский")
					if(cyrillicPattern.test(a[0]) && document.getElementById('msg1').innerHTML == "Доработать")
						txt = "Здравствуйте, " + a[0] + "!"
					else
						txt = "Здравствуйте!"
				else
					txt = "Hello!"
			}
		} catch(e) {
			if(document.getElementById('languageAF').innerHTML == "Русский")
				txt = "Здравствуйте!"
			else
				txt = "Hello!"
		}
		if(txt == "I’m going to help you now.")
			sendAnswer(txt)
		else
			sendAnswerTemplate2(txt)
		return
	}		
	
	msgFromTable(butName)
	if(butName == "Серверные")
		if(document.getElementById('msg1').innerHTML != "Доработать") {
			sendComment(document.getElementById('serversInp').value)
			newTag(1370)
		}
}

var bool = 0;	
var table
function getText() {
   var app = localStorage.getItem('scriptAdr'),
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
			   
			table = result;
			console.log('Обновили шаблоны')
			refreshTemplates()

        } catch(e) {console.log(e)}
     }
   

   }
   xhr.send()
}
function refreshTemplates() {
	templatesAF = []
	while(document.getElementById('pages').children[0] != undefined)
		document.getElementById('pages').children[0].remove()
	for(i = 0; document.getElementById(i + 'page') != undefined; i++)
		document.getElementById(i + 'page').remove()
	while(document.getElementById('addTmp').children[0].children[0] != undefined)
		document.getElementById('addTmp').children[0].children[0].remove()
	countOfStr = 0
	countOfPages = 0
	pageName = ""
	addTmpFlag = 0
	b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
	console.log(table)
	for(i = 0; i < table.length; i++) {
		c = table[i]
		switch(c[0]) {
			case '': 
				addTmpFlag = 0
				countOfStr++
				var newStr = document.createElement('div')
				newStr.style.margin = "5px"
				newStr.id = countOfPages + "page_" + countOfStr + "str"
				b.lastElementChild.appendChild(newStr)
				break
			
			case 'Additional templates': 
				addTmpFlag = 1
				break
			case 'Страница':
				var newPageBut = document.createElement('button')
				newPageBut.innerText = c[1]
				pageType = c[2]
				newPageBut.style.marginRight = '4px'
				newPageBut.setAttribute('onclick', 'pageClick(this.id)')
				newPageBut.id = countOfPages + 'page_button'
				b.childNodes[3].appendChild(newPageBut)
				
				var newPage = document.createElement('div')
				newPage.id = countOfPages + 'page'
				b.appendChild(newPage)
				
				countOfPages++
				
				countOfStr = 1
				if(pageType == "Переводы") {
					var newDiv = document.createElement('div')
					newDiv.id = countOfPages + "page_" + countOfStr + "str"
					newDiv.style.margin = "5px"
					
					var newInputPhone = document.createElement('input')
					newInputPhone.id = 'phone_tr'
					newInputPhone.placeholder = 'Телефон'
					newInputPhone.autocomplete = 'off'
					newInputPhone.type = 'text'
					newInputPhone.style = 'text-align: center; width: 100px; color: black; margin-left: 10px'
					
					var newInputEmail = document.createElement('input')
					newInputEmail.id = 'email_tr'
					newInputEmail.placeholder = 'Почта'
					newInputEmail.autocomplete = 'off'
					newInputEmail.type = 'text'
					newInputEmail.style = 'text-align: center; width: 100px; color: black; margin-left: 10px'
					
					newDiv.appendChild(newInputPhone)
					newDiv.appendChild(newInputEmail)
					
					b.lastElementChild.appendChild(newDiv)
					countOfStr++
					
					setInterval(function() {
						if(document.getElementsByClassName('expert-user_details-list')[0] != undefined) {
							if(document.getElementById('phone_tr') != undefined) {
								phone = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText
								if(phone == "-") {
									phone = ""
									document.getElementById('phone_tr').placeholder = "Телефон" 
								} else 
									document.getElementById('phone_tr').placeholder = phone
							}
							if(document.getElementById('email_tr') != undefined) {
								email = document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText
								if(email == "-") {
									email = ""
									document.getElementById('email_tr').placeholder	= "Почта"
								}
								document.getElementById('email_tr').placeholder	= email
							}
						} else {
							if(document.getElementById('email_tr') != undefined) 
								document.getElementById('email_tr').placeholder	= "Почта"
							if(document.getElementById('phone_tr') != undefined)
								document.getElementById('phone_tr').placeholder = "Телефон" 
						}
					}, 1000)
				}
				var newStr = document.createElement('div')
				newStr.style.margin = "5px"
				newStr.id = countOfPages + "page_" + countOfStr + "str"
				b.lastElementChild.appendChild(newStr)
				break
			default:
				switch(pageType) {
					case 'Баги':
						var newString = document.createElement('p')
						newString.style.color = 'white'
						newString.style.margin = '0 0 5px 0'
						newString.innerText = c[0]
						for(j = 0; j < c[1]; j++) {
							var newBut = document.createElement('button')
							newBut.style.width = '20px'
							newBut.style.marginRight = '4px'
							newBut.id = countOfStr + 'str' + (j + 1) 
							newBut.innerText = (j + 1) 
							newBut.setAttribute('onclick', 'bagPageButtons(this.id)')
							newString.appendChild(newBut)
						}
						countOfStr++
						b.lastElementChild.lastElementChild.appendChild(newString)
						break
					case 'Шаблоны':
						var newBut = document.createElement('button')
						newBut.innerText = c[0]
						newBut.style.marginRight = '4px'
						newBut.setAttribute('onclick', 'buttonsFromDoc(this.innerText)')
						if(newBut.innerText == 'Урок NS')
							newBut.id = "NS"
						if(newBut.innerText == 'ус+брауз (У)')
							newBut.innerText = "ус+брауз"
						if(newBut.innerText == 'ус+брауз (П)')
							continue
						if(newBut.innerText == 'Серверные') {
							var newInput = document.createElement('input')
							newInput.placeholder = 'Ссылка'
							newInput.id = 'serversInp'
							newInput.style.marginRight = '5px'
							var newDiv = document.createElement('div')
							newDiv.style.margin = '5px'
							newBut.id = 'serversBut'
							newDiv.append(newInput)
							newDiv.append(newBut)
							document.getElementById('addTmp').children[0].appendChild(newDiv)
							continue
						}
						if(addTmpFlag == 0)
							b.lastElementChild.lastElementChild.appendChild(newBut)
						else {
							newBut.style.marginTop = '4px'
							document.getElementById('addTmp').children[0].appendChild(newBut)
						}
						break
					case 'Переводы':
						var newBut = document.createElement('button')
						newBut.innerText = c[0]
						newBut.style.marginRight = '4px'
						newBut.setAttribute('onclick', 'transfPageButtons(this.innerText)')
						b.lastElementChild.lastElementChild.appendChild(newBut)
						break
					case 'Темы':
						var newBut = document.createElement('button')
						newBut.innerText = c[0]
						newBut.style.marginRight = '4px'
						newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
						b.lastElementChild.lastElementChild.appendChild(newBut)
						break
					default:
						break
				}
				break
		}
	}	
	document.getElementById('0page').ondblclick = function () {
	if(document.getElementById('addTmp').style.display == 'none')
		document.getElementById('addTmp').style.display = '';
	else
		document.getElementById('addTmp').style.display = 'none';
	}
	document.getElementById('0page_button').click()
}

function tagToChat(btnName) {
	for(var l = 0; l < table.length; l++) {
		if(btnName == table[l][0]) {
			newTag(table[l][1])
			return
		}
	}
}

function newTag(valueId) {
	let chatId = ''
	if(window.location.href.indexOf('skyeng.autofaq.ai/logs') !== -1)
		chatId = document.location.pathname.split('/')[2]
	else if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
		chatId = document.location.pathname.split('/')[3]
	else
		chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
	fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"topicId\",\"value\":\"" + valueId + "\"}]}",
	  "method": "POST",
	  "credentials": "include"
	});
}

function msgFromTable(btnName) {
	for(var l = 0; l < table.length; l++) {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			if(btnName == table[l][0]) {
				if(table[l][1] == "Быстрый шаблон") {
					sendAnswerTemplate2(table[l][2])
				}
				if(table[l][1] == "Текст") {
					sendAnswer(table[l][2])
				}
				if(table[l][1] == "Шаблон") {
					sendAnswerTemplate(table[l][2], table[l][3])
				}
				if(table[l][1].indexOf("Рандом") != -1) {
					var count = table[l][1][7]
					var newL = Math.floor(Math.random() * (count)) + l
					sendAnswer(table[newL][2])
				}
				break
			}
		} else {
			if(btnName == table[l][0]) {
				if(table[l][4] == "") {
					document.getElementById('inp').value = "Нет такого шаблона"
				} else {
					if(table[l][5] == "Быстрый шаблон") {
						sendAnswerTemplate2(table[l][6])
					}
					if(table[l][5] == "Текст") {
						sendAnswer(table[l][6])
					}
					if(table[l][5] == "Шаблон") {
						sendAnswerTemplate(table[l][6], table[l][7])
					}
					break
				}
			}
		}
	}
}

var templatesAF = []
async function loadTemplates(template, word) {
	return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[119638,121385,121300,119843,118980,120969,121387,121348,121386,119636,119844,119649,121286,121381,119841,120181,119646,121303,121343,121388,121162,121158,121346,121151,121341,121152,121342,121156,121347,121079,121163,121155,121344,121157,121345,121304,121340,121384]}",
	  "method": "POST",
	})
	.then(response => response.json())
	.then(result => {
		var documentId = ""
		var serviceId = ""
		var queryId = ""
		var AFsessionId = ""
		var tmpText = ""
		var title = ""
		var accuracy = ""
		for(let i = 0; i < result.length; i++) {
			if(result[i].title == template) {
				var b = result[i]
				documentId = b.documentId
				serviceId = b.serviceId
				queryId = b.queryId
				AFsessionId = b.sessionId
				tmpText = b.text
				tmpText = tmpText.split("<br>↵").join('\n')
				tmpText = tmpText.split("&nbsp;").join(' ')
				tmpText = tmpText.split("<br />").join('\n')
				tmpText = tmpText.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
				tmpText = tmpText.replace(/<\/?[^>]+>/g,'')
				tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
				title = b.title
				title = title.split("\"").join("\\\"")
				accuracy = b.accuracy
				
				templatesAF.push([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
				return ([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
			}
		}
	})
}

async function sendAnswerTemplate(template, word, flag = 0, newText = "", flag2 = 0) {
	var curTemplate
	if(flag == 1) {
		template = template_text
		word = word_text
	}
	for(let i = 0; i < templatesAF.length; i++) {
		if(template == templatesAF[i][0]) {
			curTemplate = templatesAF[i]
			break
		}
	}
	if(curTemplate == undefined)
		curTemplate = await loadTemplates(template, word)
	//addTimer()
	time = "15:00"
	var documentId = curTemplate[1]
	var serviceId = curTemplate[2]
	var queryId = curTemplate[3]
	var AFsessionId = curTemplate[4]
	var tmpText = curTemplate[5]
	var title = curTemplate[6]
	var accuracy = curTemplate[7]
	var values = await getInfo(0)
	var adr = values[0]; var adr1 = values[1]; var uid = values[2]
	if(document.getElementById('msg1').innerHTML == "Доработать" && flag2 == 0) {
		document.getElementById('inp').value = tmpText
		template_text = template
		word_text = word
		template_flag = 1
	}
	else if(tmpText == "")
			console.log('Шаблон не найден')
		else {
			if(flag == 1) {
				tmpText = newText
			}
			tmpText = tmpText.split("\"").join("\\\"")
			txt2 = tmpText.split('\n')
			txt3 = ""
			txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
			tmpText = txt3
			tmpText = tmpText.split('<p></p>').join("<p><br></p>")
			tmpText = tmpText.substr(0, tmpText.length - 2)
			
			resetFlags()
			refCurTimer(time)
			fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
				  "headers": {
					"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZ3ivsA3aU80QEBST",
				  },
				  "body": "------WebKitFormBoundaryZ3ivsA3aU80QEBST\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpText + "\",\"ext\":null,\"files\":[],\"suggestedAnswerDocId\":" + documentId + ",\"autoFaqServiceId\":" + serviceId + ",\"autoFaqSessionId\":\"" + AFsessionId + "\",\"autoFaqQueryId\":\"" + queryId + "\",\"autoFaqTitle\":\"" + title + "\",\"autoFaqQuery\":\"" + word + "\",\"autoFaqAccuracy\":" + accuracy + "}\r\n------WebKitFormBoundaryZ3ivsA3aU80QEBST--\r\n",
				  "method": "POST",
				  "credentials": "include"
				});
		}
}
async function sendAnswer(txt, flag = 1, time = "15:00") {
		//addTimer()
		var values = await getInfo(flag)
		var adr = values[0]; var adr1 = values[1]; var uid = values[2]
		var txt2 = txt.split('\n')
		var txt3 = ""
		txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
		txt3 = txt3.split("\"").join("\\\"")
		txt3 = txt3.split('<p></p>').join("<p><br></p>")
		txt3 = txt3.substr(0, txt3.length - 2)
		
		if(document.getElementById('msg1').innerHTML == "Доработать" && flag) {
			resetFlags()
			document.getElementById('inp').value = txt
		}
		else {
				refCurTimer(time)
				fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
					  "headers": {
						"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
					  },
					  "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
					  "method": "POST",
					  "credentials": "include"
				});
				resetFlags()
			}
}
async function getInfo(flag1 = 1) {
	var adr = document.location.href
	var adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	var sessionId = ""
	for(let i = 0; i < chatsArray.length; i++) {
		if(chatsArray[i].id == adr1) {
			sessionId = chatsArray[i].sessionId
			return [adr, adr1, sessionId]
		}
	}
	if(adr1 == undefined)
		adr1 = ""
	if(document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
		await fetch("https://skyeng.autofaq.ai/api/conversations/"+adr1)
		.then(response => response.json())
		.then(result => {sessionId = result.sessionId; chatsArray.push(result); localStorage.setItem('serviceIdGlob', result.serviceId)});
	}
	return [adr, adr1, sessionId]
}
async function sendComment(txt){ 
		var values = await getInfo(0)
		adr = values[0]; adr1 = values[1]; uid = values[2]
		var txt2 = txt.split('\n').join('\\n')
		var txt2 = txt2.split("\"").join("\\\"")
		resetFlags()
	fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
	  },
	  "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt2 + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
	  "method": "POST",
	  "credentials": "include"
	});
}
idk = 0
var tmrs = []
function addTimer() {
	tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
	if(tm.childNodes[0].childNodes[2] === undefined) {
		let serv = document.createElement('div')
		let serv2 = document.createElement('div')
		tm.childNodes[0].appendChild(serv)
		tm.childNodes[1].appendChild(serv2)
		tm.childNodes[0].childNodes[2].innerHTML = "15:00"
		let d = new Date()
		tmrs[idk] = ["15:00", tm.childNodes[1].childNodes[0].innerText, 1, number(d), ""]
		idk++
	}
}

function addTimers() {
	k = 0
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	let d = new Date()
	while (true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
			break;
		btns.childNodes[k]
		nm = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
		flag = 0
		for(i = 0; i < idk; i++) {
			name = tmrs[i][1]
			if(nm == name) {
				flag = 1
				break
			}
		}
		if(flag == 0)
			tmrs[idk++] = ["15:00", nm, 1, Number(d), ""]

		k++
	}	
	
	k = 0
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	while (true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
			break;
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined) {
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].appendChild(document.createElement('div'))
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].appendChild(document.createElement('div'))
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.backgroundColor = 'red'
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.color = 'white'
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.textAlign = 'center'
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.fontWeight = 'bold'
		}
		k++
	}
}

function refreshTimer() {
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	j = 0
	while(true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j] === undefined)
			break
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].className === "ant-empty ant-empty-normal")
			break;
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined)
			addTimers()
		name = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
		for (i = 0; i < idk; i++) {
			if(tmrs[i][1] == name) {
				btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML = tmrs[i][0]
				if(tmrs[i][0] == "00:00")
					if(tmrs[i][2] == 1)
						btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#ECEBBD"
					else
						btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FBCEB1"
				else
					btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "white"
				btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerText = tmrs[i][4]
				var cT = new Date();
				var curT1 = tmrs[i][3]
				var curT2 = Number(cT);
				var curT3 = (13.5 * 60) - Math.floor((curT2 - curT1) / 1000);
				if(curT3 < 0)
					btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FF47CA"
			}
		}
		j++
	}
}

function refCurTimer(time) {
	btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

	name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
	for (i = 0; i < idk; i++) {
		if(tmrs[i][1] == name) {
			tmrs[i][0] = time
			if(time == "1:00")
				tmrs[i][2] = 0
			else 
				tmrs[i][2] = 1
			tmrs[i][3] = Number(new Date())
		}
	}
}
		
flag = 0
str = localStorage.getItem('sound_str');
if(str !== null && str !== "")
	audio = new Audio(str);	
else
	audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");	

var timeStart = new Date()
var studentIdSearch2 = 0
var studentIdSearch = 0
function startTimer() {
	var timeNow = new Date()
	if(timeNow - timeStart > 60 * 60 * 1000) {
		getText()
		timeStart = timeNow
	}
	for(i = 0; i < idk; i++) {
		var cT = new Date();
		var curTime1 = tmrs[i][3]
		var curTime2 = Number(cT);
		t = 0
		if(tmrs[i][2] == 0)
			t = 1
		else 
			t = 15
		var curTime3 = (t * 60) - Math.floor((curTime2 - curTime1) / 1000);
		if(curTime3 < 0)
			continue
		var m = Math.floor(curTime3 / 60);
		var s = Math.floor(curTime3 % 60);
		var curTime4 = "";    
		if(Number(m) < 10) {
			curTime4 = "0";
		}
		curTime4 = curTime4 + String(m) + ":";
		if(Number(s) < 10) {
			curTime4 = curTime4 + "0";
		}
		curTime4 = curTime4 + String(s);
		tmrs[i][0] = curTime4
	}
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && flag == 0) {
		requestsRed()
		flag = 1
	} 
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1 && flag == 1)
		flag = 0
	
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
		if(document.getElementsByClassName('ant-btn ant-btn-primary')[0] !== undefined)
			document.getElementsByClassName('ant-btn ant-btn-primary')[0].onclick = function () {
				refCurTimer('15:00')
			}
		refreshTimer()

	}
	
	if(document.getElementById('switcher').innerHTML == "ВКЛ")
		if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
			txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
			if(txt != "Взять запрос (0)")
				audio.play()
		}
		
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
		vertical = user = ""
		nextClassMode = nextClassstudentId = ""
		nextClassModeId = ""
		for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "teacherVertical")
				vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "userType")
				user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
			
			btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

			name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML")
				for (k = 0; k < idk; k++) {
					if(tmrs[k][1] == name) {
						if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок")
							tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
						else 
							tmrs[k][4] = ""
					}
				}
			
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-mode") {
				nextClassMode = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
				nextClassModeId = i
			}
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
				nextClassstudentId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
		}
		if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2) {
			if(nextClassMode == 'group') {
				nextClassstudentId = nextClassstudentId.split(',')[0]
				document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group '
				function checkForLink() {
					if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent == 'group ')
						document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group'
				}
				setTimeout(checkForLink, 5000)
				document.getElementById('responseTextarea1').value = '{}'
				document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + nextClassstudentId
				document.getElementById('responseTextarea3').value = 'groupLessons1'
				document.getElementById('sendResponse').click()
				studentIdSearch2 = 0
				setTimeout(generateGroupLink, 1000)
				
				function generateGroupLink() {
					let res = document.getElementById('responseTextarea1').getAttribute('groupLessons1')
					if(res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
						studentIdSearch2++
						document.getElementById('responseTextarea1').removeAttribute('groupLessons1')
						for(let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
							if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
								document.getElementById('responseTextarea1').value = '{}'
								document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[studentIdSearch2]
								document.getElementById('responseTextarea3').value = 'groupLessons1'
								document.getElementById('sendResponse').click()
								setTimeout(generateGroupLink, 1000)
								return
							}
						}
					}
					groupId = res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0]
					let button = document.createElement('a')
					button.href = 'https://cabinet.skyeng.ru/admin/group/edit?id=' + groupId
					button.target = '_blank'
					button.textContent = groupId
					button.style.marginRight = '15px'
					
					document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
					document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
				}
			}
		}
		
		addInfoUser.innerHTML = vertical + " + " + user 
		if(document.getElementById('NS') != undefined) {
			if(vertical == "Math" || "math_flow") {
				//document.getElementById('math').style.backgroundColor = "green"
				document.getElementById('NS').style.backgroundColor = "#768d87"
			} else {
				document.getElementById('NS').style.backgroundColor = "green"
				//document.getElementById('math').style.backgroundColor = "#768d87"
			}
		}
		
		
		if(document.getElementById('NS') != undefined) {
			if(user == "student") {
				//document.getElementById('math').style.display = 
				document.getElementById('NS').style.display = "none"
			} else {
				//document.getElementById('math').style.display = 
				document.getElementById('NS').style.display = ""
			}
		}
		if(user == "teacher") {
			for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
				if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
					if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.indexOf("%") === -1) {
						id = Number.parseInt(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText)
						document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText += " % 11 = " + (id % 11)
					}
					break;
				}
			}
		}
		
		for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
				btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				btn.appendChild(button2)
				if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
					btn.appendChild(button22)
			}
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
				btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				btn.appendChild(button3)
				if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
					btn.appendChild(button33)
			}
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
				btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				btn.appendChild(button4)
				if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
					btn.appendChild(button44)
			}
		}
	}
	
	if(localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2) {
		if(document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
			if(document.getElementsByClassName('expert-user_details-list')[1].children[0] != undefined) {
				if(document.getElementsByClassName('expert-user_details-list')[1].children[0].classList != "") {
					let c = document.createElement('div')
					let a = document.createElement('span')
					a.textContent = 'Найти группу'
					a.style.marginRight='10px'
					function generateGroupLink() {
						let res = document.getElementById('responseTextarea1').getAttribute('groupLessons')
						if(res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
							studentIdSearch++
							for(let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
								if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
									document.getElementById('responseTextarea1').value = '{}'
									document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[studentIdSearch]
									document.getElementById('responseTextarea3').value = 'groupLessons'
									document.getElementById('sendResponse').click()
									setTimeout(generateGroupLink, 1000)
									return
								}
							}
						}
						groupId = res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0]
						let button = document.createElement('a')
						button.href = 'https://cabinet.skyeng.ru/admin/group/edit?id=' + groupId
						button.target = '_blank'
						button.textContent = groupId
						button.style.marginRight = '15px'
						
						document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
						document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
					}
					a.onclick = function() {
						this.textContent = ''
						this.parentElement.children[1].textContent = ''
						for(let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
							if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "userType") {
								if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == 'student') {
									for(let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
										if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
											studentIdSearch = 0
											document.getElementById('responseTextarea1').value = '{}'
											document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
											document.getElementById('responseTextarea3').value = 'groupLessons'
											document.getElementById('sendResponse').click()
											setTimeout(generateGroupLink, 1000)
										}
									}
								} else {
									for(let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
										if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
											document.getElementById('responseTextarea1').value = '{}'
											document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[0]
											document.getElementById('responseTextarea3').value = 'groupLessons'
											document.getElementById('sendResponse').click()
											setTimeout(generateGroupLink, 1000)
										}
									}
								}
							}
						}
					}

					let b = document.createElement('span')
					b.textContent = 'Найти Talks'
					b.style.marginRight='10px'
					function generateTalksInfo() {
						console.log('here')
						var talks = JSON.parse(document.getElementById('responseTextarea1').getAttribute('talks')).data.talks
						document.getElementById('responseTextarea1').removeAttribute('talks')
						var userId = ""
						var stringInfo = ""
						for(let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
							if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
								userId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
								break
							}
						}
						for(i = 0; i < talks.length; i++) {
							if(userId == talks[i].studentId || userId == talks[i].teacherId) {
								stringInfo = "student: " + talks[i].studentId + "|teacher: " + talks[i].teacherId + "|hash: " + talks[i].roomHash + "|status: " + talks[i].currentStatus
								document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].remove()

								let newSpan = document.createElement('span')
								newSpan.textContent = stringInfo
								document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(newSpan)
								break
							}
						}
					}
					b.onclick = function() {
						this.textContent = ''
						this.parentElement.children[0].textContent = ''
						document.getElementById('responseTextarea1').value = '{ "credentials": "include" }'
						document.getElementById('responseTextarea2').value = "https://talks-platform.skyeng.ru/api/v1/talks/stats"
						document.getElementById('responseTextarea3').value = 'talks'
						document.getElementById('sendResponse').click()
						setTimeout(generateTalksInfo, 1000)
					}
					c.append(a)
					c.append(b)

					document.getElementsByClassName('expert-user_details-list')[1].prepend(c)
				}
			}
		}
	}
	
	
	if((localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2) && document.getElementById('continue_chat_button') == null && document.getElementsByClassName('expert-user_info_panel-footer-inner')[0] != undefined) {
		let btn1 = document.createElement('span');
		document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn1)
		btn1.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Нецелевой</a>';
		btn1.setAttribute('onClick', 'newTaggg("untargeted");')

		let btn2 = document.createElement('span');
		btn2.id = 'continue_chat_button'
		document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn2)
		btn2.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Спасен</a>';
		btn2.setAttribute('onClick', 'newTaggg("saved_lesson_platform");')
	}
}

function newTaggg(tagName) {
	let chatId = ''
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
		chatId = document.location.pathname.split('/')[3]
	else 
		chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
	fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
	  "method": "POST",
	  "credentials": "include"
	});
}

function timerHideButtons() {
	if(document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
		document.getElementsByClassName('ant-modal-content')[0].childNodes[1].children[0].appendChild(maskBackHide)
		
		if(document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Указать тему')
			for(i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
				if(document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Тех. поддержка V1" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Уроки V2" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Группа КМ" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Продажи 1Л")
					document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

		if(document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Закрыть запрос?')
			for(i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
				if(document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Тех. поддержка V1")
					document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'
	}
}

function requestsRed () {
	document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].addEventListener("DOMSubtreeModified", function() {
			txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
			if(txt != "Взять запрос (0)")
				document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "#F34723"
			else
				document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "white"
	});
}


const copyToClipboard1 = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
var operatorId = ""
async function whoAmI(){
	a = await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://skyeng.autofaq.ai/tickets/assigned",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(a => b = a.json()).then(b => {
let me = document.querySelector('.user_menu-dropdown-user_name');
b.rows.forEach(s => {
	if (me && s.operator.fullName === me.innerText) {
		operatorId = s.operator.id
		console.log("Мой ID: " + operatorId)
		}
})})
}
async function getNewChat(flagChats = 0){
	if(operatorId == "")
		await whoAmI()
	serviceId = localStorage.getItem('serviceIdGlob')
	var date = new Date()
	date.setTime(date - 181 * 60 * 1000)
	var date2 = new Date()
	date2.setTime(date - 30 * 60 * 1000)
	day = month = ""
	if(date.getMonth() < 9)
		month = "0" + (date.getMonth() + 1)
	else 
		month = (date.getMonth() + 1)
	if(date.getDate() < 10)
		day = "0" + date.getDate()
	else
		day = date.getDate()
	if(date.getHours() < 10)
		hours = '0' + date.getHours()
	else
		hours = date.getHours()
	if(date.getMinutes() < 10)
		minutes = '0' + date.getMinutes()
	else
		minutes = date.getMinutes()
	if(date.getSeconds() < 10)
		seconds = '0' + date.getSeconds()
	else
		seconds = date.getSeconds()
	secondDate1 = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"
	if(date2.getMonth() < 9)
		month2 = "0" + (date2.getMonth() + 1)
	else 
		month2 = (date2.getMonth() + 1)
	if(date2.getDate() < 10)
		day2 = "0" + date2.getDate()
	else
		day2 = date2.getDate()
	if(date2.getHours() < 10)
		hours2 = '0' + date2.getHours()
	else
		hours2 = date2.getHours()
	if(date2.getMinutes() < 10)
		minutes2 = '0' + date2.getMinutes()
	else
		minutes2 = date2.getMinutes()
	if(date2.getSeconds() < 10)
		seconds2 = '0' + date2.getSeconds()
	else
		seconds2 = date2.getSeconds()
	var chats = new Set()
	firstDate1 = date2.getFullYear() + "-" + month2 + "-" + day2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2 + ".000z"
	var tmp
	a = fetch("https://skyeng.autofaq.ai/api/conversations/history", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://skyeng.autofaq.ai/logs",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"serviceId\":\"" + serviceId + "\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate1 + "\",\"tsTo\":\"" + secondDate1 + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":100}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
	}).then(a => b = a.json()).then(b => {for(iter = 0; iter < b.items.length; iter++) {
			chats.add(b.items[iter].conversationId)
		}
	}).then(b => {
		if(flagChats == 0) {
			if(chats.size > 0) {
				chatId = chats.values().next().value
				fetch("https://skyeng.autofaq.ai/api/conversation/assign", {
				  "headers": {
					"content-type": "application/json",
				  },
				  "body": "{\"command\":\"DO_ASSIGN_CONVERSATION\",\"conversationId\":\""+chatId+"\",\"assignToOperatorId\":\""+operatorId+"\"}",
				  "method": "POST",
				});
			}
		}
		document.getElementById('howManyChats').innerHTML = "Чатов в очереди: " + chats.size
    })
}


async function sendAnswerTemplate2(word, flag = 0) {
	var tmpTxt = ""
	var adr = `https://skyeng.autofaq.ai/tickets/assigned/`
    if(word.length < 50)
        try {
            a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
          "headers": {
            "accept": "*/*", 
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
          },
          "referrer": adr,
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": "{\"query\":\"" + word + "\",\"answersLimit\":25,\"autoFaqServiceIds\":[121388, 121384]}",
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        }).then(a => b = a.json()).then(result => result.forEach(k => {
            if(k.title == word)
                tmpTxt = k.text
        }))
        tmpTxt = tmpTxt.split("<br>↵").join('\n')
        tmpTxt = tmpTxt.split("&nbsp;").join(' ')
        tmpTxt = tmpTxt.split("<br />").join('\n')
        tmpTxt = tmpTxt.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
        tmpTxt = tmpTxt.replace(/<\/?[^>]+>/g,'')
        tmpTxt = tmpTxt.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
        } catch (e) {}
	if(tmpTxt == "")
		tmpTxt = word
	if(document.getElementById('msg1').innerHTML == "Доработать" && flag == 0) {
		document.getElementById('inp').value = tmpTxt
		template_flag = 1
		template_flag2 = 1
	} else {
		tmpTxt = tmpTxt.split("\"").join("\\\"")
		tmpTxt2 = tmpTxt.split('\n')
		tmpTxt3 = ""
		tmpTxt2.forEach(el => tmpTxt3 += "<p>" + el + "</p>\\n")
		tmpTxt = tmpTxt3
		tmpTxt = tmpTxt.split('<p></p>').join("<p><br></p>")
		tmpTxt = tmpTxt.substr(0, tmpTxt.length - 2)
		var values = await getInfo(0)
		refCurTimer("15:00")
		var adr = values[0]; var adr1 = values[1]; var uid = values[2]
		fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
				"cache-control": "max-age=0",
				"content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin"
			  },
			  "referrer": adr,
			  "referrerPolicy": "no-referrer-when-downgrade",
			  "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpTxt + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
		});
		resetFlags()
		flagggg = 0
	}
}
function resetFlags() {
	template_flag = 0
	template_flag2 = 0
}
async function checkHistory(id) {
	var date = new Date()
	var date2 = new Date()
	date2.setTime(date - 8 * 60 * 60 * 1000)

	day = month = ""
	if(date.getMonth() < 9)
		month = "0" + (date.getMonth() + 1)
	else 
		month = (date.getMonth() + 1)
	if(date.getDate() < 10)
		day = "0" + date.getDate()
	else
		day = date.getDate()
	if(date.getHours() < 10)
		hours = '0' + date.getHours()
	else
		hours = date.getHours()
	if(date.getMinutes() < 10)
		minutes = '0' + date.getMinutes()
	else
		minutes = date.getMinutes()
	if(date.getSeconds() < 10)
		seconds = '0' + date.getSeconds()
	else
		seconds = date.getSeconds()

	secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

	if(date2.getMonth() < 9)
		month2 = "0" + (date2.getMonth() + 1)
	else 
		month2 = (date2.getMonth() + 1)
	if(date2.getDate() < 10)
		day2 = "0" + date2.getDate()
	else
		day2 = date2.getDate()

	if(date2.getHours() < 10)
		hours2 = '0' + date2.getHours()
	else
		hours2 = date2.getHours()
	if(date2.getMinutes() < 10)
		minutes2 = '0' + date2.getMinutes()
	else
		minutes2 = date2.getMinutes()
	if(date2.getSeconds() < 10)
		seconds2 = '0' + date2.getSeconds()
	else
		seconds2 = date2.getSeconds()

	firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2 + ".000z"
    count = -1
	serviceId = localStorage.getItem('serviceIdGlob')
	a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "max-age=0",
		"content-type": "application/json",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	  },
	  "referrer": "https://skyeng.autofaq.ai/logs",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "{\"serviceId\":\"" + serviceId + "\",\"mode\":\"Json\",\"channelUserIds\":[\"" + id + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	}).then(a => b = a.json()).then(b => {count = b.items.length})
	return count
}

async function getNotGoods(stringDate) {

	async function goNotgood(list, list2, date1, date2) {
		var text = ""
		var text2 = "Дата: " + stringDate2 + "\n"
		var page = 1
		for(m = -1; m < list.length; m++) {
			if(page == 2)
				m--
			a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
				"cache-control": "max-age=0",
				"content-type": "application/json",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin"
			  },
			  "referrer": "https://skyeng.autofaq.ai/logs",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\""+list[m]+"\"],\"tsFrom\":\"" + date1 + "\",\"tsTo\":\"" + date2 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}).then(a => b = a.json().then(array => {array1 = array
			n = 1
			array1.items.forEach(a => { if(a.stats.rate != undefined) 
			if(a.stats.rate.rate != undefined) {
			if(a.stats.rate.rate < 4) {
			text += stringDate2 + "	" + list2[m] + "	https://hdi.skyeng.ru/autofaq/conversation/-11/" + a.conversationId + "	" + a.stats.rate.rate + "\n"
			if(n == 1)
				text2 += "\nАгент: `" + list2[m] + "` C	S	A		T =\n "
			text2 += "=HYPERLINK(\"https://hdi.skyeng.ru/autofaq/conversation/-11/" + a.conversationId + "\"; \"Нотгуд №" + n + "\" 	 (	оценка " + a.stats.rate.rate + ") - \n"
			n++
			}
			}})
			if(array1.total > 100)
				if(page == 2)
					page = 1
				else
					page = 2
			}))
		}	
		console.log(text)
		console.log(text2)
	}

	var operatorId = []
	var operatorNames = []
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
		"content-type": "application/json",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	  },
	  "referrer": "https://skyeng.autofaq.ai/logs/c6fe512d-6f79-4dec-b272-baba807d7387",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": null,
	  "method": "GET",
	  "mode": "cors",
	  "credentials": "include"
	}).then(result => b = result.json()).then(b => b.rows.forEach(k => {
		if(k.operator != null)
			if(k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == "ТП") {
				operatorId.push(k.operator.id)
				operatorNames.push(k.operator.fullName.split('-')[1])
			}
	}))

	list = operatorId
	list2 = operatorNames

	stringDate2 = stringDate
	stringDate = stringDate.split(".")
	stringDate[1]--
	var date = new Date(stringDate[2], stringDate[1], stringDate[0])
	day = month = ""
	if(date.getMonth() < 9)
	month = "0" + (date.getMonth() + 1)
	else 
	month = (date.getMonth() + 1)
	if(date.getDate() < 10)
	day = "0" + date.getDate()
	else
	day = date.getDate()

	secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
	date = date - 24 * 60 * 60 * 1000
	var date2 = new Date()
	date2.setTime(date)

	if(date2.getMonth() < 9)
	month2 = "0" + (date2.getMonth() + 1)
	else 
	month2 = (date2.getMonth() + 1)
	if(date2.getDate() < 10)
	day2 = "0" + date2.getDate()
	else
	day2 = date2.getDate()

	firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"
	goNotgood(list, list2, firstDate, secondDate)
}

function customTemplates(language = '') {
	if (localStorage.getItem('winCstmTmpsTop') == null) {
		localStorage.setItem('winCstmTmpsTop', '120');
		localStorage.setItem('winCstmTmpsLeft', '295');
	}
	if(localStorage.getItem('cntTmplts' + language) == null)
		localStorage.setItem('cntTmplts' + language, 0)
	if(document.getElementById('cstmTmplates') == undefined) {
		var cstmTmp = document.createElement('div')
		cstmTmp.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winCstmTmpsTop') + 'px; left: ' + localStorage.getItem('winCstmTmpsLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; border-radius:5px; border:1px solid #768d87; ';
		cstmTmp.id = 'cstmTmplates'
		cstmTmp.style.display = 'none'
		document.body.append(cstmTmp);
	} else {
		cstmTmp = document.getElementById('cstmTmplates')
		while(document.getElementById('cstmTmplates').children[0] != undefined)
			document.getElementById('cstmTmplates').children[0].remove()
	}
	countOfTemplates = localStorage.getItem('cntTmplts' + language)
	
	
	var buttonOpenTmpWindow = document.createElement('button')
	buttonOpenTmpWindow.innerHTML = 'tmps'
	buttonOpenTmpWindow.style.marginLeft = '7px'
	buttonOpenTmpWindow.onclick = function() {
		var a = document.getElementById('cstmTmplates')
		if(a.style.display == '')
			a.style.display = 'none'
		else
			a.style.display = ''
	}
	var tmpA = document.getElementById('AF_helper').children[0].children[0].children[0].children[0]
	if(tmpA.children[1].innerHTML != 'tmps')
		tmpA.insertBefore(buttonOpenTmpWindow, tmpA.children[1])
	
	tmpA.children[2].style.marginLeft = '15px'
	tmpA.children[3].style = 'float:right'
	
	if (language == "") {
		if(localStorage.getItem('tmplt1_ru') != null) {
			countOfTemplates++
			localStorage.setItem('template_' + countOfTemplates, localStorage.getItem('tmplt1_ru'))
			localStorage.setItem('checkbox_' + countOfTemplates, false)
			localStorage.removeItem('tmplt1_ru')
			localStorage.setItem('cntTmplts', countOfTemplates)
		}
		if(localStorage.getItem('tmplt2_ru') != null) {
			countOfTemplates++
			localStorage.setItem('template_' + countOfTemplates, localStorage.getItem('tmplt2_ru'))
			localStorage.setItem('checkbox_' + countOfTemplates, false)
			localStorage.removeItem('tmplt2_ru')
			localStorage.setItem('cntTmplts', countOfTemplates)
		}
		if(localStorage.getItem('tmplt3_ru') != null) {
			countOfTemplates++
			localStorage.setItem('template_' + countOfTemplates, localStorage.getItem('tmplt3_ru'))
			localStorage.setItem('checkbox_' + countOfTemplates, false)
			localStorage.removeItem('tmplt3_ru')
			localStorage.setItem('cntTmplts', countOfTemplates)
		}
	} else {
		if(localStorage.getItem('tmplt1_en') != null) {
			countOfTemplates++
			localStorage.setItem('template_' + countOfTemplates, localStorage.getItem('tmplt1_en'))
			localStorage.setItem('checkbox_' + countOfTemplates, false)
			localStorage.removeItem('tmplt1_en')
			localStorage.setItem('cntTmplts', countOfTemplates)
		}
		if(localStorage.getItem('tmplt2_en') != null) {
			countOfTemplates++
			localStorage.setItem('template_' + countOfTemplates, localStorage.getItem('tmplt2_en'))
			localStorage.setItem('checkbox_' + countOfTemplates, false)
			localStorage.removeItem('tmplt2_en')
			localStorage.setItem('cntTmplts', countOfTemplates)
		}
		if(localStorage.getItem('tmplt3_en') != null) {
			countOfTemplates++
			localStorage.setItem('template_' + countOfTemplates, localStorage.getItem('tmplt3_en'))
			localStorage.setItem('checkbox_' + countOfTemplates, false)
			localStorage.removeItem('tmplt3_en')
			localStorage.setItem('cntTmplts', countOfTemplates)
		}
	}
	
	function refreshHotTmps() {
		while(document.getElementById('6str').children[0] != undefined)
			document.getElementById('6str').children[0].remove()
		countOfTemplates = localStorage.getItem('cntTmplts' + language)
		for(var i = 1; i <= countOfTemplates; i++) {
			var j = Number(i) - 1
			if(document.getElementById('cstmTmplates').children[j].children[0].checked) {
				if(localStorage.getItem('tmp_name_' + language + i) == null || localStorage.getItem('tmp_name_' + language + i) == "")
					continue
				var a = document.getElementById('6str')
				var newBut = document.createElement('button')
				newBut.setAttribute('template', 'template_' + language + i)
				newBut.style.marginRight = '5px'
				newBut.style.marginTop = '5px'
				newBut.innerHTML = localStorage.getItem('tmp_name_' + language + i)
				a.appendChild(newBut)
				newBut.onclick = function() {
					var text = localStorage.getItem(this.getAttribute('template')).split('\\n').join('\n')
					sendAnswer(text)
				}
			}
		}
	}
	
	function addNewString(index) {
		
		var newDiv  = document.createElement('div')
		newDiv.style.margin = '5px'
		newDiv.setAttribute('inp', 'cstmTmpInp' + language + index)
		newDiv.setAttribute('tmp', 'template_' + language + index)
		newDiv.setAttribute('index', index)
		
		var template = localStorage.getItem('template_' + language + index)
		var newInput = document.createElement('input')
		newInput.id = 'cstmTmpInp' + language + index
		newInput.value = template == undefined ? "" : template
		newInput.style.marginRight = '5px'
		newInput.style.width = '500px'
		
		var template = localStorage.getItem('tmp_name_' + language + index)
		var newInputTmpName = document.createElement('input')
		newInputTmpName.value = template == undefined ? "" : template
		newInputTmpName.style.marginRight = '5px'
		newInputTmpName.style.width = '150px'
		
		var newButton = document.createElement('button')
		newButton.style.marginRight = '5px'
		newButton.textContent = 'save'
		newButton.onclick = function() {
			localStorage.setItem(this.parentElement.getAttribute('tmp'), document.getElementById(this.parentElement.getAttribute('inp')).value)
			localStorage.setItem('tmp_name_' + language + index, this.parentElement.children[1].value)
			refreshHotTmps()
		}
		var newButton2 = document.createElement('button')
		newButton2.style.marginRight = '5px'
		newButton2.textContent = 'send'
		newButton2.onclick = function() {
			document.getElementById('inp').value = document.getElementById(this.parentElement.getAttribute('inp')).value.split('\\n').join('\n')
			this.parentElement.parentElement.style.display = 'none'
		}
		
		var newButton3 = document.createElement('button')
		newButton3.style.marginRight = '5px'
		newButton3.textContent = 'delete'
		newButton3.onclick = function() {
			for(var i = this.parentElement.getAttribute('index'); i < countOfTemplates; i++) {
				var n = Number(i) + 1
				localStorage.setItem('template_' + language + i, localStorage.getItem('template_' + language + n))
				localStorage.setItem('checkbox_' + language + i, localStorage.getItem('checkbox_' + language + n))
				localStorage.setItem('tmp_name_' + language + i, localStorage.getItem('tmp_name_' + language + n))
			}
			localStorage.removeItem('template_' + language + countOfTemplates)
			localStorage.removeItem('checkbox_' + language + countOfTemplates)
			localStorage.removeItem('tmp_name_' + language + countOfTemplates)
			countOfTemplates--;
			localStorage.setItem('cntTmplts' + language, countOfTemplates)
			while(document.getElementById('cstmTmplates').children[0] != undefined)
				document.getElementById('cstmTmplates').children[0].remove()
			customTemplates(language)
		}
		
		
		var buttonSortUp = document.createElement('button')
		buttonSortUp.innerHTML = '↑'
		buttonSortUp.onclick = function() {
			var index = this.parentElement.getAttribute('index')
			if(index == 1)
				return
			var index2 = Number(index) - 1
			
			var tmp1 = localStorage.getItem('template_' + language + index)
			localStorage.setItem('template_' + language + index, localStorage.getItem('template_' + language + index2))
			localStorage.setItem('template_' + language + index2, tmp1)
			
			tmp1 = localStorage.getItem('checkbox_' + language + index)
			localStorage.setItem('checkbox_' + language + index, localStorage.getItem('checkbox_' + language + index2))
			localStorage.setItem('checkbox_' + language + index2, tmp1)
			
			tmp1 = localStorage.getItem('tmp_name_' + language + index)
			localStorage.setItem('tmp_name_' + language + index, localStorage.getItem('tmp_name_' + language + index2))
			localStorage.setItem('tmp_name_' + language + index2, tmp1)
			if(document.getElementById('languageAF').innerHTML == "Русский")
				customTemplates()
			else
				customTemplates('en_')
		}
		
		var buttonSortDown = document.createElement('button')
		buttonSortDown.innerHTML = '↓'
		buttonSortDown.style.marginRight = '5px'
		buttonSortDown.onclick = function() {
			var index = this.parentElement.getAttribute('index')
			if(index == countOfTemplates)
				return
			var index2 = Number(index) + 1
			
			var tmp1 = localStorage.getItem('template_' + language + index)
			localStorage.setItem('template_' + language + index, localStorage.getItem('template_' + language + index2))
			localStorage.setItem('template_' + language + index2, tmp1)
			
			tmp1 = localStorage.getItem('checkbox_' + language + index)
			localStorage.setItem('checkbox_' + language + index, localStorage.getItem('checkbox_' + language + index2))
			localStorage.setItem('checkbox_' + language + index2, tmp1)
			
			tmp1 = localStorage.getItem('tmp_name_' + language + index)
			localStorage.setItem('tmp_name_' + language + index, localStorage.getItem('tmp_name_' + language + index2))
			localStorage.setItem('tmp_name_' + language + index2, tmp1)
			if(document.getElementById('languageAF').innerHTML == "Русский")
				customTemplates()
			else
				customTemplates('en_')
		}
		
		var newcheckbox = document.createElement('input')
		newcheckbox.type = 'checkbox'
		newcheckbox.style.marginRight = '5px'
		newcheckbox.checked = localStorage.getItem('checkbox_' + language + index) == 'true' ? 1 : 0
		newcheckbox.onclick = function() { 
			localStorage.setItem('checkbox_' + language + index, this.checked)
		}
		
		newDiv.append(newcheckbox)
		newDiv.append(newInputTmpName)
		newDiv.append(buttonSortUp)
		newDiv.append(buttonSortDown)
		newDiv.append(newButton3)
		newDiv.append(newButton)
		newDiv.append(newInput)
		newDiv.append(newButton2)
		cstmTmp.insertBefore(newDiv, cstmTmp.lastElementChild)
	}
	
	var newDiv  = document.createElement('div')
	newDiv.style = 'cursor: -webkit-grab;'
	newDiv.style.margin = '5px'
	newDiv.style.textAlign = 'center'
	var addTmpl = document.createElement('button')
	addTmpl.textContent = 'Добавить шаблон'
	addTmpl.style.marginRight = '5px'
	addTmpl.onclick = function() {
		countOfTemplates++
		localStorage.setItem('cntTmplts' + language, countOfTemplates)
		localStorage.setItem('template_' + language + countOfTemplates, "")
		localStorage.setItem('checkbox_' + language + countOfTemplates, false)
		localStorage.setItem('tmp_name_' + language + countOfTemplates, "")
		addNewString(countOfTemplates)
	}
	var saveAllTmp = document.createElement('button')
	saveAllTmp.textContent = 'Сохранить всё'
	saveAllTmp.style.marginRight = '5px'
	saveAllTmp.onclick = function() {
		for(var i = 1; i <= countOfTemplates; i++) {
			localStorage.setItem('template_' + language + i, document.getElementById('cstmTmpInp' + language + i).value)
			localStorage.setItem('checkbox_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[0].checked)
			localStorage.setItem('tmp_name_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[1].value)
			refreshHotTmps()
		}
	}
	
	var but = document.createElement('button')
	but.innerHTML = 'hide'
	but.onclick = function() {
		this.parentElement.parentElement.style.display = 'none'
	}
	but.style.float = 'right'
	
	newDiv.append(saveAllTmp)
	newDiv.append(addTmpl)
	newDiv.append(but)
	cstmTmp.append(newDiv)
	
	if(countOfTemplates > 0)
		for(i = 1; i <= countOfTemplates; i++)
			addNewString(i)
	refreshHotTmps()
	
	var listener3 = function(e , a) {
        cstmTmp.style.left = Number(e.clientX - myX3) + "px";
        cstmTmp.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winCstmTmpsTop', String(Number(e.clientY - myY3)));
        localStorage.setItem('winCstmTmpsLeft', String(Number(e.clientX - myX3)));
    };

    cstmTmp.lastElementChild.onmousedown = function (a) {
        window.myX3 = a.layerX; 
        window.myY3 = a.layerY; 
        document.addEventListener('mousemove', listener3);
    }
    cstmTmp.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
	
	document.getElementById('languageAF').onclick = function () {
        if(this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
			document.getElementById('AF_helper').style.background = "#EBC7DF"
			customTemplates('en_')
        } else {
            this.innerHTML = "Русский";
			document.getElementById('AF_helper').style.background = "#464451"
			customTemplates()
        }
	}
}

async function getStats() {
	let table = document.createElement('table')
	table.style = 'table-layout: auto; width:750px;'
	table.style.textAlign = 'center'
	table.id = 'tableStats'
	let columnNames = ["Оператор", "Закрыл запросов", "Пощупал чатов", "Среднее время ожидания", "Среднее время работы"]
	let trHead = document.createElement('tr')
	for(let i = 0; i < columnNames.length; i++) {
		var th = document.createElement('th')
		trHead.append(th)
		th.textContent = columnNames[i]
	}

	var time = new Date()
	var time2 = new Date()
	time2.setTime(time - 24 * 60 * 60 * 1000)
	var date1 = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
	var date2 = time2.getDate() < 10 ? '0' + time2.getDate() : time2.getDate()
	var month1 = Number(time.getMonth() + 1) < 10 ? '0' + Number(time.getMonth() + 1) : Number(time.getMonth() + 1)
	var month2 = Number(time2.getMonth() + 1) < 10 ? '0' + Number(time2.getMonth() + 1) : Number(time2.getMonth() + 1)
	var str1 = time.getFullYear() + "-" + month1 + "-" + date1 + "T21%3A00%3A00Z"
	var str2 = time2.getFullYear() + "-" + month2 + "-" + date2 + "T21%3A00%3A00Z"
	var array = []
	await fetch("https://skyeng.autofaq.ai/api/reason8/reports/operatorActivityTable?dateFrom=" + str2 + "&dateTo=" + str1, {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "max-age=0",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	  },
	  "referrer": "https://skyeng.autofaq.ai/reports/operator-activity",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": null,
	  "method": "GET",
	  "mode": "cors",
	  "credentials": "include"
	}).then(response => b = response.json().then(b => b.rows.forEach(k => {
		if(k.operator.indexOf('ТП') != -1) {
			 array.push(k)
		}
	})))
	array.sort(function (a, b) {
		return b.conversationClosed - a.conversationClosed;
	});
	
	var operatorId = []
	var operatorNames = []
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
	  "credentials": "include"
	}).then(result => b = result.json()).then(b => b.rows.forEach(k => {
		if(k.operator != null)
			if(k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == "ТП") {
				operatorId.push(k.operator.id)
				operatorNames.push(k.operator.fullName)
			}
	}))

	var date = new Date()
	day = month = ""
	if(date.getMonth() < 9)
	month = "0" + (date.getMonth() + 1)
	else 
	month = (date.getMonth() + 1)
	if(date.getDate() < 10)
	day = "0" + date.getDate()
	else
	day = date.getDate()

	var secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
	date = date - 24 * 60 * 60 * 1000
	var date2 = new Date()
	date2.setTime(date)

	if(date2.getMonth() < 9)
	month2 = "0" + (date2.getMonth() + 1)
	else 
	month2 = (date2.getMonth() + 1)
	if(date2.getDate() < 10)
	day2 = "0" + date2.getDate()
	else
	day2 = date2.getDate()

	var firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"

	var operatorChatCount = []
	for(var l = 0; l < operatorId.length; l++) {
	await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
				  "headers": {
					"accept": "*/*",
					"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
					"cache-control": "max-age=0",
					"content-type": "application/json",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-origin"
				  },
				  "referrer": "https://skyeng.autofaq.ai/logs",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\""+operatorId[l]+"\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
				  "method": "POST",
				  "mode": "cors",
				  "credentials": "include"
				}).then(a => a.json()).then(b => operatorChatCount[l] = b.total)
	}
	
	let tbody = document.createElement('tbody')
	for(let i = 0; i < array.length; i++) {
		var tr = document.createElement('tr')
		for(let j = 0; j < 5; j++) {
			var td = document.createElement('td')
			switch(j) {
				case 0:
					td.textContent = array[i].operator;
					td.style = 'text-align: left; padding-left: 50px'
					break;
				case 2:
					for(let j = 0; j < operatorNames.length; j++)
						if(array[i].operator == operatorNames[j]) {
							td.textContent = operatorChatCount[j]
							break
						}
					break;
				case 1:
					td.textContent = array[i].conversationClosed;
					break;
				case 3:
					var averageAnswerTime = Math.floor(array[i].averageAnswerTime / 1000)
					averageAnswerTime = averageAnswerTime < 60 ? '00:' + averageAnswerTime : Math.floor(averageAnswerTime / 60) + ':' + ((averageAnswerTime % 60) < 10 ? '0' + (averageAnswerTime % 60) : (averageAnswerTime % 60))
					td.textContent = averageAnswerTime;
					break;
				case 4:
					var averageHandlingTime = Math.floor(array[i].averageHandlingTime / 1000)
					averageHandlingTime = averageHandlingTime < 60 ? averageHandlingTime : Math.floor(averageHandlingTime / 60) + ':' + ((averageHandlingTime % 60) < 10 ? '0' + (averageHandlingTime % 60) : (averageHandlingTime % 60))
					td.textContent = averageHandlingTime;
					break;
			}
			tr.append(td)
		}
		tbody.append(tr)
	}
	
	
	for(let i = 0; i < tbody.childElementCount; i++) {
		for(let j = 0; j < operatorNames.length; j++)
			if(tbody.children[0].children[0] == operatorNames.length) {
				let tr = document.createElement('tr')
				tr.textContent = operatorChatCount[j]
				tbody.children[0].insertBefore(tbody.children[0].children[2])
			}
	}
	
	table.append(trHead)
	table.append(tbody)
	
	let newDivForStats = document.createElement('div')
	newDivForStats.append(table)
	document.getElementById('root').children[0].children[1].children[0].children[1].append(newDivForStats)
	
	let str = document.createElement('button')
	str.textContent = 'Проверить CSAT + тематики чатов'
	str.id = 'buttonCheckStats'
	str.style.marginLeft = '50px'
	str.onclick = checkCSAT
	document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
	
	document.getElementById('buttonGetStat').textContent = 'Скрыть стату'
	document.getElementById('buttonGetStat').removeAttribute('disabled')
}

async function checkCSAT() {
	let str = document.createElement('p')
	str.style.paddingLeft = '50px'
	if(document.getElementById('buttonCheckStats').textContent == 'Повторить проверку')
		document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
	document.getElementById('buttonCheckStats').textContent = 'Загрузка'
	document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
	var date = new Date()
	day = month = ""
	if(date.getMonth() < 9)
		month = "0" + (date.getMonth() + 1)
	else 
		month = (date.getMonth() + 1)
	if(date.getDate() < 10)
		day = "0" + date.getDate()
	else
		day = date.getDate()

	secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
	date = date - 24 * 60 * 60 * 1000
	var date2 = new Date()
	date2.setTime(date)

	if(date2.getMonth() < 9)
	month2 = "0" + (date2.getMonth() + 1)
	else 
	month2 = (date2.getMonth() + 1)
	if(date2.getDate() < 10)
	day2 = "0" + date2.getDate()
	else
	day2 = date2.getDate()

	firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"

	try {
		page = 1
		let stringChatsWithoutTopic = ""
		csatScore = 0
		csatCount = 0
		while(true) {
			test = ''
			await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
			  "headers": {
				"content-type": "application/json",
			  },
			  "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
			  "method": "POST",
			}).then(r => r.json()).then(r => test = r)
			for(let i = 0; i < test.items.length; i ++) {
				let flagCsat = 0
				let flagTopic = 0
				await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
			.then(r => r.json())
			.then(r => {
				if(r.operatorId == operatorId) {
					flagCsat = 1
					if(r.payload != undefined)
						if(r.payload.topicId != undefined)
							if(r.payload.topicId.value == "")
								flagTopic = 1
				}
				})
				if(flagCsat == 1)
					if(test.items[i].stats.rate != undefined)
						if(test.items[i].stats.rate.rate != undefined) {
							csatScore += test.items[i].stats.rate.rate
							csatCount++
						}
				if(flagTopic == 1)
					stringChatsWithoutTopic += '<a href="https://hdi.skyeng.ru/autofaq/conversation/-11/' + test.items[i].conversationId + '" onclick="">https://hdi.skyeng.ru/autofaq/conversation/-11/' + test.items[i].conversationId + '</a></br>'
			}
			
			if(stringChatsWithoutTopic == "")
				stringChatsWithoutTopic = ' нет таких'
			str.innerHTML = 'Оценка: ' + Math.round(csatScore/csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' + stringChatsWithoutTopic
			
			if(test.total > 100 && page == 1) {
				page = 2
			} else {
				break
			}
		}
	} catch {
		str.textContent = 'Что-то пошло не так. Сделайте скрин консоли и отправьте в канал chm-dev, пожалуйста'
	}
	document.getElementById('buttonCheckStats').textContent = 'Повторить проверку'
}

function prepTp() {
	document.getElementById('msg1').style.display = ''
	document.getElementById('snd').style.marginLeft = '16px'
	document.getElementById('testUsers').style.display = ''
	document.getElementById('takeNewChat').style.display = ''
	document.getElementById('howManyChats').style.display = ''
	flagLangBut = 1
	customTemplates()
	whoAmI()
		
	let buttonGetStat = document.createElement('div');
	buttonGetStat.id = 'buttonGetStat';
	buttonGetStat.innerHTML = "Статистика";
	buttonGetStat.style.marginLeft = "15px";
	buttonGetStat.onclick = function() {
		if(this.textContent == 'Скрыть стату') {
			if(this.getAttribute('disabled') != null)
				return
			if(document.getElementById('tableStats') != undefined) {
				document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.remove()
			}
			this.textContent = 'Статистика'
			
			document.getElementById('buttonGetStat').setAttribute('disabled', 'disabled')
			
			if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') != -1) {
				document.getElementById('root').children[0].children[1].children[0].children[1].children[1].style.display = ""
			}
			if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') != -1) {
				document.getElementById('root').children[0].children[1].children[0].children[1].children[0].style.display = ""
			}
		} else {
			if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') != -1) {
				document.getElementById('root').children[0].children[1].children[0].children[1].children[1].style.display = "none"
			} else if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') != -1) {
				document.getElementById('root').children[0].children[1].children[0].children[1].children[0].style.display = "none"
			} else {
				this.textContent = 'Неверная страница'
				setTimeout(function() { document.getElementById('buttonGetStat').textContent = "Статистика" }, 500)
				return
			}
			getStats()
			document.getElementById('buttonGetStat').setAttribute('disabled', 'disabled')
			this.textContent = 'Загрузка'
		}
	}
	document.getElementById('app-header').append(buttonGetStat)
	// var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
	// btnAdd.insertBefore(buttonGetStat, btnAdd.children[0])
	
	//setInterval(checkTicketCountsCrm, 300)
	setInterval(timerHideButtons, 300)
	
	setTimeout(function() {
		// Модуль wallentine в АФ
		include("https://rawgit.com/agronaut000/JS/master/viewSlack.js");
		// Модуль репорта на жалобы
		include("https://rawgit.com/agronaut000/JS/master/reportForm.js");
	}, 2000)
	
	setTimeout(function() {
		if(localStorage.getItem('inspector') == 'yes') {
			var but = document.createElement('button')
			but.style.marginLeft = '5px'
			but.textContent = "Нотгуды"
			but.id = 'buttonForNotgoods'
			var newinput = document.createElement('input')	
			newinput.style.marginLeft = '5px'
			newinput.style.textAlign = "center"
			newinput.id = 'inputForNotgoods'
			var curDate = new Date()
			curDate.setTime(curDate - 24 * 60 * 60 * 1000)
			newinput.placeholder = curDate.getDate() + "." + (curDate.getMonth() + 1) + "." + curDate.getFullYear()
			document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.appendChild(newinput)
			document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.appendChild(but)
			
			document.getElementById('buttonForNotgoods').onclick = function () {
				if(document.getElementById('inputForNotgoods').value != "")
					getNotGoods(document.getElementById('inputForNotgoods').value)
				else
					getNotGoods(document.getElementById('inputForNotgoods').placeholder)
			}
		}
	}, 2500)
}
function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}


function firstLoadPage() {
	if(window.location.href.indexOf('skyeng.autofaq.ai') === -1) {
		document.getElementById('AF_helper').style.display = 'none';
		document.getElementById('testUsers').style.display = 'none';
	} else {
		mystyles()
		setTimeout(move_again_AF, 3500)
		
		setTimeout(function() {
			btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
			btnAdd1.insertBefore(hashBut, btnAdd1.children[0])
			btnAdd1.insertBefore(maskBack, btnAdd1.children[0])
		}, 2000)
		
		setInterval(startTimer, 1000)
	}
	setTimeout(function () {document.getElementById('testUsers').style.background = "#464451"}, 200)
}
firstLoadPage()

if(localStorage.getItem('hesoyam') == 1) {
	let newDiv = document.createElement('div')
	newDiv.style.margin = '5px'
	let button = document.createElement('button')
	button.textContent = 'Закрыть чат'
	button.id = 'easyCloseChat'
	button.onclick = function() {
		var chatId = document.location.pathname.split('/')[3]
		fetch("https://skyeng.autofaq.ai/api/conversation/status", {
		  "headers": {
			"content-type": "application/json",
		  },
		  "body": "{\"command\":\"DO_SET_CONVERSATION_STATUS\",\"conversationId\":\"" + chatId + "\",\"status\":\"ClosedByOperator\",\"autofaqServiceId\":120181,\"assignToOperatorId\":\"" + operatorId + "\"}",
		  "method": "POST",
		});
	}
	newDiv.append(button)
	document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.append(newDiv)
}
function hesoyam() {
	if(localStorage.getItem('hesoyam') == 1) {
		localStorage.setItem('hesoyam', '0')
		document.getElementById('easyCloseChat').remove()
		return
	}
	localStorage.setItem('hesoyam', '1')
	let newDiv = document.createElement('div')
	newDiv.style.margin = '5px'
	let button = document.createElement('button')
	button.textContent = 'Закрыть чат'
	button.id = 'easyCloseChat'
	button.onclick = function() {
		chatId = document.location.pathname.split('/')[3]
		fetch("https://skyeng.autofaq.ai/api/conversation/status", {
		  "headers": {
			"content-type": "application/json",
		  },
		  "body": "{\"command\":\"DO_SET_CONVERSATION_STATUS\",\"conversationId\":\"" + chatId + "\",\"status\":\"ClosedByOperator\",\"autofaqServiceId\":120181,\"assignToOperatorId\":\"" + operatorId + "\"}",
		  "method": "POST",
		});
	}
	newDiv.append(button)
	document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.append(newDiv)
}

function toUTF8Array(str) {
	var utf8 = [];
	for (var i=0; i < str.length; i++) {
		var charcode = str.charCodeAt(i);
		if (charcode < 0x80) utf8.push(charcode);
		else if (charcode < 0x800) {
			utf8.push(0xc0 | (charcode >> 6), 
					  0x80 | (charcode & 0x3f));
		}
		else if (charcode < 0xd800 || charcode >= 0xe000) {
			utf8.push(0xe0 | (charcode >> 12), 
					  0x80 | ((charcode>>6) & 0x3f), 
					  0x80 | (charcode & 0x3f));
		}
		// surrogate pair
		else {
			i++;
			// UTF-16 encodes 0x10000-0x10FFFF by
			// subtracting 0x10000 and splitting the
			// 20 bits of 0x0-0xFFFFF into two halves
			charcode = 0x10000 + (((charcode & 0x3ff)<<10)
					  | (str.charCodeAt(i) & 0x3ff))
			utf8.push(0xf0 | (charcode >>18), 
					  0x80 | ((charcode>>12) & 0x3f), 
					  0x80 | ((charcode>>6) & 0x3f), 
					  0x80 | (charcode & 0x3f));
		}
	}
	return utf8;
}

function decToHex(dec)
{
	var hexStr = '0123456789ABCDEF';
	var low = dec % 16;
	var high = (dec - low)/16;
	hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
	return hex;
}

function textToUTF8String(string) {
	string = toUTF8Array(string)
	let string2 = ""
	for(i = 0; i < string.length; i++) {
		string2 += "%" + decToHex(string[i])
	}
	return string2
}
var flagGetCountTickets = 0
function checkTicketCountsCrm() {
	if(document.getElementsByClassName('ant-modal-content')[0] !== undefined && flagGetCountTickets == 0 && document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
		flagGetCountTickets = 1
		if(document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
			document.getElementsByClassName('ant-modal-content')[0].querySelectorAll('button')[2].onclick = function() {
				if(document.getElementsByClassName('ant-modal-content')[0].children[2].children[0].children[0].children[0].children[0].children[0].children[1].textContent == 'Критический' && document.getElementsByClassName('ant-modal-content')[0].children[2].children[0].children[0].children[0].children[0].children[1].children[1].textContent == 'Техподдержка 1-я линия crm2') {
					let me = textToUTF8String(document.querySelector('.user_menu-dropdown-user_name').innerText)
					var adr1 = document.location.pathname
					adr1 = adr1.split('/')
					adr1 = adr1[3]
					link = 'https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1
					let body = 'entry.1213932=' + me + '&entry.1439163622=' + link
					let options = {
						  "headers": {
							"content-type": "application/x-www-form-urlencoded",
						  },
						  "body": body,
						  "method": "POST",
						}
					document.getElementById('responseTextarea1').value = JSON.stringify(options)
					document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/d/e/1FAIpQLSft6Oyu3LRGsyG3-IicG7m5bMr1cdK0oZXnXgk7Aid4AdpB2Q/formResponse'
					if(document.getElementById('responseTextarea3') != null)
						document.getElementById('responseTextarea3').value = ''
					document.getElementById('sendResponse').click()
				}
			}
		}
		getInfoGoogleDoc()
	} 
	if(document.getElementsByClassName('ant-modal-content')[0] === undefined) {
		flagGetCountTickets = 0
	}
}
function getInfoGoogleDoc() {
   var app = 'https://script.google.com/macros/s/AKfycbzoean4smRm2nSrOxprmHT5c1Pt8h_mv9ypoJImJ-AwD6QOSI4/exec',
	  xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
	 if (xhr.readyState !== 4) return;

	 if (xhr.status == 200) {
		try {
			var r = JSON.parse(xhr.responseText),
			   result = r["result"];
			   
			let allTickets = result;
			let curDate = new Date()
			let curH = (curDate.getUTCHours()) % 24
			let prevH = (curDate.getUTCHours() - 1) % 24
			let nextH = (curDate.getUTCHours() + 1) % 24
			let curM = curDate.getUTCMinutes()
			let time1 = ''
			let time2 = ''
			let count = 0
			if(curM > 50) {
				time1 = Number(curH.toString() + '50')
				time2 = Number(nextH.toString() + '50')
			} else {
				time1 = Number(prevH.toString() + '50')
				time2 = Number(curH.toString() + '50')
			}
			for(i = 0; i < allTickets.length; i++) {
				let t = Number(allTickets[i][0].split('T')[1].split(':')[0] + allTickets[i][0].split('T')[1].split(':')[1])
				if(t > time1 && t < time2)
					count++
			}
			
			let newDiv = document.createElement('div')
			newDiv.textContent = 'Передано чатов CRM2 1Л: ' + count
			document.getElementsByClassName('ant-modal-content')[0].children[2].children[0].children[0].children[0].children[0].append(newDiv)
		} catch(e) {console.log(e)}
	 }
   }
   xhr.send()
}

function weWillNotBeSlaves() {
	localStorage.setItem('scriptAdr', TP_addr2)
	prepTp()
}

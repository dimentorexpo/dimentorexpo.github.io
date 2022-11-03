function mystyles() {
    let mstl = document.createElement('style');
    document.body.append(mstl);
    var style = `
	input {
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}	
	textarea {
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}
	span {
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}
	button {
		background-color:#768d87;
		border-radius:5px;
		border:1px solid #566963;
		color:#ffffff;
		padding:5px 5px;
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}
	button:hover {
		background: #6A5ACD;
	}
	.active-query {
		border-left:6px solid #1ff400;
		box-shadow: 0px 5px 5px rgb(0 0 0 / 55%);
		text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
		font-weight: 700;
		color: greenyellow;
		transition: all 1s ease;
	}
	#jirafinder, #buttonUnsub {
		cursor: pointer;
		font-size: 14px;
		border: 1px solid black;
		padding: 6px;
	}
	#jirafinder:hover {
		background:DeepSkyBlue;
		color:white;
		font-weight:700;
	}	
	#buttonUnsub:hover {
		background:DeepSkyBlue;
		color:white;
		font-weight:700;
	}	
	#suggestform:hover {
		background:DeepSkyBlue;
		color:white;
		font-weight:700;
	}
	.radio {
		width:15px;
		height:15px;
		transition: all 0.5s ease;
	}
	.radio:hover {
		transform: scale(1.5);
		font-weight: 600;
	}
	.sdcustfieldformlines {
        width: 420px;
    }
    .sdexpecactual {
        width: 420px;
    }
	.widthofsd {
		width:420px;
	}
	.activebtn {
		background-color: #1e90ff;
	}
	.activebtnsd {
		background-color: #ff6347;
	}
	.sugops {
		margin-left:5px;
		color:bisque;
		font-size: 16px;
		transition: all 0.5s ease;
	}
	.sugops:hover {
		font-size:18px;
		color: SteelBlue;
		font-weight: 600;
	}
	#smartroomform:hover {
		background:DeepSkyBlue;
		color:white;
		font-weight:700;
	}
	#servDsk:hover {
		background:DeepSkyBlue;
		color:white;
		font-weight:700;
	}	
	.catsmartroom {
		margin-left: 5px;
		color: bisque;
		font-size: 16px;
		transition: all 0.5s ease;
	}
	.catsmartroom:hover {
		font-size:18px;
		color: SteelBlue;
		font-weight: 600;
	}
`
    mstl.innerHTML = style;
}

mystyles()


function checkelementtype(a) { // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX, a.clientY)

    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT') {
        return true;
    }
    return false;
}

function include(url) {
    var script = document.createElement('script');
    script.src = url;
	script.setAttribute('defer', '')
    document.getElementsByTagName('head')[0].appendChild(script);
}	

include("https://code.jquery.com/jquery-3.6.0.js") // подключаем модуль обработки JQuery
include("https://dimentorexpo.github.io/ModulesCRM/JiraSearch.js")
// include("https://dimentorexpo.github.io/ModulesCRM/unsub.js")
//Объявление кнопки в верхней панели CRM
let upmenubtn = document.createElement('span')
upmenubtn.innerText = "Меню"
upmenubtn.id = 'MenubarCRM'
upmenubtn.style="cursor:pointer;font-weight:500; text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;"
//конец обьявления кнопки

function initialize() { //функция инициализации кнопки меню в верхней области CRM
try {
	if (location.origin == 'https://crm2.skyeng.ru')
		if (document.getElementsByClassName('mat-toolbar-row')[0] != undefined && document.getElementById('MenubarCRM') == null) {
			document.getElementsByClassName('mat-toolbar-row')[0].children[1].children[0].append(upmenubtn)
			
			
			
			document.getElementById('MenubarCRM').onclick = function() {
				if (document.getElementById('idmymenucrm').style.display == 'none')  {
					document.getElementById('idmymenucrm').style.display =''
				} else {
					document.getElementById('idmymenucrm').style.display ='none'

				}
			}
			
			clearInterval(init)
		}
} 
catch (e) { console.error(e, e.stack); }
}

var init = setInterval(initialize, 3000) //заносим в переменную чтобы ее потом в функции можно было удалить интервал

let menubarcrm = document.createElement('div')
menubarcrm.style = `background: white; position:absolute; left: 950px; top: 50px; border: 0px solid #000000; display:none; min-height: 60px; min-width:150px; box-shadow: -1px 4px 16px 7px rgba(34, 60, 80, 0.09); z-index:999;`
menubarcrm.id = 'idmymenucrm'

document.body.append(menubarcrm)

//Обьявление кнопки открытия меню поиска по Jira
let jirasearchbtn = document.createElement('div')
jirasearchbtn.innerText = "🔎Jira search"
jirasearchbtn.id = "jirafinder"
document.getElementById('idmymenucrm').append(jirasearchbtn)
//конец обьявления

let buttonOpenForm = document.createElement('div'); //unsub
buttonOpenForm.id = 'buttonUnsub';
buttonOpenForm.textContent = "📧Unsub";
// buttonOpenForm.style = "cursor: pointer; font-size: 14px; border-bottom: 1px solid black; padding: 6px; border-left: 1px solid black; border-right: 1px solid black;"
document.getElementById('idmymenucrm').append(buttonOpenForm)

include("https://dimentorexpo.github.io/ModulesCRM/unsub.js")

let butopensugestform = document.createElement('div') //suggest common
butopensugestform.id = "suggestform"
butopensugestform.innerHTML = "📝Предложения"
butopensugestform.style = "cursor: pointer; font-size: 14px; border-bottom: 1px solid black; padding: 6px; border-left: 1px solid black; border-right: 1px solid black;"

document.getElementById('idmymenucrm').append(butopensugestform)

include("https://dimentorexpo.github.io/ModulesCRM/Suggest.js")

let butsmartroom = document.createElement('div') // smartroom sugest
butsmartroom.id = "smartroomform"
butsmartroom.innerHTML = "🦐Smartroom"
butsmartroom.style = "cursor: pointer; font-size: 14px; border-bottom: 1px solid black; padding: 6px; border-left: 1px solid black; border-right: 1px solid black;"

document.getElementById('idmymenucrm').append(butsmartroom)

include("https://dimentorexpo.github.io/ModulesCRM/Smartroom.js")


let servDsk = document.createElement('div') //service desk
servDsk.id = "servDsk"
servDsk.innerHTML = "🥏ServiceDesk"
servDsk.style = "cursor: pointer; font-size: 14px; border-bottom: 1px solid black; padding: 6px; border-left: 1px solid black; border-right: 1px solid black;"

document.getElementById('idmymenucrm').append(servDsk)

include("https://dimentorexpo.github.io/ModulesCRM/ServiceDesk.js")

let butLessonInfo = document.createElement('div')
butLessonInfo.id = "butLessonInfo"
butLessonInfo.innerHTML = "🎓 Lesson Info"
butLessonInfo.style = "cursor: pointer; font-size: 14px; border-bottom: 1px solid black; padding: 6px; border-left: 1px solid black; border-right: 1px solid black;"

include("https://dimentorexpo.github.io/ModulesCRM/LessonStatus.js")

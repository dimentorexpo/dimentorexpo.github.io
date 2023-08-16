let pldata;
//let drevo;
let afopername; // переменная фамилии, имени оператора при переборе общего списка операторов
let foundarr;
let flagsearch;
let operchatsdata;
let isChatOnOperator = false;
let flagusertype;
let flaggetlogginer;
let tokenlog; // пустая переменная для функции logginerfortests подставляемая в body
let audio // переменнай для проигрывания звука при поступлении нового чата
let chatneraspcount; // переменная для получения колчества нераспределенных чатов в очереди
let chattpquecount; // переменная для получения колчества нераспределенных чатов в очереди тематики ТП v1
idk = 0
var tmrs = []
var timeStart = new Date()
let soundintervalset; //интервал между проигрыванием звука
let template_flag = 0
let template_flag2 = 0
let word_text = ""
let template_text = ""
let flagggg = 0;
let addInfoUser = document.createElement('div');
let getidusrteachreq;
let getidusrstud;
let getidusrsteach;
let getservidst;
var templatesAF = [];
var bool = 0;
var table;
var operatorId = ""; //глобальная переменная после получения ID operator , который использует расширение и авторизован в свой профиль
var operatorsarray = []; //массив операторов , который потом пригодится для других функций
var flagLangBut = 0;
var abortTimeOut = ''								// перменная для отмены будильника 1
var abortTimeOut1 = ''
if (localStorage.getItem('tpflag') == null || localStorage.getItem('tpflag' == undefined)) {
    localStorage.setItem('tpflag', 'ТП')
}						// перменная для отмены будильника 2

if (localStorage.getItem('defaclschatcolor') == null || localStorage.getItem('defaclschatcolor') == undefined)
    localStorage.setItem('defaclschatcolor', '#FF47CA')

document.getElementById('testUsers').style.display = 'none'; // скрываю плавающее окно при загрузке страницы
var modulesarray = [];
function mystyles() {
    let mstl = document.createElement('style');
    document.body.append(mstl);
    var style = `
	button {
		background:#768d87;
		border-radius:5px;
		border:1px solid #566963;
		color:#ffffff;
		padding:2px 2px;
		box-shadow: 0px 3px 1px rgb(0 0 0 / 35%);
	}
	button:hover {
		background: #6A5ACD;
	}
	.activebtn {
		background-color: #1e90ff;
	}
	.activebtnsd {
		background-color: #ff6347;
	}
    .usinfoops{
        margin-left: 5px;
        width: 25.23px;
    }
    .uplinksbar {
        width:50px;
    }
    .sdcustfieldformlines {
        width: 420px;
    }
    .sdexpecactual {
        width: 420px;
    }
	.selchatact {
		border-left: 6px solid DeepSkyBlue;
	}
		.checkbox-audio {
			display: inline-block;
			height: 28px;
			line-height: 28px;
			margin-right: 10px;
			position: relative;
			vertical-align: middle;
			font-size: 14px;
			user-select: none;
		}
		.checkbox-audio .checkbox-audio-switch {
			position: relative;
			display: inline-block;
			box-sizing: border-box;
			width: 56px;
			height: 28px;
			border: 1px solid rgba(0, 0, 0, .1);
			border-radius: 25%/50%;
			vertical-align: top;
			background: #eee;
			transition: .2s;
		}
		.checkbox-audio .checkbox-audio-switch:before {
			content: '🔈';
			position: absolute;
			top: 1px;
			left: 1px;
			display: inline-block;
			width: 24px;
			height: 24px;
			border-radius: 50%;
			background: white;
			box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
			transition: .15s;
		}
		.checkbox-audio input[type=checkbox] {
			display: block;
			width: 0;
			height: 0;
			position: absolute;
			z-index: -1;
			opacity: 0;
		}
		.checkbox-audio input[type=checkbox]:not(:disabled):active + .checkbox-audio-switch:before {
			box-shadow: inset 0 0 2px rgba(0, 0, 0, .3);
		}
		.checkbox-audio input[type=checkbox]:checked + .checkbox-audio-switch {
			background: limegreen;
		}
		.checkbox-audio input[type=checkbox]:checked + .checkbox-audio-switch:before {
			content: '🔊';
			transform:translateX(28px);
		}
		#buttonOpenForm {
			height:50px;
		}
		.question-event {
			background:#1890FF26;
			min-width:280px;
			max-width:290px;
			margin-left: 10px;
			margin-bottom: 5px;
			padding: 5px 5px;
			float:left;
		}
		.question-event-name {
			color:#00BFFF;
			font-weight:700;
			font-size:12px;
			float:left;
			margin-right:5px;
			padding-left:5px;
		}
		.question-event-date {
			color: #C0C0C0;
			float: right;
			max-width: 333px;
			font-size: 12px;
		}
		.question-event-text {
			color:white;
			word-wrap: break-word;
			padding-left:5px;
		}
		.event-container  {
			float: left;
			color: white;
			text-align: center;
			width: 380px;
			font-size: 12px;
		}
		.event-name {
			float: left;
			color: white;
			text-align: center;
			width: 380px;
			font-size: 12px;
		}
		.event-date {
			float:right;
		}
		.event-other-date {
			float:right;
			font-size:12px;
		}
		.answer-bot-container {
			background: #52C41A26;
			min-width: 280px;
			max-width: 300px;
			float: right;
			margin-bottom: 5px;
			margin-right: 15px;
			padding: 5px 5px;
		}
		.answer-bot-name {
			color:#9ACD32;
			float:left;
			font-size:12px;
			font-weight:700;
			margin-right:5px;
			padding-left:5px;
		}
		.answer-bot-date {
			font-size:12px;
			color:#C0C0C0;
			float:right;
			max-width:400px;
		}
		.answer-oper-container {
			background: #FADA5E26;
			min-width: 280px;
			max-width: 320px;
			float: right;
			margin-bottom: 5px;
			margin-right: 15px;
			padding: 5px 5px;
		}
		.answer-oper-name {
			color:bisque;
			float:left;
			font-size:12px;
			padding-left:5px;
		}
		.oper-comment-container {
			background:#80808054;
			width:355px;
			float:left;
			margin-bottom:5px;
			margin-left: 10px;
			padding: 5px 5px;
		}
		.oper-comment-name {
			color:#C0C0C0;
			float:left;
			font-size:12px;"
		}
		.oper-comment-operator {
			color:#3eade5;
			float:left;
			font-size:12px;
		}
		.event-name.light {
			color: #999999 !important;
		}
		.question-event-text.light {
			color: #000 !important;
		}
		.question-event-name.light {
			color: #23609E !important;
		}
		.event-container.light {
			color: #999999 !important;
		}
		.oper-comment-container.light {
			background: #80808026 !important;
		}
		.oper-comment-name.light {
			color: #808080 !important;
		}
		.oper-comment-operator.light {
			color: #2a8ed9 !important;
		}
		.question-event-date.light {
			color: #999999 !important;
		}
		.answer-bot-date.light {
			color: #999999 !important;
		}
		.answer-oper-name.light {
			color: #b8860b  !important;
		}
		.answer-bot-name.light {
			color: #388C11 !important;
		}
		.chatlist.light {
			color:#000 !important;
		}
		.copyserviceid {
			margin-left: 5px;
			cursor: pointer;
		}
		.underline-service {
			width:260px; border: 1px dotted #ff0000;
			border-style: none none dotted;
			color: #fff;
			background-color: #fff;
		}
		.img-chat-history {
			width:160px;
			transition: all 0.5s ease-out;
		}
		.img-chat-history:hover {
			transform: scale(1.5);
			width: 300px;
			margin-left: 50px;
			z-index: 9999;
		}
		.cursor-userinfobtns {
			cursor:pointer;
			font-weight:700;
		}

		#servDsk {
			cursor: pointer;
			display:flex;
			align-items:center;
			font-size: 14px;
			border: 1px solid black;
			height: 36px;
			min-width: 100px;
			padding-left:5px;
		}

		#buttonOpenForm, #butMarks, #suggestform, #otkaz, #butChatHistory, #butLessonInfo, #JiraOpenForm, #smartroomform, #butFrozeChat, #buttonGetStat {
			display:flex;
			align-items:center;
			cursor: pointer;
			font-size: 14px;
			min-width: 100px;
			border-bottom: 1px solid black;
			border-left: 1px solid black;
			border-right: 1px solid black;
			height: 36px;
			padding-left:5px;
		}

		#servDsk:hover, #buttonOpenForm:hover, #butMarks:hover, #suggestform:hover, #otkaz:hover, #butChatHistory:hover, #butLessonInfo:hover, #JiraOpenForm:hover, #smartroomform:hover, #butFrozeChat:hover, #buttonGetStat:hover {
			background:DeepSkyBlue;
			color:#ffffffe6;
			font-weight:600;
			font-size:16px;
			box-shadow: 0px 3px 1px rgb(0 0 0 / 35%);
			text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
			height:45px;
		}

		.hyperlnk {
			height:0px;
			opacity:0;
			visibility: hidden;
			transition: 1s;
		}
		.hyper-active {
			opacity:1;
			height: 32px;
			visibility: visible;
			transition: 1s;
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
		.catsmartroom {
			color: bisque;
			font-size: 16px;
			transition: all 0.5s ease;
		}
		.catsmartroom:hover {
			font-size:18px;
			color: SteelBlue;
			font-weight: 600;
		}
		.otherfieldoff {
			text-align: center;
			width: 400px;
			color: black;
			margin-top: 5px;
			background:lightgrey;
			cursor:wait;
		}
		.otherfieldon{
			text-align: center;
			width: 400px;
			color: black;
			margin-top: 5px;
			background:white;
			cursor:text;
		}
		.active-query {
			border-left:6px solid #1ff400;
			box-shadow: 0px 5px 5px rgb(0 0 0 / 55%);
			text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
			font-weight: 700;
			color: greenyellow;
			transition: all 1s ease;
		}
		.active-stat-tab {
			border-left:6px solid #1ff400;
			box-shadow: 0px 5px 5px rgb(0 0 0 / 55%);
			text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
			font-weight: 700;
			color: #07ecc6;
			transition: all 1s ease;
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
	.widthofsd {
		width:420px;
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
	}
	.inithide {
		display:none !important;
	}
	.teststudteach {
		background: #3CB371;
		margin-left: 5px;
		margin:5px;
		cursor: pointer;
		width: 24px;
	}
	.teststudteach.active {
		background: coral;
	}

	.msgtype {
		border-left: 8px solid #4ce479;
		width: 80px;
		margin-left: 20px;
		transition: all 1s ease;
	}
	.msgtype.notes {
		border-left: 8px solid #b4b4b4;
		transition: all 1s ease;
	}

	#opennewcat:hover , #crmopersstatuses:hover, #datsyCalendar:hover, #radioPlayer:hover  {
		opacity: 1 !important;
		box-shadow: 0px 3px 1px rgb(0 0 0 / 35%);
		text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
		width:45px !important;
		height:45px !important;
		font-size:23px !important;
	}

	.leftbaropers {
		display:flex;
		align-items:center;
		font-size: 13.5px;
		cursor:pointer;
	}
	.leftbaropers:hover {
		background: MediumSeaGreen;
		color:white;
		font-weight:700;
		font-size:15px;
	}

	#clicktounhidestatuses:hover {
		background:DeepSkyBlue;
		color:white !important;
		font-weight:700;
	}
	
	.mainplayer {
		width: 625px;
		border: 1px solid black;
		padding: 5px;
		background: #464451;
		color: bisque;
		max-height: 510px;
		overflow-y: auto;
	}

	#audioControls {
		display: flex;
		justify-content: space-evenly;
	}

	li.active {
		background: #3cbb56;
		border-radius: 10px;
		box-shadow: 0px 3px 1px rgb(0 0 0 / 35%);
		text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
	}

	.radiolist:hover {
		background: #373c67;
		border-radius: 10px;
	}

	#audioList {
		margin-top:5px;
		width: 515px;
		border: 1px solid black;
		background: #768d87;
		border-radius: 10px;
		margin-left: 20px;
	}

	#player {
		width: 550px;
		margin-left: 25px;
	}

	.deleteline:hover {
		background: red !important;
		font-weight: 700 !important;
	}

	#pauseAudio {
		font-family: sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, NotoEmoji, Twemoji;
		background: #bd4b37;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
		font-size: 16px;
		transition: background 0.2s ease-in-out;
	}

	#playAudio {
		font-family: sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, NotoEmoji, Twemoji;
		background: #3cbb56;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
		font-size: 16px;
		transition: background 0.2s ease-in-out;
	}

	#addAudio {
		font-family: sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, NotoEmoji, Twemoji;
		background: #ffbb00;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
		font-size: 16px;
		transition: background 0.2s ease-in-out;
	}

	#volumeUp,
	#volumeDown {
		font-family: sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, NotoEmoji, Twemoji;
		background: #85ac8c;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
		font-size: 16px;
		width: 50px;
		transition: background 0.2s ease-in-out;
	}

	#muteAudio {
		font-family: sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, NotoEmoji, Twemoji;
		background: #85ac8c;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		letter-spacing: 1px;
		transition: background 0.2s ease-in-out;
	}

	#playAudio:hover,
	#volumeUp:hover,
	#muteAudio:hover {
		background: #4ecc6e;
		cursor: pointer;
	}

	#addAudio:hover {
		background: #e6c772;
		cursor: pointer;
	}

	#pauseAudio:hover,
	#volumeDown:hover {
		background: #b66253;
		cursor: pointer;
	}
	
	button[name="saveToCalend"] {
		width: 110px;
		background: #3389a3;
		transition:all 0.5s ease;
	}
	
	button[name="deleteFromCalend"] {
		width: 110px;
		background: #a55a58;
		transition:all 0.5s ease;
	}
	
	button[name="saveToCalend"]:hover, button[name="deleteFromCalend"]:hover {
		box-shadow: 0px 0px 10px rgb(255 255 255);
		cursor:pointer;
	}
		
	#hideSlot:hover {
		font-size:24px !important;
		text-shadow: -2px 3px 16px rgb(255 255 255);
	} 
	
	.glowing-border-animation {
	  animation: glowing-border 2s ease-in-out infinite;
	  border: 2px solid blue;
	}

	@keyframes glowing-border {
	  0% {
		box-shadow: 0 0 10px limegreen;
	  }
	  50% {
		box-shadow: 0 0 20px yellow;
	  }
	  100% {
		box-shadow: 0 0 10px orange;
	  }
	}

	#chosenSlot:hover {
		background: #efe05e !important;
	}
		
	`
    mstl.innerHTML = style;
}

var win_AFhelper =  // описание элементов главного окна
    `<div style="display: flex; width: 351px;">
        <span style="width: 351px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" title="Переключает язык Русский/Английский" style="width:100px">Русский</button>
					<button id="hideMenuMain" title="Скрывает расширение и др открытых окон" style="margin-left:25px;">hide</button>
					<button id="setting" title="Открывает настройки расширения и включения/отключения будильника" style="width:23px; float: right; margin-right: 5px">⚙</button>
					<button id="links" title="Открывает доп.меню со ссылками и функциями" style="width:16px; float: right; margin-right: 5px">L</button>
					<button id="addsrc" class="onlyfortp" title="Открывает доп меню для работы с сервисами школы, требующими запрос на выдачу доступа" style="width:16px; float: right; margin-right: 5px">*</button>
					<button id="getnewtmpldata" title="Обновляет шаблоны из документа с шаблонами без необходимости обновлять страницу для актуализации" style="width:27px; float: right; margin-right: 5px">🔄</button>
					<button id="reminderstatus" title="Статус будильника 🔔 - вкл, 🔕 - выкл" style="width:25px; float: right; margin-right: 5px"></button>
					<input id ="phone_tr" placeholder="Телефон" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 15px; margin-top: 5px;"></input>
                    <input id ="email_tr" placeholder="Почта" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 12px; margin-top: 5px;"></input>
				</div>
				<div style="margin-left: 5px; margin-right: 5px; margin-bottom:5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
			</div>
			<div style="margin: 5px;" id="7str">
				<textarea style="width: 341px; height: 56px;" id="inp"></textarea>
			<div id="hyperlnk" class="hyperlnk">
				<input type="text" placeholder="Enter your link 🔗 here" style="margin-bottom:5px;width:270px;text-align:center;" id="bindlinktotext" title="Вводите в это поле ссылку, после чего в общем поле выделяете слово или фразу и кнопкой Insert встраиваете ссылку в текст шаблона"></input>
				<button id="insertlinktotext" title="Добавляет ссылку из поля слева в выделеное слово или фразу в тексте шаблона">Insert ✅</button>
			</div>
				<button title="Переключение для выбора отправить или доработать сообщение" id="msg1" style="width:100px;">Доработать</button>
				<button id="opandclsbarhyper" style="width:  30px; margin: 0; padding: 2px; text-align: center;" title="Открывает форму для прикрепления ссылки в текст">🔗</button>
                <button title="Отправить текст от имени бота" id="sndbot" style="width: 30px; margin-left: 5px">🤖</button>
				<button title="Отправить текст" id="snd" style="width:50px; margin-left: 5px">send</button>
				<button title="Переключает между отправкой текста в заметки или в чат пользователю" class="msgtype" id="msg">Чат</button>
			</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 350px">
			</div>
		</div>
			<div style="border: 2px double black; display: none; background-color: #464451" id="reminder_bar">
				<div style="margin: 5px; width: 350px">
					<label style="color:bisque">__Будильник №1</label> <label style="color:bisque">........................... Будильник №2__</label>
				<br>
					<input title="Ввод часа от 0 до 23 для будильника" "="" id="setchas" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
					<input title="Ввод минут от 0 до 59 для будильника" id="setminuta" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
					<button title="Запуск будильника при устаноовленном времени" id="setreminder" style="margin-top: 5px">SET🔔</button>
					<input title="Ввод часа от 0 до 23 для будильника" "="" id="setchas1" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
					<input title="Ввод минут от 0 до 59 для будильника" id="setminuta1" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
					<button title="Запуск будильника при устаноовленном времени" id="setreminder1" style="margin-top: 5px">SET🔔</button>
				<br>
					<button title="Отображение текущего времени" id="clock_js" style="color: white; margin-top: 5px"></button>
					<button id="clock_remin" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: lightgreen; margin-top: 5px">00 : 00 : 00</button>
					<button id="clock_remin1" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: MediumSpringGreen; margin-left:28px; margin-top: 5px">00 : 00 : 00</button>
				</div>
			</div>
				<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
		<div style="margin: 5px; width: 350px">
                <select style="height:28px; width:210px; text-align:center" id="soundlistaddr" onchange="changesoundaddr()">
                    <option selected="" disabled="">Звук нового сообщения</option>
                    <option value="othersound">Выбрать свой звук</option>
                    </select>
				<button title="Проверка звука при добавленной ссылке" id="sound_test">▶</button>
				<label title="Включение и отключение звука в АФ входящих запросов" class="checkbox-audio">
					<input id="audioswitcher" type="checkbox" checked="">
						<span class="checkbox-audio-switch"></span>
				</label>
                <input id="sound_adr" placeholder="Введи адрес звука" autocomplete="off" type="text" style="display: none; text-align: center; width: 210px; color: black;">
				<button title="Сохраняет ссылки на новый источник звука для входящего запроса в АФ" id="sound_save" style="display: none">💾</button>
				<br>
				<span style="color:bisque">Громкость звука в АФ</span>
				<input id="range" min="0" max="1" value="1.0" step="0.1" type="range">
                    <br>
				<span style="color:bisque">Интервал воспроизведения звука:</span>
				<input title="Ввод интервала в секундах между повторами звука нового чата" id="soundplayinterval" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black;">
				<button title="Внести изменения в интервал между повторами звука нового чата" id="setsoundplayinterval" style="margin-top: 5px">SET⌚</button>
					<br>
				<span style="color:bisque">Таймер автозакрытия:</span>
				<input title="Ввод числа для автозакрытия, при этом от этого числа будет отнято 2 минуты чтобы чат закрасился в фиолетовый цвет, то есть при значении по-умолчанию 12 на 10 минуте чат зальется фиолетовым цветом оповещая, что скоро будет закрыт" id="autoclosetime" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="2" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black; margin-left: 78px;">
				<button title="Внести изменения в таймер автозакрытия" id="setautoclosetime" style="margin-top: 5px">SET⌚</button>
					<br>
					<label style="color:bisque"><input type="checkbox" id="hidelngselector">Скрыть выбор языка АФ</label>
				<div class="onlyfortp" style="margin-top: 5px; width: 320px">
                    <label style="color:bisque"><input type="checkbox" id="hidelpmwindow">Скрыть окно с У П</label>
                    <br>
					<label id="defaulcolorclschat" style="color:bisque;"><input type="color" id="aclstimepicker">Цвет заливки закрытия чата</label>
                    <input id="test_std" placeholder="ID тест У" autocomplete="off" title = "ID личного тестового ученика" type="text" style="text-align: center; width: 100px; color: black;">
                    <button id="setteststd" title="Добавить в localstorage ID тестового У" style="margin-top: 5px">💾</button>
                    <input id="test_teach" placeholder="ID тест П" autocomplete="off" title = "ID личного тестового преподавателя" type="text" style="text-align: center; width: 100px; color: black;">
                    <button id="settestteach" title="Добавить в localstorage ID тестового П" style="margin-top: 5px">💾</button>
                </div>
                <div style="margin-top: 5px; width: 320px">
                    <span style="color:bisque; position: relative; left: 30%;">Выберите отдел:</span>
                    <span style="position: relative; left: 30%; background: green; color: white; padding: 5px; border-radius: 5px;" id="operdepout"></span>
                    <br>
                    <button onclick="AFthePieceofShit()" id="set_TPrezerv" title="Нажмите если вы из ТП и в АФ не работает Базы Знаний" style="margin-top: 5px">ТП рез</button>
                    <button onclick="WeAreTheChempions()" id="set_TP" title="Нажмите если вы из ТП" style="margin-top: 5px">ТП</button>
                    <button onclick="ShowMustGoOn()" id="set_KC" title="Нажмите если вы из КЦ" style="margin-top: 5px">КЦ</button>
                    <button onclick="AFthePieceofShitKC()" id="set_KCrezerv" title="Нажмите если вы из КЦ и в АФ не работает Базы Знаний" style="margin-top: 5px">КЦ рез</button>
                    <button onclick="AFthePieceofShitPrem()" id="set_PremTPrezerv" title="Нажмите если вы из Premium ТП и в АФ не работает Базы Знаний" style="margin-top: 5px">Prem ТП рез</button>
                    <button onclick="WeAreTheChempionsPrem()" id="set_TPPrem" title="Нажмите если вы из Premium ТП" style="margin-top: 5px">Prem ТП</button>
                    <br>
                </div>
				<button id="savesettingstofile" title="Сохраняет все настройки из localstorage в отдельный .json файл" style="color: #e5ece6; margin-top: 5px">💾 Сохранить настройки</button>
				<input type="file" id="fileinput" title="Загружает все настройки в localstorage из ранее сохраненного файла настроек в формте .json" style="display:none;">
				<label style="color: #e5ece6; background: #768d87; padding: 5px; border-radius: 5px; border: 1px solid #566963;" for="fileinput">⤵ Загрузить настройки</label>
			</div>
		</div>
	</span>
</div>`;

var win_refusefrom =  // описание элементов окна отказа от помощи
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 410px;" id="refuse_form_header">
                            <button title="скрывает меню" id="hideMeRefuseFormv2" style="width:50px; background: #228B22;">hide</button>
                            <button title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshhashrefuseform" style="width:24px;">♻</button>
                            <button title="По нажатию обновляет перечень опций в разделе Проблема и Как решилось" id="refreshoptions" style="width:24px;">🔄</button>
                            <button title="По нажатию очищает поля и сбрасывает в дефолтное состояние формы" id="clearrefuseform" style="width:24px;">🧹</button>
							<button title="Инструкция по этой форме" id="refuseforminstr" style="float:right">❓</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 410px" id="refuse_form_menu">
                            <input id="chatlnk" placeholder="Ссылка на чат" title="Вставьте сюда ссылку на чат" autocomplete="off" type="text" style="text-align: center; width: 410px; color: black; margin-top: 5px">
							<br>
							<select id="userissue" style="height: 25px; width:410px; margin-top:5px;">
									<option selected disabled="" style="background-color:orange; color:white;" value="problclient">Проблема клиента</option>
							</select>
							<br>

							<textarea id="otherproblem" class="otherfieldoff" disabled="true" placeholder="Другое, не подошли варианты 'Проблема'" title="Вводим свой вариант какая у пользователя проблема" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>

							<br>

							<select id="howissuesolverd" style="width:410px; height: 25px;">
									<option selected disabled="" style="background-color:orange; color:white;" value="howsolved">Как решилась</option>
                            </select>

							<br>

							<textarea id="othersolved" class="otherfieldoff" disabled="true" placeholder="Другое, не подошли варианты 'Решилось'" title="Вводим свой вариант как решилась проблема" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>

							<br>
							<button title="Отправляет заполненные поля формы в док" id="send2doc" style="width:105px; position: relative; left: 50%; margin-top: 5px; transform: translate(-50%, 0);">Отправить</button>
						</div>
		</span>
        </span>
</div>`;

flag = 0
str = localStorage.getItem('sound_str');
if (str !== null && str !== "")
    audio = new Audio(str);
else
    audio = new Audio("https://dimentorexpo.github.io/Sounds/msg.mp3");

Object.keys(localStorage).forEach(function (key) { // чистка localstorage от мусора , когда АФ на каждый лог добавляет запись вида SMART_TABLE... или при работе с архивом
    if (/^(SMART_TABLE.)/.test(key)) {
        localStorage.removeItem(key);
    }
});

localStorage.setItem('SMART_TABLE_SORTED_INFO(/tickets/archive)', '{\"columnKey\":\"ts\",\"order\":\"descend\"}')

// Блок горячих клавиш
const API_ENDPOINT = 'https://skyeng.autofaq.ai/api/reason8/operator/status';
const fetchOptions = {
    headers: {
        'content-type': 'application/json',
    },
    referrer: 'https://skyeng.autofaq.ai/tickets/archive',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: '',
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
};

function changeStatus(status) { // функция изменения статуса оператора
    fetchOptions.body = `{ "command": "DO_SET_OPERATOR_STATUS", "status": "${status}", "source": "Operator" }`;
    fetch(API_ENDPOINT, fetchOptions)
        .then((res) => {
            console.log(`Status changed to ${status}`);
        })
        .catch((err) => {
            console.error(err);
        });
}

if (window.location.href.indexOf('skyeng.autofaq.ai') !== -1) {
    document.onkeydown = (event) => {
        if (event.altKey && event.code === 'KeyO') { // горячие клавиши для смены статуса в Оффлайн
            changeStatus('Offline');
        } else if (event.altKey && event.code === 'KeyI') { // горячие клавиши для смены статуса в Занят
            changeStatus('Busy');
        }
    };
}

// Конец блока горячих клавиш

async function whoAmI() { // функция получения айди оператора, который работает и запустил расширение
    const a = await fetch('https://skyeng.autofaq.ai/api/operators/statistic/currentState', {
        credentials: 'include',
    });
    const b = await a.json();
    const me = document.querySelector('.user_menu-dropdown-user_name');
    operatorsarray = b.onOperator;

    b.onOperator.forEach((s) => {
        if (s.operator != null && me && s.operator.fullName === me.textContent) {
            operatorId = s.operator.id;
            afopername = s.operator.fullName;
            console.log(`Мой ID: ${operatorId}`);
        }
    });
}

function startTimer() { // большая функция по таймеру автозакрытия, работой с аудио, добавлением доп кнопок справа в панель информации о пользователе и кнопок быстрого выставления тегов
    var timeNow = new Date()
    if (timeNow - timeStart > 60 * 60 * 1000) {
        getText()
        timeStart = timeNow
    }
    for (i = 0; i < idk; i++) {
        var cT = new Date();
        var curTime1 = tmrs[i][3]
        var curTime2 = Number(cT);
        t = 0
        if (tmrs[i][2] == 0)
            t = 1
        else
            t = localStorage.getItem('aclstime') // таймер отсчета автозакрытия
        var curTime3 = (t * 60) - Math.floor((curTime2 - curTime1) / 1000);
        if (curTime3 < 0)
            continue
        var m = Math.floor(curTime3 / 60);
        var s = Math.floor(curTime3 % 60);
        var curTime4 = "";
        if (Number(m) < 10) {
            curTime4 = "0";
        }
        curTime4 = curTime4 + String(m) + ":";
        if (Number(s) < 10) {
            curTime4 = curTime4 + "0";
        }
        curTime4 = curTime4 + String(s);
        tmrs[i][0] = curTime4
    }
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && flag == 0) {
        requestsRed()
        flag = 1
    }
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1 && flag == 1)
        flag = 0

    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
        if (document.getElementsByClassName('ant-btn ant-btn-primary')[0] !== undefined)
            document.getElementsByClassName('ant-btn ant-btn-primary')[0].onclick = function () {
                refCurTimer(localStorage.getItem('aclstime') + ":00")
            }
        refreshTimer()

    }

    if (localStorage.getItem('audio') == '1')
        if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
            if (document.getElementsByClassName('expert-sidebar-button')[0] != undefined) {
                txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
                if (txt[14] > 0) {
                    if (!soundintervalset) {
                        audio.play()
                        soundintervalset = setInterval(() => { audio.play() }, localStorage.getItem('splinter') * 1000)
                    }
                } else {
                    clearInterval(soundintervalset)
                    soundintervalset = null
                }
            }
        }


    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
        vertical = user = ""
        nextClassMode = nextClassstudentId = ""
        nextClassModeId = ""
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "teacherVertical")
                vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "userType")
                user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent

            btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

            name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-statusHTML")
                for (k = 0; k < idk; k++) {
                    if (tmrs[k][1] == name) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идёт вводный урок")
                            tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                        else
                            tmrs[k][4] = ""
                    }
                }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-mode") {
                nextClassMode = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                nextClassModeId = i
            }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId")
                nextClassstudentId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
        }

        addInfoUser.innerHTML = vertical + " + " + user

    }

    if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv || localStorage.getItem('scriptAdr') == TPprem_addr || localStorage.getItem('scriptAdr') == TPprem_addrRzrv) {
        if (document.getElementsByClassName('expert-user_details-list').length != 0) {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    btn.appendChild(infouserbut)
                    btn.appendChild(buttonservstud)
                    btn.appendChild(buttonhistory)
                    btn.appendChild(marksstata)
                    btn.appendChild(trshotmain)
                    if (typeof buttonmobpas == 'object')
                        btn.appendChild(buttonmobpas)
                }

                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-teacherId") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    btn.appendChild(nextuserinfo)
                    btn.appendChild(buttonservivceuser)
                    btn.appendChild(btnNextUserChatHistory)
                    btn.appendChild(trshootnextuser)

                }
            }
        }

        if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
            if (document.getElementsByClassName('expert-user_details-list')[1].children[0] != undefined) {
                if (document.getElementsByClassName('expert-user_details-list')[1].children[0].classList != "") {

                    let copyCrmFromName = document.createElement('span')
                    copyCrmFromName.textContent = ' 💾'
                    copyCrmFromName.style.cursor = "pointer"
                    copyCrmFromName.id = 'diskettocopy'
                    if (document.getElementById('diskettocopy') == null) {
                        document.getElementsByClassName('expert-user_details-name')[0].append(copyCrmFromName)
                        copyCrmFromName.onclick = function () {
                            for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                    let getidafuser = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0];
                                    copyToClipboard1("https://crm2.skyeng.ru/persons/" + getidafuser)
                                }
                            }
                        }
                    }

                    const userTypeId = document.querySelector('#userTypeId');
                    if (!userTypeId) {
                        let userTypeName = document.createElement('span');
                        userTypeName.id = "userTypeId";
                        document.getElementsByClassName('expert-user_details-name')[0].appendChild(userTypeName);

                        const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
                        for (let i = 0; userDetailsList.childNodes[i]; i++) {
                            const childNode = userDetailsList.childNodes[i];
                            const textContent = childNode.childNodes[1].textContent;
                            if (textContent === "teacher") {
                                document.getElementById('userTypeId').textContent = "(П)";
                                document.getElementById('userTypeId').style.color = "#1E90FF";
                                break;
                            } else if (textContent === "student") {
                                document.getElementById('userTypeId').textContent = "(У)";
                                document.getElementById('userTypeId').style.color = "#DC143C";
                                break;
                            } else if (textContent === "parent") {
                                document.getElementById('userTypeId').textContent = "(РУ)";
                                document.getElementById('userTypeId').style.color = "#DC143C";
                                break;
                            }
                        }
                    }


                    //добавил окраску бренда skyeng

                    const expertDts = document.getElementsByClassName('expert-user_details-dt');
                    const brandToBackgroundColorMap = {
                        skyeng: '#00AEFA',
                        skysmart: '#2E8B57',
                        'идёт урок': '#FF0000',
                    };

                    function setBackgroundColor(element, brand) {
                        element.style.background = brandToBackgroundColorMap[brand];
                    }

                    for (let i = 0; i < expertDts.length; i++) {
                        if (expertDts[i].textContent === 'brand') {
                            const ps = document.getElementsByTagName('p');
                            for (let i = 0; i < ps.length; i++) {
                                setBackgroundColor(ps[i], ps[i].textContent);
                            }
                        }
                    }

                }
            }
        }
    }

    if ((localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv || localStorage.getItem('scriptAdr') == TPprem_addr || localStorage.getItem('scriptAdr') == TPprem_addrRzrv) && document.getElementById('continue_chat_button') == null && document.getElementsByClassName('expert-user_info_panel-footer-inner')[0] != undefined) {
        let btn1 = document.createElement('span');
        btn1.id = 'continue_chat_button'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn1)
        btn1.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Дубль</a>';
        btn1.setAttribute('onClick', 'newTaggg("double");')

        let btn2 = document.createElement('span');
        btn2.id = 'refuse'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn2)
        btn2.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Отказ</a>';
        btn2.setAttribute('onClick', 'newTaggg("refusal_of_help");')
        btn2.addEventListener('click', function () {
            if (document.getElementById('AF_Refuseformnew').style.display == 'none') {
                document.getElementById('otkaz').click();
            }
        })

        let btn3 = document.createElement('span');
        btn3.id = 'TPcallsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn3)
        btn3.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Исход</a>';
        btn3.setAttribute('onClick', 'newTaggg("request_forwarded_to_outgoing_tp_crm2");')

        let btn4 = document.createElement('span');
        btn4.id = 'recgiv'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn4)
        btn4.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Даны реком</a>';
        btn4.setAttribute('onClick', 'newTaggg("recommendations_given ");')

        let btn5 = document.createElement('span');
        btn5.id = 'solvd'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn5)
        btn5.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Решен</a>';
        btn5.setAttribute('onClick', 'newTaggg("request_solved");')

        let btn6 = document.createElement('span');
        btn6.id = 'servis'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn6)
        btn6.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Серверные</a>';
        btn6.setAttribute('onClick', 'newTaggg("server_issues");')

        let btn7 = document.createElement('span');
        btn7.id = 'untargeted'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn7)
        btn7.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Нецелевой</a>';
        btn7.setAttribute('onClick', 'newTaggg("untargeted");')

        let btn8 = document.createElement('span');
        btn8.id = 'ochered'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn8)
        btn8.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Очередь</a>';
        btn8.setAttribute('onClick', 'newTaggg("queue");')
    }
}

function firstLoadPage() { //первичаня загрузка страницы
    if (window.location.href.indexOf('skyeng.autofaq.ai') === -1 || window.location.href.indexOf('skyeng.autofaq.ai/login') > 0) {
        document.getElementById('AF_helper').style.display = 'none';
        document.getElementById('testUsers').style.display = 'none';
        // document.getElementById('AF_Links').style.display = 'none';
    } else {
        mystyles()

        if (localStorage.getItem('disablelpmwindow') == 1)
            document.getElementById('testUsers').style.display = "none";

        if (localStorage.getItem('Hidetestid') == 0) {
            document.getElementById('testid').style.display = 'none';
            document.getElementById('idlogin').style.display = 'none';
        }

        setTimeout(move_again_AF, 3500)

        setTimeout(function () {
            btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
            btnAdd1.insertBefore(butMarks, btnAdd1.children[0])
            btnAdd1.insertBefore(servDsk, btnAdd1.children[1])
            btnAdd1.insertBefore(butJiraOpenForm, btnAdd1.children[2])
            btnAdd1.insertBefore(butopensugestform, btnAdd1.children[3])
            btnAdd1.insertBefore(butrefuse, btnAdd1.children[4])
            btnAdd1.insertBefore(butsmartroom, btnAdd1.children[5])
            btnAdd1.insertBefore(butLessonInfo, btnAdd1.children[6])
            btnAdd1.insertBefore(butChatHistory, btnAdd1.children[7])
            btnAdd1.insertBefore(butFrozeChat, btnAdd1.children[8])
            btnAdd1.insertBefore(buttonGetStat, btnAdd1.children[9])
            btnAdd1.insertBefore(maskBack, btnAdd1.children[10])
            btnAdd1.insertBefore(hashBut, btnAdd1.children[11])
            btnAdd1.insertBefore(butServ, btnAdd1.children[12])
            btnAdd1.insertBefore(butThemes, btnAdd1.children[13])
            btnAdd1.insertBefore(taskBut, btnAdd1.children[14])
        }, 2000)

        function addElementsToList(elements, list) {
            elements.forEach((element) => {
                list.append(element);
            });
        }

        setTimeout(() => {
            const headmenulist = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0];
            const menubutarea = document.createElement('div');
            menubutarea.style = 'margin-right:20px;';

            headmenulist.insertBefore(menubutarea, headmenulist.children[16]);
            menubutarea.append(butmenu);
            headmenulist.insertBefore(menubar, headmenulist.children[16]);
            const elements = [servDsk, JiraOpenForm, buttonOpenForm, butMarks, suggestform, otkaz, smartroomform, butLessonInfo, butChatHistory, butFrozeChat, buttonGetStat];
            addElementsToList(elements, menubar);

            servDsk.classList.remove('inithide');
            JiraOpenForm.classList.remove('inithide');
            butopensugestform.classList.remove('inithide');
            butrefuse.classList.remove('inithide');
            butsmartroom.classList.remove('inithide');
            butLessonInfo.classList.remove('inithide');
            butChatHistory.classList.remove('inithide');
            butFrozeChat.classList.remove('inithide');
            buttonGetStat.classList.remove('inithide');
            butMarks.classList.remove('inithide');
            buttonOpenForm.classList.remove('inithide');
        }, 8000);


        setInterval(startTimer, 1000)
    }
    setTimeout(function () { document.getElementById('testUsers').style.background = "#464451" }, 200)
}

function timerHideButtons() { //функция добавления скрытия полей плюс также перекрашивает при выборе тп исход срм2 в красный, тп2л в зеленый
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        document.getElementsByClassName('ant-modal-content')[0].childNodes[1].children[0].appendChild(maskBackHide)


        // let opsection = document.getElementsByClassName('user_menu-dropdown-user_name')[0].textContent.split('-')[0] //определение отдела оператора
        // if (opsection == "ТП") {
        // if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Указать тему')
        // for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
        // if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Техподдержка V1 (работает ежедневно с 07:00-23:50)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Уроки V2" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Группа КМ (работает ежедневно с 8:00 до 21:55)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Обратная связь ТП (работает ежедневно с 08:00-22:50)")
        // document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        // if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Закрыть запрос?')
        // for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
        // if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Техподдержка V1 (работает ежедневно с 07:00-23:50)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Закрыть") {
        // // console.log("Скрываем - " + document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent)
        // document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'
        // }
        // }


        // NeuralNetwork Version
        let opsection = document.querySelector('.user_menu-dropdown-user_name').textContent.split('-')[0];

        const hideElements = (modalContent, valuesToHide) => {
            for (let i = 1; i < modalContent.children[2].childElementCount - 1; i++) {
                if (!valuesToHide.includes(modalContent.children[2].children[i].textContent)) {
                    modalContent.children[2].children[i].style.display = 'none';
                }
            }
        }

        if (opsection === 'ТП') {
            let modalContent = document.querySelector('.ant-modal-content');
            const heading = modalContent.children[1].children[0].childNodes[0].textContent;
            if (heading === 'Указать тему') {
                hideElements(modalContent, [
                    'Техподдержка V1 (работает ежедневно с 07:00-23:50)',
                    'Уроки V2',
                    'Группа КМ (работает ежедневно с 8:00 до 21:55)',
                    'Обратная связь ТП (работает ежедневно с 08:00-22:50)'
                ]);
            } else if (heading === 'Закрыть запрос?') {
                hideElements(modalContent, [
                    'Техподдержка V1 (работает ежедневно с 07:00-23:50)',
                    'Закрыть'
                ]);
            }
        }


        // if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') { // обращение к функции подсветки
        // let selectorList = document.querySelectorAll('.sc-fzokOt');
        // if (selectorList.length > 5) {
        // for (let i = 0; i < selectorList.length; i++) {
        // if (selectorList[i].textContent == "Техподдержка исход crm2")
        // selectorList[i].style.backgroundColor = 'red'
        // if (selectorList[i].textContent == "Техподдержка 2-я линия crm2")
        // selectorList[i].style.backgroundColor = 'green'
        // }
        // }
        // }

        let modalContent = document.querySelector('.ant-modal-content');

        const setBackgroundColors = (selectorList, valuesToColor) => {
            for (let i = 0; i < selectorList.length; i++) {
                for (const [value, color] of Object.entries(valuesToColor)) {
                    if (selectorList[i].textContent === value) {
                        selectorList[i].style.backgroundColor = color;
                    }
                }
            }
        }

        if (modalContent.children[1].children[0].childNodes[0].textContent === 'Создать задачу') {
            const selectorList = document.querySelectorAll('.sc-fzokOt');
            if (selectorList.length > 5) {
                setBackgroundColors(selectorList, {
                    'Техподдержка исход crm2': 'red',
                    'Техподдержка 2-я линия crm2': 'green'
                });
            }
        }


    }
}

function prepTp() { //функция подготовки расширения ТП
    document.getElementById('msg1').style.display = ''
    document.getElementById('snd').style.marginLeft = '10px'

    const testUsers = document.getElementById('testUsers');
    const languageSwitcher = document.querySelector('.user_menu-language_switcher');

    const setDisplayStyle = (element, value) => {
        element.style.display = value;
    }

    setDisplayStyle(testUsers, localStorage.getItem('disablelpmwindow') === '1' ? 'none' : '');
    setDisplayStyle(languageSwitcher, localStorage.getItem('disablelngpmwindow') === '1' ? 'none' : '');

    let openchhis = document.createElement('button')
    openchhis.innerHTML = '☢'
    openchhis.style = '    position: fixed; top: 45px; right: 0px; z-index: 5; width: 40px; height: 40px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    openchhis.id = 'opennewcat'
    openchhis.title = 'Открывает виджет просмотра истории чатов'
    document.body.append(openchhis)

    let crmopers = document.createElement('button')
    crmopers.innerHTML = '🧮'
    crmopers.style = 'position: fixed; top: 90px; right: 0px; z-index: 5; width: 40px; height: 40px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    crmopers.id = 'crmopersstatuses'
    crmopers.title = 'Открывает виджет просмотра статусов операторов в CRM2'
    crmopers.classList = 'onlyfortp'
    document.body.append(crmopers) 
	
	let openCalendar = document.createElement('button')
    openCalendar.innerHTML = '🗓'
    openCalendar.style = 'position: fixed; top: 135px; right: 0px; z-index: 5; width: 40px; height: 40px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    openCalendar.id = 'datsyCalendar'
    openCalendar.title = 'Открывает календарь Datsy'
	openCalendar.classList = 'onlyfortp'
    document.body.append(openCalendar)
	
	let playerRadio = document.createElement('button')
    playerRadio.innerHTML = '📻'
    playerRadio.style = 'position: fixed; top: 180px; right: 0px; z-index: 5; width: 40px; height: 40px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    playerRadio.id = 'radioPlayer'
    playerRadio.title = 'Открывает радио проигрыватель'
    document.body.append(playerRadio)

    openchhis.onclick = () => {
        if (document.getElementById('AF_ChatHis').style.display == 'none')
            document.getElementById('butChatHistory').click()
    }

    flagLangBut = 1
    customTemplates()
    setTimeout(whoAmI, 2000)
    setInterval(timerHideButtons, 300)

    // include("https://code.jquery.com/jquery-3.6.0.js") // подключаем модуль обработки JQuery
    let lboxstyles = document.createElement('link')
    lboxstyles.rel = 'stylesheet'
    lboxstyles.href = "https://dimentorexpo.github.io/Lightbox/dist/css/lightbox.min.css" // подключаем модуль стилей для Lightbox
    document.querySelector('head').append(lboxstyles)

    let create = (info) => {
        return new Promise(function (resolve, reject) {
            let gfgData = document.createElement("script");
            gfgData.src = info;
            gfgData.async = false;
            gfgData.onload = () => {
                resolve(info);
            };
            gfgData.onerror = () => {
                reject(info);
            };
            document.body.appendChild(gfgData);
        });
    };

    let gfgScript = ["https://dimentorexpo.github.io/jquery-3.6.0.js", // подключаем модуль обработки JQuery
        "https://dimentorexpo.github.io/Modules/Link.js", // модуль ссылкера (L)inks
		"https://dimentorexpo.github.io/Modules/Statistica1.js", // модуль кнопки "Статистика" и вложенных функций
		// "https://dimentorexpo.github.io/Modules/Calendar.js", // модуль кнопки "Статистика" и вложенных функций
		"https://grumstv.github.io/Modules/Calendar.js", // модуль кнопки "Статистика" и вложенных функций
        "https://dimentorexpo.github.io/Modules/Linksdostup.js",  // модуль дополнительного окна ссылок, где требуется запрос доступа к ресурсам
        "https://dimentorexpo.github.io/Modules/Userinfo.js", // модуль UserInfo в виде вензеля с разными функциями и возможностями
        "https://dimentorexpo.github.io/Modules/ServiceDesk.js", // модуль Service Desk , с 1  тестовая версия
        "https://dimentorexpo.github.io/Modules/Marks.js", // модуль просмотра оценок пользователя
        "https://dimentorexpo.github.io/Modules/AutoRespond.js", // модуль автоответа по таймеру
        "https://dimentorexpo.github.io/Modules/JiraSearch.js", // модуль поиска по Jira
        "https://dimentorexpo.github.io/Modules/Suggest.js", // модуль формы пожеланий и предложений
        "https://dimentorexpo.github.io/Modules/Smartroom.js", // модуль формы пожеланий Smartroom
        //"https://dimentorexpo.github.io/Modules/TaskTest.js", // модуль создания задач в СРМ2 с помощью интеграции АФ
        "https://dimentorexpo.github.io/Modules/TaskCreate.js", // модуль создания задач в СРМ2 с помощью интеграции АФ
        "https://dimentorexpo.github.io/Modules/Themes.js", // модуль выставления тегов и тематик
        "https://dimentorexpo.github.io/Modules/ChatHistory.js", // модуль просмотра истории чатов
        "https://dimentorexpo.github.io/Modules/GrList.js", // модуль просмотра участников группы в L
        "https://dimentorexpo.github.io/Modules/TechSummary.js", // модуль просмотра в Userinfo Tech Summary пользователя об устройстве с которого обратился
        "https://dimentorexpo.github.io/Modules/Addstat.js", // модуль дополнительного окна статистики, расположенного в кнопке L
        "https://dimentorexpo.github.io/Modules/LessonStatus.js", // модуль просмотра статуса уроков по П или по П и У
        "https://dimentorexpo.github.io/Modules/OperatorStatuse.js", // подключаем модуль статусов операторов в CRM2
        "https://dimentorexpo.github.io/Modules/unsub.js", // подключаем модуль unsub
        // "https://dimentorexpo.github.io/Modules/TestStatus.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/Modules/AFOperatorStatus.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/Modules/Radio.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/Lightbox/dist/js/lightbox.min.js"]; // подключаем библиотеку обработки изображений при клике на них
    let promiseData = [];
    gfgScript.forEach(function (info) {
        promiseData.push(create(info));
    });
    Promise.all(promiseData).then(function () {
        console.log('%c\r\n   ______  __       ____    ____       _       ________  \r\n .\' ___  |[  |     |_   \\  \/   _|     \/ \\     |_   __  | \r\n\/ .\'   \\_| | |--.    |   \\\/   |      \/ _ \\      | |_ \\_| \r\n| |        | .-. |   | |\\  \/| |     \/ ___ \\     |  _|    \r\n\\ `.___.\'\\ | | | |  _| |_\\\/_| |_  _\/ \/   \\ \\_  _| |_     \r\n `.____ .\'[___]|__]|_____||_____||____| |____||_____|    \r\n                                                         \r\n', 'color:Limegreen')
    }).catch(function (gfgData) {
        console.log(gfgData + " failed to load!");
    });

}

function prepKC() { //функция подготовки расширения КЦ
    document.getElementById('msg1').style.display = ''
    document.getElementById('snd').style.marginLeft = '10px'
    document.getElementById('testUsers').style.display = 'none'

    if (localStorage.getItem('disablelngpmwindow') == 1)
        document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
    else document.getElementsByClassName('user_menu-language_switcher')[0].style.display = ''

    let needtohide = document.getElementsByClassName('onlyfortp')
    for (i = 0; i < needtohide.length; i++) {
        needtohide[i].style.display = 'none'
    }

    let needtoopen = document.getElementsByClassName('onlyforkc')
    for (i = 0; i < needtoopen.length; i++) {
        needtoopen[i].style.display = ''
    }

    flagLangBut = 1
    customTemplates()
    setTimeout(whoAmI, 2000)

    setTimeout(function () {
        let lboxstyles = document.createElement('link')
        lboxstyles.rel = 'stylesheet'
        lboxstyles.href = "https://dimentorexpo.github.io/Lightbox/dist/css/lightbox.min.css" // подключаем модуль стилей для Lightbox
        document.querySelector('head').append(lboxstyles)
        include("https://dimentorexpo.github.io/Modules/LinkKC.js") // модуль ссылкера (L)inks
        include("https://dimentorexpo.github.io/Modules/Statistica.js") // модуль кнопки "Статистика" и вложенных функций 
        include("https://dimentorexpo.github.io/Modules/Marks.js") // модуль просмотра оценок пользователя
        include("https://dimentorexpo.github.io/Modules/LessonStatus.js") // модуль просмотра статуса уроков по П или по П и У
        include("https://code.jquery.com/jquery-3.6.0.js") // подключаем модуль обработки JQuery
        include("https://dimentorexpo.github.io/Modules/unsub.js") // подключаем модуль unsub валентина
    }, 2000)

    setTimeout(function () {

        include("https://dimentorexpo.github.io/Lightbox/dist/js/lightbox.min.js") // подключаем библиотеку обработки изображений при клике на них

    }, 4000)
}

const copyToClipboard1 = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function include(url) { // функция подключения дополнительных скриптов/модулей
    var script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function maxLengthCheck(object) { // функция ограничения кол-ва символов в полях
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function onlyNumber(object) { // функция для разрешения ввода только цифр и знака -
    object.value = object.value.replace(/[^0-9-]/g, '');
}

function onlyNumbers(object) { // функция для разрешения ввода только цифр
    object.value = object.value.replace(/[^0-9]/g, '');
}

function noDoubts(object) { // функция для разрешения ввода только английских и русских букв без запрещенных символов
    object.value = object.value.replace(/["'\\]/gi, '');
}

function checkelementtype(a) { // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX, a.clientY)

    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT' & elem.nodeName != 'P' && elem.className != "checkbox-audio-switch") {
        return true;
    }
    return false;
}


function changesoundaddr() { //функция изменения адреса звука
    let objSoundList = document.getElementById('soundlistaddr')

    if (objSoundList.length > 1) {
        for (let i = 1; i < objSoundList.length; i++) {
            if (objSoundList[i].selected == true) {
                if (objSoundList[i].value == "othersound") {
                    document.getElementById('sound_adr').style.display = ''
                    document.getElementById('sound_save').style.display = ''
                } else {
                    document.getElementById('sound_adr').style.display = 'none'
                    document.getElementById('sound_save').style.display = 'none'
                    document.getElementById('sound_adr').value = ""
                    console.log(objSoundList[i].textContent + ' ' + objSoundList[i].value)
                    localStorage.setItem('sound_str', objSoundList[i].value)
                    audio = new Audio(localStorage.getItem('sound_str'))
                }
            }
        }
    }
}

function customTemplates(language = '') { //собственные шаблоны и их добавление
    if (localStorage.getItem('winCstmTmpsTop') == null) {
        localStorage.setItem('winCstmTmpsTop', '120');
        localStorage.setItem('winCstmTmpsLeft', '295');
    }
    if (localStorage.getItem('cntTmplts' + language) == null)
        localStorage.setItem('cntTmplts' + language, 0)
    if (document.getElementById('cstmTmplates') == undefined) {
        var cstmTmp = document.createElement('div')
        cstmTmp.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winCstmTmpsTop') + 'px; left: ' + localStorage.getItem('winCstmTmpsLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; border-radius:5px; border:1px solid #768d87; ';
        cstmTmp.id = 'cstmTmplates'
        cstmTmp.style.display = 'none'
        document.body.append(cstmTmp);
    } else {
        cstmTmp = document.getElementById('cstmTmplates')
        while (document.getElementById('cstmTmplates').children[0] != undefined)
            document.getElementById('cstmTmplates').children[0].remove()
    }
    countOfTemplates = localStorage.getItem('cntTmplts' + language)

    var buttonOpenTmpWindow = document.createElement('button')
    buttonOpenTmpWindow.innerHTML = '📒'
    buttonOpenTmpWindow.title = 'Открывает окно для добавления своих шаблонов либо информации в ячейки в этом поле'
    //buttonOpenTmpWindow.style.marginLeft = '7px'
    buttonOpenTmpWindow.onclick = function () {
        var a = document.getElementById('cstmTmplates')
        if (a.style.display == '')
            a.style.display = 'none'
        else
            a.style.display = ''
    }

    var tmpA = document.getElementById('AF_helper').children[0].children[0].children[0].children[0]
    if (tmpA.children[1].innerHTML != '📒')
        tmpA.insertBefore(buttonOpenTmpWindow, tmpA.children[1])

    function refreshHotTmps() {
        while (document.getElementById('6str').children[0] != undefined)
            document.getElementById('6str').children[0].remove()
        countOfTemplates = localStorage.getItem('cntTmplts' + language)
        for (var i = 1; i <= countOfTemplates; i++) {
            var j = Number(i) - 1
            if (document.getElementById('cstmTmplates').children[j].children[0].checked) {
                if (localStorage.getItem('tmp_name_' + language + i) == null || localStorage.getItem('tmp_name_' + language + i) == "")
                    continue
                var a = document.getElementById('6str')
                var newBut = document.createElement('button')
                newBut.setAttribute('template', 'template_' + language + i)
                newBut.style.marginRight = '5px'
                newBut.style.marginTop = '5px'
                newBut.innerHTML = localStorage.getItem('tmp_name_' + language + i)
                a.appendChild(newBut)
                newBut.onclick = function () {
                    var text = localStorage.getItem(this.getAttribute('template')).split('\\n').join('\n')
                    sendAnswer(text)
                }
            }
        }
    }

    function addNewString(index) {

        var newDiv = document.createElement('div')
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
        newButton.onclick = function () {
            localStorage.setItem(this.parentElement.getAttribute('tmp'), document.getElementById(this.parentElement.getAttribute('inp')).value)
            localStorage.setItem('tmp_name_' + language + index, this.parentElement.children[1].value)
            refreshHotTmps()
        }
        var newButton2 = document.createElement('button')
        newButton2.style.marginRight = '5px'
        newButton2.textContent = 'send'
        newButton2.onclick = function () {
            document.getElementById('inp').value = document.getElementById(this.parentElement.getAttribute('inp')).value.split('\\n').join('\n')
            this.parentElement.parentElement.style.display = 'none'
        }

        var newButton3 = document.createElement('button')
        newButton3.style.marginRight = '5px'
        newButton3.textContent = 'delete'
        newButton3.onclick = function () {
            for (var i = this.parentElement.getAttribute('index'); i < countOfTemplates; i++) {
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
            while (document.getElementById('cstmTmplates').children[0] != undefined)
                document.getElementById('cstmTmplates').children[0].remove()
            customTemplates(language)
        }

        var buttonSortUp = document.createElement('button')
        buttonSortUp.innerHTML = '↑'
        buttonSortUp.onclick = function () {
            var index = this.parentElement.getAttribute('index')
            if (index == 1)
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
            if (document.getElementById('languageAF').innerHTML == "Русский")
                customTemplates()
            else
                customTemplates('en_')
        }

        var buttonSortDown = document.createElement('button')
        buttonSortDown.innerHTML = '↓'
        buttonSortDown.style.marginRight = '5px'
        buttonSortDown.onclick = function () {
            var index = this.parentElement.getAttribute('index')
            if (index == countOfTemplates)
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
            if (document.getElementById('languageAF').innerHTML == "Русский")
                customTemplates()
            else
                customTemplates('en_')
        }

        var newcheckbox = document.createElement('input')
        newcheckbox.type = 'checkbox'
        newcheckbox.style.marginRight = '5px'
        newcheckbox.checked = localStorage.getItem('checkbox_' + language + index) == 'true' ? 1 : 0
        newcheckbox.onclick = function () {
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

    var newDiv = document.createElement('div')
    newDiv.style = 'cursor: -webkit-grab;'
    newDiv.style.margin = '5px'
    newDiv.style.textAlign = 'center'

    var addTmpl = document.createElement('button')
    addTmpl.textContent = 'Добавить шаблон'
    addTmpl.style.marginRight = '5px'

    addTmpl.onclick = function () {
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
    saveAllTmp.onclick = function () {
        for (var i = 1; i <= countOfTemplates; i++) {
            localStorage.setItem('template_' + language + i, document.getElementById('cstmTmpInp' + language + i).value)
            localStorage.setItem('checkbox_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[0].checked)
            localStorage.setItem('tmp_name_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[1].value)
            refreshHotTmps()
        }
    }

    var but = document.createElement('button')
    but.innerHTML = 'hide'

    but.onclick = function () {
        this.parentElement.parentElement.style.display = 'none'
    }

    but.style.float = 'right'

    newDiv.append(saveAllTmp)
    newDiv.append(addTmpl)
    newDiv.append(but)
    cstmTmp.append(newDiv)

    if (countOfTemplates > 0)
        for (i = 1; i <= countOfTemplates; i++)
            addNewString(i)
    refreshHotTmps()

    var listenercstmTmp = function (e, a) {
        cstmTmp.style.left = Number(e.clientX - myXcstmTmp) + "px";
        cstmTmp.style.top = Number(e.clientY - myYcstmTmp) + "px";
        localStorage.setItem('winCstmTmpsTop', String(Number(e.clientY - myYcstmTmp)));
        localStorage.setItem('winCstmTmpsLeft', String(Number(e.clientX - myXcstmTmp)));
    };

    cstmTmp.onmousedown = function (a) {
        if (checkelementtype(a)) {
            window.myXcstmTmp = a.layerX;
            window.myYcstmTmp = a.layerY;
            document.addEventListener('mousemove', listenercstmTmp);
        }
    }

    cstmTmp.onmouseup = function () { document.removeEventListener('mousemove', listenercstmTmp); }

    document.getElementById('languageAF').onclick = function () {
        if (this.innerHTML == "Русский") {
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

async function sendComment(txt) { // функция отправки комментария
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

function ShowMustGoOn() { //функция вносит в локалсторедж адрес скрипта с гугл таблиц шаблонов для КЦ
    localStorage.setItem('scriptAdr', KC_addr)
    location.reload()
}

function WeAreTheChempions() { //функция вносит в локалсторедж адрес скрипта с гугл таблиц шаблонов для ТП
    localStorage.setItem('scriptAdr', TP_addr)
    localStorage.setItem('tpflag', 'ТП')
    location.reload()
}

function WeAreTheChempionsPrem() { //функция вносит в локалсторедж адрес скрипта с гугл таблиц шаблонов для Premium ТП
    localStorage.setItem('scriptAdr', TPprem_addr)
    localStorage.setItem('tpflag', 'ТПPrem')
    location.reload()
}

function AFthePieceofShit() { //функция вносит в локалсторедж адрес скрипта с гугл таблиц шаблонов для ТП резервных тестовых
    localStorage.setItem('scriptAdr', TP_addrRzrv)
    localStorage.setItem('tpflag', 'ТП')
    location.reload()
}

function AFthePieceofShitPrem() { //функция вносит в локалсторедж адрес скрипта с гугл таблиц шаблонов для Premium ТП резервных тестовых
    localStorage.setItem('scriptAdr', TPprem_addrRzrv)
    localStorage.setItem('tpflag', 'ТПPrem')
    location.reload()
}

function AFthePieceofShitKC() { //функция вносит в локалсторедж адрес скрипта с гугл таблиц шаблонов для КЦ резервных тестовых
    localStorage.setItem('scriptAdr', KC_addrRzrv)
    location.reload()
}

function logginerfortests(polzovatel) {
    const requestBody = `login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${polzovatel}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlog}`;
    const requestHeaders = {
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
    };
    const request = {
        headers: requestHeaders,
        referrer: 'https://id.skyeng.ru/admin/auth/login-links',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: requestBody,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    };

    document.getElementById('responseTextarea1').value = JSON.stringify(request);
    document.getElementById('responseTextarea2').value = 'https://id.skyeng.ru/admin/auth/login-links';
    document.getElementById('responseTextarea3').value = 'senddata1';
    document.getElementById('sendResponse').click();

    document.getElementById('responseTextarea1').addEventListener('DOMSubtreeModified', () => {
        let logginerinfo = document.getElementById('responseTextarea1').getAttribute('senddata1');
        if (logginerinfo) {
            logginerinfo = logginerinfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
            logginerinfo = logginerinfo[logginerinfo.length - 1].split('"');
            copyToClipboard1(logginerinfo[1]);
            document.getElementById('responseTextarea1').removeAttribute('senddata1');
        }
    });
}

function resetFlags() { //функция обнуления флагов
    template_flag = 0
    template_flag2 = 0
}

//блок для работы с шаблонами из гугл таблиц

function pageClick(pageId) { // по клику переключает страницы с шаблонами
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    for (i = 0; i < b.childElementCount; i++) {
        try {
            b.children[1].children[i].style = 'background-color:#768d87; border-top:0px;'
            document.getElementById(i + "page").style.display = 'none'
        } catch (e) { }
    }
    document.getElementById(pageId).style = 'background-color: green; border-top:4px solid orange'
    document.getElementById(pageId[0] + "page").style.display = ''
}

function bagPageButtons(butId) {  //с шаблонами тоже фукнкция связана
    txt = document.getElementById(butId).parentElement.childNodes[0].textContent
    for (l = 0; l < table.length; l++)
        if (table[l][0] == txt) {
            resetFlags()
            document.getElementById('inp').value = table[l][Number(butId[4]) + 1]
            break
        }
}

function transfPageButtons(textFromTable) { //подстановка телефона и почты юзера при использовании шаблона
    //resetFlags()

    let phone = '';
    textFromTable = textFromTable.split('(phone)');

    if (textFromTable.length > 1) {
        const phoneInput = document.getElementById('phone_tr');
        phone = phoneInput.value || phoneInput.placeholder;

        if (phone === 'Телефон') {
            document.getElementById('inp').value = 'Введите номер телефона';
            return;
        }
    }

    textFromTable = textFromTable.join(phone);

    let email = ""
    textFromTable = textFromTable.split('(email)')

    if (textFromTable.length > 1) {
        const emailInput = document.getElementById('email_tr');
        email = emailInput.value || emailInput.placeholder;

        if (email === 'Почта') {
            document.getElementById('inp').value = "Введите почту"
            return;
        }
    }
    textFromTable = textFromTable.join(email)

    name = ""
    textFromTable = textFromTable.split('(name)')
    if (document.getElementsByClassName('expert-user_details-name').length != 0) {
        a = document.getElementsByClassName('expert-user_details-name')[0].textContent
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        if (textFromTable.length > 1 && cyrillicPattern.test(a[0])) {
            name = a[0]
        }
        else
            name = a[0]
    }
    else
        name = a[0]
    textFromTable = textFromTable.join(name)

    return textFromTable
}

async function buttonsFromDoc(butName) { // функция отправки шаблона в зависимости от нажатой кнопки и также взаимодействут с другими функциями
    if (butName == "ус+брауз")
        if (user == 'student')
            butName = "ус+брауз (У)"
        else
            butName = "ус+брауз (П)"

    if (butName == 'Привет') {
        if (document.getElementsByClassName('expert-user_info_panel')[0].children[1].children[0].classList.contains('expert-user_details-name')) {
            a = document.getElementsByClassName('expert-user_info_panel')[0].children[1].children[0].textContent
        } else {
            a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.textContent
        }
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if (document.getElementById('languageAF').innerHTML == "Русский") {
            /*if (drevo != null && drevo != undefined && drevo[0] == 'Здравствуйте! Я виртуальный помощник Skyeng' && document.getElementById('msg1').innerHTML == "Доработать") {
                // console.log("Проверка, что бот писал Здравствуйте пройдена!", drevo[0])
                txt = "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            } else*/ // отключил проверку общался до нас бот или нет.
            if (cyrillicPattern.test(a[0]) && a[0] != "Неизвестный" && document.getElementById('msg1').innerHTML == "Доработать")
                txt = "Здравствуйте, " + a[0] + "!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            else
                txt = "Здравствуйте!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
        } else
            txt = "Hello, " + a[0] + "!" + '\r\n' + "Please wait a few minutes."

        if (txt == "Hello, " + a[0] + "!" + '\r\n' + "Please wait a few minutes.")
            sendAnswerTemplate2(txt)
        else
            sendAnswerTemplate2(txt)
        return
    }

    if (butName == '🖕Отказ' && document.getElementById('AF_Refuseformnew').style.display == 'none') // если кнопка отказ открывает форму отказа и если повторно нажали не закрываем форму
        document.getElementById('otkaz').click();

    if (((butName == '🤬Негатив ОС') || (butName == '🖼Нет изобр в ДЗ ЛК') || (butName == '💨Сброс ответов ДЗ ЛК') || (butName == '🔇Звук ответов ЛК') || (butName == '🖥Размер видео') || butName == ('🖼📱Нет изобр ДЗ в МП')) && document.getElementById('AF_Smartroomform').style.display == 'none')
        document.getElementById('smartroomform').click();

    msgFromTable(butName)

    // start of counter of pressed key script то есть при нажатии на кнопку с шаблоном передает в гугл таблицу ин6формацию какая кнопка была нажата и там уже др скрипты считают сколько  раз и сортируют
}

function servFromDoc(butName) { // отправка комента и сообщение со стораницы серверные
    but = butName
    let chatthemevalue
    msgFromTable(but) // вызов функции отправки сообщения
    if (document.getElementById('avariyalink').value !== null) { // проверка есть ли значение в поле ссылки
        let linktostatsend = document.getElementById('avariyalink').value.trim()
        sendComment(linktostatsend); // вызов функции отправки комента
        fetch("https://skyeng.autofaq.ai/api/conversation/" + document.URL.split('/')[5] + "/payload", { //записываем ссылку в поле "Ссылка на jira"
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"conversationId\":\"${splitter[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + linktostatsend + "\"}]}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                })
    } 
    if (document.getElementById('avariyatema').children[0].selected == false) {
        for (let i = 0; i < document.getElementById('avariyatema').children.length; i++) {
            if (document.getElementById('avariyatema').children[i].selected == true)
                chatthemevalue = encodeURIComponent(document.getElementById('avariyatema').children[i].value)
			     newTag(chatthemevalue)
        }
    }   
}

function getText() { // функция обновления текста с шаблонов из документа
    const app = localStorage.getItem('scriptAdr');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const r = JSON.parse(xhr.responseText);
                const result = r["result"];
                table = result;
                console.log('Updated templates');
            } catch (e) {
                console.log(e);
            } finally {
                refreshTemplates();
            }
        }
    };
    xhr.send();
}

async function getInfo(flag1 = 1) { //функция получения инфо о чате и сервис айди
    var adr = document.location.href
    var adr1 = document.location.pathname
    adr1 = adr1.split('/')
    adr1 = adr1[3]
    var sessionId = ""
    for (let i = 0; i < chatsArray.length; i++) {
        if (chatsArray[i].id == adr1) {
            sessionId = chatsArray[i].sessionId
            return [adr, adr1, sessionId]
        }
    }
    if (adr1 == undefined)
        adr1 = ""
    if (document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/" + adr1)
            .then(response => response.json())
            .then(result => { sessionId = result.sessionId; chatsArray.push(result); localStorage.setItem('serviceIdGlob', result.serviceId) });
    }
    return [adr, adr1, sessionId]
}

function addTimer() { //функция добавления таймера при ответе оператора
    tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
    if (tm.childNodes[0].childNodes[2] === undefined) {
        let serv = document.createElement('div')
        let serv2 = document.createElement('div')
        tm.childNodes[0].appendChild(serv)
        tm.childNodes[1].appendChild(serv2)
        tm.childNodes[0].childNodes[2].innerHTML = localStorage.getItem('aclstime') + ":00"
        let d = new Date()
        tmrs[idk] = [localStorage.getItem('aclstime') + ":00", tm.childNodes[1].childNodes[0].textContent, 1, number(d), ""]
        idk++
    }
}

function addTimers() { // еще функция тоже добавления таймеров
    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    let d = new Date()
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        btns.childNodes[k]
        nm = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
        flag = 0
        for (i = 0; i < idk; i++) {
            name = tmrs[i][1]
            if (nm == name) {
                flag = 1
                break
            }
        }
        if (flag == 0)
            tmrs[idk++] = [localStorage.getItem('aclstime') + ":00", nm, 1, Number(d), ""]

        k++
    }

    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined) {
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

function refreshTimer() { //функция обновления таймера
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    j = 0
    try {
        while (true) {
            if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j] === undefined)
                break;
            if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].className === "ant-empty ant-empty-normal")
                break;
            if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined)
                addTimers()
            name = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
            for (i = 0; i < idk; i++) {
                if (tmrs[i][1] == name) {
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML = tmrs[i][0]
                    if (tmrs[i][0] == "00:00")
                        if (tmrs[i][2] == 1)
                            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#ECEBBD"
                        else
                            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FBCEB1"
                    else
                        btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "white"
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[3].textContent = tmrs[i][4]
                    var cT = new Date();
                    var curT1 = tmrs[i][3]
                    var curT2 = Number(cT);
                    var curT3 = ((localStorage.getItem('aclstime') - 2) * 60) - Math.floor((curT2 - curT1) / 1000); // таймер за 2 минуты окрашивания автозакрытия
                    if (curT3 < 0)
                        btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = localStorage.getItem('defaclschatcolor') // цвет окрашивания автозакрытия  сейчас сиреневый
                }
            }
            j++
        }
    } catch (e) { console.error(e, e.stack); }
}

function refreshTemplates() { // функция обновляет шаблоны которые загружены были с гугл таблицы и сформированы их в table
    setInterval(function () {
        if (document.getElementsByClassName('expert-user_details-list')[0] != undefined) {
            if (document.getElementById('phone_tr') != undefined) {
                phone = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].textContent
                if (phone == "-") {
                    phone = ""
                    document.getElementById('phone_tr').placeholder = "Телефон"
                } else
                    document.getElementById('phone_tr').placeholder = phone
            }
            if (document.getElementById('email_tr') != undefined) {
                email = document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].textContent
                if (email == "-") {
                    email = ""
                    document.getElementById('email_tr').placeholder = "Почта"
                }
                document.getElementById('email_tr').placeholder = email
            }
        } else {
            if (document.getElementById('email_tr') != undefined)
                document.getElementById('email_tr').placeholder = "Почта"
            if (document.getElementById('phone_tr') != undefined)
                document.getElementById('phone_tr').placeholder = "Телефон"
        }
    }, 1000)
    templatesAF = []
    while (document.getElementById('pages').children[0] != undefined)
        document.getElementById('pages').children[0].remove()
    for (i = 0; document.getElementById(i + 'page') != undefined; i++)
        document.getElementById(i + 'page').remove()
    while (document.getElementById('addTmp').children[0].children[0] != undefined)
        document.getElementById('addTmp').children[0].children[0].remove()
    countOfStr = 0
    countOfPages = 0
    pageName = ""
    addTmpFlag = 0
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    console.log(table)
    for (i = 0; i < table.length; i++) {
        c = table[i]
        switch (c[0]) {
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
                newPageBut.textContent = c[1]
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

                if (pageType == "Серверные") { // дорисоква инпута для ссылки на серверные
                    var newDiv = document.createElement('div')
                    newDiv.id = countOfPages + "page_" + countOfStr + "str"
                    newDiv.style.margin = "5px"

                    var newInputAlink = document.createElement('input')
                    newInputAlink.id = 'avariyalink'
                    newInputAlink.placeholder = 'Ссылка на трэд или Jira северных'
                    newInputAlink.autocomplete = 'off'
                    newInputAlink.type = 'text'
                    newInputAlink.style = 'text-align: center; width: 300px; color: black; margin-left: 7px'

                    newDiv.appendChild(newInputAlink)

                    var newbtnclrlink = document.createElement('button')
                    newbtnclrlink.textContent = "🧹"
                    newbtnclrlink.title = "Очищает поле задачи серверных"
                    newbtnclrlink.onclick = function () {document.getElementById('avariyalink').value = ""}
                    
                    newDiv.appendChild(newbtnclrlink)

                    var newSelectAThemes = document.createElement('select')                    
                    newSelectAThemes.id = 'avariyatema'
                    newSelectAThemes.style = 'text-align: center; width: 300px; height: 26px; color: black; margin-left: 7px; margin-top: 5px'
                    newSelectAThemes.type = 'text'

                    var newthemeoption = document.createElement('option')
                    newthemeoption.text = "Выбери тематику для серверных"
                    newthemeoption.selected = true
                    newthemeoption.disabled = true
                    newthemeoption.value = "thenenotselect"
                    newthemeoption.style = "background-color:orange; color:white;"
                    newSelectAThemes.add(newthemeoption)
										
					///
										
					async function getAvariaThemes() {
					let objSelAvariaThema = document.getElementById("avariyatema");
					let avariatemacontainer;
					let themesfromdoc;
                    if (objSelAvariaThema && objSelAvariaThema.children.length == 1) {
						clearInterval(getTms)
						console.log("Test true")

                        themesfromdoc = 'https://script.google.com/macros/s/AKfycbxNjuQ7EbZZkLEfC1_aSoK4ncsF0W0XSkjYttCj2nQ23BBzMEmDq-vqJL3MvwJk9Pnm_g/exec'
                        await fetch(themesfromdoc).then(r => r.json()).then(r => avariatemadata = r)
                        avariatemacontainer = avariatemadata.result;
                        console.log(avariatemadata.result) //получим список проблем

                        for (let i = 0; i < avariatemacontainer.length; i++) {
                            addOption(objSelAvariaThema, `${avariatemacontainer[i][3]}`, `${avariatemacontainer[i][4]}`) // переиндексацию нужно будет сделать
                       }

                    } else {
					   console.log('Test false')
                    }
					}
				
					let getTms = setInterval(getAvariaThemes, 4000)
					
					///

                    newDiv.appendChild(newSelectAThemes)
                    
                    var newbtnclrtheme = document.createElement('button')
                    newbtnclrtheme.textContent = "🧹"
                    newbtnclrtheme.title = "Очищает поле тематики серверных"
                    newbtnclrtheme.onclick = function () {document.getElementById('avariyatema').children[0].selected = true}
                    
                    newDiv.appendChild(newbtnclrtheme)

                    b.lastElementChild.appendChild(newDiv)
                    countOfStr++
                }

                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break
            default:
                switch (pageType) {
                    case 'Баги':
                        var newString = document.createElement('p')
                        newString.style.color = 'white'
                        newString.style.margin = '0 0 5px 0'
                        newString.textContent = c[0]
                        for (j = 0; j < c[1]; j++) {
                            var newBut = document.createElement('button')
                            newBut.style.width = '20px'
                            newBut.style.marginRight = '4px'
                            newBut.id = countOfStr + 'str' + (j + 1)
                            newBut.textContent = (j + 1)
                            newBut.setAttribute('onclick', 'bagPageButtons(this.id)')
                            newString.appendChild(newBut)
                        }
                        countOfStr++
                        b.lastElementChild.lastElementChild.appendChild(newString)
                        break
                    case 'Шаблоны':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'buttonsFromDoc(this.textContent)')
                        if (newBut.textContent == 'Урок NS')
                            newBut.id = "NS"
                        if (newBut.textContent == 'ус+брауз (У)')
                            newBut.textContent = "ус+брауз"
                        if (newBut.textContent == 'ус+брауз (П)')
                            continue
                        if (addTmpFlag == 0)
                            b.lastElementChild.lastElementChild.appendChild(newBut)
                        else {
                            newBut.style.marginTop = '4px'
                            document.getElementById('addTmp').children[0].appendChild(newBut)
                        }
                        break
                    case 'Переводы':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Серверные': // обработка нажатия на кнопку на странице серверные
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'servFromDoc(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'ТемыМоб':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темыadd':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темы':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    default:
                        break
                }
                break
        }
    } document.getElementById('0page').ondblclick = function () {
        if (document.getElementById('addTmp').style.display == 'none') {
            document.getElementById('addTmp').style.display = '';
            document.getElementById('set_bar').style.display = 'none'
            document.getElementById('reminder_bar').style.display = 'none'
        }
        else
            document.getElementById('addTmp').style.display = 'none';
    }
    document.getElementById('0page_button').click()
}

function tagToChat(btnName) { // функция отправляет тематику в чат, список тематик хранится в спец доке где шаблоны
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            newTag(table[l][1])
            return
        }
    }
}

function newTag(valueId) {
    const pathname = document.location.pathname.split('/');
    let chatId;

    if (window.location.href.indexOf('skyeng.autofaq.ai/logs') !== -1) {
        chatId = pathname[2];
    } else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1) {
        chatId = pathname[3];
    } else {
        const panel = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0];
        chatId = panel.children[0].children[0].children[0].textContent.split(' ')[1];
    }

    fetch(`https://skyeng.autofaq.ai/api/conversation/${chatId}/payload`, {
        headers: {
            'content-type': 'application/json',
        },
        body: `{"conversationId":"${chatId}","elements":[{"name":"topicId","value":"${valueId}"}]}`,
        method: 'POST',
        credentials: 'include',
    });
}

function msgFromTable(btnName) { //шаблоны, тематики. теги с таблицы получает и выставляет
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            tempindex = [l];
            if (table[l][8] == undefined || table[l][8] == null || table[l][8] == " " || table[l][8] == "") {
                console.log("Не значения тематики")
            } else {
                newTag(table[l][8])
            }

            setTimeout(() => {
                if (table[tempindex][9] == undefined || table[tempindex][9] == null || table[tempindex][9] == " " || table[tempindex][9] == "") {
                    console.log("Нет значения тегов")
                } else {
                    newTags(table[tempindex][9])
                }
            }, 1000)

            if (document.getElementById('languageAF').innerHTML == "Русский") {
                if (table[l][1] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][2])
                }
                if (table[l][1] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][2]))
                }
                if (table[l][1] == "Шаблон") {
                    sendAnswerTemplate(table[l][2], table[l][3])
                }
                if (table[l][1].indexOf("Рандом") != -1) {
                    var counttmpl = table[l][1][7]
                    var newL = Math.floor(Math.random() * (counttmpl))
                    let splittedarr = table[l][2 + newL].split('$')
                    console.log(splittedarr)
                    if (splittedarr[0] == "Текст")
                        sendAnswer(transfPageButtons(splittedarr[1]))
                    else if (splittedarr[0] == "Шаблон") {
                        sendAnswerTemplate(splittedarr[1], splittedarr[1])
                    } else {
                        document.getElementById('inp').value = "Шаблон  указан не верно, повторите попытку еще раз!"
                    }

                }

                break
            } else if (table[l][1].indexOf("Рандом") != -1) {
                var counttmpleng = table[l][1][9]
                if (counttmpleng > 0) {
                    var newLeng = Math.floor(Math.random() * (counttmpleng))
                    let splittedarreng = table[l][5 + newLeng].split('$')
                    console.log(splittedarreng)
                    if (splittedarreng[0] == "Текст") {
                        sendAnswer(splittedarreng[1])
                    } else if (splittedarreng[0] == "Шаблон") {
                        sendAnswerTemplate(splittedarreng[1], splittedarreng[1])
                    } else {
                        document.getElementById('inp').value = "Шаблон  указан не верно, повторите попытку еще раз!"
                    }
                } else {
                    document.getElementById('inp').value = "Нет английского варианта шаблонов"
                }
            } else if (table[l][4] == "") {
                document.getElementById('inp').value = "Нет английского варианта шаблона"
            } else {
                if (table[l][5] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][6])
                }
                if (table[l][5] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][6]))
                }
                if (table[l][5] == "Шаблон") {
                    sendAnswerTemplate(table[l][6], table[l][7])
                }
                break
            }
        }
    }
}

async function loadTemplates(template, word) { //загрузка шаблонов с дока
    if (localStorage.getItem('tpflag') == 'ТП') {
        return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[121286, 119638, 121385, 121300, 119843, 118980, 121692, 121386, 119636, 119649, 121381, 119841, 120181, 119646, 121388, 121384, 121387, 119844, 119025]}",
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
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title == template) {
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
                        tmpText = tmpText.replace(/<\/?[^>]+>/g, '')
                        tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
                        title = b.title
                        title = title.split("\"").join("\\\"")
                        accuracy = b.accuracy

                        templatesAF.push([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                        return ([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                    }
                }
            })
    } else if (localStorage.getItem('tpflag') == 'ТПPrem') {
        return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[121533, 121775, 121527, 121531, 121831]}",
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
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title == template) {
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
                        tmpText = tmpText.replace(/<\/?[^>]+>/g, '')
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

}

async function sendAnswerTemplate2(word, flag = 0) { //функция отправки шаблона 2
    var tmpTxt = ""
    var adr = `https://skyeng.autofaq.ai/tickets/assigned/`
    if (word.length < 50)
        try {
            a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
                "headers": {
                    "content-type": "application/json",
                },
                "referrer": adr,
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "{\"query\":\"" + word + "\",\"answersLimit\":25,\"autoFaqServiceIds\":[121388, 121384]}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(a => b = a.json()).then(result => result.forEach(k => {
                if (k.title == word)
                    tmpTxt = k.text
            }))
            tmpTxt = tmpTxt.split("<br>↵").join('\n')
            tmpTxt = tmpTxt.split("&nbsp;").join(' ')
            tmpTxt = tmpTxt.split("<br />").join('\n')
            tmpTxt = tmpTxt.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
            tmpTxt = tmpTxt.replace(/<\/?[^>]+>/g, '')
            tmpTxt = tmpTxt.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
        } catch (e) { }
    if (tmpTxt == "")
        tmpTxt = word
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag == 0) {
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
        refCurTimer(localStorage.getItem('aclstime') + ":00")
        var adr = values[0]; var adr1 = values[1]; var uid = values[2]
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "accept": "*/*",
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

async function sendAnswerTemplate(template, word, flag = 0, newText = "", flag2 = 0) { // функция отправки шаблона
    var curTemplate
    if (flag == 1) {
        template = template_text
        word = word_text
    }
    for (let i = 0; i < templatesAF.length; i++) {
        if (template == templatesAF[i][0]) {
            curTemplate = templatesAF[i]
            break
        }
    }
    if (curTemplate == undefined)
        curTemplate = await loadTemplates(template, word)
    //addTimer()
    time = localStorage.getItem('aclstime') + ":00"
    var documentId = curTemplate[1]
    var serviceId = curTemplate[2]
    var queryId = curTemplate[3]
    var AFsessionId = curTemplate[4]
    var tmpText = transfPageButtons(curTemplate[5])
    var title = curTemplate[6]
    var accuracy = curTemplate[7]
    var values = await getInfo(0)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag2 == 0) {
        document.getElementById('inp').value = tmpText
        template_text = template
        word_text = word
        template_flag = 1
    }
    else if (tmpText == "")
        console.log('Шаблон не найден')
    else {
        if (flag == 1) {
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

async function sendAnswer(txt, flag = 1, time = localStorage.getItem('aclstime') + ":00") { //функция отправки ответа
    //addTimer()
    var values = await getInfo(flag)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    var txt2 = txt.split('\n')
    var txt3 = ""
    txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
    txt3 = txt3.split("\"").join("\\\"")
    txt3 = txt3.split('<p></p>').join("<p><br></p>")
    txt3 = txt3.substr(0, txt3.length - 2)
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag) {
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

function refCurTimer(time) { //функция обновления текущего таймера на чате
    btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

    name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
    for (i = 0; i < idk; i++) {
        if (tmrs[i][1] == name) {
            tmrs[i][0] = time
            if (time == "1:00")
                tmrs[i][2] = 0
            else
                tmrs[i][2] = 1
            tmrs[i][3] = Number(new Date())
        }
    }
}

// конец блока для работы с шаблонами из гугл таблиц и в целом отправки ответа с обновлением таймера автозакрытия чата

function requestsRed() { //функция окрашивает в красный цвет, кнопка взять запрос не будет (0) иметь, а любое другое значение
    const taketask = document.getElementsByClassName('expert-sidebar-button')[0];

    if (taketask) {
        const textNode = taketask.childNodes[1].childNodes[0];
        textNode.addEventListener('DOMSubtreeModified', () => {
            const text = textNode.innerHTML;
            const color = text === 'Взять запрос (0)' ? 'white' : '#F34723';
            taketask.childNodes[1].style.backgroundColor = color;
        });
    }
}

async function checkthemestatus() { //функция проверки выставления темы и услуги в активном чате
    try {
        if (document.URL.split('/').length >= 6 && document.URL.split('/')[2] == 'skyeng.autofaq.ai' && document.URL.split('/')[5] != '') {
            //            drevo = '';
            let temparr = document.location.pathname.split('/')[3];
            await fetch("https://skyeng.autofaq.ai/api/conversations/" + temparr, {
            }).then(r => r.json()).then(r => pldata = r)

            //            if (pldata.messages[0].txt != undefined && pldata.messages[0].txt != null)
            //                drevo = pldata.messages[0].txt.match(/Здравствуйте! Я виртуальный помощник Skyeng/)


            if (pldata.payload.topicId.value == "" && (document.getElementsByClassName('sc-fznWqX dAkvW')[2].textContent == "Выбор темы/подтемы:" || document.getElementsByClassName('sc-fznWqX dAkvW')[3].textContent == "Выбор темы/подтемы:")) { // блок и ниже условия для вывода в список активных чатов выставлена ли тема и услуга

                const button = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0];

                if (button) {
                    const textNode = button.childNodes[0].childNodes[0];
                    const theme = document.createElement('div');
                    theme.textContent = 'Тема: ❌';
                    theme.style = 'color:red; font-weight:700';

                    if (!textNode.childNodes[1].childNodes[4]) {
                        textNode.childNodes[1].appendChild(theme);
                    } else if (textNode.childNodes[1].childNodes[4].textContent === 'Тема: ✔') {
                        textNode.childNodes[1].childNodes[4].textContent = 'Тема: ❌';
                        textNode.childNodes[1].childNodes[4].style.color = 'red';
                    }
                }

            } else if (pldata.payload.topicId.value != "" && (document.getElementsByClassName('sc-fznWqX dAkvW')[2].textContent == "Выбор темы/подтемы:" || document.getElementsByClassName('sc-fznWqX dAkvW')[3].textContent == "Выбор темы/подтемы:")) {

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.textContent = "Тема: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[4].textContent == 'Тема: ❌') {
                        txtbar.childNodes[1].childNodes[4].textContent = "Тема: ✔";
                        txtbar.childNodes[1].childNodes[4].style.color = 'green';
                    }
                }
            }

            if (document.getElementsByClassName('sc-fznWqX dAkvW')[1].textContent != 'Выбор услуги:' && pldata.payload.educationServiceId == undefined && document.getElementsByClassName('sc-fznWqX dAkvW')[1].textContent == 'Выбор тегов ТП:') {
                let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                txtbar.childNodes[1].childNodes[5].textContent = "";
            }

            if (document.getElementsByClassName('sc-fznWqX dAkvW')[1].textContent != 'Выбор тегов ТП:' && pldata.payload.educationServiceId != undefined && pldata.payload.educationServiceId.value == '' && document.getElementsByClassName('sc-fznWqX dAkvW')[1].textContent == 'Выбор услуги:') {
                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.textContent = "Услуга: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[5] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[5].textContent == 'Услуга: ✔') {
                        txtbar.childNodes[1].childNodes[5].textContent = "Услуга: ❌";
                        txtbar.childNodes[1].childNodes[5].style.color = 'red';
                    }
                }
            } else if (document.getElementsByClassName('sc-fznWqX dAkvW')[1].textContent != 'Выбор тегов ТП:' && pldata.payload.educationServiceId != undefined && pldata.payload.educationServiceId.value != '' && document.getElementsByClassName('sc-fznWqX dAkvW')[1].textContent == 'Выбор услуги:') {
                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.textContent = "Услуга: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[5] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[5].textContent == 'Услуга: ❌') {
                        txtbar.childNodes[1].childNodes[5].textContent = "Услуга: ✔";
                        txtbar.childNodes[1].childNodes[5].style.color = 'green';
                    }
                }
            }
        }
    } catch (e) { }
}

function dosetclasswork(subject) {     // функция перезапуска урока в зависимости от предмета так как разные API
    fetch(subject + document.URL.split('/')[6], {
        "headers": {
            "accept": "application/json",
            "content-type": "application/json",
        },
        "body": "{\"status\":\"classwork\",\"name\":\"\"}",
        "method": "PATCH",
        "mode": "cors",
        "credentials": "include"
    });

    document.getElementById('clwbtn').textContent = "Done!"

    setTimeout(() => { document.getElementById('clwbtn').textContent = "Classwork" }, 3000)
}

function newTaggg(tagName) { //функция добавления тега в чат, но надо потом искать где используется
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
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

function newTags(tagName) { //функция добавления нескольких тегов в чат, которые тянутся из дока в комплекте так сказать
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    if (tagName.split(',').length < 2)
        fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
    else if (tagName.split(',').length == 2)
        fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName.split(',')[0] + "\" ,\"" + tagName.split(',')[1] + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
}

function setactivechatstyle() { // функция добавляющая активному чату класс selchatact который слева рисует синюю границу толще чтобы было заметнее
    const button = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0];
    const isActiveChat = (
        document.URL.split('/')[2] === 'skyeng.autofaq.ai' &&
        document.URL.length > 43 &&
        button &&
        !button.classList.contains('selchatact')
    );

    if (isActiveChat) {
        button.classList.toggle('selchatact');
    }
}

function fetchaddchat(userid1, userid2) { //вспомогательная функция просто добавления чата мекжду пользователям
    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"userId1\":${userid1},\"userId2\":${userid2}}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}

async function remandressl() { // функция добавляения массово чатов в  мультиклассруме также и отдельно для каждого предмета

    // Добавляем кнопку для Skysmart добавлять чаты со всеми У в один клик
    let achatb = document.createElement('span')
    achatb.id = "achatbtn"
    achatb.textContent = "💬"
    achatb.style = 'cursor:pointer;'

    if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] == 'teacher/multi-classroom' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = addMulticlassrom;
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по всем возможнным предметам сразу!"
    }

    async function addMulticlassrom() { // общая функция добавления чатов в мультиклассруме, но надо еще подфункцию сделать чтобы код сократить!
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST",
        }).then(r => r.json()).then(r => artid = r)

        let sidarr = [];
        await fetch("https://academic-gateway.skyeng.ru/academic/api/teacher-classroom/get-data/personal", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"teacherId\":null}",
            "method": "POST",
            "credentials": "include"
        }).then(r => r.json()).then(data => studarr = data)


        for (let i = 0; i < Object.keys(studarr).length; i++) {

            function obrabotka(subjName, num) {
                console.log(Object.values(studarr)[num])
                sidarr = [];
                console.log(`%c${subjName}`, 'color:lightgreen; font-weight:700')
                for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                    if (Object.values(studarr)[num][j].status != "sleep")
                        sidarr += Object.values(studarr)[num][j].id + ","

                    console.log(Object.values(studarr)[num][j].id + " Status: " + Object.values(studarr)[num][j].status)
                }
                if (typeof (sidarr) != 'object') {
                    sidarr = sidarr.split(',');

                    for (let j = 0; j < sidarr.length - 1; j++) {
                        fetchaddchat(sidarr[j], artid.user.id)
                    }
                    alert(`Чаты с учениками в разделе ${subjName} - Multi-classroom добавлены в количестве: ` + (sidarr.length - 1))
                }
            }

            let arrayofsubjects = Object.keys(studarr)[i]
            switch (arrayofsubjects) {
                case 'math':
                    obrabotka('Математика', i);
                    break;
                case 'russian':
                    obrabotka('Русский язык', i);
                    break;
                case 'social-science':
                    obrabotka('Обществознание', i);
                    break;
                case 'preschool':
                    obrabotka('Дошколка', i);
                    break;
                case 'chess':
                    obrabotka('Шахматы', i);
                    break;
                case 'computer-science':
                    obrabotka('Компьютерные курсы', i);
                    break;
                case 'chemistry':
                    obrabotka('Химия', i);
                    break;
                case 'physics':
                    obrabotka('Физика', i);
                    break;
                case 'english':
                    obrabotka('Английский язык', i);
                    break;
                case 'history':
                    obrabotka('История', i);
                    break;
                case 'biology':
                    obrabotka('Биология', i);
                    break;
                case 'geography':
                    obrabotka('География', i);
                    break;
            }
        }
    }

    let classworkbtn = document.createElement('div') // создание кнопки Classwork
    classworkbtn.id = "clwbtn"
    classworkbtn.textContent = "Classwork"
    classworkbtn.style = "position:absolute; top:14px; left:65%; cursor: pointer; color:green; text-shadow: 1px 2px 5px rgb(0 0 0 / 20%);"
    let subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]

    switch (subject) {
        case "chess/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Шахматы"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-chess.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "math/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Математика"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-math.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "geography/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Географии"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-geography.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "preschool/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Дошколка"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-preschool.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "social-science/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Обществознания"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-social-science.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "history/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Истории"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-history.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "biology/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Биологии"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-biology.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "english/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Английского языка"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-english.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "computer-science/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Компьютерных курсов"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-computer-science.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "physics/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Физики"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-physics.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "literature/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Литературы"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-literature.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "chemistry/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Химии"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-chemistry.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "russian/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Русского языка"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-russian.skyeng.ru/api/v1/rooms/")
            }

            break;
    }

}

function paintstatus() { //функция перекрашивания статуса оператора онлайн зеленый, занят желтый, офлайн и перерыв красные
    const statusElem = document.querySelectorAll('.user_menu-status-name')[1];
    const buttonElems = document.querySelectorAll('.ant-btn');
    if (!statusElem) {
        return;
    }

    let color;
    let text;
    switch (statusElem.textContent) {
        case "Офлайн":
            color = "red";
            text = "Офлайн";
            break;
        case "Перерыв":
            color = "red";
            text = "Перерыв";
            break;
        case "Онлайн":
            color = "green";
            text = "Онлайн";
            break;
        case "Занят":
            color = "yellow";
            text = "Занят";
            break;
    }

    if (color) {
        let style = `background: ${color}; color: white; font-weight: 700`;
        if (color === "yellow") {
            style += "; color: black";
        }
        statusElem.style = style;

        let buttonElem;
        if (document.URL === "https://skyeng.autofaq.ai/tickets/archive") {
            buttonElem = buttonElems[5];
        } else {
            buttonElem = buttonElems[4];
        }

        if (buttonElem && buttonElem.textContent === text) {
            buttonElem.style.background = color;
        }
    }
}

function addbuttonsintegration() { // добавляет подсветку при создании задачи зеленым цветом 2лтп, красным тп исхода 1 линии
    if ((localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv || localStorage.getItem('scriptAdr') == TPprem_addr || localStorage.getItem('scriptAdr') == TPprem_addrRzrv) && document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
            let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')
            //let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')[4].children[0].childNodes[1];
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butstdid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachidfstd)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonservid)
            for (let i = 0; i < categorylist.length; i++) {
                if (categorylist[i].textContent == "Техподдержка исход crm2") {
                    categorylist[i].style = "color: red; font-weight: 600; text-shadow: 1px 1px 1px black, 0 0 1em red";
                } else if (categorylist[i].textContent == "Техподдержка 2-я линия crm2") {
                    categorylist[i].style = "color: green; font-weight: 600; text-shadow: 1px 1px 1px black, 0 0 1em green";
                } else {
                    categorylist[i].style = "color: black;";
                }
            }
        }
    }
}

function checJiraF() { //Функция добавления коммента в чат при добавлении ссылки на джиру, но требуется повторное открытие окна чтобы система получила информацию о ссылке введеной в ячейку
    try {
        if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM").textContent == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }
        } else if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM").textContent == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }
        }
    } catch (e) { }
}

function screenshots() {  //просмотр и трансформация скриншотов в активном чате
    // Select the expert-chat-display-inner element
    const expertChatDisplayInner = document.getElementsByClassName('expert-chat-display-inner')[0];

    // If expert-chat-display-inner exists, use it to get the children elements
    let children;
    if (expertChatDisplayInner) {
        children = expertChatDisplayInner.children;
    }
    // If expert-chat-display-inner does not exist, select the chat-messages element and use it to get the children elements
    else {
        const chatMessages = document.getElementsByClassName('chat-messages')[0];
        if (!chatMessages) {
            return;
        }
        children = chatMessages.children;
    }

    // Iterate over the children elements
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.textContent.includes('vimbox-resource') || child.textContent.includes('math-prod') || child.textContent.includes('communications.skyeng.ru')) {
            // Get all the links in the child element
            const links = child.querySelectorAll('a');

            // Iterate over the links
            for (let j = 0; j < links.length; j++) {
                const link = links[j];
                if (!link.hasAttribute('data-lightbox')) {
                    // Create the img and a elements
                    const img = document.createElement('img');
                    img.style.width = '100px';
                    const alink = document.createElement('a');
                    alink.setAttribute('data-lightbox', 'imgs');
                    alink.append(img);
                    img.src = link.href;
                    img.alt = 'ПКМ-Сохранить ссылку как';
                    alink.href = img.src;
                    link.replaceWith(alink);
                }
            }
        }
    }
}


function getLocalstorageToFile(fileName) { //функция сохранения содержимого localstorage в файл на компьютере

    /* dump local storage to string */

    var a = {};
    for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        var v = localStorage.getItem(k);
        a[k] = v;
    }

    /* save as blob */

    var textToSave = JSON.stringify(a)
    var textToSaveAsBlob = new Blob([textToSave], {
        type: "application/json"
    });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);

    /* download without button hack */

    var downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = function () {
        document.body.removeChild(event.target);
    };
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();

}

function replaceSelectedText(elem, str) { //функция замены выделенного текста, для формирования гиперссылки
    elem.focus();

    if (document.selection) {
        var s = document.selection.createRange();
        if (s.text) {
            eval("s.text=" + str + "(s.text);");
            s.select();
            return true;
        }
    }
    else if (typeof (elem.selectionStart) == "number") {
        if (elem.selectionStart != elem.selectionEnd) {
            var start = elem.selectionStart;
            var end = elem.selectionEnd;

            eval("var rs = " + str + "(elem.value.substr(start,end-start));");
            elem.value = elem.value.substr(0, start) + rs + elem.value.substr(end);
            elem.setSelectionRange(end, end);
        }
        return true;
    }
    return false;
}

function change_str(s) { // вспомогательная функция для подстановки вместо текста гиперссылку и сохраняя выделенный сам текст
    return `<a href="${document.getElementById('bindlinktotext').value}" target="_blank" rel="noopener">` + s + "</a>";
}

function addOption(oListbox, text, value) {  //функция добавления опции в список
    var oOption = document.createElement("option");
    oOption.appendChild(document.createTextNode(text));
    oOption.setAttribute("value", value);
    oListbox.appendChild(oOption);
}

function clock_on_javascript_1() {  //таймер обычного отсчета текущего времени
    // Get the current date and time
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Add a leading zero to hours, minutes, and seconds if they are less than 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Concatenate the hours, minutes, and seconds into a single string
    const time = `${hours} : ${minutes} : ${seconds}`;

    // Set the text content of the clock_js element to the time string
    document.getElementById("clock_js").textContent = time;
}

function clock_on_javascript_2() { //таймер отсчета до срабатывания будильника #1
    var data = new Date();
    var currentHours = data.getHours();
    var currentMinutes = data.getMinutes();
    var currentSeconds = data.getSeconds();

    if (localStorage.getItem('setchas')){
    var setHours = JSON.parse(localStorage.getItem('setchas'));
    var setMinutes = JSON.parse(localStorage.getItem('setminuta'));
    }

    if (localStorage.getItem('chronostamp') === null) {
        time = "00" + " : " + "00" + " : " + "00";
        document.getElementById("clock_remin").innerHTML = time;
        return;
    }

    var remainingSeconds = (setHours - currentHours) * 3600 + (setMinutes - currentMinutes) * 60 - currentSeconds;
    if (remainingSeconds <= 0) {
        time = "00" + " : " + "00" + " : " + "00";
        document.getElementById("clock_remin").innerHTML = time;
        return;
    }

    var remainingMinutes = Math.floor(remainingSeconds / 60);
    remainingSeconds = remainingSeconds % 60;
    var remainingHours = Math.floor(remainingMinutes / 60);
    remainingMinutes = remainingMinutes % 60;

    time = (remainingHours < 10 ? "0" + remainingHours : remainingHours) + " : " + (remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes) + " : " + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);
    document.getElementById("clock_remin").innerHTML = time;
}

function clock_on_javascript_3() { //таймер отсчета до срабатывания будильника #2
    var data1 = new Date();
    var currentHours1 = data1.getHours();
    var currentMinutes1 = data1.getMinutes();
    var currentSeconds1 = data1.getSeconds();

    if (localStorage.getItem('setchas1')){
    var setHours1 = JSON.parse(localStorage.getItem('setchas1'));
    var setMinutes1 = JSON.parse(localStorage.getItem('setminuta1'));
    }

    if (localStorage.getItem('chronostamp1') === null) {
        time1 = "00" + " : " + "00" + " : " + "00";
        document.getElementById("clock_remin1").innerHTML = time1;
        return;
    }

    var remainingSeconds1 = (setHours1 - currentHours1) * 3600 + (setMinutes1 - currentMinutes1) * 60 - currentSeconds1;
    if (remainingSeconds1 <= 0) {
        time1 = "00" + " : " + "00" + " : " + "00";
        document.getElementById("clock_remin1").innerHTML = time1;
        return;
    }

    var remainingMinutes1 = Math.floor(remainingSeconds1 / 60);
    remainingSeconds1 = remainingSeconds1 % 60;
    var remainingHours1 = Math.floor(remainingMinutes1 / 60);
    remainingMinutes1 = remainingMinutes1 % 60;

    time1 = (remainingHours1 < 10 ? "0" + remainingHours1 : remainingHours1) + " : " + (remainingMinutes1 < 10 ? "0" + remainingMinutes1 : remainingMinutes1) + " : " + (remainingSeconds1 < 10 ? "0" + remainingSeconds1 : remainingSeconds1);
    document.getElementById("clock_remin1").innerHTML = time1;
}

function refreshTimerReminder() {
    if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
        document.getElementById('reminderstatus').textContent = "🔔";
        setchas.value = localStorage.getItem('setchas');
        setminuta.value = localStorage.getItem('setminuta');
        var timearr = new Date();
        var chronostamp2 = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
        localStorage.setItem('chronostamp2', chronostamp2);
        abortTimeOut = setTimeout(function () {
            setRemindAf('chronostamp')
        }, localStorage.getItem('chronostamp2'));
    } else if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
        document.getElementById('reminderstatus').textContent = "🔔";
        setchas1.value = localStorage.getItem('setchas1');
        setminuta1.value = localStorage.getItem('setminuta1');
        var timearr1 = new Date();
        var chronostamp22 = (((localStorage.getItem('setchas1') - timearr1.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta1') - timearr1.getMinutes()) * 60) + (0 - timearr1.getSeconds())) * 1000;
        localStorage.setItem('chronostamp22', chronostamp22);
		abortTimeOut1 = setTimeout(function () {
		setRemindAf('chronostamp1')
		}, localStorage.getItem('chronostamp22'));
		} else {
		clearTimeout(abortTimeOut);
		clearTimeout(abortTimeOut1);
		document.getElementById('reminderstatus').textContent = "🔕";
		}
}

function setRemindAf(tsname) { //функция  при наступлении времени перевода в статус занят Будильник №1
    const data = {
        command: "DO_SET_OPERATOR_STATUS",
        status: "Busy",
        source: "Operator"
    };

    fetch("https://skyeng.autofaq.ai/api/reason8/operator/status", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        mode: "cors",
        credentials: "include"
    });

    alert("Время ставить занят! :D");
    localStorage.removeItem(tsname);

    const reminderstatus = document.getElementById('reminderstatus');
    if (!localStorage.getItem('chronostamp') && !localStorage.getItem('chronostamp1')) {
        reminderstatus.textContent = "🔕";
    } else {
        reminderstatus.textContent = "🔔";
    }

    if (tsname === 'chronostamp') {
        setchas.value = "";
        setminuta.value = "";
        localStorage.removeItem('setchas');
        localStorage.removeItem('setminuta');
    } else if (tsname === 'chronostamp1') {
        setchas1.value = "";
        setminuta1.value = "";
        localStorage.removeItem('setchas1');
        localStorage.removeItem('setminuta1');
    }
}

function move_again_AF() { //с АФ шняга там стили шмили скрипта отображение отправку сообщений

    if (localStorage.getItem('scriptAdr') != TP_addr && localStorage.getItem('scriptAdr') != TP_addrRzrv && localStorage.getItem('scriptAdr') != TPprem_addr && localStorage.getItem('scriptAdr') != TPprem_addrRzrv) {
        prepKC()
    } else {
        prepTp()
    }

    if (localStorage.getItem('scriptAdr') == TP_addrRzrv || localStorage.getItem('scriptAdr') == KC_addrRzrv || localStorage.getItem('scriptAdr') == TPprem_addrRzrv) {
        document.getElementById('pages').style.background = 'red'
        document.getElementById('pages').title = 'Включены резервные шаблоны, если в АФ нет сбоя в работе Баз знаний - переключи на обычные шаблоны'
        languageAF.addEventListener('click', function () {
            if (document.getElementById('pages').style.background != 'red') {
                document.getElementById('pages').style.background = 'red'
            }
        })
    }

    document.getElementById('butServ').onclick = function () { //открывает вензель user info
        if (document.getElementById('AF_Service').style.display == '')
            document.getElementById('AF_Service').style.display = 'none'
        else
            document.getElementById('AF_Service').style.display = ''
    }

    window.onkeydown = function (e) {
        if (e.key == 'Control') {
            bool = 1;
        }
        if (e.key == 'Enter' && bool == 1) {
            refCurTimer(localStorage.getItem('aclstime') + ":00")
        }
    }
    window.onkeyup = function (e) {
        if (e.key == 'Control') {
            bool = 0;
        }
    }

    // создание кнопки скрипт + начало тандема
    let button1 = document.createElement('div');
    button1.id = 'scriptBut';
    button1.innerHTML = "Скрипт";
    button1.style = "margin-right:15px; display:none";
    button1.onclick = function () {
        document.getElementById('AF_helper').style.display = 'flex'
        this.style.display = 'none'
        //скрывает окна при выбранно опции скрытия КОД
        if (localStorage.getItem('disablelpmwindow') == 1)
            document.getElementById('testUsers').style.display = "none";

        if (localStorage.getItem('disablelngpmwindow') == 1)
            document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'

        if (localStorage.getItem('disableomelchenkowindow') == 1)
            document.getElementById('main_easy_win').style.display = "none";

    }

    var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
    btnAdd.insertBefore(button1, btnAdd.children[0]) // добавление кнопки скрипт на строку с основными кнопками в верхней части экрана
    // конец тандема

    user = "student"

    getText()
}

function closeTerms() { // функция автоподтверждения условий пользования при входе в ЛКП
    if (document.URL == 'https://new-teachers.skyeng.ru/') {
        for (let i = 0; i < document.getElementsByClassName('terms-popup-accept-button').length; i++) {
            document.getElementsByClassName('terms-popup-accept-button')[i].click()
        }
    }
}

if (localStorage.getItem('winTopAF') == null) { // началоное положение главного окна (если не задано ранее)
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}

if (localStorage.getItem('winTopRefuseNew') == null) { //начальное положение окна Отказ от помощи
    localStorage.setItem('winTopRefuseNew', '295');
    localStorage.setItem('winLeftRefuseNew', '295');
}

//Для таймера автозакрытия
if (localStorage.getItem('aclstime') == null) {
    localStorage.setItem('aclstime', 12);
}

//Для интервала воспроизведения звука
if (localStorage.getItem('splinter') == null) {
    localStorage.setItem('splinter', 3);
}

// Для переключателя вкл/выкл звук
if (localStorage.getItem('audio') == null) {
    localStorage.setItem('audio', 1);
}

//Подключаем скрипт App Script с гугл таблиц, где содержаться шщаблоны, которыми пользуемся
if (localStorage.getItem('scriptAdr') == null) {
    localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbzsf72GllYQdCGg-L4Jw1qx9iv9Vz3eyiQ9QO81HEnlr0K2DKqy6zvi7IYu77GB6EMU/exec');
}

let wintAF = document.createElement('div'); // создание главного окна
document.body.append(wintAF);
wintAF.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; box-shadow: 0px 0px 10px #000';
wintAF.setAttribute('id', 'AF_helper');
wintAF.innerHTML = win_AFhelper;
var chatsArray = []
var TS_addr = 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec'
var KC_addr = 'https://script.google.com/macros/s/AKfycbzV8BHtyD3XUcPjZmb9pwwY-2cwAKx8hTRZKVENpKhdCJYe-hF0rpyDVdUIXBUin326Lw/exec'
var KC_addrRzrv = 'https://script.google.com/macros/s/AKfycbzn2Lv0uuqXG5-mSWHu2W_fAmeeVJ9WVtT1hNNMAj9z9p5I0WLZnydzTcE8z1H5nuaTiQ/exec'
var TP_addr = 'https://script.google.com/macros/s/AKfycbzsf72GllYQdCGg-L4Jw1qx9iv9Vz3eyiQ9QO81HEnlr0K2DKqy6zvi7IYu77GB6EMU/exec'
var TP_addrRzrv = 'https://script.google.com/macros/s/AKfycbyL2uTpWRlajHmtRXpjUq2yiPw6f_t-tHoBglkG-ojoA7ksnqMXr0_BXzhZFk31qV7jmQ/exec'
var TPprem_addr = 'https://script.google.com/macros/s/AKfycbzQqFYAZHtpTsK10HTlgVRZtLR8GWKgzrSiwUt-u8UpSoWX4MswkLRbB7valrYFbSPtnQ/exec'
var TPprem_addrRzrv = 'https://script.google.com/macros/s/AKfycbwOO6ptnyDnIH0OWBZ4dH64Jm7C8zZbS0sBncqyXjhvPqxAn2V2RaphDwGSVmYwktx_oA/exec'

let wintRefuseFormNew = document.createElement('div'); // создание окна отказов
document.body.append(wintRefuseFormNew);
wintRefuseFormNew.style = 'min-height: 25px; width: 420px; background: #464451; top: ' + localStorage.getItem('winTopRefuseNew') + 'px; left: ' + localStorage.getItem('winLeftRefuseNew') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintRefuseFormNew.style.display = 'none';
wintRefuseFormNew.setAttribute('id', 'AF_Refuseformnew');
wintRefuseFormNew.innerHTML = win_refusefrom;

if (window.location.href.indexOf('autofaq') === -1 || window.location.href.indexOf('skyeng.autofaq.ai/login') > 0) {
    document.getElementById('AF_helper').style.display = 'none';
}

var listenerAF = function (e, a) { // сохранение позиции главного окна
    wintAF.style.left = Number(e.clientX - myX2) + "px";
    wintAF.style.top = Number(e.clientY - myY2) + "px";
    localStorage.setItem('winTopAF', String(Number(e.clientY - myY2)));
    localStorage.setItem('winLeftAF', String(Number(e.clientX - myX2)));
};

wintAF.onmousedown = function (a) { // изменение позиции главного окна
    if (checkelementtype(a)) {
        window.myX2 = a.layerX;
        window.myY2 = a.layerY;
        document.addEventListener('mousemove', listenerAF);
    }
}
wintAF.onmouseup = function () { document.removeEventListener('mousemove', listenerAF); } // прекращение изменения позиции главного окна

var listenerRefuseForm = function (e, a) { // сохранение позиции окна отказов
    wintRefuseFormNew.style.left = Number(e.clientX - myX16) + "px";
    wintRefuseFormNew.style.top = Number(e.clientY - myY16) + "px";
    localStorage.setItem('winTopRefuseNew', String(Number(e.clientY - myY16)));
    localStorage.setItem('winLeftRefuseNew', String(Number(e.clientX - myX16)));
};

wintRefuseFormNew.onmousedown = function (a) { // изменение позиции окна отказов
    if (checkelementtype(a)) {
        window.myX16 = a.layerX;
        window.myY16 = a.layerY;
        document.addEventListener('mousemove', listenerRefuseForm);
    }
}

wintRefuseFormNew.onmouseup = function () { document.removeEventListener('mousemove', listenerRefuseForm); } // прекращение изменения позиции окна отказов



addInfoUser.style = "color: white; text-align: center; cursor: -webkit-grab;"
loginer = document.getElementById('testUsers')
loginer.appendChild(addInfoUser)

var listenerloginer = function (e, a) { //  изменения позиции окна с логинером для У П
    loginer.style.left = Number(e.clientX - myXloginer) + "px";
    loginer.style.top = Number(e.clientY - myYloginer) + "px";
    localStorage.setItem('winTop3', String(Number(e.clientY - myYloginer)));
    localStorage.setItem('winLeft3', String(Number(e.clientX - myXloginer)));
};

loginer.onmousedown = function (a) {
    if (checkelementtype(a)) {
        window.myXloginer = a.layerX;
        window.myYloginer = a.layerY;
        document.addEventListener('mousemove', listenerloginer);
    }
}

loginer.onmouseup = function () { document.removeEventListener('mousemove', listenerloginer); } // прекращение изменения позиции окна с логинером для У П

// Блок настроек и взаимодействия с ними

const soundTestBtn = document.getElementById('sound_test');

soundTestBtn.onclick = function () { // кнопка тест звука
    const isPlaying = soundTestBtn.innerHTML == '▶';
    soundTestBtn.innerHTML = isPlaying ? '⏹' : '▶';
    soundTestBtn.title = isPlaying ? 'Остановить воспроизведение' : 'Проверка звука при добавленной ссылке';
    if (isPlaying) {
        audio.play();
        setTimeout(() => {
            soundTestBtn.innerHTML = '▶';
            soundTestBtn.title = 'Проверка звука при добавленной ссылке';
        }, Number(audio.duration * 1000 + 1).toFixed(0));
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}


if (localStorage.getItem('audiovol') != null) {
    audio.volume = localStorage.getItem('audiovol');
} else localStorage.setItem('audiovol', 1);

document.getElementById('getnewtmpldata').onclick = getText // по клику на кнопку сработает функция обновления шаблонов из документа

document.getElementById('setting').onclick = function () { // открывает параметры
    if (document.getElementById('set_bar').style.display == '')
        document.getElementById('set_bar').style.display = 'none'
    else {
        document.getElementById('set_bar').style.display = ''
        document.getElementById('reminder_bar').style.display = 'none'
        document.getElementById('addTmp').style.display = 'none'

        if (localStorage.getItem('defaclschatcolor') != null || localStorage.getItem('defaclschatcolor') != undefined) {
            document.getElementById('aclstimepicker').value = localStorage.getItem('defaclschatcolor')
        } else {
            localStorage.setItem('defaclschatcolor', '#FF47CA')
            document.getElementById('aclstimepicker').value = localStorage.getItem('defaclschatcolor')
        }

        document.getElementById('aclstimepicker').onchange = function () {
            localStorage.setItem('defaclschatcolor', this.value)
        }

        document.getElementById('defaulcolorclschat').ondblclick = function () {
            localStorage.setItem('defaclschatcolor', '#FF47CA')
            document.getElementById('aclstimepicker').value = localStorage.getItem('defaclschatcolor')
        }

        // скрываем от других отделов возможность включать расширение с ТП  плююшками и шаблонами

        const opsection = document.getElementsByClassName('user_menu-dropdown-user_name')[0].textContent.split('-')[0];
        const setTPrezerv = document.getElementById('set_TPrezerv');
        const setTP = document.getElementById('set_TP');
        const setPremTPrezerv = document.getElementById('set_PremTPrezerv');
        const setTPPrem = document.getElementById('set_TPPrem');
        const operdepout = document.getElementById('operdepout');

        if (opsection !== 'ТП' && opsection !== 'ТПPrem') {
            setTPrezerv.style.display = "none";
            setTP.style.display = "none";
            setPremTPrezerv.style.display = "none";
            setTPPrem.style.display = "none";
        } else {
            setTPrezerv.style.display = "";
            setTP.style.display = "";
            setPremTPrezerv.style.display = "";
            setTPPrem.style.display = "";
        }

        switch (localStorage.getItem('scriptAdr')) {
            case TP_addr:
                operdepout.innerHTML = 'ТП';
                break;
            case TP_addrRzrv:
                operdepout.innerHTML = 'ТП резерв';
                break;
            case TPprem_addr:
                operdepout.innerHTML = 'ТП прем';
                break;
            case TPprem_addrRzrv:
                operdepout.innerHTML = 'ТП прем резерв';
                break;
            case KC_addr:
                operdepout.innerHTML = 'КЦ';
                break;
            case KC_addrRzrv:
                operdepout.innerHTML = 'КЦ резерв';
                break;
            default:
                break;
        }
        //

        let objSoundList = document.getElementById('soundlistaddr')
        let soundsfromdoc;
        let soundsconteiner;

        async function getsoundsfromdoc() { // загрузка списка звуков из файла
            const soundsfromdoc = 'https://script.google.com/macros/s/AKfycbyD1l-oLcE-BBmyN1QmcHKoi0rwVfCwWjE6cfTqw6Y9QQGAju-9inKbwSOfHCI6qBEjtg/exec';
            const response = await fetch(soundsfromdoc);
            const soundsdata = await response.json();
            const soundsconteiner = soundsdata.result;
            console.log(soundsdata.result) //получим список звуков
            soundsconteiner.forEach((sound) => {
                if (sound[0] !== '') {
                    addOption(objSoundList, `${sound[0]}`, `${sound[1]}`)
                }
            });
            Array.prototype.forEach.call(objSoundList.children, (option) => { // проверяем какой звук выбран
                if (option.value === localStorage.getItem('sound_str')) {
                    option.selected = true;
                }
            });
            if (objSoundList.children[0].selected) {
                objSoundList.children[1].selected = true;
                document.getElementById('sound_adr').style.display = '';
                document.getElementById('sound_save').style.display = '';
                document.getElementById('sound_adr').value = localStorage.getItem('sound_str');
            }
        }

        if (objSoundList.length < 3) {
            getsoundsfromdoc()
        }

        if (localStorage.getItem('test_stud') != "" || localStorage.getItem('test_stud') != null) {
            document.getElementById('test_std').value = localStorage.getItem('test_stud');
        } else document.getElementById('test_std').value = "";

        if (localStorage.getItem('test_teach') != "" || localStorage.getItem('test_teach') != null) {
            document.getElementById('test_teach').value = localStorage.getItem('test_teach');
        } else document.getElementById('test_teach').value = "";

        //Для таймера автозакрытия
        if (localStorage.getItem('aclstime') != null || localStorage.getItem('aclstime') != "") {
            document.getElementById('autoclosetime').value = localStorage.getItem('aclstime');
        } else {
            localStorage.setItem('aclstime', 12);
            document.getElementById('autoclosetime').value = localStorage.getItem('aclstime');
        }

        //для таймера autoclose

        document.getElementById('setautoclosetime').onclick = function () {
            if (document.getElementById('autoclosetime').value != '') {
                localStorage.setItem('aclstime', document.getElementById('autoclosetime').value);
            } else console.log("Базовое значение равно 12 минут")
        }

        //Для интервала между воспроизведением звука
        if (localStorage.getItem('splinter') != null || localStorage.getItem('splinter') != "") {
            document.getElementById('soundplayinterval').value = localStorage.getItem('splinter');
        } else {
            localStorage.setItem('splinter', 3);
            document.getElementById('soundplayinterval').value = localStorage.getItem('splinter');
        }

        document.getElementById('setsoundplayinterval').onclick = function () {
            if (document.getElementById('soundplayinterval').value != '') {
                localStorage.setItem('splinter', document.getElementById('soundplayinterval').value);
            } else console.log("Базовое значение равно 3 секунды")
        }

        document.getElementById('sound_save').onclick = function () { //функция сохранения адреса звукового уведомления о входящем чате в АФ
            localStorage.setItem('sound_str', document.getElementById('sound_adr').value);
            if (document.getElementById('sound_adr').value == "")
                audio = new Audio("https://dimentorexpo.github.io/Sounds/msg.mp3");
            else {
                audio = new Audio(document.getElementById('sound_adr').value);
                document.getElementById('sound_save').textContent = "✅";
                setTimeout(function () {
                    document.getElementById('sound_save').textContent = "💾";
                }, 3000);
            }
        }

        if (flagLangBut == 0) {
            document.getElementById('languageAF').onclick = function () {
                if (this.innerHTML == "Русский") {
                    this.innerHTML = "Английский";
                    document.getElementById('AF_helper').style.background = "#EBC7DF"
                } else {
                    this.innerHTML = "Русский";
                    document.getElementById('AF_helper').style.background = "#464451"
                }
            }
        }

        //

        let range = document.getElementById('range');
        range.value = localStorage.getItem('audiovol');


        range.onchange = function () {
            if (localStorage.getItem('audiovol') != null) {
                audio.volume = this.value;
                localStorage.setItem('audiovol', audio.volume);
            } else localStorage.setItem('audiovol', this.value);
        }

        //Скрыть окно Л П МВУ
        let flaglpm = 0;   // функция чекбокса вкл и откл  информационного окна
        var lpmboxstatus = document.getElementById('hidelpmwindow');
        lpmboxstatus.onclick = function () {

            if (!lpmboxstatus.checked) {
                document.getElementById('testUsers').style.display = "";
                flaglpm = 0;
                localStorage.setItem('disablelpmwindow', flaglpm)
            } else {   // поставить checked, если он не установлен
                document.getElementById('testUsers').style.display = "none";
                flaglpm = 1;
                localStorage.setItem('disablelpmwindow', flaglpm)
            }
        }

        if (localStorage.getItem('disablelpmwindow') == 1) {
            document.getElementById('testUsers').style.display = "none";
            lpmboxstatus.checked = true;
        } else {
            lpmboxstatus.checked = false;
        }

        document.getElementById('setteststd').onclick = function () { // сохраняется ID в настройках расширения тестового ученика в localstorage
            if (document.getElementById('test_std').value != '') {
                localStorage.setItem('test_stud', document.getElementById('test_std').value);
            } else console.log("Ведите ID тестового ученика")
        }

        document.getElementById('settestteach').onclick = function () { // сохраняется ID в настройках расширения тестового учителя в localstorage
            if (document.getElementById('test_teach').value != '') {
                localStorage.setItem('test_teach', document.getElementById('test_teach').value);
            } else console.log("Ведите ID тестового преподавателя")
        }

        document.getElementById('savesettingstofile').onclick = function () {  // по клику на кнопку Сохранить настройки сохраянется на жесткомм диске файл с содержимым localstorage
            getLocalstorageToFile('settings-af')
        }

        document.getElementById('fileinput').onclick = function () { // по клику на кнопку Загрузить настройки предлагает выбрать файл настроек, добавлять при этом ранее сохраненный в формате .json
            let fileInput = document.getElementById('fileinput');
            let jsonparsed;

            fileInput.addEventListener('change', function (e) {
                let file = fileInput.files[0];
                let textType = /.json/;

                if (file.type.match(textType)) {
                    let reader = new FileReader();

                    reader.onload = function (e) {
                        console.log(reader.result)
                        jsonparsed = JSON.parse(reader.result)
                        console.log(jsonparsed)
                        console.log(Object.keys(jsonparsed).length)
                        for (let i = 0; i < Object.keys(jsonparsed).length; i++) {
                            localStorage.setItem(Object.keys(jsonparsed)[i], Object.values(jsonparsed)[i])
                        }
                        alert("Настройки расширения в localstorage загружены успешно!")
                    }

                    reader.readAsText(file);
                } else {
                    console.log("File not supported!")
                }
            });
        }

        //Скрыть окно выбора языка
        let flaglng = 0;   // функция чекбокса вкл и откл  информационного окна
        var lngbtnonoff = document.getElementById('hidelngselector');
        lngbtnonoff.onclick = function () {

            if (!lngbtnonoff.checked) {
                document.getElementsByClassName('user_menu-language_switcher')[0].style.display = ''
                flaglng = 0;
                localStorage.setItem('disablelngpmwindow', flaglng)
            } else {   // поставить checked, если он не установлен
                document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
                flaglng = 1;
                localStorage.setItem('disablelngpmwindow', flaglng)
            }
        }

        if (localStorage.getItem('disablelngpmwindow') == 1) {
            document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
            lngbtnonoff.checked = true;
        } else {
            lngbtnonoff.checked = false;
        }

        if (localStorage.getItem('audio') == '0')
            document.getElementById('audioswitcher').checked = false;
        else
            document.getElementById('audioswitcher').checked = true;

        document.getElementsByClassName('checkbox-audio-switch')[0].onclick = function () {  // функция переключатели звука ВКЛ и ВЫКЛ

            if (localStorage.getItem('audio') != null) {
                if (localStorage.getItem('audio') == '0') {
                    document.getElementById('audioswitcher').checked = false;
                    localStorage.setItem('audio', '1');
                } else if (localStorage.getItem('audio') == '1') {
                    document.getElementById('audioswitcher').checked = true;
                    localStorage.setItem('audio', '0');
                    if (soundintervalset != null) {
                        clearInterval(soundintervalset)
                        soundintervalset = null
                    }
                }
            }
        }
    }
}

// конец блока настроек

let infouserbut = document.createElement('p');
infouserbut.id = 'userIdScript';
infouserbut.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';

let nextuserinfo = document.createElement('p');
nextuserinfo.id = 'nextUserInfoScript';
nextuserinfo.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';

let buttonhistory = document.createElement('span');
buttonhistory.id = 'lookForHistory';
buttonhistory.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History </a>';

let trshotmain = document.createElement('span');
trshotmain.id = 'originalusertrshooter'
trshotmain.innerHTML = '<a style="color: black; cursor: pointer;"> 🕵️‍♀️TroubleShoot </a>';

let trshootnextuser = document.createElement('span');
trshootnextuser.id = 'nextusertrshooter'
trshootnextuser.innerHTML = '<a style="color: black; cursor: pointer;"> 🕵️‍♀️TroubleShoot </a>';

let buttonservstud = document.createElement('span');
buttonservstud.id = 'nextStudentServiceInfo1';
buttonservstud.innerHTML = " ⚜ ";
buttonservstud.style = "width:20px; cursor:pointer";

let buttonservivceuser = document.createElement('span');
buttonservivceuser.id = 'nextUserServiceInfo';
buttonservivceuser.innerHTML = " ⚜ ";
buttonservivceuser.style = "width:20px; cursor:pointer";

let btnNextUserChatHistory = document.createElement('span');
btnNextUserChatHistory.id = 'btnNextUserChatHis';
btnNextUserChatHistory.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History</a>';

let butteachid = document.createElement('button');
butteachid.id = 'teacheridtofield';
butteachid.innerHTML = "👽 (ID П) П обратился ";
butteachid.style = "width:160px; cursor:pointer; border: 1px solid black; border-radius:10px";

let butstdid = document.createElement('button');
butstdid.id = 'studentidtofield';
butstdid.innerHTML = "👨‍🎓 (ID У) П обратился";
butstdid.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px'

let butteachidfstd = document.createElement('button');
butteachidfstd.id = 'teacheridfromstudent';
butteachidfstd.innerHTML = "👽 (ID П) У обратился";
butteachidfstd.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px'

let buttonservid = document.createElement('button');
buttonservid.id = 'servidstudento';
buttonservid.innerHTML = "ID услуги У (крит)";
buttonservid.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px; margin-top:5px;'

let marksstata = document.createElement('span');
marksstata.id = 'marksstata';
marksstata.innerHTML = '<a style="color: black; cursor: pointer;">📊</a>';

buttonhistory.onclick = function () { //функция приска пр истории чатов в коте
    document.getElementById('butChatHistory').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
            btn_search_history.click()
        }
    }
}

btnNextUserChatHistory.onclick = function () { //искать историю чатов по ученику с которым след урок при обращении П
    document.getElementById('butChatHistory').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
            btn_search_history.click()
        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-teacherId") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
            btn_search_history.click()
        }
    }
}

trshotmain.onclick = function () {
    let curtime = new Date();
    let mesjac;
    let denj;

    if (curtime.getDate() < 10) {
        denj = "0" + curtime.getDate();
    } else {
        denj = curtime.getDate();
    }
    if (curtime.getMonth() + 1 < 10) {
        mesjac = "0" + (curtime.getMonth() + 1);
    } else {
        mesjac = curtime.getMonth() + 1;
    }

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
            window.open('https://video-trouble-shooter.skyeng.ru/?userId=' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0] +
                '&from=' + curtime.getFullYear() + '-' + mesjac + '-' + (denj - 1 == 0 ? denj : (denj - 1 < 10 ? "0" + (denj - 1) : denj)) + 'T00:00:00&to=' + curtime.getFullYear() + '-' + mesjac + '-' + denj + 'T23:59:00&order=desc')
        }
    }
}

trshootnextuser.onclick = function () {
    let curtime = new Date();
    let mesjac;
    let denj;

    if (curtime.getDate() < 10) {
        denj = "0" + curtime.getDate();
    } else {
        denj = curtime.getDate();
    }
    if (curtime.getMonth() + 1 < 10) {
        mesjac = "0" + (curtime.getMonth() + 1);
    } else {
        mesjac = curtime.getMonth() + 1;
    }

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
            window.open('https://video-trouble-shooter.skyeng.ru/?userId=' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0] +
                '&from=' + curtime.getFullYear() + '-' + mesjac + '-' + (denj - 1 == 0 ? denj : (denj - 1 < 10 ? "0" + (denj - 1) : denj)) + 'T00:00:00&to=' + curtime.getFullYear() + '-' + mesjac + '-' + denj + 'T23:59:00&order=desc')
        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-teacherId") {
            window.open('https://video-trouble-shooter.skyeng.ru/?userId=' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0] +
                '&from=' + curtime.getFullYear() + '-' + mesjac + '-' + (denj - 1 == 0 ? denj : (denj - 1 < 10 ? "0" + (denj - 1) : denj)) + 'T00:00:00&to=' + curtime.getFullYear() + '-' + mesjac + '-' + denj + 'T23:59:00&order=desc')
        }
    }
}

infouserbut.onclick = function () { // функция Info по нажатию на которую ID переносится в расширение омельченко и нажимает Info кнопку автоматически
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const idNode = Array.prototype.find.call(userDetailsList.childNodes, (node) => node.firstChild.textContent === 'id');
    if (idNode) {
        const editorExtensionId = localStorage.getItem('ext_id');
        chrome.runtime.sendMessage(
            editorExtensionId,
            {
                name: 'chm_message', question: 'send_event', messageValue: {
                    message: 'open-user-info',
                    userId: `${idNode.childNodes[1].textContent.split(' ')[0]}`,
                },
            },
        );
    }
};

buttonservivceuser.onclick = function () { //открывает окно вензель user info для nextuser
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const userIdNode = Array.prototype.find.call(userDetailsList.childNodes, (node) => node.firstChild.textContent === 'nextClass-teacherId' || node.firstChild.textContent === 'nextClass-studentId');

    if (userIdNode) {
        const AF_Service = document.getElementById('AF_Service');
        if (AF_Service.style.display === 'none') {
            AF_Service.style.display = '';
        }
        document.getElementById('idstudent').value = userIdNode.childNodes[1].textContent;
        getidstudent.click();
    }
}

buttonservstud.onclick = function () { //открывает окно вензель user info
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const idNode = Array.prototype.find.call(userDetailsList.childNodes, (node) => node.firstChild.textContent === 'id');

    if (idNode) {
        const AF_Service = document.getElementById('AF_Service');
        if (AF_Service.style.display === 'none') {
            AF_Service.style.display = '';
        }
        document.getElementById('idstudent').value = idNode.childNodes[1].textContent.split(' ')[0];
        getidstudent.click();
    }
}


nextuserinfo.onclick = function () { // открывает просмотр инфо о пользователе взаимодействуя со скриптом Script Package
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    Array.prototype.forEach.call(userDetailsList.childNodes, (node) => {
        if (node.firstChild.textContent === 'nextClass-studentId' || node.firstChild.textContent === 'nextClass-teacherId') {
            const editorExtensionId = localStorage.getItem('ext_id');
            chrome.runtime.sendMessage(
                editorExtensionId,
                {
                    name: 'chm_message', question: 'send_event', messageValue: {
                        message: 'open-user-info',
                        userId: `${node.childNodes[1].textContent}`,
                    },
                },
            );
        }
    });
};

let hashBut = document.createElement('div')
hashBut.id = "hashBut"
hashBut.innerHTML = "Хэш"
hashBut.style.marginRight = "15px";

let taskBut = document.createElement('div')
taskBut.id = "taskBut"
taskBut.innerHTML = "🛠 Task"
taskBut.style = "margin-right:15px; cursor:pointer; margin-top:15px;"
taskBut.classList.add('ant-btn', 'onlyfortp');

let butServ = document.createElement('div')
butServ.id = "butServ"
butServ.innerHTML = "⚜UserInfo"
butServ.style = "margin-right:15px; cursor:pointer;"
butServ.classList.add('onlyfortp');

let butMarks = document.createElement('div')
butMarks.id = "butMarks"
butMarks.innerHTML = "🎭 Оценки"
butMarks.classList.add('inithide');

let butChatHistory = document.createElement('div')
butChatHistory.id = "butChatHistory"
butChatHistory.innerHTML = "💬Chat History"
butChatHistory.classList.add('inithide');

let butFrozeChat = document.createElement('div')
butFrozeChat.id = "butFrozeChat"
butFrozeChat.innerHTML = "❄ Auto Respond"
butFrozeChat.classList.add('onlyfortp', 'inithide');

let buttonGetStat = document.createElement('div'); // добавляет кнопку с выводом статистики за день
buttonGetStat.id = 'buttonGetStat';
buttonGetStat.innerHTML = "📊 Статистика";
buttonGetStat.classList.add('inithide');

let butLessonInfo = document.createElement('div')
butLessonInfo.id = "butLessonInfo"
butLessonInfo.title = "Открывает меню для просмотра статусов уроков(удален,отменен,пропущен) и кем"
butLessonInfo.innerHTML = "🎓 Lesson Info"
butLessonInfo.classList.add('inithide');

let servDsk = document.createElement('div')
servDsk.id = "servDsk"
servDsk.innerHTML = "🛠ServiceDesk"
servDsk.classList.add('onlyfortp');
servDsk.classList.add('inithide');

let butopensugestform = document.createElement('div')
butopensugestform.id = "suggestform"
butopensugestform.innerHTML = "📝Предложения"
butopensugestform.classList.add('onlyfortp', 'inithide');

let butrefuse = document.createElement('div')
butrefuse.id = "otkaz"
butrefuse.innerHTML = "❌Отказ от помощи"
butrefuse.classList.add('onlyfortp', 'inithide');

let butsmartroom = document.createElement('div')
butsmartroom.id = "smartroomform"
butsmartroom.innerHTML = "🦐Smartroom"
butsmartroom.classList.add('onlyfortp', 'inithide');

let butThemes = document.createElement('div')
butThemes.id = "themes"
butThemes.innerHTML = "Темы"
butThemes.style = 'margin-right:15px; margin-top:15px; cursor:pointer;';
butThemes.classList.add('ant-btn', 'onlyfortp')

let butJiraOpenForm = document.createElement('div')
butJiraOpenForm.id = "JiraOpenForm"
butJiraOpenForm.innerHTML = "🔎Jira Search"
butJiraOpenForm.classList.add('onlyfortp', 'inithide');

let butmenu = document.createElement('button')
butmenu.textContent = 'Меню'
butmenu.id = 'headmymenu'
butmenu.style = 'height:32px;'
butmenu.classList.add('ant-btn')

let menubar = document.createElement('div')
menubar.style = `background: white; position:absolute; left: 0; top: 50px; border: 0px solid #000000; display:none; min-height: 60px; min-width:165px; box-shadow: -1px 4px 16px 7px rgba(34, 60, 80, 0.09)`
menubar.id = 'idmymenu'

butmenu.onclick = () => { // кнопка открытия Меню
    if (menubar.style.display === 'none') {
        menubar.style.display = '';
        let xvarmenu = parseInt(document.getElementById('headmymenu').getBoundingClientRect().x - 231);
        menubar.style.left = `${xvarmenu}px`;

        // Query the DOM only once
        const expertChatContent = document.querySelector('.ant-layout-content .expert-chat_content');
        const appBodyContentInnerRight = document.querySelector('.ant-layout-content .app-body-content-inner-right');
        let clickHandler;

        if (expertChatContent) {
            clickHandler = (event) => {
                const e = document.getElementById('idmymenu');
                if (!e.contains(event.target)) e.style.display = 'none';
            };
            expertChatContent.addEventListener('click', clickHandler);
        } else if (appBodyContentInnerRight) {
            clickHandler = (event) => {
                const e = document.getElementById('idmymenu');
                if (!e.contains(event.target)) e.style.display = 'none';
            };
            appBodyContentInnerRight.addEventListener('click', clickHandler);
        }
    } else {
        menubar.style.display = 'none';
    }
}


let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";

maskBack.onclick = function () { // кнопка свернуть
    const name = document.getElementById('maskBack').getAttribute('name');
    const email = document.getElementById('maskBack').getAttribute('email');
    const phone = document.getElementById('maskBack').getAttribute('phone');
    const mask = document.getElementById('maskBack').getAttribute('mask');
    const userInfoPanel = document.getElementsByClassName('expert-user_info_panel')[0];
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[0];
    const modalWrap = document.getElementsByClassName('ant-modal-wrap')[mask];
    const modalMask = document.getElementsByClassName('ant-modal-mask')[mask];
    const chatHeaderActionsInner = document.getElementsByClassName('expert-chat-header-actions-inner')[0];
    const chatFooter = document.getElementsByClassName('expert-chat-footer')[0];
    const chatNotesButton = chatFooter.firstChild.firstChild;

    if (userInfoPanel.firstChild.firstChild.textContent === name &&
        userDetailsList.childNodes[0].childNodes[1].textContent === email &&
        userDetailsList.childNodes[1].childNodes[1].textContent === phone) {
        modalWrap.style.display = '';
        modalMask.style.display = '';
        chatHeaderActionsInner.style.display = ''; // кнопки сверху
        chatNotesButton.style.display = ''; // кнопка заметок
        maskBack.style.display = 'none';
    } else {
        maskBack.innerHTML = "Открыт неверный чат";
        setTimeout(function () { maskBack.innerHTML = "Вернуть"; }, 3000);
    }
};


let maskBackHide = document.createElement('span')
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style.marginRight = "15px";
maskBackHide.style.marginLeft = "15px";
maskBackHide.style.display = "";

maskBackHide.onclick = function () { // кнопка скрыть
    const modalContent = document.getElementsByClassName('ant-modal-content')[0];
    const modalWraps = document.getElementsByClassName('ant-modal-wrap');
    const modalMasks = document.getElementsByClassName('ant-modal-mask');
    const chatHeaderActionsInner = document.getElementsByClassName('expert-chat-header-actions-inner')[0];
    const chatFooter = document.getElementsByClassName('expert-chat-footer')[0];
    const chatNotesButton = chatFooter.firstChild.firstChild;
    const userInfoPanel = document.getElementsByClassName('expert-user_info_panel')[0];
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[0];

    if (modalContent.childNodes[1].firstChild.textContent === "Добавить комментарий к диалогу") {
        modalWraps[0].style.display = 'none';
        modalMasks[0].style.display = 'none';
        chatHeaderActionsInner.style.display = 'none'; // кнопки сверху
        chatNotesButton.style.display = 'none'; // кнопка заметок
        maskBack.style.display = '';

        maskBack.setAttribute('name', userInfoPanel.firstChild.firstChild.textContent);
        maskBack.setAttribute('email', userDetailsList.childNodes[0].childNodes[1].textContent);
        maskBack.setAttribute('phone', userDetailsList.childNodes[1].childNodes[1].textContent);
        maskBack.setAttribute('mask', 0);
    } else {
        for (let i = 0; ; i++) {
            if (modalWraps[i] === undefined) {
                modalWraps[i - 1].style.display = 'none';
                modalMasks[i - 1].style.display = 'none';
                chatHeaderActionsInner.style.display = 'none'; // кнопки сверху
                chatNotesButton.style.display = 'none'; // кнопка заметок
                maskBack.style.display = '';

                maskBack.setAttribute('name', userInfoPanel.firstChild.firstChild.textContent);
                maskBack.setAttribute('email', userDetailsList.childNodes[0].childNodes[1].textContent);
                maskBack.setAttribute('phone', userDetailsList.childNodes[1].childNodes[1].textContent);
                maskBack.setAttribute('mask', i - 1);
                break;
            }
        }
    }
};

hashBut.onclick = function () { // кнопка копирующая хеш чата
    const adr = document.location.href;
    const adr1 = document.location.pathname;
    const adrPathArray = adr1.split('/');
    const chatId = adrPathArray[3];
    const scriptAdr = localStorage.getItem('scriptAdr');
    const hashBut = document.getElementById('hashBut');
    let hash;

    if ((chatId === undefined || chatId === "") || window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1) {
        if (window.location.href.indexOf('skyeng.autofaq.ai/logs') === -1) {
            hashBut.innerHTML = "Ошибка";
            setTimeout(function () { hashBut.innerHTML = "Хэш"; }, 3000);
        } else {
            chatId = document.getElementsByClassName('ant-spin-nested-loading')[1].firstChild.firstChild.firstChild.childNodes[1].textContent;
            hash = 'https://hdi.skyeng.ru/autofaq/conversation/-11/' + chatId;
            copyToClipboard1(hash);
            hashBut.innerHTML = "Скопировано";
            setTimeout(function () { hashBut.innerHTML = "Хэш"; }, 3000);
        }
    } else {
        if (scriptAdr === TS_addr) {
            hash = 'https://hdi.skyeng.ru/autofaq/conversation/-18/' + chatId;
        } else if (scriptAdr === TPprem_addr || scriptAdr === TPprem_addrRzrv) {
            hash = 'https://hdi.skyeng.ru/autofaq/conversation/-26/' + chatId;
        } else {
            hash = 'https://hdi.skyeng.ru/autofaq/conversation/-11/' + chatId;
        }
        copyToClipboard1(hash);
        hashBut.innerHTML = "Скопировано";
        setTimeout(function () { hashBut.innerHTML = "Хэш" }, 3000)
    }
}

document.getElementById('testUsers').ondblclick = function (a) {
    if (checkelementtype(a)) {
        const testid = document.getElementById('testid');
        const idlogin = document.getElementById('idlogin');
        if (testid && idlogin && testid.style.display === '' && idlogin.style.display === '') {
            testid.style.display = 'none';
            idlogin.style.display = 'none';
            localStorage.setItem('Hidetestid', '0');
        } else if (testid && idlogin) {
            testid.style.display = '';
            idlogin.style.display = '';
            localStorage.setItem('Hidetestid', '1');
        }
    }
};

setInterval(screenshots, 5000)

setInterval(setactivechatstyle, 1000)

setInterval(addbuttonsintegration, 1000)

setInterval(remandressl, 3000);

setInterval(closeTerms, 500);

butteachid.onclick = function () { // копирует в буфер ID П при создании задачи через АФ интеграцию
    // Find the 'teacher' user type and get the user's id.
    const userTypeList = document.getElementsByClassName('expert-user_details-list')[1];
    let getidusrteachreq;
    for (let i = 0; i < userTypeList.childElementCount; i++) {
        const childNode = userTypeList.childNodes[i];
        if (childNode.childNodes[1].textContent === "teacher") {
            for (let j = 0; j < userTypeList.childElementCount; j++) {
                if (userTypeList.childNodes[j].firstChild.textContent === "id") {
                    getidusrteachreq = userTypeList.childNodes[j].childNodes[1].textContent.split(' ')[0];
                    copyToClipboard1(getidusrteachreq);
                    break;
                }
            }
            break;
        }
    }
}

butstdid.onclick = function () {  // копирует в буфер ID У из секции nextclass-StudentId при создании задачи через АФ интеграцию
    // Get the element with the class "expert-user_details-list"
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];

    // Loop through the child nodes of the element
    for (const child of userDetailsList.childNodes) {
        // Check if the first child node has the text content "nextClass-studentId"
        if (child.firstChild.textContent === "nextClass-studentId") {
            // Get the text content of the grandchild node
            const getidusrstud = child.childNodes[1].textContent;

            // Call the copyToClipboard1 function with the getidusrstud variable as an argument
            copyToClipboard1(getidusrstud);
        }
    }
};

butteachidfstd.onclick = function () { // копирует в буфер ID П из секции nextclass-TeacherId при обращении У и создании задачи через АФ интеграцию
    const detailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const teacherIdNode = Array.from(detailsList.childNodes).find(node => node.firstChild.textContent == "nextClass-teacherId");
    if (teacherIdNode) {
        getidusrsteach = teacherIdNode.childNodes[1].textContent;
        copyToClipboard1(getidusrsteach);
    }
}

buttonservid.onclick = function () { //копирует в буфер nextClass-educationServiceId при обращении П во время крита услугу ученика при интеграции в форме АФ
    const detailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const serviceIdNode = Array.from(detailsList.childNodes).find(node => node.firstChild.textContent == "nextClass-educationServiceId");
    if (serviceIdNode) {
        getservidst = serviceIdNode.childNodes[1].textContent;
        copyToClipboard1(getservidst);
    }
}


setInterval(checJiraF, 1000);

setInterval(checkthemestatus, 3000);

setInterval(paintstatus, 5000);

firstLoadPage() //вызов функции первичной загрузки страницы с фомированием меню и наполнением его

let btnsid = document.createElement('button')
btnsid.textContent = "У";
btnsid.id = "sidcode";
btnsid.classList = 'teststudteach'

let btntid = document.createElement('button')
btntid.textContent = "П";
btntid.id = "tidcode";
btntid.classList = 'teststudteach'

document.getElementById('testMath').replaceWith();
document.getElementById('testStudent').replaceWith(btnsid);
document.getElementById('testTeacher').replaceWith(btntid);

btnsid.onclick = function () { // копирует в буфер логиннер для У
    let teststudid = localStorage.getItem('test_stud');
    if (teststudid != null || teststudid != '') {
        logginerfortests(teststudid)
        document.getElementById('sidcode').classList.add('active')
        setTimeout(function () { document.getElementById('sidcode').classList.remove('active') }, 1000)

    } else alert("Введите ID тестового ученика в настройках ⚙");
}

btntid.onclick = function () { // копирует в буфер логиннер для П
    let testteachid = localStorage.getItem('test_teach');
    if (testteachid != null || testteachid != '') {
        logginerfortests(testteachid)
        document.getElementById('tidcode').classList.add('active')
        setTimeout(function () { document.getElementById('tidcode').classList.remove('active') }, 1000)

    } else alert("Введите ID тестового преподавателя в настройках ⚙");
}

if (localStorage.getItem('msg') != null) {
    document.getElementById('msg').innerHTML = localStorage.getItem('msg')
    if (localStorage.getItem('msg') == 'Чат')
        document.getElementById('msg').classList.remove('notes')
    else if (localStorage.getItem('msg') == 'Заметки')
        document.getElementById('msg').classList.add('notes')
}

if (localStorage.getItem('msg1') != null) {
    document.getElementById('msg1').innerHTML = localStorage.getItem('msg1')
}

document.getElementById('msg').onclick = function () { //  переключатель отправить сообщение в чат или заметки
    if (this.innerHTML == "Чат") {
        this.innerHTML = "Заметки";
        this.classList.toggle('notes')
        localStorage.setItem('msg', 'Заметки')
    } else {
        this.innerHTML = "Чат";
        this.classList.toggle('notes')
        localStorage.setItem('msg', 'Чат')
    }
}

document.getElementById('msg1').onclick = function () { //  переключатель Доработать или отправить сообщение
    if (this.innerHTML == "Отправить") {
        this.innerHTML = "Доработать";
        localStorage.setItem('msg1', 'Доработать')
    } else {
        this.innerHTML = "Отправить";
        localStorage.setItem('msg1', 'Отправить')
    }
}

document.getElementById('snd').onclick = function () { //функция отправки сообщений в чат или заметки
    const inp = document.getElementById('inp');
    const phoneTr = document.getElementById('phone_tr');
    const emailTr = document.getElementById('email_tr');
    const snd = document.getElementById('snd');

    snd.setAttribute('disabled', 'disabled');
    setTimeout(function () { snd.removeAttribute('disabled') }, 500);

    if (document.getElementById('msg').innerHTML === 'Чат') {
        if (template_flag === 1) {
            if (template_flag2 === 1) {
                sendAnswerTemplate2(inp.value, 1);
            } else {
                sendAnswerTemplate('', '', 1, inp.value, 1);
            }
        } else {
            sendAnswer(inp.value, 0);
        }
    } else {
        sendComment(inp.value);
    }

    inp.value = '';
    if (phoneTr) phoneTr.value = '';
    if (emailTr) emailTr.value = '';
};



document.getElementById('opandclsbarhyper').onclick = function () { // функция открытия формы для добавления гиперссылки
    if (document.getElementById('hyperlnk').classList.contains('hyper-active') == false) {
        document.getElementById('hyperlnk').classList.add('hyper-active')
        document.getElementById('hyperlnk').classList.remove('hyperlnk')
    } else {
        document.getElementById('hyperlnk').classList.remove('hyper-active')
        document.getElementById('hyperlnk').classList.add('hyperlnk')
    }
}

document.getElementById('insertlinktotext').onclick = function () { // функция замены текста на гиперссылку
    replaceSelectedText(document.getElementById('inp'), 'change_str');
    document.getElementById('bindlinktotext').value = ''
    document.getElementById('hyperlnk').classList.remove('hyper-active')
    document.getElementById('hyperlnk').classList.add('hyperlnk')
}

document.getElementById('sndbot').onclick = async function () { //отправить сообщение от автофак бота
    let txt = document.getElementById('inp').value;
    var values = await getInfo(flag)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    var txt2 = txt.split('\n')
    var txt3 = ""
    txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
    txt3 = txt3.split("\"").join("\\\"")
    txt3 = txt3.split('<p></p>').join("<p><br></p>")
    txt3 = txt3.substr(0, txt3.length - 2)

    if (document.getElementById('msg').innerHTML == "Чат")
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
            },
            "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    document.getElementById('inp').value = "";
    refCurTimer(time)
}

let intervalotak = setInterval(function () {
    if (document.getElementById('otkaz') != null || document.getElementById('otkaz') != undefined) {
        clearInterval(intervalotak)
        document.getElementById('otkaz').onclick = function () { // открыть форму Отказ от помощи
            if (document.getElementById('AF_Refuseformnew').style.display == '') {
                document.getElementById('AF_Refuseformnew').style.display = 'none'
                document.getElementById('idmymenu').style.display = 'none'
            } else {
                document.getElementById('AF_Refuseformnew').style.display = ''
                document.getElementById('idmymenu').style.display = 'none'

                let objSelIssue = document.getElementById("userissue");
                let objSelSolution = document.getElementById("howissuesolverd");
                let issuefromdoc;
                let issuecontainer;
                let solutionfromdoc;
                let solutioncontainer;

                async function getissueandsolution() {
                    if (objSelIssue.children.length == 1 && objSelSolution.children.length == 1) {
                        document.getElementById('send2doc').textContent = 'Загрузка'

                        issuefromdoc = 'https://script.google.com/macros/s/AKfycbyBl2CvdFSi2IXYDTkCroJJjlP63NMBfSsp6TwXYYGfwct0YT1_gnTumsdFbcTpR7KksA/exec'
                        await fetch(issuefromdoc).then(r => r.json()).then(r => issuedata = r)
                        issuecontainer = issuedata.result;
                        console.log(issuedata.result) //получим список проблем

                        for (let i = 0; i < issuecontainer.length; i++) {
                            addOption(objSelIssue, `${issuecontainer[i][0]}`, `${issuecontainer[i][0]}`)
                        }

                        solutionfromdoc = 'https://script.google.com/macros/s/AKfycbxut3AuCkPNsK_sR7zxxF8B7xFelbTPnR_iEywL1qo0BXbKbLiBRilGuKFm2XnPcCNdHQ/exec'
                        await fetch(solutionfromdoc).then(r => r.json()).then(r => solutiondata = r)
                        solutioncontainer = solutiondata.result;
                        console.log(solutiondata.result) //получим список как решилось

                        for (let i = 0; i < solutioncontainer.length; i++) {
                            addOption(objSelSolution, `${solutioncontainer[i][0]}`, `${solutioncontainer[i][0]}`)
                        }

                        document.getElementById('send2doc').textContent = 'Отправить'
                    } else {
                        document.getElementById('send2doc').textContent = 'Отправить'
                    }

                }

                getissueandsolution();

                //unhide fields when choose 'other'
                let flagotherproblem = 0;
                let problemlist = document.getElementById('userissue')

                problemlist.onchange = () => {

                    for (let i = 0; i < problemlist.children.length; i++) {

                        if (problemlist.children[i].selected == true && problemlist.children[i].value == 'Другое') {

                            document.getElementById('otherproblem').classList.remove('otherfieldoff')
                            document.getElementById('otherproblem').classList.add('otherfieldon')
                            document.getElementById('otherproblem').removeAttribute('disabled')
                            flagotherproblem = 1;

                        } else {
                            document.getElementById('otherproblem').classList.add('otherfieldoff')
                            document.getElementById('otherproblem').classList.remove('otherfieldon')
                            document.getElementById('otherproblem').setAttribute('disabled', 'disabled')
                            flagotherproblem = 0;
                        }
                    }
                }

                let flagothersolved = 0;
                let solvedlist = document.getElementById('howissuesolverd')

                solvedlist.onchange = () => {

                    for (let i = 0; i < solvedlist.children.length; i++) {

                        if (solvedlist.children[i].selected == true && solvedlist.children[i].value == 'Другое') {

                            document.getElementById('othersolved').classList.remove('otherfieldoff')
                            document.getElementById('othersolved').classList.add('otherfieldon')
                            document.getElementById('othersolved').removeAttribute('disabled')
                            flagothersolved = 1;

                        } else {
                            document.getElementById('othersolved').classList.add('otherfieldoff')
                            document.getElementById('othersolved').classList.remove('otherfieldon')
                            document.getElementById('othersolved').setAttribute('disabled', 'disabled')
                            flagothersolved = 0;
                        }
                    }
                }

                document.getElementById('hideMeRefuseFormv2').onclick = () => { //форма hide
                    if (document.getElementById('AF_Refuseformnew').style.display == '')
                        document.getElementById('AF_Refuseformnew').style.display = 'none'
                }

                document.getElementById('AF_Refuseformnew').ondblclick = function (a) { // скрытие окна отказа от помощи по двойному клику
                    if (checkelementtype(a)) {
                        document.getElementById('AF_Refuseformnew').style.display = 'none';
                    }
                }

                document.getElementById('refuseforminstr').onclick = function () {
                    window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-otkazotpom%E2%9D%8C%D0%9E%D1%82%D0%BA%D0%B0%D0%B7%D0%BE%D1%82%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8')
                }

                document.getElementById('refreshoptions').onclick = async function () {
                    objSelIssue.length = 1;
                    objSelSolution.length = 1;

                    document.getElementById('send2doc').textContent = 'Загрузка'

                    issuefromdoc = 'https://script.google.com/macros/s/AKfycbyBl2CvdFSi2IXYDTkCroJJjlP63NMBfSsp6TwXYYGfwct0YT1_gnTumsdFbcTpR7KksA/exec'
                    await fetch(issuefromdoc).then(r => r.json()).then(r => issuedata = r)
                    issuecontainer = issuedata.result;
                    console.log(issuedata.result) //получим список проблем

                    for (let i = 0; i < issuecontainer.length; i++) {
                        addOption(objSelIssue, `${issuecontainer[i][0]}`, `${issuecontainer[i][0]}`)
                    }

                    solutionfromdoc = 'https://script.google.com/macros/s/AKfycbxut3AuCkPNsK_sR7zxxF8B7xFelbTPnR_iEywL1qo0BXbKbLiBRilGuKFm2XnPcCNdHQ/exec'
                    await fetch(solutionfromdoc).then(r => r.json()).then(r => solutiondata = r)
                    solutioncontainer = solutiondata.result;
                    console.log(solutiondata.result) //получим список как решилось

                    for (let i = 0; i < solutioncontainer.length; i++) {
                        addOption(objSelSolution, `${solutioncontainer[i][0]}`, `${solutioncontainer[i][0]}`)
                    }

                    document.getElementById('send2doc').textContent = 'Отправить'

                }

                // end of it


                if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                    document.getElementById('chatlnk').value = "https://skyeng.autofaq.ai/logs/" + document.URL.split('/')[5]

                document.getElementById('refreshhashrefuseform').onclick = () => {
                    if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                        document.getElementById('chatlnk').value = "https://skyeng.autofaq.ai/logs/" + document.URL.split('/')[5]
                    else document.getElementById('chatlnk').value = ''
                }

                document.getElementById('clearrefuseform').onclick = () => {
                    document.getElementById('chatlnk').style.background = '';
                    document.getElementById('chatlnk').value = '';
                    document.getElementById('userissue').style.background = '';
                    document.getElementById('userissue').children[0].selected = true
                    document.getElementById('otherproblem').style.background = '';
                    document.getElementById('otherproblem').value = '';
                    document.getElementById('otherproblem').removeAttribute('class');
                    document.getElementById('otherproblem').classList.add('otherfieldoff')
                    document.getElementById('howissuesolverd').style.background = '';
                    document.getElementById('howissuesolverd').children[0].selected = true
                    document.getElementById('othersolved').style.background = '';
                    document.getElementById('othersolved').value = '';
                    document.getElementById('othersolved').removeAttribute('class');
                    document.getElementById('othersolved').classList.add('otherfieldoff')
                }

                let sendrefuseformbyenter = document.querySelector('#userissue'); //по Enter отправляет в форму отказа но еще тестится
                sendrefuseformbyenter.addEventListener('keydown', event => {
                    if (event.key === "Enter") {
                        document.querySelector('#send2doc').click()
                    }
                })

                let textrefuseformsolutionbyenter = document.querySelector('#howissuesolverd'); //по Enter отправляет в форму отказа но еще тестится
                textrefuseformsolutionbyenter.addEventListener('keydown', event => {
                    if (event.key === "Enter") {
                        document.querySelector('#send2doc').click()
                    }
                })

                document.getElementById('send2doc').onclick = () => {

                    let textclientsolution;
                    let textaskclient;
                    let otherproblemtext;
                    let othersolvedtext;
                    let body2;

                    let flagempty = 0;

                    if (document.getElementById('chatlnk').value.length < 3) {
                        document.getElementById('chatlnk').style.backgroundColor = 'Coral';
                        flagempty = 1;
                    } else {
                        document.getElementById('chatlnk').style.backgroundColor = '';
                    }

                    if (document.getElementById('userissue').children[0].selected == true) {
                        document.getElementById('userissue').style.backgroundColor = 'Coral';
                        flagempty = 1;
                    } else {
                        document.getElementById('userissue').style.backgroundColor = '';
                    }

                    if (!document.getElementById('otherproblem').disabled && document.getElementById('otherproblem').value.length < 3) {
                        document.getElementById('otherproblem').style.backgroundColor = 'Coral';
                        flagempty = 1;
                    } else {
                        document.getElementById('otherproblem').style.backgroundColor = '';
                    }

                    if (document.getElementById('howissuesolverd').children[0].selected == true) {
                        document.getElementById('howissuesolverd').style.backgroundColor = 'Coral';
                        flagempty = 1;
                    } else {
                        document.getElementById('howissuesolverd').style.backgroundColor = '';
                    }

                    if (!document.getElementById('othersolved').disabled && document.getElementById('othersolved').value.length < 3) {
                        document.getElementById('othersolved').style.backgroundColor = 'Coral';
                        flagempty = 1;
                    } else {
                        document.getElementById('othersolved').style.backgroundColor = '';
                    }

                    if (flagempty == 0) {
                        let chatlink = document.getElementById('chatlnk').value

                        for (let i = 0; i < document.getElementById('userissue').children.length; i++) {
                            if (document.getElementById('userissue').children[i].selected == true)
                                textaskclient = encodeURIComponent(document.getElementById('userissue').children[i].value)
                        }

                        for (let i = 0; i < document.getElementById('howissuesolverd').children.length; i++) {
                            if (document.getElementById('howissuesolverd').children[i].selected == true)
                                textclientsolution = encodeURIComponent(document.getElementById('howissuesolverd').children[i].value)
                        }

                        if (flagotherproblem == 0 && flagothersolved == 0) {

                            body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution


                        } else if (flagotherproblem == 1 && flagothersolved == 0) {

                            otherproblemtext = encodeURIComponent(document.getElementById('otherproblem').value)

                            body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution + '&entry.8206738=' + otherproblemtext
                            console.log(body2)

                            console.log('other problem =1  othersolve = 0')

                        } else if (flagotherproblem == 0 && flagothersolved == 1) {

                            othersolvedtext = encodeURIComponent(document.getElementById('othersolved').value)

                            body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution + '&entry.917004094=' + othersolvedtext
                            console.log(body2)

                            console.log('other problem =0  othersolve = 1')

                        } else if (flagotherproblem == 1 && flagothersolved == 1) {

                            otherproblemtext = encodeURIComponent(document.getElementById('otherproblem').value)
                            othersolvedtext = encodeURIComponent(document.getElementById('othersolved').value)

                            body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution + '&entry.917004094=' + othersolvedtext + '&entry.8206738=' + otherproblemtext
                            console.log(body2)

                        }

                        let options2 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body2,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options2)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/d/e/1FAIpQLScXLf0uRuESjzpu0gR-kE7T5LcCblOQtqzadtcwnTUb4_vpnQ/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        sendComment('Отправка в документ "Отказ от помощи" прошла успешно')
                        document.getElementById('send2doc').textContent = "Отправлено✅"

                        setTimeout(() => {
                            document.getElementById('send2doc').textContent = "Отправить"
                            document.getElementById('AF_Refuseformnew').style.display = 'none'
                        }, 3000)

                        document.getElementById('chatlnk').value = ''
                        document.getElementById('userissue').children[0].selected = true
                        document.getElementById('howissuesolverd').children[0].selected = true
                        document.getElementById('othersolved').classList.add('otherfieldoff')
                        document.getElementById('othersolved').classList.remove('otherfieldon')
                        document.getElementById('othersolved').setAttribute('disabled', 'disabled')
                        document.getElementById('otherproblem').classList.add('otherfieldoff')
                        document.getElementById('otherproblem').classList.remove('otherfieldon')
                        document.getElementById('otherproblem').setAttribute('disabled', 'disabled')
                        document.getElementById('otherproblem').value = ''
                        document.getElementById('othersolved').value = ''
                    }
                }
            }
        }
    }

}, 1000)

// блок работы с будильником
document.getElementById('reminderstatus').onclick = function () { // открывает настройки будильника
    if (document.getElementById('reminder_bar').style.display == '')
        document.getElementById('reminder_bar').style.display = 'none'
    else {
        document.getElementById('reminder_bar').style.display = ''
        document.getElementById('set_bar').style.display = 'none'
        document.getElementById('addTmp').style.display = 'none'
    }
}

if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp1') == null) { // если будильники не заданы статус отмечать такой
    document.getElementById('reminderstatus').textContent = "🔕";
}

document.getElementById('setreminder').onclick = function () {  // выставляем будильник 1
    document.getElementById('reminderstatus').textContent = "🔔";
    localStorage.setItem('setchas', setchas.value);
    if (setminuta.value == "00") {
        setminuta.value = 0;
    }
    localStorage.setItem('setminuta', setminuta.value);
    var timearr = new Date()
    var chronostamp = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
    localStorage.setItem('chronostamp', chronostamp);
    //		setchas.value = "";
    //		setminuta.value = "";
    alert("Будильник установлен на " + setchas.value + ":" + setminuta.value + ":" + "00");
    abortTimeOut = setTimeout(function () {
        setRemindAf('chronostamp')
    }, localStorage.getItem('chronostamp'));
}

document.getElementById('setreminder1').onclick = function () {  // выставляем будильник 2
    document.getElementById('reminderstatus').textContent = "🔔";
    localStorage.setItem('setchas1', setchas1.value);
    if (setminuta1.value == "00") {
        setminuta1.value = 0;
    }
    localStorage.setItem('setminuta1', setminuta1.value);
    var timearr1 = new Date()
    var chronostamp1 = (((localStorage.getItem('setchas1') - timearr1.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta1') - timearr1.getMinutes()) * 60) + (0 - timearr1.getSeconds())) * 1000;
    localStorage.setItem('chronostamp1', chronostamp1);
    //		setchas.value = "";
    //		setminuta.value = "";
    alert("Будильник установлен на " + setchas1.value + ":" + setminuta1.value + ":" + "00");
    abortTimeOut1 = setTimeout(function () {
        setRemindAf('chronostamp1')
    }, localStorage.getItem('chronostamp1'));
}

document.getElementById('clock_remin').ondblclick = function () {		// Удаление будильника 1
    if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
        clearTimeout(abortTimeOut)
        localStorage.removeItem('chronostamp')
        localStorage.removeItem('chronostamp2')
        setchas.value = ""
        setminuta.value = ""
        localStorage.removeItem('setchas');
        localStorage.removeItem('setminuta');
        alert("Будильник удален")
        document.getElementById('reminderstatus').textContent = "🔕";
    }
}

document.getElementById('clock_remin1').ondblclick = function () {		// Удаление будильника 2
    if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
        clearTimeout(abortTimeOut1)
        localStorage.removeItem('chronostamp1')
        localStorage.removeItem('chronostamp22')
        setchas1.value = ""
        setminuta1.value = ""
        localStorage.removeItem('setchas1');
        localStorage.removeItem('setminuta1');
        alert("Будильник удален")
        // document.getElementById('reminderstatus').textContent = "🔕";  //тут еще подумать логику если первый будильник тоже не выставлен и удален второй тогда да изменять иконку
    }
}

refreshTimerReminder(); //обновляет оставшееся время до будильника №1

setInterval(clock_on_javascript_1, 1000);
setInterval(clock_on_javascript_2, 1000);
setInterval(clock_on_javascript_3, 1000);

// setInterval(operstatusleftbar, 3000);

// конец блока работы с будильником

document.getElementById('hideMenuMain').onclick = function () { // кнопка hide на главном окне скрипта
    var elements = ['AF_helper', 'cstmTmplates', 'AF_Links', 'reminder_bar', 'AF_Stat', 'AF_LessonStatus', 'AF_Linksd'];
    elements.forEach(function (element) {
        document.getElementById(element).style.display = 'none';
    });
    document.getElementById('scriptBut').style.display = '';
}
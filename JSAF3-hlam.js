﻿let pldata;
let drevo;
let afopername;
let foundarr;
let flagsearch;
let operchatsdata;
let isChatOnOperator = false;
let flagusertype;
let flaggetlogginer;

function mystyles() {
    let mstl = document.createElement('style');
    document.body.append(mstl);
    var style = `
	button {
		background-color:#768d87;
		border-radius:5px;
		border:1px solid #566963;
		color:#ffffff;
		padding:2px 2px;
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
		#servDsk:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#buttonOpenForm:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#butMarks:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#suggestform:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#otkaz:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#butChatHistory:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#butLessonInfo:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#JiraOpenForm:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#smartroomform:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}	
		#butFrozeChat:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
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
	}`
    mstl.innerHTML = style;
}

var flagLangBut = 0
function move_again_AF() { //с АФ шняга там стили шмили скрипта отображение отправку сообщений

	    document.getElementById('otkaz').onclick = function() { // открыть форму Отказ от помощи
        if (document.getElementById('AF_Refuseformnew').style.display == '') {
            document.getElementById('AF_Refuseformnew').style.display = 'none'
            document.getElementById('idmymenu').style.display = 'none'
        } else {
            document.getElementById('AF_Refuseformnew').style.display = ''
            document.getElementById('idmymenu').style.display = 'none'

            let objSelIssue = document.getElementById("userissue");
            let objSelSolution = document.getElementById("howissuesolverd");

            function addOption(oListbox, text, value)  //функция добавления опции в список
            {
                var oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(text));
                oOption.setAttribute("value", value);
                oListbox.appendChild(oOption);
            }

            let issuefromdoc;
            let issuecontainer;
            let solutionfromdoc;
            let solutioncontainer;

            async function getissueandsolution() {
                if (objSelIssue.children.length == 1 && objSelSolution.children.length == 1) {
                    document.getElementById('send2doc').innerText = 'Загрузка'

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

                    document.getElementById('send2doc').innerText = 'Отправить'
                } else {
                    document.getElementById('send2doc').innerText = 'Отправить'
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

            document.getElementById('refuseforminstr').onclick = function () {
                window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-otkazotpom%E2%9D%8C%D0%9E%D1%82%D0%BA%D0%B0%D0%B7%D0%BE%D1%82%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8')
            }

            document.getElementById('refreshoptions').onclick = async function () {
                objSelIssue.length = 1;
                objSelSolution.length = 1;

                document.getElementById('send2doc').innerText = 'Загрузка'

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

                document.getElementById('send2doc').innerText = 'Отправить'

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
                    document.getElementById('send2doc').innerText = "Отправлено✅"

                    setTimeout(() => {
                        document.getElementById('send2doc').innerText = "Отправить"
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

    if (window.location.href.indexOf('autofaq') === -1) {
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

    document.getElementById('savesettingstofile').onclick = function () {  // по клику на кнопку Сохранить настройки сохраянется на жесткомм диске файл с содержимым localstorage
        getLocalstorageToFile('settings-af')
    }
	
	document.getElementById('AF_Refuseformnew').ondblclick = function (a) { // скрытие окна отказа от помощи по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_Refuseformnew').style.display = 'none'; }
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

    setInterval(clock_on_javascript_1, 1000);
    setInterval(clock_on_javascript_2, 1000);
    setInterval(clock_on_javascript_3, 1000);

    function clock_on_javascript_1() { //таймер обычного отсчета текущего времени
        var data = new Date();
        hours = data.getHours();
        if (hours < 10) { hours = "0" + hours; }
        minutes = data.getMinutes();
        if (minutes < 10) { minutes = "0" + minutes; }
        seconds = data.getSeconds();
        if (seconds < 10) { seconds = "0" + seconds; }
        time = hours + " : " + minutes + " : " + seconds;
        document.getElementById("clock_js").innerHTML = time;
    }

    function clock_on_javascript_2() { //таймер отсчета до срабатывания будильника #1
        var data = new Date();
        hours = data.getHours();
        if (hours < 10) { hours = "0" + hours; }
        minutes = data.getMinutes();
        if (minutes < 10) { minutes = "0" + minutes; }
        seconds = data.getSeconds();
        if (seconds < 10) { seconds = "0" + seconds; }
        var summin = JSON.parse(localStorage.getItem('setminuta')) + 60;
        if (localStorage.getItem('chronostamp') === null) {
            time = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) == 0) && ((localStorage.getItem('setminuta') > minutes))) {
            time = "00" + " : " + (localStorage.getItem('setminuta') - minutes - 1) + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) > 1) && ((localStorage.getItem('setminuta') - minutes) == 0)) {
            time = (localStorage.getItem('setchas') - hours) + " : " + "00" + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) >= 1) && localStorage.getItem('setminuta') < minutes) {
            time = ((localStorage.getItem('setchas') - hours) - 1) + " : " + (summin - minutes) + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) > 0) && localStorage.getItem('setminuta') > minutes) {
            time = localStorage.getItem('setchas') - hours + " : " + (localStorage.getItem('setminuta') - minutes - 1) + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) == 1) && (localStorage.getItem('setminuta') - minutes) == 0) {
            time = localStorage.getItem('setchas') - hours + " : " + "00" + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else {
            time = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin").innerHTML = time;
        }
    }

    function clock_on_javascript_3() { //таймер отсчета до срабатывания будильника #2
        var data1 = new Date();
        hours1 = data1.getHours();
        if (hours1 < 10) { hours1 = "0" + hours1; }
        minutes1 = data1.getMinutes();
        if (minutes1 < 10) { minutes1 = "0" + minutes1; }
        seconds1 = data1.getSeconds();
        if (seconds1 < 10) { seconds1 = "0" + seconds1; }
        var summin1 = JSON.parse(localStorage.getItem('setminuta1')) + 60;
        if (localStorage.getItem('chronostamp1') === null) {
            time1 = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) == 0) && ((localStorage.getItem('setminuta1') > minutes1))) {
            time1 = "00" + " : " + (localStorage.getItem('setminuta1') - minutes1 - 1) + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) > 1) && ((localStorage.getItem('setminuta1') - minutes1) == 0)) {
            time1 = (localStorage.getItem('setchas1') - hours1) + " : " + "00" + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) >= 1) && localStorage.getItem('setminuta1') < minutes1) {
            time1 = ((localStorage.getItem('setchas1') - hours1) - 1) + " : " + (summin1 - minutes1) + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) > 0) && localStorage.getItem('setminuta1') > minutes1) {
            time1 = localStorage.getItem('setchas1') - hours1 + " : " + (localStorage.getItem('setminuta1') - minutes1 - 1) + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) == 1) && (localStorage.getItem('setminuta1') - minutes1) == 0) {
            time1 = localStorage.getItem('setchas1') - hours1 + " : " + "00" + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else {
            time1 = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin1").innerHTML = time1;
        }
    }

    var abortTimeOut = ''								// перменная для отмены будильника
    var abortTimeOut1 = ''								// перменная для отмены будильника
    if (localStorage.getItem('chronostamp') == null) {
        document.getElementById('reminderstatus').textContent = "🔕";
    }

    document.getElementById('setreminder').onclick = function () {  // выставляем будильник
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
        abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp'));
    }

    document.getElementById('setreminder1').onclick = function () {  // выставляем будильник
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
        abortTimeOut1 = setTimeout(setRemindAf1, localStorage.getItem('chronostamp1'));
    }

    function refreshTimerReminder() { // обновляет оставшееся время будильника №1
        if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
            document.getElementById('reminderstatus').textContent = "🔔";
            setchas.value = localStorage.getItem('setchas');
            setminuta.value = localStorage.getItem('setminuta');
            var timearr = new Date()
            var chronostamp2 = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
            localStorage.setItem('chronostamp2', chronostamp2);
            abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp2'));
        } else if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp') == null) {
            clearTimeout(abortTimeOut);
            document.getElementById('reminderstatus').textContent = "🔕";
        } else if (localStorage.getItem('chronostamp1') !== null) {
            document.getElementById('reminderstatus').textContent = "🔔";
        }
    }

    function refreshTimerReminder1() { // обновляет оставшееся время будильника №2
        if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
            document.getElementById('reminderstatus').textContent = "🔔";
            setchas1.value = localStorage.getItem('setchas1');
            setminuta1.value = localStorage.getItem('setminuta1');
            var timearr1 = new Date()
            var chronostamp22 = (((localStorage.getItem('setchas1') - timearr1.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta1') - timearr1.getMinutes()) * 60) + (0 - timearr1.getSeconds())) * 1000;
            localStorage.setItem('chronostamp22', chronostamp22);
            abortTimeOut1 = setTimeout(setRemindAf1, localStorage.getItem('chronostamp22'));
        } else if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp') == null) {
            clearTimeout(abortTimeOut1);
            document.getElementById('reminderstatus').textContent = "🔕";
        } else if (localStorage.getItem('chronostamp') !== null) {
            document.getElementById('reminderstatus').textContent = "🔔";
        }
    }

    document.getElementById('clock_remin').ondblclick = function () {		// Удаление будильника
        if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
            clearTimeout(abortTimeOut)
            localStorage.removeItem('chronostamp')
            localStorage.removeItem('chronostamp2')
            setchas.value = ""
            setminuta.value = ""
            alert("Будильник удален")
            document.getElementById('reminderstatus').textContent = "🔕";
        }
    }

    document.getElementById('clock_remin1').ondblclick = function () {		// Удаление будильника
        if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
            clearTimeout(abortTimeOut1)
            localStorage.removeItem('chronostamp1')
            localStorage.removeItem('chronostamp22')
            setchas1.value = ""
            setminuta1.value = ""
            alert("Будильник удален")
            // document.getElementById('reminderstatus').textContent = "🔕";  //тут еще подумать логику если первый будильник тоже не выставлен и удален второй тогда да изменять иконку
        }
    }

    refreshTimerReminder(); //обновляет оставшееся время до будильника №1
    refreshTimerReminder1(); //обновляет оставшееся время до будильника №2

    function setRemindAf() { //функция  при наступлении времени перевода в статус занят Будильник №1
        fetch("https://skyeng.autofaq.ai/api/reason8/operator/status", {
            "headers": {
                "content-type": "application/json",
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"command\":\"DO_SET_OPERATOR_STATUS\",\"status\":\"Busy\",\"source\":\"Operator\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        alert("Время ставить занят! :D");
        localStorage.removeItem('chronostamp');

        if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔕";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔔";

        setchas.value = "";
        setminuta.value = "";
    }

    function setRemindAf1() { //функция  при наступлении времени перевода в статус занят Будильник №2
        fetch("https://skyeng.autofaq.ai/api/reason8/operator/status", {
            "headers": {
                "content-type": "application/json",
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"command\":\"DO_SET_OPERATOR_STATUS\",\"status\":\"Busy\",\"source\":\"Operator\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        alert("Время ставить занят! :D");
        localStorage.removeItem('chronostamp1');

        if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔕";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔔";

        setchas1.value = "";
        setminuta1.value = "";
    }


    document.getElementById('setting').onclick = function () { // открывает параметры
        if (document.getElementById('set_bar').style.display == '')
            document.getElementById('set_bar').style.display = 'none'
        else {
            document.getElementById('set_bar').style.display = ''
            document.getElementById('reminder_bar').style.display = 'none'
            document.getElementById('addTmp').style.display = 'none'

            let objSoundList = document.getElementById('soundlistaddr')
            let sondsfromdoc;
            let soundsconteiner;

                function addOption(oListbox, text, value)  //функция добавления опции в список
                {
                    var oOption = document.createElement("option");
                    oOption.appendChild(document.createTextNode(text));
                    oOption.setAttribute("value", value);

                    oListbox.appendChild(oOption);
                }

            async function getsoundsfromdoc() { // загрузка списка звуков из файла
                sondsfromdoc = 'https://script.google.com/macros/s/AKfycbyD1l-oLcE-BBmyN1QmcHKoi0rwVfCwWjE6cfTqw6Y9QQGAju-9inKbwSOfHCI6qBEjtg/exec'
                await fetch(sondsfromdoc).then(r => r.json()).then(r => soudsdata = r)
                    soundsconteiner = soudsdata.result;
                    console.log(soudsdata.result) //получим список звуков
                for (j = 0; j < soundsconteiner.length; j++) {
                    if (soundsconteiner[j][0] != '') {
                        addOption(objSoundList, `${soundsconteiner[j][0]}`, `${soundsconteiner[j][1]}`)
                    }
                }
                for (let i = 0; i < objSoundList.length; i++) { // проверяем какой звук выбран
                if (objSoundList.children[i].value == localStorage.getItem('sound_str')) {
                    objSoundList.children[i].selected = true;
                }
            }
            if (objSoundList.children[0].selected) {
                objSoundList.children[1].selected = true
                document.getElementById('sound_adr').style.display = ''
                document.getElementById('sound_save').style.display = ''
                document.getElementById('sound_adr').value = localStorage.getItem('sound_str')
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

            //


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
                    }
                }
            }
        }
    }

    document.getElementById('sound_save').onclick = function () { //функция сохранения адреса звукового уведомления о входящем чате в АФ
        localStorage.setItem('sound_str', document.getElementById('sound_adr').value);
        if (document.getElementById('sound_adr').value == "")
            audio = new Audio("https://dimentorexpo.github.io/Sounds/msg.mp3");
        else {
            audio = new Audio(document.getElementById('sound_adr').value);
            document.getElementById('sound_save').innerText = "✅";
            setTimeout(function () {
                document.getElementById('sound_save').innerText = "💾";
            }, 3000);
        }
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

    document.getElementById('snd').onclick = function () { //функция отправки сообщений в чат или заметки
        document.getElementById('snd').setAttribute('disabled', 'disabled')
        setTimeout(function () { document.getElementById('snd').removeAttribute('disabled') }, 500)
        if (document.getElementById('msg').innerHTML == "Чат") {
            if (template_flag == 1) {
                if (template_flag2 == 1)
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

        if (document.getElementById('phone_tr') != undefined)
            document.getElementById('phone_tr').value = ""
        if (document.getElementById('email_tr') != undefined)
            document.getElementById('email_tr').value = ""
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

    let button1 = document.createElement('div');
    button1.id = 'scriptBut';
    button1.innerHTML = "Скрипт";
    button1.style.marginRight = "15px";
    button1.style.display = 'none'
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
    btnAdd.insertBefore(button1, btnAdd.children[0])

    function screenshots() { //просмотр и трансформация скриншотов в активном чате
        if (document.getElementsByClassName('expert-chat-display-inner')[0] != undefined) {
            for (i = 0; document.getElementsByClassName('expert-chat-display-inner')[0].children[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-chat-display-inner')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
                    var div = document.getElementsByClassName('expert-chat-display-inner')[0].children[i]
                    for (let j = 0; j < div.querySelectorAll('a').length; j++) {
                        if (div.querySelectorAll('a')[j].hasAttribute('data-lightbox') == false) {
                            var img = document.createElement('img')
                            img.style.width = '100px'
                            var alink = document.createElement('a')
                            alink.setAttribute('data-lightbox', 'imgs');
                            alink.append(img)
                            img.src = div.querySelectorAll('a')[j].href
                            img.alt = 'Изображение'
                            alink.href = img.src;
                            div.querySelectorAll('a')[j].replaceWith(alink)
                        }
                    }
                }
            }
        }
    }

    screenshots()
    setInterval(screenshots, 5000)

    function screenshots2() { //просмотр и трансформация скриншотов в архиве
        if (document.getElementsByClassName('chat-messages')[0] != undefined) {
            for (i = 0; document.getElementsByClassName('chat-messages')[0].children[i] != undefined; i++) {
                if (document.getElementsByClassName('chat-messages')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
                    var div = document.getElementsByClassName('chat-messages')[0].children[i]
                    for (let j = 0; j < div.querySelectorAll('a').length; j++) {
                        if (div.querySelectorAll('a')[j].hasAttribute('data-lightbox') == false) {
                            var img = document.createElement('img')
                            img.style.width = '100px'
                            var alink = document.createElement('a')
                            alink.setAttribute('data-lightbox', 'imgs');
                            alink.append(img)
                            img.src = div.querySelectorAll('a')[j].href
                            img.alt = 'Изображение'
                            alink.href = img.src;
                            div.querySelectorAll('a')[j].replaceWith(alink)
                        }
                    }
                }
            }
        }
    }

    screenshots2()
    setInterval(screenshots2, 5000)

    addInfoUser.style.textAlign = "center"
    addInfoUser.style.color = "white"
    addInfoUser.style = "color: white; text-align: center; cursor: -webkit-grab;"
    loginer = document.getElementById('testUsers')
    loginer.appendChild(addInfoUser)

    var listenerloginer = function (e, a) {
        loginer.style.left = Number(e.clientX - myX3) + "px";
        loginer.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winTop3', String(Number(e.clientY - myY3)));
        localStorage.setItem('winLeft3', String(Number(e.clientX - myX3)));
    };
    loginer.onmousedown = function (a) {
        if (checkelementtype(a)) {
            window.myX3 = a.layerX;
            window.myY3 = a.layerY;
            document.addEventListener('mousemove', listenerloginer);
        }
    }
    loginer.onmouseup = function () { document.removeEventListener('mousemove', listenerloginer); }

    user = "student"

    if (localStorage.getItem('msg') != null) {
        document.getElementById('msg').innerHTML = localStorage.getItem('msg')
    }
    if (localStorage.getItem('msg1') != null) {
        document.getElementById('msg1').innerHTML = localStorage.getItem('msg1')
    }

    getText()
}

 document.getElementById('hideMeRefuseFormv2').onclick = () => { //форма hide
        if (document.getElementById('AF_Refuseformnew').style.display == '')
            document.getElementById('AF_Refuseformnew').style.display = 'none'
    }
	
function pageClick(pageId) { // по клику переключает страницы с шаблонами
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    for (i = 0; i < b.childElementCount; i++) {
        try {
            b.children[1].children[i].style.backgroundColor = '#768d87'
            b.children[1].children[i].style.borderTop = "0px";
            document.getElementById(i + "page").style.display = 'none'
        } catch (e) { }
    }
    document.getElementById(pageId).style.backgroundColor = 'green'
    document.getElementById(pageId).style.borderTop = "4px solid orange";
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
    phone = ""
    textFromTable = textFromTable.split('(phone)')
    if (textFromTable.length > 1) {
        if (document.getElementById('phone_tr').value == "")
            phone = document.getElementById('phone_tr').placeholder
        else
            phone = document.getElementById('phone_tr').value
        if (phone == "Телефон") {
            document.getElementById('inp').value = "Введите номер телефона"
            return
        }
    }
    textFromTable = textFromTable.join(phone)

    email = ""
    textFromTable = textFromTable.split('(email)')
    if (textFromTable.length > 1) {
        if (document.getElementById('email_tr').value == "")
            email = document.getElementById('email_tr').placeholder
        else
            email = document.getElementById('email_tr').value
        if (email == "Почта") {
            document.getElementById('inp').value = "Введите почту"
            return
        }
    }
    textFromTable = textFromTable.join(email)

    name = ""
    textFromTable = textFromTable.split('(name)')
    if (document.getElementsByClassName('expert-user_details-name').length != 0) {
        a = document.getElementsByClassName('expert-user_details-name')[0].innerText
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
        a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if (document.getElementById('languageAF').innerHTML == "Русский") {
            if (drevo != null && drevo != undefined && drevo[0] == 'Здравствуйте! Я виртуальный помощник Skyeng' && document.getElementById('msg1').innerHTML == "Доработать") {
                console.log("Проверка, что бот писал Здравствуйте пройдена!", drevo[0])
                txt = "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            } else if (cyrillicPattern.test(a[0]) && a[0] != "Неизвестный" && document.getElementById('msg1').innerHTML == "Доработать")
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

    msgFromTable(butName)

    // start of counter of pressed key script то есть при нажатии на кнопку с шаблоном передает в гугл таблицу ин6формацию какая кнопка была нажата и там уже др скрипты считают сколько  раз и сортируют
}

function servFromDoc(butName) { // отправка комента и сообщение со стораницы серверные
    but = butName
    msgFromTable(but) // вызов функции отправки сообщения
    if (document.getElementById('avariyalink').value !== null) // проверка есть ли значение в поле ссылки
        sendComment(document.getElementById('avariyalink').value); // вызов функции отправки комента
}

var bool = 0;
var table

function getText() { //получить текст
    var app = localStorage.getItem('scriptAdr'),
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status == 200) {
            try {
                var r = JSON.parse(xhr.responseText),
                    result = r["result"];

                table = result;
                console.log('Обновили шаблоны')
                refreshTemplates()

            } catch (e) { console.log(e) }
        }
    }
    xhr.send()
}

function refreshTemplates() { // функция обновляет шаблоны которые загружены были с гугл таблицы и сформированы их в table
    setInterval(function () {
        if (document.getElementsByClassName('expert-user_details-list')[0] != undefined) {
            if (document.getElementById('phone_tr') != undefined) {
                phone = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText
                if (phone == "-") {
                    phone = ""
                    document.getElementById('phone_tr').placeholder = "Телефон"
                } else
                    document.getElementById('phone_tr').placeholder = phone
            }
            if (document.getElementById('email_tr') != undefined) {
                email = document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText
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

                if (pageType == "Серверные") { // дорисоква инпута для ссылки на серверные
                    var newDiv = document.createElement('div')
                    newDiv.id = countOfPages + "page_" + countOfStr + "str"
                    newDiv.style.margin = "5px"

                    var newInputAlink = document.createElement('input')
                    newInputAlink.id = 'avariyalink'
                    newInputAlink.placeholder = 'Ссылка на трэд или Jira северных'
                    newInputAlink.autocomplete = 'off'
                    newInputAlink.type = 'text'
                    newInputAlink.style = 'text-align: center; width: 300px; color: black; margin-left: 20px'

                    newDiv.appendChild(newInputAlink)

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
                        newString.innerText = c[0]
                        for (j = 0; j < c[1]; j++) {
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
                        if (newBut.innerText == 'Урок NS')
                            newBut.id = "NS"
                        if (newBut.innerText == 'ус+брауз (У)')
                            newBut.innerText = "ус+брауз"
                        if (newBut.innerText == 'ус+брауз (П)')
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
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Серверные': // обработка нажатия на кнопку на странице серверные
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'servFromDoc(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'ТемыМоб':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темыadd':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
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

function newTag(valueId) { // функция выставления тега чата
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/logs') !== -1)
        chatId = document.location.pathname.split('/')[2]
    else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
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

var templatesAF = []


async function loadTemplates(template, word) { //загрузка шаблонов с дока
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

idk = 0
var tmrs = []
function addTimer() { //функция добавления таймера при ответе оператора
    tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
    if (tm.childNodes[0].childNodes[2] === undefined) {
        let serv = document.createElement('div')
        let serv2 = document.createElement('div')
        tm.childNodes[0].appendChild(serv)
        tm.childNodes[1].appendChild(serv2)
        tm.childNodes[0].childNodes[2].innerHTML = localStorage.getItem('aclstime') + ":00"
        let d = new Date()
        tmrs[idk] = [localStorage.getItem('aclstime') + ":00", tm.childNodes[1].childNodes[0].innerText, 1, number(d), ""]
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
                btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerText = tmrs[i][4]
                var cT = new Date();
                var curT1 = tmrs[i][3]
                var curT2 = Number(cT);
                var curT3 = ((localStorage.getItem('aclstime') - 2) * 60) - Math.floor((curT2 - curT1) / 1000); // таймер за 2 минуты окрашивания автозакрытия
                if (curT3 < 0)
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FF47CA" // цвет окрашивания автозакрытия  сейчас сиреневый
            }
        }
        j++
    }
	} catch (e) { console.error(e, e.stack); }
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

flag = 0

var timeStart = new Date()
var studentIdSearch2 = 0
var studentIdSearch = 0
let soudflag = 0
let soudintervalset
function startTimer() {
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

    if (document.getElementById('audioswitcher').checked == true)
        if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
			if (document.getElementsByClassName('expert-sidebar-button')[0] != undefined) {
				txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
				if (txt[14] > 0) {
					if (soudflag == 0) {
						audio.play()
						soudintervalset = setInterval(() => { audio.play() }, localStorage.getItem('splinter') * 1000)
						soudflag = 1
					}
				} else {
					soudflag = 0
					clearInterval(soudintervalset)
				}
			}
        }


    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
        vertical = user = ""
        nextClassMode = nextClassstudentId = ""
        nextClassModeId = ""
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "teacherVertical")
                vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "userType")
                user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText

            btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

            name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML")
                for (k = 0; k < idk; k++) {
                    if (tmrs[k][1] == name) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт вводный урок")
                            tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                        else
                            tmrs[k][4] = ""
                    }
                }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-mode") {
                nextClassMode = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                nextClassModeId = i
            }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
                nextClassstudentId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
        }
        if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv) { // поиск группы, с которой  сейчас идет занятие
            if (nextClassMode == 'group') {
                nextClassstudentId = nextClassstudentId.split(',')[0]
                document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group '
                function checkForLink() {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent == 'group ')
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
                    if (res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
                        studentIdSearch2++
                        document.getElementById('responseTextarea1').removeAttribute('groupLessons1')
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
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
                    button.href = 'https://learning-groups-storage.skyeng.ru/group/' + groupId + '?cp=(section:participants)'
                    button.target = '_blank'
                    button.textContent = groupId
                    button.style.marginRight = '15px'

                    document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
                    document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
                }
            }
        }

        addInfoUser.innerHTML = vertical + " + " + user
        if (document.getElementById('NS') != undefined) {
            if (vertical == "Math" || "math_flow") {
                //document.getElementById('math').style.backgroundColor = "green"
                document.getElementById('NS').style.backgroundColor = "#768d87"
            } else {
                document.getElementById('NS').style.backgroundColor = "green"
                //document.getElementById('math').style.backgroundColor = "#768d87"
            }
        }

        if (document.getElementById('NS') != undefined) {
            if (user == "student") {
                //document.getElementById('math').style.display =
                document.getElementById('NS').style.display = "none"
            } else {
                //document.getElementById('math').style.display =
                document.getElementById('NS').style.display = ""
            }
        }
        if (user == "teacher") {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.indexOf("%") === -1) {
                        id = Number.parseInt(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText)
                        document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText += " % 11 = " + (id % 11)
                    }
                    break;
                }
            }
        }
    }

    if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv) {
        if (document.getElementsByClassName('expert-user_details-list').length != 0) {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    btn.appendChild(infouserbut)
                    btn.appendChild(buttonservstud)
                    btn.appendChild(buttonhistory)
                    btn.appendChild(marksstata)
                    btn.appendChild(trshotmain)
                    if (typeof buttonmobpas == 'object')
                        btn.appendChild(buttonmobpas)
                }

                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    btn.appendChild(nextstuduserbut)
                    btn.appendChild(buttonserv)
                    btn.appendChild(buttonnextstudentid)
                    btn.appendChild(trshootnextuser)
                }

                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    btn.appendChild(nextteachuserbut)
                    btn.appendChild(buttonservteach)
                    btn.appendChild(buttonnextteacherid)
                    btn.appendChild(trshootnextuser)
                }

            }
        }

        if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
            if (document.getElementsByClassName('expert-user_details-list')[1].children[0] != undefined) {
                if (document.getElementsByClassName('expert-user_details-list')[1].children[0].classList != "") {
                    let c = document.createElement('div')
                    let a = document.createElement('span')
                    a.textContent = 'Найти группу'
                    a.style.marginRight = '10px'
                    function generateGroupLink() {
                        let res = document.getElementById('responseTextarea1').getAttribute('groupLessons')
                        if (res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
                            studentIdSearch++
                            for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
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
                    a.onclick = function () {
                        this.textContent = ''
                        this.parentElement.children[1].textContent = ''
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "userType") {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == 'student') {
                                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                            studentIdSearch = 0
                                            document.getElementById('responseTextarea1').value = '{}'
                                            document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                                            document.getElementById('responseTextarea3').value = 'groupLessons'
                                            document.getElementById('sendResponse').click()
                                            setTimeout(generateGroupLink, 1000)
                                        }
                                    }
                                } else {
                                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
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

                    let copyCrmFromName = document.createElement('span')
                    copyCrmFromName.textContent = ' 💾'
                    copyCrmFromName.style.cursor = "pointer"
                    document.getElementsByClassName('expert-user_details-name')[0].append(copyCrmFromName)
                    copyCrmFromName.onclick = function () {
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                let getidafuser = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
                                copyToClipboard1("https://crm2.skyeng.ru/persons/" + getidafuser)
                            }
                        }
                    }

                    let userTypeName = document.createElement('span')
                    userTypeName.id = "userTypeId"
                    document.getElementsByClassName('expert-user_details-name')[0].appendChild(userTypeName)
                    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "teacher") {
                            document.getElementById('userTypeId').innerText = "(П)"
                            document.getElementById('userTypeId').style.color = "#1E90FF"
                        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "student") {
                            document.getElementById('userTypeId').innerText = "(У)"
                            document.getElementById('userTypeId').style.color = "#DC143C"
                        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "parent") {
                            document.getElementById('userTypeId').innerText = "(РУ)"
                            document.getElementById('userTypeId').style.color = "#DC143C"
                        }
                    }

                    //добавил окраску бренда skyeng
                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-dt').length; i++) {
                        if (document.getElementsByClassName('expert-user_details-dt')[i].innerText == "brand") {
                            for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
                                if (document.getElementsByTagName('p')[i].innerText == "skyeng")
                                    document.getElementsByTagName('p')[i].style.background = "#00AEFA";
                                else if (document.getElementsByTagName('p')[i].innerText == "skysmart")
                                    document.getElementsByTagName('p')[i].style.background = "#2E8B57";
                                else if (document.getElementsByTagName('p')[i].innerText == 'идёт урок')
                                    document.getElementsByTagName('p')[i].style.background = "#FF0000";
                            }
                        }

                    }

                    c.append(a)

                    document.getElementsByClassName('expert-user_details-list')[1].prepend(c)
                }
            }
        }
    }

    if ((localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv) && document.getElementById('continue_chat_button') == null && document.getElementsByClassName('expert-user_info_panel-footer-inner')[0] != undefined) {
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
    if (document.URL.split('/')[2] == 'skyeng.autofaq.ai' && document.URL.length > 43 && document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined && !document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].classList.contains("selchatact"))
        document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].classList.toggle('selchatact')
}

setInterval(setactivechatstyle, 1000)

function fillchatbox() { //функция наполнения элемента, где выводится история чатов

    document.getElementById('infofield').innerHTML = ''

    let timearr = [];
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    let timearr2 = [];
    let options2 = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let temppics = [];
    let testarray = [];
    let brarray = [];
    let restul;

    // след 2 строки - скрипт заполняет значения уже при открытии самого чата по его хешу или при клике на чат из списка в истории
    if (Object.entries(convdata.channelUser.payload) == '' && convdata.channelUser.channelTpe == 'Telegram')
        document.getElementById('placeusid').innerText = "Telegram";
    else if (Object.entries(convdata.channelUser.payload) != '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe != 'Widget' && convdata.channelUser.channelTpe != 'WhatsApp')
        document.getElementById('placeusid').innerText = convdata.channelUser.id;
    else if (Object.entries(convdata.channelUser.payload) == '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe != 'WhatsApp' && convdata.channelUser.channelTpe == 'Widget')
        document.getElementById('placeusid').innerText = "Widget";
    else if (Object.entries(convdata.channelUser.payload) == '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe == 'WhatsApp')
        document.getElementById('placeusid').innerText = "WhatsApp";
    else if (Object.entries(convdata.channelUser.payload) != '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe == 'Widget' && convdata.channelUser.payload.id != undefined)
        document.getElementById('placeusid').innerText = convdata.channelUser.payload.id;
    else document.getElementById('placeusid').innerText = "Widget";

    document.getElementById('placechatid').innerText = convdata.id;
    document.getElementById('somechatinfo').style.display = '';
    document.getElementById('bottommenuchhis').style.display = '';
    for (let i = 0; i < convdata.messages.length; i++) {
        timearr.push(new Date(convdata.messages[i].ts).toLocaleDateString('ru-RU', options))
        timearr2.push(new Date(convdata.messages[i].ts).toLocaleTimeString('ru-RU', options2))
        switch (convdata.messages[i].tpe) {
            case "Question":
                if (convdata.messages[i].click == undefined) {

                    testarray = convdata.messages[i].txt.match(/<p>(.*?)<\/p>/gm);

                    if (testarray == null) {
                        brarray = [];
                        if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) == null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) == null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) == null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else brarray = null;
                    }

                    convdata.channelUser.fullName == undefined ? convdata.channelUser.fullName = "Widget" : convdata.channelUser.fullName = convdata.channelUser.fullName

                    if (testarray != null) {
                        temppics = [];

                        for (let i = 0; i < testarray.length; i++) {
                            if (testarray[i].match(/https:\/\/vimbox-resource.*jpg/gm) != null)
                                temppics.push(testarray[i].match(/https:\/\/vimbox-resource.*jpg/gm)[0])
                            else if (testarray[i].match(/https:\/\/vimbox-resource.*png/gm) != null)
                                temppics.push(testarray[i].match(/https:\/\/vimbox-resource.*png/gm)[0])
                            else if (testarray[i].match(/https:\/\/vimbox-resource.*jpeg/gm) != null)
                                temppics.push(testarray[i].match(/https:\/\/vimbox-resource.*jpeg/gm)[0])
                        }

                        if (temppics.length == 1) {
                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt.replace(convdata.messages[i].txt.match(/<p>(.*?)<\/p>/gm)[0], `<a href="${temppics[0]}" data-lightbox="pictures"><img src="${temppics[0]}" class="img-chat-history" alt="Изображение"></img></a>`) + '</a>' + '</div>' + '</div>'

                        } else if (temppics.length > 1) {

                            restul = convdata.messages[i].txt;
                            for (let j = 0; j < temppics.length; j++) {
                                restul = restul.replace(convdata.messages[i].txt.match(/<p>(.*?)<\/p>/gm)[j], `<a href="${temppics[j]}" data-lightbox="pictures"><img src="${temppics[j]}" class="img-chat-history" alt="Изображение"></img></a>`)

                            }

                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + restul + '</div>' + '</div>'
                        } else if (temppics.length == 0) {
                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                        }
                    } else if (brarray != null) {

                        if (brarray.length == 1)
                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt.replace(convdata.messages[i].txt, `<img src="${brarray[0]}" class="img-chat-history"></img>`) + '</div>' + '</div>'

                    } else {
                        document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                    }

                } else {
                    document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].click.clickLabel + '</div>' + '</div>'
                }
                break;

            case "Event":
                let eventmsg;

                if (convdata.messages[i].eventTpe == 'NewConversation')
                    eventmsg = 'Начат новый диалог'
                else if (convdata.messages[i].eventTpe == 'RunScenario')
                    eventmsg = 'Сценарий запущен'
                else if (convdata.messages[i].eventTpe == 'FirstTimeInQueue')
                    eventmsg = 'Диалог отправлен в очередь'
                else if (convdata.messages[i].eventTpe == 'RunIntegration')
                    eventmsg = 'Запущена интеграция ' + convdata.messages[i].payload.name
                else if (convdata.messages[i].eventTpe == 'FinishIntegration')
                    eventmsg = 'Интеграция успешно отработала'

                if (convdata.messages[i].eventTpe != 'AssignToOperator' && convdata.messages[i].eventTpe != 'ReturnToQueue' && convdata.messages[i].eventTpe != 'CloseConversation' && convdata.messages[i].eventTpe != 'CreatedByOperator') {
                    document.getElementById('infofield').innerHTML += '<div class="event-container">' + eventmsg + '<span class="event-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'AssignToOperator' && convdata.messages[i].payload.status == 'OnOperator' && convdata.messages[i].payload.oid != undefined) {
                    let operid = convdata.messages[i].payload.oid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator != undefined && i.operator.id == operid))
                    if (opername != '') {
                        document.getElementById('infofield').innerHTML += '<div class="event-container">' + 'Диалог назначен на ' + opername[0].operator.fullName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    } else document.getElementById('infofield').innerHTML += '<div class="event-container">' + 'Диалог назначен на оператора' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'AssignToOperator' && convdata.messages[i].payload.status == 'AssignedToOperator' && convdata.messages[i].payload.oid != undefined) {
                    let operid = convdata.messages[i].payload.oid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    if (opername != '') {
                        document.getElementById('infofield').innerHTML += '<div class="event-container">' + opername[0].operator.fullName + ' взял(а) диалог в работу' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    } else {
                        document.getElementById('infofield').innerHTML += '<div class="event-container">' + 'Оператор взял(а) диалог в работу' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    }
                } else if (convdata.messages[i].eventTpe == 'ReturnToQueue' && convdata.messages[i].payload.sender != undefined && convdata.messages[i].payload.sender != 'timer') {
                    let operid = convdata.messages[i].payload.sender;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    if (opername != '') {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + opername[0].operator.fullName + ' вернул(а) диалог в очередь с тематикой ' + '<br>' + convdata.messages[i].payload.afsName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    } else {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Оператор вернул(а) диалог в очередь с тематикой ' + '<br>' + convdata.messages[i].payload.afsName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    }
                } else if (convdata.messages[i].eventTpe == 'ReturnToQueue' && convdata.messages[i].payload.sender == undefined) {
                    let operid = convdata.messages[i].payload.prevOid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    if (opername != '') {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог вернулся в общую очередь от ' + opername[0].operator.fullName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    } else {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог вернулся в общую очередь от оператора' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    }
                } else if (convdata.messages[i].eventTpe == 'ReturnToQueue' && convdata.messages[i].payload.sender != undefined && convdata.messages[i].payload.sender == 'timer') {
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог автоматически возвращен в очередь по отсутствию активности оператора' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CloseConversation' && convdata.messages[i].payload.status != 'ClosedByBot' && convdata.messages[i].payload.sender == 'userAnswerTimer') {
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог автоматически закрыт по отсутствию активности пользователя' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CloseConversation' && Object.values(convdata.messages[i].payload) != '' && convdata.messages[i].payload.status != 'ClosedByBot' && convdata.messages[i].payload.sender != 'userAnswerTimer') {
                    let operidcls = convdata.messages[i].payload.sender;
                    let opernamecls;
                    opernamecls = operatorsarray.filter(i => (i.operator != null && i.operator.id == operidcls))
                    if (opernamecls != '') {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + opernamecls[0].operator.fullName + ' закрыл чат с тематикой:  ' + '<br>' + convdata.messages[i].payload.afsName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    } else {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Оператор закрыл чат с тематикой:  ' + '<br>' + convdata.messages[i].payload.afsName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    }
                } else if (convdata.messages[i].eventTpe == 'CloseConversation' && Object.values(convdata.messages[i].payload) == '') {
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + convdata.messages[i].eventTpe + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CreatedByOperator') {
                    let operid = convdata.messages[i].payload.oid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    if (opername != '') {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + opername[0].operator.fullName + ' открыл(а) новый диалог' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    } else {
                        document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Оператор открыл(а) новый диалог' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                    }
                }
                break;

            case "AnswerOperatorWithBot":
                document.getElementById('infofield').innerHTML += '<br>' + '<div class="answer-bot-container">' + '<span class="answer-bot-name">' + 'AutoFAQ bot' + '</span>' + '<span class="answer-bot-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                break;

            case "AnswerBot":
                document.getElementById('infofield').innerHTML += '<br>' + '<div class="answer-bot-container">' + '<span class="answer-bot-name">' + 'AutoFAQ bot' + '</span>' + '<span class="answer-bot-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                break;

            case "AnswerOperator":
                let operidansw = convdata.messages[i].operatorId
                let opernameansw;
                opernameansw = operatorsarray.filter(i => (i.operator != null && i.operator.id == operidansw))
                document.getElementById('infofield').innerHTML += '<br>' + '<div class="answer-oper-container">' + '<span class="answer-oper-name">' + opernameansw[0].operator.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                break;

            case "OperatorComment":
                if (convdata.messages[i].operatorId != 'autoFAQ') {
                    let operidanswcom = convdata.messages[i].operatorId
                    let opernameanswcom;
                    opernameanswcom = operatorsarray.filter(i => (i.operator != null && i.operator.id == operidanswcom))
                    if (opernameanswcom != '') {
                        document.getElementById('infofield').innerHTML += '<br>' + '<div class="oper-comment-container">' + '<span class="oper-comment-name">' + opernameanswcom[0].operator.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                    } else {
                        document.getElementById('infofield').innerHTML += '<br>' + '<div class="oper-comment-container">' + '<span class="oper-comment-name">' + 'Оператор' + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                    }
                } else {
                    document.getElementById('infofield').innerHTML += '<br>' + '<div class="oper-comment-container">' + '<span class="oper-comment-operator">' + convdata.messages[i].operatorId + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                }
                break;
        }
    }
}

async function findchatsoper() { // ищет активные чаты на выбранном операторе
    let objSel = document.getElementById("operatorstp");
    let getdateset = new Date()
    let hrs;
    let mins;
    let secs;
    let difhrs;
    if (getdateset.getUTCHours() < 10)
        hrs = "0" + (getdateset.getUTCHours());
    else if (getdateset.getUTCHours() >= 24)
        hrs = '0' + ((getdateset.getUTCHours() - 24))
    else
        hrs = (getdateset.getUTCHours());


    if (hrs - 1 < 10)
        difhrs = '0' + (hrs - 1)
    else difhrs = hrs;

    if (getdateset.getMinutes() < 10)
        mins = "0" + getdateset.getMinutes();
    else mins = getdateset.getMinutes();

    if (getdateset.getUTCSeconds() < 10)
        secs = "0" + getdateset.getUTCSeconds();
    else secs = getdateset.getUTCSeconds()

    flagsearch = 'searchbyoperator'

    if (foundarr != '')
        foundarr = '';

    if (document.getElementById('placeusid').innerText != '')
        document.getElementById('placeusid').innerText = ''

    if (document.getElementById('placechatid').innerText != '')
        document.getElementById('placechatid').innerText = ''

    if (document.getElementById('somechatinfo').style.display == '')
        document.getElementById('somechatinfo').style.display = 'none';

    if (document.getElementById('bottommenuchhis').style.display == '')
        document.getElementById('bottommenuchhis').style.display = 'none';

    if (document.getElementById('comentsbar').style.display == '')
        document.getElementById('comentsbar').style.display = 'none';


    document.getElementById('infofield').innerHTML = 'Загрузка'

    if (objSel.length > 1) {
        for (let i = 1; i < objSel.length; i++) {
            if (objSel[i].selected == true) {
                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    "headers": {
                        "content-type": "application/json",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "body": `{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"${objSel[i].value}\"],\"tsFrom\":\"${document.getElementById('dateFromChHis').value}T${difhrs}:${mins}:${secs}.000Z\",\"tsTo\":\"${document.getElementById('dateToChHis').value}T${hrs}:${mins}:${secs}.000Z\",\"usedStatuses\":[\"OnOperator\",\"AssignedToOperator\",\"Active\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => operchatsdata = r)
                console.log(operchatsdata)

                if (operchatsdata.total == 0)
                    alert(`У выбранного пользователя ${objSel[i].innerText} нет активных чатов`)

                for (let i = 0; i < operchatsdata.items.length; i++) {

                    let tmestmp = new Date((operchatsdata.items[i].ts.split('[GMT]'))[0])
                    let tshrs;
                    let tsmin
                    let day;
                    let month;

                    if (tmestmp.getMonth() < 9)
                        month = "0" + (tmestmp.getMonth() + 1)
                    else
                        month = (tmestmp.getMonth() + 1)
                    if (tmestmp.getDate() < 10)
                        day = "0" + tmestmp.getDate()
                    else
                        day = tmestmp.getDate()
                    let year = tmestmp.getFullYear();
                    if ((tmestmp.getUTCHours() + 3) < 10)
                        tshrs = "0" + (tmestmp.getUTCHours() + 3);
                    else if ((tmestmp.getUTCHours() + 3) >= 24)
                        tshrs = '0' + ((tmestmp.getUTCHours() + 3 - 24))
                    else tshrs = (tmestmp.getUTCHours() + 3);

                    if (tmestmp.getMinutes() < 10)
                        tsmin = "0" + tmestmp.getMinutes();
                    else tsmin = tmestmp.getMinutes();

                    if (operchatsdata.items[i].channelUser.channelTpe != 'Telegram' && operchatsdata.items[i].channelUser.channelTpe != 'Widget' && operchatsdata.items[i].channelUser.channelTpe != 'WhatsApp' && operchatsdata.items[i].channelUser.payload.userFullName == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.payload.userType + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe != 'Telegram' && operchatsdata.items[i].channelUser.channelTpe != 'Widget' && operchatsdata.items[i].channelUser.channelTpe != 'WhatsApp' && operchatsdata.items[i].channelUser.payload.userFullName != undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.payload.userType + '</span>' + ' ' + operchatsdata.items[i].channelUser.payload.userFullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe == 'Telegram' && operchatsdata.items[i].channelUser.payload == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe == 'Widget' && operchatsdata.items[i].channelUser.payload == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe == 'WhatsApp' && operchatsdata.items[i].channelUser.payload == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe == 'WhatsApp' && operchatsdata.items[i].channelUser.payload != undefined) // проверить вывод чата с  WA при таких критериях!
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                }

                document.getElementById('infofield').innerHTML = foundarr;
                checkandchangestyle()

                for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
                    document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId

                    document.getElementsByClassName('chatlist')[i].onclick = async () => {

                        await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
                        console.log(convdata)

                        if (convdata.status != null && convdata.status == 'AssignedToOperator')
                            isChatOnOperator = true
                        else isChatOnOperator = false;

                        fillchatbox();
                        checkandchangestyle();
                    } // конец функции клика по списку в найденном чате
                }
            }
        }
    }
}

function addbuttonsintegration() { // добавляет подсветку при создании задачи зеленым цветом 2лтп, красным тп исхода 1 линии
    if ((localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addrRzrv) && document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
            let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')
            //let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')[4].children[0].childNodes[1];
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butstdid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachidfstd)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonservid)
            for (let i = 0; i < categorylist.length; i++) {
                if (categorylist[i].innerText == "Техподдержка исход crm2") {
                    categorylist[i].style.color = "red";
                    categorylist[i].style.fontWeight = 600;
                    categorylist[i].style.textShadow = "1px 1px 1px black, 0 0 1em red";
                } else if (categorylist[i].innerText == "Техподдержка 2-я линия crm2") {
                    categorylist[i].style.color = "green";
                    categorylist[i].style.fontWeight = 600;
                    categorylist[i].style.textShadow = "1px 1px 1px black, 0 0 1em green";
                } else {
                    categorylist[i].style.color = "black";
                    categorylist[i].style.fontWeight = 400;
                    categorylist[i].style.textShadow = "0px 0px 0px black, 0 0 1em grey";
                }
            }
        }
    }
}

setInterval(addbuttonsintegration, 1000)

async function remandressl() { // функция удаления и сброса слайдов но с добавлением также функций просмотра ID методиста которому была отправлена работае, информации об уроке в контенте
    if (document.URL.split('/')[2] + "/" + document.URL.split('/')[3] == "vimbox.skyeng.ru/workbook" || (document.URL.split('/')[6] != undefined && document.URL.split('/')[6].match(/materials\?studentId=/)
        != null && document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=')) {
        let remove = document.createElement('span')
        remove.id = "removebtn"
        remove.title = "По нажатию удалит все заданные упражнения на дом из категорий Lesson и Homework. После чего сообщит об этом и по закрытию диалогового окна обновит страницу, чтобы увидели результат."
        remove.textContent = "❌"
        remove.style = 'cursor:pointer; position:absolute; top: 12px; left: 635px;'
        remove.onclick = removeslide;

        let lessoninfo = document.createElement('span')
        lessoninfo.id = "lessoninfo"
        lessoninfo.title = "По нажатию копирует в буфер информацию об уроке"
        lessoninfo.textContent = "❓"
        lessoninfo.style = 'cursor:pointer; position:absolute; top: 12px; left: 685px;'
        lessoninfo.onclick = getlessoninfo;

        let methodist = document.createElement('span')
        methodist.id = 'methodid';
        methodist.innerText = "🆔"
        methodist.title = "По нажатию получите информацию о том, какому методисту была отправлена работа эссе или рекординг"
        methodist.style = 'cursor:pointer; position:absolute; top: 12px; left: 635px;'
        methodist.onclick = getmethodistid;

        let reset = document.createElement('span')
        reset.id = "resetbtn"
        reset.textContent = "🔄"
        reset.title = "По нажатию сбросит прогресс выполнениях все слайдов из категории Homework. После чего сообщит об этом и по закрытию диалогового окна обновит страницу, чтобы увидели результат."
        reset.style = 'cursor:pointer; position:absolute; top: 12px; left: 660px;'
        reset.onclick = resetslide;

        if (document.getElementById('lessoninfo') == null && document.getElementById('removebtn') == null && document.getElementById('resetbtn') == null) {
            if (document.getElementsByClassName('-type-primary')[1].innerText == "Send as Homework" && document.getElementsByClassName('-type-primary')[2].innerText == "Send Homework") {
                document.getElementsByClassName('-type-primary')[4].appendChild(remove)
                document.getElementsByClassName('-type-primary')[4].appendChild(reset)
                document.getElementsByClassName('-type-primary')[4].appendChild(lessoninfo)

                if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                    document.getElementsByClassName('-type-primary')[4].appendChild(methodist)
                document.getElementById('methodid').style.left = '615px';
            } else if (document.getElementsByClassName('-type-primary')[1].innerText == "Send as Homework" && document.getElementsByClassName('-type-primary')[2].innerText != "Send Homework") {
                document.getElementsByClassName('-type-primary')[3].appendChild(remove)
                document.getElementsByClassName('-type-primary')[3].appendChild(reset)
                document.getElementsByClassName('-type-primary')[3].appendChild(lessoninfo)

                if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                    document.getElementsByClassName('-type-primary')[3].appendChild(methodist)
                document.getElementById('methodid').style.left = '615px';

            } else if (document.getElementsByClassName('-type-primary')[1].innerText == "Send Homework" && document.getElementsByClassName('-type-primary')[2].innerText != "Send Homework") {
                document.getElementsByClassName('-type-primary')[3].appendChild(remove)
                document.getElementsByClassName('-type-primary')[3].appendChild(reset)
                document.getElementsByClassName('-type-primary')[3].appendChild(lessoninfo)

                if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                    document.getElementsByClassName('-type-primary')[3].appendChild(methodist)
                document.getElementById('methodid').style.left = '615px';

            } else if (document.getElementsByClassName('-type-primary')[2].children[1].innerText == "Grammar") {
                document.getElementsByClassName('-type-primary')[2].appendChild(remove)
                document.getElementsByClassName('-type-primary')[2].appendChild(reset)
                document.getElementsByClassName('-type-primary')[2].appendChild(lessoninfo)

                if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                    document.getElementsByClassName('-type-primary')[2].appendChild(methodist)
                document.getElementById('methodid').style.left = '615px';
            }
        }
        if (document.getElementById('lessoninfo') == null && document.getElementById('methodid') == null && document.getElementById('resetbtn') == null) {
            if (document.getElementsByClassName('-type-primary')[1].innerText != "Send Homework" && document.getElementsByClassName('-type-primary')[2].innerText != "Send Homework") {
                document.getElementsByClassName('-type-primary')[1].appendChild(reset)
                document.getElementsByClassName('-type-primary')[1].appendChild(methodist)
                document.getElementsByClassName('-type-primary')[1].appendChild(lessoninfo)
            }
        }

        async function removeslide() {
            let d = document.cookie;
            d = d.match(/token_global=(.*)/);

            await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "authorization": "Bearer" + d[1],
                },
                "method": "PATCH",
                "mode": "cors",
                "credentials": "include"
            }).then(r => r.json()).then(data => joinresult = data)

            for (let i = 0; i < joinresult.lessonPlan.Homework.length; i++) {

                await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/homeworks/workbook/" + joinresult.workbooks[0].id + "/step/" + joinresult.lessonPlan.Homework[i].stepUUID, {
                    "headers": {
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "DELETE",
                    "mode": "cors",
                    "credentials": "include"
                });
            }

            for (let i = 0; i < joinresult.lessonPlan.Lesson.length; i++) {

                await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/homeworks/workbook/" + joinresult.workbooks[0].id + "/step/" + joinresult.lessonPlan.Lesson[i].stepUUID, {
                    "headers": {
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "DELETE",
                    "mode": "cors",
                    "credentials": "include"
                });
            }

            alert("Слайды успешно отозваны с домашнего задания с категорий Lesson и Homework! Страница будет обновлена.")
            window.location.reload();
        }

        // Кнопка для получения информации об методисте, которому ушло эссе/рекординг

        async function getmethodistid() {
            let d = document.cookie;
            d = d.match(/token_global=(.*)/);


            if (document.URL.split('/')[6] != 'materials?tool=homework') {
                await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "PATCH",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => joinresult = r)
                await fetch(`https://essay-vimbox.skyeng.ru/api/v1/essay/${joinresult.currentStepRevId}/ensure/0`, {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "ru",
                        "authorization": "Bearer" + d[1],
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    "body": `studentId=${joinresult.students[0].id}&projectName=vimbox`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => result = r)

                if (result.record == undefined && result.text != null) {
                    alert("Эссе отправлено методисту ID: " + result.methodistId)

                } else {
                    await fetch(`https://record-vimbox.skyeng.ru/api/v1/record/${joinresult.currentStepRevId}/ensure/0`, {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "accept-language": "ru",
                            "authorization": "Bearer" + d[1],
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        "body": `studentId=${joinresult.students[0].id}&projectName=vimbox&sourceId=0`,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(r => r.json()).then(r => result = r)

                    if (result.record != undefined)
                        alert("Record отправлен методисту ID: " + result.record.methodistId)
                }
            } else {

                await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "PATCH",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => joinresult = r)
                await fetch(`https://essay-vimbox.skyeng.ru/api/v1/essay/${joinresult.currentStepRevId}/ensure/0`, {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "ru",
                        "authorization": "Bearer" + d[1],
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => result = r)

                if (result.record == undefined && result.text != null) {
                    alert("Эссе отправлено методисту ID: " + result.methodistId)

                } else {
                    await fetch(`https://record-vimbox.skyeng.ru/api/v1/record/${joinresult.currentStepRevId}/ensure/0`, {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "accept-language": "ru",
                            "authorization": "Bearer" + d[1],
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(r => r.json()).then(r => result = r)

                    if (result.record != undefined)
                        alert("Record отправлен методисту ID: " + result.record.methodistId)
                }
            }
        }

        // аналогично для сброса прогресса слайдов

        async function resetslide() {

            let d = document.cookie;
            d = d.match(/token_global=(.*)/);

            await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "authorization": "Bearer" + d[1],
                },
                "method": "PATCH",
                "mode": "cors",
                "credentials": "include"
            }).then(r => r.json()).then(data => joinresult = data)

            for (let i = 0; i < joinresult.lessonPlan.Homework.length; i++) {
                await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/workbooks/steps/" + joinresult.lessonPlan.Homework[i].id + "/reset", {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "authorization": "Bearer" + d[1],
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    "body": "workbookIds[]=" + joinresult.workbooks[0].id,
                    "method": "DELETE",
                    "mode": "cors",
                    "credentials": "include"
                });
            }
            alert("Слайды из категории Homework сброшены успешно! Страница будет обновлена.")
            window.location.reload();
        }

        async function getlessoninfo() {
            let d = document.cookie;
            d = d.match(/token_global=(.*)/);

            await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "authorization": "Bearer" + d[1],
                },
                "method": "PATCH",
                "mode": "cors",
                "credentials": "include"
            }).then(r => r.json()).then(data => joinresult = data)

            if (joinresult.lessonPlan.Homework != undefined) {

                for (let i = 0; i < joinresult.lessonPlan.Homework.length; i++) {
                    if (joinresult.currentStepRevId == joinresult.lessonPlan.Homework[i].id) {
                        console.log('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Homework[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Homework[i].stepUUID)
                        copyToClipboard1('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Homework[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Homework[i].stepUUID)
                        alert('Информация успешно скопирована в буфер обмена!\n' + 'Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Homework[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Homework[i].stepUUID)
                    }
                }

                for (let i = 0; i < joinresult.lessonPlan.Lesson.length; i++) {
                    if (joinresult.currentStepRevId == joinresult.lessonPlan.Lesson[i].id) {
                        console.log('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Lesson[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Lesson[i].stepUUID)
                        copyToClipboard1('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Lesson[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Lesson[i].stepUUID)
                        alert('Информация успешно скопирована в буфер обмена!\n' + 'Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Lesson[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Lesson[i].stepUUID)
                    }
                }

            } else {
                for (let i = 0; i < joinresult.lessonPlan.Test.length; i++) {
                    if (joinresult.currentStepRevId == joinresult.lessonPlan.Test[i].id) {
                        console.log('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Test[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Test[i].stepUUID)
                        copyToClipboard1('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Test[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Test[i].stepUUID)
                        alert('Информация успешно скопирована в буфер обмена!\n' + 'Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Test[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Test[i].stepUUID)
                    }
                }
            }
        }
    }

    // Добавляем кнопку для Skysmart добавлять чаты со всеми У в один клик
    let achatb = document.createElement('span')
    achatb.id = "achatbtn"
    achatb.textContent = "💬"
    achatb.style = 'cursor:pointer;'


    if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/english/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-english.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=english_junior_native_speaker,english_junior_not_native_speaker,english_kids_exam,english_klp_native_speaker,english_klp_native_speaker_short,english_klp_not_native_speaker,english_klp_not_native_speaker_short_lesson,english_klp_not_native_speaker_premium,english_junior_not_native_speaker_premium,english_kids_exam_premium");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Английскому языку"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/computer-science/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-computer-science.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=digital_literacy_kids_f2f,python_kids_f2f,programming_kids_f2f,web_dev_kids_f2f,making_games_kids_f2f,computer_courses_app_inventor_kids_f2f,computer_courses_thunkable_kids_f2f,computer_courses_scratch_kids_f2f,computer_courses_unreal_kids_f2f,computer_courses_roblox_kids_f2f,computer_courses_unity_kids_f2f,computer_courses_construct_kids_f2f,computer_courses_minecraft_kids_f2f,computer_courses_app_inventor_kids_f2g,computer_courses_scratch_kids_f2g,computer_courses_thunkable_kids_f2g,computer_courses_web_dev_kids_f2g,computer_courses_digital_literacy_mac_kids_f2f,computer_courses_digital_literacy_windows_kids_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Компьютерным курсам"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/chess/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-chess.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=chess_kids_f2f,chess_kids_f2f_short_lessons");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Шахматам"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/math/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-math.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=mathematics_kids,math_kids_exam,math_kids_premium,math_kids_exam_premium");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Математике"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/russian/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-russian.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=russian_kids,russian_kids_exam_f2f,russian_kids_premium,russian_kids_exam_premium");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Русскому языку"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/preschool/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-preschool.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=preschool_kids_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Дошколке"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/physics/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-physics.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=physics_kids_f2f,physics_kids_exam_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Физике"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/social-science/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-social-science.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=social_science_kids_f2f,social_science_kids_exam_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Обществознанию"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/literature/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-literature.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=large_classes_literature_7_grade_folklore,large_classes_literature_7_grade_folklore_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Литературе"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/history/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-history.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=large_classes_history_7_grade_new_time,large_classes_history_7_grade_new_time_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Истории"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/geography/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-geography.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=geography_kids_f2f,large_classes_geography_7_grade_human_on_earth,large_classes_geography_7_grade_human_on_earth_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Географии"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/chemistry/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-chemistry.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=chemistry_kids_exam_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Химии"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/biology/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-biology.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=biology_kids_f2f,large_classes_biology_7_grade_bacteria_viruses,large_classes_biology_7_grade_bacteria_viruses_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Биологии"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] == 'teacher/multi-classroom' && document.getElementById('achatbtn') == null) {
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
            "method": "POST",
            "credentials": "include"
        }).then(r => r.json()).then(data => studarr = data)

        for (let i = 0; i < Object.keys(studarr).length; i++) {
            let arrayofsubjects = Object.keys(studarr)[i]
            switch (arrayofsubjects) {
                case 'math': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cМатематика', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }
                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками в разделе Математика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'russian': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cРусский язык', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }
                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Русский язык - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'social-science': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cОбществознание', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Обществознание - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'preschool': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cДошколка', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Дошкольная подготовка - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'chess': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cШахматы', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Шахматы -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'computer-science': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cКомпьютерные курсы', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Компьютерные курсы - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'chemistry': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cХимия', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Химия -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'physics': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cФизика', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Физика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'english': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cАнглийский язык', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Английский язык -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'history': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cИстория', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела История -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'biology': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cБиология', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Биология - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'geography': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cГеография', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","


                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела География - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
            }
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

    async function addChat(subject) { // функция для массового добавления чатов не в мультиклассруме для каждого отдельного предмета
        let d = document.cookie;
        d = d.match(/token_global=(.*)/);
        let sidarr = [];
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "authorization": "Bearer" + d[1]
            },
            "credentials": "include",
            "method": "POST",
        }).then(r => r.json()).then(r => artid = r)

        await fetch(subject, { "headers": { "authorization": "Bearer" + d[1], }, "method": "GET", "credentials": "include" })
            .then(r => r.json()).then(data => studarr = data)
        if (studarr.results != '') {
            for (let i = 0; i < studarr.results.length; i++) {
                if (studarr.results[i].status != "sleep")
                    sidarr += studarr.results[i].userId + ","
            }
            sidarr = sidarr.split(',');
            for (let j = 0; j < sidarr.length - 1; j++) {
                fetchaddchat(sidarr[j], artid.user.id)
            }
            alert("Чаты с учениками в разделе 'Английский язык' успешно добавлены!")
        } else alert("Выбран не верный предмет или нет учеников в разделе 'Английский язык'")
    }

    // Добавляем в комнату кнопку Classwork для перезапуска урока

    function dosetclasswork(subject) {
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

        document.getElementById('clwbtn').innerText = "Done!"

        setTimeout(() => { document.getElementById('clwbtn').innerText = "Classwork" }, 3000)
    }

    let classworkbtn = document.createElement('div')
    classworkbtn.id = "clwbtn"
    classworkbtn.innerText = "Classwork"
    classworkbtn.style = "position:absolute; top:14px; left:65%; cursor: pointer;"
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

setInterval(remandressl, 3000);

let getidusrteachreq;

butteachid.addEventListener('click', function () { // копирует в буфер ID П при создании задачи через АФ интеграцию
    for (let i = 1; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "teacher") {
            for (let j = 0; j < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; j++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].firstChild.textContent == "id") {
                    getidusrteachreq = document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].childNodes[1].innerText.split(' ')[0];
                    copyToClipboard1(getidusrteachreq)
                }
            }
        }
    }
})

let getidusrstud;

butstdid.addEventListener('click', function () { // копирует в буфер ID У из секции nextclass-StudentId при создании задачи через АФ интеграцию
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
            getidusrstud = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getidusrstud)
    }
})

let getidusrsteach;

butteachidfstd.addEventListener('click', function () { // копирует в буфер ID П из секции nextclass-TeacherId при обращении У и создании задачи через АФ интеграцию
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
            getidusrsteach = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getidusrsteach)
    }
})

let getservidst;

buttonservid.addEventListener('click', function () { //копирует в буфер nextClass-educationServiceId при обращении П во время крита услугу ученика при интеграции в форме АФ
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-educationServiceId")
            getservidst = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getservidst)
    }
})

//Функция добавления коммента в чат при добавлении ссылки на джиру, но требуется повторное открытие окна чтобы система получила информацию о ссылке введеной в ячейку

function checJiraF() { //Функция добавления коммента в чат при добавлении ссылки на джиру, но требуется повторное открытие окна чтобы система получила информацию о ссылке введеной в ячейку
    try {
        if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM").innerText == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }
        } else if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM").innerText == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }
        }
    } catch (e) { }
}

setInterval(checJiraF, 1000);

async function checkthemestatus() { //функция проверки выставления темы и услуги в активном чате
    try {
        if (document.URL.split('/').length >= 6 && document.URL.split('/')[2] == 'skyeng.autofaq.ai' && document.URL.split('/')[5] !='') {
            drevo = '';
            let temparr = document.location.pathname.split('/')[3];
            await fetch("https://skyeng.autofaq.ai/api/conversations/" + temparr, {
            }).then(r => r.json()).then(r => pldata = r)

            if (pldata.messages[0].txt != undefined && pldata.messages[0].txt != null)
                drevo = pldata.messages[0].txt.match(/Здравствуйте! Я виртуальный помощник Skyeng/)


            if (pldata.payload.topicId.value == "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[2].innerText == "Выбор темы/подтемы:") { // блок и ниже условия для вывода в список активных чатов выставлена ли тема и услуга

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)
                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ✔') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ❌";
                        txtbar.childNodes[1].childNodes[4].style.color = 'red';
                    }
                }

            } else if (pldata.payload.topicId.value == "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[3].innerText == "Выбор темы/подтемы:") {

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)
                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ✔') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ❌";
                        txtbar.childNodes[1].childNodes[4].style.color = 'red';
                    }
                }

            } else if (pldata.payload.topicId.value != "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[2].innerText == "Выбор темы/подтемы:") {

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ❌') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ✔";
                        txtbar.childNodes[1].childNodes[4].style.color = 'green';
                    }

                }

            } else if (pldata.payload.topicId.value != "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[3].innerText == "Выбор темы/подтемы:") {

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ❌') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ✔";
                        txtbar.childNodes[1].childNodes[4].style.color = 'green';
                    }
                }
            }

            if (document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText != 'Выбор услуги:' && pldata.payload.educationServiceId == undefined && document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText == 'Выбор тегов ТП:') {
                let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                txtbar.childNodes[1].childNodes[5].innerText = "";
            }

            if (document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText != 'Выбор тегов ТП:' && pldata.payload.educationServiceId != undefined && pldata.payload.educationServiceId.value == '' && document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText == 'Выбор услуги:') {
                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Услуга: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[5] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[5].innerText == 'Услуга: ✔') {
                        txtbar.childNodes[1].childNodes[5].innerText = "Услуга: ❌";
                        txtbar.childNodes[1].childNodes[5].style.color = 'red';
                    }
                }
            } else if (document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText != 'Выбор тегов ТП:' && pldata.payload.educationServiceId != undefined && pldata.payload.educationServiceId.value != '' && document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText == 'Выбор услуги:') {
                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Услуга: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[5] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[5].innerText == 'Услуга: ❌') {
                        txtbar.childNodes[1].childNodes[5].innerText = "Услуга: ✔";
                        txtbar.childNodes[1].childNodes[5].style.color = 'green';
                    }
                }
            }
        }
    } catch (e) { }
}

setInterval(checkthemestatus, 3000);

function paintstatus() { //функция перекрашивания статуса оператора онлайн зеленый, занят желтый, офлайн и перерыв красные
    if (document.URL != "https://skyeng.autofaq.ai/tickets/archive" && document.querySelectorAll('.user_menu-status-name')[1] != undefined && document.querySelectorAll('.user_menu-status-name')[1] != null) {
        if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Офлайн" || document.querySelectorAll('.user_menu-status-name')[1].innerText == "Перерыв") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: red; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[4].innerText == 'Офлайн' || document.querySelectorAll('.ant-btn')[4].innerText == 'Перерыв')
                document.querySelectorAll('.ant-btn')[4].style.background = "red";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Онлайн") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: green; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[4].innerText == 'Онлайн')
                document.querySelectorAll('.ant-btn')[4].style.background = "green";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Занят") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: yellow; color: black; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[4].innerText == 'Занят')
                document.querySelectorAll('.ant-btn')[4].style.background = "yellow";
        }
    } else if (document.URL == "https://skyeng.autofaq.ai/tickets/archive" && document.querySelectorAll('.user_menu-status-name')[1] != undefined && document.querySelectorAll('.user_menu-status-name')[1] != null) {
        if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Офлайн" || document.querySelectorAll('.user_menu-status-name')[1].innerText == "Перерыв") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: red; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[5].innerText == 'Офлайн' || document.querySelectorAll('.ant-btn')[5].innerText == 'Перерыв')
                document.querySelectorAll('.ant-btn')[5].style.background = "red";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Онлайн") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: green; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[5].innerText == 'Онлайн')
                document.querySelectorAll('.ant-btn')[5].style.background = "green";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Занят") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: yellow; color: black; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[5].innerText == 'Занят')
                document.querySelectorAll('.ant-btn')[5].style.background = "yellow";
        }
    }

}

setInterval(paintstatus, 5000);

function timerHideButtons() { //функция добавления скрытия полей плюс также перекрашивает при выборе тп исход срм2 в красный, тп2л в зеленый
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        document.getElementsByClassName('ant-modal-content')[0].childNodes[1].children[0].appendChild(maskBackHide)

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Указать тему')
            for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
                if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Техподдержка V1 (работает ежедневно с 07:00-23:50)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Уроки V2" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Группа КМ (работает ежедневно с 8:00 до 21:55)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Обратная связь ТП (работает ежедневно с 08:00-22:50)")
                    document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Закрыть запрос?')
            for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
                if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Техподдержка V1 (работает ежедневно с 07:00-23:50)")
                    document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') { // обращение к функции подсветки и добавления заметки
            let selectorList = document.querySelectorAll('.sc-fznZeY');
            if (selectorList.length > 5) {
                for (let i = 0; i < selectorList.length; i++) {
                    if (selectorList[i].innerText == "Техподдержка исход crm2")
                        selectorList[i].style.backgroundColor = 'red'
                    if (selectorList[i].innerText == "Техподдержка 2-я линия crm2")
                        selectorList[i].style.backgroundColor = 'green'
                }
            }
        }
    }
}

function requestsRed() { //функция окрашивает в красный цвет, кнопка взять запрос не будет (0) иметь, а любое другое значение
    if (document.getElementsByClassName('expert-sidebar-button')[0] != undefined) {
        document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].addEventListener("DOMSubtreeModified", function () {
            txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
            if (txt != "Взять запрос (0)")
                document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "#F34723"
            else
                document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "white"
        });
    }
}

const copyToClipboard1 = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

var operatorId = ""
var operatorsarray = [];
async function whoAmI() { // функция получения айди оператора, который работает и запустил расширение
    a = await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(a => b = a.json()).then(b => {
        let me = document.querySelector('.user_menu-dropdown-user_name');
        operatorsarray = b.rows;
        b.rows.forEach(s => {
            if (s.operator != null && me && s.operator.fullName === me.innerText) {
                operatorId = s.operator.id
                afopername = s.operator.fullName
                console.log("Мой ID: " + operatorId)
            }
        })
    })
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
    buttonOpenTmpWindow.innerHTML = 'tmps'
    buttonOpenTmpWindow.title = 'Открывает окно для добавления своих шаблонов либо информации в ячейки в этом поле'
    buttonOpenTmpWindow.style.marginLeft = '7px'
    buttonOpenTmpWindow.onclick = function () {
        var a = document.getElementById('cstmTmplates')
        if (a.style.display == '')
            a.style.display = 'none'
        else
            a.style.display = ''
    }

    var tmpA = document.getElementById('AF_helper').children[0].children[0].children[0].children[0]
    if (tmpA.children[1].innerHTML != 'tmps')
        tmpA.insertBefore(buttonOpenTmpWindow, tmpA.children[1])

    tmpA.children[2].style.marginLeft = '40px'

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
        cstmTmp.style.left = Number(e.clientX - myX3) + "px";
        cstmTmp.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winCstmTmpsTop', String(Number(e.clientY - myY3)));
        localStorage.setItem('winCstmTmpsLeft', String(Number(e.clientX - myX3)));
    };

    cstmTmp.onmousedown = function (a) {
        if (checkelementtype(a)) {
            window.myX3 = a.layerX;
            window.myY3 = a.layerY;
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
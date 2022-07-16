//Globalvars
//let joinresult;

function mystylesAFMS() {
    let mystl = document.createElement('style');
    document.body.append(mystl);
    var styleAFMS = `

	.commonbtn {
		background-color:#768d87;
		border-radius:5px;
		border:1px solid #566963;
		color:#ffffff;
		padding:2px 2px;
	}
	
	.commonbtn:hover {
		background: #6A5ACD;
		box-shadow: 1px 1px 10px;
	}

	.commonbtn:active {
		box-shadow: inset 1px 1px 20px -1px;
	}
	
	button.dobig:hover {
		transform:scale(1.15);
	}

	button.dobig:active {
		box-shadow: inset 1px 1px 20px -1px;
	}

	.wintInitialize {
		min-height: 20px;
		max-height: 750px;
		min-width: 35px;
		max-width: 370px;
		font-size: 14px;
		z-index: 20;
		position: fixed;
		border: 1px solid rgb(56, 56, 56);
		background: rgb(70, 68, 81);
		color: white;
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}

	.wintInitializeChat {
		min-height: 75px;
		min-width: 200px;
		font-size: 14px;
		z-index: 20;
		position: fixed;
		border: 1px solid rgb(56, 56, 56);
		background: rgb(70, 68, 81);
		color: white;
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}

	.wintInitializeLessonInfo {
		height: 232px;
		width: 500px;
		font-size: 14px;
		z-index: 20;
		position: fixed;
		border: 1px solid rgb(56, 56, 56);
		background: rgb(70, 68, 81);
		color:black;
		font-family:sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}

	.wintInitializeAdultsStudentsInfo {
		min-height: 170px;
		max-height: 490px;
		width: 668px;
		font-size: 14px;
		z-index: 20;
		position: fixed;
		border: 1px solid rgb(56, 56, 56);
		background: rgb(70, 68, 81);
		color: black;
		font-family: sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}

	.wintInitializeSkysmartStudentsInfo {
		min-height: 170px;
		max-height: 490px;
		width: 668px;
		font-size: 14px;
		z-index: 20;
		position: fixed;
		border: 1px solid rgb(56, 56, 56);
		background: rgb(70, 68, 81);
		color: black;
		font-family: sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,NotoEmoji,Twemoji;
	}

	.lesson-field-name {
		width: 50px;
		text-align: center;
		color: bisque;
		margin: 5px;
		text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
	}

	.lesson-field-value {
		 width: 150px;
		 min-height: 20px;
		 text-align: center;
		 color: #fff;
		 border-radius: 5px;
		 background: #2569c3f0;
		 padding: 5px;
		 margin: 5px;
		 border: 1px solid white;
		 font-weight: 500;
		 padding-top: 7px;
		 box-shadow: 0px 5px 5px rgb(0 0 0 / 55%);
		 cursor: text;
	}

	.lesson-field-value:hover {
		background:#65227f70;
	}

	.lesson-field-value::selection {
		background: #d4180c;
	}

	#vidserverurl::selection {
		background: #d4180c;
	}

	#hidemainmenu {
		cursor: pointer;
		width: 110px;
		background: #8bacb9d1;
		color: #8bacb9d1;
		font-size: 3px;
		margin-top: 15px;
		margin-left: 2px;
		opacity: 0.7;
		transition: all 0.5s cubic-bezier(0.89, 0.38, 0.57, 0.43);
	}


	#hidemainmenu:hover {
		opacity: 1;
		font-size:11px;
		background: #16fe55bf;
		color: rgb(69 57 192 / 80%);
		font-weight: 700;
	}

	.rowadultdata {
		width: 146px;
		min-height: 80px;
		background: #a9a9a9;
		margin: 5px;
		border-radius: 5px;
		padding-left: 5px;
		color: #000;
		text-shadow: 1px 1px 1px rgb(0 0 0 / 30%);
		box-shadow: 0px 5px 5px rgb(0 0 0 / 35%);
	}

	.kidsoutdata {
		width: 146px;
		min-height: 80px;
		background: #a9a9a9;
		margin: 5px;
		border-radius: 5px;
		padding-left: 5px;
		color: #000;
		text-shadow: 1px 1px 1px rgb(0 0 0 / 30%);
		box-shadow: 0px 5px 5px rgb(0 0 0 / 35%);
	}
	
	.infbaradult {
		width: 670px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		overflow-x: hidden;
		max-height: 421px;
	}	
	
	.infbarskysmart {
		width: 670px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		overflow-x: hidden;
		max-height: 421px;
	}

	.rowadultdata:hover .studadultname {
		background: #6A5ACD;
		color: #fff;
		font-weight:600;
		cursor: default;
	}

	.rowadultdata:hover {
		background: #6A5ACD;
		color: #fff;
		font-weight:600;
	}	
	
	.kidsoutdata:hover {
		background: #6A5ACD;
		color: #fff;
		font-weight:600;
	}

	.studadultname {
		text-align: center;
		color: #2411df;
		font-weight: 600;
		margin: 5px;
		border-bottom: 2.5px solid;
		word-break: break-all;
	}	
	
	.studkidstname {
		text-align: center;
		color: #2411df;
		font-weight: 600;
		margin: 5px;
		border-bottom: 2.5px solid;
		word-break: break-all;
	}
	
	.idadultstyle {
		text-align:center;
		margin-top:5px;
		cursor: default;
	}	
	
	.idkidsstyle {
		text-align:center;
		margin-top:5px;
		cursor: default;
	}
	
	.kidsoutdata.sleep {
		background-color: #646464;
		color: gainsboro;
	}	
	
	.kidsoutdata.sleep:hover {
		background: #6A5ACD;
		color: #fff;
		font-weight: 600;
	}
	
	.kidsoutdata.sleep > .studkidstname {
		color: gainsboro;
	}
	
	.kidsoutdata.vacation {
		background-color: #888e7a;
		color: gainsboro;
	}	
	
	.kidsoutdata.vacation:hover {
		background: #6A5ACD;
		color: #fff;
		font-weight: 600;
	}
	
	.kidsoutdata.vacation > .studkidstname {
		color: gainsboro;
	}
	
	.kidsoutdata:hover .studkidstname {
		background: #6A5ACD;
		color: #fff;
		font-weight:600;
		cursor: default;
	}

	.mvushka {
		cursor:pointer;
		transition:all 0.7s ease;
	}

	.mvushka:hover {
		font-size: 20px;;
	}

	.deletechat {
		cursor:pointer;
		transition:all 0.7s ease;
	}

	.deletechat:hover {
		font-size: 20px;;
	}

    .adultprofile {
		cursor:pointer;
		transition:all 0.7s ease;
    }

    .adultprofile:hover {
		font-size: 20px;;
    }

    .paymenthistory {
		cursor:pointer;
		transition:all 0.7s ease;
    }

    .paymenthistory:hover {
        font-size: 20px;
    }

    .homeworklist  {
        cursor:pointer;
		transition:all 0.7s ease;
    }

    .homeworklist:hover {
        font-size: 20px;
    } 

	.portfoliolist  {
        cursor:pointer;
		transition:all 0.7s ease;
    }

    .portfoliolist:hover {
        font-size: 20px;
    }
	
	.subjname {
		color: bisque;
		width: 630px;
		margin: 5px;
		border: 1px solid #516051;
		text-align: center;
		background: #647b7b;
		font-weight: 700;
		text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);
		border-radius:20px;
		box-shadow: 0px 3px 1px rgb(0 0 0 / 35%);
	}
	
	#listofsubjects {
		background: rgb(70, 68, 81);
		height: 30px;
		color: bisque;
		border-radius: 5px;
		text-align: center;
	}
	
	#listofsubjects:hover {
		box-shadow: 0px 5px 5px rgb(0 0 0 / 45%);
		border: 1px solid #7d5e5e;
	}
	
	#listofsubjects > option {
		rgb(70, 68, 81);
	}
	
	.sbjnamesearch {
		color: white;
		text-align: center;
		font-weight: 700;
		border: 1px solid black;
		margin: 2px;
		background: #2b6da5;
	}
	
	.homeworklistkids {
		cursor: pointer;
		transition: all 0.7s ease;
	}

	.homeworklistkids:hover {
		font-size: 20px;
	}

	`
    mystl.innerHTML = styleAFMS;
}

mystylesAFMS()

var win_addMenu = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">
						<div>
							<button class="commonbtn" id="hidemainmenu">h i d e </button>
						<div>

						<div id="mainmenu" style="display:block">
							<button id="openchataddmenu" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">💬</span> ChatMenu</button>
							<br>
							<button id="openlesinfomenu" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">ℹ</span> LessonInfo</button>
							<br>
							<button id="openstudentsmenu" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">👨‍🎓</span> Students</button>
							<br>
							<button id="openexercisesmenu" style="margin: 5px 0px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎯</span> Exercises</button>
						</div>

						<div id="studentsmenu" style="display:none">
							<button id="lkpskysmart" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🔞</span> Skysmart</button>
							<br>
							<button id="lkpadult" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"> <span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🅰</span> Aduls</button>
							<br>
							<button id="backtomainfromstudmenu" style="margin: 5px 0px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🔙</span> Back</button>
						</div>	
						
					</span>
				   </div>`;

var win_addChatMenu = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px;" id="addChatMenuHeader">
                            <button class="commonbtn" title="скрывает меню" id="hideMeAddChatMenu" style="width:50px; background: #228B22;">hide</button>
                        </div>

						<input id="userid1" style="margin-left: 5px; width:100px; text-align:center;" placeholder="teacherId">
						<input id="userid2" style="width:100px; text-align:center;" placeholder="studentId">
						<button class="commonbtn" id="addChat" style="margin:5px">➕💬</button>
						<button class="commonbtn" id="RemoveChat" style="margin:5px">❌💬</button>
					</span>
				   </div>`;
				   


var win_studentsAdults = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px;" id="studentsAdultsHeader">
                            <button class="commonbtn" title="скрывает меню" id="hidestudentsAdultstMenu" style="width:50px; height:30px; background: #228B22;">hide</button>
							<button class="commonbtn" id="addallchatswithadult" style="margin:5px" title="Добавляет чаты со всеми учениками из раздела "Уроки">➕💬</button>
							<button class="commonbtn" id="actualizestudreportadult" style="margin:5px" title="Актуализирует отчеты по всем ученикам заполняя поля символами --">📝</button>
                        </div>

						<input id="usersearch" style="margin-left: 8px;width: 628px; text-align:center;" placeholder="Enter user ID or name for search">

						<div id="infobaradult" class="infbaradult">
						<div>
						
					</span>
				   </div>`;

var win_studentsSkysmart = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px;" id="studentsSkysmartHeader">
                            <button class="commonbtn" title="скрывает меню" id="hidestudentsSkysmartMenu" style="width:50px; height:30px; background: #228B22;">hide</button>
							<button class="commonbtn" id="addallchatsmulticlassrom" style="margin:5px" title="Добавляет чаты со всеми учениками из раздела Multiclassroom">➕💬</button>
							<select id="listofsubjects">
								<option value="all">Все</option>
							</select> 
							<button class="commonbtn" id="actualizestudreportkids" style="margin:5px" title="Актуализирует отчеты по всем ученикам в выбранном разделе "все" или отдельно каждом заполняя поля символами --">📝</button>
                        </div>

						<input id="usersearchskysmart" style="margin-left: 8px;width: 628px; text-align:center;" placeholder="Enter user ID for search">

						<div id="infobarskysmart" class="infbarskysmart">
						<div>
						
					</span>
				   </div>`;

var win_getLessonInfo = `
				<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

						<div style="margin: 5px; width: 490px;" id="LessonInfoHeader">
                            <button class="commonbtn" title="скрывает меню" id="hideMeLessonInfo" style="width:50px; background: #228B22; height: 25px;">hide</button>
							<button class="commonbtn" id="RefreshInfo" title = "Обновляет информацию в полях, использовать при подключении к уроку! Если работаете на других страницах с формой есть кнопка Search позволяющая подтягивать актуальный статус" style="margin: 5px; width: 25px; height: 25px; padding: 0;">♻</button>
							<button class="commonbtn" id="ClearInfo" title = "Очищает информацию в полях" style="width: 25px; height: 25px; padding: 0;">🧹</button> 
							<span id="platform" style="margin-left: 5px; width:50px; height:25px; text-align:center; color:bisque; margin:5px; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); user-select:none;">Platform: </span>
							<span id="platformname" style="width: 110px; height:30px;text-align: center;color: #fff; border-radius:5px;background: #627998f0; padding:5px; margin:5px; border:1px solid white; font-weight:500; box-shadow: 0px 5px 5px rgb(0 0 0 / 55%); font-size: 12px; cursor:text;"></span>
							<span id="roomfor" style="display: none; margin-left: 5px; width:50px; height:25px; text-align:center; color:bisque; margin:5px; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); user-select:none;">Room for Student ID: </span>
							<span id="forstudentid" style="display:none; width: 110px; height:30px;text-align: center;color: #fff; border-radius:5px;background: #627998f0; padding:5px; margin:5px; border:1px solid white; font-weight:500; box-shadow: 0px 5px 5px rgb(0 0 0 / 55%); font-size: 12px; cursor:pointer;" title="При клике копирует в буфер обмена айди ученика"></span>
                        </div>

						<div style="margin-left: 5px; height: 25px;">
							<span id="subjectname" style="margin-left: 5px; width:50px; height:25px; text-align:center; color:bisque; margin:5px; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); user-select:none;">Subject: </span>
							<span id="subjectnamefield" style="width: 110px; height:30px;text-align: center;color: #fff; border-radius:5px;background: #2569c3f0; padding:5px; margin:5px; border:1px solid white; font-weight:500; box-shadow: 0px 5px 5px rgb(0 0 0 / 55%); font-size: 11px; user-select:none;"></span>
							<span id="vidserverfield" style="margin-left: 5px; width:50px; height:25px; text-align:center; color:bisque; margin:5px; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); user-select:none;">Video Serv: </span>
							<span id="vidserverurl" style="width: 110px; height:30px;text-align: center;color: #fff; border-radius:5px;background: #2569c3f0; padding:5px; margin:5px; border:1px solid white; font-weight:500; box-shadow: 0px 5px 5px rgb(0 0 0 / 55%); font-size: 12px; cursor:text; user-select: all;"></span>
						</div>

						<div style="margin: 5px; width: 490px; display:flex; flex-wrap: wrap; align-items:center;">
							<span id="statusroomid" class = "lesson-field-name">Status:</span>
							<span id="statusroom" class = "lesson-field-value"></span>
							<span id="hashroomid" class = "lesson-field-name">Hash:</span>
							<span id="hashroom" class = "lesson-field-value" style="cursor:pointer;" title = "При клике копирует в буфер обмена ссылку на комнату!"></span>
						<br>
							<span id="participantteacher" class = "lesson-field-name">Teacher:</span>
							<span id="partteachid" class = "lesson-field-value"></span>
							<span id="participantstudent" class = "lesson-field-name">Student:</span>
							<span id="partstudid" class = "lesson-field-value"></span>
						</div>

						<div>
						<input id="hashfield" placeholder = "Enter full hash or  just 1 word roomhash for adults platform" title = "Example: https://vimbox.skyeng.ru/kids/russian/room/xinisoborada" style="width:480px; text-align:center; margin-left:6px;">
						</div>

						<div style="display: flex; justify-content: center;">
							<button class="commonbtn" id="setstclass" style="margin: 5px; width: 70px; height: 30px;">Classwork</button>
							<button class="commonbtn" id="searchHash" style="margin: 5px; width: 70px; height: 30px;">Search</button>
						</div>

					</span>
				  </div>`

if (localStorage.getItem('winTopAddMenu') == null) { //additional menu
    localStorage.setItem('winTopAddMenu', '120');
    localStorage.setItem('winLeftAddMenu', '295');
}

if (localStorage.getItem('winTopAddChatMenu') == null) { //additional Chat menu
    localStorage.setItem('winTopAddChatMenu', '118');
    localStorage.setItem('winLeftAddChatMenu', '407');
}

if (localStorage.getItem('winTopLessonInfo') == null) { //additional Lesson info menu
    localStorage.setItem('winTopLessonInfo', '118');
    localStorage.setItem('winLeftLessonInfo', '407');
}

if (localStorage.getItem('winTopstudentsAdults') == null) { //additional adults students info menu
    localStorage.setItem('winTopstudentsAdults', '118');
    localStorage.setItem('winLeftstudentsAdults', '407');
}

if (localStorage.getItem('winTopstudentsSkysmart') == null) { //additional skysmart students info menu
    localStorage.setItem('winTopstudentsSkysmart', '118');
    localStorage.setItem('winLeftstudentsSkysmart', '407');
}

let wintAddMenu = document.createElement('div');
document.body.append(wintAddMenu);
wintAddMenu.className = 'wintInitialize'
wintAddMenu.style = 'display:none;  top: ' + localStorage.getItem('winTopAddMenu') + 'px; left: ' + localStorage.getItem('winLeftAddMenu') + 'px;';
wintAddMenu.setAttribute('id', 'AFMS_addMenu');
wintAddMenu.innerHTML = win_addMenu;

let wintAddChatMenu = document.createElement('div');
document.body.append(wintAddChatMenu);
wintAddChatMenu.className = 'wintInitializeChat'
wintAddChatMenu.style = 'display:none;  top: ' + localStorage.getItem('winTopAddChatMenu') + 'px; left: ' + localStorage.getItem('winLeftAddChatMenu') + 'px;';
wintAddChatMenu.setAttribute('id', 'AFMS_addChatMenu');
wintAddChatMenu.innerHTML = win_addChatMenu;

let wintLessonInfo = document.createElement('div');
document.body.append(wintLessonInfo);
wintLessonInfo.className = 'wintInitializeLessonInfo'
wintLessonInfo.style = 'display:none;  top: ' + localStorage.getItem('winTopLessonInfo') + 'px; left: ' + localStorage.getItem('winLeftLessonInfo') + 'px;';
wintLessonInfo.setAttribute('id', 'AFMS_LessonInfo');
wintLessonInfo.innerHTML = win_getLessonInfo;

let wintStudAdults = document.createElement('div');
document.body.append(wintStudAdults);
wintStudAdults.className = 'wintInitializeAdultsStudentsInfo'
wintStudAdults.style = 'display:none;  top: ' + localStorage.getItem('winTopstudentsAdults') + 'px; left: ' + localStorage.getItem('winLeftstudentsAdults') + 'px;';
wintStudAdults.setAttribute('id', 'AFMS_AdultStudInfo');
wintStudAdults.innerHTML = win_studentsAdults;

let wintStudSkysmart = document.createElement('div');
document.body.append(wintStudSkysmart);
wintStudSkysmart.className = 'wintInitializeSkysmartStudentsInfo'
wintStudSkysmart.style = 'display:none;  top: ' + localStorage.getItem('winTopstudentsSkysmart') + 'px; left: ' + localStorage.getItem('winLeftstudentsSkysmart') + 'px;';
wintStudSkysmart.setAttribute('id', 'AFMS_SkysmartStudInfo');
wintStudSkysmart.innerHTML = win_studentsSkysmart;

wintAddMenu.onmouseup = function () { document.removeEventListener('mousemove', listener9999); }
var listener9999 = function (e, a) {
    wintAddMenu.style.left = Number(e.clientX - myX9999) + "px";
    wintAddMenu.style.top = Number(e.clientY - myY9999) + "px";
    localStorage.setItem('winTopAddMenu', String(Number(e.clientY - myY9999)));
    localStorage.setItem('winLeftAddMenu', String(Number(e.clientX - myX9999)));
};
wintAddMenu.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX9999 = a.layerX;
    window.myY9999 = a.layerY;
    document.addEventListener('mousemove', listener9999);
}
wintAddMenu.onmouseup = function () { document.removeEventListener('mousemove', listener9999); }

wintAddChatMenu.onmouseup = function () { document.removeEventListener('mousemove', listener9998); }
var listener9998 = function (e, a) {
    wintAddChatMenu.style.left = Number(e.clientX - myX9998) + "px";
    wintAddChatMenu.style.top = Number(e.clientY - myY9998) + "px";
    localStorage.setItem('winTopAddChatMenu', String(Number(e.clientY - myY9998)));
    localStorage.setItem('winLeftAddChatMenu', String(Number(e.clientX - myX9998)));
};
wintAddChatMenu.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX9998 = a.layerX;
    window.myY9998 = a.layerY;
    document.addEventListener('mousemove', listener9998);
}
wintAddChatMenu.onmouseup = function () { document.removeEventListener('mousemove', listener9998); }

wintLessonInfo.onmouseup = function () { document.removeEventListener('mousemove', listener9997); }
var listener9997 = function (e, a) {
    wintLessonInfo.style.left = Number(e.clientX - myX9997) + "px";
    wintLessonInfo.style.top = Number(e.clientY - myY9997) + "px";
    localStorage.setItem('winTopLessonInfo', String(Number(e.clientY - myY9997)));
    localStorage.setItem('winLeftLessonInfo', String(Number(e.clientX - myX9997)));
};
wintLessonInfo.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX9997 = a.layerX;
    window.myY9997 = a.layerY;
    document.addEventListener('mousemove', listener9997);
}
wintLessonInfo.onmouseup = function () { document.removeEventListener('mousemove', listener9997); }

wintStudAdults.onmouseup = function () { document.removeEventListener('mousemove', listener9996); }
var listener9996 = function (e, a) {
    wintStudAdults.style.left = Number(e.clientX - myX9996) + "px";
    wintStudAdults.style.top = Number(e.clientY - myY9996) + "px";
    localStorage.setItem('winTopstudentsAdults', String(Number(e.clientY - myY9996)));
    localStorage.setItem('winLeftstudentsAdults', String(Number(e.clientX - myX9996)));
};
wintStudAdults.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX9996 = a.layerX;
    window.myY9996 = a.layerY;
    document.addEventListener('mousemove', listener9996);
}
wintStudAdults.onmouseup = function () { document.removeEventListener('mousemove', listener9996); }

wintStudSkysmart.onmouseup = function () { document.removeEventListener('mousemove', listener9995); }
var listener9995 = function (e, a) {
    wintStudSkysmart.style.left = Number(e.clientX - myX9995) + "px";
    wintStudSkysmart.style.top = Number(e.clientY - myY9995) + "px";
    localStorage.setItem('winTopstudentsSkysmart', String(Number(e.clientY - myY9995)));
    localStorage.setItem('winLeftstudentsSkysmart', String(Number(e.clientX - myX9995)));
};
wintStudSkysmart.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX9995 = a.layerX;
    window.myY9995 = a.layerY;
    document.addEventListener('mousemove', listener9995);
}
wintStudSkysmart.onmouseup = function () { document.removeEventListener('mousemove', listener9995); }

document.onkeydown = function (event) { // горячие клавиши для открытия главного меню
    if (event.altKey && event.code == 'Numpad0') {
        if (document.getElementById('AFMS_addMenu').style.display == 'none') {
            document.getElementById('AFMS_addMenu').style.display = '';

            document.getElementById('hidemainmenu').onclick = function () {
                document.getElementById('AFMS_addMenu').style.display = 'none';
            }

        } else document.getElementById('AFMS_addMenu').style.display = 'none'
    }
}

document.getElementById('openchataddmenu').onclick = async function () { // открывает меню для удаления и добавления чатов
    if (document.getElementById('AFMS_addChatMenu').style.display == 'none') {
        document.getElementById('AFMS_addChatMenu').style.display = ''

        let sidarr = [];
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST"
        }).then(r => r.json()).then(r => artId = r)
        console.log(artId)

        document.getElementById('userid1').value = artId.user.id;

        document.getElementById('addChat').onclick = function () { //функция добавления чата
		
			fetchaddchat(document.getElementById('userid1').value , document.getElementById('userid2').value)

            console.log('%cChat was added successfully!', 'color:orange; font-weight:700"');
        }

        document.getElementById('RemoveChat').onclick = function () { //функция удаления чата

            fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "ru-RU,ru;q=0.9",
                    "content-type": "application/json",
                    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site"
                },
                "referrer": "https://new-teachers.skyeng.ru/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `{\"userId1\":${document.getElementById('userid1').value},\"userId2\":${document.getElementById('userid2').value}}`,
                "method": "DELETE",
                "mode": "cors",
                "credentials": "include"
            });

            console.log('%cChat was removed successfully!', 'color:red; font-weight:700"');
        }

        document.getElementById('hideMeAddChatMenu').onclick = () => { //функция скрытия меню чатов
            document.getElementById('AFMS_addChatMenu').style.display = 'none'
        }
    }
    else document.getElementById('AFMS_addChatMenu').style.display = 'none'
}

document.getElementById('openlesinfomenu').onclick = async function () { // открывает меню для просмотра информации об уроке

    if (document.getElementById('AFMS_LessonInfo').style.display == 'none') {
        document.getElementById('AFMS_LessonInfo').style.display = ''

        let d = document.cookie;
        d = d.match(/token_global=(.*)/);

        //Start function when open window and send fetch to server


        getlesinfojoin()


        // ENd of func

        //	Start

<<<<<<< HEAD
        document.getElementById('setstclass').onclick = function () { //изменяет статус комнаты на classwork
=======
        document.getElementById('setstclass').onclick = function (findapiv1,findapiv2) { //изменяет статус комнаты на classwork
            let status = 'classwork'
            let subject;
            if (document.getElementById('hashfield').value.split('/') == '')
                subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]
            else if (document.getElementById('hashfield').value.split('/') != '') {
                subject = document.getElementById('hashfield').value.split('/')[4] + '/' + document.getElementById('hashfield').value.split('/')[5];
                alert('Комната была перезапущена. Можете нажать на кнопку Searсh и увидеть актуальный статус комнаты')
            }
            findapi(subject)
            setstclasswork(findapiv1,status)
        }
        document.getElementById('setstsucc').onclick = function (findapiv1,findapiv2) { //изменяет статус комнаты на classwork
            let status = 'success'
>>>>>>> 3d60f465cf1a8ccaf6bc649a7031c81998abada0
            let subject;
            if (document.getElementById('hashfield').value.split('/') == '')
                subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]
            else if (document.getElementById('hashfield').value.split('/') != '') {
                subject = document.getElementById('hashfield').value.split('/')[4] + '/' + document.getElementById('hashfield').value.split('/')[5];
                alert('Комната была перезапущена. Можете нажать на кнопку Searсh и увидеть актуальный статус комнаты')
            }

            switch (subject) {
                case "english/room":
                    setstclasswork("https://api-english.skyeng.ru/api/v1/rooms/")
                    break;

                case "math/room":
                    setstclasswork("https://api-math.skyeng.ru/api/v1/rooms/")
                    break;

                case "computer-science/room":
                    setstclasswork("https://api-computer-science.skyeng.ru/api/v1/rooms/")
                    break;

                case "geography/room":
                    setstclasswork("https://api-geography.skyeng.ru/api/v1/rooms/")
                    break;

                case "chess/room":
                    setstclasswork("https://api-chess.skyeng.ru/api/v1/rooms/")
                    break;

                case "social-science/room":
                    setstclasswork("https://api-social-science.skyeng.ru/api/v1/rooms/")
                    break;

                case "history/room":
                    setstclasswork("https://api-history.skyeng.ru/api/v1/rooms/")
                    break;

                case "biology/room":
                    setstclasswork("https://api-biology.skyeng.ru/api/v1/rooms/")
                    break;

                case "physics/room":
                    setstclasswork("https://api-physics.skyeng.ru/api/v1/rooms/")
                    break;

                case "literature/room":
                    setstclasswork("https://api-literature.skyeng.ru/api/v1/rooms/")
                    break;

                case "chemistry/room":
                    setstclasswork("https://api-chemistry.skyeng.ru/api/v1/rooms/")
                    break;

                case "russian/room":
                    setstclasswork("https://api-russian.skyeng.ru/api/v1/rooms/")
                    break;  

				case "preschool/room":
                    setstclasswork("https://api-preschool.skyeng.ru/api/v1/rooms/")
                    break;
            }

        }

        // End

        // Start

        document.getElementById('hashroom').onclick = function () { // копируепт по клику ссылку на комнату в skysmart в буфер обмена
            if (document.getElementById('subjectnamefield').textContent != '' && document.getElementById('platformname').textContent == 'Skysmart') {
                copyToClipboard('https://vimbox.skyeng.ru/kids/' + document.getElementById('subjectnamefield').textContent.toLowerCase() + '/room/' + document.getElementById('hashroom').textContent)
                alert('Ссылка на комнату скопирована в буфер обмена!')
            } else if (document.getElementById('subjectnamefield').textContent != '' && document.getElementById('platformname').textContent == 'Adults') {
                copyToClipboard('https://vimbox.skyeng.ru/lesson/' + document.getElementById('hashroom').textContent)
                alert('Ссылка на комнату скопирована в буфер обмена!')
            }
        }

        // End

        // Start
        document.getElementById('searchHash').onclick = async function () { // функция ищет информацию о комнате по полному хешу
            let hashval = document.getElementById('hashfield').value.split('/')

            let flagplatf = 0; // unknown platform, for example main page or other page (1) - skysmart, (2) - adults
            if (hashval[3] == 'kids') {
                document.getElementById('platformname').textContent = "Skysmart";
                flagplatf = 1;
                document.getElementById('roomfor').style.display = 'none'
                document.getElementById('forstudentid').style.display = 'none'
                document.getElementById('setstclass').style.display = ''
            } else if (hashval[3] == 'lesson') {
                document.getElementById('platformname').textContent = "Adults";
                flagplatf = 2;
                document.getElementById('roomfor').style.display = ''
                document.getElementById('forstudentid').style.display = ''
                document.getElementById('setstclass').style.display = 'none'
            } else {
                flagplatf = 0
                document.getElementById('platformname').textContent = "";
                document.getElementById('roomfor').style.display = 'none'
                document.getElementById('forstudentid').style.display = 'none'
                document.getElementById('setstclass').style.display = 'none'
            }

            if (hashval != '' && flagplatf == 1) {

                let d = document.cookie;
                d = d.match(/token_global=(.*)/);

                let subject = hashval[4] + '/' + hashval[5]

                switch (subject) {
                    case "english/room":
                        loadinfo("https://api-english.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-english.skyeng.ru/api/v1/rooms/")
                        break;

                    case "math/room":
                        loadinfo("https://api-math.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-math.skyeng.ru/api/v1/rooms/")
                        break;

                    case "computer-science/room":
                        loadinfo("https://api-computer-science.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-computer-science.skyeng.ru/api/v1/rooms/")
                        break;

                    case "geography/room":
                        loadinfo("https://api-geography.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-geography.skyeng.ru/api/v1/rooms/")
                        break;

                    case "chess/room":
                        loadinfo("https://api-chess.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-chess.skyeng.ru/api/v1/rooms/")
                        break;

                    case "social-science/room":
                        loadinfo("https://api-social-science.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-social-science.skyeng.ru/api/v1/rooms/")
                        break;

                    case "history/room":
                        loadinfo("https://api-history.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-history.skyeng.ru/api/v1/rooms/")
                        break;

                    case "biology/room":
                        loadinfo("https://api-biology.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-biology.skyeng.ru/api/v1/rooms/")
                        break;

                    case "physics/room":
                        loadinfo("https://api-physics.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-physics.skyeng.ru/api/v1/rooms/")
                        break;

                    case "literature/room":
                        loadinfo("https://api-literature.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-literature.skyeng.ru/api/v1/rooms/")
                        break;

                    case "chemistry/room":
                        loadinfo("https://api-chemistry.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-chemistry.skyeng.ru/api/v1/rooms/")
                        break;

                    case "russian/room":
                        loadinfo("https://api-russian.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-russian.skyeng.ru/api/v1/rooms/")
                        break;

					case "preschool/room":
                        loadinfo("https://api-preschool.skyeng.ru/api/v2/rooms/")
                        getvideoconfigkids("https://api-preschool.skyeng.ru/api/v1/rooms/")
                        break;
                }
            } else if (hashval != '' && flagplatf == 2) {
                document.getElementById('hashroom').textContent = hashval[4];
                document.getElementById('statusroom').textContent = "No status"
                document.getElementById('subjectnamefield').textContent = "ENGLISH"

                getvideoconfadults(hash = hashval[4]);
                getusersadults(hash = hashval[4]);
                getjoinadultsinfo(hash = hashval[4]);

            } else if (hashval != '' && flagplatf == 0 && hashval.length == 1) {
                getvideoconfadults(hash = hashval[0]);
                getusersadults(hash = hashval[0]);
                getjoinadultsinfo(hash = hashval[0]);

                document.getElementById('platformname').textContent = "Adults"
                document.getElementById('hashroom').textContent = hashval[0];
                document.getElementById('statusroom').textContent = "No status"
                document.getElementById('subjectnamefield').textContent = "ENGLISH"
                document.getElementById('roomfor').style.display = ''
                document.getElementById('forstudentid').style.display = ''
            }

        }
        //end

        document.getElementById('RefreshInfo').onclick = getlesinfojoin; //функция обновляет информацию о комнате
		
		document.getElementById('ClearInfo').onclick = function () { // Очиска полей ввода
            document.getElementById('platformname').textContent = ""
            document.getElementById('roomfor').style.display = 'none'
            document.getElementById('forstudentid').style.display = 'none'
            document.getElementById('subjectnamefield').textContent = ""
            document.getElementById('vidserverurl').textContent = ""
            document.getElementById('statusroom').textContent = ""
            document.getElementById('hashroom').textContent = ""
            document.getElementById('partteachid').textContent = ""
            document.getElementById('partstudid').textContent = ""
            document.getElementById('hashfield').value = ""
        }

        document.getElementById('hideMeLessonInfo').onclick = function () { // функция скрывает меню статуса уроков
            document.getElementById('AFMS_LessonInfo').style.display = 'none'
        }

    } else document.getElementById('AFMS_LessonInfo').style.display = 'none'

}

async function getlesinfojoin() { // получает инфо об уроке и записывает в поля
    let flagplatf = 0; // unknown platform, for example main page or other page (1) - skysmart, (2) - adults
    if (location.pathname.split('/')[1] == 'kids') {
        document.getElementById('platformname').textContent = "Skymart";
        flagplatf = 1;
        document.getElementById('roomfor').style.display = 'none'
        document.getElementById('forstudentid').style.display = 'none'
        document.getElementById('setstclass').style.display = ''
    } else if (location.pathname.split('/')[1] == 'lesson') {
        document.getElementById('platformname').textContent = "Adults";
        flagplatf = 2;
        document.getElementById('roomfor').style.display = ''
        document.getElementById('forstudentid').style.display = ''
        document.getElementById('setstclass').style.display = 'none'
    } else {
        flagplatf = 0
        document.getElementById('platformname').textContent = "";
        document.getElementById('roomfor').style.display = 'none'
        document.getElementById('forstudentid').style.display = 'none'
        document.getElementById('setstclass').style.display = 'none'
    }

    if (document.location.origin == 'https://vimbox.skyeng.ru' && flagplatf == 1) {
        let d = document.cookie;
        d = d.match(/token_global=(.*)/);

        let subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]

        switch (subject) {
            case "english/room":
                loadinfo("https://api-english.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-english.skyeng.ru/api/v1/rooms/")
                break;

            case "math/room":
                loadinfo("https://api-math.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-math.skyeng.ru/api/v1/rooms/")
                break;

            case "computer-science/room":
                loadinfo("https://api-computer-science.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-computer-science.skyeng.ru/api/v1/rooms/")
                break;

            case "geography/room":
                loadinfo("https://api-geography.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-geography.skyeng.ru/api/v1/rooms/")
                break;

            case "chess/room":
                loadinfo("https://api-chess.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-chess.skyeng.ru/api/v1/rooms/")
                break;

            case "social-science/room":
                loadinfo("https://api-social-science.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-social-science.skyeng.ru/api/v1/rooms/")
                break;

            case "history/room":
                loadinfo("https://api-history.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-history.skyeng.ru/api/v1/rooms/")
                break;

            case "biology/room":
                loadinfo("https://api-biology.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-biology.skyeng.ru/api/v1/rooms/")
                break;

            case "physics/room":
                loadinfo("https://api-physics.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-physics.skyeng.ru/api/v1/rooms/")
                break;

            case "literature/room":
                loadinfo("https://api-literature.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-literature.skyeng.ru/api/v1/rooms/")
                break;

            case "chemistry/room":
                loadinfo("https://api-chemistry.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-chemistry.skyeng.ru/api/v1/rooms/")
                break;

            case "russian/room":
                loadinfo("https://api-russian.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-russian.skyeng.ru/api/v1/rooms/")
                break;
				
			case "preschool/room":
                loadinfo("https://api-preschool.skyeng.ru/api/v2/rooms/")
                getvideoconfigkids("https://api-preschool.skyeng.ru/api/v1/rooms/")
                break;
        }
    } else if (document.location.origin == 'https://vimbox.skyeng.ru' && flagplatf == 2) {

        document.getElementById('hashroom').textContent = document.URL.split('/')[4];
        document.getElementById('statusroom').textContent = "No status"
        document.getElementById('subjectnamefield').textContent = "ENGLISH"

        getvideoconfadults(hash = document.URL.split('/')[4]);
        getusersadults(hash = document.URL.split('/')[4]);
        getjoinadultsinfo(hash = document.URL.split('/')[4]);

    }
}

async function getvideoconfadults(hash) { //функция получения видеосервера на Adults

    let d = document.cookie;
    d = d.match(/token_global=(.*)/);

    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + hash + "/get-video-config?vendor=janus", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ru",
            "authorization": "Bearer" + d[1],
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"bannedServers\":[],\"recreateRoom\":false,\"forceServer\":null,\"rootDomain\":\"skyeng.ru\"}",
        "method": "PATCH",
        "credentials": "include"
    }).then(r => r.json()).then(r => vidconfadults = r)

    document.getElementById('vidserverurl').textContent = vidconfadults.endpoint.match(/video.*/)[0];

}

async function getusersadults(hash) { // функция получения информации для какого пользователя была создана комната на Adults
    await fetch("https://rooms.vimbox.skyeng.ru/rooms/api/v1/workbooks/last?roomHash=" + hash, {
        "method": "GET",
        "credentials": "include"
    }).then(r => r.json()).then(r => usersadults = r)

    console.log(usersadults)

    document.getElementById('forstudentid').textContent = usersadults.studentId;

    document.getElementById('forstudentid').onclick = function () {
        copyToClipboard(document.getElementById('forstudentid').textContent)
    }
}

async function getjoinadultsinfo(hash) { // функция получает информацию пользователйе на Adults
    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + hash + "/join", {
        "method": "PATCH",
        "credentials": "include"
    }).then(r => r.json()).then(r => joindata = r)

    console.log(joindata)

    document.getElementById('partteachid').textContent = joindata.teacher.id
    document.getElementById('partteachid').title = joindata.teacher.name + " " + joindata.teacher.surname

    if (joindata.students == '') {
        document.getElementById('partstudid').textContent = "New Student"
        document.getElementById('partstudid').title = "No name, because student didn't join the room"
    }
    else {
        document.getElementById('partstudid').textContent = joindata.students[0].id
        document.getElementById('partstudid').title = joindata.students[0].name + " " + joindata.students[0].surname
    }


}

async function getvideoconfigkids(subject) { // функция получения информации о видеосервере для англ языка
    let d = document.cookie;
    d = d.match(/token_global=(.*)/);

    let hashroom;
    if (document.getElementById('hashfield').value == '')
        hashroom = document.URL.split('/')[6]
    else if (document.getElementById('hashfield').value != '')
        hashroom = document.getElementById('hashfield').value.split('/')[6]

    await fetch(subject + hashroom + "/video-config", {

        "headers": {
            "accept": "application/json",
            "authorization": "Bearer" + d[1],
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"bannedServers\":[],\"recreateRoom\":false,\"forceServer\":null,\"rootDomain\":\"skyeng.ru\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.json()).then(r => vidconfresult = r)
    console.log(vidconfresult)

    document.getElementById('vidserverurl').textContent = vidconfresult.endpoint.match(/video.*/)[0];
}

async function loadinfo(subject) { // инициализация функции для загрузки инфо о комнате
    let d = document.cookie;
    d = d.match(/token_global=(.*)/);
    let hashroom;
    let subjname;
    if (document.getElementById('hashfield').value == '') {
        hashroom = document.URL.split('/')[6]
        subjname = document.URL.split('/')[4]
    } else if (document.getElementById('hashfield').value != '') {
        hashroom = document.getElementById('hashfield').value.split('/')[6]
        subjname = document.getElementById('hashfield').value.split('/')[4]
    }


    await fetch(subject + hashroom, {
        "headers": {
            "accept": "application/json",
            "authorization": "Bearer" + d[1],
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.json()).then(r => joinresult = r)
    document.getElementById('statusroom').textContent = joinresult.status
    document.getElementById('hashroom').textContent = joinresult.hash

    for (let i = 0; i < joinresult.participants.length; i++) {
        if (joinresult.participants[i].role == 'teacher') {
            document.getElementById('partteachid').textContent = joinresult.participants[i].userId
            document.getElementById('partteachid').title = "Имя " + joinresult.participants[i].name + ' Время создания комнаты: ' + joinresult.participants[i].startAt + ' Время подключения: ' + joinresult.participants[i].joinedAt
        } else if (joinresult.participants[i].role == 'student') {
            document.getElementById('partstudid').textContent = joinresult.participants[i].userId
            document.getElementById('partstudid').title = "Имя " + joinresult.participants[i].name + ' Время создания комнаты: ' + joinresult.participants[i].startAt + ' Время подключения: ' + joinresult.participants[i].joinedAt
        }
    }

    document.getElementById('subjectnamefield').textContent = subjname.toUpperCase();

    console.log('%cИнформация об уроке получена!', 'color:lightgreen; font-weight:700')
    console.log(joinresult)
}

function setstclasswork(subject) { // функция изменяющая статус комнаты с любого на classwork

    let hashval = document.getElementById('hashfield').value.split('/')

    if (location.origin == 'https://vimbox.skyeng.ru' && hashval == '' && location.pathname.split('/')[3] != 'teacher') {

        fetch(subject + document.URL.split('/')[6], {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"status\":\"classwork\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "include"
        });

        alert('Комната перезапущена!')
        location.reload();
    } else if (hashval != '') {

        let d = document.cookie;
        d = d.match(/token_global=(.*)/);

        fetch(subject + hashval[6], {
            "headers": {
                "accept": "application/json",
                "authorization": "Bearer" + d[1],
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://vimbox.skyeng.ru/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"status\":\"classwork\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "include"
        });

    }

}

const copyToClipboard = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

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

document.getElementById('openstudentsmenu').onclick = function () {
    document.getElementById('mainmenu').style.display = 'none'
    document.getElementById('studentsmenu').style.display = ''
}

document.getElementById('backtomainfromstudmenu').onclick = function () {
    document.getElementById('mainmenu').style.display = ''
    document.getElementById('studentsmenu').style.display = 'none'
}

document.getElementById('lkpskysmart').onclick = async function () { //обработчик открытия окна для ЛКП - Skysmart 
    if (document.getElementById('AFMS_SkysmartStudInfo').style.display == 'none') {
        document.getElementById('AFMS_SkysmartStudInfo').style.display = ''
        document.getElementById('AFMS_AdultStudInfo').style.display = 'none'
		
		let arraytoshow = [];
		let commonarr = [];
		let sleepflag = '';
		let vacationflag = '';
		document.getElementById('infobarskysmart').innerHTML = '';
		let objSel = document.getElementById("listofsubjects");
		    objSel.length = 1
            objSel[0].selected = true;

        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST"
        }).then(r => r.json()).then(r => artId = r)
        console.log(artId)
		
		await fetch("https://academic-gateway.skyeng.ru/academic/api/teacher-classroom/get-data/personal", {
		  "method": "POST",
		  "credentials": "include"
		}).then(r=>r.json()).then(r=>kidsdata=r)
		console.log(kidsdata)
		
		for (let i = 0; i < Object.keys(kidsdata).length; i++) {
			let multiclasssubjects = Object.keys(kidsdata)[i]
			switch (multiclasssubjects) {
				case 'math': 
					arraytoshow = [];
					outputskysmartstudents(item = i)					
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Математика</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Математика</span>' + '<br>' + arraytoshow;
				break;
				
				case 'english': 
					arraytoshow = [];
					outputskysmartstudents(item = i)	
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Английский язык</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Английский язык</span>' + '<br>' + arraytoshow;
				break;
				
				case 'russian': 
					arraytoshow = [];
					outputskysmartstudents(item = i)	
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Русский язык</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Русский язык</span>' + '<br>' + arraytoshow;
				break;	

				case 'social-science': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Обществознание</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Обществознание</span>' + '<br>' + arraytoshow;
				break;	

				case 'preschool': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Дошколка</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Дошколка</span>' + '<br>' + arraytoshow;
				break;

				case 'chess': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Шахматы</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Шахматы</span>' + '<br>' + arraytoshow;
				break;

				case 'computer-science': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Компьютерные курсы</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Компьютерные курсы</span>' + '<br>' + arraytoshow;
				break;

				case 'chemistry': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Химия</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Химия</span>' + '<br>' + arraytoshow;
				break;

				case 'physics': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Физика</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Физика</span>' + '<br>' + arraytoshow;
				break;

				case 'history': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">История</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">История</span>' + '<br>' + arraytoshow;
				break;	

				case 'biology': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Биология</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">Биология</span>' + '<br>' + arraytoshow;
				break;	

				case 'geography': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">География</span>' + '<br>' + arraytoshow;
					commonarr += '<span class="subjname">География</span>' + '<br>' + arraytoshow;
				break;
			}
		}
		
		      if (Object.keys(kidsdata).length != 0) {
                for (let i = 0; i < Object.keys(kidsdata).length; i++) {
                    if (Object.keys(kidsdata)[i] == "math") {
                        addOption(objSel, 'Математика', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "english") {
						addOption(objSel, 'Английский язык', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "chess") {
						addOption(objSel, 'Шахматы', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "computer-science") {
						addOption(objSel, 'Компьютерные курсы', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "preschool") {
						addOption(objSel, 'Дошколка', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "social-science") {
						addOption(objSel, 'Обществознание', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "russian") {
						addOption(objSel, 'Русский язык', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "physics") {
						addOption(objSel, 'Физика', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "chemistry") {
						addOption(objSel, 'Химия', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "history") {
						addOption(objSel, 'История', `${Object.keys(kidsdata)[i]}`)
                    } else if (Object.keys(kidsdata)[i] == "biology") {
						addOption(objSel, 'Биология', `${Object.keys(kidsdata)[i]}`)
					}
                }
            }
					
			document.getElementById('usersearchskysmart').oninput = function() {
			var text2 = document.getElementById("usersearchskysmart");	
            var val2 = text2.value;
            s2 = '';	

			for (let i = 0; i < Object.keys(kidsdata).length; i++) {
				for (let j = 0; j < Object.values(kidsdata)[i].length; j++) { 
					if (Object.values(kidsdata)[i][j].id == val2) {
						if (Object.values(kidsdata)[i][j].status == "sleep") {
							s2 += '<div class="kidsoutdata sleep">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + '<span title="💤 - ученик уснул">💤</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
						} else if (Object.values(kidsdata)[i][j].status == "vacation") {
							s2 += '<div class="kidsoutdata vacation">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + '<span title="⛱ - ученик в отпуске">⛱</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
						} else {
							s2 += '<div class="kidsoutdata">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
						}
					} else if (Object.values(kidsdata)[i][j].name.toUpperCase() == val2.toUpperCase()) {
						if (Object.values(kidsdata)[i][j].status == "sleep") {
							s2 += '<div class="kidsoutdata sleep">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + '<span title="💤 - ученик уснул">💤</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
						} else if (Object.values(kidsdata)[i][j].status == "vacation") {
							s2 += '<div class="kidsoutdata vacation">' + '<div class="studadultname">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<span title="⛱ - ученик в отпуске">⛱</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
						} else {
							s2 += '<div class="kidsoutdata">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
						}
					}
				}
			}
						
			document.getElementById('infobarskysmart').innerHTML = document.getElementById("usersearchskysmart").value != '' ? s2 : commonarr;
			
						let arrmvurepkid = document.getElementsByName('mvurkidseport') // функция открытия отчетов МВУ при работе со списком исходным после получения инфы об учениках
						for (let j = 0; j < arrmvurepkid.length; j++) {
							arrmvurepkid[j].onclick = function () {
								window.open("https://marketing-core.skyeng.ru/report/html/report?student_id=" + document.getElementsByClassName('idkidsstyle')[j].textContent.match(/\d+/)[0])
							}
						}
						
						let deleteonechatkid = document.getElementsByName('delkidschat') // функция удаления чатов с учеником при работе с исходным списком после получения инфы об учениках
						for (let l = 0; l < deleteonechatkid.length; l++) {
							deleteonechatkid[l].onclick = function () {
								let answ = confirm("Вы действительно желаете удалить чат с учеником? " + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0]);
								if (answ) {
									fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
										"headers": {
											"content-type": "application/json",
											"sec-fetch-mode": "cors",
											"sec-fetch-site": "same-site"
										},
										"referrer": "https://new-teachers.skyeng.ru/",
										"referrerPolicy": "strict-origin-when-cross-origin",
										"body": `{\"userId1\": ${artId.user.id},\"userId2\":${document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0]}}`,
										"method": "DELETE",
										"mode": "cors",
										"credentials": "include"
									});
								}
							}
						}

						let kidsprofile = document.getElementsByName('openkidsprofile') // функция открытия профиля ученика после получения исходного списка
						for (let l = 0; l < kidsprofile.length; l++) {
							kidsprofile[l].onclick = function () {
								window.open("https://vimbox.skyeng.ru/profile/" + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0])
							}
						}

						let kidspaymentshistory = document.getElementsByName('openpaymentkidsshistory')  // функция открытия истории оплат ученика после получения исходного списка
						for (let l = 0; l < kidspaymentshistory.length; l++) {
							kidspaymentshistory[l].onclick = function () {
								window.open('https://vimbox.skyeng.ru/profile/student/' + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0] + '/last-classes')
							}
						}
			}
			
			async function outputskysmartstudents(item) { //вывод учеников чтобы 100500 раз не писать этот текст
					for (let j = 0; j < Object.values(kidsdata)[item].length; j++) {
						if (Object.values(kidsdata)[item][j].status == 'sleep') {
							arraytoshow += '<div class="kidsoutdata sleep">' + '<div class="studkidstname">' + '<span title="💤 - ученик уснул">💤</span>' + Object.values(kidsdata)[item][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[item][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>';
						} else if (Object.values(kidsdata)[item][j].status == 'vacation') {
							arraytoshow += '<div class="kidsoutdata vacation">' + '<div class="studkidstname">' + '<span title="⛱ - ученик в отпуске">⛱</span>' + Object.values(kidsdata)[item][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[item][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>';
						} else {
							arraytoshow += '<div class="kidsoutdata">' + '<div class="studkidstname">' + Object.values(kidsdata)[item][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[item][j].id + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>';
						}
					}
			}
				
			
			function showselectedsubject() { // функция переключения отображения списка учеников в мультиклассруме только один предмет выводит или все
			document.getElementById('infobarskysmart').innerHTML = ''
			arraytoshow = [];
			document.getElementById('infobarskysmart').innerHTML = '';
			for (let i = 0; i < Object.keys(kidsdata).length; i++) {
			let objSelf = document.getElementById("listofsubjects");
			if (objSelf.value == 'math' && Object.keys(kidsdata)[i] == 'math') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Математика</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'english' && Object.keys(kidsdata)[i] == 'english') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Английский язык</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'russian' && Object.keys(kidsdata)[i] == 'russian') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Русский язык</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'chess' && Object.keys(kidsdata)[i] == 'chess') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Шахматы</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'computer-science' && Object.keys(kidsdata)[i] == 'computer-science') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Компьютерные курсы</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'preschool' && Object.keys(kidsdata)[i] == 'preschool') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Дошколка</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'social-science' && Object.keys(kidsdata)[i] == 'social-science') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Обществознание</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'physics' && Object.keys(kidsdata)[i] == 'physics') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Физика</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'chemistry' && Object.keys(kidsdata)[i] == 'chemistry') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Химия</span>' + '<br>' + arraytoshow;
					break;
			} else if (objSelf.value == 'history' && Object.keys(kidsdata)[i] == 'history') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">История</span>' + '<br>' + arraytoshow;
					break;	
			} else if (objSelf.value == 'biology' && Object.keys(kidsdata)[i] == 'biology') {
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Биология</span>' + '<br>' + arraytoshow;
					break;
					
			} else if (objSelf.value == 'all') {
				let multiclasssubjects = Object.keys(kidsdata)[i]
				switch (multiclasssubjects) {		
				case 'math': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Математика</span>' + '<br>' + arraytoshow;
				break;
				
				case 'english': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Английский язык</span>' + '<br>' + arraytoshow;
				break;
				
				case 'russian': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Русский язык</span>' + '<br>' + arraytoshow;
				break;	

				case 'social-science': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Обществознание</span>' + '<br>' + arraytoshow;
				break;	

				case 'preschool': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Дошколка</span>' + '<br>' + arraytoshow;
				break;

				case 'chess': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Шахматы</span>' + '<br>' + arraytoshow;
				break;

				case 'computer-science': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Компьютерные курсы</span>' + '<br>' + arraytoshow;
				break;

				case 'chemistry': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Химия</span>' + '<br>' + arraytoshow;
				break;

				case 'physics': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Физика</span>' + '<br>' + arraytoshow;
				break;

				case 'history': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">История</span>' + '<br>' + arraytoshow;
				break;	

				case 'biology': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">Биология</span>' + '<br>' + arraytoshow;
				break;	

				case 'geography': 
					arraytoshow = [];
					outputskysmartstudents(item = i)
					document.getElementById('infobarskysmart').innerHTML += '<span class="subjname">География</span>' + '<br>' + arraytoshow;
				break;
				}
				}
			}
			
				let arrmvurepkid = document.getElementsByName('mvurkidseport') // функция открытия отчетов МВУ при работе со списком фильтрации предметов
				for (let j = 0; j < arrmvurepkid.length; j++) {
					arrmvurepkid[j].onclick = function () {
						window.open("https://marketing-core.skyeng.ru/report/html/report?student_id=" + document.getElementsByClassName('idkidsstyle')[j].textContent.match(/\d+/)[0])
					}
				}
				
				 let deleteonechatkid = document.getElementsByName('delkidschat') // функция удаления чатов с учеником при работе со списком фильтрации предметов
					for (let l = 0; l < deleteonechatkid.length; l++) {
						deleteonechatkid[l].onclick = function () {
							let answ = confirm("Вы действительно желаете удалить чат с учеником? " + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0]);
							if (answ) {
								fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
									"headers": {
										"content-type": "application/json",
										"sec-fetch-mode": "cors",
										"sec-fetch-site": "same-site"
									},
									"referrer": "https://new-teachers.skyeng.ru/",
									"referrerPolicy": "strict-origin-when-cross-origin",
									"body": `{\"userId1\": ${artId.user.id},\"userId2\":${document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0]}}`,
									"method": "DELETE",
									"mode": "cors",
									"credentials": "include"
								});
							}
						}
					}
					
				let kidsprofile = document.getElementsByName('openkidsprofile') // функция открытия профиля ученика после фильтрации списка
					for (let l = 0; l < kidsprofile.length; l++) {
						kidsprofile[l].onclick = function () {
							window.open("https://vimbox.skyeng.ru/profile/" + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0])
						}
					}
		
				let kidspaymentshistory = document.getElementsByName('openpaymentkidsshistory')  // функция открытия истории оплат ученика после фильтрации
					for (let l = 0; l < kidspaymentshistory.length; l++) {
						kidspaymentshistory[l].onclick = function () {
							window.open('https://vimbox.skyeng.ru/profile/student/' + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0] + '/last-classes')
						}
					}
		
			}
			
		document.getElementById('actualizestudreportkids').onclick = function () { // функция актуалазирует все отчеты в выбранном предмете или разделе "Все"
			let idslist = document.getElementsByClassName('idkidsstyle')
			for (let k = 0; k < idslist.length; k++) {
			
			fetch("https://api-profile.skyeng.ru/api/v1/students/"+idslist[k].textContent.match(/\d+/)[0]+"/school-report", {
				  "body": "{\"student_level\":\"--\",\"materials_used\":\"--\",\"endurance\":\"--\",\"distraction\":\"--\",\"difficulties\":\"--\",\"activities\":\"--\",\"skills_to_develop\":\"--\",\"technical_problems\":\"--\",\"homework\":\"--\"}",
				  "method": "POST",
				  "credentials": "include"
				});
            }
            alert('Отчеты об учениках были успешно актуализированы с заполнением полей -- !');			
		}

		let arrmvurepkid = document.getElementsByName('mvurkidseport') // функция открытия отчетов МВУ при работе со списком исходным после получения инфы об учениках
		for (let j = 0; j < arrmvurepkid.length; j++) {
			arrmvurepkid[j].onclick = function () {
				window.open("https://marketing-core.skyeng.ru/report/html/report?student_id=" + document.getElementsByClassName('idkidsstyle')[j].textContent.match(/\d+/)[0])
			}
        }
		
        let deleteonechatkid = document.getElementsByName('delkidschat') // функция удаления чатов с учеником при работе с исходным списком после получения инфы об учениках
        for (let l = 0; l < deleteonechatkid.length; l++) {
            deleteonechatkid[l].onclick = function () {
                let answ = confirm("Вы действительно желаете удалить чат с учеником? " + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0]);
                if (answ) {
                    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
                        "headers": {
                            "content-type": "application/json",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-site"
                        },
                        "referrer": "https://new-teachers.skyeng.ru/",
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": `{\"userId1\": ${artId.user.id},\"userId2\":${document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0]}}`,
                        "method": "DELETE",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }
            }
        }

        let kidsprofile = document.getElementsByName('openkidsprofile') // функция открытия профиля ученика после получения исходного списка
        for (let l = 0; l < kidsprofile.length; l++) {
            kidsprofile[l].onclick = function () {
                window.open("https://vimbox.skyeng.ru/profile/" + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0])
            }
        }

        let kidspaymentshistory = document.getElementsByName('openpaymentkidsshistory')  // функция открытия истории оплат ученика после получения исходного списка
        for (let l = 0; l < kidspaymentshistory.length; l++) {
            kidspaymentshistory[l].onclick = function () {
                window.open('https://vimbox.skyeng.ru/profile/student/' + document.getElementsByClassName('idkidsstyle')[l].textContent.match(/\d+/)[0] + '/last-classes')
            }
        }
			
			
		document.getElementById('listofsubjects').onchange = showselectedsubject;
		
		document.getElementById('addallchatsmulticlassrom').onclick = function () { // функция добавляющая в один клик чаты со всеми не уснувшими учениками 
			 let sidarr = [];
			 
			for (let i = 0; i < Object.keys(kidsdata).length; i++) {
            let arrayofsubjects = Object.keys(kidsdata)[i]
            switch (arrayofsubjects) {
                case 'math': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cМатематика','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","
						
						console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }
                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками в разделе Математика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'russian': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cРусский язык','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","  

                        console.log(Object.values(kidsdata)[i][j].id  + " Status: " + Object.values(kidsdata)[i][j].status)						
                    }
                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Русский язык - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'social-science': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cОбществознание','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","

                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)                        }
                        alert("Чаты с учениками раздела Обществознание - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'preschool': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cДошколка','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","

                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Дошкольная подготовка - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'chess': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cШахматы','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","
						
                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Шахматы -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'computer-science': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cКомпьютерные курсы','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","

                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Компьютерные курсы - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'chemistry': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cХимия','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","
						
                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Химия -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'physics': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cФизика','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","

                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Физика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'english': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cАнглийский язык','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","

                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Английский язык -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'history': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cИстория','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","
						
                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела История -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'biology': console.log(Object.values(kidsdata)[i])
						sidarr = [];
						console.log('%cБиология','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","
						
                        console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела Биология - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'geography': console.log(Object.values(kidsdata)[i])
					sidarr = [];
					console.log('%cГеография','color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                        if (Object.values(kidsdata)[i][j].status != "sleep")
                            sidarr += Object.values(kidsdata)[i][j].id + ","
						
						
						console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
							fetchaddchat(sidarr[j] , artId.user.id)
                        }
                        alert("Чаты с учениками раздела География - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
            }
        }
		}
		
    } else {
        document.getElementById('AFMS_SkysmartStudInfo').style.display = 'none'
    }
}

let testos;
document.getElementById('lkpadult').onclick = async function () { // функция обработчик открытия меню ЛКП Adults
    if (document.getElementById('AFMS_AdultStudInfo').style.display == 'none') {
        document.getElementById('AFMS_SkysmartStudInfo').style.display = 'none'
        document.getElementById('AFMS_AdultStudInfo').style.display = ''

        let arrtoshow = [];

        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST"
        }).then(r => r.json()).then(r => artId = r)
        console.log(artId)

        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v1/teachers/" + artId.user.id + "/students", {
            "method": "GET",
            "credentials": "include"
        }).then(r => r.json()).then(r => adultdata = r)
        console.log(adultdata)
		testos = adultdata;

        for (let i = 0; i < adultdata.length; i++) {
            arrtoshow += '<div class="rowadultdata">' + '<div class="studadultname">' + adultdata[i].name + '</div>' + '<div class="idadultstyle"> ID: ' + adultdata[i].id + '</div>' + '<div style="margin-top: 5px; margin-bottom: 5px; text-align:center;">' + '<span name="mvureport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delchat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + ' ' + '<span name="listofhomework" class="homeworklist" title="Открывает раздел с домашними заданиями ученика">🏡</span>' + ' ' + '<span name="portfolioadult" class="portfoliolist" title="Открывает раздел с Портфолио">📚</span>' + '</div>' + '</div>'
        }

        document.getElementById('infobaradult').innerHTML = arrtoshow;
		
		document.getElementById('usersearch').oninput = function () { //функция поикска по айди пользователя 
            var text1 = document.getElementById("usersearch");
            var val1 = text1.value;
            s = '';

            for (var i = 0; i < testos.length; ++i) {
                if (testos[i].id == val1) {
                    s += '<div class="rowadultdata">' + '<div class="studadultname">' + adultdata[i].name + '</div>' + '<div class="idadultstyle"> ID: ' + adultdata[i].id + '</div>' + '<div style="margin-top: 5px; margin-bottom: 5px; text-align:center;">' + '<span name="mvureport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delchat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + ' ' + '<span name="listofhomework" class="homeworklist" title="Открывает раздел с домашними заданиями ученика">🏡</span>' + ' ' + '<span name="portfolioadult" class="portfoliolist" title="Открывает раздел с Портфолио">📚</span>' + '</div>' + '</div>'
                } else if (testos[i].name.toUpperCase() == val1.toUpperCase()) {
					s += '<div class="rowadultdata">' + '<div class="studadultname">' + adultdata[i].name + '</div>' + '<div class="idadultstyle"> ID: ' + adultdata[i].id + '</div>' + '<div style="margin-top: 5px; margin-bottom: 5px; text-align:center;">' + '<span name="mvureport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delchat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + ' ' + '<span name="listofhomework" class="homeworklist" title="Открывает раздел с домашними заданиями ученика">🏡</span>' + ' ' + '<span name="portfolioadult" class="portfoliolist" title="Открывает раздел с Портфолио">📚</span>' + '</div>' + '</div>'
				}
            }
            document.getElementById('infobaradult').innerHTML = document.getElementById("usersearch").value != '' ? s : arrtoshow;
			
			        let arrmvurep = document.getElementsByName('mvureport')
					for (let j = 0; j < arrmvurep.length; j++) {
						arrmvurep[j].onclick = function () {
							window.open("https://marketing-core.skyeng.ru/report/html/report?student_id=" + adultdata[j].id)
						}
					}

					let deleteonechat = document.getElementsByName('delchat')
					for (let l = 0; l < deleteonechat.length; l++) {
						deleteonechat[l].onclick = function () {
							let answ = confirm("Вы действительно желаете удалить чат с учеником? " + adultdata[l].id);
							if (answ) {
								fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
									"headers": {
										"content-type": "application/json",
										"sec-fetch-mode": "cors",
										"sec-fetch-site": "same-site"
									},
									"referrer": "https://new-teachers.skyeng.ru/",
									"referrerPolicy": "strict-origin-when-cross-origin",
									"body": `{\"userId1\": ${artId.user.id},\"userId2\":${adultdata[l].id}}`,
									"method": "DELETE",
									"mode": "cors",
									"credentials": "include"
								});
							}
						}
					}

					let adultprofile = document.getElementsByName('openprofile')
					for (let l = 0; l < adultprofile.length; l++) {
						adultprofile[l].onclick = function () {
							window.open("https://vimbox.skyeng.ru/profile/" + adultdata[l].id)
						}
					}

					let showpaymentshistory = document.getElementsByName('openpaymentshistory')
					for (let l = 0; l < showpaymentshistory.length; l++) {
						showpaymentshistory[l].onclick = function () {
							window.open('https://vimbox.skyeng.ru/profile/student/' + adultdata[l].id + '/last-classes')
						}
					}

					let hwlist = document.getElementsByName('listofhomework')
					for (let l = 0; l < hwlist.length; l++) {
						hwlist[l].onclick = function () {
							window.open('https://vimbox.skyeng.ru/student/' + adultdata[l].id + '/homework')
						}
					}
					
					let portflist = document.getElementsByName('portfolioadult')
					for (let l = 0; l < portflist.length; l++) {
						portflist[l].onclick = function () {
							window.open('https://vimbox.skyeng.ru/portfolio?studentId=' + adultdata[l].id)
						}
					}
        }

        document.getElementById('addallchatswithadult').onclick = function () { // функция добавляет чаты со всеми взрослыми ученикаим

            for (let k = 0; k < adultdata.length; k++) {
			
				fetchaddchat(artId.user.id, adultdata[k].id)

            }
            alert('Чаты со всеми учениками были добавлены успешно! Страницу будет перезагружена!');
            location.reload()
        }
		
		document.getElementById('actualizestudreportadult').onclick = function () {
			
			for (let k = 0; k < adultdata.length; k++) {
			
			fetch("https://api-profile.skyeng.ru/api/v1/students/"+adultdata[k].id+"/school-report", {
			  "body": "{\"student_level\":\"--\",\"materials_used\":\"--\",\"endurance\":\"--\",\"distraction\":\"--\",\"difficulties\":\"--\",\"activities\":\"--\",\"skills_to_develop\":\"--\",\"technical_problems\":\"--\",\"homework\":\"--\"}",
			  "method": "POST",
			  "credentials": "include"
			});
            }
            alert('Отчеты об учениках были успешно актуализированы с заполнением полей -- !');			
		}

        let arrmvurep = document.getElementsByName('mvureport')
        for (let j = 0; j < arrmvurep.length; j++) {
            arrmvurep[j].onclick = function () {
                window.open("https://marketing-core.skyeng.ru/report/html/report?student_id=" + adultdata[j].id)
            }
        }

        let deleteonechat = document.getElementsByName('delchat')
        for (let l = 0; l < deleteonechat.length; l++) {
            deleteonechat[l].onclick = function () {
                let answ = confirm("Вы действительно желаете удалить чат с учеником? " + adultdata[l].id);
                if (answ) {
                    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
                        "headers": {
                            "content-type": "application/json",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-site"
                        },
                        "referrer": "https://new-teachers.skyeng.ru/",
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": `{\"userId1\": ${artId.user.id},\"userId2\":${adultdata[l].id}}`,
                        "method": "DELETE",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }
            }
        }

        let adultprofile = document.getElementsByName('openprofile')
        for (let l = 0; l < adultprofile.length; l++) {
            adultprofile[l].onclick = function () {
                window.open("https://vimbox.skyeng.ru/profile/" + adultdata[l].id)
            }
        }

        let showpaymentshistory = document.getElementsByName('openpaymentshistory')
        for (let l = 0; l < showpaymentshistory.length; l++) {
            showpaymentshistory[l].onclick = function () {
                window.open('https://vimbox.skyeng.ru/profile/student/' + adultdata[l].id + '/last-classes')
            }
        }

        let hwlist = document.getElementsByName('listofhomework')
        for (let l = 0; l < hwlist.length; l++) {
            hwlist[l].onclick = function () {
                window.open('https://vimbox.skyeng.ru/student/' + adultdata[l].id + '/homework')
            }
        }
		
		let portflist = document.getElementsByName('portfolioadult')
		for (let l = 0; l < portflist.length; l++) {
			portflist[l].onclick = function () {
                window.open('https://vimbox.skyeng.ru/portfolio?studentId=' + adultdata[l].id)
            }
        }

    } else {
        document.getElementById('AFMS_AdultStudInfo').style.display = 'none'
    }
}

document.getElementById('hidestudentsSkysmartMenu').onclick = function () {
    document.getElementById('AFMS_SkysmartStudInfo').style.display = 'none'
}

document.getElementById('hidestudentsAdultstMenu').onclick = function () {
    document.getElementById('AFMS_AdultStudInfo').style.display = 'none'
}


function addOption(oListbox, text, value) {  //функция добавления опции в список
	var oOption = document.createElement("option");
	oOption.appendChild(document.createTextNode(text));
	oOption.setAttribute("value", value);
	oListbox.appendChild(oOption);
}
// var getSelectedText = function() {
        // var text = '';
        // if (window.getSelection) {
            // text = window.getSelection().toString();
        // } else if (document.selection) {
            // text = document.selection.createRange().text;
        // }
        // return text;
    // };

    // $('.класс у которого происходит выделение').on('mouseup', function(){
        // var text = getSelectedText();
        // if (text != ''){
            // alert('действие при выделении');
        // }
    // });

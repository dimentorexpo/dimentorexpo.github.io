//Globalvars
//let joinresult;
let allWordSets = [];  // Массив для хранения всех данных о наборах слов

function mystylesAFMS() {
    let mystl = document.createElement('style');
    document.body.append(mystl);
    var styleAFMS = `

	

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
							<button id="openexercisesmenu" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎯</span> Exercises</button>
							<br>
							<button id="VocabularyMenu" title = "Открывает  меню для роаботы со словарем" style="margin: 5px 5px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">📚</span> Vocabulary</button>
						</div>

						<div id="studentsmenu" style="display:none">
							<button id="lkpskysmart" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎓</span> Smartroom</button>
							<br>
							<button id="lkpadult" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"> <span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🅰</span> Aduls</button>
							<br>
							<button id="backtomainfromstudmenu" style="margin: 5px 0px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🔙</span> Back</button>
						</div>

						<div id="exercisesmenu" style="display:none">
							<button id="exercisekysmart" style="margin: 5px 0px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🎓</span> Smartroom</button>
							<br>
							<button id="exercisesttc" style="margin: 5px 5px 0px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"> <span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">👽</span> TTC</button>
							<br>
							<button id="backmainmenufromexercises" style="margin: 5px 0px 5px 5px; height: 30px; min-width: 105px; padding-top:8px;" class="commonbtn dobig"><span style="font-size:18px;float:left; position:relative; top:-5px; left:0px;">🔙</span> Back</button>
						</div>

					</span>
				   </div>`;

var win_addChatMenu = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px;" id="addChatMenuHeader">
                            <button class="commonbtn" title="скрывает меню" id="hideMeAddChatMenu" style="width:50px; background: #228B22;">hide</button>
							<span id="outputstatus" style="display:none; background:#537068; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); border-radius: 20px; box-shadow: 0px 3px 1px rgb(0 0 0 / 35%); border: 1px solid black; font-weight:700;padding: 5px;"></span>
                        </div>

						<input id="userid1" style="margin-left: 5px; width:100px; text-align:center;" placeholder="teacherId">
						<input id="userid2" style="width:100px; text-align:center;" placeholder="userId #2">
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
                            <button class="commonbtn" id="setstsucc" style="margin: 5px; width: 70px; height: 30px;">Success</button>
							<button class="commonbtn" id="searchHash" style="margin: 5px; width: 70px; height: 30px;">Search</button>
						</div>

					</span>
				  </div>`;

var win_kidsExercises = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px; width:500px;" id="exercisesSkysmartHeader">
                            <button class="commonbtn" title="скрывает меню" id="hideExercisesSkysmartMenu" style="width:50px; height:30px; background: #228B22;">hide</button>
							<button class="commonbtn" id="RefreshInfoExerciseKids" title = "Обновляет информацию по открытой комнате" style="margin: 5px; width: 25px; height: 25px; padding: 0;">♻</button>
							<span id="studname" style="color:#d5f4ff; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%)"></span>
							<span id="studserviceid" style="color:bisque; cursor:text; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%)"></span>
							<span id="studid" style="color:bisque; cursor:text; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%)"></span>
                        </div>

						<div style="margin: 5px; width:500px;" id="exercisesSkysmartTeacher">
							<span id="teachname" style="color:#d5f4ff; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%)"></span>
							<span id="teachdid" style="color:bisque; cursor:text; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%)"></span>
						</div>

						<div style="margin:5px;">
							<input id="roomhashhwkids" placeholder="homework link" style="width: 440px; margin-left: 15px; text-align: center;">
							<button class="commonbtn" id="getroomdatakids">🔎</button>
						</div>

						<div id="exercisebarskysmart" class="skysmartexcbar">
						<div>

					</span>
				   </div>`;

var win_TTCExercises = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px; width:500px;" id="exercisesTTCHeader">
                            <button class="commonbtn" title="скрывает меню" id="hideExercisesTTCMenu" style="width:50px; height:30px; background: #228B22;">hide</button>
							<button class="commonbtn" id="RefreshInfoExerciseTTC" title = "Обновляет информацию по открытой комнате" style="margin: 5px; width: 25px; height: 25px; padding: 0;">♻</button>
                        </div>

						<div style="margin:5px;">
							<input id="roomhashttc" placeholder="Room link" style="width: 500px; margin-left: 10px; text-align: center;">
							<button class="commonbtn" id="getroomdatattc">🔎</button>
						</div>

						<div id="exercisebarttc" class="skysmartexcbar">
						<div>

					</span>
				   </div>`;


var win_Vocabulary = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">

					     <div style="margin: 5px; width:500px;">
                            <button class="commonbtn" title="скрывает меню" id="hideVocabularyMenu" style="width:50px; height:30px; background: #228B22;">hide</button>
							<button class="commonbtn" id="ClearVocabulary" title = "Обновляет информацию по открытой комнате" style="margin: 5px; width: 30px; height: 30px; padding: 0">🧹</button>
                        </div>

						<div id="vocabularbar" class="vocabularbarcls">
							<div id="searchtoolswords" style="margin: 5px; width:500px;">
								<input id="iduserwords" style="width: 360px;text-align: center; height: 23px;" placeholder="Enter student ID to get vocabulary info">
								<button id="findwords" class="commonbtn" style="height: 30px;width: 30px; margin-left: 5px;">🔎</button>
							</div>
							<div class="vocabularremtools">
								<button class="commonbtn" id="deleteallwords" title="Удаляет все выделенные слова">❌ Selected</button>
								<button class="commonbtn" id="unlearnallwords" title="Сбрасывает прогресс выученных слов">⭕ Reset Learned</button>
								<button class="commonbtn" id="delunlearnallwords" title="Удаляет все выученные слова">⛔ Learned</button>
								<button class="commonbtn" id="learncheckedwords" title="Делает слово выученным">✅ Learn</button>
								<button class="commonbtn" id="selectallwords" title="Выделяет все слова">☑ Select All</button>
							</div>
                            <div class="vocabularremtools">
                                <input id="searchwordinput" style="width: 470px; text-align: center; height: 23px; display: none; margin-top: 7px;" placeholder="Enter word for search">
							</div>
						</div>

						<div id="wordsout" class="wordsout">
						</div>

					</span>
				   </div>`;



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


if (localStorage.getItem('winTopexercisesSkysmart') == null) { //additional skysmart students exercise menu
    localStorage.setItem('winTopexercisesSkysmart', '118');
    localStorage.setItem('winLeftexercisesSkysmart', '407');
}

if (localStorage.getItem('winTopexercisesTTC') == null) { //additional TTC info menu
    localStorage.setItem('winTopexercisesTTC', '118');
    localStorage.setItem('winLeftexercisesTTC', '407');
}

if (localStorage.getItem('winTopVocabulary') == null) { //additional skysmart students info menu
    localStorage.setItem('winTopVocabulary', '118');
    localStorage.setItem('winLeftVocabulary', '407');
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

let wintExercSkysmart = document.createElement('div');
document.body.append(wintExercSkysmart);
wintExercSkysmart.className = 'wintInitializeSkysmartExercisesInfo'
wintExercSkysmart.style = 'display:none;  top: ' + localStorage.getItem('winTopexercisesSkysmart') + 'px; left: ' + localStorage.getItem('winLeftexercisesSkysmart') + 'px;';
wintExercSkysmart.setAttribute('id', 'AFMS_SkysmartExercInfo');
wintExercSkysmart.innerHTML = win_kidsExercises;

let wintExercTTC = document.createElement('div');
document.body.append(wintExercTTC);
wintExercTTC.className = 'wintInitializeTTCExercisesInfo'
wintExercTTC.style = 'display:none;  top: ' + localStorage.getItem('winTopexercisesTTC') + 'px; left: ' + localStorage.getItem('winLeftexercisesTTC') + 'px;';
wintExercTTC.setAttribute('id', 'AFMS_TTCExercInfo');
wintExercTTC.innerHTML = win_TTCExercises;

let wintVocabulary = document.createElement('div');
document.body.append(wintVocabulary);
wintVocabulary.className = 'wintInitializeVocabulary'
wintVocabulary.style = 'display:none;  top: ' + localStorage.getItem('winTopVocabulary') + 'px; left: ' + localStorage.getItem('winLeftVocabulary') + 'px;';
wintVocabulary.setAttribute('id', 'AFMS_Vocabulary');
wintVocabulary.innerHTML = win_Vocabulary;

function checkelementt(a) { // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX, a.clientY)

    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT') {
        return true;
    }
    return false;
}

//aditional menu

var listenerAddMenu = function (e, a) {
    wintAddMenu.style.left = Number(e.clientX - myX9999) + "px";
    wintAddMenu.style.top = Number(e.clientY - myY9999) + "px";
    localStorage.setItem('winTopAddMenu', String(Number(e.clientY - myY9999)));
    localStorage.setItem('winLeftAddMenu', String(Number(e.clientX - myX9999)));
};
wintAddMenu.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9999 = a.layerX;
        window.myY9999 = a.layerY;
        document.addEventListener('mousemove', listenerAddMenu);
    }
}
wintAddMenu.onmouseup = function () { document.removeEventListener('mousemove', listenerAddMenu); }

// end aditional menu

// add chat menu

var listenerAddChatMenu = function (e, a) {
    wintAddChatMenu.style.left = Number(e.clientX - myX9998) + "px";
    wintAddChatMenu.style.top = Number(e.clientY - myY9998) + "px";
    localStorage.setItem('winTopAddChatMenu', String(Number(e.clientY - myY9998)));
    localStorage.setItem('winLeftAddChatMenu', String(Number(e.clientX - myX9998)));
};
wintAddChatMenu.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9998 = a.layerX;
        window.myY9998 = a.layerY;
        document.addEventListener('mousemove', listenerAddChatMenu);
    }
}
wintAddChatMenu.onmouseup = function () { document.removeEventListener('mousemove', listenerAddChatMenu); }

// end add chat menu

// lexxon info menu

var listenerLessonInfo = function (e, a) {
    wintLessonInfo.style.left = Number(e.clientX - myX9997) + "px";
    wintLessonInfo.style.top = Number(e.clientY - myY9997) + "px";
    localStorage.setItem('winTopLessonInfo', String(Number(e.clientY - myY9997)));
    localStorage.setItem('winLeftLessonInfo', String(Number(e.clientX - myX9997)));
};
wintLessonInfo.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9997 = a.layerX;
        window.myY9997 = a.layerY;
        document.addEventListener('mousemove', listenerLessonInfo);
    }
}
wintLessonInfo.onmouseup = function () { document.removeEventListener('mousemove', listenerLessonInfo); }

// end lesson info menu

// info students adult

var listenerStudAdults = function (e, a) {
    wintStudAdults.style.left = Number(e.clientX - myX9996) + "px";
    wintStudAdults.style.top = Number(e.clientY - myY9996) + "px";
    localStorage.setItem('winTopstudentsAdults', String(Number(e.clientY - myY9996)));
    localStorage.setItem('winLeftstudentsAdults', String(Number(e.clientX - myX9996)));
};
wintStudAdults.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9996 = a.layerX;
        window.myY9996 = a.layerY;
        document.addEventListener('mousemove', listenerStudAdults);
    }
}
wintStudAdults.onmouseup = function () { document.removeEventListener('mousemove', listenerStudAdults); }

// end info students adult

// info students kids

var listenerStudSkysmart = function (e, a) {
    wintStudSkysmart.style.left = Number(e.clientX - myX9995) + "px";
    wintStudSkysmart.style.top = Number(e.clientY - myY9995) + "px";
    localStorage.setItem('winTopstudentsSkysmart', String(Number(e.clientY - myY9995)));
    localStorage.setItem('winLeftstudentsSkysmart', String(Number(e.clientX - myX9995)));
};
wintStudSkysmart.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9995 = a.layerX;
        window.myY9995 = a.layerY;
        document.addEventListener('mousemove', listenerStudSkysmart);
    }
}
wintStudSkysmart.onmouseup = function () { document.removeEventListener('mousemove', listenerStudSkysmart); }

// end info students kids

// Exercises skysmart

var listenerExercSkysmart = function (e, a) {
    wintExercSkysmart.style.left = Number(e.clientX - myX9993) + "px";
    wintExercSkysmart.style.top = Number(e.clientY - myY9993) + "px";
    localStorage.setItem('winTopexercisesSkysmart', String(Number(e.clientY - myY9993)));
    localStorage.setItem('winLeftexercisesSkysmart', String(Number(e.clientX - myX9993)));
};
wintExercSkysmart.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9993 = a.layerX;
        window.myY9993 = a.layerY;
        document.addEventListener('mousemove', listenerExercSkysmart);
    }
}
wintExercSkysmart.onmouseup = function () { document.removeEventListener('mousemove', listenerExercSkysmart); }

// End Exercises skysmart

// Exercises TTC

var listenerExercTTC = function (e, a) {
    wintExercTTC.style.left = Number(e.clientX - myX9992) + "px";
    wintExercTTC.style.top = Number(e.clientY - myY9992) + "px";
    localStorage.setItem('winTopexercisesTTC', String(Number(e.clientY - myY9992)));
    localStorage.setItem('winLeftexercisesTTC', String(Number(e.clientX - myX9992)));
};
wintExercTTC.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9992 = a.layerX;
        window.myY9992 = a.layerY;
        document.addEventListener('mousemove', listenerExercTTC);
    }
}
wintExercTTC.onmouseup = function () { document.removeEventListener('mousemove', listenerExercTTC); }

// End Exercises TTC

//Vocabulary

var listenerVocabulary = function (e, a) {
    wintVocabulary.style.left = Number(e.clientX - myX9992) + "px";
    wintVocabulary.style.top = Number(e.clientY - myY9992) + "px";
    localStorage.setItem('winTopVocabulary', String(Number(e.clientY - myY9992)));
    localStorage.setItem('winLeftVocabulary', String(Number(e.clientX - myX9992)));
};
wintVocabulary.onmousedown = function (a) {
    if (checkelementt(a)) {
        window.myX9992 = a.layerX;
        window.myY9992 = a.layerY;
        document.addEventListener('mousemove', listenerVocabulary);
    }
}
wintVocabulary.onmouseup = function () { document.removeEventListener('mousemove', listenerVocabulary); }

//End of vocabulary


// main script

let div = document.getElementById("AFMS_addMenu");
let allowedSites = ["vimbox.skyeng.ru", "new-teachers.skyeng.ru", "teachers.skyeng.ru", "student.skyeng.ru", "ttc.skyeng.ru"];
let token;

if (allowedSites.includes(location.host)) {

document.querySelector('body').addEventListener('dblclick', (event) => {
        let tags = ["INPUT", "TEXTAREA", "BUTTON", "H1", "H2", "H3", "UL", "LI", "VIM-WORD", "P", "SPAN"];
        if (!tags.includes(event.target.tagName)) {
            div.style.display = "block";
            div.style.left = (event.clientX - 180) + "px";
            div.style.top = event.clientY + "px";

            token = Object.fromEntries(document.cookie.split(/; */).map(c => {
                const [key, ...v] = c.split('=');
                return [key, decodeURIComponent(v.join('='))];
            }));
	        console.log(token)
		}
});

document.querySelector('body').addEventListener('click', (event) => {
    if (!div.contains(event.target)) {
        div.style.display = "none";
    }
});

document.getElementById('hidemainmenu').onclick = function () {
        div.style.display = 'none';
}

    document.onkeydown = function(event) {
        if ((event.altKey && event.code == 'Numpad0') || (event.altKey && event.code == 'Digit0')) {
            if (div.style.display == 'none') {

                div.style.display = '';

                token = Object.fromEntries(document.cookie.split(/; */).map(c => {
                    const [key, ...v] = c.split('=');
                    return [key, decodeURIComponent(v.join('='))];
                }));
                console.log(token);
            } else {
                div.style.display = 'none';
            }
        }
    }
}

document.getElementById('openchataddmenu').onclick = async function () { // открывает меню для удаления и добавления чатов
    if (document.getElementById('AFMS_addChatMenu').style.display == 'none') {
        document.getElementById('AFMS_addChatMenu').style.display = ''

        let sidarr = [];
        document.getElementById('userid1').value = await getUserId();

        document.getElementById('addChat').onclick = function () { //функция добавления чата

		    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
				"headers": {
					"content-type": "application/json",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				},
				"referrer": "https://vimbox.skyeng.ru/",
				"referrerPolicy": "strict-origin-when-cross-origin",
				"body": `{\"userId1\":${document.getElementById('userid1').value},\"userId2\":${document.getElementById('userid2').value}}`,
				"method": "POST",
				"mode": "cors",
				"credentials": "include"
			});
			
            console.log('%cChat was added successfully!', 'color:lightgreen; font-weight:700');
            document.getElementById('outputstatus').innerText = "Чат добавлен"
            document.getElementById('outputstatus').style.color = "#48e114"
            document.getElementById('outputstatus').style.display = ""
            setTimeout(() => {
                document.getElementById('outputstatus').innerText = ""
                document.getElementById('outputstatus').style.display = "none"
            }, 3000)
        }

        document.getElementById('RemoveChat').onclick = function () { //функция удаления чата
		
		
		    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
				"headers": {
					"content-type": "application/json",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				},
				"referrer": "https://vimbox.skyeng.ru/",
				"referrerPolicy": "strict-origin-when-cross-origin",
				"body": `{\"userId1\":${document.getElementById('userid1').value},\"userId2\":${document.getElementById('userid2').value}}`,
				"method": "DELETE",
				"mode": "cors",
				"credentials": "include"
			});
		
            console.log('%cChat was removed successfully!', 'color:orange; font-weight:700');

            document.getElementById('outputstatus').innerText = "Чат удалён"
            document.getElementById('outputstatus').style.color = "orange"
            document.getElementById('outputstatus').style.display = ""
            setTimeout(() => {
                document.getElementById('outputstatus').innerText = ""
                document.getElementById('outputstatus').style.color = "#48e114"
                document.getElementById('outputstatus').style.display = "none"
            }, 3000)

        }

        document.getElementById('hideMeAddChatMenu').onclick = function () { //функция скрытия меню чатов
            document.getElementById('AFMS_addChatMenu').style.display = 'none'
        }
    }
    else document.getElementById('AFMS_addChatMenu').style.display = 'none'
}

document.getElementById('openlesinfomenu').onclick = async function () { // открывает меню для просмотра информации об уроке

    if (document.getElementById('AFMS_LessonInfo').style.display == 'none') {
        document.getElementById('AFMS_LessonInfo').style.display = ''

        //Start function when open window and send fetch to server

        getlesinfojoin()

        // ENd of func

        //	Start

        document.getElementById('setstclass').onclick = function () { //изменяет статус комнаты на classwork
            let status = 'classwork'
            let subject;
            let api;
            let vapi = '1';
            if (document.getElementById('hashfield').value.split('/') == '')
                subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]
            else if (document.getElementById('hashfield').value.split('/') != '') {
                subject = document.getElementById('hashfield').value.split('/')[4] + '/' + document.getElementById('hashfield').value.split('/')[5];
                alert('Комната была перезапущена. Можете нажать на кнопку Searсh и увидеть актуальный статус комнаты')
            }
            api = findapi(subject, vapi)
            setstclasswork(api, status)
        }

        // End

        //	Start

        document.getElementById('setstsucc').onclick = function () { //изменяет статус комнаты на success
            let status = 'success'
            let subject;
            let api;
            let vapi = '1';
            if (document.getElementById('hashfield').value.split('/') == '')
                subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]
            else if (document.getElementById('hashfield').value.split('/') != '') {
                subject = document.getElementById('hashfield').value.split('/')[4] + '/' + document.getElementById('hashfield').value.split('/')[5];
                alert('Комната была перезапущена. Можете нажать на кнопку Searсh и увидеть актуальный статус комнаты')
            }
            api = findapi(subject, vapi)
            setstclasswork(api, status)
        }

        // End

        // Start

        document.getElementById('hashroom').onclick = function () { // копируепт по клику ссылку на комнату в skysmart в буфер обмена
            if (document.getElementById('subjectnamefield').textContent != '' && document.getElementById('platformname').textContent == 'Skysmart') {
                copyToClipboardAFMS('https://vimbox.skyeng.ru/kids/' + document.getElementById('subjectnamefield').textContent.toLowerCase() + '/room/' + document.getElementById('hashroom').textContent)
                alert('Ссылка на комнату скопирована в буфер обмена!')
            } else if (document.getElementById('subjectnamefield').textContent != '' && document.getElementById('platformname').textContent == 'Adults') {
                copyToClipboardAFMS('https://vimbox.skyeng.ru/lesson/' + document.getElementById('hashroom').textContent)
                alert('Ссылка на комнату скопирована в буфер обмена!')
            }
        }

        // End

        // Start
        document.getElementById('searchHash').onclick = async function () { // функция ищет информацию о комнате по полному хешу
            let vapi = '1';
            let api1;
            let api2;
            let hashval = document.getElementById('hashfield').value.split('/')

            let flagplatf = 0; // unknown platform, for example main page or other page (1) - skysmart, (2) - adults
            if (hashval[3] == 'kids') {
                document.getElementById('platformname').textContent = "Skysmart";
                flagplatf = 1;
                document.getElementById('roomfor').style.display = 'none'
                document.getElementById('forstudentid').style.display = 'none'
                document.getElementById('setstclass').style.display = ''
                document.getElementById('setstsucc').style.display = ''
            } else if (hashval[3] == 'lesson') {
                document.getElementById('platformname').textContent = "Adults";
                flagplatf = 2;
                document.getElementById('roomfor').style.display = ''
                document.getElementById('forstudentid').style.display = ''
                document.getElementById('setstclass').style.display = 'none'
                document.getElementById('setstsucc').style.display = 'none'
            } else {
                flagplatf = 0
                document.getElementById('platformname').textContent = "";
                document.getElementById('roomfor').style.display = 'none'
                document.getElementById('forstudentid').style.display = 'none'
                document.getElementById('setstclass').style.display = 'none'
                document.getElementById('setstsucc').style.display = 'none'
            }

            if (hashval != '' && flagplatf == 1) {
                let subject = hashval[4] + '/' + hashval[5]

                api1 = findapi(subject, vapi)
                vapi++;
                api2 = findapi(subject, vapi)
                loadinfo(api2)
                getvideoconfigkids(api1)

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
            document.getElementById('setstclass').style.display = 'none'
            document.getElementById('setstsucc').style.display = 'none'
        }

        document.getElementById('hideMeLessonInfo').onclick = function () { // функция скрывает меню статуса уроков
            document.getElementById('AFMS_LessonInfo').style.display = 'none'
        }

    } else document.getElementById('AFMS_LessonInfo').style.display = 'none'

}

async function getlesinfojoin() { // получает инфо об уроке и записывает в поля
    let vapi = '1';
    let api1;
    let api2;
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
        let subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]

        api1 = findapi(subject, vapi)
        vapi++;
        api2 = findapi(subject, vapi)
        loadinfo(api2)
        getvideoconfigkids(api1)

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
    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + hash + "/get-video-config?vendor=janus", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ru",
            "authorization": "Bearer " + token.token_global,
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
        copyToClipboardAFMS(document.getElementById('forstudentid').textContent)
    }
}

async function getjoinadultsinfo(hash) { // функция получает информацию пользователйе на Adults
    await joinroom(hash)

    document.getElementById('partteachid').textContent = joinresult.teacher.id
    document.getElementById('partteachid').title = joinresult.teacher.name + " " + joinresult.teacher.surname

    if (joinresult.students == '') {
        document.getElementById('partstudid').textContent = "New Student"
        document.getElementById('partstudid').title = "No name, because student didn't join the room"
    }
    else {
        document.getElementById('partstudid').textContent = joinresult.students[0].id
        document.getElementById('partstudid').title = joinresult.students[0].name + " " + joinresult.students[0].surname
    }


}

async function getvideoconfigkids(api1) { // функция получения информации о видеосервере для англ языка
    let hashroom;
    if (document.getElementById('hashfield').value == '')
        hashroom = document.URL.split('/')[6]
    else if (document.getElementById('hashfield').value != '')
        hashroom = document.getElementById('hashfield').value.split('/')[6]

    await fetch(api1 + hashroom + "/video-config", {
        "body": "{\"bannedServers\":[],\"recreateRoom\":false,\"forceServer\":null,\"rootDomain\":\"skyeng.ru\"}",
        "method": "POST",
        "credentials": "include"
    }).then(r => r.json()).then(r => vidconfresult = r)
    console.log(vidconfresult)

    if (vidconfresult != null && vidconfresult != undefined && vidconfresult.error == undefined) {
        document.getElementById('vidserverurl').textContent = vidconfresult.endpoint.match(/video.*/)[0];
    } else console.log(vidconfresult.error.code + ' ' + vidconfresult.error.message)
}

async function loadinfo(api2) { // инициализация функции для загрузки инфо о комнате
    let hashroom;
    let subjname;
    if (document.getElementById('hashfield').value == '') {
        hashroom = document.URL.split('/')[6]
        subjname = document.URL.split('/')[4]
    } else if (document.getElementById('hashfield').value != '') {
        hashroom = document.getElementById('hashfield').value.split('/')[6]
        subjname = document.getElementById('hashfield').value.split('/')[4]
    }


    await fetch(api2 + hashroom, {
        "body": null,
        "method": "GET",
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

function findapi(subject, vapi) {
    let findapiv1;
    let findapiv2;

    switch (subject) {
        case "english/room":
            findapiv1 = ("https://api-english.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-english.skyeng.ru/api/v2/rooms/")
            break;

        case "math/room":
            findapiv1 = ("https://api-math.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-math.skyeng.ru/api/v2/rooms/")
            break;

        case "computer-science/room":
            findapiv1 = ("https://api-computer-science.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-computer-science.skyeng.ru/api/v2/rooms/")
            break;

        case "geography/room":
            findapiv1 = ("https://api-geography.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-geography.skyeng.ru/api/v2/rooms/")
            break;

        case "chess/room":
            findapiv1 = ("https://api-chess.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-chess.skyeng.ru/api/v2/rooms/")
            break;

        case "social-science/room":
            findapiv1 = ("https://api-social-science.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-social-science.skyeng.ru/api/v2/rooms/")
            break;

        case "history/room":
            findapiv1 = ("https://api-history.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-history.skyeng.ru/api/v2/rooms/")
            break;

        case "biology/room":
            findapiv1 = ("https://api-biology.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-biology.skyeng.ru/api/v2/rooms/")
            break;

        case "physics/room":
            findapiv1 = ("https://api-physics.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-physics.skyeng.ru/api/v2/rooms/")
            break;

        case "literature/room":
            findapiv1 = ("https://api-literature.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-literature.skyeng.ru/api/v2/rooms/")
            break;

        case "chemistry/room":
            findapiv1 = ("https://api-chemistry.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-chemistry.skyeng.ru/api/v2/rooms/")
            break;

        case "russian/room":
            findapiv1 = ("https://api-russian.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-russian.skyeng.ru/api/v2/rooms/")
            break;

        case "preschool/room":
            findapiv1 = ("https://api-preschool.skyeng.ru/api/v1/rooms/")
            findapiv2 = ("https://api-preschool.skyeng.ru/api/v2/rooms/")
            break;
    }
    if (vapi == '1') {
        return (findapiv1)
    } else if (vapi == '2') {
        return (findapiv2)
    } else {
        console.log(vapi + 'ошибка определения api');
    }
}

function setstclasswork(api, status) { // функция изменяющая статус комнаты

    let hashval = document.getElementById('hashfield').value.split('/')

    if (location.origin == 'https://vimbox.skyeng.ru' && hashval == '' && location.pathname.split('/')[3] != 'teacher') {

        fetch(api + document.URL.split('/')[6], {
            "headers": {
                "accept": "application/json",
                "content-type": "application/json",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "body": "{\"status\":\"" + status + "\",\"name\":\"\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "include"
        });

        alert('Выставлен статус ' + status + ' !')
        location.reload();
    } else if (hashval != '') {

        fetch(api + hashval[6], {
            "headers": {
                "accept": "application/json",
                "content-type": "application/json",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "body": "{\"status\":\"" + status + "\",\"name\":\"\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "include"
        });

    }

}

const copyToClipboardAFMS = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function fetchaddchat(userid1, userid2, method) { //вспомогательная функция просто добавления чата мекжду пользователям
    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"userId1\":${userid1},\"userId2\":${userid2}}`,
        "method": method,
        "mode": "cors",
        "credentials": "include"
    });
}

document.getElementById('openstudentsmenu').onclick = function () {
    document.getElementById('mainmenu').style.display = 'none'
    document.getElementById('studentsmenu').style.display = ''
}
document.getElementById('openexercisesmenu').onclick = function () {
    document.getElementById('mainmenu').style.display = 'none'
    document.getElementById('exercisesmenu').style.display = ''
}

document.getElementById('backtomainfromstudmenu').onclick = function () {
    document.getElementById('mainmenu').style.display = ''
    document.getElementById('studentsmenu').style.display = 'none'
}

document.getElementById('backmainmenufromexercises').onclick = function () {
    document.getElementById('mainmenu').style.display = ''
    document.getElementById('exercisesmenu').style.display = 'none'
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
            "headers": {
                "content-type": "application/json",
            },
            "method": "POST",
            "body": "{\"teacherId\":null}",
            "credentials": "include"
        }).then(r => r.json()).then(r => kidsdata = r)
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

        document.getElementById('usersearchskysmart').oninput = function () {
            var text2 = document.getElementById("usersearchskysmart");
            var val2 = text2.value;
            s2 = '';

            for (let i = 0; i < Object.keys(kidsdata).length; i++) {
                for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {
                    if (Object.values(kidsdata)[i][j].id == val2) {
                        if (Object.values(kidsdata)[i][j].status == "sleep") {
                            s2 += '<div class="kidsoutdata sleep">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + '<span title="💤 - ученик уснул">💤</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + '</div>' + (Object.values(kidsdata)[i][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[i][j].segmentBadge + '</div>' : '') + 'Яз.обслуж: ' + (Object.values(kidsdata)[i][j].serviceLocale != null ? Object.values(kidsdata)[i][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
                        } else if (Object.values(kidsdata)[i][j].status == "vacation") {
                            s2 += '<div class="kidsoutdata vacation">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + '<span title="⛱ - ученик в отпуске">⛱</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + (Object.values(kidsdata)[i][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[i][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[i][j].serviceLocale != null ? Object.values(kidsdata)[i][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
                        } else {
                            s2 += '<div class="kidsoutdata">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + (Object.values(kidsdata)[i][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[i][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[i][j].serviceLocale != null ? Object.values(kidsdata)[i][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
                        }
                    } else if (Object.values(kidsdata)[i][j].name.toUpperCase() == val2.toUpperCase()) {
                        if (Object.values(kidsdata)[i][j].status == "sleep") {
                            s2 += '<div class="kidsoutdata sleep">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + '<span title="💤 - ученик уснул">💤</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + (Object.values(kidsdata)[i][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[i][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[i][j].serviceLocale != null ? Object.values(kidsdata)[i][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
                        } else if (Object.values(kidsdata)[i][j].status == "vacation") {
                            s2 += '<div class="kidsoutdata vacation">' + '<div class="studadultname">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<span title="⛱ - ученик в отпуске">⛱</span>' + ' ' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + (Object.values(kidsdata)[i][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[i][j].segmentBadge + '</div>' : '') + '<div  class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[i][j].serviceLocale != null ? Object.values(kidsdata)[i][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
                        } else {
                            s2 += '<div class="kidsoutdata">' + '<div class="sbjnamesearch">' + Object.keys(kidsdata)[i] + '</div>' + '<div class="studadultname">' + Object.values(kidsdata)[i][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[i][j].id + '</div>' + (Object.values(kidsdata)[i][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[i][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[i][j].serviceLocale != null ? Object.values(kidsdata)[i][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>' + '</div>';
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
                Object.values(kidsdata)[item][j].segmentBadge != null ? Object.values(kidsdata)[item][j].segmentBadge : '';
                if (Object.values(kidsdata)[item][j].status == 'sleep') {
                    arraytoshow += '<div class="kidsoutdata sleep">' + '<div class="studkidstname">' + '<span title="💤 - ученик уснул">💤</span>' + Object.values(kidsdata)[item][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[item][j].id + '</div>' + (Object.values(kidsdata)[item][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[item][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[item][j].serviceLocale != null ? Object.values(kidsdata)[item][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>';
                } else if (Object.values(kidsdata)[item][j].status == 'vacation') {
                    arraytoshow += '<div class="kidsoutdata vacation">' + '<div class="studkidstname">' + '<span title="⛱ - ученик в отпуске">⛱</span>' + Object.values(kidsdata)[item][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[item][j].id + '</div>' + (Object.values(kidsdata)[item][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[item][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[item][j].serviceLocale != null ? Object.values(kidsdata)[item][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>';
                } else {
                    arraytoshow += '<div class="kidsoutdata">' + '<div class="studkidstname">' + Object.values(kidsdata)[item][j].name + '</div>' + '<div class="idkidsstyle">' + 'ID: ' + Object.values(kidsdata)[item][j].id + '</div>' + (Object.values(kidsdata)[item][j].segmentBadge != null ? '<div class="badgename">' + Object.values(kidsdata)[item][j].segmentBadge + '</div>' : '') + '<div class="languageobsl">' + 'Яз.обслуж: ' + (Object.values(kidsdata)[item][j].serviceLocale != null ? Object.values(kidsdata)[item][j].serviceLocale : 'Пусто') + '</div>' + '<div style="text-align:center;">' + '<span name="mvurkidseport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delkidschat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openkidsprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentkidsshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + '</div>' + '</div>';
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

                fetch("https://api-profile.skyeng.ru/api/v1/students/" + idslist[k].textContent.match(/\d+/)[0] + "/school-report", {
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
                        console.log('%cМатематика', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }
                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками в разделе Математика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'russian': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cРусский язык', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }
                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Русский язык - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'social-science': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cОбществознание', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Обществознание - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'preschool': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cДошколка', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Дошкольная подготовка - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'chess': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cШахматы', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Шахматы -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'computer-science': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cКомпьютерные курсы', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Компьютерные курсы - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'chemistry': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cХимия', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Химия -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'physics': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cФизика', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Физика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'english': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cАнглийский язык', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Английский язык -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'history': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cИстория', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела История -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'biology': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cБиология', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","

                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
                            }
                            alert("Чаты с учениками раздела Биология - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                        }
                        break;
                    case 'geography': console.log(Object.values(kidsdata)[i])
                        sidarr = [];
                        console.log('%cГеография', 'color:lightgreen; font-weight:700')
                        for (let j = 0; j < Object.values(kidsdata)[i].length; j++) {

                            if (Object.values(kidsdata)[i][j].status != "sleep")
                                sidarr += Object.values(kidsdata)[i][j].id + ","


                            console.log(Object.values(kidsdata)[i][j].id + " Status: " + Object.values(kidsdata)[i][j].status)
                        }

                        if (typeof (sidarr) != 'object') {
                            sidarr = sidarr.split(',');

                            for (let j = 0; j < sidarr.length - 1; j++) {
                                fetchaddchat(sidarr[j], artId.user.id, "POST")
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
            arrtoshow += '<div class="rowadultdata">' + '<div class="studadultname">' + adultdata[i].name + '</div>' + '<div class="idadultstyle"> ID: ' + adultdata[i].id + '<span name="removeadult" class="removestudent" title="По клику удаляет ученика из списка учеников">🚷</span>' + ' ' + '</div>' + '<div style="margin-top: 5px; margin-bottom: 5px; text-align:center;">' + '<span name="mvureport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delchat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + ' ' + '<span name="listofhomework" class="homeworklist" title="Открывает раздел с домашними заданиями ученика">🏡</span>' + ' ' + '<span name="portfolioadult" class="portfoliolist" title="Открывает раздел с Портфолио">📚</span>' + '</div>' + '</div>'
        }

        document.getElementById('infobaradult').innerHTML = arrtoshow;

        document.getElementById('usersearch').oninput = function () { //функция поикска по айди пользователя
            var text1 = document.getElementById("usersearch");
            var val1 = text1.value;
            var idcontainer = [];
            s = '';

            for (var i = 0; i < testos.length; ++i) {
                if (adultdata[i].id == val1) {
                    s += '<div class="rowadultdata">' + '<div class="studadultname">' + adultdata[i].name + '</div>' + '<div class="idadultstyle"> ID: ' + adultdata[i].id + '<span name="removeadult" class="removestudent" title="По клику удаляет ученика из списка учеников">🚷</span>' + ' ' + '</div>' + '<div style="margin-top: 5px; margin-bottom: 5px; text-align:center;">' + '<span name="mvureport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delchat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + ' ' + '<span name="listofhomework" class="homeworklist" title="Открывает раздел с домашними заданиями ученика">🏡</span>' + ' ' + '<span name="portfolioadult" class="portfoliolist" title="Открывает раздел с Портфолио">📚</span>' + '</div>' + '</div>'
                    idcontainer.push(adultdata[i].id)
                } else if (adultdata[i].name.toUpperCase() == val1.toUpperCase()) {
                    s += '<div class="rowadultdata">' + '<div class="studadultname">' + adultdata[i].name + '</div>' + '<div class="idadultstyle"> ID: ' + adultdata[i].id + '<span name="removeadult" class="removestudent" title="По клику удаляет ученика из списка учеников">🚷</span>' + ' ' + '</div>' + '<div style="margin-top: 5px; margin-bottom: 5px; text-align:center;">' + '<span name="mvureport" class="mvushka" title="По клику открывает отчет МВУ с новой ссылкой">📋</span>' + ' ' + '<span name="delchat" class="deletechat" title="По клику удаляет чат с учеником">❌</span>' + ' ' + '<span name="openprofile" class="adultprofile" title="Открывает полный профиль ученика">🕵️‍♂️</span>' + ' ' + '<span name="openpaymentshistory" class="paymenthistory" title="Открывает Историю оплат ученика">💰</span>' + ' ' + '<span name="listofhomework" class="homeworklist" title="Открывает раздел с домашними заданиями ученика">🏡</span>' + ' ' + '<span name="portfolioadult" class="portfoliolist" title="Открывает раздел с Портфолио">📚</span>' + '</div>' + '</div>'
                    idcontainer.push(adultdata[i].id)
                }
            }
            console.log("ID's: " + idcontainer)
            document.getElementById('infobaradult').innerHTML = document.getElementById("usersearch").value != '' ? s : arrtoshow;

            let arrmvurep = document.getElementsByName('mvureport')
            for (let j = 0; j < arrmvurep.length; j++) {
                arrmvurep[j].onclick = function () {
                    window.open("https://marketing-core.skyeng.ru/report/html/report?student_id=" + idcontainer[j])
                }
            }

            let removestudent = document.getElementsByName('removeadult')
            for (let z = 0; z < removestudent.length; z++) {
                removestudent[z].onclick = function () {

                    let answ = confirm("Вы действительно желаете удалить ученика " + idcontainer[z] + " из списка?");
                    if (answ) {
                        fetch("https://rooms-vimbox.skyeng.ru/users/api/v1/teachers/unlink-student/" + idcontainer[z], {
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        });
                    }
                }
            }

            let deleteonechat = document.getElementsByName('delchat')
            for (let l = 0; l < deleteonechat.length; l++) {
                deleteonechat[l].onclick = function () {
                    let answ = confirm("Вы действительно желаете удалить чат с учеником? " + idcontainer[l]);
                    if (answ) {

                        fetchaddchat(artId.user.id, idcontainer[i], "DELETE")
                    }
                }
            }

            let adultprofile = document.getElementsByName('openprofile')
            for (let l = 0; l < adultprofile.length; l++) {
                adultprofile[l].onclick = function () {
                    window.open("https://vimbox.skyeng.ru/profile/" + idcontainer[l])
                }
            }

            let showpaymentshistory = document.getElementsByName('openpaymentshistory')
            for (let l = 0; l < showpaymentshistory.length; l++) {
                showpaymentshistory[l].onclick = function () {
                    window.open('https://vimbox.skyeng.ru/profile/student/' + idcontainer[l] + '/last-classes')
                }
            }

            let hwlist = document.getElementsByName('listofhomework')
            for (let l = 0; l < hwlist.length; l++) {
                hwlist[l].onclick = function () {
                    window.open('https://vimbox.skyeng.ru/student/' + idcontainer[l] + '/homework')
                }
            }

            let portflist = document.getElementsByName('portfolioadult')
            for (let l = 0; l < portflist.length; l++) {
                portflist[l].onclick = function () {
                    window.open('https://vimbox.skyeng.ru/portfolio?studentId=' + idcontainer[l])
                }
            }
        }

        document.getElementById('addallchatswithadult').onclick = function () { // функция добавляет чаты со всеми взрослыми ученикаим

            for (let k = 0; k < adultdata.length; k++) {

                fetchaddchat(artId.user.id, adultdata[k].id, "POST")

            }
            alert('Чаты со всеми учениками были добавлены успешно! Страницу будет перезагружена!');
            location.reload()
        }

        document.getElementById('actualizestudreportadult').onclick = function () {

            for (let k = 0; k < adultdata.length; k++) {

                fetch("https://api-profile.skyeng.ru/api/v1/students/" + adultdata[k].id + "/school-report", {
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

        let removestudent = document.getElementsByName('removeadult')
        for (let z = 0; z < removestudent.length; z++) {
            removestudent[z].onclick = function () {
                let deletestudansw;
                deletestudansw = confirm("Вы уверены, что хотите удалить ученика из Showcase?")
                if (deletestudansw) {

                    fetch("https://rooms-vimbox.skyeng.ru/users/api/v1/teachers/unlink-student/" + adultdata[z].id, {
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }
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

let hwroomdata = '';
async function gethwroominfo(api, hash) {
    await fetch(api + hash, {
        "credentials": "include"
    }).then(r => r.json()).then(r => hwroomdata = r)
}

function getkidsroominfo(data) {
    let temparr = [];
    let hwarr = [];
	let indexOfSlides=''
			
	let flagofuser='';

	for (let z=0; z<data.participants.length;z++) {
		if (data.participants[z].role == 'student')
			flagofuser = data.participants[z].userId;
	}
	
	for (let usId=0; usId<data.lessonCards.length; usId++) {
		if (flagofuser == data.lessonCards[usId].userId) {
			indexOfSlides = usId
		}
	}
	
    for (let i = 0; i < data.lessonCards[indexOfSlides].themes.length; i++) {
        temparr += '<div class="roomtypekids" style="cursor:default;">' + data.lessonCards[indexOfSlides].themes[i].name + '<br>' + '</div>'
        for (let j = 0; j < data.lessonCards[indexOfSlides].themes[i].cards.length; j++) {
            (data.lessonCards[indexOfSlides].themes[i].cards[j].completeness == 100 && data.lessonCards[indexOfSlides].themes[i].cards[j].score == null) ? data.lessonCards[indexOfSlides].themes[i].cards[j].score = 100 : data.lessonCards[indexOfSlides].themes[i].cards[j].score;
            if (data.lessonCards[indexOfSlides].themes[i].cards[j].completeness == null) {
                data.lessonCards[indexOfSlides].themes[i].cards[j].completeness = '——'
                data.lessonCards[indexOfSlides].themes[i].cards[j].score = '—'
            }
            temparr += '<div class="itemexerciseskids">' + [j + 1] + '.' +
                data.lessonCards[indexOfSlides].themes[i].cards[j].name + ' ' +
                '<span class="stepuidslkids" style="display:none">' + data.lessonCards[indexOfSlides].themes[i].cards[j].stepUuid + '</span>' +
                '<span class="savelinktocms" title="Копирует в буфер обмена ссылку на CMS для этого слайда"> 💾 </span>' +
                '<span style="float:right; margin-right: 80px;">' + data.lessonCards[indexOfSlides].themes[i].cards[j].completeness + '</span>' +
                '<span style="float:right; margin-right: 60px;">' + data.lessonCards[indexOfSlides].themes[i].cards[j].score + '</span>' +
                '</div>';
        }
    }

    document.getElementById('exercisebarskysmart').innerHTML += '<div class="roomtype">Lesson</div>' +
        '<div class="boxwithslides" style="display:none">' +
        '<div class="itemexerciseskids">' +
        '<div style="text-align:center;">Информация по категории: Lesson</div>' +
        'Количество завершенных карточек: ' + data.lessonCards[indexOfSlides].completedCardsCount + ' из ' + data.lessonCards[indexOfSlides].cardsCount +
        '<br>Общий % завершения слайдов: ' + data.lessonCards[indexOfSlides].completeness + '%' +
        '<br>Итоговый результат: ' + data.lessonCards[indexOfSlides].score + ' баллов из 100<br>' +
        '<div class="headerexplain">' +
        '<span style="margin-left: 60px;">Название слайда</span>' +
        '<span style="margin-left: 140px;">Балл</span>' +
        '<span style="margin-left: 60px;">%</span>' +
        '</div>' +
        '</div>' +
        temparr +
        '</div>';
	
    for (let i = 0; i < data.homeworkCards[indexOfSlides].themes.length; i++) {
        hwarr += '<div class="roomtypekids" style="cursor:default;">' + data.homeworkCards[indexOfSlides].themes[i].name + '<br>' + '</div>'
        for (let j = 0; j < data.homeworkCards[indexOfSlides].themes[i].cards.length; j++) {
            (data.homeworkCards[indexOfSlides].themes[i].cards[j].completeness == 100 && data.homeworkCards[indexOfSlides].themes[i].cards[j].score == null) ? data.homeworkCards[indexOfSlides].themes[i].cards[j].score = 100 : data.homeworkCards[indexOfSlides].themes[i].cards[j].score;
            if (data.homeworkCards[indexOfSlides].themes[i].cards[j].completeness == null) {
                data.homeworkCards[indexOfSlides].themes[i].cards[j].completeness = '——'
                data.homeworkCards[indexOfSlides].themes[i].cards[j].score = '—'
            }

            if (data.homeworkCards[indexOfSlides].themes[i].cards[j].emphasis == 'writing') {
                data.homeworkCards[indexOfSlides].themes[i].cards[j].name = data.homeworkCards[indexOfSlides].themes[i].cards[j].name + '✏'
            } else if (data.homeworkCards[indexOfSlides].themes[i].cards[j].emphasis == 'pronunciation') {
                data.homeworkCards[indexOfSlides].themes[i].cards[j].name = data.homeworkCards[indexOfSlides].themes[i].cards[j].name + '🎧'
            }
            hwarr += '<div class="itemexerciseskids">' + [j + 1] + '.' +
                data.homeworkCards[indexOfSlides].themes[i].cards[j].name + ' ' +
                '<span class="stepuidslkids" style="display:none">' + data.homeworkCards[indexOfSlides].themes[i].cards[j].stepUuid + '</span>' +
                '<span class="savelinktocms" title="Копирует в буфер обмена ссылку на CMS для этого слайда"> 💾 </span>' +
                '<span style="float:right; margin-right: 80px;">' + data.homeworkCards[indexOfSlides].themes[i].cards[j].completeness + '</span>' +
                '<span style="float:right; margin-right: 60px;">' + data.homeworkCards[indexOfSlides].themes[i].cards[j].score + '</span>' +
                '</div>';
        }
    }

    document.getElementById('exercisebarskysmart').innerHTML += '<div class="roomtype">Homework</div>' +
        '<div class="boxwithslides" style="display:none">' +
        '<div class="itemexerciseskids">' +
        '<div style="text-align:center;">Информация по категории: Homework</div>' +
        'Количество завершенных карточек: ' + data.homeworkCards[indexOfSlides].completedCardsCount + ' из ' + data.homeworkCards[indexOfSlides].cardsCount +
        '<br>Общий % завершения слайдов: ' + data.homeworkCards[indexOfSlides].completeness + '%' +
        '<br>Итоговый результат: ' + data.homeworkCards[indexOfSlides].score + ' баллов из 100<br>' +
        '<div class="headerexplain">' +
        '<span style="margin-left: 60px;">Название слайда</span>' +
        '<span style="margin-left: 140px;">Балл</span>' +
        '<span style="margin-left: 60px;">%</span>' +
        '</div>' +
        '</div>' +
        hwarr +
        '</div>';

    let subjbtnsarr = document.getElementsByClassName('roomtype')
    let slidesbar = document.getElementsByClassName('boxwithslides')
    for (let i = 0; i < subjbtnsarr.length; i++) {
        subjbtnsarr[i].onclick = function () {
            if (slidesbar[i].style.display == 'none')
                slidesbar[i].style.display = ''
            else slidesbar[i].style.display = 'none'
        }
    }

    let savelinkarr = document.getElementsByClassName('savelinktocms')
    for (let z = 0; z < savelinkarr.length; z++) {
        savelinkarr[z].onclick = function () {
            copyToClipboard("https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/" + document.getElementsByClassName('stepuidslkids')[z].textContent)
        }
    }

    if (data.participants[0].role == 'student') {
        document.getElementById('studname').innerHTML = '<span style="font-size: 17px;"> 👨‍🎓 </span>' + data.participants[0].name
        document.getElementById('studserviceid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔 услуги: </span>' + data.participants[0].educationServiceId
        document.getElementById('studid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔: </span>' + data.participants[0].userId
        document.getElementById('teachname').innerHTML = '<span style="font-size: 17px;"> 👽 Teacher </span>' + data.participants[1].name
        document.getElementById('teachdid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔: </span>' + data.participants[1].userId
    } else if (data.participants[1].role == 'student') {
        document.getElementById('studname').innerHTML = '<span style="font-size: 17px;"> 👨‍🎓 </span>' + data.participants[1].name
        document.getElementById('studserviceid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔 услуги: </span>' + data.participants[1].educationServiceId
        document.getElementById('studid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔: </span>' + data.participants[1].userId
        document.getElementById('teachname').innerHTML = '<span style="font-size: 17px;"> 👽 Teacher </span>' + data.participants[0].name
        document.getElementById('teachdid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔: </span>' + data.participants[0].userId
    }

    // if (data.participants[1].educationServiceId != null) {
    // document.getElementById('studname').innerHTML = '<span style="font-size: 17px;"> 👨‍🎓 </span>' + data.participants[1].name
    // document.getElementById('studserviceid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔 услуги: </span>' + data.participants[1].educationServiceId
    // document.getElementById('studid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔: </span>' + data.participants[1].userId
    // } else {
    // document.getElementById('studname').innerHTML = '<span style="font-size: 17px;"> 👽 </span>' + data.participants[1].name
    // document.getElementById('studserviceid').innerHTML = '<span style="user-select:none; font-size: 17px;">🆔 учителя ➡ </span>'
    // document.getElementById('studid').innerHTML = data.participants[1].userId
    // }

}

document.getElementById('exercisesttc').onclick = async function () {
    if (document.getElementById('AFMS_TTCExercInfo').style.display == 'none') {
        document.getElementById('AFMS_TTCExercInfo').style.display = ''
        document.getElementById('AFMS_SkysmartExercInfo').style.display = 'none'

        if (location.host == 'ttc.skyeng.ru')
            document.getElementById('roomhashttc').value = document.URL.split('/')[5]
        else document.getElementById('roomhashttc').value = "Не открыт TTC курс! Откройте и повторите Или введите хеш одним словом"

        document.getElementById('hideExercisesTTCMenu').onclick = function () {
            document.getElementById('AFMS_TTCExercInfo').style.display = 'none'
        }

        document.getElementById('RefreshInfoExerciseTTC').onclick = function () {
            if (location.host == 'ttc.skyeng.ru')
                document.getElementById('roomhashttc').value = document.URL.split('/')[5]
            else document.getElementById('roomhashttc').value = "Не открыт TTC курс! Откройте и повторите Или введите хеш одним словом"
        }

        document.getElementById('getroomdatattc').onclick = async function () {
            let rhash = document.getElementById('roomhashttc').value
            if (rhash.length < 20) {
                await fetch("https://ttc-api.skyeng.ru/api/v1/lesson/join", {
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"roomHash\":\"" + rhash + "\"}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => ttcroomdata = r)

                console.log(ttcroomdata)

                let tmparr = [];
                for (let i = 0; i < ttcroomdata.participants[0].nodes[0].steps.length; i++) {
                    if (ttcroomdata.participants[0].nodes[0].steps[i].score == null)
                        ttcroomdata.participants[0].nodes[0].steps[i].score = 0
                    if (ttcroomdata.participants[0].nodes[0].steps[i].completeness == null)
                        ttcroomdata.participants[0].nodes[0].steps[i].completeness = 0
                    tmparr += '<div class="itemexerciseskids">' + [i + 1] + '.' + '<span>' + ttcroomdata.participants[0].nodes[0].steps[i].title + '</span>' + '<span class="TTCstepid" style="display:none">' + ttcroomdata.participants[0].nodes[0].steps[i].stepId + '</span>' + '<span class="savelinktocms" title="Копирует в буфер обмена ссылку на CMS для этого слайда"> 💾 </span>' + '<span style="float:right;margin-right:20%">' + ttcroomdata.participants[0].nodes[0].steps[i].completeness + '%' + '</span>' + '<span style="float:right;margin-right:11%">' + ttcroomdata.participants[0].nodes[0].steps[i].score / 10 + '</span>' + '<br>' + '</div>'
                }

                document.getElementById('exercisebarttc').innerHTML = `<div style="width:90%; margin-left:5%; text-align:center; color:bisque; background: #bb531a; border-radius: 20px;">"${ttcroomdata.participants[0].nodes[0].title}" • Выполнено на: ${ttcroomdata.participants[0].nodes[0].completeness}% • Оценка: ${ttcroomdata.participants[0].nodes[0].score / 10}</div>` + '<br>' +
                    '<div class="headerexplain">' +
                    '<span style="margin-left: 60px;">Название слайда</span>' +
                    '<span style="margin-left: 140px;">Балл</span>' +
                    '<span style="margin-left: 60px;">%</span>' +
                    '</div>' +
                    tmparr;

                let savelinkarr = document.getElementsByClassName('savelinktocms')
                for (let z = 0; z < savelinkarr.length; z++) {
                    savelinkarr[z].onclick = function () {
                        copyToClipboardAFMS("https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/" + document.getElementsByClassName('TTCstepid')[z].textContent)
                    }
                }

            }
        }
    }
    else {
        document.getElementById('AFMS_TTCExercInfo').style.display = 'none'
    }
}

document.getElementById('exercisekysmart').onclick = async function () { // открывает менюшку скайсмарт упражнений
    if (document.getElementById('AFMS_SkysmartExercInfo').style.display == 'none') {
        document.getElementById('AFMS_SkysmartExercInfo').style.display = ''
        document.getElementById('AFMS_TTCExercInfo').style.display = 'none'

        document.getElementById('RefreshInfoExerciseKids').onclick = function () {
            document.getElementById('roomhashhwkids').value = document.URL;
        }


        document.getElementById('hideExercisesSkysmartMenu').onclick = function () { // функция скрывает меню
            document.getElementById('AFMS_SkysmartExercInfo').style.display = 'none'
        }
		
        //document.getElementById('exercisebarskysmart').innerText = "В РАЗРАБОТКЕ"

        document.getElementById('roomhashhwkids').value = document.URL
		setTimeout( function() {
			getroomdatakids.click()
		}, 1000)
        document.getElementById('getroomdatakids').onclick = async function () {
            document.getElementById('exercisebarskysmart').innerHTML = '';
            let hashroomkids = document.getElementById('roomhashhwkids').value.split('/')[6].split('?')[0]
            let kidsselector = document.getElementById('roomhashhwkids').value.split('/')[4]
            switch (kidsselector) {
                case 'english':
                    await gethwroominfo("https://api-english.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;
                case 'math':
                    await gethwroominfo("https://api-math.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'computer-science':
                    await gethwroominfo("https://api-computer-science.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'geography':
                    await gethwroominfo("https://api-geography.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'chess':
                    await gethwroominfo("https://api-chess.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'preschool':
                    await gethwroominfo("https://api-preschool.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'russian':
                    await gethwroominfo("https://api-russian.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'social-science':
                    await gethwroominfo("https://api-social-science.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'history':
                    await gethwroominfo("https://api-history.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'biology':
                    await gethwroominfo("https://api-biology.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'physics':
                    await gethwroominfo("https://api-physics.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'literature':
                    await gethwroominfo("https://api-literature.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

                case 'chemistry':
                    await gethwroominfo("https://api-chemistry.skyeng.ru/api/v2/rooms/", hashroomkids)
                    console.log(hwroomdata)
                    getkidsroominfo(data = hwroomdata)
                    break;

            }
        }


    } else {
        document.getElementById('AFMS_SkysmartExercInfo').style.display = 'none'
    }
}

async function joinroom(item) { //функция сканирования комнаты по запросу на join
    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + item + "/join", {
        "method": "PATCH",
        "credentials": "include"
    }).then(r => r.json()).then(r => joinresult = r)
    console.log(joinresult)
}

document.getElementById('hidestudentsSkysmartMenu').onclick = function () {
    document.getElementById('AFMS_SkysmartStudInfo').style.display = 'none'
}

document.getElementById('hidestudentsAdultstMenu').onclick = function () {
    document.getElementById('AFMS_AdultStudInfo').style.display = 'none'
}


document.getElementById('VocabularyMenu').onclick = function () { // открывает меню для работы со словарем

    if (document.getElementById('AFMS_Vocabulary').style.display == 'none') {
        document.getElementById('AFMS_Vocabulary').style.display = ''
        document.getElementById('vocabularbar').style.display = '';
        firstgetvocabulary(document.getElementById('iduserwords'));        
    } else document.getElementById('AFMS_Vocabulary').style.display = 'none'


    document.getElementById('findwords').onclick = async function () {
        document.getElementById('searchwordinput').value = ''
        document.getElementById('searchwordinput').style.display = 'none'
        getwordsets(document.getElementById('iduserwords').value.trim())

    }

    document.getElementById('ClearVocabulary').onclick = function () {
        document.getElementById('wordsout').innerHTML = '';
        document.getElementById('iduserwords').value = '';
        allWordSets = [];
        document.getElementById('searchwordinput').value = ''
        document.getElementById('searchwordinput').style.display = 'none'
    }

    document.getElementById('hideVocabularyMenu').onclick = function () {
        document.getElementById('wordsout').innerHTML = '';
        document.getElementById('iduserwords').value = '';
        document.getElementById('AFMS_Vocabulary').style.display = 'none'
    }

} // end of open vocabulary menu function

async function firstgetvocabulary(idfield) {
    const userId = await getUserId();
    idfield.value = userId;

    if (idfield.value && idfield.value.trim() !== '') {
        document.getElementById('findwords').click();
    }
}

async function getUserId() { // получаем id пользователя
    //Проверяем, в ЛКУ или ЛКП открыто
    if (window.location.href.indexOf('vimbox.skyeng.ru') != -1 || window.location.href.indexOf('new-teachers.skyeng.ru') != -1 || window.location.href.indexOf('teachers.skyeng.ru') != -1 || window.location.href.indexOf('student.skyeng.ru') != -1) {
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST"
        }).then(r => r.json()).then(r => artId = r)
        console.log(artId)
        
        if (!artId.user.id){
            artId.user.id ='';
        }
        return artId.user.id;
    }
    return ('');
}

let checkedarray = [];
document.getElementById('selectallwords').onclick = toggleAllWordSelection; //функция выделения всех слов

function toggleAllWordSelection() {
    const wordElements = document.getElementsByClassName('wminId');
    const checkboxes = document.getElementsByName('checkfordel');
    const selectAllCheckboxes = document.getElementsByName('selectwordsinonelesson');
    
    const areAllChecked = Array.from(checkboxes).every(chk => chk.checked);

    if (areAllChecked) {
        // Если все слова уже выделены, снимаем выделение и очищаем массив
        Array.from(checkboxes).forEach(chk => chk.checked = false);
        Array.from(selectAllCheckboxes).forEach(chk => chk.checked = false); // Снимаем выделение с selectonesection чекбоксов
        checkedarray = [];
    } else {
        // Иначе выделяем все слова и добавляем их в массив
        Array.from(checkboxes).forEach((chk, index) => {
            chk.checked = true;
            checkedarray.push(wordElements[index].textContent);
        });
        Array.from(selectAllCheckboxes).forEach(chk => chk.checked = true); // Выделяем все selectonesection чекбоксы
    }
}


document.getElementById('delunlearnallwords').onclick = deleteLearnedWords; // функция удаления всех выученных слов

async function deleteLearnedWords() {
    const learnedWordsElements = document.getElementsByClassName('islearnedyesno');
    const userstud = document.getElementById('iduserwords').value.trim();
    const wordIds = document.getElementsByClassName('wminId');    
    const learnedIndices = [];
    for (let i = 0; i < learnedWordsElements.length; i++) {
        if (learnedWordsElements[i].textContent == '✔')
        learnedIndices.push(i)
    }

    if (learnedIndices.length) {
        const confirmDelete = confirm("Вы уверены, что хотите удалить ВСЕ выученные слова?");
        if (confirmDelete) {
            alert("🚀Запрос в процессе выполнения. Пожалуйста, ожидайте завершения 😋");
            for (let j = 0; j < learnedIndices.length; j++) {
                try {
                    await fetch(`https://api-words.skyeng.ru/api/v2/words/${wordIds[learnedIndices[j]].textContent}.json?studentId=${userstud}`, {
                        headers: {
                            "accept": "application/json, text/plain, */*",
                            "authorization": `Bearer ${token.token_global}`,
                        },
                        method: "DELETE"
                    });
                } catch (err) {
                    console.error("Error deleting learned word: ", err);
    }
            }
            alert("Все выученные слова были успешно удалены 😏");
            await getwordsets(userstud);
            liveSearch(document.getElementById('searchwordinput').value);
        }
    } else {
        alert("Выученных слов в кабинете ученика нет.");
    }
}

document.getElementById('learncheckedwords').onclick = learnSelectedWords; // функция изучения выбранного слова минуя тренировку

async function learnSelectedWords() {
    const checks = document.getElementsByName('checkfordel');
    const wordIds = document.getElementsByClassName('wminId');
    const userstud = document.getElementById('iduserwords').value.trim();
    let flagselected = [];
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == true)
            flagselected.push(i)
    }

    if (flagselected.length) {
        const confirlearn = confirm("Вы уверены, хотите отметить выбранные слова как 'выученные'?");
        if (confirlearn){
            alert("🚀Запрос в процессе выполнения. Пожалуйста, ожидайте завершения 😋");
        for (let i = 0; i < flagselected.length; i++) {
                try {
                    await fetch(`https://api-words.skyeng.ru/api/for-vimbox/v1/words/${wordIds[flagselected[i]].textContent}/skip.json?studentId=${userstud}`, {
                        headers: {
                            "accept": "application/json, text/plain, */*",
                            "authorization": `Bearer ${token.token_global}`,
                        },
                        method: "PUT"
                    });
                } catch (err) {
                    console.error("Error updating word status: ", err);
}
            }
            alert("Выбранные слова были успешно выучены 😏");
            await getwordsets(userstud);
            liveSearch(document.getElementById('searchwordinput').value);
        }
    } else {
        alert("Нет выбранных слов для изменения статуса на выучен. Отметьте, пожалуйста, и повторите попытку.");
    }
}

document.getElementById('unlearnallwords').onclick = resetProgressForSelectedWords; // функция сброса выученного слова

async function resetProgressForSelectedWords() {
    const checks = document.getElementsByName('checkfordel');
    const wordIds = document.getElementsByClassName('wminId');
    const userstud = document.getElementById('iduserwords').value.trim();
    let flagselected = [];
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == true)
            flagselected.push(i)
    }

    if (!flagselected.length) {
        const confirmResetAll = confirm("Не был выбран ниодин пункт. Будет автоматически сброшен прогресс для всех слов. Продолжить?");
        if (confirmResetAll) {
            alert("🚀Запрос в процессе выполнения. Пожалуйста, ожидайте завершения 😋");
            for (let g = 0; g < wordIds.length; g++) {
                try {
                    await fetch(`https://api-words.skyeng.ru/api/trainings/v1/users/${userstud}/meanings/${wordIds[g].textContent}/progress`, {
                        headers: {
                            "accept": "application/json, text/plain, */*",
                            "authorization": `Bearer ${token.token_global}`,
                        },
                        method: "DELETE"
                    });
                } catch (err) {
                    console.error("Error resetting progress: ", err);
                }
            }
            alert("Прогресс всех слов был успешно сброшен! 🤠");
            await getwordsets(userstud);
            liveSearch(document.getElementById('searchwordinput').value);
        }
    } else {
        const confirmResetSelected = confirm("Вы выбрали некоторые пункты для сброса прогресса слов. Продолжить?");
        if (confirmResetSelected) {
            alert("🚀Запрос в процессе выполнения. Пожалуйста, ожидайте завершения 😋");
            for (let g = 0; g < flagselected.length; g++) {
                try {
                    await fetch(`https://api-words.skyeng.ru/api/trainings/v1/users/${userstud}/meanings/${wordIds[flagselected[g]].textContent}/progress`, {
                        headers: {
                        "accept": "application/json, text/plain, */*",
                            "authorization": `Bearer ${token.token_global}`,
                    },
                        method: "DELETE"
                    });
                } catch (err) {
                    console.error("Error resetting selected word's progress: ", err);
        }
    }
            alert("Прогресс выбранных слов был успешно сброшен! 🤠");
            await getwordsets(userstud);
            liveSearch(document.getElementById('searchwordinput').value);
        }
    }
}

document.getElementById('deleteallwords').onclick = deleteSelectedWords; // функция удаленя слов выбраных в списке если ничего не выбрано то всех!

async function deleteSelectedWords() {
    const checks = document.getElementsByName('checkfordel');
    const idslov = document.getElementsByClassName('wminId');
    const userstud = document.getElementById('iduserwords').value.trim();
    let flagselected = [];
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == true)
            flagselected.push(i)
    }

    if (!flagselected.length) {
        const confirmDeleteAll = confirm("Не был выбран ниодин пункт. Будут автоматически удалены все слова из словаря. Продолжить?");
        if (confirmDeleteAll) {
            alert("🚀Запрос в процессе выполнения. Пожалуйста, ожидайте завершения 😋");
            for (let g = 0; g < idslov.length; g++) {
                try {
                    await fetch(`https://api-words.skyeng.ru/api/v2/words/${idslov[g].textContent}.json?studentId=${userstud}`, {
                        headers: {
                        "accept": "application/json, text/plain, */*",
                            "authorization": `Bearer ${token.token_global}`,
                    },
                        method: "DELETE"
                    });
                } catch (err) {
                    console.error("Error deleting word: ", err);
                }
            }
            alert("Все слова были успешно удалены! 🤠");
            await getwordsets(userstud);
            liveSearch(document.getElementById('searchwordinput').value);
        }
    } else {
        const confirmDeleteSelected = confirm("Вы выбрали некоторые пункты для удаления слов. Продолжить?");
        if (confirmDeleteSelected) {
            alert("🚀Запрос в процессе выполнения. Пожалуйста, ожидайте завершения 😋");
            for (let g = 0; g < flagselected.length; g++) {
                try {
                    await fetch(`https://api-words.skyeng.ru/api/v2/words/${idslov[flagselected[g]].textContent}.json?studentId=${userstud}`, {
                        headers: {
                            "accept": "application/json, text/plain, */*",
                            "authorization": `Bearer ${token.token_global}`,
                        },
                        method: "DELETE"
                    });
                } catch (err) {
                    console.error("Error deleting selected word: ", err);
                }
            }
            alert("Выбранные слова были успешно удалены! 🤠");
            await getwordsets(userstud);
            liveSearch(document.getElementById('searchwordinput').value);
        }
}
}

async function getwordsets(studentId) {
    allWordSets = [];
    document.getElementById('wordsout').innerHTML = '';

    let wordsetsarr = await fetch("https://api-words.skyeng.ru/api/for-vimbox/v1/wordsets.json?studentId=" + studentId + "&pageSize=500", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "authorization": "Bearer " + token.token_global,
        },
    }).then(r => r.json());

    for (let wordset of wordsetsarr.data) {
        let wordSetData = {
            title: wordset.title,
            words: []
        };

        let objectwdsets = await fetch("https://api-words.skyeng.ru/api/v1/wordsets/" + wordset.id + "/words.json?wordsetId=" + wordset.id + "&studentId=" + studentId + "&page=1&pageSize=500", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "authorization": "Bearer " + token.token_global,
            },
        }).then(r => r.json());

        let meanings = objectwdsets.data.map(word => word.meaningId).toString();
        
        let wordsnames = await fetch("https://dictionary.skyeng.ru/api/for-services/v2/meanings?ids=" + meanings + "&acceptLanguage=ru", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "authorization": "Bearer " + token.token_global,
            },
        }).then(r => r.json());

        for (let j = 0; j < objectwdsets.data.length; j++) {
            wordSetData.words.push({
                text: wordsnames[j].text || '',
                isLearned: objectwdsets.data[j].isLearned,
                progress: objectwdsets.data[j].progress,
                meaningId: objectwdsets.data[j].meaningId
            });
        }

        allWordSets.push(wordSetData);
        renderWordSets(allWordSets, false);

        document.getElementById('searchwordinput').style.display = ''
    }
}

function renderWordSets(wordSets, isSearch = false) {
    let htmlContent = '';
    
    for (let wordSet of wordSets) {
        let wordsHtml = '';
        let displayBox = 'none';  // По умолчанию блок скрыт
        
        for (let word of wordSet.words) {
            wordsHtml += `<span style="color: #00FA9A; margin-left:5px;">&#5129; </span>
                          <span style="color: bisque; cursor: text;" name="meaningsId">
                              <span style="color: #30dbe3; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);">${word.text}</span>
                              <input type="checkbox" name="checkfordel" class="checkdel">
                              <span style="display:none" class="sectionforcheck">section</span>
                              <span class="savelinktowordcms" title="Копирует в буфер обмена ссылку на CMS словаря для этого слова"> 💾 </span>
                              <span class="checkislearned">${word.isLearned ? '<span class="islearnedyesno" style="float:right;margin-right:30px;">✔</span>' : '<span class="islearnedyesno" style="float:right; margin-right:30px;">❌</span>'}</span>
                              <span style="float:right; margin-right:35px;">${word.progress < 100 ? `<span style="padding-left: 8px;">${word.progress}%</span>` : `${word.progress}%`}</span>
                              <span class="wminId" style="float:right; margin-right:5px;">${word.meaningId}</span>
                          </span>
                          <br>`;
        }

        if (isSearch && wordSet.words.length > 0) {
            displayBox = 'block';
        }
        
        htmlContent += `<div class="wordsetname">${wordSet.title} (${wordSet.words.length})</div>
                        <div class="boxwithwords" style="display:${displayBox}">
                            <div class="headerexplain">
                                <span style="margin-left: 30px;">Слово или фраза</span>
                                <span style="margin-left: 142px;">ID слова</span>
                                <span style="margin-left: 12px;"> % </span>
                                <span style="margin-left: 10px;"> Выучено </span>
                                <input type="checkbox" name="selectwordsinonelesson" class="selectonesection">
                            </div>
                            ${wordsHtml}
                        </div>`;
    }
    
    document.getElementById('wordsout').innerHTML = htmlContent;
    setupWordSetToggle();
    setupSelectAllWordsInSet();
    setupLinkCopyToClipboard();
}

function setupWordSetToggle() { // расскрытие/скрытие блоков
    let wordsetnames = document.getElementsByClassName('wordsetname');
    let boxwithwordsbar = document.getElementsByClassName('boxwithwords');
    for (let i = 0; i < wordsetnames.length; i++) {
        wordsetnames[i].onclick = function () {
            if (boxwithwordsbar[i].style.display === 'none' || boxwithwordsbar[i].style.display === '')
                boxwithwordsbar[i].style.display = 'block';
            else
                boxwithwordsbar[i].style.display = 'none';
    }
    }
}

function setupSelectAllWordsInSet() { // выделение слов в блоке
    const selectoneles = document.getElementsByName('selectwordsinonelesson');
    const checkboxesall = document.getElementsByName('checkfordel');

    // Обработчик для главных чекбоксов
    for (let selectone of selectoneles) {
        selectone.addEventListener('click', function() {
            let parentDiv = selectone.closest('.boxwithwords');
            let checkboxesInGroup = parentDiv.querySelectorAll('[name="checkfordel"]');
            
            let allCheckedInSection = Array.from(checkboxesInGroup).every(chk => chk.checked);

            checkboxesInGroup.forEach(chk => {
                chk.checked = !allCheckedInSection;
            });
        });
    }

    // Обработчик для чекбоксов слов
    for (let checkbox of checkboxesall) {
        checkbox.addEventListener('change', function() {
            let parentDiv = checkbox.closest('.boxwithwords');
            let selectOneInSection = parentDiv.querySelector('.selectonesection');
            let checkboxesInGroup = parentDiv.querySelectorAll('[name="checkfordel"]');

            let allCheckedInSection = Array.from(checkboxesInGroup).every(chk => chk.checked);
            selectOneInSection.checked = allCheckedInSection;
        });
    }
}

function setupLinkCopyToClipboard() {
    let savebtnsarr = document.getElementsByClassName('savelinktowordcms');
    for (let z = 0; z < savebtnsarr.length; z++) {
        savebtnsarr[z].onclick = function () {
            let allmeanings = document.getElementsByClassName('wminId');
            copyToClipboardAFMS("https://dictionary.skyeng.ru/cms/meaning/" + allmeanings[z].textContent);
        }
    }
}

document.getElementById('searchwordinput').addEventListener('input', function() {
    liveSearch(this.value);
});

function liveSearch(query) {
    query = query.toLowerCase().trim();

    if(query === "") {
        renderWordSets(allWordSets, false);
        return;
    }

    const filteredWordSets = allWordSets.map(wordSet => {
        return {
            title: wordSet.title,
            words: wordSet.words.filter(word => word.text.toLowerCase().includes(query))
        };
    }).filter(wordSet => wordSet.words.length > 0);

    renderWordSets(filteredWordSets, true); 
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

var win_Alarmclock =  // описание элементов окна будильника
    `<div style="border: 2px double black; background-color: #464451; cursor: -webkit-grab;" id="reminder_bar">
				<div>
					<button title="Скрытие меню" id="hideMeAlarm" style="width:50px; background: #228B22;">hide</button>
				</div>
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
			</div>`;

if (localStorage.getItem('winTopAlarmclock') == null) { // началоное положение окна будильника (если не задано ранее)
    localStorage.setItem('winTopAlarmclock', '120');
    localStorage.setItem('winLeftAlarmclock', '295');
}

let wintAlarmclock = document.createElement('div'); // создание окна будильника
document.body.append(wintAlarmclock);
wintAlarmclock.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAlarmclock') + 'px; left: ' + localStorage.getItem('winLeftAlarmclock') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintAlarmclock.style.display = 'none';
wintAlarmclock.setAttribute('id', 'AF_AlarmClock');
wintAlarmclock.innerHTML = win_Alarmclock;

var listenerAlarmclock = function (e, a) { // сохранение позиции окна будильника
    wintAlarmclock.style.left = Number(e.clientX - myXAlarmClock) + "px";
    wintAlarmclock.style.top = Number(e.clientY - myYAlarmClock) + "px";
    localStorage.setItem('winTopAlarmclock', String(Number(e.clientY - myYAlarmClock)));
    localStorage.setItem('winLeftAlarmclock', String(Number(e.clientX - myXAlarmClock)));
};

wintAlarmclock.onmousedown = function (a) { // изменение позиции окна будильника
    if (checkelementtype(a)) {
        window.myXAlarmClock = a.layerX;
        window.myYAlarmClock = a.layerY;
        document.addEventListener('mousemove', listenerAlarmclock);
    }
}
wintAlarmclock.onmouseup = function () { document.removeEventListener('mousemove', listenerAlarmclock); } // прекращение изменения позиции окна будильника

// блок работы с будильником
document.getElementById('reminderstatus').onclick = function () { // открывает настройки будильника
    if (document.getElementById('AF_AlarmClock').style.display == '')
        document.getElementById('AF_AlarmClock').style.display = 'none'
    else {
        document.getElementById('AF_AlarmClock').style.display = ''
        document.getElementById('AF_Settings').style.display = 'none'
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

document.getElementById('hideMeAlarm').onclick = function() {
	document.getElementById('AF_AlarmClock').style.display = 'none'
}

refreshTimerReminder(); //обновляет оставшееся время до будильника №1

setInterval(clock_on_javascript_1, 1000);
setInterval(clock_on_javascript_2, 1000);
setInterval(clock_on_javascript_3, 1000);

// setInterval(operstatusleftbar, 3000);

// конец блока работы с будильником
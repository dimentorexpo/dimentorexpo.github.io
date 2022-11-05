var win_Alarmclock =  // описание элементов окна будильника
    `<div style="border: 2px double black;; background-color: #464451" id="AlarmclockCRM">
        <div style="margin: 5px; width: 380px;" id="Alarmclock_1str">
            <button title="скрывает меню" id="hideAlarmclock" style="width:50px; background: #228B22;">hide</button>
        </div>
		<div style="margin: 5px; width: 380px">
			<label style="margin-left: 15px; color:bisque">__Будильник №1</label> <label style="color:bisque">........................... Будильник №2__</label>
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
//<button id="reminderstatus" title="Статус будильника 🔔 - вкл, 🔕 - выкл" style="width:25px; float: right; margin-right: 5px"></button>

if (localStorage.getItem('winTopAlarmclock') == null) { // началоное положение окна будильника (если не задано ранее)
    localStorage.setItem('winTopAlarmclock', '120');
    localStorage.setItem('winLeftAlarmclock', '295');
}

let wintAlarmclock = document.createElement('div'); // создание окна будильника
document.body.append(wintAlarmclock);
wintAlarmclock.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAlarmclock') + 'px; left: ' + localStorage.getItem('winLeftAlarmclock') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintAlarmclock.style.display = 'none';
wintAlarmclock.setAttribute('id', 'winAlarmclock');
wintAlarmclock.innerHTML = win_Alarmclock;

var listenerAlarmclock = function (e, a) { // сохранение позиции окна будильника
    wintAlarmclock.style.left = Number(e.clientX - myX5) + "px";
    wintAlarmclock.style.top = Number(e.clientY - myY5) + "px";
    localStorage.setItem('winTopAlarmclock', String(Number(e.clientY - myY5)));
    localStorage.setItem('winLeftAlarmclock', String(Number(e.clientX - myX5)));
};

wintAlarmclock.onmousedown = function (a) { // изменение позиции окна будильника
    if (checkelementtype(a)) {
        window.myX5 = a.layerX;
        window.myY5 = a.layerY;
        document.addEventListener('mousemove', listenerAlarmclock);
    }
}
wintAlarmclock.onmouseup = function () { document.removeEventListener('mousemove', listenerAlarmclock); } // прекращение изменения позиции окна будильника

document.getElementById('winAlarmclock').ondblclick = function (a) { // скрытие окна будильника по двойному клику
    if (checkelementtype(a)) { document.getElementById('winAlarmclock').style.display = 'none'; }
}

document.getElementById('hideAlarmclock').onclick = function () { // скрытие окна будильника
    if (document.getElementById('winAlarmclock').style.display == '')
        document.getElementById('winAlarmclock').style.display = 'none'
}

document.getElementById('btnAlarmclock').onclick = function () { // открытие окна будильника
    if (document.getElementById('winAlarmclock').style.display == 'none') {
        document.getElementById('winAlarmclock').style.display = ''
        document.getElementById('idmymenucrm').style.display = 'none'
    } else {
        document.getElementById('winAlarmclock').style.display == 'none'
        document.getElementById('idmymenucrm').style.display = 'none'
    }
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
    if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp1') == null) {
        document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";
    }

    document.getElementById('setreminder').onclick = function () {  // выставляем будильник
        document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
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
        document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
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
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
            setchas.value = localStorage.getItem('setchas');
            setminuta.value = localStorage.getItem('setminuta');
            var timearr = new Date()
            var chronostamp2 = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
            localStorage.setItem('chronostamp2', chronostamp2);
            abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp2'));
        } else if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp') == null) {
            clearTimeout(abortTimeOut);
            document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";
        } else if (localStorage.getItem('chronostamp1') !== null) {
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
        }
    }

    function refreshTimerReminder1() { // обновляет оставшееся время будильника №2
        if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
            setchas1.value = localStorage.getItem('setchas1');
            setminuta1.value = localStorage.getItem('setminuta1');
            var timearr1 = new Date()
            var chronostamp22 = (((localStorage.getItem('setchas1') - timearr1.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta1') - timearr1.getMinutes()) * 60) + (0 - timearr1.getSeconds())) * 1000;
            localStorage.setItem('chronostamp22', chronostamp22);
            abortTimeOut1 = setTimeout(setRemindAf1, localStorage.getItem('chronostamp22'));
        } else if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp') == null) {
            clearTimeout(abortTimeOut1);
            document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";
        } else if (localStorage.getItem('chronostamp') !== null) {
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
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
            document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";
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
            // document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";  //тут еще подумать логику если первый будильник тоже не выставлен и удален второй тогда да изменять иконку
        }
    }

    refreshTimerReminder(); //обновляет оставшееся время до будильника №1
    refreshTimerReminder1(); //обновляет оставшееся время до будильника №2

    function setRemindAf() { //функция  при наступлении времени перевода в статус занят Будильник №1
        alert("Скоро перерыв! :D");
        localStorage.removeItem('chronostamp');

        if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
        else if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";

        setchas.value = "";
        setminuta.value = "";
    }

    function setRemindAf1() { //функция  при наступлении времени перевода в статус занят Будильник №2

        alert("Скоро перерыв! :D");
        localStorage.removeItem('chronostamp1');

        if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('btnAlarmclock').textContent = "🔕 Будильник";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
        else if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('btnAlarmclock').textContent = "🔔 Будильник";

        setchas1.value = "";
        setminuta1.value = "";
    }
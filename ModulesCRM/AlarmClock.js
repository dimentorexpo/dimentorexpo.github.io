var win_Alarmclock =  // описание элементов окна будильника
    `<div style="border: 2px double black; display: none; background-color: #464451" id="AlarmclockCRM">
        <div style="margin: 5px; width: 350px;" id="Alarmclock_1str">
            <button title="скрывает меню" id="hideAlarmclock" style="width:50px; background: #228B22;">hide</button>
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
    }
}
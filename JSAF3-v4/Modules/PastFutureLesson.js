var win_Timetable = // описание элементов окна предстоящих и прошедших занятиях
    `<div style="display: flex; width: 450px;">
<span style="width: 450px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 450;" id="HeadTimetable">
                        <button id="hideMeTT" style="width:50px; background: #228B22;">hide</button>
                </div>
                <div style="display:flex; justify-content:space-evenly; margin-top:5px;">
                     <button title="Выводит инфо о прошедших уроках" id="getlessonpast">Прошедшие уроки</button>
                     <button title="Выводит инфо о предстоящих уроках" id="getlessonfuture">Предстоящие уроки</button>
                 </div>
                 </span>
                <div id="timetableinfo">
                     <p id="timetabledata" style="width:450px;color:bisque; max-height:400px; margin-left:5px; margin-top:5px; overflow:auto;text-align:center;"></p>
                </div>
</span>
</div>`;


if (localStorage.getItem('winTopTimetable') == null) { // начальное положение окна проверки прошедшего расписания и предстоящих уроков
    localStorage.setItem('winTopTimetable', '120');
    localStorage.setItem('winLeftTimetable', '295');
}

let wintTimetable = document.createElement('div'); // создание окна предстоящих и прошедших занятиях
document.body.append(wintTimetable);
wintTimetable.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopTimetable') + 'px; left: ' + localStorage.getItem('winLeftTimetable') + 'px; font-size: 14px; z-index: 10000; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintTimetable.style.display = 'none';
wintTimetable.setAttribute('id', 'AF_Timetable');
wintTimetable.innerHTML = win_Timetable;

var listenerTimetable = function (e, a) { // сохранение позиции окна предстоящих и прошедших занятиях
    wintTimetable.style.left = Number(e.clientX - myX10) + "px";
    wintTimetable.style.top = Number(e.clientY - myY10) + "px";
    localStorage.setItem('winTopTimetable', String(Number(e.clientY - myY10)));
    localStorage.setItem('winLeftTimetable', String(Number(e.clientX - myX10)));
};

wintTimetable.onmousedown = function (a) { // изменение позиции окна предстоящих и прошедших занятиях
    if (checkelementtype(a)) {
        window.myX10 = a.layerX;
        window.myY10 = a.layerY;
        document.addEventListener('mousemove', listenerTimetable);
    }
}
wintTimetable.onmouseup = function () { document.removeEventListener('mousemove', listenerTimetable); } // прекращение изменения позиции окна предстоящих и прошедших занятиях

document.getElementById('AF_Timetable').ondblclick = function (a) { // скрытие окна предстоящих и прошедших занятиях по двойному клику
    if (checkelementtype(a)) {
        document.getElementById('AF_Timetable').style.display = 'none';
        document.getElementById('timetabledata').innerHTML = "";
    }
}

    document.getElementById('hideMeTT').onclick = function () { // скрытие окна предстоящих и прошедших занятиях
        if (document.getElementById('AF_Timetable').style.display == '')
            document.getElementById('AF_Timetable').style.display = 'none'

        document.getElementById('timetabledata').innerHTML = "";
    }

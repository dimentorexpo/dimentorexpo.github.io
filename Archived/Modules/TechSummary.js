var win_Techsummary = // описание элементов окна вывода технической информации обратившегося последний раз в чат пользователя
    `<div style="display: flex; width: 400px;">
<span style="width: 400px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 400;" id="HeadTechSummary">
                        <button id="hideMeTechSum" style="width:50px; background: #228B22;">hide</button>
                </div>
                 </span>
                <div id="techsummaryinfo">
                     <p id="techsumdata" style="width:400px;color:bisque; max-height:400px; margin-left:5px; font-size: 18px; margin-top:5px; overflow:auto;text-align:center;"></p>
                </div>
</span>
</div>`;

if (localStorage.getItem('winTopTechSum') == null) { // начальное положение окна проверки тех информации об устройстве пользователя обратившегося в чат АФ
    localStorage.setItem('winTopTechSum', '120');
    localStorage.setItem('winLeftTechSum', '295');
}

let wintTechSummary = document.createElement('div'); // создание окна инфо об устройстве пользователя
document.body.append(wintTechSummary);
wintTechSummary.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopTechSum') + 'px; left: ' + localStorage.getItem('winLeftTechSum') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintTechSummary.style.display = 'none';
wintTechSummary.setAttribute('id', 'AF_TechSummary');
wintTechSummary.innerHTML = win_Techsummary;

var listenerTechSummary = function (e, a) { // сохранение позиции окна инфо об устройстве пользователя
    wintTechSummary.style.left = Number(e.clientX - myX11) + "px";
    wintTechSummary.style.top = Number(e.clientY - myY11) + "px";
    localStorage.setItem('winTopTechSum', String(Number(e.clientY - myY11)));
    localStorage.setItem('winLeftTechSum', String(Number(e.clientX - myX11)));
};

wintTechSummary.onmousedown = function (a) { // изменение позиции окна инфо об устройстве пользователя
    if (checkelementtype(a)) {
        window.myX11 = a.layerX;
        window.myY11 = a.layerY;
        document.addEventListener('mousemove', listenerTechSummary);
    }
}
wintTechSummary.onmouseup = function () { document.removeEventListener('mousemove', listenerTechSummary); } // прекращение изменения позиции окна инфо об устройстве пользователя

// Модуль скрытия окон по двойному клику

document.getElementById('AF_TechSummary').ondblclick = function (a) { // скрытие окна инфо об устройстве пользователя по двойному клику
    if (checkelementtype(a)) {
        document.getElementById('AF_TechSummary').style.display = 'none';
        document.getElementById('techsumdata').innerHTML = "";
    }
}

// Конец модуля скрытия окон по двойному клику

    document.getElementById('hideMeTechSum').onclick = function () { // скрытие окна инфо об устройстве пользователя
        if (document.getElementById('AF_TechSummary').style.display == '')
            document.getElementById('AF_TechSummary').style.display = 'none'

        document.getElementById('techsumdata').innerHTML = "";
    }
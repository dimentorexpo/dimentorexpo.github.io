var win_GrList =  // описание элементов окна Списка группы
    `<div style="display: flex; width: 450px;">
        <span style="width: 450px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 400;" id="grlistdata">
                                <button id="hideMeGrList" style="width:50px; background: #228B22;">hide</button>
                        </div>
						<div>
                        <input id="idgrouptolist" placeholder="ID группы" title="Введите ID группы для получения списка учеников" autocomplete="off" type="text" style="text-align: center; width: 80px; color: black;margin-left:5px; position:relative; left:30%;">
							<button title="Запуск получения списка учеников группы" id="getidgrouptolist" style="position:relative; left:30%;">Get info</button>
						</div>
				</span>
						<div id="grlstdiv">
							 <br>
							 <p id="grlistinfo" style="margin-left: 5px; color:bisque;"></span>
							 <br>
						</div>
        </span>
</div>`;

if (localStorage.getItem('winTopGrList') == null) {  // начальное положение окна списка группы
    localStorage.setItem('winTopGrList', '120');
    localStorage.setItem('winLeftGrList', '295');
}

let wintGrList = document.createElement('div'); // создание окна Список группы
document.body.append(wintGrList);
wintGrList.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopGrList') + 'px; left: ' + localStorage.getItem('winLeftGrList') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintGrList.style.display = 'none';
wintGrList.setAttribute('id', 'AF_GrList');
wintGrList.innerHTML = win_GrList;

var listenerGrList = function (e, a) { // сохранение позиции окна Список группы
    wintGrList.style.left = Number(e.clientX - myX13) + "px";
    wintGrList.style.top = Number(e.clientY - myY13) + "px";
    localStorage.setItem('winTopGrList', String(Number(e.clientY - myY13)));
    localStorage.setItem('winLeftGrList', String(Number(e.clientX - myX13)));
};

wintGrList.onmousedown = function (a) { // изменение позиции окна Список группы
    if (checkelementtype(a)) {
        window.myX13 = a.layerX;
        window.myY13 = a.layerY;
        document.addEventListener('mousemove', listenerGrList);
    }
}
wintGrList.onmouseup = function () { document.removeEventListener('mousemove', listenerGrList); } // прекращение изменения позиции окна Список группы

document.getElementById('AF_GrList').ondblclick = function (a) { // скрытие окна Список группы по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_GrList').style.display = 'none'; }
}

    document.getElementById('hideMeGrList').onclick = function () { // скрытие окна Список группы
        if (document.getElementById('AF_GrList').style.display == '') {
            document.getElementById('AF_GrList').style.display = 'none';
            document.getElementById('grlistinfo').innerText = "";
            document.getElementById('idgrouptolist').value = "";
        }
    }


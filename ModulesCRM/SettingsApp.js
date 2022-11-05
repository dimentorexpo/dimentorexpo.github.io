var win_SettingsApp =  // описание элементов главного окна
    `<div style="border: 2px double black; background-color: #464451" id="SettingsApp_bar">
        <div style="margin: 5px; width: 380px;" id="SettingsApp_1str">
            <button class="btnCRM" title="скрывает меню" id="hideSettingsApp" style="width:50px; background: #228B22;">hide</button>
        </div>
		<div style="margin: 5px; width: 350px">
                <select style="height:28px; width:210px; text-align:center" id="soundlistaddr" onchange="changesoundaddr()">
                    <option selected="" disabled="">Звук нового сообщения</option>
                    <option value="othersound">Выбрать свой звук</option>
                    </select>
				<button class="btnCRM" title="Проверка звука при добавленной ссылке" id="sound_test">▶</button>
				<label title="Включение и отключение звука входящих запросов" class="checkbox-audio">
					<input id="audioswitcher" type="checkbox" checked="">
						<span class="checkbox-audio-switch"></span>
				</label>
                <input id="sound_adr" placeholder="Введи адрес звука" autocomplete="off" type="text" style="display: none; text-align: center; width: 210px; color: black;">
				<button class="btnCRM" title="Сохраняет ссылки на новый источник звука для входящего запроса" id="sound_save" style="display: none">💾</button>
				<br>
				<span style="color:bisque">Громкость звука</span>
				<input id="range" min="0" max="1" value="1.0" step="0.1" type="range">
                    <br>
				<span style="color:bisque">Интервал воспроизведения звука:</span>
				<input title="Ввод интервала в секундах между повторами звука нового чата" id="soundplayinterval" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black;">
				<button class="btnCRM" title="Внести изменения в интервал между повторами звука нового чата" id="setsoundplayinterval" style="margin-top: 5px">SET⌚</button>
					<br>
				<div style="margin-top: 5px; width: 320px">
                    <label style="color:bisque"><input type="checkbox" id="hidelpmwindow">Скрыть окно с У П</label>
                    <br>
                    <input id="test_std" placeholder="ID тест У" autocomplete="off" title = "ID личного тестового ученика" type="text" style="text-align: center; width: 100px; color: black;">
                    <button class="btnCRM" id="setteststd" title="Добавить в localstorage ID тестового У" style="margin-top: 5px">💾</button>
                    <input id="test_teach" placeholder="ID тест П" autocomplete="off" title = "ID личного тестового преподавателя" type="text" style="text-align: center; width: 100px; color: black;">
                    <button class="btnCRM" id="settestteach" title="Добавить в localstorage ID тестового П" style="margin-top: 5px">💾</button>
                </div>
				<button class="btnCRM" id="savesettingstofile" title="Сохраняет все настройки из localstorage в отдельный .json файл" style="color: #e5ece6; margin-top: 5px">💾 Сохранить настройки</button>
				<input type="file" id="fileinput" title="Загружает все настройки в localstorage из ранее сохраненного файла настроек в формте .json" style="display:none;">
				<label style="color: #e5ece6; background: #768d87; padding: 5px; border-radius: 5px; border: 1px solid #566963;" for="fileinput">⤵ Загрузить настройки</label>
			</div>
		</div>
    </div>`;

    if (localStorage.getItem('winTopSettingsApp') == null) { // началоное положение окна настроек (если не задано ранее)
        localStorage.setItem('winTopSettingsApp', '120');
        localStorage.setItem('winLeftSettingsApp', '295');
    }
    
    let wintSettingsApp = document.createElement('div'); // создание окна настроек
    document.body.append(wintSettingsApp);
    wintSettingsApp.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopSettingsApp') + 'px; left: ' + localStorage.getItem('winLeftSettingsApp') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
    wintSettingsApp.style.display = 'none';
    wintSettingsApp.setAttribute('id', 'winSettingsApp');
    wintSettingsApp.innerHTML = win_SettingsApp;
    
    var listenerSettingsApp = function (e, a) { // сохранение позиции окна настроек
        wintSettingsApp.style.left = Number(e.clientX - myX5) + "px";
        wintSettingsApp.style.top = Number(e.clientY - myY5) + "px";
        localStorage.setItem('winTopSettingsApp', String(Number(e.clientY - myY5)));
        localStorage.setItem('winLeftSettingsApp', String(Number(e.clientX - myX5)));
    };
    
    wintSettingsApp.onmousedown = function (a) { // изменение позиции окна настроек
        if (checkelementtype(a)) {
            window.myX5 = a.layerX;
            window.myY5 = a.layerY;
            document.addEventListener('mousemove', listenerSettingsApp);
        }
    }
    wintSettingsApp.onmouseup = function () { document.removeEventListener('mousemove', listenerSettingsApp); } // прекращение изменения позиции окна настроек
    
    document.getElementById('winSettingsApp').ondblclick = function (a) { // скрытие окна настроек по двойному клику
        if (checkelementtype(a)) { document.getElementById('winSettingsApp').style.display = 'none'; }
    }
    
    document.getElementById('hideSettingsApp').onclick = function () { // скрытие окна настроек
        if (document.getElementById('winSettingsApp').style.display == '')
            document.getElementById('winSettingsApp').style.display = 'none'
    }
    
    document.getElementById('btnSettingsApp').onclick = function () { // открытие окна настроек
        if (document.getElementById('winSettingsApp').style.display == '') {
            document.getElementById('winSettingsApp').style.display = 'none'
            document.getElementById('idmymenucrm').style.display = 'none'
        } else {
            document.getElementById('winSettingsApp').style.display = ''
            document.getElementById('idmymenucrm').style.display = 'none'

            if (localStorage.getItem('test_stud') != "" || localStorage.getItem('test_stud') != null) { // если в localStorage записан тестовый У отобразить
                document.getElementById('test_std').value = localStorage.getItem('test_stud');
            } else document.getElementById('test_std').value = "";
        
            if (localStorage.getItem('test_teach') != "" || localStorage.getItem('test_teach') != null) { // если в localStorage записан тестовый У отобразить
                document.getElementById('test_teach').value = localStorage.getItem('test_teach');
            } else document.getElementById('test_teach').value = "";   

            if (localStorage.getItem('splinter') != null || localStorage.getItem('splinter') != "") { //Загружаем интервал между воспроизведением звука
                document.getElementById('soundplayinterval').value = localStorage.getItem('splinter');
            } else {
                localStorage.setItem('splinter', 3);
                document.getElementById('soundplayinterval').value = localStorage.getItem('splinter');
            }

            let range = document.getElementById('range'); // Загружаем громкость
            range.value = localStorage.getItem('audiovol');

            if (localStorage.getItem('audio') == '0') // загружаем ВКЛ/ВЫКЛ звук
                document.getElementById('audioswitcher').checked = false;
            else
                document.getElementById('audioswitcher').checked = true;
        }
    }
let objSoundList = document.getElementById('soundlistaddr')
let sondsfromdoc;
let soundsconteiner;

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
function addOption(oListbox, text, value) {  //функция добавления опции в список
    var oOption = document.createElement("option");
    oOption.appendChild(document.createTextNode(text));
    oOption.setAttribute("value", value);
    oListbox.appendChild(oOption);
}
    
function changesoundaddr() { // сохранение измнений адресса звука    
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
                    console.log(objSoundList[i].innerText + ' ' + objSoundList[i].value)
                    localStorage.setItem('sound_str', objSoundList[i].value)
                    audio = new Audio(localStorage.getItem('sound_str'))
                }
            }
        }
    }
}

    if (localStorage.getItem('audiovol') != null) { // задаем громкость звука 100 (если не задана)
        audio.volume = localStorage.getItem('audiovol');
    } else localStorage.setItem('audiovol', 1);

    if (objSoundList.length < 3) { // если не загружен спискок звуков - загружаем
        getsoundsfromdoc()
    }

    document.getElementById('setsoundplayinterval').onclick = function () { // сохранение изменения интервала воспроизведения звука
        if (document.getElementById('soundplayinterval').value != '') {
            localStorage.setItem('splinter', document.getElementById('soundplayinterval').value);
        } else console.log("Базовое значение равно 3 секунды")
    }

    range.onchange = function () { // сохранение изменения громкости
        if (localStorage.getItem('audiovol') != null) {
            audio.volume = this.value;
            localStorage.setItem('audiovol', audio.volume);
        } else localStorage.setItem('audiovol', this.value);
    }

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
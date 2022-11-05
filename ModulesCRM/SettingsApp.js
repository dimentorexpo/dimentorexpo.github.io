var win_SettingsApp =  // описание элементов главного окна
    `<div style="border: 2px double black; background-color: #464451" id="SettingsApp_bar">
        <div style="margin: 5px; width: 380px;" id="SettingsApp_1str">
            <button title="скрывает меню" id="hideSettingsApp" style="width:50px; background: #228B22;">hide</button>
        </div>
		<div style="margin: 5px; width: 350px">
                <select style="height:28px; width:210px; text-align:center" id="soundlistaddr" onchange="changesoundaddr()">
                    <option selected="" disabled="">Звук нового сообщения</option>
                    <option value="othersound">Выбрать свой звук</option>
                    </select>
				<button title="Проверка звука при добавленной ссылке" id="sound_test">▶</button>
				<label title="Включение и отключение звука входящих запросов" class="checkbox-audio">
					<input id="audioswitcher" type="checkbox" checked="">
						<span class="checkbox-audio-switch"></span>
				</label>
                <input id="sound_adr" placeholder="Введи адрес звука" autocomplete="off" type="text" style="display: none; text-align: center; width: 210px; color: black;">
				<button title="Сохраняет ссылки на новый источник звука для входящего запроса" id="sound_save" style="display: none">💾</button>
				<br>
				<span style="color:bisque">Громкость звука</span>
				<input id="range" min="0" max="1" value="1.0" step="0.1" type="range">
                    <br>
				<span style="color:bisque">Интервал воспроизведения звука:</span>
				<input title="Ввод интервала в секундах между повторами звука нового чата" id="soundplayinterval" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black;">
				<button title="Внести изменения в интервал между повторами звука нового чата" id="setsoundplayinterval" style="margin-top: 5px">SET⌚</button>
					<br>
				<div style="margin-top: 5px; width: 320px">
                    <label style="color:bisque"><input type="checkbox" id="hidelpmwindow">Скрыть окно с У П</label>
                    <br>
                    <input id="test_std" placeholder="ID тест У" autocomplete="off" title = "ID личного тестового ученика" type="text" style="text-align: center; width: 100px; color: black;">
                    <button id="setteststd" title="Добавить в localstorage ID тестового У" style="margin-top: 5px">💾</button>
                    <input id="test_teach" placeholder="ID тест П" autocomplete="off" title = "ID личного тестового преподавателя" type="text" style="text-align: center; width: 100px; color: black;">
                    <button id="settestteach" title="Добавить в localstorage ID тестового П" style="margin-top: 5px">💾</button>
                </div>
				<button id="savesettingstofile" title="Сохраняет все настройки из localstorage в отдельный .json файл" style="color: #e5ece6; margin-top: 5px">💾 Сохранить настройки</button>
				<input type="file" id="fileinput" title="Загружает все настройки в localstorage из ранее сохраненного файла настроек в формте .json" style="display:none;">
				<label style="color: #e5ece6; background: #768d87; padding: 5px; border-radius: 5px; border: 1px solid #566963;" for="fileinput">⤵ Загрузить настройки</label>
			</div>
		</div>
    </div>`;

    if (localStorage.getItem('winTopSettingsApp') == null) { // началоное положение окна будильника (если не задано ранее)
        localStorage.setItem('winTopSettingsApp', '120');
        localStorage.setItem('winLeftSettingsApp', '295');
    }
    
    let wintSettingsApp = document.createElement('div'); // создание окна будильника
    document.body.append(wintSettingsApp);
    wintSettingsApp.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopSettingsApp') + 'px; left: ' + localStorage.getItem('winLeftSettingsApp') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
    wintSettingsApp.style.display = 'none';
    wintSettingsApp.setAttribute('id', 'winSettingsApp');
    wintSettingsApp.innerHTML = win_SettingsApp;
    
    var listenerSettingsApp = function (e, a) { // сохранение позиции окна будильника
        wintSettingsApp.style.left = Number(e.clientX - myX5) + "px";
        wintSettingsApp.style.top = Number(e.clientY - myY5) + "px";
        localStorage.setItem('winTopSettingsApp', String(Number(e.clientY - myY5)));
        localStorage.setItem('winLeftSettingsApp', String(Number(e.clientX - myX5)));
    };
    
    wintSettingsApp.onmousedown = function (a) { // изменение позиции окна будильника
        if (checkelementtype(a)) {
            window.myX5 = a.layerX;
            window.myY5 = a.layerY;
            document.addEventListener('mousemove', listenerSettingsApp);
        }
    }
    wintSettingsApp.onmouseup = function () { document.removeEventListener('mousemove', listenerSettingsApp); } // прекращение изменения позиции окна будильника
    
    document.getElementById('winSettingsApp').ondblclick = function (a) { // скрытие окна будильника по двойному клику
        if (checkelementtype(a)) { document.getElementById('winSettingsApp').style.display = 'none'; }
    }
    
    document.getElementById('hideSettingsApp').onclick = function () { // скрытие окна будильника
        if (document.getElementById('winSettingsApp').style.display == '')
            document.getElementById('winSettingsApp').style.display = 'none'
    }
    
    document.getElementById('btnSettingsApp').onclick = function () { // открытие окна будильника
        if (document.getElementById('winSettingsApp').style.display == 'none') {
            document.getElementById('winSettingsApp').style.display = ''
            document.getElementById('idmymenucrm').style.display = 'none'
        } else {
            document.getElementById('winSettingsApp').style.display = 'none'
            document.getElementById('idmymenucrm').style.display = 'none'
        }
    }
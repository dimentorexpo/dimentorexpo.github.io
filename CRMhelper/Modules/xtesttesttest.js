`<div 
            <input title="Ввод текста напоминания" id="remindertextCRM"  placeholder="Текст напоминания" autocomplete="off" style="text-align: center; margin-top: 5px; width: 260px; color: black;">
			<input title="Ввод часа от 0 до 23 для напоминания" "="" id="setchasCRM" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
			<input title="Ввод минут от 0 до 59 для напоминания" id="setminutaCRM" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
			<input title="Ввод текста напоминания" id="remindertextCRM1"  placeholder="Текст напоминания" autocomplete="off" style="text-align: center; margin-top: 5px; width: 260px; color: black;">
			<input title="Ввод часа от 0 до 23 для напоминания" "="" id="setchasCRM1" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
			<input title="Ввод минут от 0 до 59 для напоминания" id="setminutaCRM1" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
			<input id="testJira" placeholder="Введите слово или фразу для поиска" title="введите слово или фразу для поиска по Jira при одном клике будет искать по багам, если ввести в поле номер задачи например VIM-7288 и дабл кликнуть на рокету будет поиск по номеру" autocomplete="off" type="text" style="text-align: center; width: 300px; color: black; margin-top: 5px; margin-left: 20%;">
            <input type="date" style="color:black; margin-left:20px;  width:125px;" name="StartDataLS" id="dateFromLS"></span>
			<input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" name="EndDataLS" id="dateToLS"</span>
			<input id="idteacherforsearch" placeholder="Teacher ID" title="Введите ID учителя, чтобы проверить информацию по урокам" autocomplete="off" type="text" style="position:relative; left:33%; text-align: center; width: 100px; color: black;margin-left:5px"">
			<input id="idstudentforsearch" placeholder="Student ID" title="Введите ID ученика, чтобы отфильтровать поиск" autocomplete="off" type="text" style="position:relative; left:32%; text-align: center; width: 100px; color: black;margin-left:5px"">
            <input id="kibsvid" placeholder="ID Summary" title="Вводим id пользователя для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="kibsvhesh" placeholder="Хэш Summary" title="Вводим Хэш комнаты для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="kibservhesh" placeholder="Хэш = сервер" title="Вводим Хэш комнаты для определения сервера" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="kibslow" placeholder="Хэш слоу" title="Вводим Хэш комнаты для проверки слоулинков" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="kibheshvid" placeholder="Хэш видео" title="Вводим Хэш комнаты для проверки состояния видео" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="kibstihesh" placeholder="Хэш стрим" title="Вводим Хэш комнаты для проверки срстояния стрима" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="mobappid" placeholder="ID mob.app" title="Вводим id пользователя для открытия действий в приложении" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="rpayid" placeholder="ID платежи" title="Вводим id пользователя для открытия лога платежей" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
 			<input id="UserActions" placeholder="ID У/П действ" title="Вводим id пользователя для открытия информации о действиях в личном кабинете" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
            <input id="customfield_102" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_114" placeholder="ID в системе Auth"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_6" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_40" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_26" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_21" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_16" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_11" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_32" placeholder="ID пользователя" oninput="onlyNumber(this)" class="sdcustfieldformlines removefield"></input>
			<input id="customfield_97" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_50" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_56" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_66" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_71" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_76" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_81" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_109" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines  removefield"></input>
			<input id="customfield_91" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield">
            <input id="customfield_911" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></input>
            <input id="customfield_912" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></input>
			<input id="customfield_118" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
            <input id="customfield_61" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
			<input id="audioCRMswitcher" type="checkbox" checked="">
			<input id="sound_adrCRM" placeholder="Введи адрес звука" autocomplete="off" type="text" style="display: none; text-align: center; width: 210px; color: black;">
			<input id="rangeCRM" min="0" max="1" value="1.0" step="0.1" type="range">
            <input type="checkbox" onchange="changerepeatsoundCRM()" id="repeatsoundselectCRM">Повторять звук новой задачи</label>
            <input title="Ввод интервала в секундах между повторами звука нового чата" id="soundplayintervalCRM" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black;">
			<input id="test_stdCRM" placeholder="ID тест У" autocomplete="off" title = "ID личного тестового ученика" type="text" style="text-align: center; width: 100px; color: black;">
            <input id="test_teachCRM" placeholder="ID тест П" autocomplete="off" title = "ID личного тестового преподавателя" type="text" style="text-align: center; width: 100px; color: black;">
            <input type="file" id="fileinputCRM" title="Загружает все настройки в localstorage из ранее сохраненного файла настроек в формте .json" style="display:none;">
			<input id="clientid" placeholder="ID пользователя" autocomplete="off" type="text">
			<input id="otheroptionsmartchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
			<input id="operatornamesuggest" placeholder="Представься, пожалуйста" title="Вводим свою фамилию и имя" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
			<input id="linktochatsuggest" placeholder="Ссылка на предложение (чат)" title="Копируем ссылку на чат" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
			<input id="otheroptionchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
			
</div>`;


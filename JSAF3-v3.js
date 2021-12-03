function mystyles() {
    let mstl = document.createElement('style');
    document.body.append(mstl);
    var style = `.win_btn {
		background-color: #768d87;
		border-radius: 10px;
		border: 1px solid #566963;
		color: #ffffff;
		font-size: 12px;
		padding: 3px 2px;
		margin: -2px 1px;
	}
	button {
		background-color:#768d87;
		border-radius:5px; 
		border:1px solid #566963; 
		color:#ffffff; 
		padding:2px 2px;
	}
	button:hover {
		background: #6A5ACD;
	}
	.switch-btn {
		display: inline-block;
		width: 62px; /* ширина переключателя */
		height: 24px; /* высота переключателя */
		border-radius: 12px; /* радиус скругления */
		background: #bfbfbf; /* цвет фона */
		z-index: 0;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		position: relative;
		transition-duration: 300ms; /* анимация */
	}
	.switch-btn::after {
		content: "";
		height: 36px; /* высота кнопки */
		width: 36px; /* ширина кнопки */
		border-radius: 18px; /* радиус кнопки */
		background: #fff; /* цвет кнопки */
		top: -6px; /* положение кнопки по вертикали относительно основы */
		left: -6px; /* положение кнопки по горизонтали относительно основы */
		transition-duration: 300ms; /* анимация */
		box-shadow: 0 0 10px 0 #999999; /* тень */
		position: absolute;
		z-index: 1;
	}
	.switch-on {
		background: #fff;
		box-shadow: inset 0 0 10px 0 #999999; /* тень */
	}
	.switch-on::after {
		left: 30px;
		background: #118c4e;
	}`
    mstl.innerHTML = style;
}

var win_AFhelper =  // описание элементов главного окна
    `<div style="display: flex; width: 351px;">
        <span style="width: 351px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" title="Переключает язык Русский/Английский" style="width:100px">Русский</button>
					<button id="hideMenu" title="Скрывает расширение и др открытых окон" style="margin-left:25px;">hide</button>
					<button id="setting" title="Открывает настройки расширения и включения/отключения будильника" style="width:16px; float: right; margin-right: 5px">S</button>
					<button id="links" title="Открывает доп.меню со ссылками и функциями" style="width:16px; float: right; margin-right: 5px">L</button>
					<button id="addsrc" title="Открывает доп меню для работы с сервисами школы, требующими запрос на выдачу доступа" style="width:16px; float: right; margin-right: 5px">*</button>
					<div id="reminderstatus" title="Статус будильника 🔔 - вкл, 🔕 - выкл" style="width:16px; float: right; margin-right: 5px"></div>
					<input id ="phone_tr" placeholder="Телефон" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 15px; margin-top: 5px;"></input>
                    <input id ="email_tr" placeholder="Почта" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 12px; margin-top: 5px;"></input>
				</div>
			
				<div style="margin-left: 5px; margin-right: 5px; margin-bottom:5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
			</div>
			<div style="margin: 5px;" id="7str">
				<textarea style="width: 341px; height: 125px;" id="inp"></textarea>
				<button title="Переключение для выбора отправить или доработать сообщение" id="msg1" style="width:100px;">Отправить</button>
				<button title="Отправить текст" id="snd" style="width:50px; margin-left:41px">send</button>
				<button title="Переключает между отправкой текста в заметки или в чат пользователю" id="msg" style="width:100px; margin-left:41px">Заметки</button>
			</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 350px">
			</div>
		</div>
	<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
			<div style="margin: 5px; width: 350px">
				<input id="sound_adr" placeholder="Адрес звука" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				<button title="Сохраняет ссылки на новый источник звука для входящего запроса в АФ" id="sound_save">save</button> 
				<button title="Проверка звука при добавленной ссылке" id="sound_test">test</button>
				<button title="Включение и отключение звука в АФ входящих запросов" id="switcher">ВКЛ</button>
				<label style="color:bisque"><input type="checkbox" id="removeinfowindow"/>Убрать окно с Info</label>
				<br>
				<input title="Ввод часа от 0 до 23 для будильника"" id="setchas" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
				<input title="Ввод минут от 0 до 59 для будильника" id="setminuta" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
				<button title="Запуск будильника при устаноовленном времени" id="setreminder" style="margin-top: 5px">SET🔔</button>
				<br>
				<button title="Отображение текущего времени" id="clock_js" style="color: white; margin-top: 5px"></button>
				<button id="clock_remin" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: lightgreen; margin-top: 5px"></button>
			</div>
				
			<div style="margin: 5px; width: 350px">
				<p style="color:white; margin:0 0 5px 0;"> Отдел: 
				<button title="Переключает на другой документ с шаблонами без иконок возле имен кнопок. После нажатия обновите страницу для применения изменений" id="type_TP">ТП</button>
				<button title="Переключает на другой документ с шаблонами с иконками возле имен кнопок. После нажатия обновите страницу для применения изменений" id="type_TP_new">ТП*</button>
				</p>
			</div>
			

		</div>
		
	</span>
</div>`;

var win_linksd =  // описание элементов окна доступов
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="linksd_1str">
                            <button title="скрывает меню" id="hideMeLinksd" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="linksd_kib_box">
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Kibana</p>
                            <input id="kibsvid" placeholder="ID Summary" title="Вводим id пользователя для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibsvidbut">🔎</button>
                            <input id="kibsvhesh" placeholder="Хэш Summary" title="Вводим Хэш комнаты для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibsvheshbut">🔎</button>
                            <input id="kibservhesh" placeholder="Хэш = сервер" title="Вводим Хэш комнаты для определения сервера" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibservheshbut">🔎</button>
                            <input id="kibslow" placeholder="Хэш слоу" title="Вводим Хэш комнаты для проверки слоулинков" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibslowbut">🔎</button>
                            <input id="kibheshvid" placeholder="Хэш видео" title="Вводим Хэш комнаты для проверки состояния видео" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibheshvidbut">🔎</button>
                            <input id="kibstihesh" placeholder="Хэш стрим" title="Вводим Хэш комнаты для проверки срстояния стрима" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibstiheshbut">🔎</button>
                            <input id="kiblk" placeholder="ID ЛК" title="Вводим id пользователя для просмотра входа в ЛК" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kiblkbut">🔎</button>
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Redash</p>
                            <input id="mobappid" placeholder="ID mob.app" title="Вводим id пользователя для открытия действий в приложении" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="mobappidbut">🔎</button>
                            <input id="rpayid" placeholder="ID платежи" title="Вводим id пользователя для открытия лога платежей" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="rpayidbut">🔎</button>   
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Grafana</p>                       
                            <button title="Открывает Графану с состоянием видеосерверов, при наплыве обращений проверяйте его" id="grafanalnk" style="width:105px">Вид.сервера</button>
                        </div>
                </span>
        </span>
</div>`;

var win_Links =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
					<button title="Отображает актуальные креды к BrowserStack" id="creds" style="width:50px;">ℹ</button>
					<button title="Открывает раздел для генерирования одноразового пароля для мобильного приложения" id="passappgen" style="width:50px;">📲</button>
					<button title="Открывает Базу знаний в Confluence" id="knoweledgebase" style="width:50px;">📚</button>
					<button title="Открывает календарь для планирования проверки со 2ЛТП" id="datsyurl" style="width:50px;">📆</button>
					<button title="Открывает меню для работы со статистикой, поиска чатов без тематики, с низкими оценками, по комментарию" id="getStats" style="width: 50px;">📋</button>
                    <button title="Открывает известные баги на платформе" id="confbugs" style="width:50px; float: right; margin-right: 5px">🐞</button>
					<button title="Открывает известные мобильные баги на платформе" id="confbugsm" style="width:50px; float: right; margin-right: 5px">🐞📱</button>
				</div>				
				<div style="margin: 5px; width: 550px;" id="links_but">
					<button title="Открывает Timetable" id="timetable" style="width:105px">TimeTable</button>
					<button title="Открывает админку Talks для поиска по ID П ID У , с которым идет урок" id="talksadm" style="width:105px">Talks</button>
					<button title="Открывает начислятор билинга для просмотра реального баланса у ученика и зависшщих уроков не на той STK" id="billingadm" style="width:105px">Начислятор</button>
					<button title="Открывает раздел для создания операции компенсации ученику" id="compens" style="width:105px">Компенсация</button>
					<button title="Открывает CMS хранилище материалов уроков" id="CMS" style="width:105px">CMS</button>
					<button title="Открывает админку пользователей" id="useradm" style="width:105px; margin-top: 3px">Админка</button>
					<button title="Открывает поиск платежа по данным карте, сумме, дате платежа" id="transactions" style="width:105px; margin-top: 3px">Поиск $</button>
					<button title="Открывает форму передачи предложений от пользователей" id="suggestions" style="width:105px; margin-top: 3px">Предложения</button>
					<button title="Открывает раздел с проверкой фичей(кругов), подключенных пользователю и добавление/удаление их" id="userfeatures" style="width:105px; margin-top: 3px">User Фичи</button>
					<button title="Открывает новый TRM 2.0 с инфой о преподавателях" id="trmnew" style="width:105px; margin-top: 3px">TRM2</button>
					<button title="Открывает раздел в Confluence по созданию тестовых комнат" id="testroom" style="width:105px; margin-top: 3px">TestRooms</button>
					<button title="Открывает форму по аппеляции негативных оценок (<4), если вы считаете их необоснованными" id="badmarks" style="width:105px; margin-top: 3px">-оценки</button>
					<button title="Открывает форму по аппеляциям аудита" id="apelation" style="width:105px; margin-top: 3px">Апелляции</button>
					<button title="открывает фичи групп для активации связи на ГУ" id="groupfeatures" style="width:105px; margin-top: 3px">Фичи Групп</button>
					<button title="Открывает сайт BrowserStack" id="browserstack" style="width:105px; margin-top: 3px">BrowserStaсk</button>
					<button title="Открывает раздел для проверки сертификата" id="certificates" style="width:105px; margin-top: 3px">Сертификаты</button>
					<button title="Открывает раздел для проверки промокодов" id="promocodes" style="width:105px; margin-top: 3px">Промокоды</button>
					<button title="CMS словаря" id="cmswordssearch" style="width:105px; margin-top: 3px">CMS словаря</button>
					<button title="Открывает форму по добавлению новых вопросов для консультации преподавателей" id="TCQnew" style="width:105px; margin-top: 3px">TC нов. вопр.</button>
					<button title="Открывает документ, где собраны вопросы и ответы для консультации преподавателей" id="TCQtable" style="width:105px; margin-top: 3px">TC таблица</button>
				</div>	
				<div style="margin: 5px; width: 550px" id="links_box">
					<input id="cpuname" placeholder="CPU name" title="вводим название процессора, чтобы сразу перейти на сайт с проверкой рейтинга CPU" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="benchmark">🔎</button>
					<input id="grid" placeholder="ID ГУ(ADM)" title="вводим ID группы, чтобы перейти в админку КГЛ и просмотреть общий список учеников, статус группы и П" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="groupadm">🔎</button>
					<input id="studguid" placeholder="ID У ГУ" title="вводим ID У, чтобы зайти в профиль ученика из групповых  уроков (увидеть историю занятий, баланс, препода)" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="sguid">🔎</button>
					<input id="creditstatus" placeholder="ID У рассрочка" title="вводим ID У, чтобы получить прямую ссылку для проверки рассрочек ученика" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="credits">🔎</button>
					<input id="crmoneinfo" placeholder="ID У CRM1" title="вводим ID У, чтобы получить прямую ссылку для просмотра заявки ученика в CRM1" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gotocrmoneinfo">🔎</button>
					<input id="iplookup" placeholder="IP У/П/Vimbox" title="вводим IP У/П/Платформы, чтобы получить информацию о месторасположении географического адреса и получения информации о хостинге" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gotolookip">🔎</button>
					<input id="lgssearch" placeholder="LGS ID Group" title="Введите ID LGS группы для просмотра информации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getlgsinfo">🔎</button>
					<input id="jirasearch" placeholder="FindJira" title="введите слово или фразу для поиска задачи по Jira" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="startjirasearch">🔎</button>
					<input id="cmsstepid" placeholder="CMS stepUUID" title="вводим stepUUID, чтобы сразу попасть в ЦМС на нужный урок и найти на нем наш слайд и проверить" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="cmsid">🔎</button>
					<input id="idforservicelocaleru" placeholder="ID У обсл RU" title="вводим ID У и по нажатию изменяем сразу ему язык обслуживания на русский" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="setservicelocaleru">🚀</button>
					<input id="setidformobpass" placeholder="ID У/П МП" title="введите ID У/П для генерации разового пароля он будет отображен в поле ввода ID и скопирован в  буфер обмена" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getmobpasscode" style="width: 25.23px;">🚀</button>
					<input id="HWstudID" placeholder="ID У для HW" title="вводим ID У, чтобы получить прямую ссылку при открытии с П сразу увидим список ДЗ У" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="showcaseHW" style="width: 25.23px;">💾</button>
					<input id="lookhash" placeholder="roomhash" title="вставляем хэш, копируем в буфер код, со стороны П в консоли выполняем, и в Network смотрим roomhash для какого ученика была создана комната" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gethash" style="width: 25.23px;">💾</button>
					<input id="enablerAP" placeholder="ID услуги(АП)" title="копируем услуги, где нужно активировать АП и сохраняем в буфер, в ЛКУ переходим по ссылке для активации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getenablerAP" style="width: 25.23px;">💾</button>
					<input id="skipAP" placeholder="ID ус(skipАП)" title="копfunction mystyles() {
    let mstl = document.createElement('style');
    document.body.append(mstl);
    var style = `.win_btn {
		background-color: #768d87;
		border-radius: 10px;
		border: 1px solid #566963;
		color: #ffffff;
		font-size: 12px;
		padding: 3px 2px;
		margin: -2px 1px;
	}
	button {
		background-color:#768d87;
		border-radius:5px; 
		border:1px solid #566963; 
		color:#ffffff; 
		padding:2px 2px;
	}
	button:hover {
		background: #6A5ACD;
	}
	.switch-btn {
		display: inline-block;
		width: 62px; /* ширина переключателя */
		height: 24px; /* высота переключателя */
		border-radius: 12px; /* радиус скругления */
		background: #bfbfbf; /* цвет фона */
		z-index: 0;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		position: relative;
		transition-duration: 300ms; /* анимация */
	}
	.switch-btn::after {
		content: "";
		height: 36px; /* высота кнопки */
		width: 36px; /* ширина кнопки */
		border-radius: 18px; /* радиус кнопки */
		background: #fff; /* цвет кнопки */
		top: -6px; /* положение кнопки по вертикали относительно основы */
		left: -6px; /* положение кнопки по горизонтали относительно основы */
		transition-duration: 300ms; /* анимация */
		box-shadow: 0 0 10px 0 #999999; /* тень */
		position: absolute;
		z-index: 1;
	}
	.switch-on {
		background: #fff;
		box-shadow: inset 0 0 10px 0 #999999; /* тень */
	}
	.switch-on::after {
		left: 30px;
		background: #118c4e;
	}`
    mstl.innerHTML = style;
}

var win_AFhelper =  // описание элементов главного окна
    `<div style="display: flex; width: 351px;">
        <span style="width: 351px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" title="Переключает язык Русский/Английский" style="width:100px">Русский</button>
					<button id="hideMenu" title="Скрывает расширение и др открытых окон" style="margin-left:25px;">hide</button>
					<button id="setting" title="Открывает настройки расширения и включения/отключения будильника" style="width:16px; float: right; margin-right: 5px">S</button>
					<button id="links" title="Открывает доп.меню со ссылками и функциями" style="width:16px; float: right; margin-right: 5px">L</button>
					<button id="addsrc" title="Открывает доп меню для работы с сервисами школы, требующими запрос на выдачу доступа" style="width:16px; float: right; margin-right: 5px">*</button>
					<div id="reminderstatus" title="Статус будильника 🔔 - вкл, 🔕 - выкл" style="width:16px; float: right; margin-right: 5px"></div>
					<input id ="phone_tr" placeholder="Телефон" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 15px; margin-top: 5px;"></input>
                    <input id ="email_tr" placeholder="Почта" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 12px; margin-top: 5px;"></input>
				</div>
			
				<div style="margin-left: 5px; margin-right: 5px; margin-bottom:5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
			</div>
			<div style="margin: 5px;" id="7str">
				<textarea style="width: 341px; height: 125px;" id="inp"></textarea>
				<button title="Переключение для выбора отправить или доработать сообщение" id="msg1" style="width:100px;">Отправить</button>
				<button title="Отправить текст" id="snd" style="width:50px; margin-left:41px">send</button>
				<button title="Переключает между отправкой текста в заметки или в чат пользователю" id="msg" style="width:100px; margin-left:41px">Заметки</button>
			</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 350px">
			</div>
		</div>
	<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
			<div style="margin: 5px; width: 350px">
				<input id="sound_adr" placeholder="Адрес звука" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				<button title="Сохраняет ссылки на новый источник звука для входящего запроса в АФ" id="sound_save">save</button> 
				<button title="Проверка звука при добавленной ссылке" id="sound_test">test</button>
				<button title="Включение и отключение звука в АФ входящих запросов" id="switcher">ВКЛ</button>
				<label style="color:bisque"><input type="checkbox" id="removeinfowindow"/>Убрать окно с Info</label>
				<br>
				<input title="Ввод часа от 0 до 23 для будильника"" id="setchas" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
				<input title="Ввод минут от 0 до 59 для будильника" id="setminuta" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
				<button title="Запуск будильника при устаноовленном времени" id="setreminder" style="margin-top: 5px">SET🔔</button>
				<br>
				<button title="Отображение текущего времени" id="clock_js" style="color: white; margin-top: 5px"></button>
				<button id="clock_remin" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: lightgreen; margin-top: 5px"></button>
			</div>
				
			<div style="margin: 5px; width: 350px">
				<p style="color:white; margin:0 0 5px 0;"> Отдел: 
				<button title="Переключает на другой документ с шаблонами без иконок возле имен кнопок. После нажатия обновите страницу для применения изменений" id="type_TP">ТП</button>
				<button title="Переключает на другой документ с шаблонами с иконками возле имен кнопок. После нажатия обновите страницу для применения изменений" id="type_TP_new">ТП*</button>
				</p>
			</div>
			

		</div>
		
	</span>
</div>`;

var win_linksd =  // описание элементов окна доступов
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="linksd_1str">
                            <button title="скрывает меню" id="hideMeLinksd" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="linksd_kib_box">
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Kibana</p>
                            <input id="kibsvid" placeholder="ID Summary" title="Вводим id пользователя для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibsvidbut">🔎</button>
                            <input id="kibsvhesh" placeholder="Хэш Summary" title="Вводим Хэш комнаты для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibsvheshbut">🔎</button>
                            <input id="kibservhesh" placeholder="Хэш = сервер" title="Вводим Хэш комнаты для определения сервера" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibservheshbut">🔎</button>
                            <input id="kibslow" placeholder="Хэш слоу" title="Вводим Хэш комнаты для проверки слоулинков" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibslowbut">🔎</button>
                            <input id="kibheshvid" placeholder="Хэш видео" title="Вводим Хэш комнаты для проверки состояния видео" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibheshvidbut">🔎</button>
                            <input id="kibstihesh" placeholder="Хэш стрим" title="Вводим Хэш комнаты для проверки срстояния стрима" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibstiheshbut">🔎</button>
                            <input id="kiblk" placeholder="ID ЛК" title="Вводим id пользователя для просмотра входа в ЛК" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kiblkbut">🔎</button>
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Redash</p>
                            <input id="mobappid" placeholder="ID mob.app" title="Вводим id пользователя для открытия действий в приложении" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="mobappidbut">🔎</button>
                            <input id="rpayid" placeholder="ID платежи" title="Вводим id пользователя для открытия лога платежей" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="rpayidbut">🔎</button>   
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Grafana</p>                       
                            <button title="Открывает Графану с состоянием видеосерверов, при наплыве обращений проверяйте его" id="grafanalnk" style="width:105px">Вид.сервера</button>
                        </div>
                </span>
        </span>
</div>`;

var win_Links =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
					<button title="Отображает актуальные креды к BrowserStack" id="creds" style="width:50px;">ℹ</button>
					<button title="Открывает раздел для генерирования одноразового пароля для мобильного приложения" id="passappgen" style="width:50px;">📲</button>
					<button title="Открывает Базу знаний в Confluence" id="knoweledgebase" style="width:50px;">📚</button>
					<button title="Открывает календарь для планирования проверки со 2ЛТП" id="datsyurl" style="width:50px;">📆</button>
					<button title="Открывает меню для работы со статистикой, поиска чатов без тематики, с низкими оценками, по комментарию" id="getStats" style="width: 50px;">📋</button>
                    <button title="Открывает известные баги на платформе" id="confbugs" style="width:50px; float: right; margin-right: 5px">🐞</button>
					<button title="Открывает известные мобильные баги на платформе" id="confbugsm" style="width:50px; float: right; margin-right: 5px">🐞📱</button>
				</div>				
				<div style="margin: 5px; width: 550px;" id="links_but">
					<button title="Открывает Timetable" id="timetable" style="width:105px">TimeTable</button>
					<button title="Открывает админку Talks для поиска по ID П ID У , с которым идет урок" id="talksadm" style="width:105px">Talks</button>
					<button title="Открывает начислятор билинга для просмотра реального баланса у ученика и зависшщих уроков не на той STK" id="billingadm" style="width:105px">Начислятор</button>
					<button title="Открывает раздел для создания операции компенсации ученику" id="compens" style="width:105px">Компенсация</button>
					<button title="Открывает CMS хранилище материалов уроков" id="CMS" style="width:105px">CMS</button>
					<button title="Открывает админку пользователей" id="useradm" style="width:105px; margin-top: 3px">Админка</button>
					<button title="Открывает поиск платежа по данным карте, сумме, дате платежа" id="transactions" style="width:105px; margin-top: 3px">Поиск $</button>
					<button title="Открывает форму передачи предложений от пользователей" id="suggestions" style="width:105px; margin-top: 3px">Предложения</button>
					<button title="Открывает раздел с проверкой фичей(кругов), подключенных пользователю и добавление/удаление их" id="userfeatures" style="width:105px; margin-top: 3px">User Фичи</button>
					<button title="Открывает новый TRM 2.0 с инфой о преподавателях" id="trmnew" style="width:105px; margin-top: 3px">TRM2</button>
					<button title="Открывает раздел в Confluence по созданию тестовых комнат" id="testroom" style="width:105px; margin-top: 3px">TestRooms</button>
					<button title="Открывает форму по аппеляции негативных оценок (<4), если вы считаете их необоснованными" id="badmarks" style="width:105px; margin-top: 3px">-оценки</button>
					<button title="Открывает форму по аппеляциям аудита" id="apelation" style="width:105px; margin-top: 3px">Апелляции</button>
					<button title="открывает фичи групп для активации связи на ГУ" id="groupfeatures" style="width:105px; margin-top: 3px">Фичи Групп</button>
					<button title="Открывает сайт BrowserStack" id="browserstack" style="width:105px; margin-top: 3px">BrowserStaсk</button>
					<button title="Открывает раздел для проверки сертификата" id="certificates" style="width:105px; margin-top: 3px">Сертификаты</button>
					<button title="Открывает раздел для проверки промокодов" id="promocodes" style="width:105px; margin-top: 3px">Промокоды</button>
					<button title="CMS словаря" id="cmswordssearch" style="width:105px; margin-top: 3px">CMS словаря</button>
					<button title="Открывает форму по добавлению новых вопросов для консультации преподавателей" id="TCQnew" style="width:105px; margin-top: 3px">TC нов. вопр.</button>
					<button title="Открывает документ, где собраны вопросы и ответы для консультации преподавателей" id="TCQtable" style="width:105px; margin-top: 3px">TC таблица</button>
				</div>	
				<div style="margin: 5px; width: 550px" id="links_box">
					<input id="cpuname" placeholder="CPU name" title="вводим название процессора, чтобы сразу перейти на сайт с проверкой рейтинга CPU" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="benchmark">🔎</button>
					<input id="grid" placeholder="ID ГУ(ADM)" title="вводим ID группы, чтобы перейти в админку КГЛ и просмотреть общий список учеников, статус группы и П" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="groupadm">🔎</button>
					<input id="studguid" placeholder="ID У ГУ" title="вводим ID У, чтобы зайти в профиль ученика из групповых  уроков (увидеть историю занятий, баланс, препода)" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="sguid">🔎</button>
					<input id="creditstatus" placeholder="ID У рассрочка" title="вводим ID У, чтобы получить прямую ссылку для проверки рассрочек ученика" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="credits">🔎</button>
					<input id="crmoneinfo" placeholder="ID У CRM1" title="вводим ID У, чтобы получить прямую ссылку для просмотра заявки ученика в CRM1" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gotocrmoneinfo">🔎</button>
					<input id="iplookup" placeholder="IP У/П/Vimbox" title="вводим IP У/П/Платформы, чтобы получить информацию о месторасположении географического адреса и получения информации о хостинге" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gotolookip">🔎</button>
					<input id="lgssearch" placeholder="LGS ID Group" title="Введите ID LGS группы для просмотра информации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getlgsinfo">🔎</button>
					<input id="jirasearch" placeholder="FindJira" title="введите слово или фразу для поиска задачи по Jira" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="startjirasearch">🔎</button>
					<input id="cmsstepid" placeholder="CMS stepUUID" title="вводим stepUUID, чтобы сразу попасть в ЦМС на нужный урок и найти на нем наш слайд и проверить" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="cmsid">🔎</button>
					<input id="idforservicelocaleru" placeholder="ID У обсл RU" title="вводим ID У и по нажатию изменяем сразу ему язык обслуживания на русский" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="setservicelocaleru">🚀</button>
					<input id="setidformobpass" placeholder="ID У/П МП" title="введите ID У/П для генерации разового пароля он будет отображен в поле ввода ID и скопирован в  буфер обмена" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getmobpasscode" style="width: 25.23px;">🚀</button>
					<input id="HWstudID" placeholder="ID У для HW" title="вводим ID У, чтобы получить прямую ссылку при открытии с П сразу увидим список ДЗ У" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="showcaseHW" style="width: 25.23px;">💾</button>
					<input id="lookhash" placeholder="roomhash" title="вставляем хэш, копируем в буфер код, со стороны П в консоли выполняем, и в Network смотрим roomhash для какого ученика была создана комната" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gethash" style="width: 25.23px;">💾</button>
					<input id="enablerAP" placeholder="ID услуги(АП)" title="копируем услуги, где нужно активировать АП и сохраняем в буфер, в ЛКУ переходим по ссылке для активации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getenablerAP" style="width: 25.23px;">💾</button>
					<input id="skipAP" placeholder="ID ус(skipАП)" title="копируем услуги, где нужно пропустить АП и сохраняем в буфер, в ЛКУ переходим по ссылке для деактивации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getskipAP" style="width: 25.23px;">💾</button>
					<input id="testJira" placeholder="Jira Tasks Bar" title="введите слово или фразу для поиска по Jira при одном клике будет искать по багам, если ввести в поле номер задачи например VIM-7288 и дабл кликнуть на рокету будет поиск по номеру" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getJiraTasks" style="width: 25.23px;">🚀</button>
				</div>		
				
				<div style="margin: 5px; width: 550px" id="links_butd">	
					<button title="копирует в буфер обмена команду setstatus('classwork') для перезапуска уроков" id="restartlesson" style="width:105px">Redo MAT💾</button>
					<button title="копирует в буфер обмена команду для разовой актиивации кнопки New Student на платформе Adult английского языка" id="enableNS" style="width:105px">Enable NS💾</button>
					<button title="отображает актуальную версию iOS приложения" id="curVeriOS" style="float: right; margin-right: 10px;">iOS: 9.45</button>
			  	    <button title="Отображает актуальную версию Android приложения" id="curVerAndroid" style="float: right; margin-right: 5px;">Аndroid: 9.41.1</button>
				</div>		
			</span>
	</span>
</div>`;

var win_Jira =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="jira_1str">
                                <button title="скрывает меню" id="hideMej" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; width: 550px" id="jira_tasks_box">
                                <p id="issuetable" style="max-height:400px; margin-left:5px; overflow:auto"></p>
                        </div>
						
                </span>
        </span>
</div>`;

var win_Stat =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="statdata">
                                <button id="hideMeStat" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; width: 550px" id="statbox">
								 <span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">Начальная дата <input type="date" style="color:black; margin-left:20px;  width:125px;" name="StartData" id="dateFrom"></span>
								 <span style="color:bisque; margin-top:2px; float:right; margin-right:10px; height:28px;">Конечная дата <input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" name="EndData" id="dateTo"</span>
                        </div>
						
						<div>
							<input id="commenttosearch" placeholder="Слово или фраза для поиска среди закрытых чатов по заметкам" title="введите слово или фразу для поиска по заметкам в закрытом чате" autocomplete="off" type="text" style="text-align: center; width: 540px; color: black;margin-left:5px">
						</div>
												
						<div style="display:flex; justify-content:space-evenly; margin-top:5px;">
							 <button title="Получает статистику, считает среднюю оценку всех чатов за период, и отображает чаты без тематики" id="getstatfromperiod">Получить статистику</button>
							 <button title="Получает чаты с ксат <4 и выводит их в поле для просмотра и аппеляции" id="getlowcsat">Чаты с КСАТ<4</button>
							 <button title="Запускает поиск по комментарию в заметке, поиск точный и чувствительный к регистру и языку заметки" id="parsechat">Найти по комменту</button>
							 <button title="очищает значения поля" id="clearall">Очистить</button>
							 <button title="загружает полученные результаты как для Чаты с ксат <4 так и для чатов с комментариями в виде HTML файла" id="getfile">🔰</button>
					    </div>
						<div id="chatcoutnsinfo">
							 <span id="sumchatcounttouched" style="margin-left: 5px; color:bisque;"></span>
							 <br>
							 <span id="sumchatcountclosed" style="margin-left: 5px; color:bisque;"></span>
							 <p id="chatsinfoout" style="width:550px; color:bisque; margin-left:5px"></p>
							 <p id="lowCSATcount" style="width:550px; max-height:400px; color:bisque; margin-left:5px; overflow:auto"></p>
							 <p id="chatcommentsdata" style="width:550px;color:bisque; max-height:400px; margin-left:5px; overflow:auto"></p>
						</div>
                </span>
        </span>
</div>`;


var win_serviceinfo =  // описание элементов окна ссылок
    `<div style="display: flex; width: 320px;">
        <span style="width: 320px">
                <span style="cursor: -webkit-grab;">
                        <div style="width: 320px;  border-bottom:1px solid #556B2F;" id="servicehead">
                                <button title="скрывает меню" id="hideMeservice" style="width:50px; background: #228B22; margin:5px;">hide</button>
                                <button title="открывает СРМ пользователя при введенном айди в поле" id="GotoCRM" style="width:50px;">CRM</button>
                                <button title="отображает статус, 📧 - есть возможность создать исходящий чат, плюс по клику открыть самое последнее обращение через кота, 🚫 - нельзя открыть исходящее сообщение" id="ChatStatus" style="width:30px; display:none;"></button>
                                <button title="Левый клик обновить статус. Легенда: 💥 - задача на исход уже создана или есть также задача на тп1л , 📵 - нет задачи на исход и на тп, 🛠 - нет задачи на исход, но есть задача на тп" id="CrmStatus" style="width:30px; display:none;"></button>
								<span style="padding:7px; margin-left: 10px;height:28px; color:#ffff;  font-weight:700; border: 1px solid bisque;width: 82px; background-color:#1E90FF;display:none;" id="getcurrentstatus"></span>
                        </div>
								
						<div style="width: 320px; margin:5px; display:flex; justify-content:left;" id="input_field">
						<input id="idstudent" placeholder="ID У/П" title="Введите ID ученика для получения информации по услугам" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				       	<button title="запускает поиск по услугам" id="getidstudent" style="margin-left: 5px; width: 25.23px;">🚀</button>
						<button title="Открывает список со всеми задачами пользователя" id="crmactivetasks" style="margin-left: 5px; width: 25.23px;">📋</button>
						<button title="TRM 2.0 для информации по П" id="newtrm" style="margin-left: 5px; display: none; width: 25.23px;">🗿</button>
						<button title="Личная страница П, как видят ученики" id="personalteacherpage" style="margin-left: 5px; display: none; width: 25.23px;">🎭</button>
						<button title="Изменяет Язык обслуживания для профиля на Русский" id="changelocalelng" style="margin-left: 5px; width: 25.23px;">🌍</button>
						<button title="Открывает начислятор для проверки реального баланса ученика" id="checkbalance" style="margin-left: 5px; width: 25.23px;">💰</button>
						<button title="Информацию об ученике в СРМ1" id="getcrmoneinfo" style="margin-left: 5px; width: 25.23px;">🎭</button>
						<button title="Просмотр прошедших и предстоящих уроков" id="getpastandfuturelessons" style="margin-left: 5px; width: 25.23px;">📆</button>
				       	<button title="очищает все поля" id="clearservinfo" style="margin-left: 5px; width: 25.23px;">🧹</button>
				       	</div>
						
						<div style="width: 320px; margin:5px; display:flex; justify-content:left;" id="input_field2">
						<input readonly id="onetimepassout"  placeholder="One time pass" title="Вывод разового пароля после выполнения команды" autocomplete="off" type="text" style="float:left; text-align: center; width: 100px; color: black;" class="">
						<button title="Генерирует одноразовый код для входа в мобильное приложение и выводит его в спец поле" id="getonetimepass" style="margin-left: 5px; width: 25.23px;">📱</button>
						<button title="Открывает админку групповых уроков по айди ученика для просмотра информации по ученику" id="getkglinfokid" style="margin-left: 5px; width: 25.23px;">👩‍👧‍👦</button>
						<button title="Открывает админку редактирования пользователя/просмотра ролей" id="editadmbtn" style="margin-left: 5px; width: 25.23px;">✏</button>
						<button title="Открывает кота для просмотра истории чатов" id="catchathistory" style="margin-left: 5px; width: 25.23px;">🗄</button>
						<button title="Открывает меню для просмотра рассрочки" id="partialpaymentinfo" style="margin-left: 5px; width: 25.23px;">💸</button>
						<button title="Открывает меню для просмотра статусов уроков(удален,отменен,пропущен) и кем" id="getlessonstatus" style="margin-left: 5px; width: 25.23px;">🎓</button>
						</div>
					
						               
					   </span>
					   					   
                        <div style="width: 320px;" id="servicebody">
						<img id="useravatar" style="position: absolute; left: 1px; top: 120px; width: 55px; height: 60px; border-radius: 30px; display:none;">
                                <p id="servicetable" style="max-height:400px; overflow:auto; color:bisque; text-align:center"></p>
                        </div>
						
        </span>
</div>`;

var win_LessonStatus =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="lessomstatdata">
                                <button id="hideMeLessonStatus" style="width:50px; background: #228B22;">hide</button>
                        </div>
						
						 <div style="margin: 5px; width: 550px" id="databox">
								 <span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">Начальная дата <input type="date" style="color:black; margin-left:20px;  width:125px;" name="StartDataLS" id="dateFromLS"></span>
								 <span style="color:bisque; margin-top:2px; float:right; margin-right:10px; height:28px;">Конечная дата <input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" name="EndDataLS" id="dateToLS"</span>
                        </div>
						
						<div>
							<input id="idteacherforsearch" placeholder="Teacher ID" title="Введите ID учителя, чтобы проверить информацию по урокам" autocomplete="off" type="text" style="position:relative; left:33%; text-align: center; width: 100px; color: black;margin-left:5px"">
							<input id="idstudentforsearch" placeholder="Student ID" title="Введите ID ученика, чтобы отфильтровать поиск" autocomplete="off" type="text" style="position:relative; left:32%; text-align: center; width: 100px; color: black;margin-left:5px"">
						</div>
						
						<div style="position:relative; left:30%; margin-top:5px; margin-bottom:5px;">
							 <button title="Запускает процесс поиска информации по статусам урока (отменен, перенесен, удален)" id="startlookstatus">Получить инфо об уроках</button>
							 <button title="Очищает поле от полученной инфы" id="clearlessonstatus">Очистить</button>
					    </div>
						
				</span>	
				
						<div>
							<p id="statustable" style="margin-top:5px; max-height:400px; overflow:auto; display:none; color:bisque; text-align:center"></p>
						</div>
        </span>
</div>`;

var win_Timetable = //
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


let audio

function maxLengthCheck(object) // функция ограничения кол-ва символов в полях
{
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}


if (localStorage.getItem('winTopAF') == null) { // началоное положение главного окна (если не задано ранее)
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}

if (localStorage.getItem('winTopLinks') == null) { // началоное положение окна ссылок (если не задано ранее)
    localStorage.setItem('winTopLinks', '120');
    localStorage.setItem('winLeftLinks', '295');
}

if (localStorage.getItem('winTopLinksd') == null) { // началоное положение окна ссылок (если не задано ранее)
    localStorage.setItem('winTopLinksd', '120');
    localStorage.setItem('winLeftLinksd', '295');
}

if (localStorage.getItem('winTopJira') == null) { // началоное положение окна ссылок (если не задано ранее)
    localStorage.setItem('winTopJira', '120');
    localStorage.setItem('winLeftJira', '295');
}

if (localStorage.getItem('winTopStat') == null) { // началоное положение окна статистики (если не задано ранее)
    localStorage.setItem('winTopStat', '120');
    localStorage.setItem('winLeftStat', '295');
}

if (localStorage.getItem('winTopService') == null) { // началоное положение окна информации об  услугах
    localStorage.setItem('winTopService', '120');
    localStorage.setItem('winLeftService', '295');
}

if (localStorage.getItem('winTopLessonStatus') == null) { // началоное положение окна проверки статуса урока удален перенесен и кем
    localStorage.setItem('winTopLessonStatus', '120');
    localStorage.setItem('winLeftLessonStatus', '295');
}

if (localStorage.getItem('winTopTimetable') == null) { // началоное положение окна проверки прошедшего расписания и предстоящих уроков
    localStorage.setItem('winTopTimetable', '120');
    localStorage.setItem('winLeftTimetable', '295');
}


if (localStorage.getItem('scriptAdr') == null) {
    localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec');
}

let button2 = document.createElement('p');
button2.id = 'userIdScript';
button2.innerHTML = '<a style="color: black; width:40px; cursor: pointer;">Info</a>';
let button3 = document.createElement('p');
button3.id = 'nextStudentIdScript';
button3.innerHTML = '<a style="color: black; width:40px; cursor: pointer;">Info</a>';
let buttonserv = document.createElement('p');
buttonserv.id = 'nextStudentServiceInfo';
buttonserv.innerHTML = "⚜";
buttonserv.style.width = "20px";
buttonserv.style.cursor = "pointer";
let buttonservstud = document.createElement('p');
buttonservstud.id = 'nextStudentServiceInfo1';
buttonservstud.innerHTML = "⚜";
buttonservstud.style.width = "20px";
buttonservstud.style.cursor = "pointer";
let buttonservteach = document.createElement('p');
buttonservteach.id = 'nextTeacherServiceInfo1';
buttonservteach.innerHTML = "⚜";
buttonservteach.style.width = "20px";
buttonservteach.style.cursor = "pointer";
let button4 = document.createElement('p');
button4.id = 'nextTeacherIdScript';
button4.innerHTML = '<a style="color: black; cursor: pointer;">Info</a>';
let gettacherphoto = document.createElement('p');
gettacherphoto.id = 'getphototeacher';
gettacherphoto.innerHTML = '<a style="color: black; cursor: pointer;">Get photo</a>';
let teacherphoto = document.createElement('img');
teacherphoto.id = 'URLphoto';
teacherphoto.style.width = "150px";
teacherphoto.style.height = "180px";
let buttonhistory = document.createElement('p');
buttonhistory.id = 'lookForHistory';
buttonhistory.innerHTML = '<a style="color: black; cursor: pointer;">Chat History📋</a>';
let buttonnextstudentid = document.createElement('p');
buttonnextstudentid.id = 'nextStudentIdChatHistory';
buttonnextstudentid.innerHTML = '<a style="color: black; cursor: pointer;">Chat History📋(У)</a>';
let buttonnextteacherid = document.createElement('p');
buttonnextteacherid.id = 'nextTeacherIdChatHistory';
buttonnextteacherid.innerHTML = '<a style="color: black; cursor: pointer;">Chat History📋(П)</a>';
let buttonsetteacheridtouserfield = document.createElement('button');
buttonsetteacheridtouserfield.id = 'teacheridtofield';
buttonsetteacheridtouserfield.innerHTML = "👽 (ID П) П обратился ";
buttonsetteacheridtouserfield.style.width = "160px";
buttonsetteacheridtouserfield.style.cursor = "pointer";
buttonsetteacheridtouserfield.style.border = "1px solid black";
buttonsetteacheridtouserfield.style.borderRadius = "10px";
let buttonsetstudentidandservicetouserfield = document.createElement('button');
buttonsetstudentidandservicetouserfield.id = 'studentidtofield';
buttonsetstudentidandservicetouserfield.innerHTML = "👨‍🎓 (ID У) П обратился";
buttonsetstudentidandservicetouserfield.style.width = "150px";
buttonsetstudentidandservicetouserfield.style.cursor = "pointer";
buttonsetstudentidandservicetouserfield.style.marginLeft = "2px";
buttonsetstudentidandservicetouserfield.style.border = "1px solid black";
buttonsetstudentidandservicetouserfield.style.borderRadius = "10px";
let buttonsetteacheridfromstudent = document.createElement('button');
buttonsetteacheridfromstudent.id = 'teacheridfromstudent';
buttonsetteacheridfromstudent.innerHTML = "👽 (ID П) У обратился";
buttonsetteacheridfromstudent.style.width = "150px";
buttonsetteacheridfromstudent.style.cursor = "pointer";
buttonsetteacheridfromstudent.style.marginLeft = "2px";
buttonsetteacheridfromstudent.style.border = "1px solid black";
buttonsetteacheridfromstudent.style.borderRadius = "10px";




let template_flag = 0
let template_flag2 = 0
let word_text = ""
let template_text = ""
let flagggg = 0


buttonhistory.onclick = function () { //функция приска пр истории чатов в коте
    if (document.querySelector('#hide_or_display').textContent != "свернуть") {
        hide_or_display.click()
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('user_id').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
        }
        search.click()
    } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('user_id').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
        }
        search.click()
    }
}

buttonnextstudentid.onclick = function () {
    if (document.querySelector('#hide_or_display').textContent != "свернуть") {
        hide_or_display.click()
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
                document.getElementById('user_id').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        }
        search.click()
    } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
                document.getElementById('user_id').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        }
        search.click()
    }
}

buttonnextteacherid.onclick = function () {
    if (document.querySelector('#hide_or_display').textContent != "свернуть") {
        hide_or_display.click()
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
                document.getElementById('user_id').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        }
        search.click()
    } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
                document.getElementById('user_id').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        }
        search.click()
    }
}

button2.onclick = function () { //функция Info по нажатию на которую ID переносится в расширение омельченко и нажимает Info кнопку автоматически
    if (document.getElementById('btn_hide').style.display != 'none')
        btn_hide.click()
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
            document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
    }
    btn1_student.click()
}

buttonserv.onclick = function () {
    if (document.getElementById('AF_Service').style.display == 'none')
        document.getElementById('AF_Service').style.display = '';

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
            document.getElementById('idstudent').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText;
            getidstudent.click();
        }
    }
}

buttonservteach.onclick = function () {
    if (document.getElementById('AF_Service').style.display == 'none')
        document.getElementById('AF_Service').style.display = '';

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
            document.getElementById('idstudent').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText;
            getidstudent.click();
        }
    }
}

buttonservstud.onclick = function () {
    if (document.getElementById('AF_Service').style.display == 'none')
        document.getElementById('AF_Service').style.display = '';

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
            document.getElementById('idstudent').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
            getidstudent.click();
        }
    }
}

button3.onclick = function () {
    if (document.getElementById('btn_hide').style.display != 'none')
        btn_hide.click()
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
            document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
    }
    btn1_student.click()
}


button4.onclick = function () {
    if (document.getElementById('btn_hide').style.display != 'none')
        btn_hide.click()
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
            document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
    }
    btn1_student.click()
}

let getteacheridformaf;
gettacherphoto.onclick = function () {
    //	document.getElementById('getphototeacher').textContent="Скрыть фото";
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
            getteacheridformaf = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        console.log("getteacheridformaf = " + ' ' + getteacheridformaf);
    }

    document.getElementById('responseTextarea1').value = '{}'
    document.getElementById('responseTextarea2').value = "https://skyeng.ru/teachers/details/" + getteacheridformaf
    document.getElementById('responseTextarea3').value = 'imageurl'
    document.getElementById('sendResponse').click()

    function getImageUrl() {
        document.getElementById('responseTextarea1').value = '{}'
        document.getElementById('responseTextarea2').value = "https://skyeng.ru/teachers/details/" + getteacheridformaf
        document.getElementById('responseTextarea3').value = 'imageurl'

        var rezresp = document.getElementById('responseTextarea1').getAttribute('imageurl')
        var convertrezresp = rezresp.match(/(https:\/\/auth-avatars-skyeng.imgix.net.*?\d+.\S+).auto/)[1];
        document.getElementById('responseTextarea1').removeAttribute('imageurl');
        teacherphoto.src = convertrezresp;
    }
    setTimeout(getImageUrl, 1000);

    document.getElementById('getphototeacher').replaceWith(teacherphoto)

    document.querySelector('#URLphoto').onclick = function () {
        document.querySelector('#URLphoto').replaceWith(gettacherphoto)
    }
}


let addInfoUser = document.createElement('div')

let hashBut = document.createElement('div')
hashBut.id = "hashBut"
hashBut.innerHTML = "Хэш"
hashBut.style.marginRight = "15px";

let butServ = document.createElement('div')
butServ.id = "butServ"
butServ.innerHTML = "⚜"
butServ.style.marginRight = "15px";
butServ.style.cursor = "pointer";




let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";

maskBack.onclick = function () {
    name = document.getElementById('maskBack').getAttribute('name')
    email = document.getElementById('maskBack').getAttribute('email')
    phone = document.getElementById('maskBack').getAttribute('phone')
    mask = document.getElementById('maskBack').getAttribute('mask')
    if (document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText == name &&
        document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText == email &&
        document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText == phone) {
        document.getElementsByClassName('ant-modal-wrap')[mask].style.display = ''
        document.getElementsByClassName('ant-modal-mask')[mask].style.display = ''
        document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = '' // кнопки сверху
        document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = '' // кнопка заметок
        document.getElementById('maskBack').style.display = 'none'
    } else {
        document.getElementById('maskBack').innerHTML = "Открыт неверный чат"
        setTimeout(function () { document.getElementById('maskBack').innerHTML = "Вернуть" }, 3000)
    }
}



let maskBackHide = document.createElement('span')
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style.marginRight = "15px";
maskBackHide.style.marginLeft = "15px";
maskBackHide.style.display = "";

maskBackHide.onclick = function () {
    if (document.getElementsByClassName('ant-modal-content')[0].childNodes[1].firstChild.innerText == "Добавить комментарий к диалогу") {
        document.getElementsByClassName('ant-modal-wrap')[0].style.display = 'none'
        document.getElementsByClassName('ant-modal-mask')[0].style.display = 'none'
        document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
        document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
        document.getElementById('maskBack').style.display = ''

        document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
        document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
        document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
        document.getElementById('maskBack').setAttribute('mask', 0)
    } else
        for (i = 0; ; i++) {
            if (document.getElementsByClassName('ant-modal-wrap')[i] == undefined) {
                document.getElementsByClassName('ant-modal-wrap')[i - 1].style.display = 'none'
                document.getElementsByClassName('ant-modal-mask')[i - 1].style.display = 'none'
                document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
                document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
                document.getElementById('maskBack').style.display = ''


                document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
                document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
                document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
                document.getElementById('maskBack').setAttribute('mask', i - 1)
                break;
            }
        }
}




hashBut.onclick = function () {
    adr = document.location.href
    adr1 = document.location.pathname
    adr1 = adr1.split('/')
    adr1 = adr1[3]
    if ((adr1 == undefined || adr1 == "") || window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1) {
        if (window.location.href.indexOf('skyeng.autofaq.ai/logs') === -1) {
            document.getElementById('hashBut').innerHTML = "Ошибка"
            setTimeout(function () { document.getElementById('hashBut').innerHTML = "Хэш" }, 3000)
        } else {
            adr1 = document.getElementsByClassName('ant-spin-nested-loading')[1].firstChild.firstChild.firstChild.childNodes[1].textContent
            copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/' + adr1)
            document.getElementById('hashBut').innerHTML = "Скопировано"
            setTimeout(function () { document.getElementById('hashBut').innerHTML = "Хэш" }, 3000)
        }
    } else {
        if (localStorage.getItem('scriptAdr') == TS_addr)
            copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-18/' + adr1)
        else
            copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/' + adr1)
        document.getElementById('hashBut').innerHTML = "Скопировано"
        setTimeout(function () { document.getElementById('hashBut').innerHTML = "Хэш" }, 3000)
    }

}
let wintLinks = document.createElement('div'); // создание окна ссылок
document.body.append(wintLinks);
wintLinks.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLinks') + 'px; left: ' + localStorage.getItem('winLeftLinks') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLinks.style.display = 'none';
wintLinks.setAttribute('id', 'AF_Links');
wintLinks.innerHTML = win_Links;

let wintLinksd = document.createElement('div'); // создание окна доступов
document.body.append(wintLinksd);
wintLinksd.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLinksd') + 'px; left: ' + localStorage.getItem('winLeftLinksd') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLinksd.style.display = 'none';
wintLinksd.setAttribute('id', 'AF_Linksd');
wintLinksd.innerHTML = win_linksd;

let wintJira = document.createElement('div'); // создание окна ссылок
document.body.append(wintJira);
wintJira.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopJira') + 'px; left: ' + localStorage.getItem('winLeftJira') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintJira.style.display = 'none';
wintJira.setAttribute('id', 'AF_Jira');
wintJira.innerHTML = win_Jira;

let wintStat = document.createElement('div'); // создание окна ссылок
document.body.append(wintStat);
wintStat.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopStat') + 'px; left: ' + localStorage.getItem('winLeftStat') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintStat.style.display = 'none';
wintStat.setAttribute('id', 'AF_Stat');
wintStat.innerHTML = win_Stat;

let wintServices = document.createElement('div'); // создание окна ссылок
document.body.append(wintServices);
wintServices.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopService') + 'px; left: ' + localStorage.getItem('winLeftService') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintServices.style.display = 'none';
wintServices.setAttribute('id', 'AF_Service');
wintServices.innerHTML = win_serviceinfo;

let wintLessonStatus = document.createElement('div'); // создание окна ссылок
document.body.append(wintLessonStatus);
wintLessonStatus.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLessonStatus') + 'px; left: ' + localStorage.getItem('winLeftLessonStatus') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLessonStatus.style.display = 'none';
wintLessonStatus.setAttribute('id', 'AF_LessonStatus');
wintLessonStatus.innerHTML = win_LessonStatus;

let wintTimetable = document.createElement('div'); // создание окна ссылок
document.body.append(wintTimetable);
wintTimetable.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopTimetable') + 'px; left: ' + localStorage.getItem('winLeftTimetable') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintTimetable.style.display = 'none';
wintTimetable.setAttribute('id', 'AF_Timetable');
wintTimetable.innerHTML = win_Timetable;

var listener4 = function (e, a) { // сохранение позиции окна ссылок
    wintLinks.style.left = Number(e.clientX - myX4) + "px";
    wintLinks.style.top = Number(e.clientY - myY4) + "px";
    localStorage.setItem('winTopLinks', String(Number(e.clientY - myY4)));
    localStorage.setItem('winLeftLinks', String(Number(e.clientX - myX4)));
};

wintLinks.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX4 = a.layerX;
    window.myY4 = a.layerY;
    document.addEventListener('mousemove', listener4);
}
wintLinks.onmouseup = function () { document.removeEventListener('mousemove', listener4); }


var listener5 = function (e, a) { // сохранение позиции окна ссылок
    wintJira.style.left = Number(e.clientX - myX5) + "px";
    wintJira.style.top = Number(e.clientY - myY5) + "px";
    localStorage.setItem('winTopJira', String(Number(e.clientY - myY5)));
    localStorage.setItem('winLeftJira', String(Number(e.clientX - myX5)));
};

wintJira.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX5 = a.layerX;
    window.myY5 = a.layerY;
    document.addEventListener('mousemove', listener5);
}
wintJira.onmouseup = function () { document.removeEventListener('mousemove', listener5); }

var listener6 = function (e, a) { // сохранение позиции окна ссылок
    wintStat.style.left = Number(e.clientX - myX6) + "px";
    wintStat.style.top = Number(e.clientY - myY6) + "px";
    localStorage.setItem('winTopStat', String(Number(e.clientY - myY6)));
    localStorage.setItem('winLeftStat', String(Number(e.clientX - myX6)));
};

wintStat.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX6 = a.layerX;
    window.myY6 = a.layerY;
    document.addEventListener('mousemove', listener6);
}
wintStat.onmouseup = function () { document.removeEventListener('mousemove', listener6); }

var listener7 = function (e, a) { // сохранение позиции окна ссылок
    wintServices.style.left = Number(e.clientX - myX7) + "px";
    wintServices.style.top = Number(e.clientY - myY7) + "px";
    localStorage.setItem('winTopService', String(Number(e.clientY - myY7)));
    localStorage.setItem('winLeftService', String(Number(e.clientX - myX7)));
};

wintServices.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX7 = a.layerX;
    window.myY7 = a.layerY;
    document.addEventListener('mousemove', listener7);
}
wintServices.onmouseup = function () { document.removeEventListener('mousemove', listener7); }

var listener8 = function (e, a) { // сохранение позиции окна ссылок
    wintLessonStatus.style.left = Number(e.clientX - myX8) + "px";
    wintLessonStatus.style.top = Number(e.clientY - myY8) + "px";
    localStorage.setItem('winTopLessonStatus', String(Number(e.clientY - myY8)));
    localStorage.setItem('winLeftLessonStatus', String(Number(e.clientX - myX8)));
};

wintLessonStatus.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX8 = a.layerX;
    window.myY8 = a.layerY;
    document.addEventListener('mousemove', listener8);
}
wintLessonStatus.onmouseup = function () { document.removeEventListener('mousemove', listener8); }

var listener9 = function (e, a) { // сохранение позиции окна доступов
    wintLinksd.style.left = Number(e.clientX - myX9) + "px";
    wintLinksd.style.top = Number(e.clientY - myY9) + "px";
    localStorage.setItem('winTopLinksd', String(Number(e.clientY - myY9)));
    localStorage.setItem('winLeftLinksd', String(Number(e.clientX - myX9)));
};

wintLinksd.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX9 = a.layerX;
    window.myY9 = a.layerY;
    document.addEventListener('mousemove', listener9);
}
wintLinksd.onmouseup = function () { document.removeEventListener('mousemove', listener9); }

var listener10 = function (e, a) { // сохранение позиции окна доступов
    wintTimetable.style.left = Number(e.clientX - myX10) + "px";
    wintTimetable.style.top = Number(e.clientY - myY10) + "px";
    localStorage.setItem('winTopTimetable', String(Number(e.clientY - myY10)));
    localStorage.setItem('winLeftTimetable', String(Number(e.clientX - myX10)));
};

wintTimetable.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
    window.myX10 = a.layerX;
    window.myY10 = a.layerY;
    document.addEventListener('mousemove', listener10);
}
wintTimetable.onmouseup = function () { document.removeEventListener('mousemove', listener10); }

document.getElementById('links_1str').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Links').style.display = 'none';
}
document.getElementById('links_but').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Links').style.display = 'none';
}
document.getElementById('links_butd').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Links').style.display = 'none';
}
document.getElementById('linksd_1str').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Linksd').style.display = 'none';
}
document.getElementById('linksd_kib_box').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Linksd').style.display = 'none';
}
document.getElementById('jira_1str').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Jira').style.display = 'none';
}
document.getElementById('HeadTimetable').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Timetable').style.display = 'none';
    document.getElementById('timetabledata').innerHTML = "";
}
document.getElementById('timetabledata').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Timetable').style.display = 'none';
    document.getElementById('timetabledata').innerHTML = "";
}
document.getElementById('issuetable').ondblclick = function () { // скрытие окна ссылок по двойному клику
    document.getElementById('AF_Jira').style.display = 'none';
}
document.getElementById('statdata').ondblclick = function () { // скрытие окна статистики по двойному клику
    document.getElementById('AF_Stat').style.display = 'none';
}
document.getElementById('chatcoutnsinfo').ondblclick = function () { // скрытие окна статистики по двойному клику
    document.getElementById('AF_Stat').style.display = 'none';
}
document.getElementById('lessomstatdata').ondblclick = function () { // скрытие окна статистики по двойному клику
    document.getElementById('AF_LessonStatus').style.display = 'none';
}
document.getElementById('databox').ondblclick = function () { // скрытие окна статистики по двойному клику
    document.getElementById('AF_LessonStatus').style.display = 'none';
}

let wintAF = document.createElement('div');
document.body.append(wintAF);
wintAF.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintAF.setAttribute('id', 'AF_helper');
wintAF.innerHTML = win_AFhelper;
var chatsArray = []
var TS_addr = 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec'
var KC_addr = 'https://script.google.com/macros/s/AKfycbzNJgvbbgMIRzEuIMv2yR2VRE5lT7xrhouGVod0/exec'
var TP_addr = 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec'
var TP_addr2 = 'https://script.google.com/macros/s/AKfycbxnGXdfgYTfmBiviW_sxBa2Q1YhhiutNv5FEk9ZVw/exec'
var flagLangBut = 0
function move_again_AF() {

    const copyToClipboard = str => {           // инициализация функции копирования в буфер обмена
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    if (window.location.href.indexOf('autofaq') === -1) {
        document.getElementById('AF_helper').style.display = 'none';
    }


    var listener2 = function (e, a) {
        wintAF.style.left = Number(e.clientX - myX2) + "px";
        wintAF.style.top = Number(e.clientY - myY2) + "px";
        localStorage.setItem('winTopAF', String(Number(e.clientY - myY2)));
        localStorage.setItem('winLeftAF', String(Number(e.clientX - myX2)));
    };

    wintAF.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
        window.myX2 = a.layerX;
        window.myY2 = a.layerY;
        document.addEventListener('mousemove', listener2);
    }
    wintAF.onmouseup = function () { document.removeEventListener('mousemove', listener2); }

    document.getElementById('sound_test').onclick = function () { // кнопка тест звука
        audio.play()
    }

    setInterval(clock_on_javascript_1, 1000);
    setInterval(clock_on_javascript_2, 1000);

    function clock_on_javascript_1() {
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

    function clock_on_javascript_2() {
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




    let flagcheckbox = 0;
    var cboxstatus = document.getElementById('removeinfowindow');
    cboxstatus.addEventListener('click', function () {

        if (!cboxstatus.checked) {
            document.getElementById('main_easy_win').style.display = "";
            flagcheckbox = 0;
            localStorage.setItem('disableomelchenkowindow', flagcheckbox)
        } else {   // поставить checked, если он не установлен 
            document.getElementById('main_easy_win').style.display = "none";
            flagcheckbox = 1;
            localStorage.setItem('disableomelchenkowindow', flagcheckbox)
        }
    })

    if (localStorage.getItem('disableomelchenkowindow') == 1) {
        document.getElementById('main_easy_win').style.display = "none";
        cboxstatus.checked = true;
    } else {
        cboxstatus.checked = false;
    }



    // обработка нажатий на странице доступов
    document.getElementById('kibsvidbut').onclick = function () { // kibana Tech Summary - ID
        if (kibsvid.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1w,to:now))&_a=(columns:!(userId,event,appSessionId,details.summary.userAgent,details.summary.iceDisconnectedCount,details.summary.mediaStates.video.down.count,details.summary.mediaStates.audio.down.count,details.summary.publishedSuccessfully,details.summary.localStreamReady,details.summary.remoteStreamReady,details.summary.video.muteCount,details.summary.slowLinkCount.publisher.toServer.count,details.summary.slowLinkCount.subscriber.fromServer.count),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'6e2a3760-704b-11ea-9172-7db0f10793b8',key:event,negate:!f,params:(query:tech-summary),type:phrase,value:tech-summary),query:(match:(event:(query:tech-summary,type:phrase))))),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'userId:" + kibsvid.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kibsvid.value = "";
    }

    document.getElementById('kibsvheshbut').onclick = function () { // kibana Tech Summary - хэш
        if (kibsvhesh.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-2w,to:now))&_a=(columns:!(userId,event,roomId,appSessionId,detailsJson,details.summary.mediaStates.video.down.count,details.summary.publishedSuccessfully,details.summary.mediaStates.audio.down.count,details.summary.iceDisconnectedCount,details.summary.localStreamReady,details.summary.remoteStreamReady),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'6e2a3760-704b-11ea-9172-7db0f10793b8',key:event,negate:!f,params:(query:tech-summary),type:phrase,value:tech-summary),query:(match:(event:(query:tech-summary,type:phrase))))),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId " + kibsvhesh.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kibsvhesh.value = "";
    }

    document.getElementById('kibservheshbut').onclick = function () { // kibana найти по хешу комнаты сервер
        if (kibservhesh.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/2d464cf0-af5e-11ea-b33d-d1adb43c9089?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1w,to:now))&_a=(columns:!(appSessionId,userId,event),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'webRTCStateUp%20and%20appSessionId%20" + kibservhesh.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kibservhesh.value = "";
    }

    document.getElementById('kibslowbut').onclick = function () { // kibana Слоулинки, дисконнекты, отвалы
        if (kibslow.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(columns:!(userId,appSessionId,details.summary.slowLinkCount.publisher.toServer.count,details.summary.slowLinkCount.publisher.toServer.lostSum,details.summary.slowLinkCount.subscriber.fromServer.lostSum,details.summary.slowLinkCount.subscriber.fromServer.count,details.summary.iceDisconnectedCount,details.summary.mediaStates.audio.down.count,details.summary.mediaStates.video.down.count),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId: " + kibslow.value + " and (details.summary.slowLinkCount.subscriber.fromServer.count > 0 or details.summary.slowLinkCount.publisher.toServer.count > 0  or details.summary.slowLinkCount.publisher.toServer.lostSum > 0 or details.summary.slowLinkCount.subscriber.fromServer.lostSum > 0 or details.summary.iceDisconnectedCount > 0 or details.summary.mediaStates.audio.down.count > 0 or details.summary.mediaStates.video.down.count > 0)'),sort:!(!('@timestamp',asc)))");
        };
        kibslow.value = "";
    }

    document.getElementById('kibheshvidbut').onclick = function () { // kibana видео-аудио не передавалось
        if (kibheshvid.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/243e0230-a0c0-11ea-b33d-d1adb43c9089?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(columns:!(userId,appSessionId,event,details.source,description,details.pluginEvent.type,details.pluginEvent.name,contextId,janusClientId,details.pluginEvent.message),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId: " + kibheshvid.value + " and (description : \"mediaState video down\" or description : \"mediaState audio down\")\'),sort:!(!(\'@timestamp\',asc)))");
        };
        kibheshvid.value = "";
    }

    document.getElementById('kibstiheshbut').onclick = function () { // kibana Стрим локально и до платформы
        if (kibstihesh.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(columns:!(userId,appSessionId,details.summary.localStreamReady,details.summary.publishedSuccessfully),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId: " + kibstihesh.value + " and (details.summary.publishedSuccessfully : false or  details.summary.localStreamReady: false)'),sort:!(!('@timestamp',asc)))");
        };
        kibstihesh.value = "";
    }

    document.getElementById('kiblkbut').onclick = function () { // kibana вход в ЛК	
        if (kiblk.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/09bfbec0-a67f-11ea-b33d-d1adb43c9089?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1w,to:now))&_a=(columns:!(nginx.access.user_name,nginx.access.geoip.ip,event.module,event.dataset,nginx.access.geoip.city_name,nginx.access.user_agent.name,nginx.access.geoip.timezone,nginx.access.geoip.country_name,nginx.access.referrer),filters:!(),index:e3117a40-64f5-11ea-b4fe-d19755c7dd55,interval:auto,query:(language:lucene,query:'nginx.access.user_name:" + kiblk.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kiblk.value = "";
    }
    // действия конопок редаш в окне доступов
    document.getElementById('mobappidbut').onclick = function () { // Редаш логи действий мобилки
        if (mobappid.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/13000?p_end_at=d_now&p_id=" + mobappid.value + "&p_start_at=d_yesterday");
        };
        mobappid.value = "";
    }

    document.getElementById('rpayidbut').onclick = function () { // Редаш логи платежей
        if (rpayid.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/22630?p_ID%20%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%B0=" + rpayid.value);
        };
        rpayid.value = "";
    }

    document.getElementById('grafanalnk').addEventListener('click', function () {
        window.open("https://grafana.skyeng.link/d/NZkMHsVMk/video-servers-health-check?orgId=1&refresh=1m")    // копируем в буфер ссылку на Grafana
    })
    document.getElementById('timetable').addEventListener('click', function () {
        window.open("https://timetable.skyeng.ru/")    // копируем в буфер ссылку на Timetable
    })
    document.getElementById('talksadm').addEventListener('click', function () {
        window.open("https://vimbox.skyeng.ru/talks/admin/statistics")    // открываем ссылку в новой вкладке на  Talks админку
    })
    document.getElementById('billingadm').addEventListener('click', function () {
        window.open("https://billing-api.skyeng.ru/operations")    // открываем ссылку в новой вкладке на  Начислятор
    })
    document.getElementById('compens').addEventListener('click', function () {
        window.open("https://billing-marketing.skyeng.ru/accrual-operations/create")    // открываем ссылку в новой вкладке на  Компенсации
    })
    document.getElementById('useradm').addEventListener('click', function () {
        window.open("https://id.skyeng.ru/admin/users")    // открываем ссылку в новой вкладке на  Пользовательская админка
    })

    document.getElementById('GotoCRM').onclick = function () {
        window.open("https://crm2.skyeng.ru/persons/" + document.getElementById('idstudent').value)    // открываем ссылку в новой вкладке на  Пользовательская админка
    }

    document.getElementById('suggestions').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/viewform?fbzx=4442277476040311569")    // открываем ссылку в новой вкладке на  Предложения/пожелания
    })
    document.getElementById('transactions').addEventListener('click', function () {
        window.open("https://accounting.skyeng.ru/userpayment/search/transaction")    // открываем ссылку в новой вкладке на  Поиск транзакций
    })
    document.getElementById('CMS').addEventListener('click', function () {
        window.open("https://cms-vimbox.skyeng.ru/vim")    // открываем ссылку в новой вкладке на CMS
    })
    document.getElementById('badmarks').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSc5-h7kFpda-XmAVnPLeuCTzbbcI5Ds9cgP3FYIyPSE4Ufo2Q/viewform")    // открываем ссылку в новой вкладке на Необоснованные оценки ТП АФ
    })
    document.getElementById('apelation').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdgsb6pte1H1dz15Eb5NjDe0gj3kEnh0hTe6Cgy8d81mT7NUA/viewform")    // открываем ссылку в новой вкладке на Форма для апелляций чатов ТП АФ
    })
    document.getElementById('groupfeatures').addEventListener('click', function () {
        window.open("https://vimbox.skyeng.ru/circles/group/editor ")    // открываем редактор фич группя для активации видеосвязи на ГУ
    })

    document.getElementById('confbugs').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=96042583")    // открываем ссылку список багов в confluence
    })
    document.getElementById('confbugsm').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=114996322")    // открываем ссылку список мобильных багов в confluence
    })
    document.getElementById('restartlesson').addEventListener('click', function () {
        copyToClipboard("setStatus('classwork')")   // копируем ссылку в буфер для перезапуска урока математики
        document.getElementById('restartlesson').innerHTML = "Copied!";
        setTimeout(function () { document.getElementById('restartlesson').innerHTML = "Redo MAT💾" }, 2000);
    })

    document.getElementById('enableNS').addEventListener('click', function () {
        copyToClipboard("https://vimbox.skyeng.ru/start?enableNewStudent")   // копируем ссылку в буфер для перезапуска урока математики
        document.getElementById('enableNS').innerHTML = "Copied!";
        setTimeout(function () { document.getElementById('enableNS').innerHTML = "Enable NS💾" }, 2000);
    })
    document.getElementById('browserstack').addEventListener('click', function () {
        window.open("https://www.browserstack.com/users/sign_in")    // открываем ссылку в новой вкладке на Browserstak
    })
    document.getElementById('trmnew').addEventListener('click', function () {
        window.open("https://trm.skyeng.ru/")    // открываем ссылку в новой вкладке на TRM 2.0
    })
    document.getElementById('testroom').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=82244638")    // открываем ссылку в админку тестовых комнат
    })

    document.getElementById('certificates').addEventListener('click', function () {
        window.open("https://billing-marketing.skyeng.ru/certificate/certSearch")    // открываем ссылку в новой вкладке на Подарочные сертификаты
    })

    document.getElementById('promocodes').addEventListener('click', function () {
        window.open("https://billing-marketing.skyeng.ru/promocode/list")    // открываем ссылку в новой вкладке на Промокоды
    })

    document.getElementById('cmswordssearch').addEventListener('click', function () {
        window.open("https://dictionary.skyeng.ru/cms/word/333")    // открываем ссылку для просмотра CMSки слова мининг переводы и тп
    })

    document.getElementById('TCQnew').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfZbw1GkZzerHWQGGbYslV6AsGTGxEKhNZFC1LV-TySHca9Fw/viewform")    // открываем ссылку в новой вкладке на форму для внесения вопросов от П TC
    })

    document.getElementById('TCQtable').addEventListener('click', function () {
        window.open("https://docs.google.com/spreadsheets/d/1PVE_GnLoWESTzzMxb2Klwntesqxv1l3Ir8kaLezfiEM/edit#gid=0")    // открываем ссылку в новой вкладке на таблицу вопросов-вопросов от П TC
    })

    document.getElementById('userfeatures').addEventListener('click', function () {
        window.open("https://vimbox.skyeng.ru/circles/editor")    // открываем ссылку в новой вкладке на проверку фичей пользователя
    })
    document.getElementById('benchmark').onclick = function () {                  //поиск по имени процессора на сайте cpubenchmark
        let lnkgr = 'https://www.cpubenchmark.net/cpu_lookup.php?cpu=';
        if (cpuname.value == "")
            console.log('Введите CPU в поле')
        else {
            window.open(lnkgr + cpuname.value);
        };
        cpuname.value = "";
    }

    var abortTimeOut = ''								// перменная для отмены будильника
    if (localStorage.getItem('chronostamp') == null) {
        document.getElementById('reminderstatus').textContent = "🔕";
    }
    document.getElementById('setreminder').onclick = function () {  // выставляем будильник
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
        alert("Будильник установлен на" + setchas.value + ":" + setminuta.value + ":" + "00");
        abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp'));
    }
    function refreshTimerReminder() {
        if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
            document.getElementById('reminderstatus').textContent = "🔔";
            setchas.value = localStorage.getItem('setchas');
            setminuta.value = localStorage.getItem('setminuta');
            var timearr = new Date()
            var chronostamp2 = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
            localStorage.setItem('chronostamp2', chronostamp2);
            abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp2'));
        } else {
            clearTimeout(abortTimeOut);
            document.getElementById('reminderstatus').textContent = "🔕";
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
            document.getElementById('reminderstatus').textContent = "🔕";
        }
    }

    refreshTimerReminder();

    function setRemindAf() {
        fetch("https://skyeng.autofaq.ai/api/reason8/operator/status", {
            "headers": {
                "accept": "*/*",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"command\":\"DO_SET_OPERATOR_STATUS\",\"status\":\"Busy\",\"source\":\"Operator\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        alert("Время ставить занят! :D");
        document.getElementById('reminderstatus').textContent = "🔕";
        localStorage.removeItem('chronostamp');
        setchas.value = "";
        setminuta.value = "";
    }

    document.getElementById('groupadm').onclick = function () {                     //переход в админку редактора группы
        let lnngr = 'https://cabinet.skyeng.ru/admin/group/edit?id=';
        if (grid.value == "")
            console.log('Введите id в поле')
        else {
            window.open(lnngr + grid.value);
        };
        grid.value = "";
    }

    document.getElementById('cmsid').onclick = function () {                     // переход на степID в CMSке
        let lnkstep = 'https://content.vimbox.skyeng.ru/cms/stepStore/update/stepId/';
        if (cmsstepid.value == "")
            console.log('Введите STEPUUID в поле')
        else {
            window.open(lnkstep + cmsstepid.value);
        };
        cmsstepid.value = "";
    }

    document.getElementById('checkbalance').onclick = function () {
        window.open("https://billing-api.skyeng.ru/operations/user/" + document.getElementById('idstudent').value + "/info")
    }

    document.getElementById('getcrmoneinfo').onclick = function () {
        window.open("https://cabinet.skyeng.ru/orderV2/student/id/" + document.getElementById('idstudent').value)
    }

    document.getElementById('getkglinfokid').onclick = function () {
        window.open("https://grouplessons-api.skyeng.ru/admin/student/view/" + document.getElementById('idstudent').value)
    }

    document.getElementById('partialpaymentinfo').onclick = function () {
        window.open("https://accounting.skyeng.ru/credit/list?studentId=" + document.getElementById('idstudent').value)
    }

    document.getElementById('editadmbtn').onclick = function () {
        let stuid = document.getElementById('idstudent').value;
        stuid = stuid.trim();
        window.open("https://id.skyeng.ru/admin/users/" + stuid + "/update")
    }

    document.getElementById('getonetimepass').onclick = function () {
        if (document.getElementById('idstudent').value == "")
            console.log('Введите id в поле')
        else {
            document.getElementById('getonetimepass').innerHTML = "✅";
            setTimeout(function () { document.getElementById('getonetimepass').innerHTML = "📱" }, 2000);

            document.getElementById('responseTextarea1').value = `{
			"headers": {
				"content-type": "application/x-www-form-urlencoded",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
			},
			"body": "user_id_or_identity_for_one_time_password_form%5BuserIdOrIdentity%5D= + ${document.getElementById('idstudent').value} + &user_id_or_identity_for_one_time_password_form%5Bgenerate%5D=&user_id_or_identity_for_one_time_password_form%5B_token%5D=null",
				"method": "POST",
				"mode": "cors",
				"credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/one-time-password"
            document.getElementById('responseTextarea3').value = 'getmobpwdnew'
            document.getElementById('sendResponse').click()

            function getPassInfo1() {
                document.getElementById('responseTextarea1').value = '{}'
                document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/one-time-password"
                document.getElementById('responseTextarea3').value = ''

                var resprez11 = document.getElementById('responseTextarea1').getAttribute('getmobpwdnew')
                document.getElementById('responseTextarea1').removeAttribute('getmobpwdnew');
                var convertres11 = resprez11.match(/div class="alert alert-success" role="alert".*?([0-9]{5}).*/);
                onetimepassout.value = convertres11[1];
            }
            setTimeout(getPassInfo1, 1000);
        };
        setTimeout(function () { document.getElementById('onetimepassout').value = "" }, 15000);

    }

    let commonidentity;
    let emailidentity;
    let phoneidentity;
    async function checkemailandphoneidentity() {
        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "cross-site",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrer": "https://skyeng.autofaq.ai/",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/users/" + document.getElementById('idstudent').value + "/update"
        document.getElementById('responseTextarea3').value = 'responseupdate'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/users/" + document.getElementById('idstudent').value + "/update"
            document.getElementById('responseTextarea3').value = 'responseupdate'
            document.getElementById('sendResponse').click()

            commonidentity = document.getElementById('responseTextarea1').getAttribute('responseupdate');
            commonidentity = await commonidentity;

            if (commonidentity.match(/isPhoneUsedAsIdentity.*(checked)/) != null && commonidentity.match(/isEmailUsedAsIdentity.*(checked)/) != null) {
                emailidentity = "📧✔";
                phoneidentity = "☎✔";
            } else if (commonidentity.match(/isPhoneUsedAsIdentity.*(checked)/) != null && commonidentity.match(/isEmailUsedAsIdentity.*(checked)/) == null) {
                emailidentity = "📧✖";
                phoneidentity = "☎✔";
            } else if (commonidentity.match(/isPhoneUsedAsIdentity.*(checked)/) == null && commonidentity.match(/isEmailUsedAsIdentity.*(checked)/) != null) {
                emailidentity = "📧✔";
                phoneidentity = "☎✖";
            } else if (commonidentity.match(/isPhoneUsedAsIdentity.*(checked)/) == null && commonidentity.match(/isEmailUsedAsIdentity.*(checked)/) == null) {
                emailidentity = "📧✖";
                phoneidentity = "☎✖";
            }

            document.getElementById('responseTextarea1').removeAttribute('responseupdate')

        }, 550)

    }

    let unhidephone;

    async function getunhidephone() {

        document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=phone&source=persons.profile"
        document.getElementById('responseTextarea3').value = 'phoneishere'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=phone&source=persons.profile"
            document.getElementById('responseTextarea3').value = 'phoneishere'
            document.getElementById('sendResponse').click()

            unhidephone = document.getElementById('responseTextarea1').getAttribute('phoneishere');
            unhidephone = await unhidephone;
            unhidephone = JSON.parse(unhidephone);
            unhidephone = unhidephone.data.value;
            document.getElementById('responseTextarea1').removeAttribute('phoneishere')

        }, 600)

    }

    let unhidenemail;
    async function getunhideemail() {
        document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=email&source=persons.profile"
        document.getElementById('responseTextarea3').value = 'emailishere'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=email&source=persons.profile"
            document.getElementById('responseTextarea3').value = 'emailishere'
            document.getElementById('sendResponse').click()

            unhidenemail = document.getElementById('responseTextarea1').getAttribute('emailishere');
            unhidenemail = await unhidenemail;
            unhidenemail = JSON.parse(unhidenemail);
            unhidenemail = unhidenemail.data.value;
            document.getElementById('responseTextarea1').removeAttribute('emailishere')

        }, 600)

    }

    let servicearray = "";
    async function getservicearr() {

        document.getElementById('responseTextarea1').value = `{
            "headers": {
                "accept": "application/json, text/plain, */*",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
              },
              "referrer": "https://crm2.skyeng.ru/",
              "referrerPolicy": "strict-origin-when-cross-origin",
              "body": null,
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
       }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/products/configurations/"
        document.getElementById('responseTextarea3').value = 'arrayofservices'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/products/configurations/"
            document.getElementById('responseTextarea3').value = 'arrayofservices'
            document.getElementById('sendResponse').click()

            servicearray = document.getElementById('responseTextarea1').getAttribute('arrayofservices');
            servicearray = await servicearray;
            servicearray = JSON.parse(servicearray);
            document.getElementById('responseTextarea1').removeAttribute('arrayofservices')

        }, 1000)

    }

    document.getElementById('getlessonpast').onclick = function () {
        document.getElementById('timetabledata').innerHTML = "";
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();
        let pastlessondata = "";
        let pastlessoninfo = "";
        document.getElementById('responseTextarea1').value = `{
            "headers": {
                "accept": "application/json, text/plain, */*",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
              },
              "referrer": "https://crm2.skyeng.ru/",
              "referrerPolicy": "strict-origin-when-cross-origin",
              "body": null,
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
       }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/lessons-history/?page=0";
        document.getElementById('responseTextarea3').value = 'pastlessoninfodata'
        document.getElementById('sendResponse').click()

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/lessons-history/?page=0";
            document.getElementById('responseTextarea3').value = 'pastlessoninfodata'
            document.getElementById('sendResponse').click()

            pastlessoninfo = document.getElementById('responseTextarea1').getAttribute('pastlessoninfodata');
            pastlessoninfo = JSON.parse(pastlessoninfo);
            document.getElementById('responseTextarea1').removeAttribute('pastlessoninfodata')
            if (pastlessoninfo.data == "") {
                document.getElementById('timetabledata').innerHTML = "Еще не было уроков";
            } else {
                for (let i = 0; i < pastlessoninfo.data.length; i++) {
                    let d = new Date(pastlessoninfo.data[i].startedAt)
                    let minutka;
                    let denek;
                    let mesacok;
                    let chasok;
                    if (d.getHours() < 10) {
                        chasok = "0" + (d.getUTCHours() + 3);
                    } else {
                        chasok = (d.getUTCHours() + 3);
                    }
                    if (d.getMinutes() < 10) {
                        minutka = "0" + d.getMinutes();
                    } else {
                        minutka = d.getMinutes();
                    }
                    if (d.getDate() < 10) {
                        denek = "0" + d.getDate();
                    } else {
                        denek = d.getDate();
                    }
                    if (d.getMonth() + 1 < 10) {
                        mesacok = "0" + (d.getMonth() + 1);
                    } else {
                        mesacok = d.getMonth() + 1;
                    }
                    if (pastlessoninfo.data[i].status == "missed_by_student") {
                        pastlessoninfo.data[i].status = "Пропущен учеником";
                    } else if (pastlessoninfo.data[i].status == "canceled_by_student") {
                        pastlessoninfo.data[i].status = "Отменен учеником";
                    } else if (pastlessoninfo.data[i].status == "success") {
                        pastlessoninfo.data[i].status = "Прошел";
                    } else if (pastlessoninfo.data[i].status == "moved_by_student") {
                        pastlessoninfo.data[i].status = "Перенесен учеником";
                    } else if (pastlessoninfo.data[i].status == "canceled_by_teacher") {
                        pastlessoninfo.data[i].status = "Отменен учителем";
                    } else if (pastlessoninfo.data[i].status == "student_refused_to_study") {
                        pastlessoninfo.data[i].status = "Отказался от обучения"
                    } else if (pastlessoninfo.data[i].status == "interrupted") {
                        pastlessoninfo.data[i].status = "Прерван"
                    } else if (pastlessoninfo.data[i].status == "did_not_get_through_student") {
                        pastlessoninfo.data[i].status = "Не смогли связаться с У"
                    }

                    if (pastlessoninfo.data[i].lessonType == "regular") {
                        pastlessoninfo.data[i].lessonType = "Регулярный";
                    } else if (pastlessoninfo.data[i].lessonType == "single") {
                        pastlessoninfo.data[i].lessonType = "Одиночный";
                    } else if (pastlessoninfo.data[i].lessonType == "trial") {
                        pastlessoninfo.data[i].lessonType = "Пробный";
                    }

                    for (let j = 0; j < servicearray.data.length; j++) {
                        if (servicearray.data[j].serviceTypeKey == pastlessoninfo.data[i].educationService.serviceTypeKey)
                            pastlessoninfo.data[i].educationService.serviceTypeKey = servicearray.data[j].title;
                    }

                    if (pastlessoninfo.data[i].educationService.serviceTypeKey == null) {
                        pastlessoninfo.data[i].educationService.serviceTypeKey = "Услуга была в CRM1, см позднее обозначение!"
                    }

                    if (pastlessoninfo.data[i].teacher != null) {
                        pastlessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka +
                            '<span style="color:#00FF7F; font-weight:900;"> Статус: </span>' + pastlessoninfo.data[i].status + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + pastlessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + pastlessoninfo.data[i].educationService.id + " " + pastlessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<span style="color:#32CD32; font-weight:900;">Преподаватель</span>' + " " + pastlessoninfo.data[i].teacher.general.id + " " + pastlessoninfo.data[i].teacher.general.name + " " + pastlessoninfo.data[i].teacher.general.surname + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    } else {
                        pastlessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka +
                            '<span style="color:#00FF7F; font-weight:900;"> Статус: </span>' + pastlessoninfo.data[i].status + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + pastlessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + pastlessoninfo.data[i].educationService.id + " " + pastlessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    }

                }

                document.getElementById('timetabledata').innerHTML = pastlessondata;
                pastlessondata = "";
            }
        }, 1000)


    }

    document.getElementById('getlessonfuture').onclick = function () {

        document.getElementById('timetabledata').innerHTML = "";
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();
        let futurelessondata = "";
        let futurelessoninfo = "";
        document.getElementById('responseTextarea1').value = `{
            "headers": {
                "accept": "application/json, text/plain, */*",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
              },
              "referrer": "https://crm2.skyeng.ru/",
              "referrerPolicy": "strict-origin-when-cross-origin",
              "body": null,
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
       }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/future-lessons/"
        document.getElementById('responseTextarea3').value = 'futurelessoninfodata'
        document.getElementById('sendResponse').click()

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/future-lessons/"
            document.getElementById('responseTextarea3').value = 'futurelessoninfodata'
            document.getElementById('sendResponse').click()

            futurelessoninfo = document.getElementById('responseTextarea1').getAttribute('futurelessoninfodata');
            futurelessoninfo = JSON.parse(futurelessoninfo);
            document.getElementById('responseTextarea1').removeAttribute('futurelessoninfodata')
            if (futurelessoninfo.data == "") {
                document.getElementById('timetabledata').innerHTML = "Уроки не запланированы";
            } else {
                for (let i = 0; i < futurelessoninfo.data.length; i++) {
                    let d = new Date(futurelessoninfo.data[i].startedAt)
                    let minutka;
                    let denek;
                    let mesacok;
                    let chasok;
                    if (d.getHours() < 10) {
                        chasok = "0" + (d.getUTCHours() + 3);
                    } else {
                        chasok = (d.getUTCHours() + 3);
                    }
                    if (d.getMinutes() < 10) {
                        minutka = "0" + d.getMinutes();
                    } else {
                        minutka = d.getMinutes();
                    }
                    if (d.getDate() < 10) {
                        denek = "0" + d.getDate();
                    } else {
                        denek = d.getDate();
                    }
                    if (d.getMonth() + 1 < 10) {
                        mesacok = "0" + (d.getMonth() + 1);
                    } else {
                        mesacok = d.getMonth() + 1;
                    }

                    if (futurelessoninfo.data[i].lessonType == "regular") {
                        futurelessoninfo.data[i].lessonType = "Регулярный";
                    } else if (futurelessoninfo.data[i].lessonType == "single") {
                        futurelessoninfo.data[i].lessonType = "Одиночный";
                    } else if (futurelessoninfo.data[i].lessonType == "trial") {
                        futurelessoninfo.data[i].lessonType = "Пробный";
                    }

                    for (let j = 0; j < servicearray.data.length; j++) {
                        if (servicearray.data[j].serviceTypeKey == futurelessoninfo.data[i].educationService.serviceTypeKey)
                            futurelessoninfo.data[i].educationService.serviceTypeKey = servicearray.data[j].title;
                    }

                    if (futurelessoninfo.data[i].teacher != null) {
                        futurelessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka
                            + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + futurelessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + futurelessoninfo.data[i].educationService.id + " " + futurelessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<span style="color:#32CD32; font-weight:900;">Преподаватель</span>' + " " + futurelessoninfo.data[i].teacher.general.id + " " + futurelessoninfo.data[i].teacher.general.name + " " + futurelessoninfo.data[i].teacher.general.surname + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    } else {
                        futurelessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka
                            + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + futurelessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + futurelessoninfo.data[i].educationService.id + " " + futurelessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    }

                }


                document.getElementById('timetabledata').innerHTML = futurelessondata;
                futurelessondata = "";
            }
        }, 1000)

    }

    document.getElementById('changelocalelng').onclick = function () {

        document.getElementById('responseTextarea1').value = `{
		   "headers": {
			"content-type": "application/json",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "{\\"serviceLocale\\":\\"ru\\"}",
		  "method": "PUT",
		  "mode": "cors",
		  "credentials": "include"
		 
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/general/" + document.getElementById('idstudent').value
        document.getElementById('responseTextarea3').value = ''
        document.getElementById('sendResponse').click()
        document.getElementById('changelocalelng').innerHTML = "✅"
        setTimeout(function () { document.getElementById('changelocalelng').innerHTML = "🌍" }, 2000);
    }


    document.getElementById('setservicelocaleru').onclick = function () {
        document.getElementById('responseTextarea1').value = `{
		   "headers": {
			"content-type": "application/json",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "{\\"serviceLocale\\":\\"ru\\"}",
		  "method": "PUT",
		  "mode": "cors",
		  "credentials": "include"
		 
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/general/" + idforservicelocaleru.value
        document.getElementById('responseTextarea3').value = ''
        document.getElementById('sendResponse').click()
        document.getElementById('setservicelocaleru').innerHTML = "✅"
        idforservicelocaleru.value = "";
        setTimeout(function () { document.getElementById('setservicelocaleru').innerHTML = "🚀" }, 2000);
    }


    document.getElementById('catchathistory').onclick = function () {

        if (document.querySelector('#hide_or_display').textContent != "свернуть") {
            hide_or_display.click()
            document.getElementById('user_id').value = document.getElementById('idstudent').value;
            search.click()
        } else if (document.querySelector('#hide_or_display').textContent == "свернуть")
            document.getElementById('user_id').value = document.getElementById('idstudent').value;
        search.click()
    }

    document.getElementById('sguid').onclick = function () {                      //переход в инфо-кабинет по ученику из группового урока
        let lnksgu = 'https://grouplessons-api.skyeng.ru/admin/student/view/';
        if (studguid.value == "")
            console.log('Введите id  ученика в поле')
        else {
            window.open(lnksgu + studguid.value);
        };
        studguid.value = "";
    }

    document.getElementById('credits').onclick = function () {                  // проверка рассрочки у ученика она же поэтапная оплата (ПО)
        let lnkscredits = 'https://accounting.skyeng.ru/credit/list?studentId=';
        if (creditstatus.value == "")
            console.log('Введите id  ученика в поле')
        else {
            window.open(lnkscredits + creditstatus.value);
        };
        creditstatus.value = "";
    }

    document.getElementById('showcaseHW').onclick = function () {               // сохранение в буфере айди ученика для просмотра всего списка ДЗ по нему
        let hwstidlnk = 'https://vimbox.skyeng.ru/student/';
        if (HWstudID.value == "")
            console.log('Введите id  ученика в поле')
        else {
            copyToClipboard(hwstidlnk + HWstudID.value + "/homework");
        };
        document.getElementById('showcaseHW').innerHTML = "✅";
        setTimeout(function () { document.getElementById('showcaseHW').innerHTML = "💾" }, 2000);
        HWstudID.value = "";
    }

    document.getElementById('gethash').onclick = function () {                  // добавляем хеш комнаты, и со стороны П в консоле выполняем, чтобы проверить для какого ученика она была создана
        let hashlnk = 'fetch("https://rooms.vimbox.skyeng.ru/rooms/api/v1/workbooks/last?roomHash=';
        if (lookhash.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard(hashlnk + lookhash.value + "\", \{ \"method\":\"GET\",   \"credentials\":\"include\" \} ) \;");
        };
        document.getElementById('gethash').innerHTML = "✅";
        setTimeout(function () { document.getElementById('gethash').innerHTML = "💾" }, 2000);
        lookhash.value = "";
    }
    document.getElementById('getenablerAP').onclick = function () {               // сохранение в буфере ссылки для активации АП
        let enableAPlnk = 'https://pcs.skyeng.ru/cabinet/teacher-selection?educationServiceId=';
        if (enablerAP.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard(enableAPlnk + enablerAP.value);
        };
        document.getElementById('getenablerAP').innerHTML = "✅";
        setTimeout(function () { document.getElementById('getenablerAP').innerHTML = "💾" }, 2000);
        enablerAP.value = "";
    }

    document.getElementById('getskipAP').onclick = function () {               // сохранение в буфере ссылки для активации АП
        let skipAPlnk = 'https://student.skyeng.ru/product-stage?stage=auto-schedule&educationServiceId=';
        if (skipAP.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard(skipAPlnk + skipAP.value);
        };
        document.getElementById('getskipAP').innerHTML = "✅";
        setTimeout(function () { document.getElementById('getskipAP').innerHTML = "💾" }, 2000);
        skipAP.value = "";
    }

    let getageofuser;
    let ageofuser;
    async function getuseragecrm() {
        let filteredid = document.getElementById('idstudent').value;
        filteredid = filteredid.trim();
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "application/json, text/plain, */*",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site"
			  },
			  "referrer": "https://crm2.skyeng.ru/",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": null,
			  "method": "GET",
			  "mode": "cors",
			  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
        document.getElementById('responseTextarea3').value = 'getusernageinfo'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
            document.getElementById('responseTextarea3').value = 'getusernageinfo'
            document.getElementById('sendResponse').click()

            getageofuser = document.getElementById('responseTextarea1').getAttribute('getusernageinfo');
            getageofuser = await getageofuser;
            getageofuser = JSON.parse(getageofuser);
            document.getElementById('responseTextarea1').removeAttribute('getusernageinfo');
            let goddata = new Date()
            goddata = goddata.getFullYear();
            if (getageofuser.data.birthday != null) {
                getageofuser = getageofuser.data.birthday.split('-')
                if (goddata - getageofuser[0] < 18)
                    ageofuser = "🔞"
                else if (goddata - getageofuser[0] >= 18 && goddata - getageofuser[0] < 99)
                    ageofuser = "🅰";
            } else if (getageofuser.data.birthday == null)
                ageofuser = "❓";

        }, 600)

    }

    let nameofuser;
    let teachername;
    let studentname;
    let utczone;
    let localtime;
    let servlocalestatus;
    let avatarofuser;
    let countryofuser;
    async function getusernamecrm() {
        let curdate = new Date();
        let curhours = (curdate.getUTCHours() + 3);
        let curminutes = curdate.getMinutes();
        if (curminutes < 10) {
            curminutes = "0" + curminutes;
        }
        let filteredid = document.getElementById('idstudent').value;
        filteredid = filteredid.trim();
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "application/json, text/plain, */*",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site"
			  },
			  "referrer": "https://crm2.skyeng.ru/",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": null,
			  "method": "GET",
			  "mode": "cors",
			  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
        document.getElementById('responseTextarea3').value = 'getusernameinfo'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
            document.getElementById('responseTextarea3').value = 'getusernameinfo'
            document.getElementById('sendResponse').click()

            studentname = document.getElementById('responseTextarea1').getAttribute('getusernameinfo');
            studentname = await studentname;
            studentname = JSON.parse(studentname);
            nameofuser = "";
            teachername = "";
            if (studentname.data.name != null && studentname.data.surname != null && studentname.data.type == "student") {
                nameofuser = studentname.data.name + " " + studentname.data.surname;
            } else if (studentname.data.name != null && studentname.data.surname == null && studentname.data.type == "student") {
                nameofuser = studentname.data.name;
            } else if (studentname.data.name != null && studentname.data.surname != null && studentname.data.type == "teacher") {
                teachername = studentname.data.name + " " + studentname.data.surname;
            } else if (studentname.data.name != null && studentname.data.surname == null && studentname.data.type == "teacher") {
                teachername = studentname.data.name;
            }

            utczone = studentname.data.utcOffset;
            if ((curhours + (utczone - 3)) < 24 && (curhours + (utczone - 3)) >= 10) {
                localtime = (curhours + (utczone - 3)) + ":" + curminutes;
            } else if ((curhours + (utczone - 3)) >= 24) {
                localtime = "0" + ((curhours + (utczone - 3)) - 24) + ":" + curminutes;
            } else if ((curhours + (utczone - 3)) < 10 && (curhours + (utczone - 3)) >= 0) {
                localtime = "0" + (curhours + (utczone - 3)) + ":" + curminutes;
            } else if ((curhours + (utczone - 3)) < 0) {
                localtime = ((curhours + (utczone - 3)) + 24) + ":" + curminutes;
            }

            if (studentname.data.serviceLocale == null) {
                servlocalestatus = "⭕"
            } else {
                servlocalestatus = studentname.data.serviceLocale;
            }

            if (studentname.data.avatarUrl != null) {
                avatarofuser = studentname.data.avatarUrl.match(/(https:\/\/auth-avatars-skyeng.imgix.net.*?\d+.\S+).auto/)[1];
            } else {
                avatarofuser = null;
            }

            if (studentname.data.country != null) {
                countryofuser = studentname.data.country;
            } else {
                countryofuser = null;
            }


            document.getElementById('responseTextarea1').removeAttribute('getusernameinfo')

        }, 600)

    }

    let tokenlogginer;
    async function getlogginer() {
        //Для получения токена сначала обрабатываем
        document.getElementById('responseTextarea1').value = `{
					  "referrer": "https://id.skyeng.ru/admin/users",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "method": "GET",
					  "mode": "cors",
					  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
        document.getElementById('responseTextarea3').value = 'gettoken'
        document.getElementById('sendResponse').click()


        async function gettokenlog() {

            document.getElementById('responseTextarea1').value = `{
					  "referrer": "https://id.skyeng.ru/admin/users",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "method": "GET",
					  "mode": "cors",
					  "credentials": "include"
	}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
            document.getElementById('responseTextarea3').value = 'gettoken'
            document.getElementById('sendResponse').click()


            tokenlogginer = document.getElementById('responseTextarea1').getAttribute('gettoken');
            tokenlogginer = await tokenlogginer;
            let dokie = document.createElement('div');
            dokie.innerHTML = tokenlogginer;
            tokenlogginer = dokie.querySelector('#login_link_form__token').value;
            //console.log("Tokenlogginer: " + tokenlogginer)
            document.getElementById('responseTextarea1').removeAttribute('gettoken');

        }

        setTimeout(gettokenlog, 500)
    }


    let logginerinfo;
    async function postuderdatatologin() {
        let useriddata = document.getElementById('idstudent').value;
        useriddata = useriddata.trim();
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${document.getElementById('idstudent').value}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlogginer}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
        document.getElementById('responseTextarea3').value = 'postdata'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {

            document.getElementById('responseTextarea1').value = `{
				   "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links"
            document.getElementById('responseTextarea3').value = 'postdata'
            document.getElementById('sendResponse').click()

            logginerinfo = document.getElementById('responseTextarea1').getAttribute('postdata');
            logginerinfo = await logginerinfo;

            logginerinfo = logginerinfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
            logginerinfo = logginerinfo[logginerinfo.length - 1].split("\"");
            //console.log("WATCH OUT ITS LOGGINER:" + logginerinfo[1])
            copyToClipboard1(logginerinfo[1])
            document.getElementById('responseTextarea1').removeAttribute('postdata')


        }, 500)
    }


    let getcrmstatusinfo;
    async function crmstatus() {
        let tempvarcrm = document.getElementById('idstudent').value;
        tempvarcrm = tempvarcrm.trim();

        document.getElementById('CrmStatus').style.display = "none";

        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "application/json, text/plain, */*",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
        document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
        document.getElementById('sendResponse').click()



        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
            document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
            document.getElementById('sendResponse').click()

            getcrmstatusinfo = document.getElementById('responseTextarea1').getAttribute('getcrmtaskinfo');
            getcrmstatusinfo = await getcrmstatusinfo;
            getcrmstatusinfo = JSON.parse(getcrmstatusinfo);
            let flagtpout = 0;
            let flagtp = 0;
            let flagnottp = 0;
            let flagstatuswait;
            let flagstatusprocessing;
            let opername = "";
            if (getcrmstatusinfo.data.length > 0) {
                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_outgoing") {
                        flagtpout = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_first_line") {
                        flagtp = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup != "technical_support_outgoing" && getcrmstatusinfo.data[i].operatorGroup != "technical_support_first_line") {
                        flagnottp = 1;
                    }
                }

                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "waiting") {
                        flagstatuswait = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "processing") {
                        flagstatusprocessing = 1;
                        opername = getcrmstatusinfo.data[i].operator.name;
                    }
                }

                if (flagstatuswait == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "В ожидании";
                    document.getElementById('getcurrentstatus').style.backgroundColor = "#1E90FF";
                } else if (flagstatusprocessing == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "Решается";
                    document.getElementById('getcurrentstatus').title = opername;
                    document.getElementById('getcurrentstatus').style.backgroundColor = "#DC143C";
                }

                if (flagtpout == 1 && flagtp == 0 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача");
                } else if (flagtpout == 0 && flagtp == 0 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "📵";
                    console.log("Нет активных задач по ТП линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии и на др отделы");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача. И есть задача на др отдел");
                }

            } else {
                document.getElementById('CrmStatus').style.display = "";
                document.getElementById('CrmStatus').innerText = "📵";
                console.log("No DATA");
            }
            document.getElementById('responseTextarea1').removeAttribute('getcrmtaskinfo')

        }, 800)
    }

    async function chatstatus() {
        let tempvariable = document.getElementById('idstudent').value;
        tempvariable = tempvariable.trim();
        document.getElementById('ChatStatus').style.display = "none";
        document.getElementById('getcurrentstatus').style.display = "none";
        await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
            "headers": {
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + tempvariable + "\",\"tsFrom\":\"2021-01-01T19:00:00.000Z\",\"tsTo\":\"2022-03-01T18:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(r => r.json()).then(data => infres = data)
        if (infres.total > 0) {
            document.getElementById('ChatStatus').style.display = "";
            document.getElementById('ChatStatus').textContent = "📧";
            convid = infres.items[0].conversationId;
        } else if (infres.total == 0) {
            document.getElementById('ChatStatus').style.display = "";
            document.getElementById('ChatStatus').textContent = "🚫";
        }
    }




    let convid;
    document.getElementById('getidstudent').onclick = function () {
        document.getElementById('servicetable').innerHTML = "";
        document.querySelector('#useravatar').src = "";
        if (document.querySelector('#useravatar').style.display != "none")
            document.querySelector('#useravatar').style.display = "none";
        let servicearr = "";
        document.getElementById('servicetable').innerHTML = "";
        document.getElementById('getcurrentstatus').title = "";
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();

        getservicearr();
        setTimeout(getunhideemail, 600);
        setTimeout(getunhidephone, 620);
        setTimeout(getusernamecrm, 640);
        setTimeout(getuseragecrm, 650);
        setTimeout(checkemailandphoneidentity, 660);
        setTimeout(crmstatus, 680);
        setTimeout(chatstatus, 700);
        setTimeout(getlogginer, 730);
        //	setTimeout(postuderdatatologin, 760);


        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "ru",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	}`
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + stid + "/education-services/"
            document.getElementById('responseTextarea3').value = 'getserviceinfo'
            document.getElementById('sendResponse').click()

            async function getServInfo() {
                document.getElementById('responseTextarea1').value = '{}'
                document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + stid + "/education-services/"
                document.getElementById('responseTextarea3').value = 'getserviceinfo'
                document.getElementById('sendResponse').click()

                servicearr = document.getElementById('responseTextarea1').getAttribute('getserviceinfo');
                servicearr = await servicearr;
                servicearr = JSON.parse(servicearr);
                //console.log(servicearr);
                document.getElementById('responseTextarea1').removeAttribute('getserviceinfo')


                let tinfo = ""; // инфо о постоянном П
                let temtinfo = ""; // инфо о временном П
                let servinfo = ""; //инфо об услуге
                let noservinfo = "";
                let arrservice = []; // пустой массив, куда будет передавать ID отобранных услуг по условию
                if (servicearr.data.length === 0 || servicearr.data[0].incorrectnessReason == "attempt_to_find_job") {
                    noservinfo = 1;
                    arrservice = null;
                } else {
                    for (let i = 0; i < servicearr.data.length; i++) {
                        for (let d = 0; d < servicearray.data.length; d++) {
                            if (servicearray.data[d].serviceTypeKey == servicearr.data[i].serviceTypeKey)
                                servicearr.data[i].serviceTypeKey = servicearray.data[d].title;
                        }

                        if (servicearr.data[i].student.general.id == stid && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost" && servicearr.data[i].teacher != null && servicearr.data[i].temporaryTeacher == null) {

                            tinfo += [i + 1] + ") " + servicearr.data[i].teacher.general.id + " " + servicearr.data[i].teacher.general.name + " " + servicearr.data[i].teacher.general.surname + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid" style="margin-left: 5px; cursor: pointer">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr style="width:260px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].teacher == null && servicearr.data[i].temporaryTeacher != null && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost") {

                            temtinfo += [i + 1] + ") " + servicearr.data[i].temporaryTeacher.general.id + " " + servicearr.data[i].temporaryTeacher.general.name + " " + servicearr.data[i].temporaryTeacher.general.surname + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid" style="margin-left: 5px; cursor: pointer">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr style="width:260px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].teacher == null && (servicearr.data[i].serviceTypeKey == "kids_small_group_english_not_native" || servicearr.data[i].serviceTypeKey == "flow_math_kids") && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost") {

                            tinfo = "KGL student" + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid" style="margin-left: 5px; cursor: pointer">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr style="width:260px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].teacher != null && servicearr.data[i].temporaryTeacher != null && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost") {
                            tinfo += [i + 1] + ") " + servicearr.data[i].teacher.general.id + " " + servicearr.data[i].teacher.general.name + " " + servicearr.data[i].teacher.general.surname + "<br>";
                            temtinfo += [i + 1] + ") " + servicearr.data[i].temporaryTeacher.general.id + " " + servicearr.data[i].temporaryTeacher.general.name + " " + servicearr.data[i].temporaryTeacher.general.surname + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid" style="margin-left: 5px; cursor: pointer">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr style="width:260px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && (servicearr.data[i].stage == "after_trial" || servicearr.data[i].stage == "before_call") && servicearr.data[i].incorrectnessReason == null) {
                            tinfo += [i + 1] + ") " + '<span style="color:#FF7F50; font-weight:900;">Этап ВУ</span><br>';
                            servinfo += [i + 1] + ") " + '<span>ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid" style="margin-left: 5px; cursor: pointer">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr style="width:260px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].stage == "lost" && servicearr.data[i].incorrectnessReason == null) {
                            //	tinfo += [i+1] + ") " + "Нет П, услуга(и) потеряна(ы)"+ "<br>";
                            console.log("Услуга потеряна");
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].stage != "lost" && servicearr.data[i].incorrectnessReason != null) {
                            //	tinfo += [i+1] + ") " + "Нет П, услуга(и) некорректна(ы)"+ "<br>";
                            console.log("Услуга некорректна");
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].stage == "lost" && servicearr.data[i].incorrectnessReason == null) {
                            //	tinfo = "Нет П, услуга(и) потеряна(ы) и некорректна(ы)"+ "<br>";
                            console.log("Услуга потеряна и некорректна");
                        }
                    }
                }

                if (temtinfo == "" && tinfo != "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации" style="cursor:pointer; font-weight:700;"> Имя: </span>' + nameofuser + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " /  MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + '<span style="color:#32CD32; font-weight:900;">Основные преподаватели</span><br>' + tinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
                    if (servlocalestatus == "ru") {
                        document.getElementById('changelocalelng').style.display = "none"
                    } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
                        document.getElementById('changelocalelng').style.display = ""
                    }
                    document.getElementById('checkbalance').style.display = "";
                    document.getElementById('getcrmoneinfo').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "";
                    document.getElementById('partialpaymentinfo').style.display = "";
                    document.getElementById('getpastandfuturelessons').style.display = "";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else if (temtinfo != "" && tinfo != "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  style="cursor:pointer; font-weight:700;"> Имя: </span>' + nameofuser + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + '<span style="color:#32CD32; font-weight:900;">Основные преподаватели</span><br>' + tinfo + "<br>" + '<span style="color:#FF8C00; font-weight:900;">Временные преподаватели</span><br>' + temtinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
                    if (servlocalestatus == "ru") {
                        document.getElementById('changelocalelng').style.display = "none"
                    } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
                        document.getElementById('changelocalelng').style.display = ""
                    }
                    document.getElementById('checkbalance').style.display = "";
                    document.getElementById('getcrmoneinfo').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "";
                    document.getElementById('partialpaymentinfo').style.display = "";
                    document.getElementById('getpastandfuturelessons').style.display = "";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else if (temtinfo != "" && tinfo == "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  style="cursor:pointer; font-weight:700;"> Имя: </span>' + nameofuser + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + '<span style="color:#FF8C00; font-weight:900;">Временные преподаватели</span><br>' + temtinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
                    if (servlocalestatus == "ru") {
                        document.getElementById('changelocalelng').style.display = "none"
                    } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
                        document.getElementById('changelocalelng').style.display = ""
                    }
                    document.getElementById('checkbalance').style.display = "";
                    document.getElementById('getcrmoneinfo').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "";
                    document.getElementById('partialpaymentinfo').style.display = "";
                    document.getElementById('getpastandfuturelessons').style.display = "";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else if (noservinfo == 1 && teachername != "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span style="color:#00BFFF; font-weight:900;">Преподаватель </span>' + "<br>" + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  style="cursor:pointer; font-weight:700;">Имя: </span>' + teachername + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + "<br>" + "🌍: " + countryofuser + "<br>";
                    document.getElementById('changelocalelng').style.display = "none";
                    document.getElementById('checkbalance').style.display = "none";
                    document.getElementById('getcrmoneinfo').style.display = "none";
                    document.getElementById('getkglinfokid').style.display = "none";
                    document.getElementById('partialpaymentinfo').style.display = "none";
                    document.getElementById('getpastandfuturelessons').style.display = "none";
                    document.getElementById('newtrm').style.display = "";
                    document.getElementById('personalteacherpage').style.display = "";

                } else if (noservinfo == 1 && nameofuser != "" && teachername == "" && unhidenemail.endsWith('@skyeng.ru') == true) {
                    document.getElementById('servicetable').innerHTML = '<span style="color:#FF69B4; font-weight:900;">Оператор </span>' + "<br>" + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  style="cursor:pointer; font-weight:700;">Имя: </span>' + nameofuser + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + "<br>";
                    document.getElementById('checkbalance').style.display = "none";
                    document.getElementById('getcrmoneinfo').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "none";
                    document.getElementById('partialpaymentinfo').style.display = "none";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase1" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer1" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  style="cursor:pointer; font-weight:700;"> Имя: </span>' + nameofuser + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена почту пользователя" id="getusremail1">Email: </span>' + unhidenemail + "<br>" + '<span style="font-weight:700;cursor:pointer;" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone1">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + "Нет активных услуг (П отсутствует). Услуги потеряны или некорректны";

                    document.getElementById('getusremail1').onclick = function () {
                        copyToClipboard1(unhidenemail);
                    };

                    document.getElementById('getusrphone1').onclick = function () {
                        copyToClipboard1(unhidephone);
                    };

                    document.getElementById('getshowcase1').onclick = function () {
                        copyToClipboard1("https://profile.skyeng.ru/profile/" + stid + "/showcase");
                    };

                    document.getElementById('getloginer1').addEventListener('click', function () {
                        postuderdatatologin();
                    })
                }

                if (arrservice != null || arrservice != undefined) {
                    arrservice = arrservice.split(', ')
                }
                let tmparr = document.querySelectorAll('.copyserviceid');
                for (let j = 0; j < tmparr.length; j++) {
                    tmparr[j].onclick = function () {
                        copyToClipboard1(arrservice[j])
                    }
                }

                document.getElementById('getusremail').onclick = function () {
                    copyToClipboard1(unhidenemail);
                };

                document.getElementById('getusrphone').onclick = function () {
                    copyToClipboard1(unhidephone);
                };

                document.getElementById('getloginer').addEventListener('click', function () {
                    postuderdatatologin();
                })

                document.getElementById('getshowcase').onclick = function () {
                    copyToClipboard1("https://profile.skyeng.ru/profile/" + stid + "/showcase");
                };


                if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
                    let testids = document.querySelector('#servicetable').textContent.match(/(\d+)/gm);
                    let infoiduslugi = document.getElementsByClassName('iduslugitxt');
                    for (let j = 1; document.getElementsByClassName('expert-user_details-list')[1].childNodes[j] != undefined; j++) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].childNodes[1].innerText == "teacher") {
                            for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                    let getidusr = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
                                    if (infoiduslugi != undefined || infoiduslugi != null || infoiduslugi != "") {
                                        // for (let d = 0; d < infoiduslugi.length; d++) {
                                        for (let v = 0; v < testids.length; v++) {
                                            if (testids[v] == getidusr)
                                                infoiduslugi[v].innerText = "ID Услуги 🔥";
                                            else
                                                console.log("Not found") //если услуги не совпали с П обратившимся
                                        } // for v
                                        //    } // for d
                                    } //проверка на наличие услуг, чтобы не были андейфайнед, нулл или пустыми
                                } else
                                    console.log("No such field"); // если обратился У в консоли получим сообщение или обратился П, который указал У который не является его учеником
                            } // for let i
                        } // if type == teacher
                    }
                } // for let j
            }

            setTimeout(getServInfo, 1200)

        }, 720)
    }

    document.getElementById('ChatStatus').onclick = function () {
        if (document.getElementById('ChatStatus').textContent == "📧") {

            if (document.querySelector('#hide_or_display').textContent != "свернуть") {
                hide_or_display.click()
                document.getElementById('chat_id').value = convid;

                search.click()
            } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
                document.getElementById('chat_id').value = convid;
                search.click()
            }
        } else { console.log("No chat with user!!!") }
    }

    document.getElementById('CrmStatus').onclick = function () {

        let tempvarcrm = document.getElementById('idstudent').value;
        let getcrmstatusinfo;
        document.getElementById('CrmStatus').style.display = "none";
        document.getElementById('getcurrentstatus').style.display = "none";
        document.getElementById('getcurrentstatus').title = "";

        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "application/json, text/plain, */*",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
        document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
        document.getElementById('sendResponse').click()



        setTimeout(function () {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
            document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
            document.getElementById('sendResponse').click()

            getcrmstatusinfo = document.getElementById('responseTextarea1').getAttribute('getcrmtaskinfo');
            getcrmstatusinfo = JSON.parse(getcrmstatusinfo);
            let flagtpout = 0;
            let flagtp = 0;
            let flagnottp = 0;
            let flagstatuswait;
            let flagstatusprocessing;
            let opername = "";
            if (getcrmstatusinfo.data.length > 0) {
                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_outgoing") {
                        flagtpout = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_first_line") {
                        flagtp = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup != "technical_support_outgoing" && getcrmstatusinfo.data[i].operatorGroup != "technical_support_first_line") {
                        flagnottp = 1;
                    }
                }

                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "waiting") {
                        flagstatuswait = 1;
                        document.getElementById('getcurrentstatus').title = "";
                    } else if (getcrmstatusinfo.data[i].operatorGroup == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "processing") {
                        flagstatusprocessing = 1;
                        opername = getcrmstatusinfo.data[i].operator.name;
                    }
                }

                if (flagstatuswait == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "В ожидании";
                } else if (flagstatusprocessing == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "Решается";
                    document.getElementById('getcurrentstatus').title = opername;
                    document.getElementById('getcurrentstatus').style.backgroundColor = "#DC143C";
                }

                if (flagtpout == 1 && flagtp == 0 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача");
                } else if (flagtpout == 0 && flagtp == 0 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "📵";
                    console.log("Нет активных задач по ТП линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии и на др отделы");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача. И есть задача на др отдел");
                }

            } else {
                document.getElementById('CrmStatus').style.display = "";
                document.getElementById('CrmStatus').innerText = "📵";
                console.log("No DATA");
            }
            document.getElementById('responseTextarea1').removeAttribute('getcrmtaskinfo')

        }, 1200)

    }

    document.getElementById('crmactivetasks').onclick = function () {
        window.open("https://crm2.skyeng.ru/persons/" + document.getElementById('idstudent').value + "/customer-support/list")
    }

    document.getElementById('newtrm').onclick = function () {
        window.open("https://trm.skyeng.ru/teacher/" + document.getElementById('idstudent').value)
    }

    document.getElementById('personalteacherpage').onclick = function () {
        window.open("https://skyeng.ru/teachers/id/" + document.getElementById('idstudent').value)
    }

    document.getElementById('clearservinfo').onclick = function () {
        document.getElementById('idstudent').value = "";
        document.getElementById('servicetable').innerHTML = "";
        document.getElementById('ChatStatus').style.display = "none";
        document.getElementById('CrmStatus').style.display = "none";
        document.getElementById('getcurrentstatus').style.display = "none";
        document.getElementById('changelocalelng').style.display = "";
        document.getElementById('getpastandfuturelessons').style.display = "";
        document.querySelector('#useravatar').src = "";
        document.querySelector('#useravatar').style.display = "none";

    }

    document.getElementById('useravatar').onmouseover = function () {
        document.getElementById('useravatar').style.width = "200px";
        document.getElementById('useravatar').style.height = "230px";
    }

    document.getElementById('useravatar').onmouseout = function () {
        document.getElementById('useravatar').style.width = "55px";
        document.getElementById('useravatar').style.height = "60px";
    }


    // Просмотр таски по джира по ее коду и номеру 
    document.getElementById('getJiraTasks').ondblclick = function () {
        if (document.getElementById('AF_Jira').style.display = 'none') {
            document.getElementById('AF_Jira').style.display = ''
        }


        let rezissuetable;

        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "*/*",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-origin",
					"x-requested-with": "XMLHttpRequest"
				  },
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
               }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/quicksearch/1.0/productsearch/search?q=" + document.getElementById('testJira').value;
        document.getElementById('responseTextarea3').value = 'getissuetable1'
        document.getElementById('sendResponse').click()

        async function getJiraTask1() {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/quicksearch/1.0/productsearch/search?q=" + document.getElementById('testJira').value;
            document.getElementById('responseTextarea3').value = 'getissuetable1'
            document.getElementById('sendResponse').click()


            rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getissuetable1'))
            rezissuetable = await rezissuetable;
            document.getElementById('responseTextarea1').removeAttribute('getissuetable1')
            if (rezissuetable != null) {
                let issues = [];
                issues = '<span style="color: #00FA9A">&#5129;</span>' + '<a href="' + rezissuetable[0].items[0].url + '" onclick="" target="_blank" style="color: #ffe4c4">' + rezissuetable[0].items[0].subtitle + " - " + rezissuetable[0].items[0].title + '</a>' + " " + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>';

                document.getElementById('issuetable').innerHTML = issues;

                let barray = document.querySelector('.jiraissues');
                barray.onclick = function () {
                    sendComment(rezissuetable[0].items[0].url)
                }

                setTimeout(function () { issues = []; testJira.value = ""; }, 5000)
            }
        }

        setTimeout(getJiraTask1, 1000)
    }



    document.getElementById('getJiraTasks').onclick = function () {

        if (document.getElementById('AF_Jira').style.display = 'none') {
            document.getElementById('AF_Jira').style.display = ''
        }


        let rezissuetable;

        document.getElementById('responseTextarea1').value = `{
                     "headers": {
                        "__amdmodulename": "jira/issue/utils/xsrf-token-header",
                       "accept": "*/*",
                        "sec-fetch-mode": "cors",
                       "sec-fetch-site": "same-origin",
                       "x-atlassian-token": "no-check",
                       "x-requested-with": "XMLHttpRequest"
                     },
                     "body": "startIndex=0&filterId=21266&jql=project+in+(VIM%2C+MP%2C+MV%2C+KIDS%2C+TS%2C+ADULT%2C+AUTH%2C+BILL%2C+COMM%2C+KG%2C+KIDSMOB%2C+MATH%2C+MOB%2C+MOBACK%2C+MOBT%2C+SS%2C+ST%2C+SMMOB%2C+STUDCAB)+AND+issuetype+in+(Bug%2C+Task)+AND+status+!%3D+closed+AND+Reports+%3E+0+AND+resolution+in+(Unresolved%2C+Incomplete%2C+%22Cannot+Reproduce%22)+AND+text+~%22+${testJira.value}+%22+ORDER+BY+updated&layoutKey=list-view",
                     "method": "POST",
                     "mode": "cors",
                     "credentials": "include"
               }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/issueNav/1/issueTable"
        document.getElementById('responseTextarea3').value = 'getissuetable'
        document.getElementById('sendResponse').click()

        async function getJiraTask() {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/issueNav/1/issueTable"
            document.getElementById('responseTextarea3').value = ''
            document.getElementById('sendResponse').click()

            rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getissuetable'))
            rezissuetable = await rezissuetable;
            if (rezissuetable == null)
                setTimeout(getJiraTask, 1000)
            else {
                //   rezissuetable = JSON.parse(rezissuetable)
                document.getElementById('responseTextarea1').removeAttribute('getissuetable')

                let issues = [];
                if (rezissuetable.issueTable.issueKeys.length > 50)
                    rezissuetable.issueTable.issueKeys.length = 50;
                for (let i = 0; i < rezissuetable.issueTable.issueKeys.length; i++) {

                    if (rezissuetable.issueTable.issueKeys[i] != undefined && document.getElementById('testJira').value != "portfolio" && document.getElementById('testJira').value != "Portfolio" && document.getElementById('testJira').value != "Портфолио" && document.getElementById('testJira').value != "портфолио" && document.getElementById('testJira').value != "404" && document.getElementById('testJira').value != "403" && document.getElementById('testJira').value != "recording" && document.getElementById('testJira').value != "record") {
                        issues += '<span style="color: #00FA9A">&#5129;</span>' + '<a href="https://jira.skyeng.tech/browse/' + rezissuetable.issueTable.issueKeys[i] + '" onclick="" target="_blank" style="color: #ffe4c4">' + rezissuetable.issueTable.table.match(/(\w+-\d+">.*?\D+.?.?)<\/a>/gm)[i] + '</a>' + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + '<span class="newcount" style="width:20px; margin-left: 5px; background:#3CB371">' + rezissuetable.issueTable.table.match(/">.*?([0-9]+)\n/gm)[i] + '</span>' + '<span class = "refreshissues" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + '</br>'
                    } else if (rezissuetable.issueTable.issueKeys[i] != undefined && document.getElementById('testJira').value == "403") {
                        let arrmod = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?\D+)<\/a>/gm) + "," + rezissuetable.issueTable.table.match(/(\w+-\d+">.*?\D+)403<\/a>/gm);
                        arrmod = arrmod.split(',');
                        issues += '<span style="color: #00FA9A">&#5129;</span>' + '<a href="https://jira.skyeng.tech/browse/' + rezissuetable.issueTable.issueKeys[i] + '" onclick="" target="_blank" style="color: #ffe4c4">' + arrmod[i] + '</a>' + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + '<span class="newcount" style="width:20px; margin-left: 5px; background:#3CB371">' + rezissuetable.issueTable.table.match(/">.*?([0-9]+)\n/gm)[i] + '</span>' + '<span class = "refreshissues" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + '</br>'
                    } else {
                        issues += '<span style="color: #00FA9A">&#5129;</span>' + '<a href="https://jira.skyeng.tech/browse/' + rezissuetable.issueTable.issueKeys[i] + '" onclick="" target="_blank" style="color: #ffe4c4">' + rezissuetable.issueTable.table.match(/(\w+-\d+">.*?\D+.?.?.)<\/a>/gm)[i] + '</a>' + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + '<span class="newcount" style="width:20px; margin-left: 5px; background:#3CB371">' + rezissuetable.issueTable.table.match(/">.*?([0-9]+)\n/gm)[i] + '</span>' + '<span class = "refreshissues" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + '</br>'
                    }
                }


                document.getElementById('issuetable').innerHTML = issues;

                let barray = document.querySelectorAll('.jiraissues');
                for (let j = 0; j < barray.length; j++) {
                    barray[j].onclick = function () {
                        sendComment("https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[j])
                    }
                }

                let refreshissuesarr = document.querySelectorAll('.refreshissues');
                for (let f = 0; f < refreshissuesarr.length; f++) {
                    refreshissuesarr[f].onclick = function () {

                        document.getElementById('responseTextarea1').value = '{}'
                        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + rezissuetable.issueTable.issueIds[f]
                        document.getElementById('responseTextarea3').value = 'reportscount'
                        document.getElementById('sendResponse').click()

                        let count;
                        let jira_token;
                        let increasedcount;
                        setTimeout(async function () {
                            document.getElementById('responseTextarea1').value = '{}'
                            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + rezissuetable.issueTable.issueIds[f]
                            document.getElementById('responseTextarea3').value = 'reportscount'
                            document.getElementById('sendResponse').click()

                            let repcount = document.getElementById('responseTextarea1').getAttribute('reportscount')
                            repcount = await repcount;
                            jira_token = repcount.match(/"atl_token":"(.*lin)/)[1]
                            document.getElementById('responseTextarea1').removeAttribute('reportscount')

                            count = repcount.match(/customfield_15410.*?value=.*?(\d+)/)[1];
                            count = parseInt(count);
                            increasedcount = count + 1;
                            increasedcount = increasedcount.toString();
                            console.log("count=" + count + " increasedcount " + increasedcount);

                            setTimeout(function () {

                                document.getElementById('responseTextarea1').value = `{
						"headers": {
							"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
						    "sec-fetch-mode": "cors",
							"sec-fetch-site": "same-origin",
							"x-requested-with": "XMLHttpRequest",
							"x-sitemesh-off": "true"
									},
						"body": "customfield_15410=${increasedcount}&issueId=${rezissuetable.issueTable.issueIds[f]}&atl_token=${jira_token}&singleFieldEdit=true&fieldsToForcePresent=customfield_15410",
						  "method": "POST",
						  "mode": "cors",
						  "credentials": "include"
							}`
                                document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueAction.jspa?decorator=none"
                                document.getElementById('responseTextarea3').value = ''
                                document.getElementById('sendResponse').click()
                                let newinfocount = document.querySelectorAll('.newcount');
                                newinfocount[f].innerHTML = increasedcount;
                                increasedcount = "";
                            }, 1000);
                        }, 1000)
                    }
                }

                console.log(rezissuetable.issueTable.issueKeys);
                setTimeout(function () { issues = []; testJira.value = ""; }, 5000)
            }

        }

        setTimeout(getJiraTask, 1000)
    }

    let searchJiraByEnter = document.querySelector('#testJira'); //по Enter запускает поиск по Jira
    searchJiraByEnter.addEventListener('keydown', event => {
        if (event.key === "Enter") {
            document.querySelector('#getJiraTasks').click()
        }
    })

    let searchCommentsByEnter = document.querySelector('#commenttosearch'); //по Enter запускает поиск по комментариям
    searchCommentsByEnter.addEventListener('keydown', event => {
        if (event.key === "Enter") {
            document.querySelector('#parsechat').click()
        }
    })


    document.getElementById('gotocrmoneinfo').onclick = function () {                  // проверка заявки ученика в СРМ1
        let crmonelnk = 'https://cabinet.skyeng.ru/orderV2/student/id/';
        if (crmoneinfo.value == "")
            console.log('Введите id  ученика в поле')
        else {
            window.open(crmonelnk + crmoneinfo.value);
        };
        crmoneinfo.value = "";
    }

    document.getElementById('getpastandfuturelessons').onclick = function () {
        if (document.getElementById('AF_Timetable').style.display == '')
            document.getElementById('AF_Timetable').style.display = 'none'
        else
            document.getElementById('AF_Timetable').style.display = ''
    }

    document.getElementById('gotolookip').onclick = function () {                  // проверка информации по айпишнику ученика/препода/ хостинга
        let iplink = 'https://check-host.net/ip-info?host=';
        if (iplookup.value == "")
            console.log('Введите ip в поле')
        else {
            window.open(iplink + iplookup.value);
        };
        iplookup.value = "";
    }

    document.getElementById('startjirasearch').onclick = function () {                  // поиск по Jira
        let jiralink = 'https://jira.skyeng.tech/issues/?filter=21266&jql=project%20in%20(VIM%2C%20MP%2C%20MV%2C%20KIDS%2C%20TS%2C%20ADULT%2C%20AUTH%2C%20BILL%2C%20COMM%2C%20KG%2C%20KIDSMOB%2C%20MATH%2C%20MOB%2C%20MOBACK%2C%20MOBT%2C%20SS%2C%20ST%2C%20SMMOB%2C%20STUDCAB)%20AND%20issuetype%20in%20(Bug%2C%20Task)%20AND%20status%20!%3D%20closed%20AND%20Reports%20%3E0%20AND%20resolution%20in%20(Unresolved%2C%20Incomplete%2C%20%22Cannot%20Reproduce%22)%20AND%20text%20~%20%22';
        if (jirasearch.value == "")
            console.log('Введите текст в поле')
        else {
            window.open(jiralink + jirasearch.value + '%22%20ORDER%20BY%20updated');
        };
        jirasearch.value = "";
    }

    document.getElementById('getlgsinfo').onclick = function () {                  // открытие админки LGS по ID группы
        let lgslink = 'https://learning-groups-storage.skyeng.ru/group/';
        if (lgssearch.value == "")
            console.log('Введите текст в поле')
        else {
            window.open(lgslink + lgssearch.value + '?cp=(section:participants)');
        };
        lgssearch.value = "";
    }

    document.getElementById('msg').onclick = function () {
        if (this.innerHTML == "Чат") {
            this.innerHTML = "Заметки";
            localStorage.setItem('msg', 'Заметки')
        } else {
            this.innerHTML = "Чат";
            localStorage.setItem('msg', 'Чат')
        }
    }

    document.getElementById('type_TP').onclick = function () {
        localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec')
        prepTp()
    }

    document.getElementById('type_TP_new').onclick = weWillNotBeSlaves;

    if (localStorage.getItem('scriptAdr') != TP_addr && localStorage.getItem('scriptAdr') != TP_addr2) {
        document.getElementById('msg1').style.display = 'none'
        document.getElementById('snd').style.marginLeft = '120px'
        document.getElementById('msg1').innerHTML = 'Доработать'
        document.getElementById('testUsers').style.display = 'none'
    } else {
        prepTp()
    }

    document.getElementById('hideMenu').onclick = function () {
        document.getElementById('AF_helper').style.display = 'none'
        document.getElementById('scriptBut').style.display = ''
        if (document.getElementById('cstmTmplates').style.display == '')
            document.getElementById('cstmTmplates').style.display = 'none'
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
        if (document.getElementById('AF_Jira').style.display == '')
            document.getElementById('AF_Jira').style.display = 'none'
        if (document.getElementById('AF_Stat').style.display == '')
            document.getElementById('AF_Stat').style.display = 'none'
        if (document.getElementById('AF_LessonStatus').style.display == '')
            document.getElementById('AF_LessonStatus').style.display = 'none'
        if (document.getElementById('AF_Linksd').style.display == '')
            document.getElementById('AF_Linksd').style.display = 'none'
    }


    document.getElementById('setting').onclick = function () {
        if (document.getElementById('set_bar').style.display == '')
            document.getElementById('set_bar').style.display = 'none'
        else {
            document.getElementById('set_bar').style.display = ''
            document.getElementById('addTmp').style.display = 'none'
        }
    }

    document.getElementById('links').onclick = function () {
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
        else
            document.getElementById('AF_Links').style.display = ''
    }

    document.getElementById('addsrc').onclick = function () {
        if (document.getElementById('AF_Linksd').style.display == '')
            document.getElementById('AF_Linksd').style.display = 'none'
        else
            document.getElementById('AF_Linksd').style.display = ''
    }

    document.getElementById('butServ').onclick = function () {
        if (document.getElementById('AF_Service').style.display == '')
            document.getElementById('AF_Service').style.display = 'none'
        else
            document.getElementById('AF_Service').style.display = ''
    }


    document.getElementById('hideMe').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_Links').style.display == '') {
            document.getElementById('AF_Links').style.display = 'none'
            document.getElementById('AF_Jira').style.display = 'none'
        }
        else
            document.getElementById('AF_Links').style.display = ''
    }

    document.getElementById('hideMeLinksd').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_Linksd').style.display == '') {
            document.getElementById('AF_Linksd').style.display = 'none'
        }
        else
            document.getElementById('AF_Linksd').style.display = ''
    }

    document.getElementById('hideMej').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_Jira').style.display == '')
            document.getElementById('AF_Jira').style.display = 'none'
        else
            document.getElementById('AF_Jira').style.display = ''
    }

    document.getElementById('hideMeTT').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_Timetable').style.display == '')
            document.getElementById('AF_Timetable').style.display = 'none'
        else
            document.getElementById('AF_Timetable').style.display = ''
        document.getElementById('timetabledata').innerHTML = "";
    }

    document.getElementById('hideMeservice').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_Service').style.display == '')
            document.getElementById('AF_Service').style.display = 'none'
        else
            document.getElementById('AF_Service').style.display = ''
    }

    document.getElementById('hideMeLessonStatus').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_LessonStatus').style.display == '') {
            document.getElementById('AF_LessonStatus').style.display = 'none'
            document.getElementById('statustable').innerText = "";
        } else
            document.getElementById('AF_LessonStatus').style.display = ''
    }

    document.getElementById('hideMeStat').onclick = function () { // скрытие окна с доп ссылками
        if (document.getElementById('AF_Stat').style.display == '')
            document.getElementById('AF_Stat').style.display = 'none'
        else
            document.getElementById('AF_Stat').style.display = ''
    }

    document.getElementById('creds').onclick = function () { // разная полезная актуальная информация
        alert("Актуальные креды для BrowserStack:                                                     login: ax@skyeng.ru , pwd: sugtL5dhsPXXiQdN9w3SisOaR@[o");
    }

    document.getElementById('knoweledgebase').onclick = function () { // открытие Confluence БЗ 2.0
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=25407293")
    }

    document.getElementById('datsyurl').onclick = function () { // открытие Календаря
        window.open("https://datsy.ru/")
    }

    document.getElementById('getlessonstatus').onclick = function () {
        let getdateset = new Date()
        let getyearLS = getdateset.getFullYear();
        let getcurmonthLS = (getdateset.getMonth() + 1)
        let todayLS = getdateset.getDate();
        document.getElementById('dateFromLS').value = getyearLS + "-" + getcurmonthLS + "-" + (todayLS - 1)
        document.getElementById('dateToLS').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS
        if (document.getElementById('AF_LessonStatus').style.display == '')
            document.getElementById('AF_LessonStatus').style.display = 'none'
        else
            document.getElementById('AF_LessonStatus').style.display = ''
    }


    document.getElementById('getStats').onclick = function () { // открытие Статистики
        let getcurdate = new Date()
        let getyear = getcurdate.getFullYear();
        let getcurmonth = (getcurdate.getMonth() + 1)
        let today = getcurdate.getDate();
        document.querySelector('#chatcommentsdata').style.display = "none"
        document.querySelector('#lowCSATcount').style.display = "none"
        document.getElementById('dateFrom').value = getyear + "-" + getcurmonth + "-" + (today - 1)
        document.getElementById('dateTo').value = getyear + "-" + getcurmonth + "-" + today
        if (document.getElementById('AF_Stat').style.display == '')
            document.getElementById('AF_Stat').style.display = 'none'
        else
            document.getElementById('AF_Stat').style.display = ''
    }

    document.getElementById('passappgen').addEventListener('click', function () {
        window.open("https://id.skyeng.ru/admin/auth/one-time-password")    // открываем ссылку в новой вкладке на генерацию одноразовых паролей
    })

    document.getElementById('sound_save').onclick = function () {
        localStorage.setItem('sound_str', document.getElementById('sound_adr').value);
        if (document.getElementById('sound_adr').value == "")
            audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");
        else
            audio = new Audio(document.getElementById('sound_adr').value);
        document.getElementById('sound_adr').value = "";
    }

    if (flagLangBut == 0) {
        document.getElementById('languageAF').onclick = function () {
            if (this.innerHTML == "Русский") {
                this.innerHTML = "Английский";
                document.getElementById('AF_helper').style.background = "#EBC7DF"
            } else {
                this.innerHTML = "Русский";
                document.getElementById('AF_helper').style.background = "#464451"
            }
        }
    }


    document.getElementById('msg1').onclick = function () {
        if (this.innerHTML == "Отправить") {
            this.innerHTML = "Доработать";
            localStorage.setItem('msg1', 'Доработать')
        } else {
            this.innerHTML = "Отправить";
            localStorage.setItem('msg1', 'Отправить')
        }
    }
    document.getElementById('snd').onclick = function () {
        document.getElementById('snd').setAttribute('disabled', 'disabled')
        setTimeout(function () { document.getElementById('snd').removeAttribute('disabled') }, 500)
        if (document.getElementById('msg').innerHTML == "Чат") {
            if (template_flag == 1) {
                if (template_flag2 == 1)
                    sendAnswerTemplate2(document.getElementById('inp').value, 1)
                else
                    sendAnswerTemplate("", "", 1, document.getElementById('inp').value, 1)
            } else {
                sendAnswer(document.getElementById('inp').value, 0)
            }
        }
        else
            sendComment(document.getElementById('inp').value)
        document.getElementById('inp').value = ""

        if (document.getElementById('phone_tr') != undefined)
            document.getElementById('phone_tr').value = ""
        if (document.getElementById('email_tr') != undefined)
            document.getElementById('email_tr').value = ""
    }

    window.onkeydown = function (e) {
        if (e.key == 'Control') {
            bool = 1;
        }
        if (e.key == 'Enter' && bool == 1) {
            refCurTimer('12:00')
        }
    }
    window.onkeyup = function (e) {
        if (e.key == 'Control') {
            bool = 0;
        }
    }

    let button1 = document.createElement('div');
    button1.id = 'scriptBut';
    button1.innerHTML = "Скрипт";
    button1.style.marginRight = "15px";
    button1.style.display = 'none'
    button1.onclick = function () {
        document.getElementById('AF_helper').style.display = 'flex'
        this.style.display = 'none'
    }
    var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
    btnAdd.insertBefore(button1, btnAdd.children[0])



    function screenshots() {
        if (document.getElementsByClassName('expert-chat-display-inner')[0] != undefined)
            for (i = 0; document.getElementsByClassName('expert-chat-display-inner')[0].children[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-chat-display-inner')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
                    var div = document.getElementsByClassName('expert-chat-display-inner')[0].children[i]
                    var img = document.createElement('img')
                    img.src = div.querySelector('a').href
                    img.onclick = function () {
                        if (this.style.width == '500px')
                            this.style.width = '100px'
                        else
                            this.style.width = '500px'
                    }
                    img.style.width = '100px'
                    div.querySelector('a').replaceWith(img)
                }
            }
    }
    screenshots()
    setInterval(screenshots, 5000)
    function screenshots2() {
        if (document.getElementsByClassName('chat-messages')[0] != undefined)
            for (i = 0; document.getElementsByClassName('chat-messages')[0].children[i] != undefined; i++) {
                if (document.getElementsByClassName('chat-messages')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
                    var div = document.getElementsByClassName('chat-messages')[0].children[i]
                    var img = document.createElement('img')
                    img.src = div.querySelector('a').href
                    img.onclick = function () {
                        if (this.style.width == '500px')
                            this.style.width = '100px'
                        else
                            this.style.width = '500px'
                    }
                    img.style.width = '100px'
                    div.querySelector('a').replaceWith(img)
                }
            }
    }
    screenshots2()
    setInterval(screenshots2, 5000)

    document.getElementById('switcher').onclick = function () {
        if (this.innerHTML == "ВКЛ") {
            this.innerHTML = "ВЫКЛ";
            localStorage.setItem('audio', '0');
        } else {
            this.innerHTML = "ВКЛ";
            localStorage.setItem('audio', '1');
        }
    }


    if (localStorage.getItem('audio') == 0) {
        document.getElementById('switcher').innerHTML = "ВЫКЛ"
    }
    if (localStorage.getItem('audio') == 1) {
        document.getElementById('switcher').innerHTML = "ВКЛ"
    }

    if (localStorage.getItem('audio') != null) {
        if (localStorage.getItem('audio') == '0')
            document.getElementById('switcher').innerHTML = 'ВЫКЛ';
        else
            document.getElementById('switcher').innerHTML = 'ВКЛ';
    }
    addInfoUser.style.textAlign = "center"
    addInfoUser.style.color = "white"
    addInfoUser.style = "color: white; text-align: center; cursor: -webkit-grab;"
    loginer = document.getElementById('testUsers')
    loginer.appendChild(addInfoUser)


    loginer.onmouseup = function () { document.removeEventListener('mousemove', listener3); }
    var listener3 = function (e, a) {
        loginer.style.left = Number(e.clientX - myX3) + "px";
        loginer.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winTop3', String(Number(e.clientY - myY3)));
        localStorage.setItem('winLeft3', String(Number(e.clientX - myX3)));
    };
    loginer.childNodes[1].onmousedown = function (a) {
        window.myX3 = a.layerX;
        window.myY3 = a.layerY;
        document.addEventListener('mousemove', listener3);
    }
    loginer.onmouseup = function () { document.removeEventListener('mousemove', listener3); }

    user = "student"

    if (localStorage.getItem('msg') != null) {
        document.getElementById('msg').innerHTML = localStorage.getItem('msg')
    }
    if (localStorage.getItem('msg1') != null) {
        document.getElementById('msg1').innerHTML = localStorage.getItem('msg1')
    }

    getText()
}


function pageClick(pageId) {
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    for (i = 0; i < b.childElementCount; i++) {
        try {
            b.children[1].children[i].style.backgroundColor = '#768d87'
            document.getElementById(i + "page").style.display = 'none'
        } catch (e) { }
    }
    document.getElementById(pageId).style.backgroundColor = 'green'
    document.getElementById(pageId[0] + "page").style.display = ''
}

function bagPageButtons(butId) {
    txt = document.getElementById(butId).parentElement.childNodes[0].textContent
    for (l = 0; l < table.length; l++)
        if (table[l][0] == txt) {
            resetFlags()
            document.getElementById('inp').value = table[l][Number(butId[4]) + 1]
            break
        }
}
function transfPageButtons(textFromTable) {
    //resetFlags()
    phone = ""
    textFromTable = textFromTable.split('(phone)')
    if (textFromTable.length > 1) {
        if (document.getElementById('phone_tr').value == "")
            phone = document.getElementById('phone_tr').placeholder
        else
            phone = document.getElementById('phone_tr').value
        if (phone == "Телефон") {
            document.getElementById('inp').value = "Введите номер телефона"
            return
        }
    }
    textFromTable = textFromTable.join(phone)

    email = ""
    textFromTable = textFromTable.split('(email)')
    if (textFromTable.length > 1) {
        if (document.getElementById('email_tr').value == "")
            email = document.getElementById('email_tr').placeholder
        else
            email = document.getElementById('email_tr').value
        if (email == "Почта") {
            document.getElementById('inp').value = "Введите почту"
            return
        }
    }
    textFromTable = textFromTable.join(email)

    name = ""
    textFromTable = textFromTable.split('(name)')
    if (document.getElementsByClassName('expert-user_details-name').length != 0) {
        a = document.getElementsByClassName('expert-user_details-name')[0].innerText
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        if (textFromTable.length > 1 && cyrillicPattern.test(a[0])) {
            name = a[0]
        }
        else
            name = 'Имя'
    }
    else
        name = 'Имя'
    textFromTable = textFromTable.join(name)

    return textFromTable
}

async function buttonsFromDoc(butName) {
    if (butName == "ус+брауз")
        if (user == 'student')
            butName = "ус+брауз (У)"
        else
            butName = "ус+брауз (П)"

    if (butName == 'Привет') {
        a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if (document.getElementById('languageAF').innerHTML == "Русский")
            if (cyrillicPattern.test(a[0]) && document.getElementById('msg1').innerHTML == "Доработать")
                txt = "Здравствуйте, " + a[0] + "!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            else
                txt = "Здравствуйте!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
        else
            txt = "Hello." + '\r\n' + "Please wait a few minutes."

        if (txt == "Hello." + '\r\n' + "Please wait a few minutes.")
            sendAnswer(txt)
        else
            sendAnswerTemplate2(txt)
        return

    }

    msgFromTable(butName)
}

function servFromDoc(butName) { // отправка комента и сообщение со стораницы серверные
    but = butName
    msgFromTable(but) // вызов функции отправки сообщения
    if (document.getElementById('avariyalink').value !== null) // проверка есть ли значение в поле ссылки
        sendComment(document.getElementById('avariyalink').value); // вызов функции отправки комента
}

var bool = 0;
var table
function getText() {
    var app = localStorage.getItem('scriptAdr'),
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status == 200) {
            try {
                var r = JSON.parse(xhr.responseText),
                    result = r["result"];

                table = result;
                console.log('Обновили шаблоны')
                refreshTemplates()

            } catch (e) { console.log(e) }
        }


    }
    xhr.send()
}
function refreshTemplates() {
    setInterval(function () {
        if (document.getElementsByClassName('expert-user_details-list')[0] != undefined) {
            if (document.getElementById('phone_tr') != undefined) {
                phone = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText
                if (phone == "-") {
                    phone = ""
                    document.getElementById('phone_tr').placeholder = "Телефон"
                } else
                    document.getElementById('phone_tr').placeholder = phone
            }
            if (document.getElementById('email_tr') != undefined) {
                email = document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText
                if (email == "-") {
                    email = ""
                    document.getElementById('email_tr').placeholder = "Почта"
                }
                document.getElementById('email_tr').placeholder = email
            }
        } else {
            if (document.getElementById('email_tr') != undefined)
                document.getElementById('email_tr').placeholder = "Почта"
            if (document.getElementById('phone_tr') != undefined)
                document.getElementById('phone_tr').placeholder = "Телефон"
        }
    }, 1000)
    templatesAF = []
    while (document.getElementById('pages').children[0] != undefined)
        document.getElementById('pages').children[0].remove()
    for (i = 0; document.getElementById(i + 'page') != undefined; i++)
        document.getElementById(i + 'page').remove()
    while (document.getElementById('addTmp').children[0].children[0] != undefined)
        document.getElementById('addTmp').children[0].children[0].remove()
    countOfStr = 0
    countOfPages = 0
    pageName = ""
    addTmpFlag = 0
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    console.log(table)
    for (i = 0; i < table.length; i++) {
        c = table[i]
        switch (c[0]) {
            case '':
                addTmpFlag = 0
                countOfStr++
                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break

            case 'Additional templates':
                addTmpFlag = 1
                break
            case 'Страница':
                var newPageBut = document.createElement('button')
                newPageBut.innerText = c[1]
                pageType = c[2]
                newPageBut.style.marginRight = '4px'
                newPageBut.setAttribute('onclick', 'pageClick(this.id)')
                newPageBut.id = countOfPages + 'page_button'
                b.childNodes[3].appendChild(newPageBut)

                var newPage = document.createElement('div')
                newPage.id = countOfPages + 'page'
                b.appendChild(newPage)

                countOfPages++

                countOfStr = 1

                if (pageType == "Серверные") { // дорисоква инпута для ссылки на серверные
                    var newDiv = document.createElement('div')
                    newDiv.id = countOfPages + "page_" + countOfStr + "str"
                    newDiv.style.margin = "5px"

                    var newInputAlink = document.createElement('input')
                    newInputAlink.id = 'avariyalink'
                    newInputAlink.placeholder = 'Ссылка на трэд или Jira северных'
                    newInputAlink.autocomplete = 'off'
                    newInputAlink.type = 'text'
                    newInputAlink.style = 'text-align: center; width: 300px; color: black; margin-left: 20px'

                    newDiv.appendChild(newInputAlink)

                    b.lastElementChild.appendChild(newDiv)
                    countOfStr++
                }

                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break
            default:
                switch (pageType) {
                    case 'Баги':
                        var newString = document.createElement('p')
                        newString.style.color = 'white'
                        newString.style.margin = '0 0 5px 0'
                        newString.innerText = c[0]
                        for (j = 0; j < c[1]; j++) {
                            var newBut = document.createElement('button')
                            newBut.style.width = '20px'
                            newBut.style.marginRight = '4px'
                            newBut.id = countOfStr + 'str' + (j + 1)
                            newBut.innerText = (j + 1)
                            newBut.setAttribute('onclick', 'bagPageButtons(this.id)')
                            newString.appendChild(newBut)
                        }
                        countOfStr++
                        b.lastElementChild.lastElementChild.appendChild(newString)
                        break
                    case 'Шаблоны':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'buttonsFromDoc(this.innerText)')
                        if (newBut.innerText == 'Урок NS')
                            newBut.id = "NS"
                        if (newBut.innerText == 'ус+брауз (У)')
                            newBut.innerText = "ус+брауз"
                        if (newBut.innerText == 'ус+брауз (П)')
                            continue
                        if (addTmpFlag == 0)
                            b.lastElementChild.lastElementChild.appendChild(newBut)
                        else {
                            newBut.style.marginTop = '4px'
                            document.getElementById('addTmp').children[0].appendChild(newBut)
                        }
                        break
                    case 'Переводы':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Серверные': // обработка нажатия на кнопку на странице серверные
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'servFromDoc(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темы':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    default:
                        break
                }
                break
        }
    } document.getElementById('0page').ondblclick = function () {
        if (document.getElementById('addTmp').style.display == 'none') {
            document.getElementById('addTmp').style.display = '';
            document.getElementById('set_bar').style.display = 'none'
        }
        else
            document.getElementById('addTmp').style.display = 'none';
    }
    document.getElementById('0page_button').click()
}

function tagToChat(btnName) {
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            newTag(table[l][1])
            return
        }
    }
}

function newTag(valueId) {
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/logs') !== -1)
        chatId = document.location.pathname.split('/')[2]
    else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"topicId\",\"value\":\"" + valueId + "\"}]}",
        "method": "POST",
        "credentials": "include"
    });
}

function msgFromTable(btnName) {
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            if (table[l][8] == undefined || table[l][8] == null || table[l][8] == " " || table[l][8] == "") {
                console.log("Не значения тематики")
            } else {
                newTag(table[l][8])
            }
            if (document.getElementById('languageAF').innerHTML == "Русский") {
                if (table[l][1] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][2])
                }
                if (table[l][1] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][2]))
                }
                if (table[l][1] == "Шаблон") {
                    sendAnswerTemplate(table[l][2], table[l][3])
                }
                break
            } else {
                if (table[l][4] == "") {
                    document.getElementById('inp').value = "Нет такого шаблона"
                } else {
                    if (table[l][5] == "Быстрый шаблон") {
                        sendAnswerTemplate2(table[l][6])
                    }
                    if (table[l][5] == "Текст") {
                        sendAnswer(transfPageButtons(table[l][6]))
                    }
                    if (table[l][5] == "Шаблон") {
                        sendAnswerTemplate(table[l][6], table[l][7])
                    }
                    break
                }
            }
        }
    }
}

var templatesAF = []
async function loadTemplates(template, word) {
    return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[119638,121385,121300,119843,118980,120969,121387,121348,121386,119636,119844,119649,121286,121381,119841,120181,119646,121303,121343,121388,121162,121158,121346,121151,121341,121152,121342,121156,121347,121079,121163,121155,121344,121157,121345,121304,121340,121384]}",
        "method": "POST",
    })
        .then(response => response.json())
        .then(result => {
            var documentId = ""
            var serviceId = ""
            var queryId = ""
            var AFsessionId = ""
            var tmpText = ""
            var title = ""
            var accuracy = ""
            for (let i = 0; i < result.length; i++) {
                if (result[i].title == template) {
                    var b = result[i]
                    documentId = b.documentId
                    serviceId = b.serviceId
                    queryId = b.queryId
                    AFsessionId = b.sessionId
                    tmpText = b.text
                    tmpText = tmpText.split("<br>↵").join('\n')
                    tmpText = tmpText.split("&nbsp;").join(' ')
                    tmpText = tmpText.split("<br />").join('\n')
                    tmpText = tmpText.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
                    tmpText = tmpText.replace(/<\/?[^>]+>/g, '')
                    tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
                    title = b.title
                    title = title.split("\"").join("\\\"")
                    accuracy = b.accuracy

                    templatesAF.push([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                    return ([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                }
            }
        })
}

async function sendAnswerTemplate(template, word, flag = 0, newText = "", flag2 = 0) {
    var curTemplate
    if (flag == 1) {
        template = template_text
        word = word_text
    }
    for (let i = 0; i < templatesAF.length; i++) {
        if (template == templatesAF[i][0]) {
            curTemplate = templatesAF[i]
            break
        }
    }
    if (curTemplate == undefined)
        curTemplate = await loadTemplates(template, word)
    //addTimer()
    time = "12:00"
    var documentId = curTemplate[1]
    var serviceId = curTemplate[2]
    var queryId = curTemplate[3]
    var AFsessionId = curTemplate[4]
    var tmpText = transfPageButtons(curTemplate[5])
    var title = curTemplate[6]
    var accuracy = curTemplate[7]
    var values = await getInfo(0)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag2 == 0) {
        document.getElementById('inp').value = tmpText
        template_text = template
        word_text = word
        template_flag = 1
    }
    else if (tmpText == "")
        console.log('Шаблон не найден')
    else {
        if (flag == 1) {
            tmpText = newText
        }
        tmpText = tmpText.split("\"").join("\\\"")
        txt2 = tmpText.split('\n')
        txt3 = ""
        txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
        tmpText = txt3
        tmpText = tmpText.split('<p></p>').join("<p><br></p>")
        tmpText = tmpText.substr(0, tmpText.length - 2)

        resetFlags()
        refCurTimer(time)
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZ3ivsA3aU80QEBST",
            },
            "body": "------WebKitFormBoundaryZ3ivsA3aU80QEBST\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpText + "\",\"ext\":null,\"files\":[],\"suggestedAnswerDocId\":" + documentId + ",\"autoFaqServiceId\":" + serviceId + ",\"autoFaqSessionId\":\"" + AFsessionId + "\",\"autoFaqQueryId\":\"" + queryId + "\",\"autoFaqTitle\":\"" + title + "\",\"autoFaqQuery\":\"" + word + "\",\"autoFaqAccuracy\":" + accuracy + "}\r\n------WebKitFormBoundaryZ3ivsA3aU80QEBST--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    }
}
async function sendAnswer(txt, flag = 1, time = "12:00") {
    //addTimer()
    var values = await getInfo(flag)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    var txt2 = txt.split('\n')
    var txt3 = ""
    txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
    txt3 = txt3.split("\"").join("\\\"")
    txt3 = txt3.split('<p></p>').join("<p><br></p>")
    txt3 = txt3.substr(0, txt3.length - 2)
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag) {
        resetFlags()
        document.getElementById('inp').value = txt
    }
    else {
        refCurTimer(time)
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
            },
            "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
            "method": "POST",
            "credentials": "include"
        });
        resetFlags()
    }
}
async function getInfo(flag1 = 1) {
    var adr = document.location.href
    var adr1 = document.location.pathname
    adr1 = adr1.split('/')
    adr1 = adr1[3]
    var sessionId = ""
    for (let i = 0; i < chatsArray.length; i++) {
        if (chatsArray[i].id == adr1) {
            sessionId = chatsArray[i].sessionId
            return [adr, adr1, sessionId]
        }
    }
    if (adr1 == undefined)
        adr1 = ""
    if (document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/" + adr1)
            .then(response => response.json())
            .then(result => { sessionId = result.sessionId; chatsArray.push(result); localStorage.setItem('serviceIdGlob', result.serviceId) });
    }
    return [adr, adr1, sessionId]
}
async function sendComment(txt) {
    var values = await getInfo(0)
    adr = values[0]; adr1 = values[1]; uid = values[2]
    var txt2 = txt.split('\n').join('\\n')
    var txt2 = txt2.split("\"").join("\\\"")
    resetFlags()
    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
        "headers": {
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
        },
        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt2 + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
        "method": "POST",
        "credentials": "include"
    });
}
idk = 0
var tmrs = []
function addTimer() {
    tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
    if (tm.childNodes[0].childNodes[2] === undefined) {
        let serv = document.createElement('div')
        let serv2 = document.createElement('div')
        tm.childNodes[0].appendChild(serv)
        tm.childNodes[1].appendChild(serv2)
        tm.childNodes[0].childNodes[2].innerHTML = "12:00"
        let d = new Date()
        tmrs[idk] = ["12:00", tm.childNodes[1].childNodes[0].innerText, 1, number(d), ""]
        idk++
    }
}

function addTimers() {
    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    let d = new Date()
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        btns.childNodes[k]
        nm = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
        flag = 0
        for (i = 0; i < idk; i++) {
            name = tmrs[i][1]
            if (nm == name) {
                flag = 1
                break
            }
        }
        if (flag == 0)
            tmrs[idk++] = ["12:00", nm, 1, Number(d), ""]

        k++
    }

    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined) {
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].appendChild(document.createElement('div'))
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].appendChild(document.createElement('div'))
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.backgroundColor = 'red'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.color = 'white'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.textAlign = 'center'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.fontWeight = 'bold'
        }
        k++
    }
}

function refreshTimer() {
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    j = 0
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j] === undefined)
            break
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].className === "ant-empty ant-empty-normal")
            break;
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined)
            addTimers()
        name = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
        for (i = 0; i < idk; i++) {
            if (tmrs[i][1] == name) {
                btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML = tmrs[i][0]
                if (tmrs[i][0] == "00:00")
                    if (tmrs[i][2] == 1)
                        btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#ECEBBD"
                    else
                        btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FBCEB1"
                else
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "white"
                btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerText = tmrs[i][4]
                var cT = new Date();
                var curT1 = tmrs[i][3]
                var curT2 = Number(cT);
                var curT3 = (10 * 60) - Math.floor((curT2 - curT1) / 1000);
                if (curT3 < 0)
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FF47CA"
            }
        }
        j++
    }
}

function refCurTimer(time) {
    btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

    name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
    for (i = 0; i < idk; i++) {
        if (tmrs[i][1] == name) {
            tmrs[i][0] = time
            if (time == "1:00")
                tmrs[i][2] = 0
            else
                tmrs[i][2] = 1
            tmrs[i][3] = Number(new Date())
        }
    }
}

flag = 0
str = localStorage.getItem('sound_str');
if (str !== null && str !== "")
    audio = new Audio(str);
else
    audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");

var timeStart = new Date()
var studentIdSearch2 = 0
var studentIdSearch = 0
function startTimer() {
    var timeNow = new Date()
    if (timeNow - timeStart > 60 * 60 * 1000) {
        getText()
        timeStart = timeNow
    }
    for (i = 0; i < idk; i++) {
        var cT = new Date();
        var curTime1 = tmrs[i][3]
        var curTime2 = Number(cT);
        t = 0
        if (tmrs[i][2] == 0)
            t = 1
        else
            t = 12
        var curTime3 = (t * 60) - Math.floor((curTime2 - curTime1) / 1000);
        if (curTime3 < 0)
            continue
        var m = Math.floor(curTime3 / 60);
        var s = Math.floor(curTime3 % 60);
        var curTime4 = "";
        if (Number(m) < 10) {
            curTime4 = "0";
        }
        curTime4 = curTime4 + String(m) + ":";
        if (Number(s) < 10) {
            curTime4 = curTime4 + "0";
        }
        curTime4 = curTime4 + String(s);
        tmrs[i][0] = curTime4
    }
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && flag == 0) {
        requestsRed()
        flag = 1
    }
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1 && flag == 1)
        flag = 0

    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
        if (document.getElementsByClassName('ant-btn ant-btn-primary')[0] !== undefined)
            document.getElementsByClassName('ant-btn ant-btn-primary')[0].onclick = function () {
                refCurTimer('12:00')
            }
        refreshTimer()

    }

    if (document.getElementById('switcher').innerHTML == "ВКЛ")
        if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
            txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
            if (txt != "Взять запрос (0)")
                audio.play()
        }

    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
        vertical = user = ""
        nextClassMode = nextClassstudentId = ""
        nextClassModeId = ""
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "teacherVertical")
                vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "userType")
                user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText

            btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

            name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML")
                for (k = 0; k < idk; k++) {
                    if (tmrs[k][1] == name) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок ВУ урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок ВУ урок")
                            tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                        else
                            tmrs[k][4] = ""
                    }
                }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-mode") {
                nextClassMode = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                nextClassModeId = i
            }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
                nextClassstudentId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
        }
        if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2) { // поиск группы, с которой  сейчас идет занятие
            if (nextClassMode == 'group') {
                nextClassstudentId = nextClassstudentId.split(',')[0]
                document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group '
                function checkForLink() {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent == 'group ')
                        document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group'
                }
                setTimeout(checkForLink, 5000)
                document.getElementById('responseTextarea1').value = '{}'
                document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + nextClassstudentId
                document.getElementById('responseTextarea3').value = 'groupLessons1'
                document.getElementById('sendResponse').click()
                studentIdSearch2 = 0
                setTimeout(generateGroupLink, 1000)

                function generateGroupLink() {
                    let res = document.getElementById('responseTextarea1').getAttribute('groupLessons1')
                    if (res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
                        studentIdSearch2++
                        document.getElementById('responseTextarea1').removeAttribute('groupLessons1')
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
                                document.getElementById('responseTextarea1').value = '{}'
                                document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[studentIdSearch2]
                                document.getElementById('responseTextarea3').value = 'groupLessons1'
                                document.getElementById('sendResponse').click()
                                setTimeout(generateGroupLink, 1000)
                                return
                            }
                        }
                    }
                    groupId = res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0]
                    let button = document.createElement('a')
                    button.href = 'https://cabinet.skyeng.ru/admin/group/edit?id=' + groupId
                    button.target = '_blank'
                    button.textContent = groupId
                    button.style.marginRight = '15px'

                    document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
                    document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
                }
            }
        }

        addInfoUser.innerHTML = vertical + " + " + user
        if (document.getElementById('NS') != undefined) {
            if (vertical == "Math" || "math_flow") {
                //document.getElementById('math').style.backgroundColor = "green"
                document.getElementById('NS').style.backgroundColor = "#768d87"
            } else {
                document.getElementById('NS').style.backgroundColor = "green"
                //document.getElementById('math').style.backgroundColor = "#768d87"
            }
        }


        if (document.getElementById('NS') != undefined) {
            if (user == "student") {
                //document.getElementById('math').style.display = 
                document.getElementById('NS').style.display = "none"
            } else {
                //document.getElementById('math').style.display = 
                document.getElementById('NS').style.display = ""
            }
        }
        if (user == "teacher") {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.indexOf("%") === -1) {
                        id = Number.parseInt(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText)
                        document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText += " % 11 = " + (id % 11)
                    }
                    break;
                }
            }
        }

        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(button2)
                btn.appendChild(buttonservstud)

            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonhistory)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonmobpas)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(button3)
                btn.appendChild(buttonserv)
            }


            //    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
            //       btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
            //        btn.appendChild(buttonloc)
            //    }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonnextstudentid)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(button4)
                btn.appendChild(buttonservteach)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonnextteacherid)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttontechdatastudent)
                if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
                    btn.appendChild(buttonoutputfield)
            }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttontechdatateacher)
                if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2)
                    btn.appendChild(buttonoutputfield2)
            }
        }
    }

    if (localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2) {
        if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
            if (document.getElementsByClassName('expert-user_details-list')[1].children[0] != undefined) {
                if (document.getElementsByClassName('expert-user_details-list')[1].children[0].classList != "") {
                    let c = document.createElement('div')
                    let a = document.createElement('span')
                    a.textContent = 'Найти группу'
                    a.style.marginRight = '10px'
                    function generateGroupLink() {
                        let res = document.getElementById('responseTextarea1').getAttribute('groupLessons')
                        if (res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
                            studentIdSearch++
                            for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
                                    document.getElementById('responseTextarea1').value = '{}'
                                    document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[studentIdSearch]
                                    document.getElementById('responseTextarea3').value = 'groupLessons'
                                    document.getElementById('sendResponse').click()
                                    setTimeout(generateGroupLink, 1000)
                                    return
                                }
                            }
                        }
                        groupId = res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0]
                        let button = document.createElement('a')
                        button.href = 'https://cabinet.skyeng.ru/admin/group/edit?id=' + groupId
                        button.target = '_blank'
                        button.textContent = groupId
                        button.style.marginRight = '15px'

                        document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
                        document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
                    }
                    a.onclick = function () {
                        this.textContent = ''
                        this.parentElement.children[1].textContent = ''
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "userType") {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == 'student') {
                                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                            studentIdSearch = 0
                                            document.getElementById('responseTextarea1').value = '{}'
                                            document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                                            document.getElementById('responseTextarea3').value = 'groupLessons'
                                            document.getElementById('sendResponse').click()
                                            setTimeout(generateGroupLink, 1000)
                                        }
                                    }
                                } else {
                                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
                                            document.getElementById('responseTextarea1').value = '{}'
                                            document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[0]
                                            document.getElementById('responseTextarea3').value = 'groupLessons'
                                            document.getElementById('sendResponse').click()
                                            setTimeout(generateGroupLink, 1000)
                                        }
                                    }
                                }
                            }
                        }
                    }

                    let copyCrmFromName = document.createElement('span')
                    copyCrmFromName.textContent = ' 💾'
                    copyCrmFromName.style.cursor = "pointer"
                    document.getElementsByClassName('expert-user_details-name')[0].append(copyCrmFromName)
                    copyCrmFromName.onclick = function () {
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                let getidafuser = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
                                copyToClipboard1("https://crm2.skyeng.ru/persons/" + getidafuser)
                            }
                        }
                    }

                    let userTypeName = document.createElement('span')
                    userTypeName.id = "userTypeId"
                    document.getElementsByClassName('expert-user_details-name')[0].appendChild(userTypeName)
                    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "teacher") {
                            document.getElementById('userTypeId').innerText = "(П)"
                            document.getElementById('userTypeId').style.color = "#1E90FF"
                        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "student") {
                            document.getElementById('userTypeId').innerText = "(У)"
                            document.getElementById('userTypeId').style.color = "#DC143C"
                        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "parent") {
                            document.getElementById('userTypeId').innerText = "(РУ)"
                            document.getElementById('userTypeId').style.color = "#DC143C"
                        }
                    }

                    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) { //добавление кнопки Get Photo
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "teacher") {
                            for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                    document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].append(gettacherphoto)
                                }
                            }
                        }
                    }

                    c.append(a)

                    document.getElementsByClassName('expert-user_details-list')[1].prepend(c)
                }
            }
        }
    }


    if ((localStorage.getItem('scriptAdr') == TP_addr || localStorage.getItem('scriptAdr') == TP_addr2) && document.getElementById('continue_chat_button') == null && document.getElementsByClassName('expert-user_info_panel-footer-inner')[0] != undefined) {
        let btn1 = document.createElement('span');
        btn1.id = 'continue_chat_button'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn1)
        btn1.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Нецелевой</a>';
        btn1.setAttribute('onClick', 'newTaggg("untargeted");')

        let btn2 = document.createElement('span');
        btn2.id = 'operatormistake'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn2)
        btn2.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">ОшибкаКЦ</a>';
        btn2.setAttribute('onClick', 'newTaggg("oo");')

        let btn3 = document.createElement('span');
        btn3.id = 'SMS'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn3)
        btn3.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">СМС</a>';
        btn3.setAttribute('onClick', 'sendComment("#неприходитсмс");')

        let btn4 = document.createElement('span');
        btn4.id = 'math'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn4)
        btn4.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Мат-Т</a>';
        btn4.setAttribute('onClick', 'sendComment("#мат-телефон");')

        let btn5 = document.createElement('span');
        btn5.id = 'kodium'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn5)
        btn5.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Кодиум</a>';
        btn5.setAttribute('onClick', 'sendComment("#kodium");')

        let btn6 = document.createElement('span');
        btn6.id = 'SStudy'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn6)
        btn6.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Self-Study</a>';
        btn6.setAttribute('onClick', 'sendComment("#Self-Study");')

        let btn7 = document.createElement('span');
        btn7.id = 'Li'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn7)
        btn7.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Life</a>';
        btn7.setAttribute('onClick', 'sendComment("#Life");')

        let btn8 = document.createElement('span');
        btn8.id = 'KCfail'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn8)
        btn8.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">КЦ❗</a>';
        btn8.setAttribute('onClick', 'sendComment("#очередькц");')

        let btn9 = document.createElement('span');
        btn9.id = 'AFkal'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn9)
        btn9.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">AF</a>';
        btn9.setAttribute('onClick', 'sendComment("#задержкаАФ");')

        let btn10 = document.createElement('span');
        btn10.id = 'ishod'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn10)
        btn10.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Исход</a>';
        btn10.setAttribute('onClick', 'sendComment("#Передача на исход");')

        let btn11 = document.createElement('span');
        btn11.id = 'operatormistake'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn11)
        btn11.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Не помогли</a>';
        btn11.setAttribute('onClick', 'newTaggg("didnt_help");')
    }
}

function newTaggg(tagName) {
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
        "method": "POST",
        "credentials": "include"
    });
}


function addbuttonsintegration() {
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
            let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')
            //let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')[4].children[0].childNodes[1];
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonsetteacheridtouserfield)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonsetstudentidandservicetouserfield)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonsetteacheridfromstudent)
            for (let i = 0; i < categorylist.length; i++) {
                if (categorylist[i].innerText == "Техподдержка исход crm2") {
                    categorylist[i].style.color = "red";
                    categorylist[i].style.fontWeight = 600;
                    categorylist[i].style.textShadow = "1px 1px 1px black, 0 0 1em red";
                } else if (categorylist[i].innerText == "Техподдержка 2-я линия crm2") {
                    categorylist[i].style.color = "green";
                    categorylist[i].style.fontWeight = 600;
                    categorylist[i].style.textShadow = "1px 1px 1px black, 0 0 1em green";
                } else {
                    categorylist[i].style.color = "black";
                    categorylist[i].style.fontWeight = 400;
                    categorylist[i].style.textShadow = "0px 0px 0px black, 0 0 1em grey";
                }
            }
        }
    }
}
setInterval(addbuttonsintegration, 1000)

let getidusrteachreq;
buttonsetteacheridtouserfield.addEventListener('click', function () {
    for (let i = 1; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "teacher") {
            for (let j = 0; j < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; j++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].firstChild.textContent == "id") {
                    getidusrteachreq = document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].childNodes[1].innerText.split(' ')[0];
                    copyToClipboard1(getidusrteachreq)
                }
            }
        }
    }
})


let getidusrstud;
buttonsetstudentidandservicetouserfield.addEventListener('click', function () {
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
            getidusrstud = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getidusrstud)
    }
})

let getidusrsteach;
buttonsetteacheridfromstudent.addEventListener('click', function () {
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
            getidusrsteach = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getidusrsteach)
    }
})



function timerHideButtons() {
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        document.getElementsByClassName('ant-modal-content')[0].childNodes[1].children[0].appendChild(maskBackHide)

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Указать тему')
            for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
                if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Тех. поддержка V1" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Уроки V2" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Группа КМ (работает ежедневно с 8:00 до 21:55)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Обратная связь ТП" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "1 line (работает ежедневно с 9:00 до 22:00)")
                    document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Закрыть запрос?')
            for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
                if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Тех. поддержка V1")
                    document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') { // обращение к функции подсветки и добавления заметки
            let selectorList = document.querySelectorAll('.sc-fzpans');
            if (selectorList.length > 5) {
                for (let i = 0; i < selectorList.length; i++) {
                    if (selectorList[i].innerText == "Техподдержка исход crm2")
                        selectorList[i].style.backgroundColor = 'red'
                    if (selectorList[i].innerText == "Техподдержка 2-я линия crm2")
                        selectorList[i].style.backgroundColor = 'green'
                }
            }
            document.querySelectorAll('.ant-btn-primary')[1].onclick = function () { // добавление заметки куда создана задача
                let chechkvar = document.querySelectorAll('.ant-form-item-control-input-content');
                for (let i = 0; i < chechkvar.length; i++) {
                    if (chechkvar[i].innerText == "Техподдержка исход crm2") {
                        sendComment("Задача создана на Техподдержка исход crm2");
                    } else if (chechkvar[i].innerText == "Техподдержка 2-я линия crm2") {
                        sendComment("Задача создана на Техподдержка 2-я линия crm2");
                    } else if (chechkvar[i].innerText == "Skyes") {
                        sendComment("Задача создана на Skyes");
                    } else if (chechkvar[i].innerText == "Teachers Care crm2") {
                        sendComment("Задача создана на Teachers Care crm2");
                    } else if (chechkvar[i].innerText == "Вопросы эссе (UTC crm2)") {
                        sendComment("Задача создана на Вопросы эссе (UTC crm2)");
                    } else if (chechkvar[i].innerText == "Кризис менеджеры") {
                        sendComment("Задача создана на Кризис менеджеры");
                    } else if (chechkvar[i].innerText == "Teachers support") {
                        sendComment("Задача создана на Teachers support");
                    } else if (chechkvar[i].innerText == "Контент") {
                        sendComment("Задача создана на Контент");
                    } else if (chechkvar[i].innerText == "Словарь") {
                        sendComment("Задача создана на Словарь");
                    }
                }
            }
        }
    }
}

function requestsRed() {
    document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].addEventListener("DOMSubtreeModified", function () {
        txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
        if (txt != "Взять запрос (0)")
            document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "#F34723"
        else
            document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "white"
    });
}


const copyToClipboard1 = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
var operatorId = ""
async function whoAmI() {
    a = await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/tickets/assigned",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(a => b = a.json()).then(b => {
        let me = document.querySelector('.user_menu-dropdown-user_name');
        b.rows.forEach(s => {
            if (me && s.operator.fullName === me.innerText) {
                operatorId = s.operator.id
                console.log("Мой ID: " + operatorId)
            }
        })
    })
}

// Тут будет функция запуска получения информации о статистики

document.getElementById('getstatfromperiod').onclick = async function () {
    let datefrom = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto = document.getElementById('dateTo').value + "T20:59:59.059Z";
    let strnew = document.getElementById('chatsinfoout');
    let allchatcounttouched = document.getElementById('sumchatcounttouched')
    document.getElementById('getstatfromperiod').textContent = "Загрузка"
    allchatcounttouched.textContent = "Загрузка"
    let allchatcountclosed = document.getElementById('sumchatcountclosed')
    allchatcountclosed.textContent = "Загрузка"
    strnew.textContent = "Загрузка"
    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom + "\",\"tsTo\":\"" + dateto + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.json()).then(data => sumchatcounttouched = data)
    allchatcounttouched.innerText = "Количество пощупаных чатов: " + sumchatcounttouched.total;


    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom + "\",\"tsTo\":\"" + dateto + "\",\"usedStatuses\":[\"ClosedByOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r1 => r1.json()).then(data1 => sumchatcountclosed = data1)
    allchatcountclosed.innerText = "Количество закрытых чатов: " + sumchatcountclosed.total;

    // блок с расчетом КСАТ и чатов без тематики
    try {
        pagenew = 1
        let stringChatsWithoutTopic2 = ""
        csatScoreNew = 0
        csatCountNew = 0
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + datefrom + "\",\"tsTo\":\"" + dateto + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + pagenew + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat = 0
                let flagTopic = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            flagCsat = 1
                            if (r.payload != undefined)
                                if (r.payload.topicId != undefined)
                                    if (r.payload.topicId.value == "")
                                        flagTopic = 1
                        }
                    })
                if (flagCsat == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined) {
                            csatScoreNew += test.items[i].stats.rate.rate
                            csatCountNew++
                        }
                if (flagTopic == 1)
                    stringChatsWithoutTopic2 += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://hdi.skyeng.ru/autofaq/conversation/-11/' + test.items[i].conversationId + '" onclick="" style="color:#1E90FF;">' + test.items[i].conversationId + '</a></br>'
            }

            if (stringChatsWithoutTopic2 == "")
                stringChatsWithoutTopic2 = ' нет таких' + '<br>'

            strnew.innerHTML = 'Оценка: ' + Math.round(csatScoreNew / csatCountNew * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' + stringChatsWithoutTopic2

            if ((test.total / 100) > pagenew) {
                pagenew++;
            } else {
                document.getElementById('getstatfromperiod').textContent = "Получить статистику"
                break
            }
        }
    } catch {
        strnew.textContent = 'Что-то пошло не так. Сделайте скрин консоли и отправьте в канал chm-dev, пожалуйста'
    }
}


//Функция очищения выведенной информации после поиска 
document.getElementById('clearall').onclick = function () {
    document.querySelector('#sumchatcounttouched').innerText = ""
    document.querySelector('#sumchatcountclosed').innerText = ""
    document.querySelector('#chatsinfoout').innerText = ""
    document.querySelector('#lowCSATcount').innerText = ""
    document.querySelector('#lowCSATcount').style.display = "none"
    document.querySelector('#chatcommentsdata').innerText = ""
    document.querySelector('#chatcommentsdata').style.display = "none"
    document.querySelector('#commenttosearch').value = ""
}

document.getElementById('clearlessonstatus').onclick = function () {
    if (confirm("Вы уверены, что хотите очистить?")) {
        let getdateset = new Date()
        let getyearLS = getdateset.getFullYear();
        let getcurmonthLS = (getdateset.getMonth() + 1)
        let todayLS = getdateset.getDate();
        document.getElementById('statustable').innerText = "";
        document.getElementById('idteacherforsearch').value = "";
        document.getElementById('idstudentforsearch').value = "";
        document.getElementById('dateFromLS').value = getyearLS + "-" + getcurmonthLS + "-" + (todayLS - 1);
        document.getElementById('dateToLS').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
    } else {
        console.log("Canceled!")
    }
}

//Функция парсинга чатов по заданному коменту
let stringChatsWithComment;
document.getElementById('parsechat').onclick = async function () {
    stringChatsWithComment = "";
    let datefrom2 = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto2 = document.getElementById('dateTo').value + "T20:59:59.059Z";
    document.getElementById('parsechat').textContent = "Идёт поиск"
    try {
        pagecmt = 1
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom2 + "\",\"tsTo\":\"" + dateto2 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + pagecmt + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagComment = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(response => response.json()).then(data => {
                        for (let j = 0; j < data.messages.length; j++) {
                            if (data.messages[j].tpe == "OperatorComment" && data.messages[j].txt == document.getElementById('commenttosearch').value)
                                flagComment = 1
                        }
                        if (flagComment == 1)
                            stringChatsWithComment += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://hdi.skyeng.ru/autofaq/conversation/-11/' + data.id + '" onclick="" style="color:#1E90FF;" class="chatids">' + data.id + '</a>' + '<span class = "chatswithcomments" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + '</br>'

                    })
            }
            if (stringChatsWithComment == "")
                stringChatsWithComment = ' нет таких' + '<br>'

            document.querySelector('#chatcommentsdata').style.display = ""
            document.getElementById('chatcommentsdata').innerHTML = 'Чаты с найденными комментариями' + '<br>' + stringChatsWithComment;

            let chatscontainer = document.querySelectorAll('.chatswithcomments');
            let chatids = document.querySelectorAll('.chatids');
            for (let j = 0; j < chatscontainer.length; j++) {
                chatscontainer[j].onclick = function () {

                    if (document.querySelector('#hide_or_display').textContent != "свернуть") {
                        hide_or_display.click()
                        document.getElementById('chat_id').value = chatids[j].innerText;
                        search.click()
                    } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
                        document.getElementById('chat_id').value = chatids[j].innerText;
                        search.click()
                    }
                }
            }
            if ((test.total / 100) > pagecmt) {
                pagecmt++;
            } else {
                document.getElementById('parsechat').textContent = "Найти по комменту"
                break
            }

        }
    } catch {
        console.log('Что-то пошло не так.')
    }
}


//Функция проверки статусов урока
let arregetted;
document.getElementById('startlookstatus').onclick = function () {
    if (document.getElementById('idteacherforsearch').value != "") {
        document.querySelector('#statustable').style.display = "";
        document.querySelector('#statustable').innerText = "";
        let time_t = new Date();
        let ticherid = document.getElementById('idteacherforsearch').value;
        let uchenikid = document.getElementById('idstudentforsearch').value;
        uchenikid = uchenikid.trim();
        ticherid = ticherid.trim();
        let startdate = document.querySelector('#dateFromLS').value;
        startdate = startdate.split('-');
        startdate = Number(startdate[2]) + '-' + Number(startdate[1]) + '-' + Number(startdate[0]) + ' ' + 21;
        console.log("start date= " + startdate);
        let enddate = document.querySelector('#dateToLS').value;
        enddate = enddate.split('-');
        enddate = Number(enddate[2]) + '-' + Number(enddate[1]) + '-' + Number(enddate[0]) + ' ' + 21;
        console.log("end date= " + enddate);

        document.getElementById('responseTextarea1').value = `{
  "headers": {
    "accept": "*/*",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://timetable.skyeng.ru/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "from=${startdate}:00:00&to=${enddate}:00:00&offset=0&filters[teacherIds][]=${ticherid}&callback=getJSONP",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://timetable.skyeng.ru/api/teachers/search";
        document.getElementById('responseTextarea3').value = 'getlessonstatusinfos'
        document.getElementById('sendResponse').click()



        setTimeout(function () {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://timetable.skyeng.ru/api/teachers/search";
            document.getElementById('responseTextarea3').value = 'getlessonstatusinfos'
            document.getElementById('sendResponse').click()

            arregetted = document.getElementById('responseTextarea1').getAttribute('getlessonstatusinfos');
            arregetted = JSON.parse(arregetted);
            if (arregetted[0].result[0].classes != null || arregetted[0].result[0].classes !== undefined) {
                for (let i = 0; i < arregetted[0].result[0].classes.length; i++) {
                    if (arregetted[0].result[0].classes[i].studentId == uchenikid) {

                        let text = arregetted[0].result[0].classes[i].studentId + ' | ' + new Date(arregetted[0].result[0].classes[i].startAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' }).slice(0, 17)

                        //	new Date(arregetted[0].result[0].classes[i].startAt).toLocaleTimeString("ru-RU", {timeZone: 'Europe/Moscow'}).slice(0,5)

                        if (arregetted[0].result[0].classes[i].classStatus !== undefined) {
                            text = text + ' | status: ' + arregetted[0].result[0].classes[i].classStatus.status;
                            text = text + ' | at: ' + new Date(arregetted[0].result[0].classes[i].classStatus.createdAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                            text = text + ' | by: ' + arregetted[0].result[0].classes[i].classStatus.createdByUserId;
                            text = text + ' | type: ' + arregetted[0].result[0].classes[i].type;
                            if (arregetted[0].result[0].classes[i].classStatus.comment !== '') {
                                text = text + ' | comment: ' + arregetted[0].result[0].classes[i].classStatus.comment;
                            }
                        } else if (arregetted[0].result[0].classes[i].removedAt) {
                            text = text + ' | removed | at: ' + new Date(arregetted[0].result[0].classes[i].removedAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                        }

                        let tempor = document.createElement('input');
                        document.getElementById('statustable').append(tempor);
                        tempor.setAttribute('type', 'text');
                        tempor.setAttribute('style', 'width: 99.4%; height: 20px; color: bisque; font-weight:500; background-color:#464451;border-style:double;');
                        tempor.value = text;
                        //    console.log(text);
                    } else if (document.getElementById('idstudentforsearch').value == "") {
                        let text = arregetted[0].result[0].classes[i].studentId + ' | ' + new Date(arregetted[0].result[0].classes[i].startAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' }).slice(0, 17)

                        //	new Date(arregetted[0].result[0].classes[i].startAt).toLocaleTimeString("ru-RU", {timeZone: 'Europe/Moscow'}).slice(0,5)

                        if (arregetted[0].result[0].classes[i].classStatus !== undefined) {
                            text = text + ' | status: ' + arregetted[0].result[0].classes[i].classStatus.status;
                            text = text + ' | at: ' + new Date(arregetted[0].result[0].classes[i].classStatus.createdAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                            text = text + ' | by: ' + arregetted[0].result[0].classes[i].classStatus.createdByUserId;
                            text = text + ' | type: ' + arregetted[0].result[0].classes[i].type;
                            if (arregetted[0].result[0].classes[i].classStatus.comment !== '') {
                                text = text + ' | comment: ' + arregetted[0].result[0].classes[i].classStatus.comment;
                            }
                        } else if (arregetted[0].result[0].classes[i].removedAt) {
                            text = text + ' | removed | at: ' + new Date(arregetted[0].result[0].classes[i].removedAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                        }

                        let tempor = document.createElement('input');
                        document.getElementById('statustable').append(tempor);
                        tempor.setAttribute('type', 'text');
                        tempor.setAttribute('style', 'width: 99.4%; height: 20px; color: bisque; font-weight:500; background-color:#464451;border-style:double;');
                        tempor.value = text;
                    }
                }
            } else {
                alert("Уроков нет");
            }

            document.getElementById('responseTextarea1').removeAttribute('getlessonstatusinfos');


        }, 500)

    } else {
        alert("Введите ID учителя в поле");
    }

}


//Функция получения чатов с низким КСАТ
let stringChatsWithLowCsat;
document.getElementById('getlowcsat').onclick = async function () {
    let datefrom1 = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto1 = document.getElementById('dateTo').value + "T20:59:59.059Z";
    let strcsatnew = document.getElementById('lowCSATcount');
    strcsatnew.textContent = "Загрузка"
    document.getElementById('getlowcsat').textContent = "Загрузка";

    // блок с расчетом КСАТ и чатов без тематики
    try {
        pagenewlowcsat = 1
        stringChatsWithLowCsat = "";
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + datefrom1 + "\",\"tsTo\":\"" + dateto1 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + pagenewlowcsat + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat1 = 0
                csatScoreNewLow = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            flagCsat1 = 1
                        }
                    })
                if (flagCsat1 == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined && test.items[i].stats.rate.rate < 4) {
                            csatScoreNewLow = 1;
                        }

                if (csatScoreNewLow == 1)
                    stringChatsWithLowCsat += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://hdi.skyeng.ru/autofaq/conversation/-11/' + test.items[i].conversationId + '" onclick="" style="color:#1E90FF;" class = "csatchatids">' + test.items[i].conversationId + '</a>' + '<span class = "lowcsatschats" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + '</br>'

            }

            if (stringChatsWithLowCsat == "")
                stringChatsWithLowCsat = ' нет таких' + '<br>'

            document.querySelector('#lowCSATcount').style.display = ""
            strcsatnew.innerHTML = 'Чаты с плохими оценками: (открывать в режиме инкогнито!) ' + '<br>' + stringChatsWithLowCsat

            let csatcontainer = document.querySelectorAll('.lowcsatschats');
            let csatchattids = document.querySelectorAll('.csatchatids');
            for (let j = 0; j < csatcontainer.length; j++) {
                csatcontainer[j].onclick = function () {

                    if (document.querySelector('#hide_or_display').textContent != "свернуть") {
                        hide_or_display.click()
                        document.getElementById('chat_id').value = csatchattids[j].innerText;
                        search.click()
                    } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
                        document.getElementById('chat_id').value = csatchattids[j].innerText;
                        search.click()
                    }
                }
            }



            if ((test.total / 100) > pagenewlowcsat) {
                pagenewlowcsat++;
            } else {
                document.getElementById('getlowcsat').textContent = "Чаты с КСАТ<4"
                break
            }
        }
    } finally {
        document.getElementById('getlowcsat').textContent = "Чаты с КСАТ<4"
        console.log('Что-то пошло не так.')
    }
}

document.getElementById('getfile').onclick = function () {
    if (stringChatsWithComment != null || stringChatsWithComment != undefined) {
        var blob = new Blob([stringChatsWithComment], { type: "text/plain" });
        var link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", "FoundComments.html");
        link.click();
    } else if (stringChatsWithLowCsat != null || stringChatsWithLowCsat != undefined) {
        var blob = new Blob([stringChatsWithLowCsat], { type: "text/plain" });
        var link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", "LowCSAT.html");
        link.click();
    }
}

async function sendAnswerTemplate2(word, flag = 0) {
    var tmpTxt = ""
    var adr = `https://skyeng.autofaq.ai/tickets/assigned/`
    if (word.length < 50)
        try {
            a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": adr,
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "{\"query\":\"" + word + "\",\"answersLimit\":25,\"autoFaqServiceIds\":[121388, 121384]}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(a => b = a.json()).then(result => result.forEach(k => {
                if (k.title == word)
                    tmpTxt = k.text
            }))
            tmpTxt = tmpTxt.split("<br>↵").join('\n')
            tmpTxt = tmpTxt.split("&nbsp;").join(' ')
            tmpTxt = tmpTxt.split("<br />").join('\n')
            tmpTxt = tmpTxt.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
            tmpTxt = tmpTxt.replace(/<\/?[^>]+>/g, '')
            tmpTxt = tmpTxt.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
        } catch (e) { }
    if (tmpTxt == "")
        tmpTxt = word
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag == 0) {
        document.getElementById('inp').value = tmpTxt
        template_flag = 1
        template_flag2 = 1
    } else {
        tmpTxt = tmpTxt.split("\"").join("\\\"")
        tmpTxt2 = tmpTxt.split('\n')
        tmpTxt3 = ""
        tmpTxt2.forEach(el => tmpTxt3 += "<p>" + el + "</p>\\n")
        tmpTxt = tmpTxt3
        tmpTxt = tmpTxt.split('<p></p>').join("<p><br></p>")
        tmpTxt = tmpTxt.substr(0, tmpTxt.length - 2)
        var values = await getInfo(0)
        refCurTimer("12:00")
        var adr = values[0]; var adr1 = values[1]; var uid = values[2]
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": adr,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpTxt + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        resetFlags()
        flagggg = 0
    }
}
function resetFlags() {
    template_flag = 0
    template_flag2 = 0
}
async function checkHistory(id) {
    var date = new Date()
    var date2 = new Date()
    date2.setTime(date - 8 * 60 * 60 * 1000)

    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()
    if (date.getHours() < 10)
        hours = '0' + date.getHours()
    else
        hours = date.getHours()
    if (date.getMinutes() < 10)
        minutes = '0' + date.getMinutes()
    else
        minutes = date.getMinutes()
    if (date.getSeconds() < 10)
        seconds = '0' + date.getSeconds()
    else
        seconds = date.getSeconds()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    if (date2.getHours() < 10)
        hours2 = '0' + date2.getHours()
    else
        hours2 = date2.getHours()
    if (date2.getMinutes() < 10)
        minutes2 = '0' + date2.getMinutes()
    else
        minutes2 = date2.getMinutes()
    if (date2.getSeconds() < 10)
        seconds2 = '0' + date2.getSeconds()
    else
        seconds2 = date2.getSeconds()

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2 + ".000z"
    count = -1
    serviceId = localStorage.getItem('serviceIdGlob')
    a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"" + serviceId + "\",\"mode\":\"Json\",\"channelUserIds\":[\"" + id + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(a => b = a.json()).then(b => { count = b.items.length })
    return count
}

async function getNotGoods(stringDate) {

    async function goNotgood(list, list2, date1, date2) {
        var text = ""
        var text2 = "Дата: " + stringDate2 + "\n"
        var page = 1
        for (m = -1; m < list.length; m++) {
            if (page == 2)
                m--
            a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://skyeng.autofaq.ai/logs",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + list[m] + "\"],\"tsFrom\":\"" + date1 + "\",\"tsTo\":\"" + date2 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(a => b = a.json().then(array => {
                array1 = array
                n = 1
                array1.items.forEach(a => {
                    if (a.stats.rate != undefined)
                        if (a.stats.rate.rate != undefined) {
                            if (a.stats.rate.rate < 4) {
                                text += stringDate2 + "	" + list2[m] + "	https://hdi.skyeng.ru/autofaq/conversation/-11/" + a.conversationId + "	" + a.stats.rate.rate + "\n"
                                if (n == 1)
                                    text2 += "\nАгент: `" + list2[m] + "` C	S	A		T =\n "
                                text2 += "=HYPERLINK(\"https://hdi.skyeng.ru/autofaq/conversation/-11/" + a.conversationId + "\"; \"Нотгуд №" + n + "\" 	 (	оценка " + a.stats.rate.rate + ") - \n"
                                n++
                            }
                        }
                })
                if (array1.total > 100)
                    if (page == 2)
                        page = 1
                    else
                        page = 2
            }))
        }
        console.log(text)
        console.log(text2)
    }

    var operatorId = []
    var operatorNames = []
    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs/c6fe512d-6f79-4dec-b272-baba807d7387",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(result => b = result.json()).then(b => b.rows.forEach(k => {
        if (k.operator != null)
            if (k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == "ТП") {
                operatorId.push(k.operator.id)
                operatorNames.push(k.operator.fullName.split('-')[1])
            }
    }))

    list = operatorId
    list2 = operatorNames

    stringDate2 = stringDate
    stringDate = stringDate.split(".")
    stringDate[1]--
    var date = new Date(stringDate[2], stringDate[1], stringDate[0])
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"
    goNotgood(list, list2, firstDate, secondDate)
}



function customTemplates(language = '') {
    if (localStorage.getItem('winCstmTmpsTop') == null) {
        localStorage.setItem('winCstmTmpsTop', '120');
        localStorage.setItem('winCstmTmpsLeft', '295');
    }
    if (localStorage.getItem('cntTmplts' + language) == null)
        localStorage.setItem('cntTmplts' + language, 0)
    if (document.getElementById('cstmTmplates') == undefined) {
        var cstmTmp = document.createElement('div')
        cstmTmp.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winCstmTmpsTop') + 'px; left: ' + localStorage.getItem('winCstmTmpsLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; border-radius:5px; border:1px solid #768d87; ';
        cstmTmp.id = 'cstmTmplates'
        cstmTmp.style.display = 'none'
        document.body.append(cstmTmp);
    } else {
        cstmTmp = document.getElementById('cstmTmplates')
        while (document.getElementById('cstmTmplates').children[0] != undefined)
            document.getElementById('cstmTmplates').children[0].remove()
    }
    countOfTemplates = localStorage.getItem('cntTmplts' + language)


    var buttonOpenTmpWindow = document.createElement('button')
    buttonOpenTmpWindow.innerHTML = 'tmps'
    buttonOpenTmpWindow.title = 'Открывает окно для добавления своих шаблонов либо информации в ячейки в этом поле'
    buttonOpenTmpWindow.style.marginLeft = '7px'
    buttonOpenTmpWindow.onclick = function () {
        var a = document.getElementById('cstmTmplates')
        if (a.style.display == '')
            a.style.display = 'none'
        else
            a.style.display = ''
    }

    var tmpA = document.getElementById('AF_helper').children[0].children[0].children[0].children[0]
    if (tmpA.children[1].innerHTML != 'tmps')
        tmpA.insertBefore(buttonOpenTmpWindow, tmpA.children[1])

    tmpA.children[2].style.marginLeft = '40px'
    //	tmpA.children[3].style = 'float:right'


    function refreshHotTmps() {
        while (document.getElementById('6str').children[0] != undefined)
            document.getElementById('6str').children[0].remove()
        countOfTemplates = localStorage.getItem('cntTmplts' + language)
        for (var i = 1; i <= countOfTemplates; i++) {
            var j = Number(i) - 1
            if (document.getElementById('cstmTmplates').children[j].children[0].checked) {
                if (localStorage.getItem('tmp_name_' + language + i) == null || localStorage.getItem('tmp_name_' + language + i) == "")
                    continue
                var a = document.getElementById('6str')
                var newBut = document.createElement('button')
                newBut.setAttribute('template', 'template_' + language + i)
                newBut.style.marginRight = '5px'
                newBut.style.marginTop = '5px'
                newBut.innerHTML = localStorage.getItem('tmp_name_' + language + i)
                a.appendChild(newBut)
                newBut.onclick = function () {
                    var text = localStorage.getItem(this.getAttribute('template')).split('\\n').join('\n')
                    sendAnswer(text)
                }
            }
        }
    }

    function addNewString(index) {

        var newDiv = document.createElement('div')
        newDiv.style.margin = '5px'
        newDiv.setAttribute('inp', 'cstmTmpInp' + language + index)
        newDiv.setAttribute('tmp', 'template_' + language + index)
        newDiv.setAttribute('index', index)

        var template = localStorage.getItem('template_' + language + index)
        var newInput = document.createElement('input')
        newInput.id = 'cstmTmpInp' + language + index
        newInput.value = template == undefined ? "" : template
        newInput.style.marginRight = '5px'
        newInput.style.width = '500px'

        var template = localStorage.getItem('tmp_name_' + language + index)
        var newInputTmpName = document.createElement('input')
        newInputTmpName.value = template == undefined ? "" : template
        newInputTmpName.style.marginRight = '5px'
        newInputTmpName.style.width = '150px'

        var newButton = document.createElement('button')
        newButton.style.marginRight = '5px'
        newButton.textContent = 'save'
        newButton.onclick = function () {
            localStorage.setItem(this.parentElement.getAttribute('tmp'), document.getElementById(this.parentElement.getAttribute('inp')).value)
            localStorage.setItem('tmp_name_' + language + index, this.parentElement.children[1].value)
            refreshHotTmps()
        }
        var newButton2 = document.createElement('button')
        newButton2.style.marginRight = '5px'
        newButton2.textContent = 'send'
        newButton2.onclick = function () {
            document.getElementById('inp').value = document.getElementById(this.parentElement.getAttribute('inp')).value.split('\\n').join('\n')
            this.parentElement.parentElement.style.display = 'none'
        }

        var newButton3 = document.createElement('button')
        newButton3.style.marginRight = '5px'
        newButton3.textContent = 'delete'
        newButton3.onclick = function () {
            for (var i = this.parentElement.getAttribute('index'); i < countOfTemplates; i++) {
                var n = Number(i) + 1
                localStorage.setItem('template_' + language + i, localStorage.getItem('template_' + language + n))
                localStorage.setItem('checkbox_' + language + i, localStorage.getItem('checkbox_' + language + n))
                localStorage.setItem('tmp_name_' + language + i, localStorage.getItem('tmp_name_' + language + n))
            }
            localStorage.removeItem('template_' + language + countOfTemplates)
            localStorage.removeItem('checkbox_' + language + countOfTemplates)
            localStorage.removeItem('tmp_name_' + language + countOfTemplates)
            countOfTemplates--;
            localStorage.setItem('cntTmplts' + language, countOfTemplates)
            while (document.getElementById('cstmTmplates').children[0] != undefined)
                document.getElementById('cstmTmplates').children[0].remove()
            customTemplates(language)
        }


        var buttonSortUp = document.createElement('button')
        buttonSortUp.innerHTML = '↑'
        buttonSortUp.onclick = function () {
            var index = this.parentElement.getAttribute('index')
            if (index == 1)
                return
            var index2 = Number(index) - 1

            var tmp1 = localStorage.getItem('template_' + language + index)
            localStorage.setItem('template_' + language + index, localStorage.getItem('template_' + language + index2))
            localStorage.setItem('template_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('checkbox_' + language + index)
            localStorage.setItem('checkbox_' + language + index, localStorage.getItem('checkbox_' + language + index2))
            localStorage.setItem('checkbox_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('tmp_name_' + language + index)
            localStorage.setItem('tmp_name_' + language + index, localStorage.getItem('tmp_name_' + language + index2))
            localStorage.setItem('tmp_name_' + language + index2, tmp1)
            if (document.getElementById('languageAF').innerHTML == "Русский")
                customTemplates()
            else
                customTemplates('en_')
        }

        var buttonSortDown = document.createElement('button')
        buttonSortDown.innerHTML = '↓'
        buttonSortDown.style.marginRight = '5px'
        buttonSortDown.onclick = function () {
            var index = this.parentElement.getAttribute('index')
            if (index == countOfTemplates)
                return
            var index2 = Number(index) + 1

            var tmp1 = localStorage.getItem('template_' + language + index)
            localStorage.setItem('template_' + language + index, localStorage.getItem('template_' + language + index2))
            localStorage.setItem('template_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('checkbox_' + language + index)
            localStorage.setItem('checkbox_' + language + index, localStorage.getItem('checkbox_' + language + index2))
            localStorage.setItem('checkbox_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('tmp_name_' + language + index)
            localStorage.setItem('tmp_name_' + language + index, localStorage.getItem('tmp_name_' + language + index2))
            localStorage.setItem('tmp_name_' + language + index2, tmp1)
            if (document.getElementById('languageAF').innerHTML == "Русский")
                customTemplates()
            else
                customTemplates('en_')
        }

        var newcheckbox = document.createElement('input')
        newcheckbox.type = 'checkbox'
        newcheckbox.style.marginRight = '5px'
        newcheckbox.checked = localStorage.getItem('checkbox_' + language + index) == 'true' ? 1 : 0
        newcheckbox.onclick = function () {
            localStorage.setItem('checkbox_' + language + index, this.checked)
        }

        newDiv.append(newcheckbox)
        newDiv.append(newInputTmpName)
        newDiv.append(buttonSortUp)
        newDiv.append(buttonSortDown)
        newDiv.append(newButton3)
        newDiv.append(newButton)
        newDiv.append(newInput)
        newDiv.append(newButton2)
        cstmTmp.insertBefore(newDiv, cstmTmp.lastElementChild)
    }

    var newDiv = document.createElement('div')
    newDiv.style = 'cursor: -webkit-grab;'
    newDiv.style.margin = '5px'
    newDiv.style.textAlign = 'center'
    var addTmpl = document.createElement('button')
    addTmpl.textContent = 'Добавить шаблон'
    addTmpl.style.marginRight = '5px'
    addTmpl.onclick = function () {
        countOfTemplates++
        localStorage.setItem('cntTmplts' + language, countOfTemplates)
        localStorage.setItem('template_' + language + countOfTemplates, "")
        localStorage.setItem('checkbox_' + language + countOfTemplates, false)
        localStorage.setItem('tmp_name_' + language + countOfTemplates, "")
        addNewString(countOfTemplates)
    }
    var saveAllTmp = document.createElement('button')
    saveAllTmp.textContent = 'Сохранить всё'
    saveAllTmp.style.marginRight = '5px'
    saveAllTmp.onclick = function () {
        for (var i = 1; i <= countOfTemplates; i++) {
            localStorage.setItem('template_' + language + i, document.getElementById('cstmTmpInp' + language + i).value)
            localStorage.setItem('checkbox_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[0].checked)
            localStorage.setItem('tmp_name_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[1].value)
            refreshHotTmps()
        }
    }

    var but = document.createElement('button')
    but.innerHTML = 'hide'
    but.onclick = function () {
        this.parentElement.parentElement.style.display = 'none'
    }
    but.style.float = 'right'

    newDiv.append(saveAllTmp)
    newDiv.append(addTmpl)
    newDiv.append(but)
    cstmTmp.append(newDiv)

    if (countOfTemplates > 0)
        for (i = 1; i <= countOfTemplates; i++)
            addNewString(i)
    refreshHotTmps()

    var listener3 = function (e, a) {
        cstmTmp.style.left = Number(e.clientX - myX3) + "px";
        cstmTmp.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winCstmTmpsTop', String(Number(e.clientY - myY3)));
        localStorage.setItem('winCstmTmpsLeft', String(Number(e.clientX - myX3)));
    };

    cstmTmp.lastElementChild.onmousedown = function (a) {
        window.myX3 = a.layerX;
        window.myY3 = a.layerY;
        document.addEventListener('mousemove', listener3);
    }
    cstmTmp.onmouseup = function () { document.removeEventListener('mousemove', listener3); }

    document.getElementById('languageAF').onclick = function () {
        if (this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
            document.getElementById('AF_helper').style.background = "#EBC7DF"
            customTemplates('en_')
        } else {
            this.innerHTML = "Русский";
            document.getElementById('AF_helper').style.background = "#464451"
            customTemplates()
        }
    }
}

async function getStats() {           // функция получения статистики за день (сколько чатов закрыто, пощупано, время работы)
    let table = document.createElement('table')
    table.style = 'table-layout: auto; width:750px;'
    table.style.textAlign = 'center'
    table.id = 'tableStats'
    let columnNames = ["Оператор", "Закрыл запросов", "Пощупал чатов", "Среднее время ожидания", "Среднее время работы"]
    let trHead = document.createElement('tr')
    for (let i = 0; i < columnNames.length; i++) {
        var th = document.createElement('th')
        trHead.append(th)
        th.textContent = columnNames[i]
    }

    var time = new Date()
    var time2 = new Date()
    time2.setTime(time - 24 * 60 * 60 * 1000)
    var date1 = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
    var date2 = time2.getDate() < 10 ? '0' + time2.getDate() : time2.getDate()
    var month1 = Number(time.getMonth() + 1) < 10 ? '0' + Number(time.getMonth() + 1) : Number(time.getMonth() + 1)
    var month2 = Number(time2.getMonth() + 1) < 10 ? '0' + Number(time2.getMonth() + 1) : Number(time2.getMonth() + 1)
    var str1 = time.getFullYear() + "-" + month1 + "-" + date1 + "T21%3A00%3A00Z"
    var str2 = time2.getFullYear() + "-" + month2 + "-" + date2 + "T21%3A00%3A00Z"
    var array = []
    await fetch("https://skyeng.autofaq.ai/api/reason8/reports/operatorActivityTable?dateFrom=" + str2 + "&dateTo=" + str1, {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/reports/operator-activity",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(response => b = response.json().then(b => b.rows.forEach(k => {
        if (k.operator.indexOf('ТП') != -1) {
            array.push(k)
        }
    })))
    array.sort(function (a, b) {
        return b.conversationClosed - a.conversationClosed;
    });

    var operatorId = []
    var operatorNames = []
    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(result => b = result.json()).then(b => b.rows.forEach(k => {
        if (k.operator != null)
            if (k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == "ТП") {
                operatorId.push(k.operator.id)
                operatorNames.push(k.operator.fullName)
            }
    }))

    var date = new Date()
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    var secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    var firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"

    var operatorChatCount = []
    for (var l = 0; l < operatorId.length; l++) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/logs",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId[l] + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(a => a.json()).then(b => operatorChatCount[l] = b.total)
    }

    let tbody = document.createElement('tbody')
    for (let i = 0; i < array.length; i++) {
        var tr = document.createElement('tr')
        for (let j = 0; j < 5; j++) {
            var td = document.createElement('td')
            switch (j) {
                case 0:
                    td.textContent = array[i].operator;
                    td.style = 'text-align: left; padding-left: 50px'
                    break;
                case 2:
                    for (let j = 0; j < operatorNames.length; j++)
                        if (array[i].operator == operatorNames[j]) {
                            td.textContent = operatorChatCount[j]
                            break
                        }
                    break;
                case 1:
                    td.textContent = array[i].conversationClosed;
                    break;
                case 3:
                    var averageAnswerTime = Math.floor(array[i].averageAnswerTime / 1000)
                    averageAnswerTime = averageAnswerTime < 60 ? '00:' + averageAnswerTime : Math.floor(averageAnswerTime / 60) + ':' + ((averageAnswerTime % 60) < 10 ? '0' + (averageAnswerTime % 60) : (averageAnswerTime % 60))
                    td.textContent = averageAnswerTime;
                    break;
                case 4:
                    var averageHandlingTime = Math.floor(array[i].averageHandlingTime / 1000)
                    averageHandlingTime = averageHandlingTime < 60 ? averageHandlingTime : Math.floor(averageHandlingTime / 60) + ':' + ((averageHandlingTime % 60) < 10 ? '0' + (averageHandlingTime % 60) : (averageHandlingTime % 60))
                    td.textContent = averageHandlingTime;
                    break;
            }
            tr.append(td)
        }
        tbody.append(tr)
    }


    for (let i = 0; i < tbody.childElementCount; i++) {
        for (let j = 0; j < operatorNames.length; j++)
            if (tbody.children[0].children[0] == operatorNames.length) {
                let tr = document.createElement('tr')
                tr.textContent = operatorChatCount[j]
                tbody.children[0].insertBefore(tbody.children[0].children[2])
            }
    }

    table.append(trHead)
    table.append(tbody)

    let newDivForStats = document.createElement('div')
    newDivForStats.append(table)
    document.getElementById('root').children[0].children[1].children[0].children[1].append(newDivForStats)

    let str = document.createElement('button') // кнопка для запуска проверки КСАТ и тематики чатов 
    str.textContent = 'Проверить CSAT + тематики чатов'
    str.id = 'buttonCheckStats'
    str.style.marginLeft = '50px'
    str.onclick = checkCSAT
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)

    let quechatscount = document.createElement('button') // кнопка для запуска подсчета количества чатов в очереди ТП и КЦ
    quechatscount.textContent = 'Узнать кол-во чатов в очереди'
    quechatscount.id = 'buttonQueChatsCount'
    quechatscount.style.marginLeft = '50px'
    quechatscount.onclick = checkChatCountQue
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(quechatscount)

    document.getElementById('buttonGetStat').textContent = 'Скрыть стату'
    document.getElementById('buttonGetStat').removeAttribute('disabled')
}

let chatneraspcount;
let chattpquecount;
async function checkChatCountQue() { // функция проверки количества чатов в очереди в КЦ и ТП 
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonQueChatsCount').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
    var date = new Date()
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059Z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + (date2.getDate()) // убрал -1 
    else
        day2 = (date2.getDate() - 1)

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000Z"
    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.text()).then(result => {
        setTimeout(function () {
            chatneraspcount = result.match(/total.*?(\d+).*/)[1];
            //		str.innerHTML = 'Количество чатов в нераспределенной очереди: ' + newres;
        }, 1000)
    })

    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"usedAutoFaqKbIds\":[\"120181\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":200}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r1 => r1.text()).then(result1 => {
        setTimeout(function () {
            chattpquecount = result1.match(/total.*?(\d+).*/)[1];
            //		str2.innerHTML = 'Количество чатов в очереди ТП: ' + newres2;			
        }, 1000)
    })

    setTimeout(function () {
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
        str.innerHTML = 'Количество чатов в нераспределенной очереди: ' + chatneraspcount + " " + '<br> Количество чатов в очереди ТП: ' + chattpquecount;
    }, 1000)

    document.getElementById('buttonQueChatsCount').textContent = 'Повторить проверку'
}

async function checkCSAT() {             // функция проверки CSAT и чатов без тематики
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonCheckStats').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
    document.getElementById('buttonCheckStats').textContent = 'Загрузка'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
    var date = new Date()
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"

    try {
        page = 1
        let stringChatsWithoutTopic = ""
        csatScore = 0
        csatCount = 0
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat = 0
                let flagTopic = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            flagCsat = 1
                            if (r.payload != undefined)
                                if (r.payload.topicId != undefined)
                                    if (r.payload.topicId.value == "")
                                        flagTopic = 1
                        }
                    })
                if (flagCsat == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined) {
                            csatScore += test.items[i].stats.rate.rate
                            csatCount++
                        }
                if (flagTopic == 1)
                    stringChatsWithoutTopic += '<a href="https://hdi.skyeng.ru/autofaq/conversation/-11/' + test.items[i].conversationId + '" onclick="">https://hdi.skyeng.ru/autofaq/conversation/-11/' + test.items[i].conversationId + '</a></br>'
            }

            if (stringChatsWithoutTopic == "")
                stringChatsWithoutTopic = ' нет таких'
            str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' + stringChatsWithoutTopic

            if (test.total > 100 && page == 1) {
                page = 2
            } else {
                break
            }
        }
    } catch {
        str.textContent = 'Что-то пошло не так. Сделайте скрин консоли и отправьте в канал chm-dev, пожалуйста'
    }
    document.getElementById('buttonCheckStats').textContent = 'Повторить проверку'
}

function prepTp() {
    document.getElementById('msg1').style.display = ''
    document.getElementById('snd').style.marginLeft = '41px'
    document.getElementById('testUsers').style.display = ''
    flagLangBut = 1
    customTemplates()
    whoAmI()

    let buttonGetStat = document.createElement('div'); // добавляет кнопку с выводом статистики за день
    buttonGetStat.id = 'buttonGetStat';
    buttonGetStat.innerHTML = "Статистика";
    buttonGetStat.style.marginLeft = "15px";
    buttonGetStat.onclick = function () {
        if (this.textContent == 'Скрыть стату') {
            if (this.getAttribute('disabled') != null)
                return
            if (document.getElementById('tableStats') != undefined) {
                document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.remove()
            }
            this.textContent = 'Статистика'

            document.getElementById('buttonGetStat').setAttribute('disabled', 'disabled')

            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[1].style.display = ""
            }
            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[0].style.display = ""
            }
        } else {
            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[1].style.display = "none"
            } else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[0].style.display = "none"
            } else {
                this.textContent = 'Неверная страница'
                setTimeout(function () { document.getElementById('buttonGetStat').textContent = "Статистика" }, 500)
                return
            }
            getStats()
            document.getElementById('buttonGetStat').setAttribute('disabled', 'disabled')
            this.textContent = 'Загрузка'
        }
    }
    document.getElementById('app-header').append(buttonGetStat)
    // var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
    // btnAdd.insertBefore(buttonGetStat, btnAdd.children[0])

    //setInterval(checkTicketCountsCrm, 300)
    setInterval(timerHideButtons, 300)

    setTimeout(function () {
        // Модуль wallentine в АФ
        //include("https://dimentorexpo.github.io/viewSlack.js");
        // Модуль репорта на жалобы
        // include("https://dimentorexpo.github.io/reportForm.js"); пока работает не правильно, временно отключаю.
        // Модуль репорта на Отписку
        //include("https://dimentorexpo.github.io/unsub.js")

        // include("https://dimentorexpo.github.io/ChangeServiceLocale.js") // модуль кнопки в инфо о пользователе позволяющее поменять локаль ученика
        include("https://dimentorexpo.github.io/UserTechData.js") // модуль получения информации об устройстве У/П по нажатию кнопки в правом окне
        include("https://dimentorexpo.github.io/MobilePass.js") // модуль генерации одноразового пароля для моб приложения
    }, 2000)

}
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function firstLoadPage() {
    if (window.location.href.indexOf('skyeng.autofaq.ai') === -1) {
        document.getElementById('AF_helper').style.display = 'none';
        document.getElementById('testUsers').style.display = 'none';
        document.getElementById('AF_Links').style.display = 'none';
    } else {
        mystyles()
        setTimeout(move_again_AF, 3500)

        setTimeout(function () {
            btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
            btnAdd1.insertBefore(hashBut, btnAdd1.children[0])
            btnAdd1.insertBefore(maskBack, btnAdd1.children[0])
            btnAdd1.insertBefore(butServ, btnAdd1.children[1])
        }, 2000)

        setInterval(startTimer, 1000)
    }
    setTimeout(function () { document.getElementById('testUsers').style.background = "#464451" }, 200)
}
firstLoadPage()

if (localStorage.getItem('hesoyam') == 1) {
    let newDiv = document.createElement('div')
    newDiv.style.margin = '5px'
    let button = document.createElement('button')
    button.textContent = 'Закрыть чат'
    button.id = 'easyCloseChat'
    button.onclick = function () {
        var chatId = document.location.pathname.split('/')[3]
        fetch("https://skyeng.autofaq.ai/api/conversation/status", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"command\":\"DO_SET_CONVERSATION_STATUS\",\"conversationId\":\"" + chatId + "\",\"status\":\"ClosedByOperator\",\"autofaqServiceId\":120181,\"assignToOperatorId\":\"" + operatorId + "\"}",
            "method": "POST",
        });
    }
    newDiv.append(button)
    document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.append(newDiv)
}
function hesoyam() {
    if (localStorage.getItem('hesoyam') == 1) {
        localStorage.setItem('hesoyam', '0')
        document.getElementById('easyCloseChat').remove()
        return
    }
    localStorage.setItem('hesoyam', '1')
    let newDiv = document.createElement('div')
    newDiv.style.margin = '5px'
    let button = document.createElement('button')
    button.textContent = 'Закрыть чат'
    button.id = 'easyCloseChat'
    button.onclick = function () {
        chatId = document.location.pathname.split('/')[3]
        fetch("https://skyeng.autofaq.ai/api/conversation/status", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"command\":\"DO_SET_CONVERSATION_STATUS\",\"conversationId\":\"" + chatId + "\",\"status\":\"ClosedByOperator\",\"autofaqServiceId\":120181,\"assignToOperatorId\":\"" + operatorId + "\"}",
            "method": "POST",
        });
    }
    newDiv.append(button)
    document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.append(newDiv)
}



function toUTF8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                | (str.charCodeAt(i) & 0x3ff))
            utf8.push(0xf0 | (charcode >> 18),
                0x80 | ((charcode >> 12) & 0x3f),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

function decToHex(dec) {
    var hexStr = '0123456789ABCDEF';
    var low = dec % 16;
    var high = (dec - low) / 16;
    hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
    return hex;
}

function textToUTF8String(string) {
    string = toUTF8Array(string)
    let string2 = ""
    for (i = 0; i < string.length; i++) {
        string2 += "%" + decToHex(string[i])
    }
    return string2
}

function weWillNotBeSlaves() {
    localStorage.setItem('scriptAdr', TP_addr2)
    prepTp()
}
var win_Alarmclock =  // описание элементов окна будильника
    `<div style="border: 2px double black;; background-color: #464451" id="AlarmclockCRM">
        <div style="margin: 5px; width: 271px;" id="Alarmclock_1str">
            <button class="btnCRM" title="скрывает меню" id="hideAlarmclock" style="width:50px; background: #228B22;">hide</button>
            <button class="btnCRM" title="Отображение текущего времени" id="clock_jsCRM" style="color: white; margin-top: 5px; float: right;"></button>
        </div>
		<div style="margin: 5px; width: 271px">
			<label style="margin-left: 5px; color:bisque">Напоминание №1</label>
			<br>
            <input title="Ввод текста напоминания" id="remindertextCRM"  placeholder="Текст напоминания" autocomplete="off" style="text-align: center; margin-top: 5px; width: 260px; color: black;">
			<input title="Ввод часа от 0 до 23 для напоминания" "="" id="setchasCRM" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
			<input title="Ввод минут от 0 до 59 для напоминания" id="setminutaCRM" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
			<button class="btnCRM" title="Запуск напоминания при устаноовленном времени" id="setreminderCRM" style="margin-top: 5px">SET🔔</button>
            <button class="btnCRM" id="clock_reminCRM" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: lightgreen; margin-top: 5px">00 : 00 : 00</button>
            <br>
            <label style="margin-left: 5px; color:bisque">Напоминание №2</label>
            <br>
			<input title="Ввод текста напоминания" id="remindertextCRM1"  placeholder="Текст напоминания" autocomplete="off" style="text-align: center; margin-top: 5px; width: 260px; color: black;">
			<input title="Ввод часа от 0 до 23 для напоминания" "="" id="setchasCRM1" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
			<input title="Ввод минут от 0 до 59 для напоминания" id="setminutaCRM1" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
			<button class="btnCRM" title="Запуск напоминания при устаноовленном времени" id="setreminderCRM1" style="margin-top: 5px">SET🔔</button>
            <button class="btnCRM" id="clock_reminCRM1" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: lightgreen; margin-top: 5px">00 : 00 : 00</button>
		</div>
</div>`;

var win_Jira =  // описание элементов окна Поиска по Jira
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="jira_1str">
                                <button class="btnCRM" title="скрывает меню" id="hideMej" style="width:50px; background: #228B22;">hide</button>
								<button class="btnCRM" id="RefreshJiraStatus" title="Обновляет статус Токена Jira, чтобы проверить авторизованы вы или нет">🔄</button>
								<button class="btnCRM" id="ClearJiraData" title="Очищает поля с результатами и полем для ввода">🧹</button>
								<span style="color:bisque">Token Status: </span>
								<span id="searchjiratknstatus"></span>
								<button class="btnCRM" id="jirainstr" style="float:right;" title="Инструкция по этой форме">❓</button>
                        </div>

						<div id="control_jira_search">
							<button id="defaultQuery" title="Страница для поиска по умолчанию с заранее записанным JQL запросом" class="btnCRM active-query" style="margin-left: 17%;">📇Default</button>
							<button class="btnCRM" id="freshQuery" title="Страница при поиске по ключевому слову, выводящая свежесозданные баги в порядке убывания и с 0 Support Tab с заранее записанным JQL запросом">🍀Fresh</button>
							<button class="btnCRM" id="customQuery" title="Страница для ручного составления JQL запроса. Поле для ввода поиска не используется, только лишь верхняя часть от выбора отдела до ввода искомого текста в двойных кавычках после надписи text~">📝Custom</button>
							<button class="btnCRM" id="getiosbugs" title="По клику сразу ищет баги по iOS как если бы выискали стандартно с вводом текста поиска iOS">🍏iOS</button>
							<button class="btnCRM" id="getandroidbugs" title="По клику сразу ищет баги по iOS как если бы выискали стандартно с вводом текста поиска Android">🤖Android</button>
							<button class="btnCRM" id="favouriteBugs" title="Страница с сохраненными багами для быстрого доступа">❤</button>
							<textarea id="JQLquery" placeholder="JQL запрос" title="Введите сюда JQL запрос" autocomplete="off" type="text" style="text-align: center; width: 500px; color: black; margin-top: 5px; margin-left: 5%;"></textarea>
							<input id="testJira" placeholder="Введите слово или фразу для поиска" title="введите слово или фразу для поиска по Jira при одном клике будет искать по багам, если ввести в поле номер задачи например VIM-7288 и дабл кликнуть на рокету будет поиск по номеру" autocomplete="off" type="text" style="text-align: center; width: 300px; color: black; margin-top: 5px; margin-left: 20%;">
							<button class="btnCRM" id="getJiraTasks" style="width: 30px;">🚀</button>
						</div>

                        <div style="margin: 5px; width: 550px" id="jira_tasks_box">
                                <p id="issuetable" style="max-height:400px; margin-left:5px; overflow:auto"></p>
                                <p id="favouriteissuetable" style="max-height:400px; margin-left:5px; overflow:auto; display:none"></p>
                        </div>
                </span>
        </span>
</div>`;

var win_LessonStatus =  // описание элементов окна статуса уроков
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550px;" id="lessomstatdata">
                                <button class="btnCRM" id="hideMeLessonStatus" style="width:50px; background: #228B22;">hide</button>
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
							 <button class="btnCRM" title="Запускает процесс поиска информации по статусам урока (отменен, перенесен, удален)" id="startlookstatus">Получить инфо об уроках</button>
							 <button class="btnCRM" title="Очищает поле от полученной инфы" id="clearlessonstatus">Очистить</button>
					    </div>
				</span>
						<div>
							<p id="statustable" style="margin-top:5px; max-height:400px; overflow:auto; display:none; color:bisque; text-align:center"></p>
						</div>
        </span>
</div>`;

var win_linksd =  // описание элементов окна доступов
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="linksd_1str">
                            <button class="btnCRM" title="скрывает меню" id="hideMeLinksd" style="width:50px; background: #228B22;">hide</button>
                        </div>
						<div>
							<button class="btnCRM" id="curVeriOSCRM" style="margin-left:5px;"></button>
							<button class="btnCRM" id="curVerAndroidCRM"></button>
						<div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="linksd_kib_box">
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Kibana</p>
                            <input id="kibsvid" placeholder="ID Summary" title="Вводим id пользователя для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="kibsvidbut">🔎</button>
                            <input id="kibsvhesh" placeholder="Хэш Summary" title="Вводим Хэш комнаты для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="kibsvheshbut">🔎</button>
                            <input id="kibservhesh" placeholder="Хэш = сервер" title="Вводим Хэш комнаты для определения сервера" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="kibservheshbut">🔎</button>
                            <input id="kibslow" placeholder="Хэш слоу" title="Вводим Хэш комнаты для проверки слоулинков" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="kibslowbut">🔎</button>
                            <input id="kibheshvid" placeholder="Хэш видео" title="Вводим Хэш комнаты для проверки состояния видео" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="kibheshvidbut">🔎</button>
                            <input id="kibstihesh" placeholder="Хэш стрим" title="Вводим Хэш комнаты для проверки срстояния стрима" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="kibstiheshbut">🔎</button>
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Redash</p>
                            <input id="mobappid" placeholder="ID mob.app" title="Вводим id пользователя для открытия действий в приложении" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="mobappidbut">🔎</button>
                            <input id="rpayid" placeholder="ID платежи" title="Вводим id пользователя для открытия лога платежей" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="rpayidbut">🔎</button>
 							<input id="UserActions" placeholder="ID У/П действ" title="Вводим id пользователя для открытия информации о действиях в личном кабинете" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button class="btnCRM" id="GetUserActions">🔎</button>
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Grafana</p>
                            <button class="btnCRM" title="Открывает Графану с состоянием видеосерверов, при наплыве обращений проверяйте его" id="grafanalnk" style="width:105px">Вид.сервера</button>
							<p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">KPI Teachers</p>
							<button class="btnCRM" title="Открывает Tableaue для просмотра информации по KPI teachers" id="kpiteachersdashboard" style="width:150px">Tableaue Dashboard</button>
                        </div>
                </span>
        </span>
</div>`;

var win_OperStatus =  // описание элементов окна оценок от пользователя
    `<div style="display: flex; width: 400px;">
        <span style="width: 400px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 400px;" id="OpSt_header">
                                <button class="btnCRM" title="скрывает меню" id="hideMeOpSt" style="width:50px; background: #228B22;">hide</button>
								<button class="btnCRM" id="clearopersinfo">🧹</button>
                        </div>
		    </span>
                        <div style="margin: 5px; width: 400px" id="opers_box">
                                <p id="operstatustable" style="max-height:400px; margin-left:5px; font-size:16px; color:bisque; overflow:auto;"></p>
                        </div>
        </span>
</div>`;

var win_servicedesk = // описание элементов окна Service Desk
    `<div style="display: flex; width: 500px;">
		<span style="width: 500px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 500px;" id="SrvDskSummary">
                        <button class="btnCRM" id="hideMeSrvDsk" style="width:30px; background: #228B22;">hide</button>
						<button class="btnCRM" id="refreshjiraauth" title="Перепроверить авторизацию в Jira">🔄</button>
						<button class="btnCRM" id="ServiceDeskinstr" title="Инструкция по этой форме">❓</button>
						<span style="color:bisque">Jira Status:</span>
						<span id="jiratknstatus">🟢</span>
						<span style="color:yellow">Prev.task</span>
						<button class="btnCRM" id="prevtask" style="width: 80px" title="Предыдущая задача"></button>
						<span style="color:cyan">Last task</span>
						<button class="btnCRM" id="newtask" style="width: 80px" title="Последняя задача"></button>
                </div>
                <div id="servicedeskinfo" style="margin-left:20px;">
                    <button class="btnCRM sdbtn" id="optionTeacher" style="margin-left:2px; width:80px;">👽Teacher</button>
                    <button class="btnCRM sdbtn" id="optionCRM2" style="margin-left:2px; width:80px;">🧮CRM2</button>
                    <button class="btnCRM sdbtn" id="optionAuth" style="margin-left:2px; width:80px;">🔐Auth</button>
                    <button class="btnCRM sdbtn" id="optionSchedule" style="margin-left:2px; width:80px;">📆Schedul</button>
                    <button class="btnCRM sdbtn" id="optionBillingQA" style="margin-left:2px; width:90px;">💲Billing-QA</button>
                    <button class="btnCRM sdbtn" id="optionOnboarding" style="margin-left:2px; margin-top:2px; width:80px;">♻Onboard</button>
                    <button class="btnCRM sdbtn" id="optionBilling" style="margin-left:2px; margin-top:2px; width:80px;">💰Billing</button>
                    <button class="btnCRM sdbtn" id="optionVimbugs" style="margin-left:2px; margin-top:2px; width:80px;">🐞Vim-bug</button>
                    <button class="btnCRM sdbtn" id="optionVimvideocall" style="margin-left:2px; margin-top:2px; width:80px;">📸Vid-call</button>
                    <button class="btnCRM sdbtn" id="optionStudcab" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓Studcab</button>
                    <button class="btnCRM sdbtn" id="optionChat" style="margin-left:2px; margin-top:2px; width:80px;">💬Chat</button>
                    <button class="btnCRM sdbtn" id="optionTripwire" style="margin-left:2px; margin-top:2px; width:80px;">🗣Tripwire</button>
                    <button class="btnCRM sdbtn" id="optionAnalyst" style="margin-left:2px; margin-top:2px; width:80px;">📊KPI T</button>
                    <button class="btnCRM sdbtn" id="optionCorp" style="margin-left:2px; margin-top:2px; width:80px;">💼Corp</button>
                    <button class="btnCRM sdbtn" id="optionMarketing" style="margin-left:2px; margin-top:2px; width:90px;">📟Landing</button>
                    <button class="btnCRM sdbtn" id="optionEdModel" style="margin-left:2px; margin-top:2px; width:80px;">🎓EM-QA</button>
                    <button class="btnCRM sdbtn" id="optionStudcabmobbugs" style="margin-left:2px; margin-top:2px; width:90px;">👨‍🎓📱Bugs</button>
                    <button class="btnCRM sdbtn" id="optionAcademymobbugs" style="margin-left:2px; margin-top:2px; width:80px;">🅰📱🐞</button>
					<button class="btnCRM sdbtn" id="optionMobbugs" style="margin-left:2px; margin-top:2px; width:90px;">📱Mobil bug</button>
					<button class="btnCRM sdbtn" id="optionMrktprojbugs" style="margin-left:2px; margin-top:2px; width:90px;">👨‍💻mproject</button>
                    <button class="btnCRM sdbtn" id="optionInfra" style="margin-left:2px; margin-top:2px; width:80px; display:none">🛠Infra</button>
                </div>
				<div id="studcabmobbugskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-mobile-bugs; Cообщаем о проблемах в МП Skysmart Parents и в МП Skyeng главные страницы продуктов</p>
					<button class="btnCRM stcabmbsbtn widthofsd" value="965">МП Skyeng: главная(кроме лайф и толкс) и стр подключ услуг</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="964">МП Skyeng: расписание и переносы</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="960">МП Skyeng: подбор П</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="963">МП Skyeng: профиль У и настройки профиля, таймзоны</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="962">МП Skyeng: стр оплаты и трансферы</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="961">МП Skyeng: рефералка</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="978">Skyeng: Stories</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="959">МП Skysmart Parents</button>
					<button class="btnCRM stcabmbsbtn widthofsd" value="958">Подземный стук</button>

					<input id="customfield_102" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_103" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></textarea>
                    <textarea id="customfield_104" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_105" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_106" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_107" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_108" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_21" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="infraoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">Здесь можно получить помощь от команды Инфраструктуры</p>
					<button class="btnCRM infrabtn" id="askfordelacc">Запрос на удаление перс. данных</button>

					<input id="customfield_114" placeholder="ID в системе Auth"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_115" placeholder="Ссылка на запрос (об удалении данных)"  class="sdcustfieldformlines  removefield"></textarea>
					<legend style="color:bisque" id="customfield_116-label">Нужен ли официальный ответ на запрос?</legend>
					<input class="radio" type="radio" name="customfield_116" value="15820" resolved=""><label style="color:bisque; font-size: 16px;">Да</label>
					<input class="radio" type="radio" name="customfield_116" value="15821" resolved=""><label style="color:bisque; font-size: 16px;">Нет</label>
					<textarea id="customfield_117" placeholder="Комментарий"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_23" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="teacherssrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#teachers-qa-support; канал по вопросам ЛКП, ТРМ</p>
					<button class="btnCRM teacbtn widthofsd" value="644">Статистика</button>
					<button class="btnCRM teacbtn widthofsd" value="643">Моё обучение</button>
					<button class="btnCRM teacbtn widthofsd" value="642">Перерыв</button>
					<button class="btnCRM teacbtn widthofsd" value="641">Финансы</button>
					<button class="btnCRM teacbtn widthofsd" value="640">Карта роста</button>
					<button class="btnCRM teacbtn widthofsd" value="639">Расписание</button>
					<button class="btnCRM teacbtn widthofsd" value="637">Запрос на перенос</button>
					<button class="btnCRM teacbtn widthofsd" value="636">Виджет баланса</button>
					<button class="btnCRM teacbtn widthofsd" value="635">Виджет отметки уроков</button>
					<button class="btnCRM teacbtn widthofsd" value="634">Виджеты плана/факта уроков</button>
					<button class="btnCRM teacbtn widthofsd" value="633">Виджет расписания на неделю</button>
					<button class="btnCRM teacbtn widthofsd" value="632">Виджет KPI</button>
					<button class="btnCRM teacbtn widthofsd" value="631">Виджет "Мои ученики"</button>
					<button class="btnCRM teacbtn widthofsd" value="530">Вопросы по ТРМ</button>
					<button class="btnCRM teacbtn widthofsd" value="531">Подземный стук</button>

					<input id="customfield_6" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_7" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_8" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_9" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_10" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_2" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="crm2srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:160px; width:90%;">#crm2-support</p>
					<button class="btnCRM crm2sbtn widthofsd" value="677">Вопросы по задачам "Сопровождения"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="676">Вопросы по задачам "Продаж"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="675">Вопросы по "Истории уроков"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="674">Вопросы про виджет "История платежей"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="673">Вопросы по "Визардам конвертации услуги"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="672">Вопросы о "История действий"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="671">Вопросы о карточке "Семья"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="670">Вопросы о "Профиле" заявки</button>
					<button class="btnCRM crm2sbtn widthofsd" value="678">Вопросы по разделу "Коммуникации"</button>
					<button class="btnCRM crm2sbtn widthofsd" value="669">Проблемы с ф-лом пула задач "список задач" сопровождение</button>
					<button class="btnCRM crm2sbtn widthofsd" value="668">Проблемы с функционалом пула задач "список задач" продажи</button>

					<input id="customfield_40" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_41" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_42" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_43" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_44" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_9" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="authsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#auth; Обсуждение общих вопросов по проектам Auth/ID (авторизация, роли и доступы, данные пользователей и т. д.)</p>
					<button class="btnCRM authbtn widthofsd" value="575">Вопросы к разработке</button>
					<button class="btnCRM authbtn widthofsd" value="576">Проблемы с 2FA : проблема с google authenticator</button>
					<button class="btnCRM authbtn widthofsd" value="573">Проблемы с 2FA: не приходит письмо о восстановлении пароля</button>
					<button class="btnCRM authbtn widthofsd" value="572">Проблемы с 2FA: не приходит смс</button>
					<button class="btnCRM authbtn widthofsd" value="560">Удаление / добавление ролей Преподавателям</button>
					<button class="btnCRM authbtn widthofsd" value="559">Удаление / добавление ролей Ученикам</button>
					<button class="btnCRM authbtn widthofsd" value="558">Проверка логов в ID</button>
					<button class="btnCRM authbtn widthofsd" value="561">Подземный стук</button>

					<input id="customfield_26" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_27" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_28" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_29" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_30" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_8" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="schedulesrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#schedule-qa-support; Канал по вопросам расписания ученика, ТТ, автоподбора и ручного подбора</p>
					<button class="btnCRM schdbtn widthofsd" value="566">Подключение АП</button>
					<button class="btnCRM schdbtn widthofsd" value="565">Отключить АП в ЛКУ</button>
					<button class="btnCRM schdbtn widthofsd" value="564">Вопросы по ТТ</button>
					<button class="btnCRM schdbtn widthofsd" value="563">Подтв в ЛКП перепод ВП</button>
					<button class="btnCRM schdbtn widthofsd" value="562">Почему нет задачи подбора?</button>
					<button class="btnCRM schdbtn widthofsd" value="567">Подземный стук</button>

					<input id="customfield_21" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_22" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_23" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_24" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_25" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_5" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="billingqasrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#billing-qa-support; Канал для рассмотрения причины расхождений баланса учеников</p>
					<button class="btnCRM bilqabtn widthofsd" value="577">Вопросы по рассрочке ученика</button>
					<button class="btnCRM bilqabtn widthofsd" value="570">Проверка баланса У на расхождения</button>

					<input id="customfield_16" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_17" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_18" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_19" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_20" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_4" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="c1srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#c1-support; Поддержка витрины оплаты (Не виджет оплаты в pcs), Onboarding (Kids&Adult), Scoring, AutoIntroLesson (АвтоВУ)</p>
					<button class="btnCRM c1sbtn widthofsd" value="597">Проблемы с версткой</button>
					<button class="btnCRM c1sbtn widthofsd" value="596">Не завершился онбординг после оплаты</button>
					<button class="btnCRM c1sbtn widthofsd" value="595">Циклические редиректы</button>
					<button class="btnCRM c1sbtn widthofsd" value="598">Подземный стук</button>

					<input id="customfield_11" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_12" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_13" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_14" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_15" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_3" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="billingsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:180px; width:90%;">#billing</p>
					<button class="btnCRM billbtn widthofsd" value="681">Чеки/Инвойсы</button>
					<button class="btnCRM billbtn widthofsd" value="680">Data analytics</button>
					<button class="btnCRM billbtn widthofsd" value="679">Задача для разработки</button>
					<button class="btnCRM billbtn widthofsd" value="667">Админка возвратов</button>
					<button class="btnCRM billbtn widthofsd" value="666">Проблема с кодом для привязки карты</button>
					<button class="btnCRM billbtn widthofsd" value="664">Вilling Payment Bot</button>
					<button class="btnCRM billbtn widthofsd" value="663">Схемы вознаграждения </button>
					<button class="btnCRM billbtn widthofsd" value="662">Самозанятые </button>
					<button class="btnCRM billbtn widthofsd" value="661">Реквизиты</button>
					<button class="btnCRM billbtn widthofsd" value="660">Выплаты</button>
					<button class="btnCRM billbtn widthofsd" value="659">Списание средств</button>
					<button class="btnCRM billbtn widthofsd" value="658">Возвраты</button>
					<button class="btnCRM billbtn widthofsd" value="657">Платежные системы</button>
					<button class="btnCRM billbtn widthofsd" value="656">Виджет оплаты</button>
					<button class="btnCRM billbtn widthofsd" value="655">Оплата</button>
					<button class="btnCRM billbtn widthofsd" value="654">Рассрочка</button>
					<button class="btnCRM billbtn widthofsd" value="650">Подписки</button>
					<button class="btnCRM billbtn widthofsd" value="647">Роли и доступы</button>
					<button class="btnCRM billbtn widthofsd" value="646">Бизнес-анализ</button>

					<input id="customfield_32" placeholder="ID пользователя" oninput="onlyNumber(this)" class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_34" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_35" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_36" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_6" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="edumodeloptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#em-qa-support: Канал для обращений по функционалу Educational Model</p>
					<button class="btnCRM edumodbtn widthofsd" value="983">Анкета целей</button>
					<button class="btnCRM edumodbtn widthofsd" value="982">Сертификаты</button>
					<button class="btnCRM edumodbtn widthofsd" value="980">Персотреки и виджет прогресса</button>
					<button class="btnCRM edumodbtn widthofsd" value="981">Страница прогресса</button>
					<button class="btnCRM edumodbtn widthofsd" value="979">Обратная связь</button>

					<input id="customfield_97" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_98" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_99" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_100" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_101" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_20" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="vimbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-bugs; Проблемы с Vimbox/Smartroom</p>
					<button class="btnCRM vimbugsbtn widthofsd" value="1063">Smartroom уроки 1:1</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="1062">Smartroom групп и параллельные уроки</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="1061">Smartroom страница ДЗ и тестов</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="942">Adults Self-Study (web версия, не мобилка)</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="941">Flip (web версия, не мобилка)</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="935">Виджет входа у взрослых У и П</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="934">Автоотметка по урокам взрослых У</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="933">Взрослый англиский: CMS и контент на взрослой платформе</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="932">Взрослый английский: Домашки, уроки, тесты</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="931">Шоукейс взрослого П/взрослого У</button>
					<button class="btnCRM vimbugsbtn widthofsd" value="936">Любые страницы содержащие vimbox, но при этом не содержащие kids в URL</button>

					<input id="customfield_50" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_52" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_53" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_54" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_55" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_11" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="vimvidoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-video-call; Разработка модуля видеосвязи</p>
					<button class="btnCRM vimvidsbtn widthofsd" value="944">Обращение для QA</button>

					<input id="customfield_56" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_57" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_58" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_59" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_60" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_12" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
                <div id="chatqaoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque; font-size:18px; position:relative; top:7px; left:10px; width:90%;">#chat-qa-support; Решают проблемы с чатами в ЛКП и ЛКУ</p>
					<button class="btnCRM chatqabtn widthofsd" value="1050">Проблемы с загрузкой чата</button>
					<button class="btnCRM chatqabtn widthofsd" value="1049">Проблемы с отправкой сообщений в чате</button>
					<button class="btnCRM chatqabtn widthofsd" value="1048">Не приходят сообщения в/из чата в AutoFAQ</button>
					<button class="btnCRM chatqabtn widthofsd" value="1047">Уведомления о непрочитанном сообщении</button>
					<button class="btnCRM chatqabtn widthofsd" value="1046">Добавить чат между У и П</button>
					<button class="btnCRM chatqabtn widthofsd" value="1045">Удалить чат между У и П</button>
					<button class="btnCRM chatqabtn widthofsd" value="948">Подземный стук</button>

					<input id="customfield_66" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_67" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_68" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_69" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_70" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_14" style="width: 150px; position:relative; left:30%;">Создать</button>
                </div>
				<div id="tripwireoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#exp-tripwire-bugs; Life, Talks, расширение переводчик для браузера</p>
					<button class="btnCRM tripwbtn widthofsd" value="987">Расширение Vimbox Translate</button>
					<button class="btnCRM tripwbtn widthofsd" value="986">Life</button>
					<button class="btnCRM tripwbtn widthofsd" value="985">Talks</button>
					<button class="btnCRM tripwbtn widthofsd" value="988">Simulator + Avokado</button>
					<button class="btnCRM tripwbtn widthofsd" value="949">Обращение для QA</button>

					<input id="customfield_71" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_72" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_73" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_74" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_75" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_15" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="analystoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#analysts-gm-tl; канал аналитиков teachers продукта</p>
					<button class="btnCRM analystbtn widthofsd" value="947">Обращение для QA</button>

					<input id="customfield_76" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_77" placeholder="Описание проблемы" class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_78" placeholder="Как воспроизвести ошибку?" class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_79" placeholder="Ожидаемое поведение" class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_80" placeholder="Фактическое поведение" class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_16" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="corpoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#corp-support; Канал поддержки по вопросам корпоративных клиентов: ЛККК (не ЛКУ), начислялка, self-study, карточка компании.</p>
					<button class="btnCRM corpbtn widthofsd" value="950">Обращение для QA</button>

					<input id="customfield_81" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_82" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_83" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_84" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_85" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_17" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="marketprojbugsptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#marketing-projects-bugs; Канал для обращений от ТП, связанных с багами на лендингах Тильды и проектами маркетинга</p>
					<button class="btnCRM marketprojbugsbtn widthofsd" value="952">Обращение для QA</button>

					<input id="customfield_109" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines  removefield"></input>
					<textarea id="customfield_110" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_111" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines  removefield"></textarea>
					<textarea id="customfield_112" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_113" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_22" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="mobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#mobile-bugs; Канал обработки обращений по мобильному приложению Skyeng и Teachers.</p>
					<button class="btnCRM mobbugsbtn widthofsd" value="1031">Skyeng МП: авторизация</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1030">Skyeng МП: регистрация</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1029">Skyeng МП: регистрация через соц. сети</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1023">Skyeng МП: оплата</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1028">Skyeng МП: аторизация через соц. сети</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1027">Skyeng МП: чаты</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1026">Skyeng МП: пуши</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1025">Skyeng МП: force update</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1024">Skyeng МП: настройки</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1022">Skyeng МП: локализация(язык приложения, контента)</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1021">Skyeng МП: видеосвязь(необразовательная часть)</button>
					<button class="btnCRM mobbugsbtn widthofsd" value="1020">Teachers МП</button>

					<select style="height:28px;" id="prioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="1">Blocker</option>
							<option value="2">Critical</option>
							<option value="10100">High</option>
							<option value="3">Major</option>
							<option value="4">Minor</option>
							<option value="5">Trivial</option>
					   </select>
					<input id="customfield_91" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield">
                    <input id="customfield_911" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></input>
                    <input id="customfield_912" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_92" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_94" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_95" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_96" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_19" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>

				<div id="academymobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#academic-mobile-bugs; Канал обработки обращений по МП Skyeng связанных с обучением.</p>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1019">МП Skyeng: Аудиокниги и Life + Talks</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1018">МП Skyeng: Ситуации</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1017">МП Skyeng: Видеопрактика</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1016">МП Skyeng: Self Study</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1015">МП Skyeng: тренажер слов</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1014">МП Skyeng: Словарь</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1013">МП Skyeng: уроки - образовательная часть</button>
					<button class="btnCRM academymobbugsbtn widthofsd" value="1012">МП Skyeng: Домашки</button>

					<select style="height:28px;" id="academyprioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="1">Blocker</option>
							<option value="2">Critical</option>
							<option value="10100">High</option>
							<option value="3">Major</option>
							<option value="4">Minor</option>
							<option value="5">Trivial</option>
					   </select>
					<input id="customfield_118" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
                    <textarea id="customfield_119" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></textarea>
                    <textarea id="customfield_120" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_121" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_122" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_123" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_124" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_24" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>

                <div id="studcaboptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-bugs; Сообщаем о проблемах во взрослом и детском ЛКУ (страницы на домене student.skyeng.ru)</p>
					<button class="btnCRM studcabbtn widthofsd" value="975">Взрослый ЛКУ Главная страница</button>
					<button class="btnCRM studcabbtn widthofsd" value="974">Детский ЛКУ Главная страница</button>
					<button class="btnCRM studcabbtn widthofsd" value="968">Страница семьи и курсов</button>
					<button class="btnCRM studcabbtn widthofsd" value="977">Stories </button>
					<button class="btnCRM studcabbtn widthofsd" value="973">Реферальная страница</button>
					<button class="btnCRM studcabbtn widthofsd" value="972">Страница оплаты, трансфера и истории баланса</button>
					<button class="btnCRM studcabbtn widthofsd" value="971">Страница расписания и переноса урока</button>
					<button class="btnCRM studcabbtn widthofsd" value="970">Страница преподавателя</button>
					<button class="btnCRM studcabbtn widthofsd" value="969">Страница профиля У + настройки</button>
					<button class="btnCRM studcabbtn widthofsd" value="966">Меню навигации (лейаут) </button>
					<button class="btnCRM studcabbtn widthofsd" value="967">Страница шоукейса (подключение услуг)</button>
					<button class="btnCRM studcabbtn widthofsd" value="946">Подземный стук</button>

					<input id="customfield_61" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<textarea id="customfield_62" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_63" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<textarea id="customfield_64" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<textarea id="customfield_65" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<button class="btnCRM" id="create_13" style="width: 150px; position:relative; left:30%;">Создать</button>
                </div>
	        </span>
		</span>
</div>`;

var win_SettingsApp =  // описание элементов главного окна
    `<div style="border: 2px double black; background-color: #464451" id="SettingsApp_bar">
        <div style="margin: 5px; width: 380px;" id="SettingsApp_1str">
            <button class="btnCRM" title="скрывает меню" id="hideSettingsApp" style="width:50px; background: #228B22;">hide</button>
        </div>
		<div style="margin: 5px; width: 350px">
                <select style="height:28px; width:210px; text-align:center" id="soundlistaddrCRM" onchange="changesoundaddrCRM()">
                    <option selected="" disabled="">Звук нового сообщения</option>
                    <option value="othersound">Выбрать свой звук</option>
                    </select>
				<button class="btnCRM" title="Проверка звука при добавленной ссылке" id="sound_testCRM">▶</button>
				<label title="Включение и отключение звука входящих запросов" class="checkbox-audio">
					<input id="audioCRMswitcher" type="checkbox" checked="">
						<span class="checkbox-audio-switch-CRM"></span>
				</label>
                <input id="sound_adrCRM" placeholder="Введи адрес звука" autocomplete="off" type="text" style="display: none; text-align: center; width: 210px; color: black;">
				<button class="btnCRM" title="Сохраняет ссылки на новый источник звука для входящего запроса" id="sound_saveCRM" style="display: none">💾</button>
				<br>
				<span style="color:bisque">Громкость звука</span>
				<input id="rangeCRM" min="0" max="1" value="1.0" step="0.1" type="range">
                    <br>
				<label style="color:bisque"><input type="checkbox" onchange="changerepeatsoundCRM()" id="repeatsoundselectCRM">Повторять звук новой задачи</label>
                    <br>
				<span style="color:bisque">Интервал воспроизведения звука:</span>
				<input title="Ввод интервала в секундах между повторами звука нового чата" id="soundplayintervalCRM" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black;">
				<button class="btnCRM" title="Внести изменения в интервал между повторами звука нового чата" id="setsoundplayintervalCRM" style="margin-top: 5px">SET⌚</button>
					<br>
				<div style="margin-top: 5px; width: 320px">
                    <input id="test_stdCRM" placeholder="ID тест У" autocomplete="off" title = "ID личного тестового ученика" type="text" style="text-align: center; width: 100px; color: black;">
                    <button class="btnCRM" id="setteststdCRM" title="Добавить в localstorage ID тестового У" style="margin-top: 5px">💾</button>
                    <input id="test_teachCRM" placeholder="ID тест П" autocomplete="off" title = "ID личного тестового преподавателя" type="text" style="text-align: center; width: 100px; color: black;">
                    <button class="btnCRM" id="settestteachCRM" title="Добавить в localstorage ID тестового П" style="margin-top: 5px">💾</button>
                </div>
				<button class="btnCRM" id="savesettingstofileCRM" onclick="getLocalstorageToFileCRM('settings-CRMhelp')" title="Сохраняет все настройки из localstorage в отдельный .json файл" style="color: #e5ece6; margin-top: 5px">💾 Сохранить настройки</button>
				<input type="file" id="fileinputCRM" title="Загружает все настройки в localstorage из ранее сохраненного файла настроек в формте .json" style="display:none;">
				<label style="color: #e5ece6; background: #768d87; padding: 5px; border-radius: 5px; border: 1px solid #566963;" for="fileinputCRM">⤵ Загрузить настройки</label>
			</div>
		</div>
    </div>`;

    var win_smartroomform =  // описание элементов окна Мультирум пожелания/баги
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 410px;" id="refuse_form_header">
                            <button class="btnCRM" title="скрывает меню" id="hideMeSmartRoomForm" style="width:50px; background: #228B22;">hide</button>
                            <button class="btnCRM" title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshhashsmartform" style="width:30px;">♻</button>
                            <button class="btnCRM" title="По нажатию очищает поля и сбрасывает в дефолтное состояние формы" id="clearsmartroomform" style="width:30px;">🧹</button>
							<button class="btnCRM" title="Инструкция по этой форме" id="smartroomforminstr" style="float:right">❓</button>
                        </div>

                        <div style="margin: 5px; margin-top: 0px; width: 410px" id="smartroom_form_menu">

							<label style="color:#c4ffd3; padding:5px; font-weight: 600;">Тип клиента</label>
							<br>
							<div style="margin-top:5px; color:bisque;" id = "smartroomuser">
								<input type="radio" id="typestud" name="typetoform" value="Ученик">
								<label for="typestud">Ученик</label>
							    <input type="radio" id="typeteach" name="typetoform" value="Преподаватель">
								<label for="typeteach">Преподаватель</label>
                                <input type="radio" id="typestudprem" name="typetoform" value="Ученик Premium">
								<label for="typestudprem">Ученик Premium</label>
							</div>
							<input id="clientid" placeholder="ID пользователя" autocomplete="off" type="text">
							<br>
							<div style="margin-top:5px; color:#c4ffd3; padding:5px; font-weight: 600;">С чем обратились?</div>
							<div style="margin-top:5px; color:bisque;" id = "smartroomquestion">
								<input type="radio" id="whatobratsugest" name="whatobratform" value="Пожелание по мультирум" checked>
								<label for="whatobratsugest">Пожелание по мультирум</label>
							</div>
							<div style="margin-top:5px; color:#c4ffd3; padding:5px; font-weight: 600;">Категория запроса</div>
								<div>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Персональный трек" resolved=""> Персональный трек</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Домашние задания" resolved=""> Домашние задания</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Функционал на уроке" resolved=""> Функционал на уроке</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Вернуть старую платформу" resolved=""> Вернуть старую платформу</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Интерфейс платформы" resolved=""> Интерфейс платформы</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Другое" resolved=""> Другое</label>
								<br>
								<input id="otheroptionsmartchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							</div>
								<textarea id="fullcomentsmartroom" placeholder="Полный комментарий предложения по улучшению" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>
							<br>
							<button class="btnCRM" title="Отправляет заполненные поля формы в док" id="send2smartroom" style="width:105px; position: relative; left: 50%; margin-top: 5px; transform: translate(-50%, 0);">Отправить</button>
						</div>
				</span>
        </span>
</div>`;

var win_suggest =  // описание элементов окна предложений
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="sug_form_main">
                            <button class="btnCRM" title="скрывает меню" id="hideMeSugForm" style="width:50px; background: #228B22;">hide</button>
                            <button class="btnCRM" title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshchathash" style="width:30px;">♻</button>
							<button class="btnCRM" title="По нажатию открывает общий док с переданными предложениями" id="getdocsuggestions" style="width:30px;">🗑</button>
							<button class="btnCRM" id="suggestinstr" style="float:right; margin-right: 5px;" title="Инструкция по этой форме">❓</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="sug_form_box">
                            <input id="operatornamesuggest" placeholder="Представься, пожалуйста" title="Вводим свою фамилию и имя" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
                            <input id="linktochatsuggest" placeholder="Ссылка на предложение (чат)" title="Копируем ссылку на чат" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ЛКУ" resolved=""> ЛКУ</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ЛКП" resolved=""> ЛКП</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Функционал урока" resolved=""> Функционал урока</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ТТ (Расписание)" resolved=""> ТТ (Расписание)</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="РК" resolved=""> РК</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Виджеты (прогресс/часы и т.п.)" resolved=""> Виджеты (прогресс/часы и т.п.)</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Словарь" resolved=""> Словарь</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Чатик" resolved=""> Чатик</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Оплата" resolved=""> Оплата</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skyeng" resolved=""> Мобильное приложение Skyeng</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skyeng Teachers" resolved=""> Мобильное приложение Skyeng Teachers</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart Интерактивная тетрадь" resolved=""> Мобильное приложение Skysmart Интерактивная тетрадь</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart.Родителям" resolved=""> Мобильное приложение Skysmart.Родителям</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart Students" resolved=""> Мобильное приложение Skysmart Students</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skypro" resolved=""> Мобильное приложение Skypro</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Другое" resolved=""> Другое</label>
							<br>
							<input id="otheroptionchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
						</div>
		</span>
						<div>
                            <textarea id="textsuggest" placeholder="Текст предложения" title="Вводим текст предложения" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px"></textarea>
							<br>
							<button class="btnCRM" title="Отправляет заполненные поля формы в док" id="sendtosuggestdoc" style="width:105px; position: relative; left: 50%; transform: translate(-50%, 0);">Отправить</button>
                        </div>
        </span>
</div>`;


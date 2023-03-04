//Global variables
let jiratoken;
let jiratokennew;
let responsejira;
let psarr = [];
let firstEl;
let slacklnk;
let infoarr;
let lasttsk;
let prevtsk;
let flagpsis = 0;
let msgissnd = 0;
const buttons = [ //array of buttonsnames
    '.edumodbtn',
    '.bilqabtn',
    '.teacbtn',
    '.c1sbtn',
    '.schdbtn',
    '.authbtn',
    '.crm2sbtn',
    '.billbtn',
    '.vimbugsbtn',
    '.vimvidsbtn',
    '.studcabbtn',
    '.chatqabtn',
    '.tripwbtn',
    '.analystbtn',
    '.corpbtn',
    '.mobbugsbtn',
    '.academymobbugsbtn',
    '.stcabmbsbtn',
];

const otherOptions = [ // array of buttons categories id's
    'teacherssrvdskoptions',
    'crm2srvdskoptions',
    'authsrvdskoptions',
    'schedulesrvdskoptions',
    'billingqasrvdskoptions',
    'c1srvdskoptions',
    'billingsrvdskoptions',
    'vimbugsoptions',
    'vimvidoptions',
    'studcaboptions',
    'chatqaoptions',
    'tripwireoptions',
    'analystoptions',
    'corpoptions',
    'edumodeloptions',
    'studcabmobbugskoptions',
    'mobbugsoptions',
    'academymobbugsoptions'
];

var win_servicedesk = // описание элементов окна Service Desk
    `<div style="display: flex; width: 480px;">
		<span style="width: 480px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 480px;" id="SrvDskSummary">
                        <button id="hideMeSrvDsk" style="width:35px; background: #228B22;">hide</button>
						<button id="refreshjiraauth" title="Перепроверить авторизацию в Jira">🔄</button>
						<button id="ServiceDeskinstr" title="Инструкция по этой форме">❓</button>
						<span style="color:bisque">Jira Status:</span>
						<span id="jiratknstatus">🟢</span>
						<span style="color:yellow">Prev.task</span>
						<button id="prevtask" style="width: 80px" title="Предыдущая задача"></button>
						<span style="color:cyan">Last task</span>
						<button id="newtask" style="width: 80px" title="Последняя задача"></button>
                </div>
                <div id="servicedeskinfo" style="margin-left:20px;">
                    <button class="sdbtn" id="optionTeacher" style="margin-left:2px; width:80px;">👽Teacher</button>
                    <button class="sdbtn" id="optionCRM2" style="margin-left:2px; width:80px;">🧮CRM2</button>
                    <button class="sdbtn" id="optionAuth" style="margin-left:2px; width:80px;">🔐Auth</button>
                    <button class="sdbtn" id="optionSchedule" style="margin-left:2px; width:80px;">📆Schedul</button>
                    <button class="sdbtn" id="optionBillingQA" style="margin-left:2px; width:80px;">💲Billing-QA</button>
                    <button class="sdbtn" id="optionOnboarding" style="margin-left:2px; margin-top:2px; width:80px;">♻Onboard</button>
                    <button class="sdbtn" id="optionBilling" style="margin-left:2px; margin-top:2px; width:80px;">💰Billing</button>
                    <button class="sdbtn" id="optionVimbugs" style="margin-left:2px; margin-top:2px; width:80px;">🐞Vim-bug</button>
                    <button class="sdbtn" id="optionVimvideocall" style="margin-left:2px; margin-top:2px; width:80px;">📸Vid-call</button>
                    <button class="sdbtn" id="optionStudcab" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓Studcab</button>
                    <button class="sdbtn" id="optionChat" style="margin-left:2px; margin-top:2px; width:80px;">💬Chat</button>
                    <button class="sdbtn" id="optionTripwire" style="margin-left:2px; margin-top:2px; width:80px;">🗣Tripwire</button>
                    <button class="sdbtn" id="optionAnalyst" style="margin-left:2px; margin-top:2px; width:80px;">📊KPI T</button>
                    <button class="sdbtn" id="optionCorp" style="margin-left:2px; margin-top:2px; width:80px;">💼Corp</button>
                    <button class="sdbtn" id="optionEdModel" style="margin-left:2px; margin-top:2px; width:80px;">🎓EM-QA</button>
                    <button class="sdbtn" id="optionStudcabmobbugs" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓📱Bugs</button>
					<button class="sdbtn" id="optionMobbugs" style="margin-left:2px; margin-top:2px; width:80px;">📱Mobil bug</button>
                    <button class="sdbtn" id="optionAcademymobbugs" style="margin-left:2px; margin-top:2px; width:80px;">🅰📱🐞</button>
                </div>
				<div id="studcabmobbugskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-mobile-bugs; Cообщаем о проблемах в МП Skysmart Parents и в МП Skyeng главные страницы продуктов</p>
					<button class="stcabmbsbtn widthofsd" value="965">МП Skyeng: главная(кроме лайф и толкс) и стр подключ услуг</button>
					<button class="stcabmbsbtn widthofsd" value="964">МП Skyeng: расписание и переносы</button>
					<button class="stcabmbsbtn widthofsd" value="960">МП Skyeng: подбор П</button>
					<button class="stcabmbsbtn widthofsd" value="963">МП Skyeng: профиль У и настройки профиля, таймзоны</button>
					<button class="stcabmbsbtn widthofsd" value="962">МП Skyeng: стр оплаты и трансферы</button>
					<button class="stcabmbsbtn widthofsd" value="961">МП Skyeng: рефералка</button>
					<button class="stcabmbsbtn widthofsd" value="978">Skyeng: Stories</button>
					<button class="stcabmbsbtn widthofsd" value="959">МП Skysmart Parents</button>
					<button class="stcabmbsbtn widthofsd" value="958">Подземный стук</button>
				</div>

				<div id="teacherssrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#teachers-qa-support; канал по вопросам ЛКП, ТРМ</p>
					<button class="teacbtn widthofsd" value="644">Статистика</button>
					<button class="teacbtn widthofsd" value="643">Моё обучение</button>
					<button class="teacbtn widthofsd" value="642">Перерыв</button>
					<button class="teacbtn widthofsd" value="641">Финансы</button>
					<button class="teacbtn widthofsd" value="640">Карта роста</button>
					<button class="teacbtn widthofsd" value="639">Расписание</button>
					<button class="teacbtn widthofsd" value="637">Запрос на перенос</button>
					<button class="teacbtn widthofsd" value="636">Виджет баланса</button>
					<button class="teacbtn widthofsd" value="635">Виджет отметки уроков</button>
					<button class="teacbtn widthofsd" value="634">Виджеты плана/факта уроков</button>
					<button class="teacbtn widthofsd" value="633">Виджет расписания на неделю</button>
					<button class="teacbtn widthofsd" value="632">Виджет KPI</button>
					<button class="teacbtn widthofsd" value="631">Виджет "Мои ученики"</button>
					<button class="teacbtn widthofsd" value="530">Вопросы по ТРМ</button>
					<button class="teacbtn widthofsd" value="531">Подземный стук</button>
				</div>
				<div id="crm2srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:160px; width:90%;">#crm2-support</p>
					<button class="crm2sbtn widthofsd" value="677">Вопросы по задачам "Сопровождения"</button>
					<button class="crm2sbtn widthofsd" value="676">Вопросы по задачам "Продаж"</button>
					<button class="crm2sbtn widthofsd" value="675">Вопросы по "Истории уроков"</button>
					<button class="crm2sbtn widthofsd" value="674">Вопросы про виджет "История платежей"</button>
					<button class="crm2sbtn widthofsd" value="673">Вопросы по "Визардам конвертации услуги"</button>
					<button class="crm2sbtn widthofsd" value="672">Вопросы о "История действий"</button>
					<button class="crm2sbtn widthofsd" value="671">Вопросы о карточке "Семья"</button>
					<button class="crm2sbtn widthofsd" value="670">Вопросы о "Профиле" заявки</button>
					<button class="crm2sbtn widthofsd" value="678">Вопросы по разделу "Коммуникации"</button>
					<button class="crm2sbtn widthofsd" value="669">Проблемы с ф-лом пула задач "список задач" сопровождение</button>
					<button class="crm2sbtn widthofsd" value="668">Проблемы с функционалом пула задач "список задач" продажи</button>
				</div>
				<div id="authsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#auth; Обсуждение общих вопросов по проектам Auth/ID (авторизация, роли и доступы, данные пользователей и т. д.)</p>
					<button class="authbtn widthofsd" value="575">Вопросы к разработке</button>
					<button class="authbtn widthofsd" value="576">Проблемы с 2FA : проблема с google authenticator</button>
					<button class="authbtn widthofsd" value="573">Проблемы с 2FA: не приходит письмо о восстановлении пароля</button>
					<button class="authbtn widthofsd" value="572">Проблемы с 2FA: не приходит смс</button>
					<button class="authbtn widthofsd" value="560">Удаление / добавление ролей Преподавателям</button>
					<button class="authbtn widthofsd" value="559">Удаление / добавление ролей Ученикам</button>
					<button class="authbtn widthofsd" value="558">Проверка логов в ID</button>
					<button class="authbtn widthofsd" value="561">Подземный стук</button>
				</div>
				<div id="schedulesrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#schedule-qa-support; Канал по вопросам расписания ученика, ТТ, автоподбора и ручного подбора</p>
					<button class="schdbtn widthofsd" value="566">Подключение АП</button>
					<button class="schdbtn widthofsd" value="565">Отключить АП в ЛКУ</button>
					<button class="schdbtn widthofsd" value="564">Вопросы по ТТ</button>
					<button class="schdbtn widthofsd" value="563">Подтв в ЛКП перепод ВП</button>
					<button class="schdbtn widthofsd" value="562">Почему нет задачи подбора?</button>
					<button class="schdbtn widthofsd" value="567">Подземный стук</button>
				</div>
				<div id="billingqasrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#billing-qa-support; Канал для рассмотрения причины расхождений баланса учеников</p>
					<button class="bilqabtn widthofsd" value="577">Вопросы по рассрочке ученика</button>
					<button class="bilqabtn widthofsd" value="570">Проверка баланса У на расхождения</button>
				</div>
				<div id="c1srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#c1-support; Поддержка витрины оплаты (Не виджет оплаты в pcs), Onboarding (Kids&Adult), Scoring, AutoIntroLesson (АвтоВУ)</p>
					<button class="c1sbtn widthofsd" value="597">Проблемы с версткой</button>
					<button class="c1sbtn widthofsd" value="596">Не завершился онбординг после оплаты</button>
					<button class="c1sbtn widthofsd" value="595">Циклические редиректы</button>
					<button class="c1sbtn widthofsd" value="598">Подземный стук</button>
				</div>
				<div id="billingsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:180px; width:90%;">#billing</p>
					<button class="billbtn widthofsd" value="681">Чеки/Инвойсы</button>
					<button class="billbtn widthofsd" value="680">Data analytics</button>
					<button class="billbtn widthofsd" value="679">Задача для разработки</button>
					<button class="billbtn widthofsd" value="667">Админка возвратов</button>
					<button class="billbtn widthofsd" value="666">Проблема с кодом для привязки карты</button>
					<button class="billbtn widthofsd" value="664">Вilling Payment Bot</button>
					<button class="billbtn widthofsd" value="663">Схемы вознаграждения </button>
					<button class="billbtn widthofsd" value="662">Самозанятые </button>
					<button class="billbtn widthofsd" value="661">Реквизиты</button>
					<button class="billbtn widthofsd" value="660">Выплаты</button>
					<button class="billbtn widthofsd" value="659">Списание средств</button>
					<button class="billbtn widthofsd" value="658">Возвраты</button>
					<button class="billbtn widthofsd" value="657">Платежные системы</button>
					<button class="billbtn widthofsd" value="656">Виджет оплаты</button>
					<button class="billbtn widthofsd" value="655">Оплата</button>
					<button class="billbtn widthofsd" value="654">Рассрочка</button>
					<button class="billbtn widthofsd" value="650">Подписки</button>
					<button class="billbtn widthofsd" value="647">Роли и доступы</button>
					<button class="billbtn widthofsd" value="646">Бизнес-анализ</button>
				</div>
				<div id="edumodeloptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#em-qa-support: Канал для обращений по функционалу Educational Model</p>
					<button class="edumodbtn widthofsd" value="983">Анкета целей</button>
					<button class="edumodbtn widthofsd" value="982">Сертификаты</button>
					<button class="edumodbtn widthofsd" value="980">Персотреки и виджет прогресса</button>
					<button class="edumodbtn widthofsd" value="981">Страница прогресса</button>
					<button class="edumodbtn widthofsd" value="979">Обратная связь</button>
				</div>
				<div id="vimbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-bugs; Проблемы с Vimbox/Smartroom</p>
					<button class="vimbugsbtn widthofsd" value="1063">Smartroom уроки 1:1</button>
					<button class="vimbugsbtn widthofsd" value="1062">Smartroom групп и параллельные уроки</button>
					<button class="vimbugsbtn widthofsd" value="1061">Smartroom страница ДЗ и тестов</button>
					<button class="vimbugsbtn widthofsd" value="942">Adults Self-Study (web версия, не мобилка)</button>
					<button class="vimbugsbtn widthofsd" value="941">Flip (web версия, не мобилка)</button>
					<button class="vimbugsbtn widthofsd" value="935">Виджет входа у взрослых У и П</button>
					<button class="vimbugsbtn widthofsd" value="934">Автоотметка по урокам взрослых У</button>
					<button class="vimbugsbtn widthofsd" value="933">Взрослый англиский: CMS и контент на взрослой платформе</button>
					<button class="vimbugsbtn widthofsd" value="932">Взрослый английский: Домашки, уроки, тесты</button>
				</div>
				<div id="vimvidoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-video-call; Разработка модуля видеосвязи</p>
					<button class="vimvidsbtn widthofsd" value="944">Обращение для QA</button>
				</div>
                <div id="chatqaoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque; font-size:18px; position:relative; top:7px; left:10px; width:90%;">#chat-qa-support; Решают проблемы с чатами в ЛКП и ЛКУ</p>
					<button class="chatqabtn widthofsd" value="1050">Проблемы с загрузкой чата</button>
					<button class="chatqabtn widthofsd" value="1049">Проблемы с отправкой сообщений в чате</button>
					<button class="chatqabtn widthofsd" value="1048">Не приходят сообщения в/из чата в AutoFAQ</button>
					<button class="chatqabtn widthofsd" value="1047">Уведомления о непрочитанном сообщении</button>
					<button class="chatqabtn widthofsd" value="1046">Добавить чат между У и П</button>
					<button class="chatqabtn widthofsd" value="1045">Удалить чат между У и П</button>
					<button class="chatqabtn widthofsd" value="948">Подземный стук</button>
                </div>
				<div id="tripwireoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#eco-tripwire-bugs; Life, Talks, РК adults, расширение переводчик для браузера</p>
					<button class="tripwbtn widthofsd" value="987">Расширение Vimbox Translate</button>
					<button class="tripwbtn widthofsd" value="986">Life</button>
					<button class="tripwbtn widthofsd" value="985">Talks</button>
					<button class="tripwbtn widthofsd" value="988">Simulator + Avokado</button>
					<button class="tripwbtn widthofsd" value="949">Обращение для QA</button>
				</div>
				<div id="analystoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#analysts-gm-tl; канал аналитиков teachers продукта</p>
					<button class="analystbtn widthofsd" value="947">Обращение для QA</button>
				</div>
				<div id="corpoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#corp-support; Канал поддержки по вопросам корпоративных клиентов: ЛККК (не ЛКУ), начислялка, self-study, карточка компании.</p>
					<button class="corpbtn widthofsd" value="950">Обращение для QA</button>
				</div>
				<div id="mobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#mobile-bugs; Канал обработки обращений по мобильному приложению Skyeng и Teachers.</p>
					<button class="mobbugsbtn widthofsd" value="1031">Skyeng МП: авторизация</button>
					<button class="mobbugsbtn widthofsd" value="1030">Skyeng МП: регистрация</button>
					<button class="mobbugsbtn widthofsd" value="1029">Skyeng МП: регистрация через соц. сети</button>
					<button class="mobbugsbtn widthofsd" value="1023">Skyeng МП: оплата</button>
					<button class="mobbugsbtn widthofsd" value="1028">Skyeng МП: аторизация через соц. сети</button>
					<button class="mobbugsbtn widthofsd" value="1027">Skyeng МП: чаты</button>
					<button class="mobbugsbtn widthofsd" value="1026">Skyeng МП: пуши</button>
					<button class="mobbugsbtn widthofsd" value="1025">Skyeng МП: force update</button>
					<button class="mobbugsbtn widthofsd" value="1024">Skyeng МП: настройки</button>
					<button class="mobbugsbtn widthofsd" value="1022">Skyeng МП: локализация(язык приложения, контента)</button>
					<button class="mobbugsbtn widthofsd" value="1021">Skyeng МП: видеосвязь(необразовательная часть)</button>
					<button class="mobbugsbtn widthofsd" value="1020">Teachers МП</button>
				</div>

				<div id="academymobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#academic-mobile-bugs; Канал обработки обращений по МП Skyeng связанных с обучением.</p>
					<button class="academymobbugsbtn widthofsd" value="1019">МП Skyeng: Аудиокниги и Life + Talks</button>
					<button class="academymobbugsbtn widthofsd" value="1018">МП Skyeng: Ситуации</button>
					<button class="academymobbugsbtn widthofsd" value="1017">МП Skyeng: Видеопрактика</button>
					<button class="academymobbugsbtn widthofsd" value="1016">МП Skyeng: Self Study</button>
					<button class="academymobbugsbtn widthofsd" value="1015">МП Skyeng: тренажер слов</button>
					<button class="academymobbugsbtn widthofsd" value="1014">МП Skyeng: Словарь</button>
					<button class="academymobbugsbtn widthofsd" value="1013">МП Skyeng: уроки - образовательная часть</button>
					<button class="academymobbugsbtn widthofsd" value="1012">МП Skyeng: Домашки</button>
				</div>

                <div id="studcaboptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-bugs; Сообщаем о проблемах во взрослом и детском ЛКУ (страницы на домене student.skyeng.ru)</p>
					<button class="studcabbtn widthofsd" value="975">Взрослый ЛКУ Главная страница</button>
					<button class="studcabbtn widthofsd" value="974">Детский ЛКУ Главная страница</button>
					<button class="studcabbtn widthofsd" value="968">Страница семьи и курсов</button>
					<button class="studcabbtn widthofsd" value="977">Stories </button>
					<button class="studcabbtn widthofsd" value="973">Реферальная страница</button>
					<button class="studcabbtn widthofsd" value="972">Страница оплаты, трансфера и истории баланса</button>
					<button class="studcabbtn widthofsd" value="971">Страница расписания и переноса урока</button>
					<button class="studcabbtn widthofsd" value="970">Страница преподавателя</button>
					<button class="studcabbtn widthofsd" value="969">Страница профиля У + настройки</button>
					<button class="studcabbtn widthofsd" value="966">Меню навигации (лейаут) </button>
					<button class="studcabbtn widthofsd" value="967">Страница шоукейса (подключение услуг)</button>
					<button class="studcabbtn widthofsd" value="946">Подземный стук</button>
                </div>

				<div>
					<select style="height:28px; margin-left: 21px; margin-top: 5px; display: none;" id="prioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="1">Blocker</option>
							<option value="2">Critical</option>
							<option value="10100">High</option>
							<option value="3">Major</option>
							<option value="4">Minor</option>
							<option value="5">Trivial</option>
					   </select>
					<input id="custom_id" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield" style="margin-left: 21px;">
                    <input id="custom_appinfo" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield" style="margin-left: 21px; display: none;"></input>
                    <input id="custom_deviceinfo" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield" style="margin-left: 21px; display: none;"></input>
					<textarea id="custom_descr" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield" style="margin-left: 21px;"></textarea>
					<textarea id="custom_str" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield" style="margin-left: 21px;"></textarea>
					<textarea id="custom_er" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield" style="margin-left: 21px;"></textarea>
					<textarea id="custom_ar" placeholder="Фактическое поведение"  class="sdexpecactual removefield" style="margin-left: 21px;"></textarea>
					<button id="createsd" style="width: 150px; position:relative; left:30%; margin-bottom:5px;">Создать</button>
				</div>
	        </span>
		</span>
</div>`;


//func initialize

function getprsuplasttask() { //функция для получения ссылки на последний созданный после отправки в канал тикет в джира +
    const responseTextarea1 = document.getElementById('responseTextarea1');
    const responseTextarea2 = document.getElementById('responseTextarea2');
    const responseTextarea3 = document.getElementById('responseTextarea3');
    const sendResponse = document.getElementById('sendResponse');
    const prevtask = document.getElementById('prevtask');

    responseTextarea1.value = `{}`;
    responseTextarea2.value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
    responseTextarea3.value = 'pstickets';
    sendResponse.click();

    responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const psarr = responseTextarea1.getAttribute('pstickets');
        if (psarr) {
            const sortarr = psarr.match(/PS-(\d+)/g).sort().reverse();
            const firstEl = sortarr[0];
            prevtsk = firstEl;
            prevtask.innerText = prevtsk;

            prevtask.onclick = function () {
                if (prevtask.innerText === "") {
                    console.log('Задача не найдена');
                } else {
                    window.open(`https://jira.skyeng.tech/browse/${prevtsk}`);
                }
            }
        }
        responseTextarea1.removeAttribute('pstickets');
    });
}

function getprsup() {  //функция для получения ссылки на предыдщий созданный тикет в джира
    const responseTextarea1 = document.getElementById('responseTextarea1');
    const responseTextarea2 = document.getElementById('responseTextarea2');
    const responseTextarea3 = document.getElementById('responseTextarea3');
    const sendResponse = document.getElementById('sendResponse');

    responseTextarea1.value = `{}`;
    responseTextarea2.value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
    responseTextarea3.value = 'shmikets';
    sendResponse.click();

    responseTextarea1.addEventListener("DOMSubtreeModified", () => {
        const psarr = responseTextarea1.getAttribute('shmikets');
        const sortarr = psarr.match(/PS-(\d+)/g).sort().reverse();
        const firstEl = sortarr[0];

        console.log(`Testo massiv ${sortarr}`);
        console.log(`Link tp PJ JIRA https://jira.skyeng.tech/browse/${firstEl}`);

        lasttsk = firstEl;
        flagpsis = 1;

        if (lasttsk > prevtsk && msgissnd === 0) {
            document.getElementById('newtask').innerText = lasttsk;
            sendComment(`Jira Service Desk link: https://jira.skyeng.tech/browse/${lasttsk}`);
            msgissnd = 1;
            const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        } else if (lasttsk <= prevtsk) {
            console.log("Новая задача не была создана из-за введных значений или изменения логики работы  выбранной формы в самом ServiceDesk!");
        }

        responseTextarea1.removeAttribute('pstickets');
    });

    msgissnd = 0;
}

function getslacklnk() { // получаем ссылку на обращение в слака с помощью парсинга номера задачи в джире и вытягивание ссылки с нее
    if (flagpsis == 1) {
        if (lasttsk > prevtsk) {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + lasttsk;
            document.getElementById('responseTextarea3').value = 'slacklnkhere'
            document.getElementById('sendResponse').click()

            setTimeout(async () => {
                infoarr = await document.getElementById('responseTextarea1').getAttribute('slacklnkhere');
                document.getElementById('responseTextarea1').removeAttribute('slacklnkhere');

                slacklnk = infoarr.match(/">(https:\/\/skyeng.slack.com.*?)<\/a>/)[1];

                console.log("Slack link " + slacklnk);
                sendComment("Slack Service Desk link: " + slacklnk);


            }, 2000);

        } else console.log("Задача не была создана, поэтому в заметки нечего размещать")

    } else if (flagpsis == 2) {

        document.getElementById('responseTextarea1').value = `{}`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + lasttsk;
        document.getElementById('responseTextarea3').value = 'slacklnkhere'
        document.getElementById('sendResponse').click()

        setTimeout(async () => {
            infoarr = await document.getElementById('responseTextarea1').getAttribute('slacklnkhere');
            document.getElementById('responseTextarea1').removeAttribute('slacklnkhere');

            slacklnk = infoarr.match(/">(https:\/\/skyeng.slack.com.*?)<\/a>/)[1];

            console.log("Slack link " + slacklnk);
            sendComment("Slack Service Desk link: " + slacklnk);

        }, 2000);

    } else console.log("Задача не была создана, поэтому в заметки нечего размещать")

}

function checkjiraauth() { // функция проверки авторизации в Jira

    document.getElementById('responseTextarea1').value = '{}'
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
    document.getElementById('responseTextarea3').value = 'getjiratoken'
    document.getElementById('sendResponse').click()

    document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
        responsejira = document.getElementById('responseTextarea1').getAttribute('getjiratoken');
        jiratoken = responsejira;
        if (jiratoken != null) {
            if (jiratoken.match(/name="atlassian-token" content="(.*lin)/) != null) {
                jiratoken = jiratoken.match(/name="atlassian-token" content="(.*lin)/)[1];
                jiratokennew = jiratoken;
                document.getElementById('jiratknstatus').innerText = "🟢"
                console.log('%cTOKEN received successfully', 'color:LimeGreen');
                getprsuplasttask()
            } else {
                console.log('%cАвторизуйтесь в системе Jira, чтобы при заполнении формы запрос был отправлен в Service Desk!', 'color:red');
                document.getElementById('jiratknstatus').innerText = "🔴"
            }
        }
        document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
    });

}

function sendRequest(idstdserv, dscr, str, erx, ary, code) {
    console.log(jiratoken)
    console.log(jiratokennew)
    document.getElementById('responseTextarea1').value = `{  "headers": {
	 "content-type": "application/x-www-form-urlencoded",
	 "sec-fetch-mode": "cors",
	 "sec-fetch-site": "same-origin",
	 "x-requested-with": "XMLHttpRequest",
	 "x-sitemesh-off": "true"
	  },
	  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "atl_token=${jiratokennew}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
	 "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	  }`
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/" + code;
    document.getElementById('responseTextarea3').value = ''

    // логируем входящие переменные и значение полей отправки запроса
    console.log(idstdserv + " " + dscr + " " + str + " " + erx + " " + ary + " " + code)
    console.log(document.getElementById('responseTextarea1').value)
    console.log(document.getElementById('responseTextarea2').value)

    document.getElementById('sendResponse').click()

    setTimeout(getprsup, 5000);
    setTimeout(getslacklnk, 8000);
}

function sendRequestMobNoPriority(issuename, device, dscr, str, erx, ary, idstdserv, code) {
    console.log(jiratoken)
    console.log(jiratokennew)
    document.getElementById('responseTextarea1').value = `{  "headers": {
	 "content-type": "application/x-www-form-urlencoded",
	 "sec-fetch-mode": "cors",
	 "sec-fetch-site": "same-origin",
	 "x-requested-with": "XMLHttpRequest",
	 "x-sitemesh-off": "true"
	  },
	  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "atl_token=${jiratokennew}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
	 "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	  }`
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/" + code;
    document.getElementById('responseTextarea3').value = ''

    // логируем входящие переменные и значение полей отправки запроса
    console.log(issuename + " " + device + " " + dscr + " " + str + " " + erx + " " + ary + " " + idstdserv + " " + code)
    console.log(document.getElementById('responseTextarea1').value)
    console.log(document.getElementById('responseTextarea2').value)

    document.getElementById('sendResponse').click()

    setTimeout(getprsup, 5000);
    setTimeout(getslacklnk, 8000);
}

function sendRequestMobWithPriority(priorvalue, issuename, device, dscr, str, erx, ary, idstdserv, code) {
    console.log(jiratoken)
    console.log(jiratokennew)
    document.getElementById('responseTextarea1').value = `{  "headers": {
		 "content-type": "application/x-www-form-urlencoded",
		 "sec-fetch-mode": "cors",
		 "sec-fetch-site": "same-origin",
		 "x-requested-with": "XMLHttpRequest",
		 "x-sitemesh-off": "true"
		  },
		  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/${code}",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "atl_token=${jiratokennew}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
		 "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		  }`
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/" + code;
    document.getElementById('responseTextarea3').value = ''

    // логируем входящие переменные и значение полей отправки запроса
    console.log(priorvalue + " " + issuename + " " + device + " " + dscr + " " + str + " " + erx + " " + ary + " " + idstdserv + " " + code)
    console.log(document.getElementById('responseTextarea1').value)
    console.log(document.getElementById('responseTextarea2').value)

    document.getElementById('sendResponse').click()

    setTimeout(getprsup, 5000);
    setTimeout(getslacklnk, 8000);
}

//main

if (localStorage.getItem('winTopServDsk') == null) { // начальное положение окна Service Desk
    localStorage.setItem('winTopServDsk', '120');
    localStorage.setItem('winLeftServDsk', '295');
}

let wintServDsk = document.createElement('div'); // создание окна ServiceDesk
document.body.append(wintServDsk);
wintServDsk.style = 'min-height: 165px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopServDsk') + 'px; left: ' + localStorage.getItem('winLeftServDsk') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintServDsk.style.display = 'none';
wintServDsk.setAttribute('id', 'AF_ServDsk');
wintServDsk.innerHTML = win_servicedesk;

var listenerServDsk = function (e, a) { // сохранение позиции окна ServiceDesk
    wintServDsk.style.left = Number(e.clientX - myX12) + "px";
    wintServDsk.style.top = Number(e.clientY - myY12) + "px";
    localStorage.setItem('winTopServDsk', String(Number(e.clientY - myY12)));
    localStorage.setItem('winLeftServDsk', String(Number(e.clientX - myX12)));
};

wintServDsk.onmousedown = function (a) { // изменение позиции окна ServiceDesk
    if (checkelementtype(a)) {
        window.myX12 = a.layerX;
        window.myY12 = a.layerY;
        document.addEventListener('mousemove', listenerServDsk);
    }
}
wintServDsk.onmouseup = function () { document.removeEventListener('mousemove', listenerServDsk); } // прекращение изменения позиции окна ServiceDesk

document.getElementById('servDsk').onclick = function () { // функция открытия главного окна SD +
    if (document.getElementById('AF_ServDsk').style.display == '') {
        document.getElementById('AF_ServDsk').style.display = 'none'
        document.getElementById('newtask').textContent = ''
        lasttsk = '';
    } else
        document.getElementById('AF_ServDsk').style.display = ''

    document.getElementById('idmymenu').style.display = 'none'

    checkjiraauth()

    // setTimeout(getprsuplasttask, 2000)

    const sdbtn = document.getElementsByClassName('sdbtn');
    for (let i = 0; i < sdbtn.length; i++) {
        sdbtn[i].onclick = function () {
            let activeBtnsd = document.getElementsByClassName('activebtnsd');
            for (let j = 0; j < activeBtnsd.length; j++) {
                activeBtnsd[j].classList.remove('activebtnsd');
            }
            this.classList.toggle('activebtnsd');
            let index = i;
            let elementId = otherOptions[index];
            document.getElementById(elementId).style.display = "block";

            let otherElements = document.querySelectorAll(otherOptions.filter((_, idx) => idx !== index).map(id => '#' + id).join(', '));
            for (let k = 0; k < otherElements.length; k++) {
                otherElements[k].style.display = 'none';
            }

            if (elementId === "academymobbugsoptions" || elementId === "mobbugsoptions") {
                document.getElementById('prioritymbugs').style.display = '';
                document.getElementById('custom_appinfo').style.display = '';
                document.getElementById('custom_deviceinfo').style.display = '';
            } else if (elementId === 'studcabmobbugskoptions') {
                document.getElementById('prioritymbugs').style.display = 'none';
                document.getElementById('custom_appinfo').style.display = '';
                document.getElementById('custom_deviceinfo').style.display = '';
            } else {
                document.getElementById('prioritymbugs').style.display = 'none';
                document.getElementById('custom_appinfo').style.display = 'none';
                document.getElementById('custom_deviceinfo').style.display = 'none';
            }
        }
    }

    buttons.forEach(button => {
        $(button).click(function () {
            remres(this);
        });
    });

} // tested

document.getElementById('AF_ServDsk').ondblclick = function (a) { // скрытие окна ServiceDesk по двойному клику
    if (checkelementtype(a)) { document.getElementById('hideMeSrvDsk').click(); }
}

document.getElementById('ServiceDeskinstr').onclick = function () {
    window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-ServiceDesk')
}

document.getElementById('hideMeSrvDsk').onclick = function () { //форма hide
    if (document.getElementById('AF_ServDsk').style.display == '') {
        $('.sdbtn').click(function () {
            $('.sdbtn').not(this).removeClass('activebtnsd');
            $(this).toggleClass('activebtnsd');
        });

        buttons.forEach(button => {
            $(button).click(function () {
                remres(this);
            });
        });

        document.getElementById('newtask').textContent = ''
        lasttsk = '';

        document.getElementById('AF_ServDsk').style.display = 'none'
    }
}

document.getElementById('refreshjiraauth').onclick = checkjiraauth; //функция обновления статуса авторизации

function remres(a) { // функция переключения класса по нажатию на кнопку
    buttons.forEach(button => {
        if (button !== a) {
            $(button).removeClass('activebtn');
        }
    });

    $(a).toggleClass('activebtn');
}

document.getElementById('createsd').addEventListener('click', function () { //функция создания задачи на сервис деск

    let priorityMobile = document.getElementById('prioritymbugs')
    let idUser = document.getElementById('custom_id')
    let appInfo = document.getElementById('custom_appinfo')
    let deviceInfo = document.getElementById('custom_deviceinfo')
    let descriptionField = encodeURIComponent(document.getElementById('custom_descr').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let stepsToReproduce = encodeURIComponent(document.getElementById('custom_str').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let expectedResult = encodeURIComponent(document.getElementById('custom_er').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let actualResult = encodeURIComponent(document.getElementById('custom_ar').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let activeButtons = document.querySelectorAll('.activebtn');

    if (priorityMobile.style.display == 'none' && appInfo.style.display == 'none' && deviceInfo.style.display == 'none') {
        for (const button of activeButtons) {
            sendRequest(idUser.value, descriptionField, stepsToReproduce, expectedResult, actualResult, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    } else if (priorityMobile.style.display == '' && appInfo.style.display == '' && deviceInfo.style.display == '') {
        for (const button of activeButtons) {
            sendRequestMobWithPriority(priorityMobile.value, idUser.value, appInfo.value, deviceInfo.value, descriptionField, stepsToReproduce, expectedResult, actualResult, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    } else if (priorityMobile.style.display == 'none' && appInfo.style.display == '' && deviceInfo.style.display == '') {
        for (const button of activeButtons) {
            sendRequestMobNoPriority(idUser.value, appInfo.value, deviceInfo.value, descriptionField, stepsToReproduce, expectedResult, actualResult, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    }

});
	//End of script
// }
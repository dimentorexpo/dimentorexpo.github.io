//Global variables
let jiratoken;
let jiratokennew;
let responsejira;
let psarr = [];
let firstEl;
let mmlink;
// let infoarr;
let lasttsk;
let prevtsk;
let flagpsis = 0;
let msgissnd = 0;
let varinfraOID; //переменная для хранения значения ID оператора в Infra
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
                        <button id="hideMeSrvDsk" class="buttonHide">hide</button>
						<button id="refreshjiraauth" title="Перепроверить авторизацию в Jira">🔄</button>
                        <button id="infratasklist" title="Откріть список своих задач в Infra">📑</button>
						<button id="ServiceDeskinstr" title="Инструкция по этой форме">❓</button>
						<span style="color:bisque">Infra Id:</span>
						<span id="jiratknstatus">🟢</span>
						<span style="color:yellow">Prev.tsk</span>
						<button id="prevtask" style="width: 78px" title="Предыдущая задача"></button>
						<span style="color:cyan">Last tsk</span>
						<button id="newtask" style="width: 78px" title="Последняя задача"></button>
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
                    <button class="sdbtn" id="optionAnalyst" style="margin-left:2px; margin-top:2px; width:80px; display: none;">TEST</button>
                    <button class="sdbtn" id="optionEdModel" style="margin-left:2px; margin-top:2px; width:80px;">🎓SmartL</button>
                    <button class="sdbtn" id="optionStudcabmobbugs" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓📱Bugs</button>
					<button class="sdbtn" id="optionMobbugs" style="margin-left:2px; margin-top:2px; width:80px;">📱Mobil bug</button>
                    <button class="sdbtn" id="optionAcademymobbugs" style="margin-left:2px; margin-top:2px; width:80px;">🅰📱🐞</button>
                </div>
				<div id="studcabmobbugskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-mobile-bugs; Cообщаем о проблемах в МП Skysmart Parents и в МП Skyeng главные страницы продуктов</p>
					<button class="stcabmbsbtn widthofsd" value="439">МП Skyeng: главная(кроме лайф и толкс) и стр подключ услуг</button>
					<button class="stcabmbsbtn widthofsd" value="440">МП Skyeng: расписание и переносы</button>
					<button class="stcabmbsbtn widthofsd" value="445">МП Skyeng: подбор П</button>
					<button class="stcabmbsbtn widthofsd" value="442">МП Skyeng: профиль У и настройки профиля, таймзоны</button>
					<button class="stcabmbsbtn widthofsd" value="443">МП Skyeng: стр оплаты и трансферы</button>
					<button class="stcabmbsbtn widthofsd" value="444">МП Skyeng: рефералка</button>
					<button class="stcabmbsbtn widthofsd" value="441">Skyeng: Stories</button>
					<button class="stcabmbsbtn widthofsd" value="446">МП Skysmart Parents</button>
					<button class="stcabmbsbtn widthofsd" value="447">Подземный стук</button>
				</div>

				<div id="teacherssrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#promise-keepers-qa-support; канал по вопросам ЛКП, ТРМ, corp учеников, ЛККК</p>
					<button class="teacbtn widthofsd" value="448">Статистика</button>
					<button class="teacbtn widthofsd" value="449">Моё обучение</button>
					<button class="teacbtn widthofsd" value="450">Перерыв</button>
					<button class="teacbtn widthofsd" value="451">Финансы</button>
					<button class="teacbtn widthofsd" value="452">Карта роста</button>
					<button class="teacbtn widthofsd" value="453">Расписание</button>
					<button class="teacbtn widthofsd" value="454">Запрос на перенос</button>
					<button class="teacbtn widthofsd" value="455">Виджет баланса</button>
					<button class="teacbtn widthofsd" value="456">Виджет отметки уроков</button>
					<button class="teacbtn widthofsd" value="457">Виджеты плана/факта уроков</button>
					<button class="teacbtn widthofsd" value="458">Виджет расписания на неделю</button>
					<button class="teacbtn widthofsd" value="459">Виджет KPI</button>
					<button class="teacbtn widthofsd" value="460">Виджет "Мои ученики"</button>
					<button class="teacbtn widthofsd" value="462">Подземный стук</button>
					<button class="teacbtn widthofsd" value="503">Corp:Регистр компании</button>
					<button class="teacbtn widthofsd" value="504">Corp:Подклю Self-Study</button>
					<button class="teacbtn widthofsd" value="505">Corp:Создание СП-контракта</button>
					<button class="teacbtn widthofsd" value="506">Corp:Документы (счета, договоры)</button>
					<button class="teacbtn widthofsd" value="507">Corp:Прайсы(расхожд цен, смена валюты)</button>
					<button class="teacbtn widthofsd" value="508">Corp:Проблемы с отчетами</button>
					<button class="teacbtn widthofsd" value="510">Corp:Вопросы по ЛККК</button>
					<button class="teacbtn widthofsd" value="511">Corp:Вопросы по СФ и ЧК</button>
				</div>
				<div id="crm2srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:160px; width:90%;">#crm2-support</p>
					<button class="crm2sbtn widthofsd" value="350">Вопросы по задачам "Сопровождения"</button>
					<button class="crm2sbtn widthofsd" value="351">Вопросы по задачам "Продаж"</button>
					<button class="crm2sbtn widthofsd" value="352">Вопросы по "Истории уроков"</button>
					<button class="crm2sbtn widthofsd" value="353">Вопросы про виджет "История платежей"</button>
					<button class="crm2sbtn widthofsd" value="354">Вопросы по "Визардам конвертации услуги"</button>
					<button class="crm2sbtn widthofsd" value="355">Вопросы о "История действий"</button>
					<button class="crm2sbtn widthofsd" value="356">Вопросы о карточке "Семья"</button>
					<button class="crm2sbtn widthofsd" value="357">Вопросы о "Профиле" заявки</button>
					<button class="crm2sbtn widthofsd" value="358">Вопросы по разделу "Коммуникации"</button>
					<button class="crm2sbtn widthofsd" value="359">Проблемы с ф-лом пула задач "список задач" сопровождение</button>
					<button class="crm2sbtn widthofsd" value="360">Проблемы с функционалом пула задач "список задач" продажи</button>
				</div>
				<div id="authsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#auth; Обсуждение общих вопросов по проектам Auth/ID (авторизация, роли и доступы, данные пользователей и т. д.)</p>
					<button class="authbtn widthofsd" value="309">Вопросы к разработке</button>
					<button class="authbtn widthofsd" value="310">Проблемы с 2FA : проблема с google authenticator</button>
					<button class="authbtn widthofsd" value="311">Проблемы с 2FA: не приходит письмо о восстановлении пароля</button>
					<button class="authbtn widthofsd" value="312">Проблемы с 2FA: не приходит смс</button>
					<button class="authbtn widthofsd" value="313">Удаление / добавление ролей </button>
					<button class="authbtn widthofsd" value="314">Удаление / добавление ролей Ученикам</button>
					<button class="authbtn widthofsd" value="315">Проверка логов в ID</button>
					<button class="authbtn widthofsd" value="316">Подземный стук</button>
					<button class="authbtn widthofsd" value="489">Проблема с контактными данными crm</button>
				</div>
				<div id="schedulesrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#study-coordinations-qa-support Канал по вопросам расписания ученика, ТТ, TRM, автоподбора и ручного подбора</p>
					<button class="schdbtn widthofsd" value="461">Вопросы по ТРМ</button>
					<button class="schdbtn widthofsd" value="412">Подключение АП</button>
					<button class="schdbtn widthofsd" value="413">Отключить АП в ЛКУ</button>
					<button class="schdbtn widthofsd" value="414">Вопросы по ТТ</button>
					<button class="schdbtn widthofsd" value="415">Подтв запр в ЛКП переподора ВП</button>
					<button class="schdbtn widthofsd" value="416">Почему нет задачи подбора?</button>
					<button class="schdbtn widthofsd" value="417">Подземный стук</button>
				</div>
				<div id="billingqasrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#billing-qa-support; Канал для рассмотрения причины расхождений баланса учеников</p>
					<button class="bilqabtn widthofsd" value="336">Вопросы по рассрочке ученика</button>
					<button class="bilqabtn widthofsd" value="337">Проверка баланса У на расхождения</button>
				</div>
				<div id="c1srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#c1-support; Поддержка витрины оплаты (Не виджет оплаты в pcs), Onboarding (Kids&Adult), Scoring, AutoIntroLesson (АвтоВУ)</p>
					<button class="c1sbtn widthofsd" value="338">Проблемы с версткой</button>
					<button class="c1sbtn widthofsd" value="339">Не завершился онбординг после оплаты</button>
					<button class="c1sbtn widthofsd" value="340">Циклические редиректы</button>
					<button class="c1sbtn widthofsd" value="341">Подземный стук</button>
				</div>
				<div id="billingsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:180px; width:90%;">#billing</p>
					<button class="billbtn widthofsd" value="317">Чеки/Инвойсы</button>
					<button class="billbtn widthofsd" value="318">Data analytics</button>
					<button class="billbtn widthofsd" value="319">Задача для разработки</button>
					<button class="billbtn widthofsd" value="320">Админка возвратов</button>
					<button class="billbtn widthofsd" value="321">Проблема с кодом для привязки карты</button>
					<button class="billbtn widthofsd" value="322">Вilling Payment Bot</button>
					<button class="billbtn widthofsd" value="323">Схемы вознаграждения </button>
					<button class="billbtn widthofsd" value="324">Самозанятые </button>
					<button class="billbtn widthofsd" value="325">Реквизиты</button>
					<button class="billbtn widthofsd" value="326">Выплаты</button>
					<button class="billbtn widthofsd" value="327">Списание средств</button>
					<button class="billbtn widthofsd" value="328">Возвраты</button>
					<button class="billbtn widthofsd" value="329">Платежные системы</button>
					<button class="billbtn widthofsd" value="330">Виджет оплаты</button>
					<button class="billbtn widthofsd" value="331">Оплата</button>
					<button class="billbtn widthofsd" value="332">Рассрочка</button>
					<button class="billbtn widthofsd" value="333">Подписки</button>
					<button class="billbtn widthofsd" value="334">Роли и доступы</button>
					<button class="billbtn widthofsd" value="335">Бизнес-анализ</button>
				</div>
				
				<div id="vimbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-bugs; Проблемы с Vimbox/Smartroom</p>
					<button class="vimbugsbtn widthofsd" value="471">Smartroom уроки 1:1</button>
					<button class="vimbugsbtn widthofsd" value="472">Smartroom групп и параллельные уроки</button>
					<button class="vimbugsbtn widthofsd" value="473">Smartroom страница ДЗ и тестов</button>
					<button class="vimbugsbtn widthofsd" value="474">Adults Self-Study (web версия, не мобилка)</button>
					<button class="vimbugsbtn widthofsd" value="475">Flip (web версия, не мобилка)</button>
					<button class="vimbugsbtn widthofsd" value="476">Виджет входа у взрослых У и П</button>
					<button class="vimbugsbtn widthofsd" value="477">Автоотметка по урокам взрослых У</button>
					<button class="vimbugsbtn widthofsd" value="478">Взрослый англиский: CMS и контент на взрослой платформе</button>
					<button class="vimbugsbtn widthofsd" value="479">Взрослый английский: Домашки, уроки, тесты</button>
				</div>				
				<div id="edumodeloptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#smart-learning-qa-support: Канал для обращений по функционалу Educational Model</p>
					<button class="edumodbtn widthofsd" value="366">Анкета целей</button>
					<button class="edumodbtn widthofsd" value="367">Сертификаты</button>
					<button class="edumodbtn widthofsd" value="369">Персотреки и виджет прогресса</button>
					<button class="edumodbtn widthofsd" value="368">Страница прогресса (progress)</button>
					<button class="edumodbtn widthofsd" value="370">Обратная связь</button>
				</div>
				<div id="vimvidoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-video-call; Разработка модуля видеосвязи</p>
					<button class="vimvidsbtn widthofsd" value="480">Обращение для QA</button>
				</div>
                <div id="chatqaoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque; font-size:18px; position:relative; top:7px; left:10px; width:90%;">#chat-qa-support; Решают проблемы с чатами в ЛКП и ЛКУ</p>
					<button class="chatqabtn widthofsd" value="342">Проблемы с загрузкой чата</button>
					<button class="chatqabtn widthofsd" value="343">Проблемы с отправкой сообщений в чате</button>
					<button class="chatqabtn widthofsd" value="344">Не приходят сообщения в/из чата в AutoFAQ</button>
					<button class="chatqabtn widthofsd" value="345">Уведомления о непрочитанном сообщении</button>
					<button class="chatqabtn widthofsd" value="346">Добавить чат между У и П</button>
					<button class="chatqabtn widthofsd" value="347">Удалить чат между У и П</button>
					<button class="chatqabtn widthofsd" value="348">Подземный стук</button>
                </div>
				<div id="tripwireoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#eco-tripwire-bugs; Life, Talks, РК adults, расширение переводчик для браузера</p>
					<button class="tripwbtn widthofsd" value="361">Расширение Vimbox Translate</button>
					<button class="tripwbtn widthofsd" value="362">Life</button>
					<button class="tripwbtn widthofsd" value="363">Talks</button>
					<button class="tripwbtn widthofsd" value="364">Simulator + Avokado</button>
					<button class="tripwbtn widthofsd" value="365">Обращение для QA</button>
				</div>
				<div id="analystoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#analysts-gm-tl; канал МЕРТВЫЙ НЕ ИСПОЛЬЗУЕМ В РАБОТЕ, ЭТО НЕ ШУТКА!, ТОЛЬКО ДЛЯ ТЕСТИРОВАНИЯ!</p>
					<button class="analystbtn widthofsd" value="300">Обращение для QA</button>
				</div>
				<div id="mobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#mobile-bugs; Канал обработки обращений по мобильному приложению Skyeng и Teachers.</p>
					<button class="mobbugsbtn widthofsd" value="384">Skyeng МП: авторизация</button>
					<button class="mobbugsbtn widthofsd" value="385">Skyeng МП: регистрация</button>
					<button class="mobbugsbtn widthofsd" value="386">Skyeng МП: регистрация через соц. сети</button>
					<button class="mobbugsbtn widthofsd" value="392">Skyeng МП: оплата</button>
					<button class="mobbugsbtn widthofsd" value="387">Skyeng МП: аторизация через соц. сети</button>
					<button class="mobbugsbtn widthofsd" value="388">Skyeng МП: чаты</button>
					<button class="mobbugsbtn widthofsd" value="389">Skyeng МП: пуши</button>
					<button class="mobbugsbtn widthofsd" value="390">Skyeng МП: force update</button>
					<button class="mobbugsbtn widthofsd" value="391">Skyeng МП: настройки</button>
					<button class="mobbugsbtn widthofsd" value="393">Skyeng МП: локализация(язык приложения, контента)</button>
					<button class="mobbugsbtn widthofsd" value="395">Teachers МП</button>
				</div>

				<div id="academymobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#academic-mobile-bugs; Канал обработки обращений по МП Skyeng связанных с обучением.</p>
					<button class="academymobbugsbtn widthofsd" value="301">МП Skyeng: Аудиокниги и Life + Talks</button>
					<button class="academymobbugsbtn widthofsd" value="302">МП Skyeng: Ситуации</button>
					<button class="academymobbugsbtn widthofsd" value="303">МП Skyeng: Видеопрактика</button>
					<button class="academymobbugsbtn widthofsd" value="304">МП Skyeng: Self Study</button>
					<button class="academymobbugsbtn widthofsd" value="305">МП Skyeng: тренажер слов</button>
					<button class="academymobbugsbtn widthofsd" value="306">МП Skyeng: Словарь</button>
					<button class="academymobbugsbtn widthofsd" value="307">МП Skyeng: уроки - образовательная часть</button>
					<button class="academymobbugsbtn widthofsd" value="308">МП Skyeng: Домашки</button>
				</div>

                <div id="studcaboptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-bugs; Сообщаем о проблемах во взрослом и детском ЛКУ (страницы на домене student.skyeng.ru)</p>
					<button class="studcabbtn widthofsd" value="418">Взрослый ЛКУ Главная страница</button>
					<button class="studcabbtn widthofsd" value="419">Детский ЛКУ Главная страница</button>
					<button class="studcabbtn widthofsd" value="426">Страница семьи и курсов</button>
					<button class="studcabbtn widthofsd" value="420">Stories </button>
					<button class="studcabbtn widthofsd" value="421">Реферальная страница</button>
					<button class="studcabbtn widthofsd" value="422">Страница оплаты, трансфера и истории баланса</button>
					<button class="studcabbtn widthofsd" value="423">Страница расписания и переноса урока</button>
					<button class="studcabbtn widthofsd" value="424">Страница преподавателя</button>
					<button class="studcabbtn widthofsd" value="425">Страница профиля У + настройки</button>
					<button class="studcabbtn widthofsd" value="428">Меню навигации (лейаут) </button>
					<button class="studcabbtn widthofsd" value="427">Страница шоукейса (подключение услуг)</button>
					<button class="studcabbtn widthofsd" value="429">Подземный стук</button>
                </div>

				<div id="inputfieldsdiv" style="display: none;">
					<select style="height:28px; margin-left: 21px; margin-top: 5px; display: none;" id="prioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="Blocker">Blocker</option>
							<option value="Critical">Critical</option>
							<option value="High">High</option>
							<option value="Major">Major</option>
							<option value="Minor">Minor</option>
							<option value="Trivial">Trivial</option>
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


//func getOperInfraId
function getInfraOId() {
	document.getElementById('responseTextarea1').value = `{}`
    document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/session";
    document.getElementById('responseTextarea3').value = 'infradata'
    document.getElementById('sendResponse').click()
	
	responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const rsparray = JSON.parse(responseTextarea1.getAttribute('infradata'));
        if (rsparray) {
			localStorage.setItem('infraOID',rsparray.id);
			document.getElementById('jiratknstatus').innerText = "🟢"
        }
        responseTextarea1.removeAttribute('infradata');
    });
}

function getprsuplasttask() { //функция для получения ссылки на последний созданный после отправки в канал тикет в джира +
    const responseTextarea1 = document.getElementById('responseTextarea1');
    const responseTextarea2 = document.getElementById('responseTextarea2');
    const responseTextarea3 = document.getElementById('responseTextarea3');
    const sendResponse = document.getElementById('sendResponse');
    const prevtask = document.getElementById('prevtask');

    responseTextarea1.value = `{}`;
    responseTextarea2.value = `https://api-infra.skyeng.ru/api/v1/rs/requests?reporterId=${varinfraOID}&approverId=${varinfraOID}&maxResults=40&page=1`;
    responseTextarea3.value = 'pstickets';
    sendResponse.click();

    responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const psarr = JSON.parse(responseTextarea1.getAttribute('pstickets'));
        if (psarr) {
            prevtsk = psarr.items[0].jiraIssueKey;
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

function getmmlink() {
	        if (newtask.innerText != '') {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + newtask.innerText ;
            document.getElementById('responseTextarea3').value = 'mmlinkhere'
            document.getElementById('sendResponse').click()
			
			    responseTextarea1.addEventListener("DOMSubtreeModified", function () {
				const infoarr = responseTextarea1.getAttribute('mmlinkhere');
				if (infoarr) {
					mmlink = infoarr.match(/">(https:\/\/mattermost.skyeng.tech.*?)<\/a>/)[1];
					console.log("Mattermost link " + mmlink);
                    sendComment("Mattermost link: " + mmlink);
				}
				responseTextarea1.removeAttribute('mmlinkhere');
			});

        } else console.log("Задача не была создана, поэтому в заметки нечего размещать")
}

function sendRequest(idstdserv, dscr, str, erx, ary, code) {
  let formData = new URLSearchParams();
  formData.append('requestTypeId', code);
  formData.append('reporterId', varinfraOID);
  formData.append('initiatorId', varinfraOID);
  formData.append('data[description]', decodeURIComponent(dscr).replaceAll('<br>','\n'))
  formData.append('data[reproduceSteps]', decodeURIComponent(str).replaceAll('<br>','\n'))
  formData.append('data[expectedResult]', decodeURIComponent(erx).replaceAll('<br>','\n'))
  formData.append('data[actualResult]', decodeURIComponent(ary).replaceAll('<br>','\n'))
  formData.append('data[userIds]', decodeURIComponent(idstdserv).replaceAll('<br>','\n'))

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
    mode: 'cors',
    credentials: 'include',
  };

  let requestOptionsString = JSON.stringify(requestOptions);

  document.getElementById('responseTextarea1').value = requestOptionsString;
  document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/rs/request";
  document.getElementById('responseTextarea3').value = 'responseRequest';

  // логируем входящие переменные и значение полей отправки запроса
  console.log(`${idstdserv} ${dscr} ${str} ${erx} ${ary} ${code}`);
  console.log(document.getElementById('responseTextarea1').value);
  console.log(document.getElementById('responseTextarea2').value);

  document.getElementById('sendResponse').click();
    
      responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const reqvarr = JSON.parse(responseTextarea1.getAttribute('responseRequest'));
        if (reqvarr) {
            lasttsk = reqvarr.jiraIssueKey;
            newtask.innerText = lasttsk;
			sendComment("Jira PS link:" + ' ' + "https://jira.skyeng.tech/browse/" + lasttsk);
			
			const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        }
        responseTextarea1.removeAttribute('responseRequest');
    });

   setTimeout(getmmlink, 8000);
}

function sendRequestMobNoPriority(idstdserv, ary, erx, str, dscr, deviceinfo , appinfo, code) {
		
  let formData = new URLSearchParams();
  formData.append('requestTypeId', code);
  formData.append('reporterId', varinfraOID);
  formData.append('initiatorId', varinfraOID);
  formData.append('data[appInfo]', decodeURIComponent(appinfo).replaceAll('<br>','\n'))
  formData.append('data[userDeviceInfo]', decodeURIComponent(deviceinfo).replaceAll('<br>','\n'))
  formData.append('data[description]', decodeURIComponent(dscr).replaceAll('<br>','\n'))
  formData.append('data[reproduceSteps]', decodeURIComponent(str).replaceAll('<br>','\n'))
  formData.append('data[expectedResult]', decodeURIComponent(erx).replaceAll('<br>','\n'))
  formData.append('data[actualResult]', decodeURIComponent(ary).replaceAll('<br>','\n'))
  formData.append('data[userIds]', decodeURIComponent(idstdserv).replaceAll('<br>','\n'))

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
    mode: 'cors',
    credentials: 'include',
  };

  let requestOptionsString = JSON.stringify(requestOptions);

  document.getElementById('responseTextarea1').value = requestOptionsString;
  document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/rs/request";
  document.getElementById('responseTextarea3').value = 'responseRequest';
	

    // логируем входящие переменные и значение полей отправки запроса
    console.log(appinfo + " " + deviceinfo + " " + dscr + " " + str + " " + erx + " " + ary + " " + idstdserv + " " + code)

    document.getElementById('sendResponse').click()
	
	      responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const reqvarr = JSON.parse(responseTextarea1.getAttribute('responseRequest'));
        if (reqvarr) {
            lasttsk = reqvarr.jiraIssueKey;
            newtask.innerText = lasttsk;
			sendComment("Jira PS link:" + ' ' + "https://jira.skyeng.tech/browse/" + lasttsk);
			
			const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        }
        responseTextarea1.removeAttribute('responseRequest');
    });

    setTimeout(getmmlink, 8000);
}

function sendRequestMobWithPriority(priorvalue, appinfo, deviceinfo, dscr, str, erx, ary, idstdserv, code) {
	
  let formData = new URLSearchParams();
  formData.append('requestTypeId', code);
  formData.append('reporterId', varinfraOID);
  formData.append('initiatorId', varinfraOID);
  formData.append('data[appInfo]', decodeURIComponent(appinfo).replaceAll('<br>','\n'))
  formData.append('data[userDeviceInfo]', decodeURIComponent(deviceinfo).replaceAll('<br>','\n'))
  formData.append('data[description]', decodeURIComponent(dscr).replaceAll('<br>','\n'))
  formData.append('data[reproduceSteps]', decodeURIComponent(str).replaceAll('<br>','\n'))
  formData.append('data[expectedResult]', decodeURIComponent(erx).replaceAll('<br>','\n'))
  formData.append('data[actualResult]', decodeURIComponent(ary).replaceAll('<br>','\n'))
  formData.append('data[userIds]', decodeURIComponent(idstdserv).replaceAll('<br>','\n'))
  formData.append('data[priority]', decodeURIComponent(priorvalue).replaceAll('<br>','\n'))

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
    mode: 'cors',
    credentials: 'include',
  };

  let requestOptionsString = JSON.stringify(requestOptions);

  document.getElementById('responseTextarea1').value = requestOptionsString;
  document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/rs/request";
  document.getElementById('responseTextarea3').value = 'responseRequest';
	
	
    // логируем входящие переменные и значение полей отправки запроса
    console.log(priorvalue + " " + appinfo + " " + deviceinfo + " " + dscr + " " + str + " " + erx + " " + ary + " " + idstdserv + " " + code)

    document.getElementById('sendResponse').click()
	
	      responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const reqvarr = JSON.parse(responseTextarea1.getAttribute('responseRequest'));
        if (reqvarr) {
            lasttsk = reqvarr.jiraIssueKey;
            newtask.innerText = lasttsk;
			sendComment("Jira PS link:" + ' ' + "https://jira.skyeng.tech/browse/" + lasttsk);
			
			const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        }
        responseTextarea1.removeAttribute('responseRequest');
    });

    setTimeout(getmmlink, 8000);
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

const inputsFieldsSD = document.getElementById('inputfieldsdiv');

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

	if (localStorage.getItem('infraOID') == null) {
		document.getElementById('jiratknstatus').innerText = "🔴"
		getInfraOId()
	} else varinfraOID = localStorage.getItem('infraOID');
	
    setTimeout(getprsuplasttask, 2000)

    const sdbtn = document.getElementsByClassName('sdbtn');
    for (let i = 0; i < sdbtn.length; i++) {
        sdbtn[i].onclick = function () {
            remres(this);
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
            inputsFieldsSD.style.display = 'none';
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

document.getElementById('infratasklist').onclick = function () { // открываем список задач оператора в Infra
    window.open('https://infra.skyeng.ru/request/list')
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
                inputsFieldsSD.style.display = 'none';
            });
        });

        document.getElementById('newtask').textContent = ''
        lasttsk = '';

        document.getElementById('AF_ServDsk').style.display = 'none'
    }
}

document.getElementById('refreshjiraauth').onclick = getInfraOId; //функция обновления статуса авторизации

function remres(a) {
    let isActive = $(a).hasClass('activebtn');
  
    if (isActive) {
      buttons.forEach(button => {
        $(button).show().removeClass('activebtn');
      });
      inputsFieldsSD.style.display = 'none';
    } else {
      buttons.forEach(button => {
        if (button !== a) {
          $(button).hide().removeClass('activebtn');
        }
      });
      $(a).addClass('activebtn').show();
      inputsFieldsSD.style.display = 'block';
    }
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
            sendRequestMobWithPriority(priorityMobile.value, appInfo.value, deviceInfo.value, descriptionField, stepsToReproduce, expectedResult, actualResult, idUser.value, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    } else if (priorityMobile.style.display == 'none' && appInfo.style.display == '' && deviceInfo.style.display == '') {
        for (const button of activeButtons) {
            sendRequestMobNoPriority(idUser.value, actualResult, expectedResult, stepsToReproduce, descriptionField, deviceInfo.value, appInfo.value, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    }

});

function SDtestbtn() {
    if (document.getElementById('optionAnalyst').style.display == 'none'){
        document.getElementById('optionAnalyst').style.display == ''
    } else {document.getElementById('optionAnalyst').style.display == 'none'}
}
	//End of script
// }

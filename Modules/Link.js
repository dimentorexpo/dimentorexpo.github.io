var win_Links =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
					<button title="Отображает актуальные креды к BrowserStack" id="creds" class="uplinksbar onlyfortp">ℹ</button>
					<button title="Открывает раздел для формирования заявки на удаленине персональных данных" id="deleteaclnk" class="uplinksbar onlyfortp">🗑</button>
					<button title="Открывает Базу знаний в Confluence" id="knoweledgebase" class="uplinksbar onlyfortp">📚</button>
					<button title="Открывает календарь для планирования проверки со 2ЛТП" id="datsyurl" class="uplinksbar onlyfortp">📆</button>
					<button title="Открывает меню для работы со статистикой, поиска чатов без тематики, с низкими оценками, по комментарию" id="getStats" class="uplinksbar onlyfortp">📋</button>
					<button title="Открывает сайт со списком пробников по экзаменам ОГЭ/ЕГЭ" id="probniki" class="uplinksbar onlyfortp">💼</button>
					<button title="Открывает инструкцию по пробникам" id="probnikinstr" class="uplinksbar onlyfortp">🗃</button>
					<button title="Открывает менюшку для просмотра списка ГУ" id="grouplist" class="uplinksbar onlyfortp">👩‍👧‍👧</button>
                    <button title="Открывает известные баги на платформе" id="confbugs" style="width: 50px; float: right; margin-right: 5px" class="uplinksbar onlyfortp">🐞</button>
                    <button title="Открывает Базу знаний в Confluence" id="knoweledgebaseKC" class="uplinksbar onlyforkc" style="display:none">📚</button>
                    <button title="Прослушать запись урока" id="lessonrecordKC" class="uplinksbar onlyforkc" style="display:none">👩‍🏫</button>
					<button title="Личный кабинет в Skyeng" id="skyhomeKC" class="uplinksbar onlyforkc" style="display:none">💼</button>
				</div>
                <div style="margin: 5px; width: 550px; display:none;" id="links_butKC" class="onlyforkc">
                    <button title="Открывает Timetable" id="timetableKC" style="width:105px">TimeTable</button>
                    <button title="Проведение операций с балансом ученика" id="CalcKC" style="width:105px">Калькулятор</button>
                    <button title="Проведение компенсаций, условия промокодов/сертиикатов" id="nachislyatorKC" style="width:105px">Начислятор</button>
                    <button title="Админка рассрочек" id="rassrochKC" style="width:105px">Рассрочка</button>
                    <button title="Админка подписок" id="pondpisKC" style="width:105px">Подписки</button>
                    <button title="Открывает Omnidesk" id="omniKC" style="width:105px">Omni</button>
                    <button title="Админка разговорных клубов" id="RKKC" style="width:105px">РК</button>
                    <button title="Актуальные шаблоны КЦ" id="shablKC" style="width:105px">Шаблоны</button>
                    <button title="Написать нарушение бизнес-процесса на менеджера" id="narushKC" style="width:105px">Нарушение БП</button>
                    <button title="Учет рабочего времени КЦ" id="grafKC" style="width:105px">График</button>
				</div>
				<div style="margin: 5px; width: 550px;" id="links_but" class="onlyfortp">
					<button title="Открывает Timetable" id="timetable" style="width:105px">TimeTable</button>
					<button title="Открывает админку Talks для поиска по ID П ID У , с которым идет урок" id="talksadm" style="width:105px">Talks</button>
					<button title="Открывает начислятор билинга для просмотра реального баланса у ученика и зависших уроков не на той STK" id="billingadm" style="width:105px">Начислятор</button>
					<button title="Открывает раздел для создания операции компенсации ученику" id="compens" style="width:105px">Компенсация</button>
					<button title="Открывает CMS хранилище материалов уроков" id="CMS" style="width:105px">CMS</button>
					<button title="Открывает админку пользователей" id="useradm" style="width:105px; margin-top: 3px">Админка</button>
					<button title="Открывает поиск платежа по данным карте, сумме, дате платежа" id="transactions" style="width:105px; margin-top: 3px">Поиск $</button>
					<button title="Открывает форму передачи предложений от пользователей" id="suggestions" style="width:105px; margin-top: 3px">Предложения</button>
					<button title="Открывает раздел с проверкой фичей(кругов), подключенных пользователю и добавление/удаление их" id="userfeatures" style="width:105px; margin-top: 3px">User Фичи</button>
					<button title="Открывает сайт для просмотра ошибок и логов в комнате" id="trshoothing" style="width:105px; margin-top: 3px">Troubleshooting</button>
					<button title="Открывает раздел в Confluence по созданию тестовых комнат" id="testroom" style="width:105px; margin-top: 3px">TestRooms</button>
					<button title="Открывает билинг для просмотра и редактирования подписок" id="subscribebilling" style="width:105px; margin-top: 3px">$Подписки</button>
					<button title="Открывает форму по аппеляциям аудита" id="apelation" style="width:105px; margin-top: 3px">Апелляции</button>
					<button title="открывает фичи групп для активации связи на ГУ" id="groupfeatures" style="width:105px; margin-top: 3px">Фичи Групп</button>
					<button title="Открывает сайт BrowserStack" id="browserstack" style="width:105px; margin-top: 3px">BrowserStaсk</button>
					<button title="Открывает раздел для проверки сертификата" id="certificates" style="width:105px; margin-top: 3px">Сертификаты</button>
					<button title="Открывает раздел для проверки промокодов" id="promocodes" style="width:105px; margin-top: 3px">Промокоды</button>
					<button title="Открывает форму по добавлению новых вопросов для консультации преподавателей" id="TCQnew" style="width:105px; margin-top: 3px">TC нов. вопр.</button>
					<button title="Открывает документ, где собраны вопросы и ответы для консультации преподавателей" id="TCQtable" style="width:105px; margin-top: 3px">TC таблица</button>
				</div>
				<div style="margin: 5px; width: 550px" id="links_box" class="onlyfortp">
					<input id="cpuname" placeholder="CPU name" title="вводим название процессора, чтобы сразу перейти на сайт с проверкой рейтинга CPU" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="benchmark">🔎</button>
					<input id="studguid" placeholder="ID У ГУ" title="вводим ID У, чтобы зайти в профиль ученика из групповых  уроков (увидеть историю занятий, баланс, препода)" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="sguid">🔎</button>
					<input id="creditstatus" placeholder="ID У рассрочка" title="вводим ID У, чтобы получить прямую ссылку для проверки рассрочек ученика" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="credits">🔎</button>
					<input id="iplookup" placeholder="IP У/П/Vimbox" title="вводим IP У/П/Платформы, чтобы получить информацию о месторасположении географического адреса и получения информации о хостинге" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gotolookip">🔎</button>
					<input id="lgssearch" placeholder="ID Группы" title="Введите ID LGS или обычной группы KGL для просмотра информации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getlgsinfo">🔎</button>
					<input id="cmsstepid" placeholder="CMS stepUUID" title="вводим stepUUID, чтобы сразу попасть в ЦМС на нужный урок и найти на нем наш слайд и проверить" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="cmsid">🔎</button>
					<input id="idforservicelocaleru" placeholder="ID У обсл RU" title="вводим ID У и по нажатию изменяем сразу ему язык обслуживания на русский" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="setservicelocaleru">🚀</button>
					<input id="setidformobpass" placeholder="ID У/П МП" title="введите ID У/П для генерации разового пароля он будет отображен в поле ввода ID и скопирован в  буфер обмена" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getmobpasscode" style="width: 25.23px;">🚀</button>
					<input id="trshooterhash" placeholder="hash trshooter" title="Вводим хеш комнаты чтобы посмотреть сразу инфу в трабл шутере" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gettrshinfo" style="width: 25.23px;">🚀</button>
					<input id="lookhash" placeholder="roomhash" title="вставляем хэш, копируем в буфер код, со стороны П в консоли выполняем, и в Network смотрим roomhash для какого ученика была создана комната" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gethash" style="width: 25.23px;">💾</button>
					<input id="enablerAP" placeholder="ID услуги(АП)" title="копируем услуги, где нужно активировать АП и сохраняем в буфер, в ЛКУ переходим по ссылке для активации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getenablerAP" style="width: 25.23px;">💾</button>
					<input id="skipAP" placeholder="ID ус(skipАП)" title="копируем услуги, где нужно пропустить АП и сохраняем в буфер, в ЛКУ переходим по ссылке для деактивации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getskipAP" style="width: 25.23px;">💾</button>
					<input id="skiponboarding" placeholder="ID ус(skip Onbo)" title="копируем услуги, где нужно отключить онбоардинг в ЛКУ" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="doskiponboard" style="width: 25.23px;">💾</button>
					<input id="idteacheradult" placeholder="ID П add 💬 ->" title="введите айди П и во второе поле справа ID У для копирования команды в буфер обмена и выполнения ее после авторизации в профиль П для добавления чата с учениками как adults так и kids (авторизовались - ввели айди и скопировали и выполнили в консоле)" autocomplete="off" type="text" style="text-align: center; width: 118px; color: black; margin-top: 5px">
					<input id="idstudentadult" placeholder="<- ID У add 💬" title="введите айди У и во второе поле слева ID П для копирования команды в буфер обмена и выполнения ее после авторизации в профиль П для добавления чата с учениками как adults так и kids (авторизовались - ввели айди и скопировали и выполнили в консоле)" autocomplete="off" type="text" style="text-align: center; width: 118px; color: black; margin-top: 5px">
					<button id="setchatsadults" style="width: 25.23px;">💾</button>
					<input id="reportmvu" placeholder="У отчет МВУ" title="Введите ID ученика, чтобы в буфер обмена скопировать ссылку на отчет МВУ и открывать ее под преподавателем" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getmvureport" style="width: 25.23px;">💾</button>
				</div>
				<div style="margin: 5px; width: 550px" id="links_butd" class="onlyfortp">
					<button title="копирует в буфер обмена команду setstatus('classwork') для перезапуска уроков" id="restartlesson" style="width:100px">Redo MAT💾</button>
					<button title="копирует в буфер обмена команду для разовой актиивации кнопки New Student на платформе Adult английского языка" id="enableNS" style="width:100px">Enable NS💾</button>
					<button title="отображает актуальную версию iOS приложения" id="curVeriOS" style="float: right; margin-right: 10px;"></button>
			  	    <button title="Отображает актуальную версию Android приложения" id="curVerAndroid" style="float: right; margin-right: 5px;"></button>
			  	    <button title="Открывает Confluence с инструкцией по расширению" id="faqext" style="float: right; margin-right: 5px;">ChMAF</button>
				</div>
			</span>
	</span>
</div>`;

if (localStorage.getItem('winTopLinks') == null) { // началоное положение окна ссылок (если не задано ранее)
    localStorage.setItem('winTopLinks', '120');
    localStorage.setItem('winLeftLinks', '295');
}

let wintLinks = document.createElement('div'); // создание окна ссылок
document.body.append(wintLinks);
wintLinks.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLinks') + 'px; left: ' + localStorage.getItem('winLeftLinks') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLinks.style.display = 'none';
wintLinks.setAttribute('id', 'AF_Links');
wintLinks.innerHTML = win_Links;

if (localStorage.getItem('scriptAdr') != TP_addr && localStorage.getItem('scriptAdr') != TP_addrRzrv) {
    let needtohide = document.getElementsByClassName('onlyfortp')
    for (i = 0; i < needtohide.length; i++) {
        needtohide[i].style.display = 'none'
    }

    let needtoopen = document.getElementsByClassName('onlyforkc')
    for (i = 0; i < needtoopen.length; i++){
        needtoopen[i].style.display = ''
    }
}

var listenerLinks = function (e, a) { // сохранение позиции окна ссылок
    wintLinks.style.left = Number(e.clientX - myX4) + "px";
    wintLinks.style.top = Number(e.clientY - myY4) + "px";
    localStorage.setItem('winTopLinks', String(Number(e.clientY - myY4)));
    localStorage.setItem('winLeftLinks', String(Number(e.clientX - myX4)));
};

wintLinks.onmousedown = function (a) { // изменение позиции окна ссылок
    if (checkelementtype(a)) {
        window.myX4 = a.layerX;
        window.myY4 = a.layerY;
        document.addEventListener('mousemove', listenerLinks);
    }
}
wintLinks.onmouseup = function () { document.removeEventListener('mousemove', listenerLinks); } // прекращение изменения позиции окна ссылок

document.getElementById('AF_Links').ondblclick = function (a) { // скрытие окна ссылок по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_Links').style.display = 'none'; }
}

    document.getElementById('links').onclick = function () { //открывает окно ссылок
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
        else {
            document.getElementById('AF_Links').style.display = ''

            for (let i = 0; i < table.length; i++) {
                if (table[i][3] == "iOS Version")
                    document.getElementById('curVeriOS').innerText = "iOS: " + table[i][4];

                if (table[i][3] == "Android Version")
                    document.getElementById('curVerAndroid').innerText = "Android: " + table[i][4]
            }
        }
    }
	
	    document.getElementById('hideMe').onclick = function () { // скрытие окна ссылок
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
    }
	
	
	    document.getElementById('creds').onclick = function () { // разная полезная актуальная информация
        alert("Актуальные креды для BrowserStack:                                                     login: skyeng.infra@gmail.com , pwd: NmqvrSCx=y>c_CBTGl@N2@H");
    }

    document.getElementById('knoweledgebase').onclick = function () { // открытие Confluence БЗ 2.0
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=25407293")
    }

    document.getElementById('datsyurl').onclick = function () { // открытие Календаря
        window.open("https://datsy.ru/")
    }

    document.getElementById('knoweledgebaseKC').addEventListener('click', function () { // открытие Confluence Customer Service WIKI для КЦ
        window.open("https://confluence.skyeng.tech/display/CSW/Customer+Service+WIKI")
    }) 

    document.getElementById('lessonrecordKC').addEventListener('click', function () { // открытие записи уроков для КЦ
        window.open("https://tramway.skyeng.ru/record")
    }) 

    document.getElementById('skyhomeKC').addEventListener('click', function () { // открытие Skyeng Home для КЦ
        window.open("https://home.skyeng.ru/dashboard")
    })

    document.getElementById('timetableKC').addEventListener('click', function () { // открытие Timetable для КЦ
        window.open("https://timetable.skyeng.ru/")
    })

    document.getElementById('CalcKC').addEventListener('click', function () { // открытие Калькулятор для КЦ
        window.open("https://billing-api.skyeng.ru/operations")
    })

    document.getElementById('nachislyatorKC').addEventListener('click', function () { // открытие Начислятор для КЦ
        window.open("https://billing-marketing.skyeng.ru/accrual-operations/create")
    })

    document.getElementById('rassrochKC').addEventListener('click', function () { // открытие Рассрочки для КЦ
        window.open("https://accounting.skyeng.ru/credit/list")
    })

    document.getElementById('pondpisKC').addEventListener('click', function () { // открытие Подписки для КЦ
        window.open("https://billing-api.skyeng.ru/subscriptions")
    })

    document.getElementById('omniKC').addEventListener('click', function () { // открытие Omni для КЦ
        window.open("https://skyeng.omnidesk.ru/")
    })

    document.getElementById('RKKC').addEventListener('click', function () { // открытие админки РК для КЦ
        window.open("https://group.skyeng.ru/admin/?crudAction=index&crudControllerFqcn=App%5CController%5CAdmin%5CClubMemberCrudController&signature=V8w5PW8LT3GcoYMoSYzprG1lCW8F5sb5y7Bdrxh08pc")
    })

    document.getElementById('shablKC').addEventListener('click', function () { // открытие актуальных габлонов для КЦ
        window.open("https://docs.google.com/spreadsheets/d/14paTabjaJcRIvlpTQzdGePltiN0bsPaFjFEbn4DD3Ho/edit#gid=410124091")
    })

    document.getElementById('narushKC').addEventListener('click', function () { // открытие формы нарушений для КЦ
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSeAxtdad9yc5iLo-7v4rqMj5M2wdaJKOpzy5X_eWkHqHWY9sg/viewform")
    })

    document.getElementById('grafKC').addEventListener('click', function () { // открытие гркфика работы для КЦ
        window.open("https://docs.google.com/spreadsheets/d/1SiD1yfpzIEF8ZafVXnq0Z-hyF0b45aAQ8s6BWgy-s0c/edit#gid=1933422994")
    })

    document.getElementById('timetable').addEventListener('click', function () {
        window.open("https://timetable.skyeng.ru/")    // копируем в буфер ссылку на Timetable
    })

    document.getElementById('faqext').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971")    // открываем инструкцию по расширению
    })

    document.getElementById('curVeriOS').addEventListener('click', function () {
        window.open("https://apps.apple.com/ru/app/skyeng-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1065290732")    // открываем инструкцию по расширению
    })

    document.getElementById('curVerAndroid').addEventListener('click', function () {
        window.open("https://play.google.com/store/apps/details?id=skyeng.words.prod")    // открываем инструкцию по расширению
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

    document.getElementById('suggestions').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/viewform?fbzx=4442277476040311569")    // открываем ссылку в новой вкладке на  Предложения/пожелания
    })
    document.getElementById('transactions').addEventListener('click', function () {
        window.open("https://accounting.skyeng.ru/userpayment/search/transaction")    // открываем ссылку в новой вкладке на  Поиск транзакций
    })
    document.getElementById('CMS').addEventListener('click', function () {
        window.open("https://cms-vimbox.skyeng.ru/vim")    // открываем ссылку в новой вкладке на CMS
    })
    document.getElementById('subscribebilling').addEventListener('click', function () {
        window.open("https://billing-api.skyeng.ru/subscriptions")    // открываем ссылку в новой вкладке на Необоснованные оценки ТП АФ
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
    document.getElementById('trshoothing').addEventListener('click', function () {
        window.open("https://video-trouble-shooter.skyeng.ru/")    // открываем ссылку в новой вкладке на TRM 2.0
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

    document.getElementById('getmvureport').onclick = function () {                  //поиск по имени процессора на сайте cpubenchmark
        if (reportmvu.value == "")
            console.log('Введите ID в поле')
        else {
            copyToClipboard('https://marketing-core.skyeng.ru/report/html/report?student_id=' + reportmvu.value);
        };
        document.getElementById('getmvureport').innerHTML = "✅";
        setTimeout(function () { document.getElementById('getmvureport').innerHTML = "💾" }, 2000);
        reportmvu.value = "";
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
	
	    document.getElementById('gettrshinfo').onclick = function () {               // сохранение в буфере айди ученика для просмотра всего списка ДЗ по нему
        let trshootlnk = 'https://video-trouble-shooter.skyeng.ru/?hash=';
        if (trshooterhash.value == "")
            console.log('Введите id  ученика в поле')
        else {
            window.open(trshootlnk + trshooterhash.value);
        };
        trshooterhash.value = "";
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

    document.getElementById('setchatsadults').onclick = function () {                  // добавляем чаты с учениками adults
        let hashlnk = 'fetch("https://rooms-vimbox.skyeng.ru/users/api/v1/teachers/' + document.getElementById('idteacheradult').value.trim() + '/students"';
        if (idteacheradult.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard("fetch('https://notify-vimbox.skyeng.ru/api/v1/chat/contact', { method: 'POST', headers: {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({userId1:" + document.getElementById('idteacheradult').value + "," + "userId2:" + document.getElementById('idstudentadult').value + "," + "})})")
        }
        document.getElementById('setchatsadults').innerHTML = "✅";
        setTimeout(function () { document.getElementById('setchatsadults').innerHTML = "💾" }, 2000);
        idteacheradult.value = "";
        idstudentadult.value = "";
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


    document.getElementById('doskiponboard').onclick = function () {               // сохранение в буфере ссылки для активации АП
        let skiponblnk = 'https://student.skyeng.ru/product-stage?stage=onboarding&educationServiceId=';
        if (skiponboarding.value == "")
            console.log('Введите ID услуги в поле')
        else {
            copyToClipboard(skiponblnk + skiponboarding.value);
        };
        document.getElementById('doskiponboard').innerHTML = "✅";
        setTimeout(function () { document.getElementById('doskiponboard').innerHTML = "💾" }, 2000);
        skiponboarding.value = "";
    }
	
	   document.getElementById('setservicelocaleru').onclick = function () { // меняет язык обслуживания выбранного пользователя в вензеле на русский но через кнопку в "L"
        document.getElementById('responseTextarea1').value = `{
		   "headers": {
			"content-type": "application/json",
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
	
	document.getElementById('deleteaclnk').addEventListener('click', function () {
        window.open("https://infra.skyeng.ru/request/create/166")    // открываем ссылку в новой вкладке для создания задачи на удаление аккаунта
    })

    document.getElementById('probniki').addEventListener('click', function () {
        window.open("https://docs.google.com/spreadsheets/d/1Lj1CKSavSWTx_-z3TwxJBUb1fFoVI0Lt7j-BA3OU96s/edit?pli=1#gid=0")    // открывает график пробников и там же ссылки на них будут
    })

    document.getElementById('grouplist').addEventListener('click', function () {
        if (document.getElementById('AF_GrList').style.display == '')
            document.getElementById('AF_GrList').style.display = 'none'
        else
            document.getElementById('AF_GrList').style.display = ''
    })

    document.getElementById('probnikinstr').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=82215113")    // открывает график пробников и там же ссылки на них будут
    })
	
	    document.getElementById('gotolookip').onclick = function () { // проверка информации по айпишнику ученика/препода/ хостинга
        let iplink = 'https://check-host.net/ip-info?host=';
        if (iplookup.value == "")
            console.log('Введите ip в поле')
        else {
            window.open(iplink + iplookup.value);
        };
        iplookup.value = "";
    }
	
	
    document.getElementById('getlgsinfo').onclick = function () { // открытие админки LGS по ID группы
        let lgslink = 'https://learning-groups-storage.skyeng.ru/group/';
        if (lgssearch.value == "")
            console.log('Введите текст в поле')
        else {
            window.open(lgslink + lgssearch.value + '?cp=(section:participants)');
        };
        lgssearch.value = "";
    }
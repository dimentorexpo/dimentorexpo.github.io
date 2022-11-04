var win_Links =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
					<button title="Отображает актуальные креды к BrowserStack" id="creds" class="uplinksbar">ℹ</button>
					<button title="Открывает раздел для формирования заявки на удаленине персональных данных" id="deleteaclnk" class="uplinksbar">🗑</button>
					<button title="Открывает Базу знаний в Confluence" id="knoweledgebase" class="uplinksbar">📚</button>
					<button title="Открывает календарь для планирования проверки со 2ЛТП" id="datsyurl" class="uplinksbar">📆</button>
					<button title="Открывает меню для работы со статистикой, поиска чатов без тематики, с низкими оценками, по комментарию" id="getStats" class="uplinksbar">📋</button>
					<button title="Открывает сайт со списком пробников по экзаменам ОГЭ/ЕГЭ" id="probniki" class="uplinksbar">💼</button>
					<button title="Открывает инструкцию по пробникам" id="probnikinstr" class="uplinksbar">🗃</button>
					<button title="Открывает менюшку для просмотра списка ГУ" id="grouplist" class="uplinksbar">👩‍👧‍👧</button>
                    <button title="Открывает известные баги на платформе" id="confbugs" style="width: 50px; float: right; margin-right: 5px" class="uplinksbar">🐞</button>
				</div>
				<div style="margin: 5px; width: 550px;" id="links_but">
					<button title="Открывает Timetable" id="timetable" style="width:105px">TimeTable</button>
					<button title="Открывает админку Talks для поиска по ID П ID У , с которым идет урок" id="talksadm" style="width:105px">Talks</button>
					<button title="Открывает начислятор билинга для просмотра реального баланса у ученика и зависших уроков не на той STK" id="billingadm" style="width:105px">Начислятор</button>
					<button title="Открывает раздел для создания операции компенсации ученику" id="compens" style="width:105px">Компенсация</button>
					<button title="Открывает CMS хранилище материалов уроков" id="CMS" style="width:105px">CMS</button>
					<button title="Открывает админку пользователей" id="useradm" style="width:105px; margin-top: 3px">Админка</button>
					<button title="Открывает поиск платежа по данным карте, сумме, дате платежа" id="transactions" style="width:105px; margin-top: 3px">Поиск $</button>
					<button title="Открывает форму передачи предложений от пользователей" id="suggestions" style="width:105px; margin-top: 3px">Предложения</button>
					<button title="Открывает раздел с проверкой фичей(кругов), подключенных пользователю и добавление/удаление их" id="userfeatures" style="width:105px; margin-top: 3px">User Фичи</button>
					<button title="Открывает  CMS детских предметов" id="kidscms" style="width:105px; margin-top: 3px">Kids CMS</button>
					<button title="Открывает раздел в Confluence по созданию тестовых комнат" id="testroom" style="width:105px; margin-top: 3px">TestRooms</button>
					<button title="Открывает билинг для просмотра и редактирования подписок" id="subscribebilling" style="width:105px; margin-top: 3px">$Подписки</button>
					<button title="Открывает форму по аппеляциям аудита" id="apelation" style="width:105px; margin-top: 3px">Апелляции</button>
					<button title="открывает фичи групп для активации связи на ГУ" id="groupfeatures" style="width:105px; margin-top: 3px">Фичи Групп</button>
					<button title="Открывает сайт BrowserStack" id="browserstack" style="width:105px; margin-top: 3px">BrowserStaсk</button>
					<button title="Открывает раздел для проверки сертификата" id="certificates" style="width:105px; margin-top: 3px">Сертификаты</button>
					<button title="Открывает раздел для проверки промокодов" id="promocodes" style="width:105px; margin-top: 3px">Промокоды</button>
					<button title="Открывает форму по добавлению новых вопросов для консультации преподавателей" id="TCQnew" style="width:105px; margin-top: 3px">TC нов. вопр.</button>
					<button title="Открывает документ, где собраны вопросы и ответы для консультации преподавателей" id="TCQtable" style="width:105px; margin-top: 3px">TC таблица</button>	
					<button title="Открывает сайт для просмотра ошибок и логов в комнате" id="trshoothing" style="width:105px; margin-top: 3px">Troubleshooting</button>
				</div>
				<div style="margin: 5px; width: 550px" id="links_box">
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
				</div>
				<div style="margin: 5px; width: 550px" id="links_butd">
					<button title="копирует в буфер обмена команду setstatus('classwork') для перезапуска уроков" id="restartlesson" style="width:100px">Redo MAT💾</button>
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
        getversionsapp()
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

document.getElementById('timetable').addEventListener('click', function () { // копируем в буфер ссылку на Timetable
    window.open("https://timetable.skyeng.ru/")    
})

document.getElementById('faqext').addEventListener('click', function () { // открываем инструкцию по расширению
    window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971")    
})

document.getElementById('curVeriOS').addEventListener('click', function () { // открываем актуальную версию приложения iOS
    window.open("https://apps.apple.com/ru/app/skyeng-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1065290732")
})

document.getElementById('curVerAndroid').addEventListener('click', function () { // открываем актуальную версию приложения Android
    window.open("https://play.google.com/store/apps/details?id=skyeng.words.prod")
})

document.getElementById('talksadm').addEventListener('click', function () { // открываем ссылку в новой вкладке на  Talks админку
    window.open("https://vimbox.skyeng.ru/talks/admin/statistics")
})

document.getElementById('billingadm').addEventListener('click', function () { // открываем ссылку в новой вкладке на  Начислятор
    window.open("https://billing-api.skyeng.ru/operations")    
})

document.getElementById('compens').addEventListener('click', function () { // открываем ссылку в новой вкладке на  Компенсации
    window.open("https://billing-marketing.skyeng.ru/accrual-operations/create")
})

document.getElementById('useradm').addEventListener('click', function () { // открываем ссылку в новой вкладке на  Пользовательская админка
    window.open("https://id.skyeng.ru/admin/users")
})

document.getElementById('suggestions').addEventListener('click', function () { // открываем ссылку в новой вкладке на  Предложения/пожелания
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/viewform?fbzx=4442277476040311569")
})

document.getElementById('transactions').addEventListener('click', function () { // открываем ссылку в новой вкладке на  Поиск транзакций
    window.open("https://accounting.skyeng.ru/userpayment/search/transaction")    
})

document.getElementById('CMS').addEventListener('click', function () { // открываем ссылку в новой вкладке на CMS
    window.open("https://cms-vimbox.skyeng.ru/vim")    
})

document.getElementById('subscribebilling').addEventListener('click', function () { // открываем ссылку в новой вкладке на Необоснованные оценки ТП АФ
    window.open("https://billing-api.skyeng.ru/subscriptions")    
})

document.getElementById('apelation').addEventListener('click', function () { // открываем ссылку в новой вкладке на Форма для апелляций чатов ТП АФ
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdgsb6pte1H1dz15Eb5NjDe0gj3kEnh0hTe6Cgy8d81mT7NUA/viewform")    
})

document.getElementById('groupfeatures').addEventListener('click', function () { // открываем редактор фич группя для активации видеосвязи на ГУ
    window.open("https://vimbox.skyeng.ru/circles/group/editor ")    
})

document.getElementById('confbugs').addEventListener('click', function () { // открываем ссылку список багов в confluence
    window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=96042583")    
})

document.getElementById('restartlesson').addEventListener('click', function () { // копируем ссылку в буфер для перезапуска урока
    copyToClipboard1("setStatus('classwork')")   
    document.getElementById('restartlesson').innerHTML = "Copied!";
    setTimeout(function () { document.getElementById('restartlesson').innerHTML = "Redo MAT💾" }, 2000);
})

document.getElementById('browserstack').addEventListener('click', function () { // открываем ссылку в новой вкладке на Browserstak
    window.open("https://www.browserstack.com/users/sign_in")    
})

document.getElementById('trshoothing').addEventListener('click', function () { // открываем ссылку в новой вкладке на TRM 2.0
    window.open("https://video-trouble-shooter.skyeng.ru/")    
})

document.getElementById('testroom').addEventListener('click', function () { // открываем ссылку в админку тестовых комнат
    window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=82244638")    
})

document.getElementById('certificates').addEventListener('click', function () { // открываем ссылку в новой вкладке на Подарочные сертификаты
    window.open("https://billing-marketing.skyeng.ru/certificate/certSearch")    
})

document.getElementById('promocodes').addEventListener('click', function () { // открываем ссылку в новой вкладке на Промокоды
    window.open("https://billing-marketing.skyeng.ru/promocode/list")    
})

document.getElementById('TCQnew').addEventListener('click', function () { // открываем ссылку в новой вкладке на форму для внесения вопросов от П TC
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfZbw1GkZzerHWQGGbYslV6AsGTGxEKhNZFC1LV-TySHca9Fw/viewform")    
})

document.getElementById('TCQtable').addEventListener('click', function () { // открываем ссылку в новой вкладке на таблицу вопросов-вопросов от П TC
    window.open("https://docs.google.com/spreadsheets/d/1PVE_GnLoWESTzzMxb2Klwntesqxv1l3Ir8kaLezfiEM/edit#gid=0")    
})

document.getElementById('kidscms').addEventListener('click', function () { // открываем ссылку в новой вкладке Kids CMS
    window.open("https://vimbox.skyeng.ru/kids/math/cms/lessons/1")    
})

document.getElementById('userfeatures').addEventListener('click', function () { // открываем ссылку в новой вкладке на проверку фичей пользователя
    window.open("https://vimbox.skyeng.ru/circles/editor")    
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
        copyToClipboard1(hashlnk + lookhash.value + "\", \{ \"method\":\"GET\",   \"credentials\":\"include\" \} ) \;");
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
        copyToClipboard1(enableAPlnk + enablerAP.value);
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
        copyToClipboard1(skipAPlnk + skipAP.value);
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
        copyToClipboard1(skiponblnk + skiponboarding.value);
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
	
document.getElementById('deleteaclnk').addEventListener('click', function () { // открываем ссылку в новой вкладке для создания задачи на удаление аккаунта
    window.open("https://infra.skyeng.ru/request/create/166")    
})

document.getElementById('probniki').addEventListener('click', function () { // открывает график пробников и там же ссылки на них будут
    window.open("https://docs.google.com/spreadsheets/d/1Lj1CKSavSWTx_-z3TwxJBUb1fFoVI0Lt7j-BA3OU96s/edit?pli=1#gid=0")    
})

document.getElementById('grouplist').addEventListener('click', function () { // открывает окно просмотра информации о групповых уроков
    if (document.getElementById('AF_GrList').style.display == '')
        document.getElementById('AF_GrList').style.display = 'none'
    else
        document.getElementById('AF_GrList').style.display = ''
})

document.getElementById('probnikinstr').addEventListener('click', function () { // открывает график пробников и там же ссылки на них будут
    window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=82215113")    
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
let versionsfromdoc;
let versionscontainer;

async function getversionsapp() {

        versionsfromdoc = 'https://script.google.com/macros/s/AKfycbwgym7WoXavCcMa7mpzlA4GHGncpWixKwyxhSJT1TU8tZg4KmRemyZqyQ3c5G2cKTxDrQ/exec'
        await fetch(versionsfromdoc).then(r => r.json()).then(r => versionsdata = r)
        versionscontainer = versionsdata.result;
        console.log(versionsdata.result) //получим список версий

        for (let i = 0; i < versionscontainer.length; i++) {
            if (versionscontainer[i][0] == "iOS Version")
                document.getElementById('curVeriOS').innerText = "iOS: " + versionscontainer[i][1];

            if (versionscontainer[i][0] == "Android Version")
                document.getElementById('curVerAndroid').innerText = "Android: " + versionscontainer[i][1]
        }
}
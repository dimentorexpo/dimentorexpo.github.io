var win_Links =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
                    <button title="Открывает Базу знаний в Confluence" id="knoweledgebaseKC" class="uplinksbar onlyforkc">📚</button>
                    <button title="Прослушать запись урока" id="lessonrecordKC" class="uplinksbar onlyforkc">👩‍🏫</button>
					<button title="Личный кабинет в Skyeng" id="skyhomeKC" class="uplinksbar onlyforkc">💼</button>
				</div>
                <div style="margin: 5px; width: 550px;" id="links_butKC">
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
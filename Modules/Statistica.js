let activeopersId=[];
async function getStats() { // функция получения статистики за день (сколько чатов закрыто, пощупано, время работы)
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

    const padStart = (string, targetLength, padString) => {
        return String(string).padStart(targetLength, padString);
    }

    const opSection = document.querySelector('.user_menu-dropdown-user_name').textContent.split('-')[0];
    console.log("Department:", opSection);

    const currentDate = new Date();
    const previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    const date1 = currentDate.getDate().toString().padStart(2, '0');
    const date2 = previousDate.getDate().toString().padStart(2, '0');
    const month1 = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const month2 = (previousDate.getMonth() + 1).toString().padStart(2, '0');

    const str1 = `${currentDate.getFullYear()}-${month1}-${date1}T21:00:00Z`;
    const str2 = `${previousDate.getFullYear()}-${month2}-${date2}T21:00:00Z`;

    const response = await fetch(`https://skyeng.autofaq.ai/api/reason8/reports/operatorActivityTable?dateFrom=${str2}&dateTo=${str1}`);
    const data = await response.json();
    const arrayvars = data.rows.filter(row => row.operator.indexOf(opSection) !== -1);
    arrayvars.sort((a, b) => b.conversationClosed - a.conversationClosed);
	activeopersId = arrayvars.map(el => el.operatorId)


    var operatorId = []
    var operatorNames = []
    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(result => b = result.json()).then(b => b.onOperator.forEach(k => {
        if (k.operator != null)
            // if (k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == opSection) {
            if ((k.operator.kbs.indexOf(120181) != -1 || k.operator.kbs.indexOf(121381) != -1) && k.operator.fullName.split('-')[0] == opSection) {
                operatorId.push(k.operator.id)
                operatorNames.push(k.operator.fullName)
            } else if (k.operator.fullName.split('-')[0] == opSection) {
                operatorId.push(k.operator.id)
                operatorNames.push(k.operator.fullName)
            }
    }))


    const getFormattedDate = (date) => {
        const year = date.getFullYear();
        const month = padStart(date.getMonth() + 1, 2, '0');
        const day = padStart(date.getDate(), 2, '0');
        return `${year}-${month}-${day}T21:00:00.000z`;
    }

    const now = new Date();
    const secondDateN = `${now.getFullYear()}-${padStart(now.getMonth() + 1, 2, '0')}-${padStart(now.getDate(), 2, '0')}T20:59:59.059z`;

    const yesterday = new Date(now - 24 * 60 * 60 * 1000);
    const firstDate = getFormattedDate(yesterday);

    var operatorChatCount = []
    for (var l = 0; l < operatorId.length; l++) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
            "headers": {
                "accept": "*/*",
                "content-type": "application/json",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/logs",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId[l] + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDateN + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(a => a.json()).then(b => operatorChatCount[l] = b.total)
    }

    let tbody = document.createElement('tbody')
    for (let i = 0; i < arrayvars.length; i++) {
        var tr = document.createElement('tr')
        for (let j = 0; j < 5; j++) {
            var td = document.createElement('td')
            switch (j) {
                case 0:
                    td.textContent = arrayvars[i].operator;
                    if (document.getElementsByClassName('user_menu-dropdown-user_name')[0].textContent == arrayvars[i].operator) {
                        td.style = 'text-align: center; padding-left: 5px; color: #ffffff; background: #13a55b; font-weight: 700; border-radius: 50px; box-shadow: 0px 2px 1px rgb(0 0 0 / 51%); text-shadow: 1px 2px 5px rgb(0 0 0 / 55%);'
                    } else
                        td.style = 'text-align: left; padding-left: 5px'
                    break;
                case 2: // последить за выводом пощупанных чатов
                    for (let j = 0; j < operatorNames.length; j++)
                        if (arrayvars[i].operator == operatorNames[j]) {
                            td.textContent = operatorChatCount[j]
                            td.classList.add("chtcnt");
                            break
                        }
                    break;
                case 1:
                    td.textContent = arrayvars[i].conversationClosed;
                    td.classList.add("chtclosed");
                    break;
                case 3:
                    var averageAnswerTime = Math.floor(arrayvars[i].averageAnswerTime / 1000)
                    averageAnswerTime = averageAnswerTime < 60 ? '00:' + averageAnswerTime : Math.floor(averageAnswerTime / 60) + ':' + ((averageAnswerTime % 60) < 10 ? '0' + (averageAnswerTime % 60) : (averageAnswerTime % 60))
                    td.textContent = averageAnswerTime;
                    break;
                case 4:
                    var averageHandlingTime = Math.floor(arrayvars[i].averageHandlingTime / 1000)
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
    quechatscount.style.marginLeft = '10px'
    quechatscount.onclick = checkChatCountQue
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(quechatscount)

    let kcpower = document.createElement('button') // кнопка для проверки нагрузки КЦ
    kcpower.textContent = 'Нагрузка КЦ'
    kcpower.id = 'buttonKCpower'
    kcpower.style.marginLeft = '10px'
    kcpower.onclick = function () {
        checkload(/КЦ/, 'КЦ')
    }
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(kcpower)

    let tppower = document.createElement('button') // кнопка для проверки нагрузки ТП
    tppower.textContent = 'Нагрузка ТП'
    tppower.id = 'buttonTPpower'
    tppower.style.marginLeft = '10px'
    tppower.onclick = function () {
        checkload(/ТП/, 'ТП')
    }
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(tppower)

    let dcc = document.getElementsByClassName('chtcnt')
    let summcnt = 0;
    for (i = 0; i < dcc.length; i++) {
        summcnt += Number(dcc[i].textContent)
    }

    let dc = document.getElementsByClassName('chtclosed')
    let summclsd = 0;
    for (i = 0; i < dc.length; i++) {
        summclsd += Number(dc[i].textContent)
    }

    let sumchatclosed = document.createElement('div') // сумма закрытых чатов за сутки
    sumchatclosed.textContent = 'Общая сумма закрытых чатов за сутки по отделу: ' + summclsd;
    sumchatclosed.style.marginLeft = '50px'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(sumchatclosed)

    let sumchatcount = document.createElement('div') // сумма пощупанных чатов за сутки
    sumchatcount.textContent = 'Общая сумма пощупаных чатов за сутки по отделу: ' + summcnt;
    sumchatcount.style.marginLeft = '50px'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(sumchatcount)

    document.getElementById('buttonGetStat').textContent = 'Скрыть стату'
    document.getElementById('buttonGetStat').removeAttribute('disabled')
}

async function checkCSAT() { // функция проверки CSAT и чатов без тематики
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonCheckStats').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
    document.getElementById('buttonCheckStats').textContent = 'Загрузка'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)

    const padStart = (string, targetLength, padString) => {
        return String(string).padStart(targetLength, padString);
    }

    const getFormattedDate = (date) => {
        const year = date.getFullYear();
        const month = padStart(date.getMonth() + 1, 2, '0');
        const day = padStart(date.getDate(), 2, '0');
        return `${year}-${month}-${day}T21:00:00.000z`;
    }

    const now = new Date();
    const secondDateN = `${now.getFullYear()}-${padStart(now.getMonth() + 1, 2, '0')}-${padStart(now.getDate(), 2, '0')}T20:59:59.059z`;

    const yesterday = new Date(now - 24 * 60 * 60 * 1000);
    const firstDate = getFormattedDate(yesterday);

    try {
        page = 1
        let stringChatsWithoutTopic = ""
        csatScore = 0
        csatCount = 0
        let flagok = [];
        let tagsarr = []; //обьявляем пустой массив для хранения тегов чатов
        let count = {};
        let flagvbad = [];
        let flagbad = [];
        let flagmid = [];
        let clschatarr = [];
        let abovecloseslaarr = []
        let aboveart = [];
        let slacount = 0;
        let artcount = 0;
        let aclosedchats = [];
        while (true) {
            test = ''

            let servicetopic;
            if (localStorage.getItem('scriptAdr') == TS_addr) {
                servicetopic = '361c681b-340a-4e47-9342-c7309e27e7b5'
            } else if (localStorage.getItem('scriptAdr') == TPprem_addr || localStorage.getItem('scriptAdr') == TPprem_addrRzrv) {
                servicetopic = 'df7d4f86-bb75-45b5-8ae8-87bf896bf308'
            }

            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"" + servicetopic + "\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDateN + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat = 0
                let flagTopic = 0

                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            clschatarr.push(test.items[i].conversationId)
                            if (r.messages[r.messages.length - 1].eventTpe == 'CloseConversation')
                                aclosedchats.push('<span style="color: #6300ff; font-weight:700">&#5129;</span>' + " " + '<span name="aclsconv">' + test.items[i].conversationId + '</span>' + ' ' +
                                    '<span class = "lookaclschat" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>')
                            if (r.payload == undefined || r.payload.tags == undefined || r.payload.tags.value == '')
                                tagsarr.push('Нет тега!')
                            else if (r.payload.tags.value == '[\n  \"queue\"\n]')
                                tagsarr.push('Тег: Очередь КЦ') //добавляет что тег очередь КЦ выставлен
                            else if (r.payload.tags.value == '[\n  \"request_forwarded_to_2l_tp\"\n]')
                                tagsarr.push('Тег: 2ЛТП') //добавляет что тег очередь КЦ выставлен
                            else tagsarr.push(r.payload.tags.value) //формирует массив тегов чатов
                            flagCsat = 1
                            if (r.payload != undefined)
                                if (r.payload.topicId != undefined)
                                    if (r.payload.topicId.value == "")
                                        flagTopic = 1

                        }
                    })

                for (let k = 0; k < clschatarr.length; k++) {
                    if (test.items[i].conversationId == clschatarr[k]) {
                        if ((test.items[i].stats.conversationDuration / 1000 / 60).toFixed(1) > 25) {

                            let tmestmp = new Date((test.items[i].ts.split('[GMT]'))[0]);
                            let tshrs;
                            let tsmin
                            if ((tmestmp.getUTCHours() + 3) < 10)
                                tshrs = "0" + (tmestmp.getUTCHours() + 3);
                            else tshrs = (tmestmp.getUTCHours() + 3);

                            if (tmestmp.getMinutes() < 10)
                                tsmin = "0" + tmestmp.getMinutes();
                            else tsmin = tmestmp.getMinutes();

                            slacount++;
                            abovecloseslaarr += ('<span style="color: red; font-weight:700">&#5129;</span>' + " " +
                                '<a href="https://skyeng.autofaq.ai/logs/' + clschatarr[k] + '" onclick="" style="color:LightGoldenrod;" class = "slaclchatids">' +
                                clschatarr[k] + '</a>' + ' Время чата: ' + (test.items[i].stats.conversationDuration / 1000 / 60).toFixed(1) +
                                '<span class = "lookchat" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + ' Создан чат в: ' + tshrs + ":" + tsmin + ' МСК ' + tagsarr[k] + '<br>')
                        }

                        if (test.items[i].stats.averageOperatorAnswerTime !== undefined && ((test.items[i].stats.averageOperatorAnswerTime / 1000 / 60).toFixed(2)) > 2) {
                            artcount++;
                            aboveart += ('<span style="color: red; font-weight:700">&#5129;</span>' + " " +
                                '<a href="https://skyeng.autofaq.ai/logs/' + clschatarr[k] + '" onclick="" style="color:LightGoldenrod;" class = "artchatids">' +
                                clschatarr[k] + '</a>' + ' Ср.время ответа: ' + (test.items[i].stats.averageOperatorAnswerTime / 1000 / 60).toFixed(2) +
                                '<span class = "lookchatart" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + '<br>')
                        }
                    }
                }

                if (flagCsat == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined) {
                            csatScore += test.items[i].stats.rate.rate
                            csatCount++
                            flagok.push(test.items[i].stats.rate.rate)
                            if (test.items[i].stats.rate.rate == 1)
                                flagvbad += '• ' + test.items[i].stats.conversationId + '<br>'
                            if (test.items[i].stats.rate.rate == 2)
                                flagbad += '• ' + test.items[i].stats.conversationId + '<br>'
                            if (test.items[i].stats.rate.rate == 3)
                                flagmid += '• ' + test.items[i].stats.conversationId + '<br>'
                        }
                if (flagTopic == 1)
                    stringChatsWithoutTopic += '<a href="https://skyeng.autofaq.ai/logs/' + test.items[i].conversationId + '" onclick="">https://skyeng.autofaq.ai/logs/' + test.items[i].conversationId + '</a></br>'
            }

            if (test.total / 100 >= page) {
                page++
            } else {
                if (stringChatsWithoutTopic == "")
                    stringChatsWithoutTopic = ' нет чатов без тематики'
                flagok.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
                if (count[1] == undefined)
                    count[1] = 0;
                if (count[2] == undefined)
                    count[2] = 0;
                if (count[3] == undefined)
                    count[3] = 0;
                if (count[4] == undefined)
                    count[4] = 0;
                if (count[5] == undefined)
                    count[5] = 0;

                let firstpart = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (по клику откроет безопасно в новой вкладке без необходимости перелогина): <br>' + "Количество оценок: " + csatCount + ' из них: ' + '<br>'
                let secondpart = stringChatsWithoutTopic + '<br>' + "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " + (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart + '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + 'Чаты, которые были автозакрыты, проверить потерявшиеся и необработанные чаты: ' + '<br>' + aclosedchats.join('<br>');

                if (flagvbad == "" && flagbad == "" && flagmid == "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad == "" && flagbad == "" && flagmid != "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad == "" && flagbad != "" && flagmid == "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad != "" && flagbad == "" && flagmid == "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad != "" && flagbad == "" && flagmid != "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad != "" && flagbad != "" && flagmid == "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad == "" && flagbad != "" && flagmid != "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                else if (flagvbad != "" && flagbad != "" && flagmid != "")
                    str.innerHTML = firstpart + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' + 'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' + 'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + secondpart
                console.log(tagsarr) //выводит список полученных тегов с чатов
                break
            }
        }
    } catch (e) {
        console.error(e, e.stack);
    }

    const slaclchatcontainer = document.querySelectorAll('.lookchat');
    const slaclchattids = document.querySelectorAll('.slaclchatids');
    const artchatcontainer = document.querySelectorAll('.lookchatart');
    const artchattids = document.querySelectorAll('.artchatids');
    const aclsclookcontainer = document.querySelectorAll('.lookaclschat')
    const aclsdchatids = document.getElementsByName('aclsconv')
    const chatHistoryElement = document.getElementById('AF_ChatHis');
    const chatHistoryButton = document.getElementById('butChatHistory');
    const chatHistorySearchInput = document.getElementById('hashchathis');
    const chatHistorySearchButton = document.getElementById('btn_search_history');

    slaclchatcontainer.forEach((container, index) => {
        container.addEventListener('click', () => {
            if (chatHistoryElement.style.display === 'none') {
                chatHistoryButton.click();
            }
            chatHistorySearchInput.value = slaclchattids[index].textContent;
            chatHistorySearchButton.click();
        });
    });

    artchatcontainer.forEach((container, index) => {
        container.addEventListener('click', () => {
            if (chatHistoryElement.style.display === 'none') {
                chatHistoryButton.click();
            }
            chatHistorySearchInput.value = artchattids[index].textContent;
            chatHistorySearchButton.click();
        });
    });

    aclsclookcontainer.forEach((container, index) => {
        container.addEventListener('click', () => {
            if (chatHistoryElement.style.display === 'none') {
                chatHistoryButton.click();
            }
            chatHistorySearchInput.value = aclsdchatids[index].textContent;
            chatHistorySearchButton.click();
        });
    });

    document.getElementById('buttonCheckStats').textContent = 'Повторить проверку'
}

async function checkChatCountQue() { // функция проверки количества чатов в очереди в КЦ и ТП
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonQueChatsCount').textContent == 'Повторить проверку' || document.getElementById('buttonTPpower').textContent == 'Повторить проверку' || document.getElementById('buttonKCpower').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
    const padStart = (string, targetLength, padString) => {
        return String(string).padStart(targetLength, padString);
    }

    const getFormattedDate = (date) => {
        const year = date.getFullYear();
        const month = padStart(date.getMonth() + 1, 2, '0');
        const day = padStart(date.getDate(), 2, '0');
        return `${year}-${month}-${day}T21:00:00.000z`;
    }

    const now = new Date();
    const secondDateN = `${now.getFullYear()}-${padStart(now.getMonth() + 1, 2, '0')}-${padStart(now.getDate(), 2, '0')}T20:59:59.059z`;

    const yesterday = new Date(now - 24 * 60 * 60 * 1000);
    const firstDate = getFormattedDate(yesterday);

    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDateN + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
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
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"usedAutoFaqKbIds\":[\"120181\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDateN + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":200}",
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

async function checkload(department, flag) { // функция проверки нагрузки на отделы ТП и КЦ по отдельности в зависимости от аргументов
    let cntc = 0;
    let busycnt = 0;
    let pausecnt = 0;
    let allcntc = 0;
    let found = [];
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonTPpower').textContent == 'Повторить проверку' || document.getElementById('buttonKCpower').textContent == 'Повторить проверку' || document.getElementById('buttonQueChatsCount').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()

    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(r => r.json()).then(result => {
        setTimeout(function () {
            for (let i = 0; i < result.onOperator.length; i++) {
                if (result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Offline" && result.onOperator[i].operator.fullName.match(department)) {
                    cntc++;
                    if (result.onOperator[i].operator.status == "Busy")
                        busycnt++;
                    else if (result.onOperator[i].operator.status == "Pause")
                        pausecnt++;
                    if (result.onOperator[i].aCnt == null)
                        result.onOperator[i].aCnt = 0;
                    allcntc += result.onOperator[i].aCnt;
                    if (result.onOperator[i].operator.status == "Online")
                        result.onOperator[i].operator.status = "🟢 Онлайн"
                    else if (result.onOperator[i].operator.status == "Busy")
                        result.onOperator[i].operator.status = "🟡 Занят"
                    else if (result.onOperator[i].operator.status == "Pause")
                        result.onOperator[i].operator.status = "🔴 Перерыв"
                    found += result.onOperator[i].operator.status + " | " + result.onOperator[i].operator.fullName + " | Чатов: " + result.onOperator[i].aCnt + '<br>';
                }
            }
            if ((cntc - pausecnt - busycnt) != 0 && allcntc / (cntc - pausecnt - busycnt) <= 2.2)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "🟡занят: " + busycnt + " 🔴перерыв: " + pausecnt + " 🟢онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Низкая нагрузка";
            else if ((cntc - pausecnt - busycnt) != 0 && allcntc / (cntc - pausecnt - busycnt) > 2.2 && allcntc / (cntc - pausecnt - busycnt) <= 3.2)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "🟡занят: " + busycnt + " 🔴перерыв: " + pausecnt + " 🟢онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Средняя нагрузка";
            else if ((cntc - pausecnt - busycnt) != 0 && allcntc / (cntc - pausecnt - busycnt) > 3.2 && allcntc / (cntc - pausecnt - busycnt) <= 4.4)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "🟡занят: " + busycnt + " 🔴перерыв: " + pausecnt + " 🟢онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Высокая нагрузка";
            else if ((cntc - pausecnt - busycnt) != 0 && allcntc / (cntc - pausecnt - busycnt) >= 4.5)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "🟡занят: " + busycnt + " 🔴перерыв: " + pausecnt + " 🟢онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Критическая нагрузка";
        }, 1000)

        setTimeout(function () {
            document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
            str.innerHTML = '<br>' + found;
        }, 1000)

        if (flag == 'КЦ')
            document.getElementById('buttonKCpower').textContent = 'Повторить проверку'
        else if (flag == 'ТП')
            document.getElementById('buttonTPpower').textContent = 'Повторить проверку'
    })
}
let tokenlog; // пустая переменная для функции logginerfortests подставляемая в body

var win_TestUsers = // описание окна тестовых пользователей
    `<div style="display: flex;">
        <span style="cursor: -webkit-grab;">
            <button id="sidcode" title="При клике ЛКМ генерирует ссылку логинер для входа в учетку с заранее сохраненным ID тестового ученика в настройках и копирует ее в буфер обмена. При клике ПКМ копирует в буфер обмена ID ученика, может пригодиться в админке создания тестовых уроков." class="teststudteach">👨‍🎓</button>
            <button id="tidcode" title="При клике ЛКМ генерирует ссылку логинер для входа в учетку с заранее сохраненным ID тестового преподавателя в настройках и копирует ее в буфер обмена. При клике ПКМ копирует в буфер обмена ID преподавателя, может пригодиться в админке создания тестовых уроков." class="teststudteach">👽</button>
            <button id="TestRooms" class="teststudteach" title="Открыть окно создания тестовых уроков">🎲</button>
            <button id="pushToTalk" title="Нажми и сразу произноси команду для выполнения. Список команд: \n 1) ту - открывает админку для создания ТУ по англ языку \n 2) платёж - открывает админку поиска платежа \n 3) CRM - открывает CRM обратившегося пользователя \n 4) ТТ - открывает Timetable (произносить лучше тэтэ) \n 5) админка - открывает общую админку по пользователю 6) тшу / тшп - просмотр ТШ по У или П которые обратились \n 7) трамвай - открывает TRM 2.0"" style="cursor: pointer; margin: 5px;">🎤</button>
            <div id="voicetext" style="color: bisque; width: 110px; text-align: center;"></div>
        </span>
        <div id="addInfoUser" style="color: white; text-align: center; cursor: -webkit-grab;"></div>
    </div>`;
			
if (localStorage.getItem('winTopTestUsers') == null) {
    localStorage.setItem('winTopTestUsers', '120');
    localStorage.setItem('winLeftTestUsers', '295');
}
let TestUsersdiv = document.createElement('div'); // добавляем окно тестовых поьзователей
document.body.append(TestUsersdiv);
TestUsersdiv.style = 'min-height: 20px; max-height: 750px; min-width: 35px; max-width: 370px; background: #464451; top: ' + localStorage.getItem('winTopTestUsers') + 'px; left: ' + localStorage.getItem('winLeftTestUsers') + 'px; font-size: 14px; z-index: 12500; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; display: none';
TestUsersdiv.setAttribute('id', 'TestUsers');
TestUsersdiv.classList = 'onlyfortp';
TestUsersdiv.innerHTML = win_TestUsers;

var listenerTestUsers = function (e, a) { // сохранение позиции окна тестовых поьзователей
    TestUsersdiv.style.left = Number(e.clientX - myXTestUsers) + "px";
    TestUsersdiv.style.top = Number(e.clientY - myYTestUsers) + "px";
    localStorage.setItem('winTopTestUsers', String(Number(e.clientY - myYTestUsers)));
    localStorage.setItem('winLeftTestUsers', String(Number(e.clientX - myXTestUsers)));
};

wintTestUsers.onmousedown = function (a) { // изменение позиции окна тестовых поьзователей
    if (checkelementtype(a)) {
        window.myXTestUsers = a.layerX;
        window.myYTestUsers = a.layerY;
        document.addEventListener('mousemove', listenerTestUsers);
    }
}
wintTestUsers.onmouseup = function () { document.removeEventListener('mousemove', listenerTestUsers); } // прекращение изменения позиции окна тестовых поьзователей

btnsid.addEventListener("click", (event) => { // копирует в буфер логиннер для У
    let teststudid = localStorage.getItem('test_stud');
    if (teststudid != null || teststudid != '') {
        logginerfortests(teststudid)
        document.getElementById('sidcode').classList.add('active');
        setTimeout(function () { document.getElementById('sidcode').classList.remove('active') }, 1000);
    } else alert("Введите ID тестового ученика в настройках ⚙");
});

btnsid.addEventListener("contextmenu", (event) => { // копирует в буфер id У
    event.preventDefault();
    let teststudid = localStorage.getItem('test_stud');
    if (teststudid != null || teststudid != '') {
        copyToClipboard1(teststudid)
        document.getElementById('sidcode').classList.add('active');
        setTimeout(function () { document.getElementById('sidcode').classList.remove('active') }, 1000);
    } else alert("Введите ID тестового ученика в настройках ⚙");
});

btntid.addEventListener("click", (event) => { // копирует в буфер логиннер для П
    let testteachid = localStorage.getItem('test_teach');
    if (testteachid != null || testteachid != '') {
        logginerfortests(testteachid)
        document.getElementById('tidcode').classList.add('active');
        setTimeout(function () { document.getElementById('tidcode').classList.remove('active') }, 1000);
    } else alert("Введите ID тестового преподавателя в настройках ⚙");
});

btntid.addEventListener("contextmenu", (event) => { // копирует в буфер id П
    event.preventDefault();
    let testteachid = localStorage.getItem('test_teach');
    if (testteachid != null || testteachid != '') {
        copyToClipboard1(testteachid)
        document.getElementById('tidcode').classList.add('active');
        setTimeout(function () { document.getElementById('tidcode').classList.remove('active') }, 1000);
    } else alert("Введите ID тестового преподавателя в настройках ⚙");
});

function logginerfortests(polzovatel) { // функция логинера для тестовых У/П
    const requestBody = `login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${polzovatel}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlog}`;
    const requestHeaders = {
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
    };
    const request = {
        headers: requestHeaders,
        referrer: 'https://id.skyeng.ru/admin/auth/login-links',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: requestBody,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    };

    document.getElementById('responseTextarea1').value = JSON.stringify(request);
    document.getElementById('responseTextarea2').value = 'https://id.skyeng.ru/admin/auth/login-links';
    document.getElementById('responseTextarea3').value = 'senddata1';
    document.getElementById('sendResponse').click();

    document.getElementById('responseTextarea1').addEventListener('DOMSubtreeModified', () => {
        let logginerinfo = document.getElementById('responseTextarea1').getAttribute('senddata1');
        if (logginerinfo) {
            logginerinfo = logginerinfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
            logginerinfo = logginerinfo[logginerinfo.length - 1].split('"');
            copyToClipboard1(logginerinfo[1]);
            document.getElementById('responseTextarea1').removeAttribute('senddata1');
        }
    });
}

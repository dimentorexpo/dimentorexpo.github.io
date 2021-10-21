let buttontechdatastudent = document.createElement('p');
buttontechdatastudent.id = 'getStudentUserAgentInfo';
buttontechdatastudent.innerHTML = '<a style="color: black; cursor: pointer;">Получить инфо об устройстве У</a>';
let buttontechdatateacher = document.createElement('p');
buttontechdatateacher.id = 'getTeacherUserAgentInfo';
buttontechdatateacher.innerHTML = '<a style="color: black; cursor: pointer;">Получить инфо об устройстве П</a>';
let buttonoutputfield = document.createElement('p');
buttonoutputfield.id = 'nextStudentUserAgent';
buttonoutputfield.innerHTML = "";
let buttonoutputfield2 = document.createElement('p');
buttonoutputfield2.id = 'nextTeacherUserAgent';
buttonoutputfield2.innerHTML = "";

var nextuserid;
buttontechdatastudent.onclick = function () {

    document.getElementById("nextStudentUserAgent").innerHTML = ""
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
            nextuserid = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        console.log("nextuserid student" + " " + nextuserid);
    }
    document.getElementById("getStudentUserAgentInfo").innerHTML = "Получаем информацию...";
    setTimeout(function () {
        document.getElementById("getStudentUserAgentInfo").innerHTML = "Получить инфо об устройстве У"
    }, 10000)

    fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "accept": "*/*",
            "content-type": "application/json",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/tickets/common",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + nextuserid + "\",\"tsFrom\":\"2021-05-01T19:00:00.000Z\",\"tsTo\":\"2021-12-01T18:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(r => r.text())
        .then(result => {
            setTimeout(function () {
                let newres = result.match(/\d+/);
                if (newres[0] > 0 && result.match(/.{13}система.{114}/)[0].split('<br/>')[1] == "Тип клиентского приложения: Веб-браузер") {
                    console.log("Есть чаты" + newres)
                    document.getElementById("nextStudentUserAgent").innerHTML = result.match(/.{13}система.{114}/)[0];
                    setTimeout(function () {
                        document.getElementById("nextStudentUserAgent").innerHTML = ""
                    }, 30000)
                } else if (newres[0] > 0 && result.match(/.{13}система.{114}/)[0].split('<br/>')[1] == "Тип клиентского приложения: Мобильное приложение") {
                    document.getElementById("nextStudentUserAgent").innerHTML = result.match(/.{13}система.{154}/)[0];
                    setTimeout(function () {
                        document.getElementById("nextStudentUserAgent").innerHTML = ""
                    }, 30000)
                } else {
                    document.getElementById("nextStudentUserAgent").innerHTML = "Нет информации - пользователь не обращался"
                    setTimeout(function () {
                        document.getElementById("nextTeacherUserAgent").innerHTML = ""
                    }, 30000)
                    console.log("Для ученика нет чатов");
                }
            }, 3000)
        })
}

var nextuserid2;
buttontechdatateacher.onclick = function () {

    document.getElementById("nextTeacherUserAgent").innerHTML = ""
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
            nextuserid = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
    }

    document.getElementById("getTeacherUserAgentInfo").innerHTML = "Получаем информацию...";
    setTimeout(function () {
        document.getElementById("getTeacherUserAgentInfo").innerHTML = "Получить инфо об устройстве П"
    }, 10000)

    console.log("nextuserid prepod" + " " + nextuserid2);

    fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "accept": "*/*",
            "content-type": "application/json",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/tickets/common",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + nextuserid2 + "\",\"tsFrom\":\"2021-05-01T19:00:00.000Z\",\"tsTo\":\"2021-12-01T18:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(r => r.text())
        .then(result => {
            setTimeout(function () {
                let newres = result.match(/\d+/);
                if (newres[0] > 0 && result.match(/.{13}система.{114}/)[0].split('<br/>')[1] == "Тип клиентского приложения: Веб-браузер") {
                    console.log("Есть чаты" + newres)
                    document.getElementById("nextTeacherUserAgent").innerHTML = result.match(/.{13}система.{114}/)[0];
                    setTimeout(function () {
                        document.getElementById("nextTeacherUserAgent").innerHTML = ""
                    }, 30000)
                } else if (newres[0] > 0 && result.match(/.{13}система.{114}/)[0].split('<br/>')[1] == "Тип клиентского приложения: Мобильное приложение") {
                    document.getElementById("nextTeacherUserAgent").innerHTML = result.match(/.{13}система.{154}/)[0];
                    setTimeout(function () {
                        document.getElementById("nextTeacherUserAgent").innerHTML = ""
                    }, 30000)
                } else {
                    document.getElementById("nextTeacherUserAgent").innerHTML = "Нет информации -  пользователь не обращался"
                    setTimeout(function () {
                        document.getElementById("nextTeacherUserAgent").innerHTML = ""
                    }, 30000)
                    console.log("Для препода нет чатов");
                }
            }, 3000)
        })
}
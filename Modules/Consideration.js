var win_Infoconsid =  // описание элементов окна ссылок
    `<div style="width: 800px; font-size: 0.8rem; margin: 5px;">
        <div style="width: 49%; float: left;">
            <p><b>Если передаешь компенсацию урока из-за серверных</b></p>
            <p style="color:red"><b> •Добавь ссылку на disaster или ссылку на трэд<br>
            •Напиши дату и время урока<br>
            •Укажи какой статус урока выставлен</b></p>
        </div>
        <div style="width: 49%;float: right">
            <p><b>Если делаешь запрос на компенсацию “повторное обращение по багу в мобильном приложении”</b></p> 
            <p style="color:red"><b> Обязательно добавь ссылку на задачу в Jira </b></p>
        </div>
    </div>`;

let wintInfoconsid = document.createElement('div'); // создание окна ссылок
wintInfoconsid.style.display = 'none';
wintInfoconsid.innerHTML = win_Infoconsid;

function startchecking(){
    if (document.URL == 'https://billing-marketing.skyeng.ru/accrual-operations/create') {
        document.getElementById('selectedOperation').addEventListener("change", addinformationform)
    }   
}

function addinformationform() {
    let TPcomp = document.getElementsByClassName('card-header')
    let formtoin = document.getElementsByClassName('card-body')[0]
    formtoin.insertBefore(wintInfoconsid, formtoin.children[0]);
    for (y = 0; y < TPcomp.length; y++) {
        if (TPcomp[y].innerText == 'Компенсация за технические проблемы') {
            wintInfoconsid.style.display = ''
        } else {
            wintInfoconsid.style.display = 'none'
        }
    }
}

startchecking()
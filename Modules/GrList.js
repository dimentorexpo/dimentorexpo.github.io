var win_BankInfo =  // описание элементов окна Списка группы
    `<div style="display: flex; width: 450px;">
        <span style="width: 450px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 400;" id="grlistdata">
                                <button id="hideMeGrList" style="width:50px; background: #228B22;">hide</button>
                        </div>
						<div>
                        <input oninput="onlyNumbers(this)" required id="carddigits" placeholder="6 первых цифр карты" title="Введите 6 первых цифр карты" autocomplete="off" type="text" style="text-align: center; width: 160px; color: black;margin-left:5px; position:relative; left:30%;">
							<button title="Запуск получения информации о карте" id="getBankInfoData" style="position:relative; left:30%;">Get info</button>
						</div>
				</span>
						<div id="grlstdiv">
							 <br>
							 <p id="cardInfoData" style="margin-left: 5px; color:bisque;"></span>
							 <br>
						</div>
        </span>
</div>`;

if (localStorage.getItem('winTopBankInfo') == null) {  // начальное положение окна списка группы
    localStorage.setItem('winTopBankInfo', '120');
    localStorage.setItem('winLeftBankInfo', '295');
}

let wintBankInfo = document.createElement('div'); // создание окна Список группы
document.body.append(wintBankInfo);
wintBankInfo.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopBankInfo') + 'px; left: ' + localStorage.getItem('winLeftBankInfo') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintBankInfo.style.display = 'none';
wintBankInfo.setAttribute('id', 'AF_BankCheck');
wintBankInfo.innerHTML = win_BankInfo;

var listenerBankInfo = function (e, a) { // сохранение позиции окна Список группы
    wintBankInfo.style.left = Number(e.clientX - myXBankInfo) + "px";
    wintBankInfo.style.top = Number(e.clientY - myYBankInfo) + "px";
    localStorage.setItem('winTopBankInfo', String(Number(e.clientY - myYBankInfo)));
    localStorage.setItem('winLeftBankInfo', String(Number(e.clientX - myXBankInfo)));
};

wintBankInfo.onmousedown = function (a) { // изменение позиции окна Список группы
    if (checkelementtype(a)) {
        window.myXBankInfo = a.layerX;
        window.myYBankInfo = a.layerY;
        document.addEventListener('mousemove', listenerBankInfo);
    }
}
wintBankInfo.onmouseup = function () { document.removeEventListener('mousemove', listenerBankInfo); } // прекращение изменения позиции окна Список группы

document.getElementById('AF_BankCheck').ondblclick = function (a) { // скрытие окна Список группы по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_BankCheck').style.display = 'none'; }
}

    document.getElementById('hideMeGrList').onclick = function () { // скрытие окна Список группы
        if (document.getElementById('AF_BankCheck').style.display == '') {
            document.getElementById('AF_BankCheck').style.display = 'none';
            document.getElementById('cardInfoData').innerText = "";
            document.getElementById('carddigits').value = "";
        }
    }


    document.getElementById('getBankInfoData').onclick = async function () {

        let tempgrid = document.getElementById('carddigits').value;
		
		if (tempgrid != '' ) {
			document.getElementById('cardInfoData').innerHTML = "Загрузка...";
					
			const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': '1b65e6c5e9msh256f2c43c21ccf3p17b3b2jsnb9bb40c53806',
				'X-RapidAPI-Host': 'bin-ip-checker.p.rapidapi.com'
			},
			body: `{"bin":"${tempgrid}"}`
		};

		await fetch(`https://bin-ip-checker.p.rapidapi.com/?bin=${tempgrid}`, options)
			.then(response => response.json())
			.then(response => cardData = response)
			.catch(err => console.error(err));
			
			document.getElementById('cardInfoData').innerHTML =  'Имя банка: ' + cardData.BIN.issuer.name + '<br>' + 'Схема карты: ' + cardData.BIN.scheme + '<br>' + 'Страна: ' + cardData.BIN.country.country +   '<br>' + 'Тип карты: ' + cardData.BIN.type + '<br>' + 'Валюта: ' + cardData.BIN.currency
		}  else alert("Вы не ввели 6 цифр в поле для ввода. Пожалуйста, введите и повторите попытку!")



        }

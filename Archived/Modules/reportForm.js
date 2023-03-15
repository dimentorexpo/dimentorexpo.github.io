let buttonOpenReport = document.createElement('div');
buttonOpenReport.id = 'buttonSendReport';
buttonOpenReport.textContent = "Жалоба";
buttonOpenReport.style.marginRight = "15px";
buttonOpenReport.onclick = function() {
    createReportForm()
	this.setAttribute('disabled', 'disabled')
	document.getElementById('buttonSendReport').textContent = 'loading'
	setTimeout(removeDsbl, 1500)
	function removeDsbl() {
		document.getElementById('buttonSendReport').removeAttribute('disabled')
		document.getElementById('buttonSendReport').textContent = 'Жалоба'
	}
}
var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
btnAdd.insertBefore(buttonOpenReport, btnAdd.children[0])

if (localStorage.getItem('reportAF') == null) {
    localStorage.setItem('reportAFTop', '120');
    localStorage.setItem('reportAFLeft', '295');
}

async function createReportForm() {
	let newDiv2 = document.createElement('div')
	let div = document.createElement('div')
	div.style = 'background: #464451; top: ' + localStorage.getItem('reportAFTop') + 'px; left: ' + localStorage.getItem('reportAFLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;'
	div.style.width = '310px'
	div.id = 'reportAF'
    var listener = function(e , a) {
        div.style.left = Number(e.clientX - myX) + "px";
        div.style.top = Number(e.clientY - myY) + "px";
        localStorage.setItem('reportAFTop', String(Number(e.clientY - myY)));
        localStorage.setItem('reportAFLeft', String(Number(e.clientX - myX)));
    };

    newDiv2.onmousedown = function (a) {
        window.myX = a.layerX; 
        window.myY = a.layerY; 
        document.addEventListener('mousemove', listener);
    }
    newDiv2.onmouseup = function () {document.removeEventListener('mousemove', listener);}

	let newDiv = document.createElement('div')
	newDiv.style = 'margin: 5px'

	var adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"serviceId\":\"" + localStorage.getItem('serviceIdGlob') + "\",\"mode\":\"Json\",\"conversationId\":\"" + adr1 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
	  "method": "POST",
	  "credentials": "include"
	})
	.then(response => response.json())
	.then(result => console.log(result.items[0].stats.participatingOperators));

	let ids = []
	var adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"serviceId\":\"" + localStorage.getItem('serviceIdGlob') + "\",\"mode\":\"Json\",\"conversationId\":\"" + adr1 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	})
			.then(response => response.json())
			.then(result => ids = result.items[0].stats.participatingOperators);
	let setOperators = []
	res = ''
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState")
	.then(response => response.json())
	.then(result => {
		console.log(result)
	res = result
		for(let i = 0; i < ids.length; i++) {
			for(let j = 0; j < result.rows.length; j++) {
				if(result.rows[j].operator != null)
					if(ids[i] == result.rows[j].operator.id)
						setOperators.push(result.rows[j].operator.fullName)
			}
		}
	});

	let select = document.createElement('select')
	select.id = 'reportSelect'
	select.style.width = '300px'
	select.style.marginTop = '5px'
	select.style.borderRadius = '3px'
	select.placeholder = 'Выберите оператора'
	let option = document.createElement('option')
	option.textContent = 'Кто перевел'
	select.append(option)
	for(let j = 0; j < setOperators.length; j++) {
		let option = document.createElement('option')
		option.textContent = setOperators[j]
		option.setAttribute('value', setOperators[j])
		select.append(option)
	}
	select.onchange = function () {
		for(i = 0; i < tableReports.length; i++) {
			if(this.selectedOptions[0].value.indexOf(tableReports[i][0]) != -1) {
				document.getElementById('selectKtoPerevelRG').value = tableReports[i][1]
				break
			}
		}
	}
	
	let selectKtoPerevelRG = document.createElement('select')
	selectKtoPerevelRG.id = 'selectKtoPerevelRG'
	selectKtoPerevelRG.style.width = '300px'
	selectKtoPerevelRG.style.marginTop = '5px'
	selectKtoPerevelRG.style.borderRadius = '3px'
	selectKtoPerevelRG.placeholder = 'Выберите оператора'
	let optionKtoPerevelRG = document.createElement('option')
	optionKtoPerevelRG.textContent = 'РГ того кто перевел'
	selectKtoPerevelRG.append(optionKtoPerevelRG)
	
	for(let j = 0; j < 6; j++) {
		let option = document.createElement('option')
		option.textContent = tableReports[j][2]
		option.setAttribute('value', tableReports[j][2])
		selectKtoPerevelRG.append(option)
	}
	
	let selectKomuPerevelRG = document.createElement('select')
	selectKomuPerevelRG.id = 'selectKomuPerevelRG'
	selectKomuPerevelRG.style.width = '300px'
	selectKomuPerevelRG.style.marginTop = '5px'
	selectKomuPerevelRG.style.borderRadius = '3px'
	selectKomuPerevelRG.placeholder = 'Выберите оператора'
	let optionKomuPerevelRG = document.createElement('option')
	optionKomuPerevelRG.textContent = 'РГ того кому перевели (твой РГ)'
	selectKomuPerevelRG.append(optionKomuPerevelRG)
	for(let j = 0; j < 7; j++) {
		let option = document.createElement('option')
		option.textContent = tableReports[j][2]
		option.setAttribute('value', tableReports[j][2])
		selectKomuPerevelRG.append(option)
	}
	selectKomuPerevelRG.onchange = function() {
		localStorage.setItem('selectKomuPerevelRG', this.value)
	}
	if(localStorage.getItem('selectKomuPerevelRG') != null)
		selectKomuPerevelRG.value = localStorage.getItem('selectKomuPerevelRG')
		
	let select2 = document.createElement('input')
	select2.id = 'reportSelect2'
	select2.placeholder = document.querySelector('.user_menu-dropdown-user_name').innerText
	select2.style.marginTop = '5px'
	select2.style.width = '300px'
	select2.style.borderRadius = '3px'

	let input3 = document.createElement('textarea')
	input3.id = 'reportInput3'
	input3.placeholder = 'https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1
	input3.style.width = '300px'
	input3.style.marginTop = '5px'
	input3.style.borderRadius = '3px'
	
	
	let select3 = document.createElement('select')
	select3.id = 'reportSelectTmp'
	select3.style.width = '300px'
	select3.style.marginTop = '5px'
	select3.style.borderRadius = '3px'
	select3.placeholder = 'Шаблон комментария'
	let selectTmpIterator = 0
	while(true) {
		let flagTmp = 0
		let option = document.createElement('option')
		switch(selectTmpIterator) {
			case 0:
				option.textContent = 'Выберите шаблон'
				break
			case 1:
				option.textContent = 'Факап SLA. '
				break
			case 2:
				option.textContent = 'Нет первичной обработки. '
				break
			case 3:
				option.textContent = 'Понимание системы. '
				break
			default:
				flagTmp = 1
				break
		}
		if(flagTmp == 1)
			break
		select3.append(option)
		selectTmpIterator++
	}
		

	let input4 = document.createElement('textarea')
	input4.id = 'reportInput4'
	input4.placeholder = 'Комментарий'
	input4.style.width = '300px'
	input4.style.marginTop = '5px'
	input4.style.borderRadius = '3px'

	newDiv2.style = 'cursor: -webkit-grab;'
	newDiv2.style.textAlign = 'center'
	let but = document.createElement('button')
	but.textContent = 'Отправить'
	but.onclick = function() {
		if(!validate())
			return
			
		function validate() {
			let flag = 0
			if(document.getElementById('reportSelect').value == "Кто перевел") {
				document.getElementById('reportSelect').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('reportSelect').style.border = '0px solid red';
				
			if(document.getElementById('selectKomuPerevelRG').value == "РГ того кому перевели (твой РГ)") {
				document.getElementById('selectKomuPerevelRG').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('selectKomuPerevelRG').style.border = '0px solid red';
				
			if(document.getElementById('selectKtoPerevelRG').value == "РГ того кто перевел") {
				document.getElementById('selectKtoPerevelRG').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('selectKtoPerevelRG').style.border = '0px solid red';
				
			if(document.getElementById('reportInput4').value == "" && document.getElementById('reportSelectTmp').value == "Выберите шаблон") {
				document.getElementById('reportInput4').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('reportInput4').style.border = '0px solid red';
			
			return flag == 1 ? false : true
		}
		let kto = textToUTF8String(document.getElementById('reportSelect').value)
		let komu = textToUTF8String(document.getElementById('reportSelect2').value == "" ? document.getElementById('reportSelect2').placeholder : document.getElementById('reportSelect2').value)
		let link = document.getElementById('reportInput3').value == "" ? document.getElementById('reportInput3').placeholder : document.getElementById('reportInput3').value
		let selectKomuPerevelRG = textToUTF8String(document.getElementById('selectKomuPerevelRG').value)
		let selectKtoPerevelRG = textToUTF8String(document.getElementById('selectKtoPerevelRG').value)
		let addComment = ''
		if(document.getElementById('reportSelectTmp').value != "Выберите шаблон")
			addComment = textToUTF8String(document.getElementById('reportSelectTmp').value) + ' '
			
		let comment = addComment + textToUTF8String(document.getElementById('reportInput4').value)
		
		var body = 'entry.1612783902=' + kto + '&entry.1471118405=' + link + '&entry.1856505864=' + comment + '&entry.486614058=' + komu + '&entry.989345812=' + selectKtoPerevelRG + '&entry.127512002=' + selectKomuPerevelRG
		//'entry.2042676744=' + date + '&entry.1008946388=' + client + '&entry.743061035=' + kto + '&entry.285857150=' + komu + '&entry.1292433844=' + link + '&entry.1679550503=' + comment
		let options = {
			  "headers": {
				"content-type": "application/x-www-form-urlencoded",
			  },
			  "body": body,
			  "method": "POST",
			}
			
		document.getElementById('responseTextarea1').value = JSON.stringify(options)
		document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdwL8MOAh0F_byUEIuFmTdsq_COOYgdhZZ1hDj91v_kwKEt2w/formResponse'
		if(document.getElementById('responseTextarea3') != null)
			document.getElementById('responseTextarea3').value = ''
		document.getElementById('sendResponse').click()
		document.getElementById('reportAF').remove()
		document.getElementById('buttonSendReport').style.display = ''
	}
	
	let but2 = document.createElement('button')
	but2.textContent = 'Закрыть'
	but2.style.marginLeft = '5px'
	but2.onclick = function() {
		document.getElementById('reportAF').remove()
		document.getElementById('buttonSendReport').style.display = ''
	}
	newDiv2.append(but)
	newDiv2.append(but2)


	document.body.append(div)
	div.append(newDiv)
	newDiv.append(select)
	newDiv.append(selectKtoPerevelRG)
	newDiv.append(select2)
	newDiv.append(selectKomuPerevelRG)
	newDiv.append(input3)
	newDiv.append(select3)
	newDiv.append(input4)
	newDiv.append(newDiv2)
	document.getElementById('buttonSendReport').style.display = 'none'
}
function toUTF8Array(str) {
	var utf8 = [];
	for (var i=0; i < str.length; i++) {
		var charcode = str.charCodeAt(i);
		if (charcode < 0x80) utf8.push(charcode);
		else if (charcode < 0x800) {
			utf8.push(0xc0 | (charcode >> 6), 
					  0x80 | (charcode & 0x3f));
		}
		else if (charcode < 0xd800 || charcode >= 0xe000) {
			utf8.push(0xe0 | (charcode >> 12), 
					  0x80 | ((charcode>>6) & 0x3f), 
					  0x80 | (charcode & 0x3f));
		}
		// surrogate pair
		else {
			i++;
			// UTF-16 encodes 0x10000-0x10FFFF by
			// subtracting 0x10000 and splitting the
			// 20 bits of 0x0-0xFFFFF into two halves
			charcode = 0x10000 + (((charcode & 0x3ff)<<10)
					  | (str.charCodeAt(i) & 0x3ff))
			utf8.push(0xf0 | (charcode >>18), 
					  0x80 | ((charcode>>12) & 0x3f), 
					  0x80 | ((charcode>>6) & 0x3f), 
					  0x80 | (charcode & 0x3f));
		}
	}
	return utf8;
}

function decToHex(dec)
{
	var hexStr = '0123456789ABCDEF';
	var low = dec % 16;
	var high = (dec - low)/16;
	hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
	return hex;
}

function textToUTF8String(string) {
	string = toUTF8Array(string)
	let string2 = ""
	for(i = 0; i < string.length; i++) {
		string2 += "%" + decToHex(string[i])
	}
	return string2
}

var tableReports
function getText() {
   var app = 'https://script.google.com/macros/s/AKfycbyxVfHhEZo5eYeCg5ieubGO8LFJEMDtkbYwRsemRiyiklN7DOVp/exec',
	  xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
	 if (xhr.readyState !== 4) return;

	 if (xhr.status == 200) {
		try {
			var r = JSON.parse(xhr.responseText),
			result = r["result"];
			tableReports = result;
		} catch(e) {console.log(e)}
	 }
   }
   xhr.send()
}
getText()

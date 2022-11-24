

async function findchatsonoper() {
	if (document.getElementById('AF_ChatHis').style.display =='none')
		document.getElementById('AF_ChatHis').style.display =''
	let getdatesetleft = new Date()
    let hrs;
    let mins;
    let secs;
    let difhrs;
	let foundarr = []
    if (getdatesetleft.getUTCHours() < 10)
        hrs = "0" + (getdatesetleft.getUTCHours());
    else if (getdatesetleft.getUTCHours() >= 24)
        hrs = '0' + ((getdatesetleft.getUTCHours() - 24))
    else
        hrs = (getdatesetleft.getUTCHours());

    if (hrs - 1 < 10)
        difhrs = '0' + (hrs - 1)
    else difhrs = hrs;

    if (getdatesetleft.getMinutes() < 10)
        mins = "0" + getdatesetleft.getMinutes();
    else mins = getdatesetleft.getMinutes();

    if (getdatesetleft.getUTCSeconds() < 10)
        secs = "0" + getdatesetleft.getUTCSeconds();
    else secs = getdatesetleft.getUTCSeconds()
	
	    if (document.getElementById('placeusid').innerText != '')
        document.getElementById('placeusid').innerText = ''

    if (document.getElementById('placechatid').innerText != '')
        document.getElementById('placechatid').innerText = ''

    if (document.getElementById('somechatinfo').style.display == '')
        document.getElementById('somechatinfo').style.display = 'none';

    if (document.getElementById('bottommenuchhis').style.display == '')
        document.getElementById('bottommenuchhis').style.display = 'none';

    if (document.getElementById('comentsbar').style.display == '')
        document.getElementById('comentsbar').style.display = 'none';

    document.getElementById('infofield').innerHTML = 'Загрузка'
	
		await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
		"headers": {
			"content-type": "application/json",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin"
		},
		"body": `{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"${this.getAttribute('value')}\"],\"tsFrom\":\"${document.getElementById('dateFromChHis').value}T${difhrs}:${mins}:${secs}.000Z\",\"tsTo\":\"${document.getElementById('dateToChHis').value}T${hrs}:${mins}:${secs}.000Z\",\"usedStatuses\":[\"OnOperator\",\"AssignedToOperator\",\"Active\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}`,
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(r => r.json()).then(r => operchatsdata = r)
	console.log(operchatsdata)

	if (operchatsdata.total == 0)
		alert(`У выбранного пользователя ${objSel[i].innerText} нет активных чатов`)

	for (let i = 0; i < operchatsdata.items.length; i++) {

		let tmestmp = new Date((operchatsdata.items[i].ts.split('[GMT]'))[0])
		let tshrs;
		let tsmin
		let day;
		let month;

		if (tmestmp.getMonth() < 9)
			month = "0" + (tmestmp.getMonth() + 1)
		else
			month = (tmestmp.getMonth() + 1)
		if (tmestmp.getDate() < 10)
			day = "0" + tmestmp.getDate()
		else
			day = tmestmp.getDate()
		let year = tmestmp.getFullYear();
		if ((tmestmp.getUTCHours() + 3) < 10)
			tshrs = "0" + (tmestmp.getUTCHours() + 3);
		else if ((tmestmp.getUTCHours() + 3) >= 24)
			tshrs = '0' + ((tmestmp.getUTCHours() + 3 - 24))
		else tshrs = (tmestmp.getUTCHours() + 3);

		if (tmestmp.getMinutes() < 10)
			tsmin = "0" + tmestmp.getMinutes();
		else tsmin = tmestmp.getMinutes();

		if (operchatsdata.items[i].channelUser.channelTpe != 'Telegram' && operchatsdata.items[i].channelUser.channelTpe != 'Widget' && operchatsdata.items[i].channelUser.channelTpe != 'WhatsApp' && operchatsdata.items[i].channelUser.payload.userFullName == undefined)
			foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.payload.userType + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
		else if (operchatsdata.items[i].channelUser.channelTpe != 'Telegram' && operchatsdata.items[i].channelUser.channelTpe != 'Widget' && operchatsdata.items[i].channelUser.channelTpe != 'WhatsApp' && operchatsdata.items[i].channelUser.payload.userFullName != undefined)
			foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.payload.userType + '</span>' + ' ' + operchatsdata.items[i].channelUser.payload.userFullName + '</span>' + '<br>'
		else if (operchatsdata.items[i].channelUser.channelTpe == 'Telegram' && operchatsdata.items[i].channelUser.payload == undefined)
			foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
		else if (operchatsdata.items[i].channelUser.channelTpe == 'Widget' && operchatsdata.items[i].channelUser.payload == undefined)
			foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
		else if (operchatsdata.items[i].channelUser.channelTpe == 'WhatsApp' && operchatsdata.items[i].channelUser.payload == undefined)
			foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
		else if (operchatsdata.items[i].channelUser.channelTpe == 'WhatsApp' && operchatsdata.items[i].channelUser.payload != undefined) // проверить вывод чата с  WA при таких критериях!
			foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
	}

	document.getElementById('infofield').innerHTML = foundarr;
	checkandchangestyle()

	for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
		document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId

		document.getElementsByClassName('chatlist')[i].onclick = async () => {

			await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
			console.log(convdata)

			if (convdata.status != null && convdata.status == 'AssignedToOperator')
				isChatOnOperator = true
			else isChatOnOperator = false;

			fillchatbox();
			checkandchangestyle();
		} // конец функции клика по списку в найденном чате
	}

}

let peoplestatus = document.createElement('div')
peoplestatus.id = 'idforpeopstatus'
peoplestatus.style = 'width: 200px; color: bisque;'
document.getElementsByClassName('ant-layout-sider-children')[0].append(peoplestatus)
async function operstatusleftbar() { // функция замены Script Package вывода списка операторов
	let opstats = []
	let moderresult =  '';
	let flagtpkc;

	let operdep = document.getElementsByClassName('user_menu-dropdown-user_name')[0].innerText.split('-')[0]
	if (operdep  == 'ТП')
		flagtpkc = 'ТП'
	else if (operdep == 'КЦ')
		flagtpkc = 'КЦ'
	else if (operdep == 'КМ')
		flagtpkc = 'КМ'
	
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
		"credentials": "include"
	}).then(r => r.json()).then(result => {

		for (let i = 0; i < result.onOperator.length; i++) {
			if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Offline" && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
				opstats.push(result.onOperator[i])
			} else if (flagtpkc == 'КЦ' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Offline" && result.onOperator[i].operator.fullName.match(/КЦ\D/)) {
				opstats.push(result.onOperator[i])
			} else if (flagtpkc == 'КМ' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Offline" && result.onOperator[i].operator.fullName.match(/КМ\D/)) {
				opstats.push(result.onOperator[i])
			} // end of if state
		} // end of for			
	})
	
		peoplestatus.innerHTML = ''
		
		if (opstats.length != 0) {
			for (let i = 0; i < opstats.length; i++) {
				if (opstats[i].aCnt == null)
					opstats[i].aCnt = 0;
				if (opstats[i].operator.status == "Online") {
					moderresult += `<div style="display:flex; align-items:center; font-size: 13.5px;" name="operrow" value="${opstats[i].operator.id}">` + '<span style="font-size:22px;">🟢 </span> ' + '<span style="position: absolute;left: 12px; padding-top:2px; color:black; font-size:13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
				} else if (opstats[i].operator.status == "Busy") {
					moderresult += `<div style="display:flex; align-items:center; font-size: 13.5px;" name="operrow" value="${opstats[i].operator.id}">` + '<span style="font-size:22px;">🟡 </span>' + '<span style="position: absolute;left: 12px; padding-top:2px; color:black; font-size:13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(f f f) 0px -1px 1px;">' + opstats[i].aCnt + '</span>' +  `${opstats[i].operator.fullName}` + '</div>'
				} else if (opstats[i].operator.status == "Pause") {
					moderresult+= `<div style="display:flex; align-items:center; font-size: 13.5px;" name="operrow" value="${opstats[i].operator.id}">` + '<span style="font-size:22px;">🔴 </span>' +  '<span style="position: absolute;left: 12px; padding-top:2px; color:black; font-size:13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
				}
			}
			peoplestatus.innerHTML = moderresult	

			let arofpers = document.getElementsByName('operrow')
			for (let i =0; i < arofpers.length; i++) {
				arofpers[i].onclick = findchatsonoper
			}
		}
		
	for (let i = 0 ; document.getElementsByClassName('app-content')[1].children[i] != undefined; i++) {
		if (document.getElementsByClassName('app-content')[1].children[i].id == 'people_head')
			document.getElementsByClassName('app-content')[1].children[i].remove()
	}
			
}

// setInterval(operstatusleftbar, 10000)
setTimeout(operstatusleftbar, 10000)


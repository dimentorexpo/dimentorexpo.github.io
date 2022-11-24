let peoplestatus = document.createElement('div')
peoplestatus.id = 'idforpeopstatus'
peoplestatus.style = 'width: 200px; color: bisque;'
document.getElementsByClassName('ant-layout-sider-children')[0].append(peoplestatus)
async function operstatusleftbar() { // функция замены Script Package вывода списка операторов
	let opstats = []
	let greenstats = []
	let yellowstats =[]
	let redstats = []
	let moderresult =  '';
	let flagtpkc;

	let operdep = document.getElementsByClassName('user_menu-dropdown-user_name')[0].innerText.split('-')[0]
	if (operdep  == 'ТП')
		flagtpkc = 'ТП'
	else if (operdep == 'КЦ')
		flagtpkc = 'КЦ'
	else if (operdep == 'КМ')
		flagtpkc = 'КМ'
	else if (operdep == 'ТС')
		flagtpkc = 'ТС'
	
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
			} else if (flagtpkc == 'ТС' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Offline" && result.onOperator[i].operator.fullName.match(/ТС\D/)) {
				opstats.push(result.onOperator[i])
			} else if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Online" && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
				greenstats.push(result.onOperator[i])
			} else if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Busy" && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
				yellowstats.push(result.onOperator[i])
			} else if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Pause" && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
				redstats.push(result.onOperator[i])
			} // end of if state
		} // end of for			
	})
	
		peoplestatus.innerHTML = ''
		
		if (greenstats.length != 0)  {
			for (let i = 0; i < greenstats.length; i++) {
					moderresult += `<div class="leftbaropers" name="operrow" value="${greenstats[i].operator.id}">` + '<span style="font-size:22px;">🟢 </span> ' + '<span style="position: absolute;left: 12px; padding-top:2px; color:black; font-size:13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px;">' + greenstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
			}
		}		
		
		if (yellowstats.length != 0)  {
			for (let i = 0; i < yellowstats.length; i++) {
					moderresult += `<div class="leftbaropers" style="opacity:0.8; color:Gold" name="operrow" value="${yellowstats[i].operator.id}">` + '<span style="font-size:22px;">🟡 </span>' + '<span style="position: absolute;left: 11px; padding-top:2px; color:black; font-size:13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px;">' + yellowstats[i].aCnt + '</span>' +  `${opstats[i].operator.fullName}` + '</div>'
			}
		}

		if (redstats.length != 0)  {
			for (let i = 0; i < redstats.length; i++) {
					moderresult+= `<div class="leftbaropers" style="opacity:0.8; color:Salmon" name="operrow" value="${redstats[i].operator.id}">` + '<span style="font-size:22px;">🔴 </span>' +  '<span style="position: absolute;left: 11px; padding-top:1px; color:white; font-size:13px; text-shadow: rgb(255 255 255) 1px 0px 1px, rgb(255 255 255) 0px 1px 1px, rgb(255 255 255) -1px 0px 1px, rgb(255 255 255) 0px -1px 1px;">' + redstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
			}
		}
		
			peoplestatus.innerHTML = moderresult	
			let arofpers = document.getElementsByName('operrow')
			for (let i =0; i < arofpers.length; i++) {
				arofpers[i].onclick = function() {
						if (document.getElementById('AF_ChatHis').style.display =='none')
							document.getElementById('butChatHistory').click()
						
						setTimeout( function() {
							let massivvidapspiskaoperatorov = document.getElementById('operatorstp')
							for (let k =1; k<massivvidapspiskaoperatorov.length; k++) {
								if (arofpers[i].getAttribute('value') == massivvidapspiskaoperatorov.children[k].value) {
								massivvidapspiskaoperatorov.children[k].selected = true
								findchatsoper()
							}
							}
						},1000)


				}
			}
		
		
	for (let i = 0 ; document.getElementsByClassName('app-content')[1].children[i] != undefined; i++) {
		if (document.getElementsByClassName('app-content')[1].children[i].id == 'people_head')
			document.getElementsByClassName('app-content')[1].children[i].remove()
	}
			
}

setInterval(operstatusleftbar, 6000)
// setTimeout(operstatusleftbar, 10000)


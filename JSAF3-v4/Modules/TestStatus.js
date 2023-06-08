if (localStorage.getItem('hidesummaryflag') == null)
    localStorage.setItem('hidesummaryflag', '1') // 1 список скрыт , 0 список открыт
let peoplestatus = document.createElement('div')
peoplestatus.id = 'idforpeopstatus'
peoplestatus.style = 'width: 200px; color: bisque;'
document.getElementsByClassName('ant-layout-sider-children')[0].append(peoplestatus)
async function operstatusleftbar() { // функция замены Script Package вывода списка операторов
    let opstats = []
    let moderresult = '';
    let flagtpkc;
    let operonlinecnt = 0;
    let busycnt = 0;
    let pausecnt = 0;
    let chatneraspcountleft = 0;
    let chattpquecountleft = 0;

    let operdep = document.getElementsByClassName('user_menu-dropdown-user_name')[0].innerText.split('-')[0]
    if (operdep == 'ТП')
        flagtpkc = 'ТП'
    else if (operdep == 'КЦ')
        flagtpkc = 'КЦ'
    else if (operdep == 'КМ')
        flagtpkc = 'КМ'
    else if (operdep == 'ТС')
        flagtpkc = 'ТС'


    var dateopst = new Date()
    day = month = ""
    if (dateopst.getMonth() < 9)
        month = "0" + (dateopst.getMonth() + 1)
    else
        month = (dateopst.getMonth() + 1)
    if (dateopst.getDate() < 10)
        day = "0" + dateopst.getDate()
    else
        day = dateopst.getDate()

    secondDate = dateopst.getFullYear() + "-" + month + "-" + day + "T20:59:59.059Z"
    dateopst = dateopst - 24 * 60 * 60 * 1000
    var dateopst2 = new Date()
    dateopst2.setTime(dateopst)

    if (dateopst2.getMonth() < 9)
        month2 = "0" + (dateopst2.getMonth() + 1)
    else
        month2 = (dateopst2.getMonth() + 1)
    if (dateopst2.getDate() < 10)
        day2 = "0" + (dateopst2.getDate()) // убрал -1
    else if (dateopst2.getDate() == 10)
        day2 = (dateopst2.getDate());
    else
        day2 = (dateopst2.getDate() - 1)
    firstDate = dateopst2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000Z"

    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(r => r.json()).then(result => {

        for (let i = 0; i < result.onOperator.length; i++) {
			if (result.onOperator[i].operator.status != "Offline") {
				if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
					opstats.push(result.onOperator[i])
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb == '120181') {
							chattpquecountleft = result.unAssigned[j].count
						}
					}
				} else if (flagtpkc == 'КЦ' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/КЦ\D/)) {
					opstats.push(result.onOperator[i])					
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb == '121386') {
							chatneraspcountleft = result.unAssigned[j].count
						}
					}	
				} else if (flagtpkc == 'КМ' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/КМ\D/)) {
					opstats.push(result.onOperator[i])
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb == '121300') {
							chatneraspcountleft = result.unAssigned[j].count
						}
					}	
				} else if (flagtpkc == 'ТС' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/ТС\D/)) {
					opstats.push(result.onOperator[i])
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb != '120181' && result.unAssigned[j].kb != '121300') {
							chatneraspcountleft = result.unAssigned[j].count
						}
					}	
				} // end of if state small 	
			} else { // end of if state big
				if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb == '120181') {
							chattpquecountleft = result.unAssigned[j].count
						}
					}
				} else if (flagtpkc == 'КЦ' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/КЦ\D/)) {
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb == '121386') {
							chatneraspcountleft = result.unAssigned[j].count
						}
					}	
				} else if (flagtpkc == 'КМ' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/КМ\D/)) {
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb == '121300') {
							chatneraspcountleft = result.unAssigned[j].count
						}
					}	
				} else if (flagtpkc == 'ТС' && result.onOperator[i].operator != null && result.onOperator[i].operator.fullName.match(/ТС\D/)) {
					for (let j=0; result.unAssigned[j] != undefined; j++) {
						if (result.unAssigned[j].kb != '120181' && result.unAssigned[j].kb != '121300') {
							chatneraspcountleft = result.unAssigned[j].count
						}
					}
				} // end of if state small 	
			} 
			

        } // end of for
    })

    peoplestatus.innerHTML = ''

	if (opstats.length !=0) {
		opstats.sort((prev, next) => {
			if (prev.operator.status < next.operator.status) return -1;
			if (prev.operator.status < next.operator.status) return 1;
		});
	}


    if (opstats.length != 0) {
        for (let i = 0; i < opstats.length; i++) {
            if (opstats[i].aCnt == null)
                opstats[i].aCnt = 0;
            if (opstats[i].operator.status == "Online") {
                moderresult += `<div class="leftbaropers" name="operrow" value="${opstats[i].operator.id}">` + '<span style="color: black;font-size: 13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px; background: green; width: 25px; height: 25px; padding-top:2px; text-align: center; border-radius: 50%; border: 1px solid black;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
                operonlinecnt += 1;
            } else if (opstats[i].operator.status == "Busy") {
                moderresult += `<div class="leftbaropers" style="opacity:0.8; color:Gold" name="operrow" value="${opstats[i].operator.id}">` + '<span style="color: black; font-size: 13px; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px; background: gold; opacity:0.8; width: 25px; height: 25px; padding-top:2px; text-align: center; border-radius: 50%; border: 1px solid black;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
                busycnt += 1;
            } else if (opstats[i].operator.status == "Pause") {
                moderresult += `<div class="leftbaropers" style="opacity:0.8; color:Salmon" name="operrow" value="${opstats[i].operator.id}">` + '<span style="color: white; font-size: 13px; font-weight:700; text-shadow: rgb(191 125 125) 1px 0px 1px, rgb(191 125 125) 0px 1px 1px, rgb(191 125 125) -1px 0px 1px, rgb(191 125 125) 0px -1px 1px; background: FireBrick; width: 25px; height: 25px; padding-top:2px; text-align: center; border-radius: 50%; border: 1px solid black;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
                pausecnt += 1;
            }
        }
    } else moderresult = ''

    if (flagtpkc == 'ТП' && localStorage.getItem('hidesummaryflag') == '1') {

        peoplestatus.innerHTML =
            '<div style="background:#792525; font-weight: 700; text-align: center; letter-spacing: .2rem; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); border: 1px solid #464343; margin-bottom: 5px;">' + '🚧 Нераспред: ' + chattpquecountleft + '</div>' +
            moderresult + '<br>' +
            '<div id="clicktounhidestatuses" title="По клику откроет общую информацию о том, сколько всего операторов и их количество в разных статусах" style="color:bisque; opacity:0.8; cursor:pointer; text-align:center;">🔽 Открыть</div>' +
            '<div id="opersstats" style="display:none;">' +
            '<div  style="background:#257947; font-weight: 700; text-align: center; border: 1px solid black;">' + '🛠 Онлайн: ' + operonlinecnt + '</div>' +
            '<div style="background: #a3bb1d; color: black; font-weight: 700; text-align: center; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⏳ Занят: ' + busycnt + '</div>' +
            '<div style="background:#cf4615; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '🍔 Перерыв: ' + pausecnt + '</div>' +
            '<div  style="background:#492579; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⚡ Всего: ' + (+pausecnt + busycnt + operonlinecnt) + '</div>' +
            '</div>'

    } else if (flagtpkc == 'ТП' && localStorage.getItem('hidesummaryflag') == '0') {
        peoplestatus.innerHTML =
            '<div style="background:#792525; font-weight: 700; text-align: center; letter-spacing: .2rem; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); border: 1px solid #464343; margin-bottom: 5px;">' + '🚧 Нераспред: ' + chattpquecountleft + '</div>' +
            moderresult + '<br>' +
            '<div id="clicktounhidestatuses" title="По клику откроет общую информацию о том, сколько всего операторов и их количество в разных статусах"  style="color:bisque; opacity:0.8; cursor:pointer; text-align:center;">🔼 Скрыть</div>' +
            '<div id="opersstats">' +
            '<div style="background:#257947; font-weight: 700; text-align: center; border: 1px solid black;">' + '🛠 Онлайн: ' + operonlinecnt + '</div>' +
            '<div style="background: #a3bb1d; color: black; font-weight: 700; text-align: center; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⏳ Занят: ' + busycnt + '</div>' +
            '<div style="background:#cf4615; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '🍔 Перерыв: ' + pausecnt + '</div>' +
            '<div style="background:#492579; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⚡ Всего: ' + (+pausecnt + busycnt + operonlinecnt) + '</div>' +
            '</div>'
    } else if (flagtpkc != 'ТП' && localStorage.getItem('hidesummaryflag') == '1') {
        peoplestatus.innerHTML =
            '<div style="background:#792525; font-weight: 700; text-align: center; letter-spacing: .2rem; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); border: 1px solid #464343; margin-bottom: 5px;">' + '🚧 Нераспред: ' + chatneraspcountleft + '</div>' +
            moderresult + '<br>' +
            '<div id="clicktounhidestatuses" title="По клику откроет общую информацию о том, сколько всего операторов и их количество в разных статусах"  style="color:bisque; opacity:0.8; cursor:pointer; text-align:center;">🔽 Открыть</div>' +
            '<div id="opersstats" style="display:none">' + '<div  style="background:#257947; font-weight: 700; text-align: center; border: 1px solid black;">' + '🛠 Онлайн: ' + operonlinecnt + '</div>' +
            '<div style="background: #a3bb1d; color: black; font-weight: 700; text-align: center; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⏳ Занят: ' + busycnt + '</div>' +
            '<div style="background:#cf4615; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '🍔 Перерыв: ' + pausecnt + '</div>' +
            '<div  style="background:#492579; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⚡ Всего: ' + (+pausecnt + busycnt + operonlinecnt) + '</div>' +
            '</div>'
    } else if (flagtpkc != 'ТП' && localStorage.getItem('hidesummaryflag') == '0') {
        peoplestatus.innerHTML =
            '<div style="background:#792525; font-weight: 700; text-align: center; letter-spacing: .2rem; text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); border: 1px solid #464343; margin-bottom: 5px;">' + '🚧 Нераспред: ' + chatneraspcountleft + '</div>' +
            moderresult + '<br>' +
            '<div id="clicktounhidestatuses" title="По клику откроет общую информацию о том, сколько всего операторов и их количество в разных статусах"  style="color:bisque; opacity:0.8; cursor:pointer; text-align:center;">🔼 Скрыть</div>' +
            '<div id="opersstats">' + '<div  style="background:#257947; font-weight: 700; text-align: center; border: 1px solid black;">' + '🛠 Онлайн: ' + operonlinecnt + '</div>' +
            '<div style="background: #a3bb1d; color: black; font-weight: 700; text-align: center; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⏳ Занят: ' + busycnt + '</div>' +
            '<div style="background:#cf4615; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '🍔 Перерыв: ' + pausecnt + '</div>' +
            '<div  style="background:#492579; font-weight: 700; text-align: center;border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">' + '⚡ Всего: ' + (+pausecnt + busycnt + operonlinecnt) + '</div>' +
            '</div>'
    }

    document.getElementById('clicktounhidestatuses').onclick = function () {
        if (document.getElementById('clicktounhidestatuses').textContent == '🔽 Открыть') {
            document.getElementById('opersstats').style.display = '';
            document.getElementById('clicktounhidestatuses').textContent = '🔼 Скрыть'
            localStorage.setItem('hidesummaryflag', '0')
        } else if (document.getElementById('clicktounhidestatuses').textContent == '🔼 Скрыть') {
            document.getElementById('opersstats').style.display = 'none';
            document.getElementById('clicktounhidestatuses').textContent = '🔽 Открыть'
            localStorage.setItem('hidesummaryflag', '1')
        }
    }


    let arofpers = document.getElementsByName('operrow')
    for (let i = 0; i < arofpers.length; i++) {
        arofpers[i].onclick = function () {
            if (document.getElementById('AF_ChatHis').style.display == 'none')
                document.getElementById('butChatHistory').click()

            setTimeout(function () {
                let massivvidapspiskaoperatorov = document.getElementById('operatorstp')
                for (let k = 1; k < massivvidapspiskaoperatorov.length; k++) {
                    if (arofpers[i].getAttribute('value') == massivvidapspiskaoperatorov.children[k].value) {
                        massivvidapspiskaoperatorov.children[k].selected = true
                        findchatsoper()
                    }
                }
            }, 1000)
        }
    }

    for (let i = 0; document.getElementsByClassName('app-content')[1].children[i] != undefined; i++) {
        if (document.getElementsByClassName('app-content')[1].children[i].id == 'people_head')
            document.getElementsByClassName('app-content')[1].children[i].remove()
    }

}

var testint = setInterval(operstatusleftbar, 6000)
// setTimeout(operstatusleftbar, 10000)


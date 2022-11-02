let upmenubtn = document.createElement('span')
upmenubtn.innerText = "Меню"
upmenubtn.id = 'MenubarCRM'
upmenubtn.style="cursor:pointer;font-weight:500; text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;"

function initialize() {
try {
	if (location.origin == 'https://crm2.skyeng.ru')
		if (document.getElementsByClassName('mat-toolbar-row')[0] != undefined && document.getElementById('MenubarCRM') == null) {
			document.getElementsByClassName('mat-toolbar-row')[0].children[1].children[0].append(upmenubtn)
			
			document.getElementById('MenubarCRM').onclick = function() {
				if (document.getElementById('idmymenucrm').style.display == 'none')  {
					document.getElementById('idmymenucrm').style.display =''
				} else {
					document.getElementById('idmymenucrm').style.display ='none'

				}
			}
			console.log('Vivodim')
			clearInterval(init)
		}
} 
catch (e) { console.error(e, e.stack); }
}

var init = setInterval(initialize, 3000)


let menubarcrm = document.createElement('div')
menubarcrm.style = `background: white; position:absolute; left: 950px; top: 50px; border: 0px solid #000000; display:none; min-height: 60px; min-width:150px; box-shadow: -1px 4px 16px 7px rgba(34, 60, 80, 0.09); z-index:999;`
menubarcrm.id = 'idmymenucrm'

document.body.append(menubarcrm)



let jirasearchbtn = document.createElement('div')
jirasearchbtn.innerText = "🔎Jira search"
jirasearchbtn.style="cursor:pointer"
document.getElementById('idmymenucrm').append(jirasearchbtn)
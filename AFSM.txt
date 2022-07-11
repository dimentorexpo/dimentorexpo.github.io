
function mystylesAFMSext() {
    let mystlAFMS = document.createElement('style');
    document.body.append(mystl);
    var styleAFMSext = `
	.wintInitializeChat {
		min-height: 100px;
		min-width: 200px;
		font-size: 14px;
		z-index: 20;
		position: fixed;
		border: 1px solid rgb(56, 56, 56);
		background: rgb(70, 68, 81);
		color: white;
	}
	
	button {
		background-color:#768d87;
		border-radius:5px;
		border:1px solid #566963;
		color:#ffffff;
		padding:2px 2px;
	}
	
	button:hover {
		background: #6A5ACD;
	}
	
	`
    mystlAFMS.innerHTML = styleAFMSext;
}

mystylesAFMSext()

var win_addChatMenu = `<div style="display: flex;">
					<span style="cursor: -webkit-grab;">
					
					     <div style="margin: 5px;" id="addChatMenuHeader">
                            <button title="скрывает меню" id="hideMeAddChatMenu" style="width:50px; background: #228B22;">hide</button>
                        </div>
					
						<input id="userid1" style="margin-left: 5px; width:100px; text-align:center;" placeholder="teacherId">
						<input id="userid2" style="width:100px; text-align:center;" placeholder="studentId">
						<button id="addChat" style="margin:5px">➕💬</button>
						<button id="RemoveChat" style="margin:5px">❌💬</button>
					</span>
				   </div>`;
				   
if (localStorage.getItem('winTopAddChatMenu') == null) { //additional Chat menu
    localStorage.setItem('winTopAddChatMenu', '120');
    localStorage.setItem('winLeftAddChatMenu', '295');
}

let wintAddChatMenu = document.createElement('div');
document.body.append(wintAddChatMenu);
wintAddChatMenu.className = 'wintInitializeChat'
wintAddChatMenu.style = 'display:none;  top: ' + localStorage.getItem('winTopAddChatMenu') + 'px; left: ' + localStorage.getItem('winLeftAddChatMenu') + 'px;';
wintAddChatMenu.setAttribute('id', 'AFMS_addChatMenu');
wintAddChatMenu.innerHTML = win_addChatMenu;  

function taddchat() {
	wintAddChatMenu.onmouseup = function () {document.removeEventListener('mousemove', listener9998);}
	var listener9998 = function(e , a) {
		wintAddChatMenu.style.left = Number(e.clientX - myX9998) + "px";
		wintAddChatMenu.style.top = Number(e.clientY - myY9998) + "px";
		localStorage.setItem('winTopAddChatMenuMenu', String(Number(e.clientY - myY9998)));
		localStorage.setItem('winLeftAddChatMenuMenu', String(Number(e.clientX - myX9998)));
	};
	wintAddChatMenu.firstElementChild.firstElementChild.onmousedown = function (a) {
		window.myX9998 = a.layerX; 
		window.myY9998 = a.layerY; 
		document.addEventListener('mousemove', listener9998);
	}
	wintAddChatMenu.onmouseup = function () {document.removeEventListener('mousemove', listener9998);}
}
taddchat();


document.getElementById('test1').onclick = async function() {
	if (document.getElementById('AFMS_addChatMenu').style.display == 'none') {
		document.getElementById('AFMS_addChatMenu').style.display = ''
		
	    let d = document.cookie;
        d = d.match(/token_global=(.*)/);
        let sidarr = [];
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "authorization": "Bearer" + d[1]
            },
            "credentials": "include",
            "method": "POST",
        }).then(r => r.json()).then(r => artId = r)
		console.log(artId)
		
		document.getElementById('userid1').value = artId.user.id;
		
		document.getElementById('addChat').onclick = () => {
			
			fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
				  "headers": {
					"accept": "application/json, text/plain, */*",
					"accept-language": "ru-RU,ru;q=0.9",
					"content-type": "application/json",
					"sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "referrer": "https://new-teachers.skyeng.ru/",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": `{\"userId1\":${document.getElementById('userid1').value},\"userId2\":${document.getElementById('userid2').value}}`,
				  "method": "POST",
				  "mode": "cors",
				  "credentials": "include"
				});
			
			console.log('%cWorks', 'color:lightgreen; font-weight:700"');
		}		
		
		document.getElementById('RemoveChat').onclick = () => {
			
			fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
				  "headers": {
					"accept": "application/json, text/plain, */*",
					"accept-language": "ru-RU,ru;q=0.9",
					"content-type": "application/json",
					"sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "referrer": "https://new-teachers.skyeng.ru/",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": `{\"userId1\":${document.getElementById('userid1').value},\"userId2\":${document.getElementById('userid2').value}}`,
				  "method": "DELETE",
				  "mode": "cors",
				  "credentials": "include"
				});
			
			console.log('%cWorks', 'color:lightgreen; font-weight:700"');
		}
		
		document.getElementById('hideMeAddChatMenu').onclick = () => {
			document.getElementById('AFMS_addChatMenu').style.display = 'none'
		}
	}
	else document.getElementById('AFMS_addChatMenu').style.display = 'none'
}
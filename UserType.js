					 let userTypeName = document.createElement('span')
					userTypeName.id = "userTypeId"
					document.getElementsByClassName('expert-user_details-name')[0].appendChild(userTypeName)
						for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
								if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "teacher") {
								document.getElementById('userTypeId').innerText = "(П)"
								document.getElementById('userTypeId').style.color = "#1E90FF"
								} else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "student") {
									document.getElementById('userTypeId').innerText = "(У)"
									document.getElementById('userTypeId').style.color = "#DC143C"									
								} else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "parent")
								{
								    document.getElementById('userTypeId').innerText = "(РУ)"
									document.getElementById('userTypeId').style.color = "#DC143C"	
								} 		
					}
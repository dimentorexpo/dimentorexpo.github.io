let buttonloc = document.createElement('p');
buttonloc.id = 'changeServiceLocale';
buttonloc.innerHTML = '<a style="color: black; cursor: pointer;">Изменить яз.обсл. на RU</a>';

 //Функция изменения языка обслуживания с АФ интерфейса
var getidnewfromaf = 0;
buttonloc.onclick = function () {
   for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
       if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
           getidnewfromaf = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
       console.log("getidnewfromaf = " + ' ' + getidnewfromaf);
   }
   document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
			  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include" 
	 }`

   document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + getidnewfromaf + "?crm2=true&debugParam=person-page"
   document.getElementById('responseTextarea3').value = 'statusofcrmprofile'
  document.getElementById('sendResponse').click()
	
   function getId() {

       var statusResult = document.getElementById('responseTextarea1').getAttribute('statusofcrmprofile');
       document.getElementById('responseTextarea1').removeAttribute('statusofcrmprofile');

       console.log("proverka statusresult = " + statusResult);

       if (statusResult.match(/serviceLocale.*?([a-z]{4})/)[1] == "null") {
            
           document.getElementById('responseTextarea1').value = `{
				   "headers": {
					"content-type": "application/json",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "referrer": "https://crm2.skyeng.ru/",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": "{\\"serviceLocale\\":\\"ru\\"}",
				  "method": "PUT",
				  "mode": "cors",
				  "credentials": "include"
		 
	 }`
           document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/general/" + getidnewfromaf
           document.getElementById('responseTextarea3').value = ''
           document.getElementById('sendResponse').click()

			document.getElementById("changeServiceLocale").style.color = "green";
           document.getElementById("changeServiceLocale").innerHTML = "Локаль успешно изменена";
           setTimeout(function () { document.getElementById('changeServiceLocale').innerHTML = "Изменить яз.обсл. на RU" }, 3000);
			setTimeout(function () { document.getElementById("changeServiceLocale").style.color = "black"; }, 3000);
       } else {
          document.getElementById("changeServiceLocale").style.color = "red";
           document.getElementById("changeServiceLocale").innerHTML = "Локаль уже задана";
           setTimeout(function () { document.getElementById('changeServiceLocale').innerHTML = "Изменить яз.обсл. на RU" }, 3000);
			setTimeout(function () { document.getElementById("changeServiceLocale").style.color = "black"; }, 3000);
       }
   }
   setTimeout(getId, 1000);
}


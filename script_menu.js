var scriptmenu = // описание меню для ссылок
    `<div style="max-width: 110px"class="sc-AxhUy fxWvvr user_menu-language_switcher">
        <button id="menubtn" type="button" class="ant-btn ant-dropdown-trigger ant-dropdown-open" ant-click-animating-without-extra-node="false" onclick="openmenu()">
            <span class="user_menu-status-name">Меню</span>
            <span role="img" aria-label="down" type="down" class="anticon anticon-down user_menu-dropdown-icon">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
            </span>
        </button>
        <div class="ant-dropdown ant-dropdown-placement-bottomLeft" style="min-width: 110px; left: 1055px; top: 52px;">
    	<ul id="upmenu" style="display: none" class="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical" role="menu" tabindex="0" onclick="openmenu()">
	    </ul> 
    </div>
</div>`;


function openmenu(){ // открытие закрытие меню
    if (document.getElementById("upmenu").style.display == 'none') {
        document.getElementById("upmenu").style.display = '';
    }else{
        document.getElementById("upmenu").style.display = 'none'
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.ant-dropdown-open') && !event.target.matches('.user_menu-status-name')) {
      var dropdowns = document.getElementsByClassName("ant-dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display =='') {
            openDropdown.style.display = 'none';
        }
      }
    }
  }

  let scrptmn = document.createElement('div'); // создание окна ссылок
  document.body.append(scriptmenu);
  scrptmn.setAttribute('id', 'scriptmen');
  scrptmn.innerHTML = scriptmenu;  

  setTimeout(function () {
    btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
    btnAdd1.insertBefore(scrptmn, btnAdd1.children[0])
}, 2000)
	document.getElementById('servDsk').onclick = function () {
        if (document.getElementById('AF_ServDsk').style.display == '')
            document.getElementById('AF_ServDsk').style.display = 'none'
        else
            document.getElementById('AF_ServDsk').style.display = ''
			document.getElementById('optionTeacher').onclick = function() {
				if (document.getElementById('teacherssrvdskoptions').style.display != ''){
					document.getElementById('teacherssrvdskoptions').style.display = '';
					document.getElementById('optionTeacher').style.backgroundColor = "Tomato"			
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 	
				} else {
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
						}
		 }
		 
		 			document.getElementById('optionSkysmart').onclick = function() {
				if (document.getElementById('skysmartsrvdskoptions').style.display != '') {
					document.getElementById('skysmartsrvdskoptions').style.display = '';
					document.getElementById('optionSkysmart').style.backgroundColor = "Tomato";
					document.getElementById('kidsform').style.display = '';
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87";
					
						document.getElementById('skysmartcontent').onclick =function() {
							if (document.getElementById('kidsform').style.display == '') {
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcontent').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartfeedback').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "DodgerBlue";
							} else if (document.getElementById('kidsform').style.display == '') {								
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartfamily').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmarthomework').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartprogress').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartcabinet').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartcertificate').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartgroup').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartpages').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartappparents').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							}
						}
						
						document.getElementById('skysmartonetoone').onclick =function() {
							document.getElementById('kidsform').style.display = 'none';
							if (document.getElementById('kidsform').style.display != '') {
							document.getElementById('kidsform').style.display = '';
							document.getElementById('skysmartcontent').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfeedback').style.backgroundColor = "#768d87";
							document.getElementById('skysmartfamily').style.backgroundColor = "#768d87";
							document.getElementById('skysmarthomework').style.backgroundColor = "#768d87";
							document.getElementById('skysmartprogress').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcabinet').style.backgroundColor = "#768d87";
							document.getElementById('skysmartcertificate').style.backgroundColor = "#768d87";
							document.getElementById('skysmartgroup').style.backgroundColor = "#768d87";
							document.getElementById('skysmartpages').style.backgroundColor = "#768d87";
							document.getElementById('skysmartappparents').style.backgroundColor = "#768d87";
							document.getElementById('skysmartonetoone').style.backgroundColor = "DodgerBlue";
							} else { 
							document.getElementById('kidsform').style.display = 'none';
							document.getElementById('skysmartonetoone').style.backgroundColor = "#768d87";
							}
						}
						
				} else {
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('kidsform').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 		 	document.getElementById('optionBillingQA').onclick = function() {
				if (document.getElementById('billingqasrvdskoptions').style.display != '') {
					document.getElementById('billingqasrvdskoptions').style.display = '';
					document.getElementById('optionBillingQA').style.backgroundColor = "Tomato"	
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 		 	document.getElementById('optionOnboarding').onclick = function() {
				if (document.getElementById('c1srvdskoptions').style.display != '') {
					document.getElementById('c1srvdskoptions').style.display = '';
					document.getElementById('optionOnboarding').style.backgroundColor = "Tomato"	
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";	
				}
		 }
		 
					document.getElementById('optionSchedule').onclick = function() {
				if (document.getElementById('schedulesrvdskoptions').style.display != '') {
					document.getElementById('schedulesrvdskoptions').style.display = '';
					document.getElementById('optionSchedule').style.backgroundColor = "Tomato"	
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 			document.getElementById('optionTelephony').onclick = function() {
				if (document.getElementById('telephonysrvdskoptions').style.display != '') {
					document.getElementById('telephonysrvdskoptions').style.display = '';
					document.getElementById('optionTelephony').style.backgroundColor = "Tomato"
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";	
				}
		 }
		 
		 		 	document.getElementById('optionAuth').onclick = function() {
				if (document.getElementById('authsrvdskoptions').style.display != '') {
					document.getElementById('authsrvdskoptions').style.display = '';
					document.getElementById('optionAuth').style.backgroundColor = "Tomato"
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";	 
				}
				
		 }
		 
		 		 	document.getElementById('optionCRM2').onclick = function() {
				if (document.getElementById('crm2srvdskoptions').style.display != '') {
					document.getElementById('crm2srvdskoptions').style.display = '';
					document.getElementById('optionCRM2').style.backgroundColor = "Tomato"
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";
				}
		 }
		 
					document.getElementById('optionMrkt').onclick = function() {
				if (document.getElementById('mrktsrvdskoptions').style.display != '') {
					document.getElementById('mrktsrvdskoptions').style.display = '';
					document.getElementById('optionMrkt').style.backgroundColor = "Tomato"
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";	
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87";
				}
		 }
		 
		 			document.getElementById('optionBilling').onclick = function() {
				if (document.getElementById('billingsrvdskoptions').style.display != '') {
					document.getElementById('billingsrvdskoptions').style.display = '';
					document.getElementById('optionBilling').style.backgroundColor = "Tomato"
					document.getElementById('teacherssrvdskoptions').style.display = 'none';
					document.getElementById('skysmartsrvdskoptions').style.display = 'none';
					document.getElementById('billingqasrvdskoptions').style.display = 'none';
					document.getElementById('c1srvdskoptions').style.display = 'none';
					document.getElementById('schedulesrvdskoptions').style.display = 'none';
					document.getElementById('telephonysrvdskoptions').style.display = 'none';
					document.getElementById('authsrvdskoptions').style.display = 'none';
					document.getElementById('crm2srvdskoptions').style.display = 'none';
					document.getElementById('mrktsrvdskoptions').style.display = 'none';
					document.getElementById('optionSkysmart').style.backgroundColor = "#768d87";
					document.getElementById('optionTeacher').style.backgroundColor = "#768d87";
					document.getElementById('optionBillingQA').style.backgroundColor = "#768d87";
					document.getElementById('optionOnboarding').style.backgroundColor = "#768d87";
					document.getElementById('optionSchedule').style.backgroundColor = "#768d87";
					document.getElementById('optionTelephony').style.backgroundColor = "#768d87";
					document.getElementById('optionAuth').style.backgroundColor = "#768d87";
					document.getElementById('optionCRM2').style.backgroundColor = "#768d87";	
					document.getElementById('optionMrkt').style.backgroundColor = "#768d87"; 
				} else {
					document.getElementById('billingsrvdskoptions').style.display = 'none';
					document.getElementById('optionBilling').style.backgroundColor = "#768d87"; 
				}
		 }	 
    }
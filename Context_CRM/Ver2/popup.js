var storage =  chrome.storage.sync;
$(function() {
	$('#name').keyup(function(){
		$('#greet').text('Hello ' + $('#name').val());
	})
})

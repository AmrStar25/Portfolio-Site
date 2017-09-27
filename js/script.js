$(document).on('click','.project',function(event){
			var url = $(this).find('p').text();
			if(url=='none')
				window.alert('not comming yet');
			else
				window.open(url);
		});
function Strgetter( text_input , msg_container , button_send) {
	//text_input
	this.element = document.getElementById(text_input);

	//container for messages
	var container = document.getElementById(msg_container);




	//GET STRING FROM TEXT-INPUT

	this.getStr = function(){
		return this.element.value;
	}


	//CLEAR TEXT INPUT

	this.clear = function(){
		this.element.value = '';
	}

	// VAR FOR HEIGHT USING IN SCROLL

	var y = container.offsetHeight;  
	
	//FUNCTION SEND MESSAGE TO CHAT AND CREATE JSON POST-REQUEST**

	this.sendMsg = function(){
		
		let str = this.getStr();
		$('#opened').css('display','none');
		$('#closed').css('display','block');
		if(str != ''){
			let newstr = JSON.stringify(str);
			$.post( "test.php", newstr );
			container.innerHTML += msgTemp(str);
			y += 440;
			container.scrollTo(0, y);
		}
		else{
			alert('Field is empty!')
		}
	}


	//TEMPLATE FOR MESSAGE

	function msgTemp(str){
		return '<div class="container"><div class="container-user">' + str + '</div></div>';
	} 

	
	//button for enter event processor

	var button_for_enter = document.getElementById(button_send);
	
	//button - object field

	this.butt = button_for_enter;
	
	//PROCESSOR FOR ENTER PRESS

	this.enterProc = function(){
		this.element.onkeyup = function (e) {
			$('#opened').css('display','block');
			$('#closed').css('display','none');
		    e = e || window.event;

		    if (e.keyCode === 13) {
				button_for_enter.click();
		    }
			return false;

		}
	}



		
};




window.onload = function () {		
	
	var strget = new Strgetter('strget','content','cli');
	


	//opener for chat
	$('#helper-header').click(function(){
		$('.helper').slideToggle();

	});
	$('#helper-header1').click(function(){
		$('.helper').slideToggle();

	});
	//FUNCTION PROCESS BUTTON ANIMATION AND CALL SENDMSG FUNCTION**
	strget.butt.onclick = function(){
		strget.sendMsg();
		strget.clear();
	};

	//PROCESSOR ENTER EVENT CALL
	strget.enterProc();
	
	$('#desc_but_1').click(function(){
		$('.cash_sender-description').slideToggle();

	});
	


	

	
   

}; 
		
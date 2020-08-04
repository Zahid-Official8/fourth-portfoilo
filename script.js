document.getElementById('generate-pin').addEventListener('click', function(){
    var result = Math.random() * 8999 + 1000 ;
    var output = Math.round(result);
    document.getElementById('created-pin').value = output;   
    hideDisplay();  
})

function hideDisplay (action) {
    if(action == true){
    document.getElementById("notAllowed").style.display = "none";
    }
    if (action == false) {
         document.getElementById("granted").style.display = "none";
    }
   else{
        document.getElementById("notAllowed").style.display = "none"; 
        document.getElementById("granted").style.display = "none";
    }
}    


function viewDisplay(action) {
    if(action == true){
         document.getElementById("notAllowed").style.display = "block";
    }
    if (action == false) {
         document.getElementById("granted").style.display = "block";
    }  
}

function key (number){
    enterPin.value += number
 }

function backspace() { 
    var inputValue = document.getElementById("enterPin").value;
    document.getElementById("enterPin").value = inputValue.substr(0, inputValue.length - 1);
}
function whitespace() {
    var inputValue = document.getElementById("enterPin").value;
    document.getElementById("enterPin").value = inputValue.substr(0, inputValue.length * 0);
}

document.getElementById('submit-pin').addEventListener('click', function(){
    var inputValue = document.getElementById("enterPin").value; 
    var outputValue = document.getElementById("created-pin").value;
       
                if( inputValue == outputValue ){
                    hideDisplay(true);
                    viewDisplay(false);
                }
                if( inputValue !== outputValue ){
                    viewDisplay(true);
                    hideDisplay(false);

                   var remainingTries = document.getElementById("action-left").innerHTML;
                    if(remainingTries > 0){
                        document.getElementById("action-left").innerHTML = remainingTries-1;
                    }
                    if( remainingTries == 1){
                        document.getElementById("warning").innerHTML = 'Your Account is locked. Contact Us to unlock it.';
                        document.getElementById('submit-pin').disabled = true;
                        document.getElementById('submit-pin').innerHTML = 'Disabled'
                    }                }                         
                    if(inputValue.length == 0 && outputValue.length !== 0){ 
                        alert(" Please type the Generated Pin in the input value");
                    hideDisplay(true);
                        var remainingTries = document.getElementById("action-left").innerHTML;
                        document.getElementById("enterPin").innerHTML = remainingTries*1 + 1;
                    }    
                    if( outputValue.length  == 0 && inputValue.length  !== 0){
                        alert("Please Generate Pin first");
                        hideDisplay(true);
                        var remainingTries = document.getElementById("action-left").innerHTML;
                        document.getElementById("action-left").innerHTML = remainingTries*1 + 1;
                    }   
                    if(inputValue.length  == 0 && outputValue.length  == 0){
                        alert("Please Generate Pin first & type it in the input value");
                        hideDisplay(false);
                    }   
                    
})
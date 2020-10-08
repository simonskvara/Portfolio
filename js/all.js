var btnContainer = document.getElementById("navbar");

var btns = btnContainer.getElementsByClassName("btn-navbar");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function checkform()
{

    var inputs = [];
    inputs[0] = document.getElementById("inputMessage");
    var inputs1 = [];
    inputs1[0] = document.getElementById("inputName");
    var inputs2 = [];
    inputs2[0] = document.getElementById("inputEmail");

    for( i =0; i < inputs.length; i++) 
    {
        if (inputs[i].value === "" ) 
        {
            document.getElementById("errorMessage").innerHTML = "Please enter the message."; 
            document.getElementById("errorMessage").style.color = "#E53344";
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("inputMessage").style.borderBottom = "2px solid #E53344";
            document.getElementById("labelMessage").style.color = "#E53344";
        } 
    }

    for( i =0; i < inputs2.length; i++) 
    {
        if (inputs2[i].value === "" ) 
        {
            document.getElementById("errorEmail").innerHTML = "Please enter your email."; 
            document.getElementById("errorEmail").style.color = "#E53344";
            document.getElementById("errorEmail").style.display = "block";
            document.getElementById("inputEmail").style.borderBottom = "2px solid #E53344";
            document.getElementById("labelEmail").style.color = "#E53344";
        }
    }
    document.getElementById("overlayMessage").style.display = "block";
}


function offMessage() {
    document.getElementById("overlayMessage").style.display = "none";
}



function onSculpt() {
    document.getElementById("overlaySculpt").style.display = "block";
}
  
function offSculpt() {
    document.getElementById("overlaySculpt").style.display = "none";
}



function onNanovo() {
    document.getElementById("overlayNanovo").style.display = "block";
}
  
function offNanovo() {
    document.getElementById("overlayNanovo").style.display = "none";
}



function onBbop() {
    document.getElementById("overlayBbop").style.display = "block";
}
  
function offBbop() {
    document.getElementById("overlayBbop").style.display = "none";
}


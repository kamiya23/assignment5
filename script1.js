/*//STEP 1

    function display() {
        window.alert("I have been clicked");
}*/


//STEP 2





/*//STEP 3

btn.addEventListener("click", display, false);

function display() {
    window.alert("I have been clicked");
}*/

/*//STEP 4
window.addEventListener("load", function(){
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function(){
        window.alert("I have been clicked");
    }, false);
}, false);*/

//STEP 5

/*//STEP 6
function demo() {
 window.alert("you are redirecting to Google site");   
}*/

//STEP 7
function checkName() {
               var elMsg = document.getElementById('feedback');
               if(this.value.length < 5) {
                   elMsg.textContent = 'Your user name needs to be 5 characters or more';
               } else {
                   elMsg.textContent = '';
               }
           }
           
           var elUserName = document.getElementById('name');
           elUserName.addEventListener('blur', checkName,false);
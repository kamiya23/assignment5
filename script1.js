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
function show() {
   var x = document.getElementById("name").value;
   window.alert(x);
}
           
           

//STEP 10
 function dispName() {
    var obj = document.getElementById("sCity");
    var disp = obj.options[obj.selectedIndex].text;
    window.alert("Selected City Name is: " + disp);
        
        }

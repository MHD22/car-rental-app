//input:

var name = prompt("Enter your name, please:");
var type= prompt("which type you prefer to show the time:\n if 24H enter (24)\n Or (12) :");
var dark = prompt("Do you want to change the site to dark mode ?\n (y/n):");
var d = dark.toLowerCase() === 'y'? true:false;
var time = new Date();
var hour = time.getHours();
var minutes = time.getMinutes();
var post;
var result;
var eltime=document.getElementById('time');

//processing:
if( parseInt(type) === 12){
    if(hour > 12){
        hour -=12;
        post=' PM';
        result=hour +" : "+ minutes +post;
        eltime.textContent=result;
    }
    else{
        post=' AM';
        result=hour +" : "+ minutes +post;
        eltime.textContent=result;
    }
}
else{
    result=hour +" : "+ minutes;
    eltime.textContent=result;
}
if(d){
    document.getElementsByTagName('body')[0].classList.add('dark');
}





//output:
console.log(hour+ ' : ' + minutes);



elname = document.getElementById("name");
elname.textContent="Welcome "+ name;
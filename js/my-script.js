
function printName() { //first function for name
    var name = prompt("Enter your name, please:");
    elname = document.getElementById("name");
    elname.textContent="Welcome "+ name;
}

function printTime(){ //second function for printing the time...
    var type= prompt("which type you prefer to show the time:\n if 24H enter (24)\n Or (12) :");
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var eltime=document.getElementById('time');
    var post='';
    var result='';
    if( parseInt(type) === 12){
        if(hour > 12){
            hour -=12;
            post=' PM';
            result=hour +" : "+ minutes +post;
        }
        else{
            post=' AM';
            result=hour +" : "+ minutes +post;
        }
    }
    else{
        result=hour +" : "+ minutes;

    }
    eltime.textContent=result;


}

function darkMode(){
    var dark = prompt("Do you want to change the site to dark mode ?\n (y/n):");
    var d = dark.toLowerCase() === 'y'? true:false;
    if(d){
        document.getElementsByTagName('body')[0].classList.add('dark');
    }

}


printName();
printTime();
darkMode();





function printName() { //first function for name
    var name = prompt("Enter your name, please:");
    while(name == ''){
        alert("you should enter a name..");
        name = prompt("Enter your name, please:");
    }
    elname = document.getElementById("name");
    elname.textContent="Welcome "+ name;
}

function printTime(){ //second function for printing the time...
    var type= prompt("which type you prefer to show the time:\n if 24H enter (24)\n Or (12) :");
    while(Number(type) !== 12 && Number(type) !== 24){
        alert("please enter either '12' OR '24' ");
        type= prompt("which type you prefer to show the time:\n if 24H enter (24)\n Or (12) :");
    }
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

const addItems=(index)=>{ // index to determine to which list will add ?
  const items =prompt("enter how many items you want to add.."); 
  while(! (Number(items)>0) ){
      alert("you should enter a number..");
      items =prompt("enter how many items you want to add..");
  }
  let adds=''; // for concatenate the tags inside it.
  let text=''; // for display the text entered by user to each item added ;
  for (let i = 0; i < items; i++) {
    text=prompt("enter the tixt of item number "+(i+1)+":");
    text = text === ''? `item ${i+1} added.` : text; // for check if the user doesn't add text, it will take default value instead.
    adds+=`<input type="checkbox" name="todo"><label> ${text}</label><br>`;
      
  }
  const el=  document.getElementsByClassName('input-container')[index];
  el.innerHTML+=adds;
}


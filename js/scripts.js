// UI Logic
pickNumber();

function pickNumber(){

  friendsNumber = prompt("Pick a number 1-50 friend: ");

  if(friendsNumber >= 1 && friendsNumber <=50){

  listNum();

  }else if (friendsnumber < 1){
    alert("That number is to low friend... lets try to be more managable");
    friendsNumber = 0;
    pickNumber();
  
  }else if(friendsNumber > 50){
    alert("We get so wrapped up in numbers in our society, unfortunately this number is to high ");
    friendsNumber = 0; 
    pickNumber();  
  
  }else{
		alert("That is not a number!"); 
		friendsNumber = 0;
		pickNumber();
	}
}

function placeNumbers(){
  do
  {
    document.write(friendsNumber);
    friendsnumber++;
  }while (friendsNumber >= 50);
  
  return true;
}
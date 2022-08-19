// UI Logic
pickNumber();

function pickNumber(){

  friendsNumber = prompt("Pick a number 1-50 friend: ");

  if(friendsNumber >= 1 && friendsNumber <=50){

  listNum(friendsNumber);

  }else if (friendsNumber < 1){
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

function listNum(friendsNumber){

    for (let i = 1; i <= friendsNumber; i++) {
      document.write(i);
  }
  }
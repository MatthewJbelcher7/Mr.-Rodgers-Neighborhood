pickNumber();
function pickNumber(){

  friendsNumber = prompt("Pick a number 1-50 friend: ");
}

function placeNumbers(){
  do
  {
    document.write(friendsNumber);
    friendsnumber++;
  }while (friendsNumber >= 50);
  
  return true;
}
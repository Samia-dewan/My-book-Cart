var cartItem = document.getElementById("count");
var notice = document.getElementById('notice')



function increaseCount() {
  var countItem = Number(cartItem.innerText);

  if (countItem ===5 ) {
    notice.innerText = "You can't purchase more than 5";
    setTimeout(clearNotice, 3000);
    return;
  }
  countItem++;
  cartItem.innerText = countItem;
  // console.log(countItem);
}


function decreaseCount() {
  var countItem = Number(cartItem.innerText);
  
  if (countItem === 1) {
    notice.innerText = "You can't purchase less than 1";
    setTimeout(clearNotice, 3000);
    return;
  }
  countItem--;
  cartItem.innerText = countItem;
  // console.log(countItem);
}
function clearNotice(){
notice.innerText = "";
}

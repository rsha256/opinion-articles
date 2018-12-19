let el = document.getElementById("changeBackground");
el.addEventListener("click", changeImg, false);

let counter = 0;

// Hide elements beforehand
document.getElementById('myCard1').style.display = 'none';
document.getElementById('myCard2').style.display = 'none';
document.getElementById('myCard3').style.display = 'none';
document.getElementById('myCard4').style.display = 'none';

// onClick executes the following:
function changeImg() {
  scroller();
  let body = document.getElementsByTagName('body')[0];
  switch (counter) {
    case 0:
      document.getElementById('myCard').style.display = 'none';
      document.getElementById('myCard1').style.display = 'block';
      body.style.backgroundImage = 'url(../tech/img/blank.png)';
      break;
    case 1:
      document.getElementById('myCard1').style.display = 'none';
      document.getElementById('myCard2').style.display = 'block';
      break;
    case 2:
      document.getElementById('myCard2').style.display = 'none';
      document.getElementById('myCard3').style.display = 'block';
      break;
    case 3:
      document.getElementById('myCard3').style.display = 'none';
      document.getElementById('myCard4').style.display = 'block';
    case 4:
      body.style.backgroundImage = 'url(../tech/img/ai.jpg)';
    default:
      body.style.backgroundColor = 'white';
  }

  counter++;
}

function scroller() {
  let scrolled = (20 * counter) + 20;
  document.getElementById("myBar").style.width = scrolled + "%";
}

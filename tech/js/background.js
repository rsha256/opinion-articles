// Hide elements beforehand
document.getElementById('carousel').style.display = 'none';

let counter = 0;

let el = document.getElementById("changeBackground");
el.addEventListener("click", changeImg, false);

let le = document.getElementById("changeBackgroundBack");
le.addEventListener("click", changeImg2, false);

function changeImg2() {
  // if (counter > 0)
  counter--;counter--;
  changeImg(); // not recursion but still cool :P
  console.log("yee")
}

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
      break;
    case 4:
      document.getElementById('myCard4').style.display = 'none';
      document.getElementById('carousel').style.display = 'block';
      body.style.backgroundImage = 'url(../tech/img/globe.jpg)';
      break;
    case 5:
      document.getElementById('carousel').style.display = 'none';
      document.getElementById('carousel2').style.display = 'block';
      break;
    case 6:
      document.getElementById('carousel2').style.display = 'none';
      document.getElementById('credits').style.display = 'block';
      break;
    default:
      body.style.backgroundColor = 'white';
      break;
  }

  counter++;
}

function scroller() {
  let scrolled = (15 * counter) + 25;
  console.log(scrolled);
  document.getElementById("myBar").style.width = scrolled + "%";
}

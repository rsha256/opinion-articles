let el = document.getElementById("changeBackground");
el.addEventListener("click",changeImg,false);

let counter = 0;

function changeImg() {
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
      body.style.backgroundImage = 'url(../tech/img/computer-tech.jpg)';
      break;
    default:
      body.style.backgroundColor = 'white';
  }

  counter++;
}

function scroller() {
  let scrolled = counter * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

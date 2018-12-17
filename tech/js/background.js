let el = document.getElementById("changeBackground");
el.addEventListener("click",changeImg,false);

let counter = 0;

function changeImg() {
  let body = document.getElementsByTagName('body')[0];
  switch (counter) {
    case 0:
      body.style.backgroundImage = 'url(../lang/img/pcb.jpg)';
      break;
    case 1:
      body.style.backgroundImage = 'url(../lang/img/globe.jpg)';
      break;
    case 2:
      body.style.backgroundImage = 'url(../lang/img/computer-tech.jpg)';
      break;
    default:
      body.style.backgroundColor = 'white';
  }

  counter++;
}

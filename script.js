M.AutoInit();

// NIGHT MODE

$(document).ready(function(){
  $('.toggle').click(function(){
      $('.toggle').toggleClass('active')
      $('body').toggleClass('night')
  })
})

// PAGE GREETING

let textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^ \x80-\xFF]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 30],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });

  // PROJECTS COLLAPSIBLE PHOTO CHANGE ON CLICK

const gdr = 'assets/gripindoor.png';
const res = 'assets/results.png';
const eea = 'assets/eeart.png';
const fk = 'assets/finders.png';
const ski = 'assets/ski.png';

function changeImage(i)
{
    let img = document.getElementById("project-img");
    switch(i)
    {
        case 'gdr': img.setAttribute('src', gdr); break;
        case 'res': img.setAttribute('src', res); break;
        case 'eea': img.setAttribute('src', eea); break;
        case 'fk': img.setAttribute('src', fk); break;
        case 'ski': img.setAttribute('src', ski); break;
        default: return false;
    }
}



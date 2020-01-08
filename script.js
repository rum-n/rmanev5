// FADE-IN

$(document).ready(function(){$("body").hide().fadeIn(2000);});

// PAGE GREETING

var textWrapper = document.querySelector('.ml11 .letters');
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
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
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

  // PROJECTS COLLAPSIBLE

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });


var gdr = 'assets/gripindoor.png';
var res = 'assets/results.png';
var eea = 'assets/eeart.png';
var fk = 'assets/finders.png';

function changeImage(i)
{
    var img = document.getElementById("project-img");
    switch(i)
    {
        case 'gdr': img.setAttribute('src', gdr); break;
        case 'res': img.setAttribute('src', res); break;
        case 'eea': img.setAttribute('src', eea); break;
        case 'fk': img.setAttribute('src', fk); break;
        default: return false;
    }
}
      

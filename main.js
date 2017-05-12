var row = `<div class="row" style="display:none;">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>`;

var count = 0;

var start = false;

$(document).click(function(){
  if (start == false) {
   $('header').fadeOut(1000);
    setTimeout(function(){
      draw();
    }, 1000);
    start = true;
  }
});

document.addEventListener("touchstart", touch, true);

function touch() {
  if (start == false) {
   $('header').fadeOut(1000);
    setTimeout(function(){
      draw();
    }, 1000);
    start = true;
  }
}

function draw() {
  count+=4;
  if (count>52) {
    $('footer').fadeIn(1000);
    return;
  }

  $('main').append(row);
  $('.row:last').fadeIn(1200, function(){});
  $('.row:last .card').each(function() {
    $(this).data('clicked', false);
  });
}

//test function 
// Mousetrap.bind('a', function() { 
//   $('main').append("<div class='row'><div class='card-test'>"+knives2+"</div></div>");
// });

$("main").on('click', '.card', function() {
  if ($(this).data('clicked')) {
    return;
  }
  var index = getRandomInt(0, deck.length);
  var text = deck[index];
  deck.splice(index, 1);

  $(this).html(text);
  $(this).css('background', 'none');
  $(this).css('background-color', 'white');
  $(this).data('clicked', true);

  var hold = 0;
  $(this).siblings().each(function() {
    console.log(hold);
    if ($(this).data('clicked')) {
      hold++
    }

    if (hold == 3) {
      draw();
    }
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var row = `<div class="row" style="display:none;">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>`;

var count = 0;

function draw() {
  count+=4;
  console.log(count);

  if (count==52) {
    return;
  }

  $('main').append(row);
  $('.row:last').fadeIn(1200, function(){


  });
  $('.row:last .card').each(function() {
    $(this).data('clicked', false);
  });
}

draw();

$("main").on('click', '.card', function() {
  if ($(this).data('clicked')) {
    return;
  }
  var text = deck[getRandomInt(0, deck.length)];
  deck.pop(text);
  $(this).html(text);
  $(this).css('background', 'none');
  $(this).css('background-color', 'white');
  $(this).data('clicked', true);

  var hold = 0;
  $(this).siblings().each(function() {
    if ($(this).data('clicked')) {
      hold++
    }

    if (hold == 3) {
      draw();
    }
  });
});

function selectSuit() {
  var probs = [];
  var idx;

  var majors_value = Number(document.getElementById('majors-value').value);
  var diamonds_value = Number(document.getElementById('diamonds-value').value);
  var nights_value = Number(document.getElementById('nights-value').value);
  var knives_value = Number(document.getElementById('knives-value').value);

  for (step = 0; step < majors_value; step++) {
    probs.push('0');
  }

  for (step = 0; step < diamonds_value; step++) {
    probs.push('1');
  }

  for (step = 0; step < nights_value; step++) {
    probs.push('2');
  }

  for (step = 0; step < knives_value; step++) {
    probs.push('3');
  }

  idx = probs[getRandomInt(0, probs.length)];
  return idx;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
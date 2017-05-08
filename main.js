function draw() {
  $('main').html('');
  var num_cards = $('#num-cards').val();

  for (var step = 0; step < num_cards; step++) {
    idx = selectSuit();

    if (idx == 0) {
      $('main').append("<p class='card'>"+majors[getRandomInt(0, majors.length)]+"</p>");
    }

    if (idx == 1) {
      $('main').append("<p class='card-center'>"+diamonds[getRandomInt(0, diamonds.length)]+"</p>");
    }

    if (idx == 2) {
      $('main').append("<p class='card'>"+nights[getRandomInt(0, nights.length)]+"</p>");
    }

    if (idx == 3) {
      $('main').append("<p class='card-center'>"+knives[getRandomInt(0, knives.length)]+"</p>");
    }
  }
}

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
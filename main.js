function draw() {
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

  console.log(probs);
  idx = probs[getRandomInt(0, probs.length)];
  console.log(idx);

  if (idx == 0) {
    
    $('main').html("<p id='card'>"+majors[getRandomInt(0, majors.length)]+"</p>");
  }

  if (idx == 1) {
    
    $('main').html("<p id='card'>"+diamonds[getRandomInt(0, diamonds.length)]+"</p>");
  }

  if (idx == 2) {

    $('main').html("<p id='card'>"+nights[getRandomInt(0, nights.length)]+"</p>");
  }

  if (idx == 3) {

    $('main').html("<p id='card'>"+knives[getRandomInt(0, knives.length)]+"</p>");
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function displayPointsLeft() {
  var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  $('#remaining-points').text(pointsLeft);
  window.setTimeout("displayPointsLeft()", 10);
}





function attackProbability() {
  var adventurerStr;
  var adventurerDex;
  var adventurerInt;

}

var strMultplier;
var dexMultplier;
var intMultplier;




async function init() {
  classData = await fetch('/api/class/')
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    });
  adventurerData = await fetch('/api/adventurer/')
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });


  adventurerData[classChoice].strMultiplier;


      adventurerStr * classData[classChoice].strMultiplier;
      adventurerDex * classData[classChoice].dexMultiplier;
      adventurerInt * classData[classChoice].intMultiplier;




}


init();
function grid() {
  var container = document.querySelector('.container3');
  cpt = 0;
  for (var j = 0; j < 4; j++) {
    cpt++;
    let div = document.createElement('div');
    var classe = div.setAttribute("class", "grid-container grid-container--fill-" + cpt);
    container.appendChild(div);
  }

}

function addSeats() {

  var myWrapper = document.querySelector(".grid-container.grid-container--fill-1");
  var cpt = 0;
  for (var i = 0; i < 315; i++) {
    cpt++;
    var div = document.createElement('div');
    var Mine = div.setAttribute("class", "grid-element grido" + cpt);
    myWrapper.appendChild(div);

  }

}

function addSeats2() {

  var myWrapper = document.querySelector(".grid-container.grid-container--fill-2");
  var cpt = 0;
  for (var i = 0; i < 325; i++) {
    cpt++;
    var div = document.createElement('div');
    var Mine = div.setAttribute("class", "grid-element grido-" + cpt);
    myWrapper.appendChild(div);

  }

}

function addSeats3() {

  var myWrapper = document.querySelector(".grid-container.grid-container--fill-3");
  var cpt = 0;
  for (var i = 0; i < 325; i++) {
    cpt++;
    var div = document.createElement('div');
    var Mine = div.setAttribute("class", "grid-element grido--" + cpt);
    myWrapper.appendChild(div);

  }

}

function addSeats4() {

  var myWrapper = document.querySelector(".grid-container.grid-container--fill-4");
  var cpt = 0;
  for (var i = 0; i < 315; i++) {
    cpt++;
    var div = document.createElement('div');
    var Mine = div.setAttribute("class", "grid-element gridos" + cpt);
    myWrapper.appendChild(div);

  }

}
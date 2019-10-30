var good_method = document.getElementById("good-method");
var bad_method = document.getElementById("bad-method");
var toggle = document.getElementById("toggle-mode");
var buttons = document.getElementsByClassName("button");
var bad_buttons = document.getElementsByClassName("bad-button");

good();

toggle.onclick = function() {
    refresh();
    if(good_method.style.display == "none") {
        good();
        good_method.style.display = "block"
        bad_method.style.display = "none";
    } else if(bad_method.style.display == "none") {
        bad();
        bad_method.style.display = "block"
        good_method.style.display = "none";
    }
}

function refresh() {
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].className = "waves-effect waves-light btn-large button";
    }
    for(var i = 0; i < bad_buttons.length; i++) {
        bad_buttons[i].className = "waves-effect waves-light btn-large bad-button";
    }

}
function good() {
    var cars = [];
    for(var i = 0; i < buttons.length; i++) {
         activeFactory(i);
    }
    function activeFactory(i) {
        return activeSet(i)
        function activeSet(i) {
            buttons[i].onclick = function() {
                buttons[i].className = "btn-large button active";
                buttons[i].onclick = function() {}
                cars.push(i)
                if(cars.length > 2) {
                    activeFactory(cars[0]);
                    buttons[cars[0]].className = "waves-effect waves-light btn-large button";
                    cars.splice(0, 1);
                }
            }
        }
    }
}
function bad() {
    var trains = [];

    for(var i = 0; i < bad_buttons.length; i++) {
         disabledFactory(i);
    }
    function disabledFactory(i) {
        return disabledSet(i)
        function disabledSet(i) {
            bad_buttons[i].onclick = function() {
                if(bad_buttons[i].className.indexOf("active") != -1) {
                    bad_buttons[i].className = "waves-effect waves-light btn-large bad-button";
                    for(var l = 0; l < trains.length; l++) {
                        if(trains[l] == i) {
                            trains.splice(l, 1);
                        }
                    }
                } else {
                    bad_buttons[i].className = "btn-large bad-button bad-active";
                    trains.push(i);
                }
                if(trains.length == 2) {
                    for(var j = 0; j < bad_buttons.length; j++) {
                        if(checkTrains(j) != true) {
                            bad_buttons[j].className = "btn-large bad-button disabled";
                        }
                    }
                } else {
                    for(var j = 0; j < bad_buttons.length; j++) {
                        if(checkTrains(j) == true) {
                            bad_buttons[j].className = "btn-large bad-button bad-active";
                        } else {
                            bad_buttons[j].className = "waves-effect waves-light btn-large bad-button";
                        }
                    }
                }
            }
        }
    }
    function checkTrains(j) {
        for(var k = 0; k < trains.length; k++) {
            if(j == trains[k]) {
                return true;
            }
        }
    }
}

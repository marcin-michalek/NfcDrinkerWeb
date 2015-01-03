/**
 * Created by Marcin on 2015-01-03.
 */
var source = new EventSource("http://localhost:8080/alertTest");
source.addEventListener('changed', function(e) {
    var p = document.createElement("p");
    p.innerHTML = e.data;
    document.getElementById("listOfDrinkers").appendChild(p);
    console.log(e.data);
}, false);
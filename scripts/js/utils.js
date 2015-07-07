/**
 * Created by Marcin on 2015-01-03.
 */
var source = new EventSource("http://localhost:8080/alertTest");
source.addEventListener('changed', function (event) {
    createTableFromDrinkersList(JSON.parse(event.data))
    console.log(event.data);
}, false);

function createTableFromDrinkersList($drinkersList) {
    clearDrinkersList();

    var table = $(document.createElement('table')).addClass('table-fill');
    for (var i = 0; i < $drinkersList.length; i++) {
        var tdName = $('<td></td>').addClass('text-left').text($drinkersList[i]["name"]);
        var tdRounds = $('<td></td>').addClass('text-left').text($drinkersList[i]["drinkingParameters"]["rounds"] + " rounds");
        var tdMinutes = $('<td></td>').addClass('text-left').text($drinkersList[i]["drinkingParameters"]["minutesFromFirstDrink"] + " minutes from first drink");
        var tdSimplePromile = $('<td></td>').addClass('text-left').text($drinkersList[i]["currentSimpleMethodPromile"] + "%o simple method");
        var row = $(document.createElement('tr'));
        row.append(tdName);
        row.append(tdRounds);
        row.append(tdMinutes);
        row.append(tdSimplePromile);
        table.append(row);
    }
    $('#listOfDrinkers').append(table);
}

function clearDrinkersList() {
    document.getElementById("listOfDrinkers").innerHTML = "";
}
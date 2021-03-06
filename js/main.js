var submit = document.getElementById('submit'),
    barcode = document.getElementById('barcode'),
    courier = document.getElementById('courier'),
    qty = document.getElementById('qty'),
    result = document.getElementById('results'),
    toBeRemoved = document.getElementById('toBeRemoved'),
    remove = document.getElementById('remove'),
    dashboard = document.getElementById('dashboard'),
    results = document.getElementById('results-container'),
    inputMode = document.getElementById('input-mode'),
    entryDone = document.getElementById('entry-done');


submit.onclick = function () {
    var toAddOrNot = true;
    var fillAll = document.getElementById('fill-all');

    function checkDuplicacy(t) {

        var existingValues = document.querySelectorAll('.scanned');

        for (var i = 0; i < existingValues.length; i++) {

            if (existingValues.length == 0) {
                return;
            } else {

                var existing = existingValues[i];
                if (t == existing.innerHTML) {
                    alert('Already Scanned.');
                    toAddOrNot = false;
                }

            }

        }
    }
    checkDuplicacy(barcode.value);

    if (toAddOrNot && barcode.value && courier.value && qty.value) {
        var now = new Date();


        var ret = "<div class='row entry'><div class='col-md-3 scanned'>" + barcode.value + "</div><div class='col-md-3'>" + courier.value + "</div><div class='col-md-3'>" + qty.value + "</div><div class='col-md-3'> " + now.toDateString() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "</div></div>";

        result.innerHTML += ret;
        fillAll.className = "hide";
        entryDone.className = "";

        setTimeout(function () {
            entryDone.className = "hide";
        }, 1000);


        barcode.value = "";
        courier.value = "";
        qty.value = "";


    } else {

        fillAll.className = "";
    }



}


remove.onclick = function () {
    var thisOne = toBeRemoved.value;
    var doesntExist = true;
    var removed = document.getElementById('removed');

    var scannedValues = document.querySelectorAll('.scanned');

    for (var i = 0; i < scannedValues.length; i++) {
        var item = scannedValues[i];

        if (item.innerHTML == thisOne) {
            scannedValues[i].parentElement.parentElement.removeChild(scannedValues[i].parentElement);
            doesntExist = false;
            removed.className = "";

            setTimeout(function () {
                removed.className = "hide";
            }, 1000);

            toBeRemoved.value = '';
        }
    }

    if (doesntExist) {
        alert('Doesn\'t Exist');
    }
}


dashboard.onclick = function () {
    results.className = "";
    inputMode.className = "";
}

inputMode.onclick = function () {
    results.className = "hide";
    inputMode.className = "hide";
}

window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";

};

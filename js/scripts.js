$("#button-all-names").click(function () {
    $.getJSON('https://beavers-directory.azurewebsites.net/api/values/names', function (apiData) {
        console.log(apiData);
        var userData = JSON.stringify(apiData, null, 4);
        $("#api-data").empty().text(userData);
    });
});


$("#button-all-data").click(function () {
    $.getJSON('https://beavers-directory.azurewebsites.net/api/values/', function (apiData) {
        console.log(apiData);
        var userData = JSON.stringify(apiData, null, 4);
        $("#api-data").empty().text(userData);
  });
});

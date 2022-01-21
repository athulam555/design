
// Jquery Vector Map 
$(document).ready(function() {
    jQuery('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: null,
    color: '#00b3b3',
    hoverOpacity: 0.7,
    selectedColor: '#FFC107',
    enableZoom: true,
    showTooltip: true,
    values: data_array,
    scaleColors: ['#F8AC59', '#28A745'],
    normalizeFunction: 'polynomial',
    onRegionClick: function(element, country_code, country)
    {
        /* When you will click on country, the region has the code, you can find the data_array in jquery.vmap.sampledata.js
        + and other thing we have to set the code to LowerCase because in jquery.vmap.sampledata.js the country code is in lowercase
        */
        //Generate random sales numbers
        var sales = Math.floor(Math.random() * 100);
        $('.jqvmap-country-flag').attr('src', 'img/flag-icon-css/flags/4x3/' + country_code.toLowerCase() + '.svg');
        $('.jqvmap-country').html(country + ' - ' + '$' + sales.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    }
    });

    $("#searchButtonEstablished").click(function () {
        var rows = $("#table_body").find("tr").hide();
        rows.filter(":contains('Established / Pending donor funds')").show();
     });

     $("#searchButtonOngoing").click(function () {
        var rows = $("#table_body").find("tr").hide();
        rows.filter(":contains('Ongoing')").show();
     });

     $("#searchButtonClosed").click(function () {
        var rows = $("#table_body").find("tr").hide();
        rows.filter(":contains('Closed')").show();
     });

     $("#searchButtonClosure").click(function () {
        var rows = $("#table_body").find("tr").hide();
        rows.filter(":contains('Pending Closure')").show();
     });

     // remove the filter on button click
        $("#removeFilter").click(function () {
            $("#table_body").find("tr").show();
        });
    
    //show remove filter button when there is a filter
    $("#searchButtonEstablished, #searchButtonOngoing, #searchButtonClosed, #searchButtonClosure").click(function () {
        if ($("#table_body").find("tr:visible").length > 0) {
            $("#removeFilter").show();
        }
        //remove filter when clicked on remove filter button
        $("#removeFilter").click(function () {
            $("#table_body").find("tr").show();
            $("#removeFilter").hide();
        });
    });

});


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
});

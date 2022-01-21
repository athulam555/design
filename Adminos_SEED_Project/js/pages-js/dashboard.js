$(document).ready(function () {

// Total Earning
Morris.Bar({
    element: 'morris-total-earning',
    data: [{
        y: '2006',
        Sale: 100,
        Rent: 90,
        c: 60
    }, {
        y: '2007',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2008',
        Sale: 50,
        Rent: 40,
        c: 30
    }, {
        y: '2009',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2010',
        Sale: 50,
        Rent: 40,
        c: 30
    }, {
        y: '2011',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2012',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2013',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2014',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2015',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2016',
        Sale: 100,
        Rent: 90,
        c: 40
    }, {
        y: '2017',
        Sale: 100,
        Rent: 90,
        c: 40
    }, {
        y: '2018',
        Sale: 100,
        Rent: 90,
        c: 40
    }],
    xkey: 'y',
    ykeys: ['Sale', 'Rent', 'c'],
    labels: ['Total Revenue', 'Affiliate Revenue', 'Revenue Per User'],
    barColors: ['#006DF0', '#933EC5', '#65b12d'],
    hideHover: 'auto',
    barSizeRatio: 0.45,
    gridLineColor: 'none',
    resize: true
});

});
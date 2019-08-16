google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Habilidad'],
        ['JavaScript', 1],
        ['HTML5', .8],
        ['CSS3', .5],
        ['C#', .30],
        ['Java', 1.00],
        ['Java Android', .80],
        ['PHP', .50],
        ['JSon', .30],
        ['Firebase',.3],
        ['MySQL',.3],
        ['Photoshop',.4],
        ['XML',.6]
    ]);

    var options = {
        legend: {
            position: 'none'
        },
        chart: {

        },
        bars: 'horizontal', // Required for Material Bar Charts.
        bar: {
            groupWidth: "90%"
        },
        backgroundColor: {
            fill: '#cc3333'
        },
        colors: ['#e57373'],
        fontSize: 2,
        fontName: 'Raleway',

        hAxis: {
            baseline: 0,
            baselineColor: 'none',
            format: '###%',
            gridlines: {
                color: 'none'
            },
            textStyle: {
                color: 'none',
                fontName: 'Raleway',
                fontSize: 15,
                bold: false,
                italic: false
            },
            textPosition: 'out'
        },

        vAxis: {
            baseline: 10,
            baselineColor: 'white',
            direction: -1,
            titleTextStyle: {
                color: 'white'
            },

            textStyle: {
                color: 'white'
            }
        }
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
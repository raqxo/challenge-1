let labels1 = ['Fruit', 'Noten', 'Kip', 'Brownies', 'Snoep', 'Water'];
let data1 = [120, 100, 150, 60, 70, 900];
let colors1 = ['#1d1135', '#0c164f', '#ba1e68', '#5643fd', '#7649fe', '#1d1135'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'bar',
    data: {
        labels: ['Fruit', 'Noten', 'Kip', 'Brownies', 'Snoep', 'Water'],
        datasets: [ {
            data: [120, 100, 150, 60, 70, 900],
            backgroundColor: ['#1d1135', '#0c164f', '#ba1e68', '#5643fd', '#7649fe', '#1d1135']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        legend: {
            display: false,
        },
        title: {
            text: "Eten op voorraad in kg",
            display: false
        }
    }
});

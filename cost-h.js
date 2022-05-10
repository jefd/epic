const labels = [
    'Image Builder',
    'SRW Run',
    'Continuing Monthly Costs',
    'Total Monthly Single Run',
];

const costs = [[4, 6], [8, 10], [10, 12], [22, 28]];

const cloud_services = ['c5.xlarge EC2, EC2 Image Builder, S3',
                        'c5.xlarge EC2, EC2 Image Builder, S3',
                        'c5.xlarge EC2, EC2 Image Builder, S3',
                        'c5.xlarge EC2, EC2 Image Builder, S3',
  ]

const opts = {
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function(value, index, ticks) {
        return '$' + value;
      }
    },
    title: {text: "Cost", display: true},
  }
}
};

const bgColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)'
];

const borderColors = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ];

const data = {
labels: labels,
datasets: [{
  label: 'Epic AWS Costs',
  backgroundColor: bgColors,
  borderColor: borderColors,
  borderWidth: 1,
  data: costs
}]
};

const config = {
type: 'bar',
data: data,
options: opts
};

const table = `
  <table id="cost-table">
    <thead>
        <tr>
          <th>UFS Process</th>
          <th>AWS Services</th>
          <th>Cost</th>
        </tr>
    </thead>

    <tbody>
    <tr>
      <td>${labels[0]}</td>
      <td>${cloud_services[0]}</td>
      <td>$${costs[0][0]} - $${costs[0][1]}</td>
    </tr>
    <tr>
      <td>${labels[1]}</td>
      <td>${cloud_services[1]}</td>
      <td>$${costs[1][0]} - $${costs[1][1]}</td>
    </tr>
    <tr>
      <td>${labels[2]}</td>
      <td>${cloud_services[2]}</td>
      <td>$${costs[2][0]} - $${costs[2][1]}</td>
    </tr>
    <tr>
      <td>${labels[3]}</td>
      <td>${cloud_services[3]}</td>
      <td>$${costs[3][0]} - $${costs[3][1]}</td>
    </tr>
    </tbody>
  </table>
`


const myChart = new Chart(
  document.getElementById('cost-chart'), config
  );

let chart = document.getElementById('chart1');
// chart.style.display = 'none';

const table_div = document.getElementById('table');    
table_div.innerHTML = table;
table_div.style.display = 'none';



function toggleFunction() {

    let chart = document.getElementById('chart1');
    let t = document.getElementById('table');
    let button = document.getElementById('toggle');
      
    if (chart.style.display === 'none'){
        t.style.display = 'none';
        chart.style.display = 'block';
        button.textContent = 'Show Table';
    }
    else {
        chart.style.display = 'none';
        t.style.display = 'block';
        button.textContent = 'Show Chart';
    }
}


var data = [
  {
    name: "Jose",
    age: 25,
    weight: [210, 215, 212, 209, 211, 205]
  },
  {
    name: "Rigo",
    age: 22,
    weight: [220, 214, 211, 209, 204, 201]
  },
  {
    name: "Mike",
    age: 29,
    weight: [209, 208, 206, 207, 203, 202]
  }
];

document.addEventListener("DOMContentLoaded", function(e) {
  console.log(data);
  data.forEach(item => {
    console.log(item.weight);
  });

  var ctx = document.getElementById("myChart");

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2/11", "2/18", "2/25", "3/3", "3/10"],
      datasets: [
        {
          label: "My First Dataset",
          data: data[0].weight,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          lineTension: 0.2
        },
        {
          label: "My Second Dataset",
          data: data[1].weight,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          lineTension: 0.2
        },
        {
          label: "My Third Dataset",
          data: data[2].weight,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          lineTension: 0.2
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Weight Loss Chart"
      },
      label: "Weight Loss",
      xAxisID: "weight"
    }
  });
});


import ApexCharts from 'apexcharts';

import data from '../data.js';

import { format, fromUnixTime } from 'date-fns'
import { de } from "date-fns/locale";

let transformed = data.map(row => {
  return {x: row.date, y: row.count}
});

let verticalLines = ['25 May 2024', '26 May 2024', '27 May 2024', '28 May 2024', '29 May 2024', '30 May 2024'].map(row => {
  let obj = {
    x: new Date(row).getTime() + 24 * 60 * 60 * 1000,
    borderColor: '#775DD0',
    label: {
      style: {
        color: '#000',
      },
      text: new Date(row).toLocaleDateString('de-DE', { weekday: 'long' }),
    }
  }
  return obj;
});

var options = {
  chart: {
    type: 'line',
    width: "100%",
    height: "95%",
  },
  series: [{
    name: 'gym',
    data: transformed,
  }],
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: true,
      color: '#000000',
    },
    tickAmount: 20,
    labels: {
      formatter: function (value, timestamp) {
        return format(new Date(timestamp), 'EEEE, kk:mm, yyyy', { locale: de });
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#000000',
    },
  },
  grid: {
    borderColor: '#aaaaaa',
    strokeDashArray: 7,
    xaxis: {
      lines: {
        show: false,
      }
    },
    yaxis: {
      lines: {
        show: true,
      }
    },
  },
  annotations: {
    xaxis: verticalLines,
  }
}


var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

import * as echarts from 'echarts';
import data from '../data';

import { format } from 'date-fns'
import { de } from "date-fns/locale";

// Create the echarts instance
var myChart = echarts.init(document.getElementById('main'));

let transformed = [['date', 'count']];
for(let row of data) {
  transformed.push([Date.parse(row.date), row.count])
}

// Draw the chart
myChart.setOption({
  title: {
    text: 'Venice Beach'
  },
  tooltip: {
    trigger: 'axis',
    // position: function (pt) {
    //   return [pt[0], '10%'];
    // }
  },
  xAxis: {
    type: 'time',
    axisLabel: {
      formatter: function (value) {
        return format(new Date(value), 'EEEE, kk:mm, yyyy', { locale: de });
      }
    },
    axisLine: {
      show: true,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#dadada',
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#dadada',
      }
    }
  },
  dataset: {
    source: transformed,
  },
  series: [
    { 
      type: 'line',
      markArea: {
        itemStyle: {
          color: 'rgba(255, 173, 177, 0.4)'
        },
        data: [
          [
            {
              name: 'Example',
              xAxis: '2024-05-27 01:15:23'
            },
            {
              xAxis: '2024-05-27 03:50:59'
            }
          ]
        ]
      }
    }
  ]
});

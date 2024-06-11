import { Chart } from 'chart.js/auto';
import { de } from 'date-fns/locale';

import 'chartjs-adapter-date-fns';

import data from '../w1_postgalerie.json';
import data2 from '../w2_postgalerie.json';
import data3 from '../w1_suedstadt.json';
import data4 from '../w2_suedstadt.json';

let transformed = data.map(row => {
  return { 'x': row.date, 'y': row.count };
})

let transformed2 = data2.map(row => {
  return { 'x': row.date, 'y': row.count };
})

let transformed3 = data3.map(row => {
  return { 'x': row.date, 'y': row.count };
})

let transformed4 = data4.map(row => {
  return { 'x': row.date, 'y': row.count };
})

const postgalerie_w1 = {
  label: 'Postgalerie (Woche 1)',
  data: transformed,
}

const postgalerie_w2 = {
  label: 'Postgalerie (Woche 2)',
  data: transformed2,
}

const suedstadt_w1 = {
  label: 'Südstadt (Woche 1)',
  data: transformed3,
}

const suedstadt_w2 = {
  label: 'Südstadt (Woche 2)',
  data: transformed4,
}

new Chart(
  document.getElementById('chart1'),
  {
    type: 'line',
    data: {
      datasets: [
        suedstadt_w1,
        suedstadt_w2,
      ]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          adapters: {
              date: {
                  locale: de
              },
          },
          time: {
            unit: 'hour',
            displayFormats: {
              hour: 'EEEE, kk:mm'
            }
          },
          border: {
            dash: [6, 6],
          },
          grid: {
            display: true,
            offset: false,
            color: (ctx) => {
              if(ctx.tick !== undefined && ctx.tick.label.includes('24:00')) {
                return '#a7a7a7';
              }
              return '#dadada';
            },
          },
        },
        y: {
          min: 0,
          max: 250,
          grid: {
            display: true,
            color: '#dadada',
          },
          border: {
            dash: [6, 6],
          },

        }
      }
    }
  }
);

new Chart(
  document.getElementById('chart2'),
  {
    type: 'line',
    data: {
      datasets: [
        postgalerie_w1,
        postgalerie_w2,
      ]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          adapters: {
              date: {
                  locale: de
              },
          },
          time: {
            unit: 'hour',
            displayFormats: {
              hour: 'EEEE, kk:mm'
            }
          },
          border: {
            dash: [6, 6],
          },
          grid: {
            display: true,
            offset: false,
            color: (ctx) => {
              if(ctx.tick !== undefined && ctx.tick.label.includes('24:00')) {
                return '#a7a7a7';
              }
              return '#dadada';
            },
          },
        },
        y: {
          min: 0,
          max: 250,
          grid: {
            display: true,
            color: '#dadada',
          },
          border: {
            dash: [6, 6],
          },

        }
      }
    }
  }
);

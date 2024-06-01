import { Chart } from 'chart.js/auto';
import { format, fromUnixTime } from 'date-fns';
import { de } from 'date-fns/locale';

import data from '../data.js';

import 'chartjs-adapter-date-fns';

let transformed = data.map(row => {
    return { 'x': row.date, 'y': row.count };
})

const suedstadt = {
    label: 'Südstadt',
    data: transformed,
}

new Chart(
    document.getElementById('graph'),
    {
        type: 'bar',
        data: {
            datasets: [
                suedstadt
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
                    ticks: {
                        // callback: function(val, index) {
                        //     console.log(index);
                        //     // return index % 2 === 0 ? this.getLabelForValue(val) : '';
                        //     return format(fromUnixTime(val), "dd.MM.yyyy");
                        // },
                    },
                    grid: {
                        color: (ctx) => {
                            if(ctx.tick !== undefined && ctx.tick.label.includes('24:00')) {
                                return '#a7a7a7';
                            }
                            return '#dadada';
                        },
                    },
                },
                y: {
                    ticks: {
                        stepSize: 10,
                    }
                }
            }
        }
    }
);

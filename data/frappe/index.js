import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
import data from '../data.js';

const trans = {
    labels: data.map(row => row.date),
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: data.map(row => row.count)
        },
    ]
}

new Chart("#chart", {
    data: trans,
    type: 'line', 
    height: 550,
    yMarkers: [
        {
            label: "Threshold",
            value: 230,
            options: { labelPos: 'left' } // default: 'right'
        }
    ],

    yRegions: [
        {
            label: "Optimum Value",
            start: 10,
            end: 50,
            options: { labelPos: 'right' }
        }
    ],
    lineOptions: {
        hideDots: 1,
    },
    axisOptions: {
        xIsSeries: true // default: false
    },
})

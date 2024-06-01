import Chartkick from "chartkick";
import "chartkick/chart.js";

import data from "../data.js";

console.log(data[0]);

let transformed = data.map(row => {
    return [row.date, row.count];
})

console.log(transformed[0]);

new Chartkick.ColumnChart("chart", transformed, { });

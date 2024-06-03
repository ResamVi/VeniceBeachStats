import 'chartist/dist/index.css';
import { LineChart, FixedScaleAxis } from 'chartist';
import data from '../data';

let transformed = data.map(row => { return { x: Date.parse(row.date), y: row.count }});

new LineChart('#chart', {
    series: [
        {
            name: 'series-1',
            data: transformed,
        }
    ]
  },
  {
    axisX: {
      type: FixedScaleAxis,
      divisor: 5,
      labelInterpolationFnc: value =>
        new Date(value).toLocaleString(undefined, {
          month: 'short',
          day: 'numeric'
        })
    }
  }
);

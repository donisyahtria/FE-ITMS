import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            console.log(chart, w, e);
          }
        }
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'],
        ],
        labels: {
          style: {
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
            fontSize: '12px'
          }
        }
      }
    };

    const chartInstance = new ApexCharts(chartRef.current, options);
    chartInstance.render();

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default ChartComponent;

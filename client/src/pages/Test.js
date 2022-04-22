
import React from 'react'
import { Bar } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const Test = () => {
  return (
    <div style={{marginTop:"10%"}}>
      <h1>chartjs</h1>
      <Bar
        data={{
          labels: ['Vulnerability Scans', 'Dns', 'Ssl'],
          datasets: [
            {
              label: '# of assessments',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "purple", "green", "blue"
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }} 
      />
    </div>
  )
}

export default Test;
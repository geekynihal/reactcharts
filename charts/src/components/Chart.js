import React from 'react'
import { Bar } from "react-chartjs-2"
const Chart=()=> {
    var a=12
    return (
        <div>
            <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [`${a}`, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "red","blue","yellow","green","purple","orange"
                    ],
                    borderColor: [
                        
                        "red","blue","yellow","green","purple","orange"
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Voters',
                    data: [10, 15, 8, 5, 2, 3],
                    backgroundColor: [
                        "red","blue","yellow","green","purple","orange"
                       
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }
                ]
            }}
            height={600}
            width={1200}
            // options={{maintainAspectRatio:false}}
            options={{
                maintainAspectRatio:false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}/>
        </div>
    )
}
export default Chart
  
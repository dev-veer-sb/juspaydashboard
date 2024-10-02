import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

function PaiChart() {
  return (
   <>
   <div style={{textAlign:'start',fontWeight:'bold'}}>Total Sales</div>
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: 10, label: 'series A' },
          { id: 1, value: 15, label: 'series B' },
          { id: 2, value: 20, label: 'series C' },
          { id: 0, value: 10, label: 'series A' },
          { id: 1, value: 15, label: 'series B' },
          { id: 2, value: 20, label: 'series C' },
        ],
        innerRadius: 70,
        outerRadius: 100,
        paddingAngle: 5,
        cornerRadius: 50,
        startAngle: -45,
        endAngle: 360,
        cx: 100,
        cy: 100,
      },
      
    ]}
    width={350}
    height={200}
    
  />
  </>
  )
}

export default PaiChart
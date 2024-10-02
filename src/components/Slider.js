import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function Slider() {
  const [type, setType] = React.useState('line');

  return (
    <Box sx={{ width: '350px' }}>
         <div style={{textAlign:'start',fontWeight:'bold'}}>Revenue by Lines</div>
      <div>
        <ResponsiveChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ['A', 'B', 'C', 'D', 'E'],
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}
          height={200}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
        </ResponsiveChartContainer>
      </div>
    </Box>
  );
}

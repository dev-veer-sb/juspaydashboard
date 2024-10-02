import React, { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

// URL to the Asia map topology JSON
const asiaGeoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

// Example data for countries (you can replace this with real data)
const asiaCountryData = [
  { country: 'China', value: 1403500365 },
  { country: 'India', value: 1366417754 },
  { country: 'Japan', value: 126476461 },
  { country: 'Indonesia', value: 270625568 },
  // Add more countries here with data...
];

const colorScale = scaleLinear()
  .domain([0, 1403500365]) // Adjust domain according to data range
  .range(['#D6EFFF', '#00539C']); // Color range for the map

const AsiaMap = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Asia Dashboard
      </Typography>
      
      {/* Asia Map */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <ComposableMap projectionConfig={{ scale: 200 }} style={{ width: '100%', maxWidth: '800px' }}>
          <Geographies geography={asiaGeoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties.CONTINENT === 'Asia')
                .map((geo) => {
                  const countryData = asiaCountryData.find(
                    (country) => country.country === geo.properties.NAME
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={countryData ? colorScale(countryData.value) : '#F5F5F5'}
                      stroke="#000"
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setTooltipContent(`${NAME} — Population: ${countryData?.value || 'N/A'}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('');
                      }}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#FF5733', outline: 'none' },
                        pressed: { fill: '#FF4500', outline: 'none' },
                      }}
                    />
                  );
                })
            }
          </Geographies>
        </ComposableMap>
      </Box>

      {/* Tooltip or Country Info Card */}
      {tooltipContent && (
        <Card sx={{ width: '300px', textAlign: 'center', backgroundColor: '#F0F4F8' }}>
          <CardContent>
            <Typography variant="body1">{tooltipContent}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default AsiaMap;

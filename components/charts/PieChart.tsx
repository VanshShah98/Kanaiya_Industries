import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'series A' },//enter the data
  { id: 1, value: 15, label: 'series B' },//enter the data
  { id: 2, value: 20, label: 'series C' },//enter the data
  { id: 3, value: 20, label: 'series D' },//enter the data
  { id: 4, value: 20, label: 'series E' },//enter the data
  { id: 5, value: 20, label: 'series F' },//enter the data
];

export default function Pie() {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isXLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const chartWidth = isXSmall
    ? 200
    : isSmall
    ? 300
    : isMedium
    ? 400
    : isLarge
    ? 600
    : 800;
  const chartHeight = isXSmall
    ? 200
    : isSmall
    ? 300
    : isMedium
    ? 400
    : isLarge
    ? 500
    : 600;
  return (
    <>
      <div className="w-full h-full">
        <Box width={chartWidth} height={chartHeight}>
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: 'gray',
                },
              },
            ]}
            height={chartHeight}
            width={chartWidth}
          />
        </Box>
      </div>
    </>
  );
}

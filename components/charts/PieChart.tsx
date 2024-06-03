import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 50, label: 'iMCC Panel (20%)' },
  { id: 1, value: 128, label: 'MCC Panel (15%)' },
  { id: 2, value: 94, label: 'PCC Panel (11%)' },
  { id: 3, value: 86, label: 'MPDB Panel (10%)' },
  { id: 4, value: 87, label: 'PDB Panel (10%)' },
  { id: 5, value: 103, label: 'MLDB Panel (12%)' },
  { id: 6, value: 129, label: 'VFD Panel (15%)' },
  { id: 7, value: 60, label: 'PLC Panel (7%)' },
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

    const outerRadius = isXSmall
    ? 200
    : isSmall
    ? 70
    : isMedium
    ? 100
    : isLarge
    ? 200
    : 300;
    const Right = isXSmall
    ? 200
    : isSmall
    ? 260
    : isMedium
    ? 200
    : isLarge
    ? 200
    : 300;

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
                outerRadius: outerRadius,
              },
            ]}
            height={chartHeight}
            width={chartWidth}
            margin={{ right: Right , left: 100}}
          />
        </Box>
      </div>
    </>
  );
}
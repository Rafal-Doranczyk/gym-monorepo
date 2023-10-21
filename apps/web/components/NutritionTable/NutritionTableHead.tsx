import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import { NutritionTableHeadProps } from './NutritionTable';

export default function NutritionTableHead({
  order,
  orderBy,
  onRequestSort,
  headCells,
}: NutritionTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ id, label }) => (
          <TableCell
            key={id}
            sx={{ background: ({ palette }) => palette.background.paper }}
            sortDirection={orderBy === id ? order : false}
          >
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? order : 'asc'}
              onClick={e => onRequestSort(e, id)}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell sx={{ background: ({ palette }) => palette.background.paper }} />
      </TableRow>
    </TableHead>
  );
}

import { Box, Table, TableContainer } from '@mui/material';
import { NutritionGroup } from 'gym-shared';

import { EmptyState } from '@/components';
import { TableOrder, TableOrderBy } from '@/hooks';

import NutritionTableSkeleton from './NutritionTableSkeleton';
import NutritionTableToolbar from './NutritionTableToolbar';
import NutritionTableHead from './NutritionTableHead';

export type NutritionTableHeadCell = {
  id: string;
  label: string;
  numeric: boolean;
};

export type NutritionTableHeadProps = {
  order: TableOrder;
  orderBy: TableOrderBy;
  headCells: NutritionTableHeadCell[];
  onRequestSort: (event: React.MouseEvent<unknown>, property: TableOrderBy) => void;
};

export type NutritionTableToolbarProps = {
  total: number;
  activeOption: NutritionGroup;
  options: NutritionGroup[];
  setActiveOption: (group: NutritionGroup) => void;
};

type NutritionTableProps = NutritionTableToolbarProps &
  NutritionTableHeadProps & {
    isLoading: boolean;
    data: unknown[];
    emptyTableTitle: string;
    emptyTableSubtitle: string;
  };

export default function NutritionTable({
  children,
  data,
  isLoading,
  emptyTableTitle,
  emptyTableSubtitle,
  total,
  activeOption,
  options,
  setActiveOption,
  order,
  orderBy,
  onRequestSort,
  headCells,
}: React.PropsWithChildren<NutritionTableProps>) {
  if (isLoading) {
    return <NutritionTableSkeleton />;
  }

  return (
    <Box>
      <NutritionTableToolbar
        total={total}
        options={options}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      {!data.length ? (
        <Box mt={8}>
          <EmptyState size="big" title={emptyTableTitle} subtitle={emptyTableSubtitle} />
        </Box>
      ) : (
        <TableContainer
          sx={{
            maxHeight: 750,
            minHeight: 400,
            height: '75vh',
            mt: 2,
            '::-webkit-scrollbar': {
              width: '5px',
            },

            // /* Track */
            '::-webkit-scrollbar-track': {
              background: '#888',
            },

            /* Handle */
            '::-webkit-scrollbar-thumb': {
              background: ({ palette }) => palette.primary.dark,
            },

            // /* Handle on hover */
            '::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
        >
          <Table stickyHeader aria-labelledby="nutrition table" sx={{ minWidth: 750 }}>
            <NutritionTableHead
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={onRequestSort}
            />
            {children}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

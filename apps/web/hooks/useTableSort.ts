import { useState } from 'react';

export type TableData = {
  id: number;
  name: string;
  [key: string]: unknown;
};

export type TableOrderBy = keyof TableData;
export type TableOrder = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(
  order: TableOrder,
  orderBy: TableOrderBy,
): (a: any, b: any) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
}

export default function useTableSort<T>(data: TableData[]) {
  const [order, setOrder] = useState<TableOrder>('asc');
  const [orderBy, setOrderBy] = useState<TableOrderBy>('name');
  const [selected, setSelected] = useState<number[]>([]);

  const handleRequestSort = (e: React.MouseEvent<unknown>, property: TableOrderBy) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectElementClick = (selected: number[], id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelecteds = data.map(el => el.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const actions = {
    setSelected,
    handleRequestSort,
    handleSelectElementClick,
    handleSelectAllClick,
    stableSort: (elements: T[]) => stableSort(elements, getComparator(order, orderBy)),
  };

  return {
    actions,
    order,
    orderBy,
    selected,
  };
}

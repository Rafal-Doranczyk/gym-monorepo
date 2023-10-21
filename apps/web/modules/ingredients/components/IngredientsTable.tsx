// 'use client';

// import Image from 'next/image';
// import { TableBody, TableCell, TableRow, Typography, Box } from '@mui/material';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { Ingredient, NutritionGroup } from 'gym-shared';

// import VegetablesIcon from '@/public/vegetables.svg';
// import { useTableSort } from '@/hooks';
// import { NutritionTable, NutritionTableHeadCell, TooltipIconButton } from '@/components';
// import { useContext, useState } from 'react';
// import { UserContext } from '@/context';

// import { Ingredient, IngredientPrice, UpdateIngredientPayload } from 'gym-shared';

// export const getLatestIngredientPrice = (prices: IngredientPrice[]) => {
//   prices.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

//   return prices.slice(-1)[0];
// };

// type TableIngredient = Ingredient & { price: number };

// type IngredientsTableProps = {
//   groupFilter: NutritionGroup;
//   ingredientGroups: NutritionGroup[];
//   setGroupFilter: (group: NutritionGroup) => void;
//   setIngredientToEdit: (ingredient: TableIngredient) => void;
//   setIngredientToRemove: (ingredient: TableIngredient) => void;
// };

// function IngredientsTable({
//   groupFilter,
//   ingredientGroups,
//   setGroupFilter,
//   setIngredientToEdit,
//   setIngredientToRemove,
//   data,
// }: IngredientsTableProps) {
//   const headCells: NutritionTableHeadCell[] = [
//     {
//       id: 'name',
//       numeric: false,
//       label: `name`,
//     },
//     {
//       id: 'countType',
//       numeric: true,
//       label: `count-type`,
//     },
//     {
//       id: 'calories',
//       numeric: true,
//       label: `calories`,
//     },
//     {
//       id: 'carbs',
//       numeric: true,
//       label: `${'carbs'} (g)`,
//     },
//     {
//       id: 'protein',
//       numeric: true,
//       label: `${'protein'} (g)`,
//     },
//     {
//       id: 'fat',
//       numeric: true,
//       label: `${'fat'} (g)`,
//     },
//     {
//       id: 'price',
//       numeric: true,
//       label: `price`,
//     },
//   ];

//   const tableIngredients: TableIngredient[] = !data.length
//     ? []
//     : data
//         .filter(ingredient =>
//           groupFilter.id === 0 ? ingredient : ingredient.group.id === groupFilter.id,
//         )
//         .map(ingredient => ({
//           ...ingredient,
//           price: getLatestIngredientPrice(ingredient.prices).price,
//         }));

//   const { order, orderBy, actions } = useTableSort(tableIngredients);

//   return (
//     <NutritionTable
//       emptyTableTitle={`empty-table-title`}
//       emptyTableSubtitle={`empty-table-subtitle`}
//       isLoading={false}
//       data={tableIngredients}
//       total={tableIngredients.length}
//       activeOption={groupFilter}
//       options={ingredientGroups}
//       setActiveOption={setGroupFilter}
//       order={order}
//       orderBy={orderBy}
//       onRequestSort={actions.handleRequestSort}
//       headCells={headCells}
//     >
//       <TableBody>
//         {actions.stableSort(tableIngredients).map((row, index) => {
//           return (
//             <TableRow
//               key={`${row.id}-${index}`}
//               hover
//               tabIndex={-1}
//               sx={{
//                 cursor: 'pointer',
//                 '&:hover': {
//                   '& button': {
//                     opacity: 1,
//                     visibility: 'visible',
//                   },
//                   '& svg': {
//                     opacity: 1,
//                   },
//                 },
//               }}
//               onClick={() => setIngredientToEdit(row)}
//             >
//               <TableCell
//                 align="left"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '.5rem',
//                 }}
//               >
//                 <Box flexShrink={0}>
//                   <Image alt="ingredient image" height={25} width={25} src={VegetablesIcon} />
//                 </Box>
//                 <Typography variant="subtitle2">{row.name}</Typography>
//                 <KeyboardArrowRightIcon sx={{ opacity: 0, transition: '.3s linear opacity' }} />
//               </TableCell>
//               <TableCell>{row.countType}</TableCell>
//               <TableCell>{row.calories}</TableCell>
//               <TableCell>{row.carbs}</TableCell>
//               <TableCell>{row.protein}</TableCell>
//               <TableCell>{row.fat}</TableCell>
//               <TableCell>{row.price}</TableCell>
//               <TableCell width={15}>
//                 <TooltipIconButton
//                   variant="delete"
//                   size="small"
//                   sx={theme => ({
//                     padding: 0,
//                     transition: '.3s linear all',
//                     [theme.breakpoints.up('lg')]: {
//                       opacity: 0,
//                       visibility: 'visible',
//                     },
//                   })}
//                   onClick={e => {
//                     e.stopPropagation();
//                     setIngredientToRemove(row);
//                   }}
//                 />
//               </TableCell>
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </NutritionTable>
//   );
// }

// export default function X({ data }) {
//   console.log(data);
//   const user = useContext(UserContext);

//   const allCategoriesOption: NutritionGroup = { id: 0, name: `all-categories` };

//   const [groupFilter, setGroupFilter] = useState<NutritionGroup>(allCategoriesOption);
//   const [ingredientToEdit, setIngredientToEdit] = useState<undefined | null | Ingredient>(
//     undefined,
//   );
//   const [ingredientToRemove, setIngredientToRemove] = useState<Ingredient | null>(null);

//   const handleSetEmptyIngredientToEdit = () => {
//     setIngredientToEdit(null);
//   };

//   const handleRemoveIngredientToEdit = () => {
//     setIngredientToEdit(undefined);
//   };

//   const ingredientGroups = [allCategoriesOption].concat(user.ingredientGroups);

//   return (
//     <IngredientsTable
//       groupFilter={groupFilter}
//       ingredientGroups={ingredientGroups}
//       setGroupFilter={setGroupFilter}
//       setIngredientToEdit={setIngredientToEdit}
//       setIngredientToRemove={setIngredientToRemove}
//       data={data}
//     />
//   );
// }

export default function X() {
  return null;
}

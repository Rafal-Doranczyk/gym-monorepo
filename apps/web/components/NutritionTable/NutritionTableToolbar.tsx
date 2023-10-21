import { Toolbar } from '@mui/material';

import { ChipCounterMenu } from '@/components';

import { NutritionTableToolbarProps } from './NutritionTable';

export default function NutritionTableToolbar({
  total,
  options,
  activeOption,
  setActiveOption,
}: NutritionTableToolbarProps) {
  return (
    <Toolbar>
      {/* <ChipCounterMenu
        id="nutrition-table"
        end={total}
        options={options}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      /> */}
    </Toolbar>
  );
}

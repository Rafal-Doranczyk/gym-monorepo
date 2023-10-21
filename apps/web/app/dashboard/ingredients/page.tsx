import { Typography } from '@mui/material';

import { fetchUserIngredients } from '@/actions';
import IngredientsTable from '@/modules/ingredients/components/IngredientsTable';

export default async function Page() {
  const a = await fetchUserIngredients();
  console.log(a);
  return (
    <div>
      <Typography>ingredients</Typography>

      <IngredientsTable data={a.ingredients} />
    </div>
  );
}

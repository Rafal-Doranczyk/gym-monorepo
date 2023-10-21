import { Box, Skeleton } from '@mui/material';

const ROW_NUMBER = 10;

export default function NutritionTableSkeleton() {
  return (
    <Box p={2}>
      <Skeleton
        variant="rectangular"
        sx={{ display: 'inline-block', height: 30, width: 100, borderRadius: 4 }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ display: 'inline-block', ml: 2, height: 30, width: 50, borderRadius: 4 }}
      />

      {Array.from(Array(ROW_NUMBER).keys()).map(key => (
        <Box key={key}>
          <Skeleton
            variant="rectangular"
            sx={{
              mt: 2,
              height: 40,
            }}
          />
          <Skeleton variant="rectangular" sx={{ mt: 1, height: 2 }} />
        </Box>
      ))}
    </Box>
  );
}

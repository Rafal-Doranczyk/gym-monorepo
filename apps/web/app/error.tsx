'use client';

import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { ToastContext } from '@/context';

export default function Error() {
  const { handleOpen } = useContext(ToastContext);

  useEffect(() => {
    // if (error?.message) {
    //   handleOpen({ message: error.message, severity: 'error' });
    // }
  }, []);

  return (
    <Box py={3}>
      <Typography mb={1} textAlign="center" variant="h5">
        Global error
      </Typography>
      <Link href="/">Go to login</Link>
    </Box>
  );
}

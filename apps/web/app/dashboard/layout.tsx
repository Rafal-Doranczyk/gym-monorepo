import { ReactNode } from 'react';
import { Box } from '@mui/material';

// import { Navigation, DESKTOP_APP_NAVIGATION_DRAWER_WIDTH } from '@/modules';
import { fetchUser } from '@/actions';
import { UserContext } from '@/context';

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await fetchUser();

  return (
    <UserContext.Provider value={user}>
      {/* <Box pl={{ lg: DESKTOP_APP_NAVIGATION_DRAWER_WIDTH }} pt={6} m={3}>
        <Navigation />
        {children}
      </Box> */}
    </UserContext.Provider>
  );
}

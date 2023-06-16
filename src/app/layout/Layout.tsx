import React, { Suspense } from 'react';
import Loading from './ui/loading/loading';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Box paddingTop={'100px'}>
        <Outlet />
      </Box>
    </Suspense>
  );
}

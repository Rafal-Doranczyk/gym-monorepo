'use client';

import { useContext, useEffect } from 'react';

import SignOutToggler from './SignOutToggler';
import ThemeToggler from './ThemeToggler';
import { ThemeContext, UserContext } from '@/context';

export default function ActionButtons() {
  const { settings } = useContext(UserContext);
  const { setMode } = useContext(ThemeContext);

  useEffect(() => {
    setMode(settings.palette);
  }, [setMode, settings.palette]);

  return (
    <>
      <ThemeToggler />
      <SignOutToggler />
    </>
  );
}

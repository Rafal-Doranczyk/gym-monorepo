import { useContext, useTransition } from 'react';
import { PALETTE_MODES } from 'gym-shared';

import { TooltipIconButton } from '@/components';
import { updateUserSettings } from '@/actions';
import { ThemeContext, ToastContext } from '@/context';

export default function ThemeToggler() {
  const [pending, startTransition] = useTransition();
  const { mode, setMode } = useContext(ThemeContext);
  const { handleClose, handleOpen } = useContext(ToastContext);

  const isDarkMode = mode === 'dark';

  const changedPalette = isDarkMode ? PALETTE_MODES.LIGHT : PALETTE_MODES.DARK;

  return (
    <TooltipIconButton
      disabled={pending}
      variant={isDarkMode ? 'light-mode' : 'dark-mode'}
      onClick={() => {
        try {
          handleClose();
          setMode(changedPalette);

          startTransition(async () => {
            const { message } = await updateUserSettings({ palette: changedPalette });
            handleOpen({ message, severity: 'success' });
          });
        } catch (error) {
          handleOpen({
            message: 'Something went wrong with theme update',
            severity: 'error',
          });
        }
      }}
    />
  );
}

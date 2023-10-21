import { TooltipIconButton } from '@/components';

type MobileDrawerTogglerProps = {
  toggleOpen: () => void;
};

export default function MobileDrawerToggler({ toggleOpen }: MobileDrawerTogglerProps) {
  return (
    <TooltipIconButton variant="hamburger" aria-label="open menu" onClick={toggleOpen} />
  );
}

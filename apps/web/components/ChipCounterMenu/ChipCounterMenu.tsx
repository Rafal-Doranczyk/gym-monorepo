'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import { Box, Chip, Menu, MenuItem } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

type MenuOption = {
  id: number;
  name: string;
};

type ChipCounterMenuProps = {
  id: string;
  end: number;
  options: MenuOption[];
  activeOption: MenuOption | null;
  start?: number;
  setActiveOption: (option: MenuOption) => void;
};

export default function ChipCounterMenu({
  id,
  end,
  options,
  activeOption,
  start = 0,
  setActiveOption,
}: ChipCounterMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <Box display="flex">
      <Chip
        color="primary"
        label={activeOption?.name}
        sx={{ textTransform: 'capitalize', mr: 2, pr: 1, pl: 1 }}
        icon={<CategoryIcon />}
        onClick={e => setAnchorEl(e.currentTarget)}
      />

      <CountUp start={start} end={end} duration={0.2}>
        {({ countUpRef }) => (
          <Box
            display="flex"
            alignItems="center"
            fontSize={14}
            pr={1.5}
            pl={1.5}
            height={32}
            borderRadius={4}
            bgcolor={({ palette }) => palette.action.hover}
          >
            <span ref={countUpRef} />
          </Box>
        )}
      </CountUp>

      <Menu
        id={id}
        aria-labelledby={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        sx={{ textTransform: 'capitalize' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={() => setAnchorEl(null)}
      >
        {options
          .filter(option => option?.id !== activeOption?.id)
          .map(({ id, name }) => (
            <MenuItem
              key={id}
              onClick={() => {
                setActiveOption({ id, name });
                setAnchorEl(null);
              }}
            >
              {name}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}

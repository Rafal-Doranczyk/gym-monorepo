import { Box, BoxProps, Fade, Typography } from '@mui/material';

import EmptySvg from './EmptySvg';

type Sizes = 'big' | 'medium' | 'small';
type ImageType = 'default' | 'search' | 'food';

type EmptyStateProps = BoxProps & {
  title?: string;
  subtitle?: string;
  size?: Sizes;
  type?: ImageType;
};

const ImageSizesMap: { [key in Sizes]: { height: number; width: number } } = {
  big: {
    height: 200,
    width: 200,
  },
  medium: {
    height: 150,
    width: 150,
  },
  small: {
    height: 100,
    width: 100,
  },
};

export default function EmptyState({
  title,
  subtitle,
  type = 'default',
  size = 'big',
  ...boxProps
}: EmptyStateProps) {
  return (
    <Fade in>
      <Box
        {...boxProps}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {type === 'default' && <EmptySvg {...ImageSizesMap[size]} />}

        {title && (
          <Typography textAlign="center" variant="button" mb={1}>
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography textAlign="center" variant="caption" mb={1} maxWidth={300}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Fade>
  );
}

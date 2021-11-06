/** @jsxImportSource @emotion/react */
import { spacing } from '../theme';

export const Stack = ({
  align = 'stretch',
  gap = 'none',
  children,
  orientation = 'vertical',
  ...props
}) => {
  const { dimension, autoFlow } = orientationMap[orientation];

  return (
    <div
      css={{
        display: 'grid',
        // prevent grid children from expanding the gap to fill the available space
        [dimension]: 'fit-content',
        gap: spacing[gap],
        justifyItems: align,

        // support horizontal orientation
        gridAutoFlow: autoFlow,

        // prevent grid children from expanding the gap to fill the available space
        [dimension]: 'fit-content',

        // min-width and min-height declarations prevent overflow issues
        // https://css-tricks.com/preventing-a-grid-blowout/
        minHeight: 0,
        minWidth: 0
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Utils
// ------------------------------

const orientationMap = {
  horizontal: {
    autoFlow: 'column',
    dimension: 'width'
  },
  vertical: {
    autoFlow: 'row',
    dimension: 'height'
  }
};

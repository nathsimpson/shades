/** @jsxImportSource @emotion/react */
import { getContrastColor } from 'hex-a11y';
import { useTheme } from '../hooks/themeContext';
import hexAlpha from 'hex-alpha';

export const Button = ({ label, onClick, color }) => {
  const theme = useTheme();
  const primaryColor = color || theme.color.action;
  return (
    <button
      onClick={onClick}
      css={{
        padding: '8px 16px',
        borderRadius: 6,
        backgroundColor: primaryColor,
        color: getContrastColor(primaryColor),
        border: 'none',
        margin: '0px 2px',

        '&:hover': {
          backgroundColor: hexAlpha(primaryColor, 0.7)
        }

        // '&:focus': { outline: 'none' }
      }}
    >
      {label}
    </button>
  );
};

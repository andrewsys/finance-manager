import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation'

const theme = createTheme
({
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'black',
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 500,
            color: 'black',
        },
        body1: {
            fontSize: '1rem',
            color: 'black',
        },
    },
});

export default theme;
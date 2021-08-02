import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        orange: {
            "50": "#EEEEF2"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'orange.100',
                color: 'orange.900'
            }
        }
    }
})
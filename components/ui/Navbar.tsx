import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import {AppBar,Toolbar, Link, Typography, Box, Button, IconButton, Badge} from '@mui/material'
import NextLink from 'next/link'
export const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent:'space-between'}}>
        <NextLink href={'/'} passHref legacyBehavior>
            <Link display={'flex'} >
                <Typography variant="h6" color="initial"> Teslo |</Typography>
                <Typography variant="h5" sx={{ ml:0.5 }} color="initial">Shop</Typography>
            </Link>
        </NextLink>
        {/* <Box flex={1}/> */}
        <Box sx={{ display:{xs:'none', sm:'block'}}}>
            <NextLink href={'/category/men'} passHref legacyBehavior>
                <Link >
                    <Button>Hombres</Button>
                </Link>
            </NextLink>
            <NextLink href={'/category/women'} passHref legacyBehavior>
                <Link>
                    <Button>Mujeres</Button>
                </Link>
            </NextLink>
            <NextLink href={'/category/kid'} passHref legacyBehavior>
                <Link>
                    <Button>Niños</Button>
                </Link>
            </NextLink>
        </Box>
        {/* <Box flex={1}/> */}
        <Box>
            <IconButton >
                <SearchOutlined/>
            </IconButton>
            <NextLink href={'/cart'} passHref legacyBehavior>
                <Link>
                    <IconButton>
                        <Badge badgeContent={2}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>
            <Button>Menú</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

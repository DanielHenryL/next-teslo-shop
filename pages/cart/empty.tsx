import { ShopLayout } from "@/components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Typography, Link } from "@mui/material"
import NextLink from "next/link"

const EmptyPage = () => {
  return (
    <ShopLayout title={'Carrito vació'} pageDescription={'No hay artículos en el carrito de compras'}>
        <Box 
            display={'flex'} 
            flexDirection={{ xs:'column', sm:'row'}} 
            justifyContent={'center'} 
            alignItems={'center'} 
            height={'calc(100vh - 220px)'}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize:100}}/>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography>Su carrito está vació</Typography>
                <NextLink href={'/'} passHref legacyBehavior>
                    <Link typography={'h4'} color={'secondary'}>
                        Regresar
                    </Link>
                </NextLink>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage
import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Typography, Box } from '@mui/material'

const Custom404 = () => {
  return (
    <ShopLayout title={'Page not found'} pageDescription={'No hay nada que mostar'}>
        <Box display={'flex'} flexDirection={{ xs:'column', sm:'row'}} justifyContent={'center'} alignItems={'center'} height={'calc(100vh - 220px)'}>
            <Typography variant="h1" component={'h1'} fontSize={50} fontWeight={400}>404 |</Typography>
            <Typography marginLeft={2} fontSize={{xs:15,sm:20}}>No encontramos ni una pagina aqui</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404
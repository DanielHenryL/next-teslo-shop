import NextLink from 'next/link'
import { CardList, OrderSummary } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 41515145' pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component={'h1'}>Orden: ABC123</Typography>
        {/* <Chip
            sx={{ my:2 }}
            label='Pendiente de pago'
            variant='outlined'
            color='error'
            icon={<CreditCardOffOutlined/>}
        /> */}
        <Chip
            sx={{ my:2 }}
            label='Orden Pagada'
            variant='outlined'
            color='success'
            icon={<CreditScoreOutlined/>}
        />
            
        
        <Grid container sx={{ mt:2}} flexDirection={{ xs:'column-reverse',sm:'row'}} >

            <Grid item xs={12} sm={7} sx={{ my:2}}>
                <CardList  />
            </Grid>

            <Grid item xs={12} sm={5} sx={{ my:2}}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{ my:1}}/>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href={'/checkout/address'} passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>
                        <Typography>Daniel Lagunas</Typography>
                        <Typography>Basilio 3345</Typography>
                        <Typography>Avenido keneddy la 9</Typography>
                        <Typography>Perú</Typography>
                        <Typography>+51 944057079</Typography>

                        <Divider sx={{ my:1}}/>

                        <Box display={'flex'} justifyContent={'end'}>
                            <NextLink href={'/cart'} passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />
                        
                        <Box sx={{ mt:3}}>
                            {/* Todo */}
                            <h1>Pagar</h1>
                            <Chip
                                sx={{ my:2 }}
                                label='Orden Pagada'
                                variant='outlined'
                                color='success'
                                icon={<CreditScoreOutlined/>}
                            />
                        </Box>

                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    </ShopLayout>
  )
}

export default OrderPage
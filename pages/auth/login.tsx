import { AuthLayout } from '@/components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
const LoginPage = () => {
  return (
    <AuthLayout title={'Ingresar'}>
        <Box sx={{ width:350, padding:'30px 25px', borderRadius:5, border:1, backgroundColor:'#F1F1F1'}}>
            <Grid container spacing={2}>
                <Grid item xs={ 12 }>
                    <Typography textAlign={'center'} variant='h1' component={'h1'}>Iniciar Sesión</Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Correo' variant='standard' fullWidth/>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Contraseña' type='password' variant='standard' fullWidth/>
                </Grid>
                <Grid item xs={ 12 } sx={{ my:2}}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={ 12 } display={'flex'} justifyContent={'end'} >
                    <NextLink href='/auth/register' passHref legacyBehavior>
                        <Link underline='always' color={'primary'}>
                            No tienes una cuenta?
                        </Link>
                    </NextLink>
                </Grid>
                
            </Grid>
        </Box>

    </AuthLayout>
  )
}

export default LoginPage
import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '@/components/layouts'


const RegistroPage = () => {
  return (
    <AuthLayout title={'Registrate'}>
        <Box sx={{ width:350, padding:'30px 25px', borderRadius:5, border:1, backgroundColor:'#F1F1F1'}}>
            <Grid container spacing={2}>
                <Grid item xs={ 12 }>
                    <Typography textAlign={'center'} variant='h1' component={'h1'}>Crear cuenta</Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Nombre completo' type='text' variant='standard' fullWidth/>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Correo' type='email' variant='standard' fullWidth/>
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField label='Contraseña' type='password' variant='standard' fullWidth/>
                </Grid>
                
                <Grid item xs={ 12 } sx={{ my:2}}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Registrarse
                    </Button>
                </Grid>
                <Grid item xs={ 12 } display={'flex'} justifyContent={'end'} >
                    <NextLink href='/auth/login' passHref legacyBehavior>
                        <Link underline='always' color={'primary'}>
                            Ya tienes una cuenta?
                        </Link>
                    </NextLink>
                </Grid>
                
            </Grid>
        </Box>

    </AuthLayout>
  )
}

export default RegistroPage
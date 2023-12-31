import { ShopLayout } from '@/components/layouts'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const address = () => {
  return (
    <ShopLayout title={'Direccion'} pageDescription={'Confirmar direccion de usuario'}>
        <Typography variant='h1' component={'h1'}>Dirección</Typography>
        <Grid container spacing={2} sx={{ mt:2}}>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Nombre' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Apellido' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Dirección' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Dirección 2 (Opcional)' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Código postal' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Ciudad' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <FormControl fullWidth>
                    <Select
                        variant='filled'
                        label='País'
                        value={1}
                    >   
                        <MenuItem value={1}>Costa Rica</MenuItem>
                        <MenuItem value={2}>Honduras</MenuItem>
                        <MenuItem value={3}>El salvador</MenuItem>
                        <MenuItem value={4}>Mexico</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <TextField label='Teléfono' variant='filled' fullWidth></TextField>
            </Grid>
        </Grid>
        <Box sx={{ mt:5 , display:'flex', justifyContent:'center'}}>
            <Button color='secondary' className='circular-btn' size='large'>
                Revisar pedido
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default address
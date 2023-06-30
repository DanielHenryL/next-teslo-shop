import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container>

        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Sub total</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{`$${155.6}`}</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impuesto (15%)</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{`$${35.4}`}</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt:2}}>
            <Typography variant="subtitle1">Total a Pagar</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'} sx={{ mt:2}}>
            <Typography variant="subtitle1">{`$${185.4}`}</Typography>
        </Grid>

    </Grid>
  )
}

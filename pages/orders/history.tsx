import { ShopLayout } from '@/components/layouts'
import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import NextLink from 'next/link'
const columns:GridColDef[] = [
    { field: 'id', headerName: 'ID',width:100 },
    { field: 'fullName', headerName: 'Nombre Completo',width:300 },
    {
        field:'paid',
        headerName:'Pagada',
        description:'Muestra informacion si esta pagada la orden o no',
        width:200,
        renderCell:( params:GridRenderCellParams ) => {
            return (
                params.row.paid
                ? <Chip color='success' label='Pagada' variant='outlined'/>
                : <Chip color='error' label='No pagada' variant='outlined'/>
            )
        }
    },
    {
        field:'orderAnterior',
        headerName:'Ver orden',
        description:'Ver dettale de la compra',
        width:200,
        sortable:false,
        renderCell:(params:GridRenderCellParams)=>{
            return (
                <NextLink href={ `/orders/${params.row.id}`} passHref legacyBehavior>
                    <Link underline='always'> Ver orden</Link>
                </NextLink>
            )
        }

    }
]
const rows =[
    { id:1, paid:false, fullName:'Daniel Lagunas' },
    { id:2, paid:true, fullName:'Cesar Suclupe' },
    { id:3, paid:true, fullName:'Joel Champoñan' },
    { id:4, paid:false, fullName:'Jesus Reymundo' },
    { id:5, paid:true, fullName:'Thiago Condori' },
    { id:6, paid:true, fullName:'Brenda Acosta' },
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant='h1' component={'h1'}>Historial de ordenes</Typography>
        <Grid container>
            <Grid item xs={ 12 } sx={{ height:450, width:'100%'}}>
                <DataGrid
                    rows={ rows }
                    columns={ columns }
                    disableRowSelectionOnClick 
                />
                    
                
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
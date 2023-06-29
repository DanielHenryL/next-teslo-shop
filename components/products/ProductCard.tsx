import { IProduct } from '@/interface'
import { Card, CardActionArea, CardMedia, Grid, Box, Typography, Link } from '@mui/material'
import NextLink from 'next/link'
import { FC, useState, useMemo } from 'react'

interface Props {
    product:IProduct
}

export const ProductCard:FC<Props> = ({product}) => {
    const [isHovered, setIsHovered] = useState(false)
    const productImage = useMemo( () => {
        return isHovered 
        ? `products/${ product.images[1] }` 
        : `products/${ product.images[0] }` 
    } , [isHovered, product.images ])
  return (
    <Grid 
        item 
        xs={6} 
        sm={4}
        
    >
        <Card>
            <NextLink href={'product/slug'} passHref legacyBehavior prefetch={ false }>
                <Link>
                    <CardActionArea
                        onMouseEnter={ () => setIsHovered( true ) }
                            onMouseLeave={ () => setIsHovered( false ) }
                    >   
                        <CardMedia 
                            component='img'
                            className='fadeIn'
                            image={ productImage }
                            alt={ product.title }
                            // onLoad={() => console.log('se carga la imagen')}
                        />
                    </CardActionArea>
                </Link>
            </NextLink>
        </Card>
        <Box sx={{ mt:1}} className='fadeIn'> 
            <Typography fontWeight={ 700 }>{ product.title }</Typography>
            <Typography fontWeight={ 500 }>${ product.price }</Typography>
        </Box>
    </Grid>
  )
}

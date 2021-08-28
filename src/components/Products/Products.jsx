import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/*const products=[
    {id:1,name:'PC',description:'Monster',price:'500Tl',image:'https://mcdn01.gittigidiyor.net/72160/721608068_0.jpg'},
    {id:1,name:'PHONE',description:'IPHONE',price:'50Tl',image:'https://mcdn01.gittigidiyor.net/62952/tn50/629521404_tn50_0.jpg'}

]*/

const Products = ({products}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
                    
                
            ))}
        </Grid>
    </main>
    )
   
}

export default Products;
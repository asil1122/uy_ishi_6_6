import React from 'react'
import { Header } from './components/header/header'
import { Grid2, Stack } from '@mui/material'
import { products } from './data/products'
import { ProductCard } from './components/product-card'

function App() {

  return (
    <>
      <Header/>
      <Stack maxWidth={'1200px'} mx={'auto'}>
        <Grid2 container spacing={'20px'}>
          {products.map((item)=> (
            <Grid2 size={3} key={item.id} >
              <ProductCard {...item}/>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </>
  )
}

export default App

import { Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { SelectedProduct } from '../selected-product'
import { nanoid } from '@reduxjs/toolkit'
import formatter from '../../utils/currenscy-format'
import { totalPrice } from '../../redux/reducers/product-reducer'

export const Cart = () => {
  const { product_list, totalPrice } = useSelector((state) => state.product)

  return (
    <Stack width={'400px'} p={'30px'} bgcolor={'white'} height={'scereen'}>
      {product_list.map((item) => (
        <SelectedProduct key={nanoid()} {...item}/>
))}
    <strong>{formatter(totalPrice)}</strong>
    </Stack>
  )
}

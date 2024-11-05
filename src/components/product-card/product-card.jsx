import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import formatter from '../../utils/currenscy-format'
import { addCart } from '../../redux/reducers/product-reducer'

export const ProductCard = (props) => {
  const dispatch = useDispatch()

  return (
    <Stack>
      <img width={'full'} src={props.img} alt="img" />
      <Typography fontSize={'25px'} variant='h2'>{props.title}</Typography>
      <strong>{formatter(props.price)} sum</strong>
      <p>{props.brand}</p>
      <Button onClick={() => dispatch(addCart(props))} fullWidth variant='contained'>
        buy
      </Button>
    </Stack>
  )
}

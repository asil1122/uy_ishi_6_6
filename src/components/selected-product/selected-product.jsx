import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import formatter from '../../utils/currenscy-format'
import { deleteProduct, toggleAmount } from '../../redux/reducers/product-reducer'

export const SelectedProduct = (props) => {
  const dispatch = useDispatch()
  return (
    <Box>
      <Stack mb={'20px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Stack>
          <Box>
            <img src={props.img} alt="img" />
          </Box>
          <h4>{props.title}</h4>
          <p>{formatter(props.price)} sum</p>
        </Stack>
        <Box>
          <Stack direction={'row'} alignItems={'center'}>
            <IconButton onClick={() => dispatch(toggleAmount({ id: props.id, type: 'increment'}))}>
              +
            </IconButton>
            <span>{props.user_count}</span>
            {props.user_count < 2 ? (
              <IconButton onClick={()=> dispatch(deleteProduct({ id: props.id }))}>
                x
              </IconButton>
            ) : (
              <IconButton onClick={() => dispatch(toggleAmount({ id: props.id, type: 'decrement'}))}>
                -
              </IconButton>
            )}  
          </Stack>
          <strong>{formatter(props.user_price)} sum</strong>
        </Box>
      </Stack>
    </Box>
  )
}

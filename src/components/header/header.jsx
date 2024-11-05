import { Badge, Drawer, IconButton, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { Cart } from '../cart';
import { CartIcon } from '../../assets/CartIcon';

export const Header = () => {
  const [showP, setShowP] = React.useState(false);
  const { count } = useSelector((state) => state.product);

  return (
    <Stack p={'30px'} bgcolor={'blue'} >
      <Drawer onClose={() => setShowP(false)} open={showP} anchor={'left'}>
        <Cart/>
      </Drawer>
      <Stack maxWidth={'1200px'} mx={'auto'}>
        <IconButton onClick={() => setShowP(true)} aria-label='cart'>
            <Badge badgeContent={count ? count : "0" } color='error'>
                <CartIcon/>
            </Badge>
        </IconButton>
        
      </Stack>
    </Stack>
  )
}

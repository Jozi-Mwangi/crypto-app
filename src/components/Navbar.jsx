import React from 'react'
import { Paper, Avatar, Typography, MenuList, Stack, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { HomeOutlined, PaidOutlined, ShowChartOutlined, NewspaperOutlined } from '@mui/icons-material'
import icon from '../images/cryptocurrency.jpg'
import { Link } from 'react-router-dom'


const pages = ["exchanges", "cryptocurrencies","news", "cryptodetails", "homepage" ]

const Navbar = () => {
  return (
    <div className='nav-container' >
        <div style={{display:"flex", gap:"2rem"}}  >
          <Avatar alt='icon' src={icon} />
          <Typography  > 
              <Link to="/">
                Cryptoverse
              </Link>
          </Typography>
        </div>

        <Paper>
          <MenuList  >
            <MenuItem>
              <ListItemIcon>
                <HomeOutlined fontSize='small' />
              </ListItemIcon>
                <ListItemText color='primary'>
                  <Link to="/" >Home</Link>
                </ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <PaidOutlined fontSize='small' />
              </ListItemIcon>
              <ListItemText color='primary'>
                <Link to="/exchanges" >Exchanges</Link>
              </ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <ShowChartOutlined fontSize='small' />
              </ListItemIcon>
              <ListItemText color='primary'>
                <Link to="/cryptocurrencies" >Cryptocurrencies</Link>
              </ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <NewspaperOutlined fontSize='small' />
              </ListItemIcon>
              <ListItemText color='primary'>
                <Link to="/news" >News</Link>
              </ListItemText>
            </MenuItem>

          </MenuList>
        </Paper>
    </div>
  )
}

export default Navbar
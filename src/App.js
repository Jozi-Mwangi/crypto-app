import React from 'react'
import  {Navbar, Exchanges, Cryptodetails, HomePage, Cryptocurrencies, News}  from './components'
import { CssBaseline, Box, Link, Grid, Typography, Switch } from '@mui/material'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { textAlign } from '@mui/system'


const App = () => {
  return (
    <>
        <CssBaseline/>
        <div className='navbar'>
            <Navbar/>
        </div>
                {/* <Router>
                    <Routes>
                        <Route  path='/' element={<HomePage/>} />
                        <Route  path='exchanges' element={<Exchanges/>} />
                        <Route  path='cryptocurrencies' element={<Cryptocurrencies/>} />
                        <Route  path='news' element={<News/>} />
                    </Routes>
                </Router>     */}
            <div>
                <Typography variant='subtitle2' style={{color:"white", textAlign:"center"}} >
                    CryptoVerse <br/>
                    All Rights Reserved
                </Typography>
            </div>
            
    
    </>

)}

export default App
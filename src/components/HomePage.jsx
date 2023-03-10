import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
// import { Table, TableBody, TableCell, TableHead,TableRow, Paper, Typography, TableContainer } from '@mui/material' 

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const HomePage = () => {

  const { data, isFetching } = useGetCryptosQuery({})
  console.log(data)

  return (
    <>
      <Title level={2} > Global CryptoStats</Title>
      <Row>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total Exchanges" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total Market Cap" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total 24H value" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value="5" /> </Col>
      </Row>
    </>
  )
}

export default HomePage
import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './fakePage.css'

export function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/niku.jpg" />
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}

export default function FakePage() {
    return (
        <div>
            <Container style={{marginTop:'0px', minHeight: '800px'}}>
                <Row>
                    <Col xs={12} md={12} lg={8}>
                        <div style={{padding:'50px'}} id='order'>
                            <Card style={{ padding:'20px',marginTop:'10%'}}>
                                <Row>
                                    <Col xs={4} md={4} lg={4}><Avatar variant="rounded" sx={{ width: 76, height: 56 }} alt="food1" src="https://s3-media0.fl.yelpcdn.com/bphoto/alZbMIPoz-mktc3nJxRPJw/o.jpg" /></Col>
                                    <Col xs={4} md={4} lg={4}><label >food1</label></Col>
                                    <Col xs={4} md={4} lg={4}>
                                        <Fab variant="circular" color="primary" size="small" aria-label="add">
                                            <AddIcon />
                                        </Fab>
                                        <label>{1}</label>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <div style={{padding:'50px', marginTop: '50px'}} >
                            <Card style={{ padding:'20px',marginTop:'10%'}}>
                            </Card>
                        </div>   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
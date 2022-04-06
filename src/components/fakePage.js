import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

export default function FakePage() {
    return (
        <div>
            <Container style={{marginTop:'50px', minHeight: '800px'}}>
                <Row>
                    <p>fake page</p>
                </Row>
            </Container>
        </div>
    )
}
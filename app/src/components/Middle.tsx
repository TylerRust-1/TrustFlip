import React from 'react';
import { Items } from 'oldschooljs';
import { Row, Col, Container } from "react-bootstrap";

const twistedBow = Items.get(20997);

export const Middle: React.FunctionComponent = () => {
    return(
      <div style = {styles.container}>
        <Container>
          <Row>
            <Col>{twistedBow?.buy_limit}</Col>
            <Col>{twistedBow?.buy_limit}</Col>
            <Col>{twistedBow?.buy_limit}</Col>
          </Row>
        </Container>
        </div>
      )
  }

  const styles = {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
      background: 'rgb(122, 121, 120)',
      width: "60%",
      color: 'black',    
    }
  } 
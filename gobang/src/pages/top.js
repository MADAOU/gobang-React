import React, { Component } from 'react'
import Header from '../component/header/header';
import { Card, Button, Row, Col } from 'react-bootstrap';
export default class Top extends Component {

  /**
   * 
   */
  componentDidMount() {

  }

  /**
   * 
   */
  componentWillUnmount() {

  }

  sigleMode =(e)=>{
    let target = e.target;
    console.log(target);
    this.props.history.push('/chessPvc');
  }

  
  miltiMode =(e)=>{
    let target = e.target;
    console.log(target);
    this.props.history.push('/chessPvp');
  }

  render() {

    const styles = {
      container: {
        margin: '10em auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      centerContainer: {
        height: '35.5em',
        // border: '1px solid'
      },
      centerCard: {
        height: '100%',
      },
      buttonCainer: {
        witdh: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2em auto'
      },
      button:{
        height:'5em',
        width:'30em',
        // backgroundColor:'#0000',
        boxShadow: '-2px -2px 2px #efefef, 5px 5px 5px #b9b9b9',
      }
    };

    return (
      <React.Fragment>
        <div style={styles.container}>
          <Card className="card-container">
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Header />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md={12} style={styles.centerContainer}>
                  <Card style={styles.centerCard}>
                    <Card.Body>
                      <Row className="justify-content-md-center">
                        <Col md={12} style={styles.buttonCainer}>
                          <Button style={styles.button} onClick={this.sigleMode}>单人模式</Button>
                        </Col>
                        <Col md={12} style={styles.buttonCainer}>
                          <Button style={styles.button} onClick={this.miltiMode}>匹配模式</Button>
                        </Col>
                        <Col md={12} style={styles.buttonCainer}>
                          <Button style={styles.button} onClick={this.miltiMode}>好友对战</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment >
    )
  }
}

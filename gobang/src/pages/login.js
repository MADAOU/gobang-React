import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import img from '../images/banner3.jpg';
export default class Login extends Component {

  state = {
    email: "",
    password: "",
    validated: false,
  }
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

  /**
   * login
   * @param {*} e 
   */
  loginHandler = (e) => {
    const target = e.target;
    console.log(target);
  }

  /**
   * register
   * @param {*} e 
   */
  registerHandler = (e) => {
    const target = e.target;
    console.log(target);
    this.props.history.push('/register');
  }

  /**
   * input
   * @param {*} e 
   */
  commonChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    this.setState({ validated: true })
    if (!form.checkValidity()) {
    } else {
      this.props.history.push('/top');
    }
  }


  render() {

    const styles = {
      btnContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '0 0 0.5em 0'
      },
      container: {
        margin: '10em auto',
        height: '39em',
        width: '90em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <React.Fragment>
        <div style={styles.container}>
          <Card className="card-container" style={{backgroundImage:`url(${img})`}}>
            <Card.Body>
              <Form className="form-container" onSubmit={this.handleSubmit} noValidate validated={this.state.validated}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>邮箱</Form.Label>
                  <Form.Control name="email" value={this.state.email} required type="email" onChange={this.commonChangeHandler} placeholder="请输入邮箱" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>密码</Form.Label>
                  <Form.Control name="password" value={this.state.password} required type="password" onChange={this.commonChangeHandler} placeholder="请输入密码" />
                </Form.Group>
                <div style={styles.btnContainer}>
                  <Button variant="primary" type="submit" className="btn" onClick={this.loginHandler}>
                    登录
                </Button>
                  <Button variant="primary" className="btn" onClick={this.registerHandler}>
                    注册
                </Button>
                </div>
              </Form>
            </Card.Body>
          </Card >
        </div>
      </React.Fragment >
    )
  }
}

import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import img from '../images/banner3.jpg';
export default class Register extends Component {

  state = {
    email: "",
    password: "",
    comfirmPassword: "",
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
    this.props.history.push('/login');
  }

  /**
   * register
   * @param {*} e 
   */
  registerHandler = (e) => {
    const target = e.target;
    console.log(target);

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ validated: true })
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
          <Card className="card-container" style={{ backgroundImage: `url(${img})` }}>
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
                <Form.Group controlId="formBasicPasswordConfirm">
                  <Form.Label>确认密码</Form.Label>
                  <Form.Control name="comfirmPassword" value={this.state.comfirmPassword} required type="password" onChange={this.commonChangeHandler} placeholder="请输入确认密码" />
                </Form.Group>
                <div style={styles.btnContainer}>
                  <Button variant="primary" type="submit" className="btn" onClick={this.registerHandler}>
                    确认注册
                </Button>
                  <Button variant="primary" className="btn" onClick={this.loginHandler}>
                    返回登录
                </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment >
    )
  }
}

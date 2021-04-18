import React, { Component } from 'react'
import Header from '../component/header/header';
import MyModal from '../component/modal/modal';
import { Card, Button, Row, Col } from 'react-bootstrap';
import music from '../music/Sunburst(F1y Demo Remix).mp3';
export default class ChessPvp extends Component {

  state = {
    startGameBtn: '开始游戏',
    musicBtnName: '播放音乐',
    muteBtnName: '静音',
    backAble: false,
    modal: {
      show: false,
      title: 'title',
      body: '',

    }
  }
  constructor() {
    super();
    this.musicElement = React.createRef();
    this.chessElement = React.createRef();
  }

  over; me; playFlg;
  _nowi; _nowj; // 记录自己下棋的坐标
  _compi; _compj; // 记录计算机当前下棋的坐标
  _myWin = []; _compWin = []; // 记录我，计算机赢的情况
  chess; context; backbtn; returnbtn;
  // 棋盘
  chessBord = [];
  // 赢法的统计数组
  myWin = []; computerWin = [];
  // 赢法数组
  wins = [];
  // 赢法总数
  count = 0;

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

  getContext = () => {
    return this.chessElement.current.getContext('2d');
  }

  /**
   * 棋盘初期化
   */
  init = () => {
    this.setState({ backAble: false });
    this.playFlg = false;
    this.over = false;
    this.me = true; // 我
    this._nowi = 0; this._nowj = 0; // 记录自己下棋的坐标
    this._compi = 0; this._compj = 0; // 记录计算机当前下棋的坐标
    let context = this.getContext();
    context.strokeStyle = '#000000'; // 边框颜色
    for (let i = 0; i < 15; i++) {
      this.chessBord[i] = [];
      for (let j = 0; j < 15; j++) {
        this.chessBord[i][j] = 0;
      }
    }

    for (let i = 0; i < 15; i++) {
      this.wins[i] = [];
      for (let j = 0; j < 15; j++) {
        this.wins[i][j] = [];
      }
    }

    // 横线赢法
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
          this.wins[i][j + k][this.count] = true;
        }
        this.count++;
      }
    }
    // 竖线赢法
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
          this.wins[j + k][i][this.count] = true;
        }
        this.count++;
      }
    }
    // 正斜线赢法
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
          this.wins[i + k][j + k][this.count] = true;
        }
        this.count++;
      }
    }
    // 反斜线赢法
    for (let i = 0; i < 11; i++) {
      for (let j = 14; j > 3; j--) {
        for (let k = 0; k < 5; k++) {
          this.wins[i + k][j - k][this.count] = true;
        }
        this.count++;
      }
    }
    // 判断输赢的境况debugger;
    for (let i = 0; i < this.count; i++) {
      this.myWin[i] = 0;
      this._myWin[i] = 0;
      this.computerWin[i] = 0;
      this._compWin[i] = 0;
    }
  }

  /**
   * 清除棋盘
   */
  clearCanvas = () => {
    let cxt = this.chessElement.current;
    cxt.height = cxt.height;
  }

  /**
   * 绘画棋盘
   */
  drawChessBoard = () => {
    this.clearCanvas();
    let context = this.getContext();
    for (let i = 0; i < 15; i++) {
      context.moveTo(15 + i * 30, 15);
      context.lineTo(15 + i * 30, 435);
      context.stroke();
      context.moveTo(15, 15 + i * 30);
      context.lineTo(435, 15 + i * 30);
      context.stroke();
    }
  }

  /**
   * 画棋子
   * @param {*} i 
   * @param {*} j 
   * @param {*} me 
   */
  oneStep = (i, j, me) => {
    let context = this.getContext();
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);// 画圆
    context.closePath();
    // 渐变
    let gradient = context.createRadialGradient(15 + i * 30 + 2,
      15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);
    if (me) {
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#636766');
    } else {
      gradient.addColorStop(0, '#d1d1d1');
      gradient.addColorStop(1, '#f9f9f9');
    }
    context.fillStyle = gradient;
    context.fill();
  }

  /**
   * 计算机下棋
   */
  computerAI = () => {
    let myScore = [];
    let computerScore = [];
    let max = 0;
    let u = 0, v = 0;
    for (let i = 0; i < 15; i++) {
      myScore[i] = [];
      computerScore[i] = [];
      for (let j = 0; j < 15; j++) {
        myScore[i][j] = 0;
        computerScore[i][j] = 0;
      }
    }
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        if (this.chessBord[i][j] === 0) {
          for (let k = 0; k < this.count; k++) {
            if (this.wins[i][j][k]) {
              if (this.myWin[k] === 1) {
                myScore[i][j] += 200;
              } else if (this.myWin[k] === 2) {
                myScore[i][j] += 400;
              } else if (this.myWin[k] === 3) {
                myScore[i][j] += 2000;
              } else if (this.myWin[k] === 4) {
                myScore[i][j] += 10000;
              }

              if (this.computerWin[k] === 1) {
                computerScore[i][j] += 220;
              } else if (this.computerWin[k] === 2) {
                computerScore[i][j] += 420;
              } else if (this.computerWin[k] === 3) {
                computerScore[i][j] += 2100;
              } else if (this.computerWin[k] === 4) {
                computerScore[i][j] += 20000;
              }
            }
          }

          if (myScore[i][j] > max) {
            max = myScore[i][j];
            u = i;
            v = j;
          } else if (myScore[i][j] === max) {
            if (computerScore[i][j] > computerScore[u][v]) {
              u = i;
              v = j;
            }
          }

          if (computerScore[i][j] > max) {
            max = computerScore[i][j];
            u = i;
            v = j;
          } else if (computerScore[i][j] === max) {
            if (myScore[i][j] > myScore[u][v]) {
              u = i;
              v = j;
            }
          }

        }
      }
    }
    this._compi = u;
    this._compj = v;
    this.oneStep(u, v, false);
    this.chessBord[u][v] = 2; // 计算机占据位置
    for (let k = 0; k < this.count; k++) {
      if (this.wins[u][v][k]) {
        this.computerWin[k]++;
        this._myWin[k] = this.myWin[k];
        this.myWin[k] = 6;// 这个位置对方不可能赢了
      }

    }

    if (this.judgeWin(u, v, 2)) {
      // $('#messageBox').text('o(╯□╰)o , Computer is win!');
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          body: 'o(╯□╰)o , Computer is win!'
        }
      });
      this.over = true;
    }

    if (!this.over) {
      this.me = !this.me;
    }
    this.setState({ backAble: true });
  }

  /**
   * 销毁棋子
   * @param {int} i 坐标X
   * @param {int} j 坐标Y
   */
  minusStep = (i, j) => {
    let context = this.getContext();
    // 擦除该圆
    context.clearRect((i) * 30, (j) * 30, 30, 30);
    // 重画该圆周围的格子
    context.beginPath();
    context.moveTo(15 + i * 30, j * 30);
    context.lineTo(15 + i * 30, j * 30 + 30);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(i * 30, j * 30 + 15);
    context.lineTo(i * 30 + 30, j * 30 + 15);
    context.closePath();
    context.stroke();
  }



  /**
   * 判断输赢
   * @param {int} x 坐标X
   * @param {int} y 坐标Y
   * @param {int} people 人（指向）
   * @returns 
   */
  judgeWin = (x, y, people) => {
    // y的范围在0-14之间，x的范围在0-14之间
    let count = 0;
    for (let i = x - 1; i > -1; i--) {
      if (this.chessBord[i][y] !== people) {
        break;
      }
      count++;
    }
    for (let i = x + 1; i < 15; i++) {
      if (this.chessBord[i][y] !== people) {
        break;
      }
      count++;
    }
    if (count > 3)
      return people;

    count = 0;
    for (let i = y + 1; i < 15; i++) {
      if (this.chessBord[x][i] !== people) {
        break;
      }
      count++;
    }
    for (let i = y - 1; i > -1; i--) {
      if (this.chessBord[x][i] !== people) {
        break;
      }
      count++;
    }
    if (count > 3)
      return people;

    count = 0;
    for (let i = x + 1, j = y + 1; i < 25; i++, j++) {
      if (i < 15 && j < 15) {
        if (this.chessBord[i][j] !== people) {
          break;
        }
        count++;
      } else
        break;
    }
    for (let i = x - 1, j = y - 1; i > -1; i--, j--) {
      if (j > -1) {
        if (this.chessBord[i][j] !== people) {
          break;
        }
        count++;
      } else
        break;
    }
    if (count > 3)
      return people;

    count = 0;
    for (let i = x + 1, j = y - 1; i < 25; i++, j--) {
      if (i < 15 && j > -1) {
        if (this.chessBord[i][j] !== people) {
          break;
        }
        count++;
      } else
        break;
    }
    for (let i = x - 1, j = y + 1; i > -1; i--, j++) {
      if (i > -1 && j < 15) {
        if (this.chessBord[i][j] !== people) {
          break;
        }
        count++;
      } else
        break;
    }
    if (count > 3)
      return people;

  }

  /**
   * 开始游戏
   * @param {*} e 
   */
  startGame = () => {
    this.init();
    this.drawChessBoard();
    this.setState({ startGameBtn: '重新开始' });
    this.playFlg = true;
  }

  chessClick = (e) => {
    if (!this.playFlg || this.over || !this.me)
      return;

    // 悔棋功能可用

    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    let i = Math.floor(x / 30);
    let j = Math.floor(y / 30);
    this._nowi = i;
    this._nowj = j;
    if (this.chessBord[i][j] === 0) {
      this.oneStep(i, j, this.me);
      this.chessBord[i][j] = 1; // 我，已占位置
      for (let k = 0; k < this.count; k++) { // 将可能赢的情况都加1
        if (this.wins[i][j][k]) {
          // debugger;
          this.myWin[k]++;
          this._compWin[k] = this.computerWin[k];
          this.computerWin[k] = 6;// 这个位置对方不可能赢了
        }
      }

      if (this.judgeWin(i, j, 1)) {
        // $('#messageBox').text('You are win!');
        this.setState({
          modal: {
            ...this.state.modal,
            show: true,
            body: 'You are win!'
          }
        });
        this.over = true;
      }

      if (!this.over) {
        this.me = !this.me;
        setTimeout(this.computerAI, 800);
      }
    }
  }

  /**
   * 悔棋
   * @param {*} e
   */
  repentance = () => {
    if (!this.state.backAble)
      return;
    this.over = false;
    this.me = true;
    // 我，悔棋
    this.chessBord[this._nowi][this._nowj] = 0; // 我，已占位置 还原
    this.minusStep(this._nowi, this._nowj); // 销毁棋子
    for (let k = 0; k < this.count; k++) { // 将可能赢的情况都减1
      if (this.wins[this._nowi][this._nowj][k]) {
        this.myWin[k]--;
        this.computerWin[k] = this._compWin[k];// 这个位置对方可能赢
      }
    }
    // 计算机相应的悔棋
    this.chessBord[this._compi][this._compj] = 0; // 计算机，已占位置 还原
    this.minusStep(this._compi, this._compj); // 销毁棋子
    for (let k = 0; k < this.count; k++) { // 将可能赢的情况都减1
      if (this.wins[this._compi][this._compj][k]) {
        this.computerWin[k]--;
        this.myWin[k] = this._myWin[this.count];// 这个位置对方可能赢
      }
    }
    this.setState({
      backAble: false
    })
  }

  /**
   * 播放暂停
   * @param {*} e 
   */
  toggelMuisc = () => {
    let music = this.musicElement.current;
    if (music.paused) {
      music.play();
      this.setState({ musicBtnName: '暂停音乐' });
    } else {
      this.setState({ musicBtnName: '播放音乐' });
      music.pause();
      music.load();
    }
  }

  /**
   * 静音放音
   * @param {*} e 
   */
  mute = () => {
    let music = this.musicElement.current;
    if (music.muted) {
      music.muted = false;
      this.setState({ muteBtnName: '静音' });
    } else {
      music.muted = true;
      this.setState({ muteBtnName: '放音' });
    }
  }

  back = () => {
    this.props.history.goBack();
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
      LeftContainer: {
        height: '35.5em',
        // border: '1px solid'
      },
      rightContainer: {
        height: '35.5em',
        // border: '1px solid',
        padding: '1em',
      },
      chess: {
        display: 'block',
        margin: 'auto',
        backgroundColor: '#FFFFE0',
        boxShadow: '-2px -2px 2px #efefef, 5px 5px 5px #b9b9b9',
        cursor: 'pointer',
      },
      messageBox: {
        margin: 'auto',
        width: '450px',
        height: '8%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
      },
      rightBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '1em auto',
      },
      hidden: {
        // visibility: 'hidden',
        display: 'none'

      }
    };

    return (
      <React.Fragment>
        <div style={styles.container}>
          <Card className="card-container">
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Header title='匹配模式' />
                </Col>
              </Row>
              <Row>
                <Col md={7} style={styles.LeftContainer}>
                  <div style={styles.messageBox}></div>
                  <canvas ref={this.chessElement} style={styles.chess} width='450px' height='450px' onClick={this.chessClick}></canvas>
                </Col>
                <Col md={5} style={styles.rightContainer}>
                  <Card style={styles.rightContainer}>
                    <Card.Body>
                      <div style={styles.rightBtn}>
                        <Button onClick={this.startGame}>
                          {this.state.startGameBtn}
                        </Button>
                      </div>
                      <div style={styles.rightBtn}>
                        <Button onClick={this.repentance} disabled={this.state.backAble ? false : true}>悔棋</Button>
                      </div>
                      <div style={styles.rightBtn}>
                        <audio ref={this.musicElement} src={music} loop={true} controls='controls' style={styles.hidden} />
                        <Button onClick={this.toggelMuisc}>
                          {this.state.musicBtnName}
                        </Button>
                      </div>
                      <div style={styles.rightBtn}>
                        <Button onClick={this.mute}>
                          {this.state.muteBtnName}
                        </Button>
                      </div>
                      <div style={styles.rightBtn}>
                        <Button onClick={this.back}>返回</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <MyModal {...this.state.modal}
          handleClose={e => this.setState({ modal: { ...this.state.modal, show: false } })}>
        </MyModal>
      </React.Fragment >
    )
  }
}

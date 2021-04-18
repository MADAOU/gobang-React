import React, { Component } from 'react'
import Header from '../component/header/header';
export default class Chat extends Component {

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

  render() {
    return (
      <div class='Container'>
        <div id='headerContainer'>
          <Header />
        </div>
        <div class='chatContainer'>
          <div class='chatBox'>
            <div id='firendName'>Friend</div>
            <div class='messageContainer'>
              <div class='messageLine'>
                <div class='chatMessage'>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                  <div class='message'>
                    MessageMessageMeMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessage
							</div>
                </div>

              </div>
              <div class='messageLine'>
                <div class='chatMessage others'>
                  <div class='message'>
                    ssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMes
							</div>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                </div>
              </div>
              <div class='messageLine'>
                <div class='chatMessage'>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                  <div class='message'>
                    MessageMessageMeMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessage
							</div>
                </div>

              </div>
              <div class='messageLine'>
                <div class='chatMessage others'>
                  <div class='message'>
                    ssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMes
							</div>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                </div>
              </div>
              <div class='messageLine'>
                <div class='chatMessage'>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                  <div class='message'>
                    MessageMessageMeMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessage
							</div>
                </div>

              </div>
              <div class='messageLine'>
                <div class='chatMessage others'>
                  <div class='message'>
                    ssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMes
							</div>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                </div>
              </div>
              <div class='messageLine'>
                <div class='chatMessage'>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                  <div class='message'>
                    MessageMessageMeMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessage
							</div>
                </div>

              </div>
              <div class='messageLine'>
                <div class='chatMessage others'>
                  <div class='message'>
                    ssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMesssageMessageMessageMessageMessageMessageMes
							</div>
                  <image class='peppleImage' src='./IMG/code.jpg' />
                </div>
              </div>


            </div>
          </div>
        </div>
        <div class='bottonContainer'>
          <botton id='backButton'>Back</botton>
          <input id='messageBox' type='text' />
          <botton id='sendButton'>Send</botton>
        </div>
      </div>
    )
  }
}

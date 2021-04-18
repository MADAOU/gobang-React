import React, { Component } from 'react'
import Header from '../component/header/header';
export default class Online extends Component {

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
      <>
        <div class='Container'>
          <div id='headerContainer'>
            < Header />
          </div>
          <div id='listAndButtonContainer' class='listAndButtonContainer'>
            <div>
              <div class='listContainer'>
                <div class='listHeader' id='listHeader'>List</div>
                <div class='list' id='list'>
                  <div class='person' tabindex='1'></div>
                  <div class='person' tabindex='2'></div>
                  <div class='person' tabindex='3'></div>
                  <div class='person' tabindex='4'></div>
                  <div class='person' tabindex='5'></div>
                  <div class='person' tabindex='6'></div>
                  <div class='person' tabindex='7'></div>
                  <div class='person' tabindex='8'></div>
                  <div class='person' tabindex='9'></div>
                  <div class='person' tabindex='10'></div>
                  <div class='person' tabindex='11'></div>
                  <div class='person' tabindex='12'></div>
                  <div class='person' tabindex='13'></div>
                  <div class='person' tabindex='14'></div>
                  <div class='person' tabindex='15'></div>
                </div>
              </div>
            </div>
            <div>
              <div class='buttonContainer'>
                <div class='button' id='add'>Add</div>
                <div class='button' id='delete'>Delete</div>
                <div class='button' id='comment'>Commnet</div>
                <div class='button' id='sendMessage'>send Message</div>
                <div class='button' id='play'>Play</div>
                <div class='button' id='back'>Back</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

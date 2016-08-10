import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../../Collapse';
import * as style from './style';


const InitiallyOpened = React.createClass({
  getInitialState() {
    return {isOpened: true, keepContent: false};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened, keepContent} = this.state;
    const height = 100;

    return (
      <div>
        <div style={style.config}>
          <label style={style.label}>
            Opened:
            <input style={style.input}
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label style={style.label}>
            Keep content:
            <input style={style.input}
              type="checkbox"
              checked={keepContent}
              onChange={({target: {checked}}) => this.setState({keepContent: checked})} />
          </label>
        </div>
        <Collapse
          style={style.container}
          isOpened={isOpened}
          keepCollapsedContent={keepContent}>
          <div style={{...style.getContent(height), height}} />
        </Collapse>
      </div>
    );
  }
});


export default InitiallyOpened;

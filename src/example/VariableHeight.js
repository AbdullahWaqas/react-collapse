import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '../Collapse';
import * as style from './style';


const VariableHeight = React.createClass({
  getInitialState() {
    return {isOpened: false, keepContent: false, height: 100};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened, keepContent, height} = this.state;

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

          <label style={style.label}>
            Content height:
            <input style={style.input}
              type="range"
              value={height} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({height: value})} />
            {height}
          </label>
        </div>

        <Collapse
          style={style.container}
          isOpened={isOpened}
          keepCollapsedContent={keepContent}>
          <div style={{...style.getContent(height), height}}></div>
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;

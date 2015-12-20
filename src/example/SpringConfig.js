import React from 'react';
import {presets} from 'react-motion';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '../Collapse';
import * as style from './style';


const VariableHeight = React.createClass({
  getInitialState() {
    const preset = 'stiff';
    const [stiffness, damping] = presets[preset];

    return {isOpened: false, height: 100, preset: 'stiff', stiffness, damping};
  },


  shouldComponentUpdate,


  onChangePreset({target: {value: preset}}) {
    const [stiffness, damping] = presets[preset];

    this.setState({preset, stiffness, damping});
  },


  render() {
    const {isOpened, height, preset, stiffness, damping} = this.state;

    return (
      <div>
        <div style={style.config}>
          <label style={style.label}>
            Opened:
            <input style={style.input}
              type="checkbox"
              value={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label style={style.label}>
            Content height:
            <input style={style.input}
              type="range"
              value={height} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({height: value})} />
            {height}
          </label>

          <label style={style.label}>
            Preset:
            <select style={style.input}
              value={preset} step={10} min={0} max={300}
              onChange={this.onChangePreset}>
              {Object.keys(presets).map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>

          <label style={style.label}>
            Stiffness:
            <input style={style.input}
              type="range"
              value={stiffness} step={10} min={0} max={300}
              onChange={({target: {value}}) => this.setState({stiffness: value})} />
            {stiffness}
          </label>

          <label style={style.label}>
            Damping:
            <input style={style.input}
              type="range"
              value={damping} step={5} min={0} max={40}
              onChange={({target: {value}}) => this.setState({damping: value})} />
            {damping}
          </label>
        </div>
        <Collapse isOpened={isOpened} style={style.container} springConfig={[stiffness, damping]}>
          <div style={{...style.getContent(height), height}}></div>
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;

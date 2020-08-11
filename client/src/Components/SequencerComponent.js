import React, {Component} from 'react';
import "./SequencerComponent.css"

let numSteps = 16;


class SequencerContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      savedPattern: []
    }

    this.activateButton1 = this.activateButton1.bind(this);
    this.activateButton2 = this.activateButton2.bind(this);
    this.activateButton3 = this.activateButton3.bind(this);
    this.activateButton4 = this.activateButton4.bind(this);
    this.activateButton5 = this.activateButton5.bind(this);
    this.activateButton6 = this.activateButton6.bind(this);
    this.activateButton7 = this.activateButton7.bind(this);
    this.activateButton8 = this.activateButton8.bind(this);
    this.activateButton9 = this.activateButton9.bind(this);
    this.activateButton10 = this.activateButton10.bind(this);
    this.activateButton11 = this.activateButton11.bind(this);
    this.activateButton12 = this.activateButton12.bind(this);
    this.activateButton13 = this.activateButton13.bind(this);
    this.activateButton14 = this.activateButton14.bind(this);
    this.activateButton15 = this.activateButton15.bind(this);
    this.activateButton16 = this.activateButton16.bind(this);

    this.savePattern = this.savePattern.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  componentDidUpdate(){
    if(this.props.playing === true){
      this.play()
    } else {
      this.pause()
    }
  }

  play(){
    let step = 0;
    if(!this.timer){
      this.timer = setInterval(
        () => {
          this.state.pattern.map( (button, i) => {
            if(this.state.pattern[step] === 1) {
              this.props.playSound();
            }
            return null;
          })
          step++;
          step %= numSteps;
        },
        (60000 / this.props.bpm) / 2
      );
    }
  }

  pause(){
    clearInterval( this.timer );
    this.timer = null;
  }

  activateButton1(){
    let pattern = [...this.state.pattern];
    let button = pattern[0];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[0] = button;
    this.setState({pattern});
  }

  activateButton2(){
    let pattern = [...this.state.pattern];
    let button = pattern[1];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[1] = button;
    this.setState({pattern});
  }

  activateButton3(){
    let pattern = [...this.state.pattern];
    let button = pattern[2];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[2] = button;
    this.setState({pattern});
  }

  activateButton4(){
    let pattern = [...this.state.pattern];
    let button = pattern[3];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[3] = button;
    this.setState({pattern});
  }

  activateButton5(){
    let pattern = [...this.state.pattern];
    let button = pattern[4];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[4] = button;
    this.setState({pattern});
  }

  activateButton6(){
    let pattern = [...this.state.pattern];
    let button = pattern[5];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[5] = button;
    this.setState({pattern});
  }

  activateButton7(){
    let pattern = [...this.state.pattern];
    let button = pattern[6];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[6] = button;
    this.setState({pattern});
  }

  activateButton8(){
    let pattern = [...this.state.pattern];
    let button = pattern[7];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[7] = button;
    this.setState({pattern});
  }

  activateButton9(){
    let pattern = [...this.state.pattern];
    let button = pattern[8];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[8] = button;
    this.setState({pattern});
  }

  activateButton10(){
    let pattern = [...this.state.pattern];
    let button = pattern[9];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[9] = button;
    this.setState({pattern});
  }

  activateButton11(){
    let pattern = [...this.state.pattern];
    let button = pattern[10];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[10] = button;
    this.setState({pattern});
  }

  activateButton12(){
    let pattern = [...this.state.pattern];
    let button = pattern[11];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[11] = button;
    this.setState({pattern});
  }

  activateButton13(){
    let pattern = [...this.state.pattern];
    let button = pattern[12];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[12] = button;
    this.setState({pattern});
  }

  activateButton14(){
    let pattern = [...this.state.pattern];
    let button = pattern[13];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[13] = button;
    this.setState({pattern});
  }

  activateButton15(){
    let pattern = [...this.state.pattern];
    let button = pattern[14];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[14] = button;
    this.setState({pattern});
  }

  activateButton16(){
    let pattern = [...this.state.pattern];
    let button = pattern[15];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[15] = button;
    this.setState({pattern});
  }

  clearAll(){
    let pattern = [...this.state.pattern];
    let clearedPattern = pattern.map((button) => {
      return button = 0;
    })
    this.setState({pattern: clearedPattern});
  }

  savePattern(event){
    let pattern = [...this.state.pattern];
    this.props.save(this.props.name, pattern);
    // let newPattern = {};
    // pattern.forEach((button, index) => {
    //   newPattern[index] = button
    // })
    // this.setState({
    //   savedPattern: newPattern
    //   })
    //   this.props.save(newPattern);
    //   console.log(newPattern);
  }

  // loop over pattern []
    // create key value pair on each iteration
      // where key is a number
        // value is at current iteration of array we're looping over
        // Then send object back to top level
        // .put into new pattern object

  render(){
    // let sequencer = this.state.pattern.map( ( button, i ) => {
    //
    //   return <button onClick={this.activateButton1}>{this.state.pattern[i]}</button>
    //
    // })
    return(
      <div className={this.props.selected ? "show-sequencer" : "hide-sequencer"}>

        <div className="sequencer">
          <button className={this.state.pattern[0] === 1 ? "button-on" : "button-off"} onClick={this.activateButton1}>1</button>
          <button className={this.state.pattern[1] === 1 ? "button-on" : "button-off"} onClick={this.activateButton2}>2</button>
          <button className={this.state.pattern[2] === 1 ? "button-on" : "button-off"} onClick={this.activateButton3}>3</button>
          <button className={this.state.pattern[3] === 1 ? "button-on" : "button-off"} onClick={this.activateButton4}>4</button>
          <button className={this.state.pattern[4] === 1 ? "button-on" : "button-off"} onClick={this.activateButton5}>5</button>
          <button className={this.state.pattern[5] === 1 ? "button-on" : "button-off"} onClick={this.activateButton6}>6</button>
          <button className={this.state.pattern[6] === 1 ? "button-on" : "button-off"} onClick={this.activateButton7}>7</button>
          <button className={this.state.pattern[7] === 1 ? "button-on" : "button-off"} onClick={this.activateButton8}>8</button>
          <button className={this.state.pattern[8] === 1 ? "button-on" : "button-off"} onClick={this.activateButton9}>1</button>
          <button className={this.state.pattern[9] === 1 ? "button-on" : "button-off"} onClick={this.activateButton10}>2</button>
          <button className={this.state.pattern[10] === 1 ? "button-on" : "button-off"} onClick={this.activateButton11}>3</button>
          <button className={this.state.pattern[11] === 1 ? "button-on" : "button-off"} onClick={this.activateButton12}>4</button>
          <button className={this.state.pattern[12] === 1 ? "button-on" : "button-off"} onClick={this.activateButton13}>5</button>
          <button className={this.state.pattern[13] === 1 ? "button-on" : "button-off"} onClick={this.activateButton14}>6</button>
          <button className={this.state.pattern[14] === 1 ? "button-on" : "button-off"} onClick={this.activateButton15}>7</button>
          <button className={this.state.pattern[15] === 1 ? "button-on" : "button-off"} onClick={this.activateButton16}>8</button>

          <button className="save-button" onClick={this.savePattern}>Save</button>

          <button className="clear-button" onClick={this.clearAll}>Clear</button>
          </div>

      </div>
    )
  }
}

export default SequencerContainer;

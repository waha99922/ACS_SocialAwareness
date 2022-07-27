import React from "react"; 


class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
            <p> You have clicked this state {this.state.count}</p>
            <button onClick={()=> this.setState({count: this.state.count + 1})}>
                Click button
            </button>
        </div>
        );
    }
  }

  export default Test;
import React from "react";
import { MyContext } from "../../context-api/MyContext";

class Context extends React.Component{
  constructor(){
    super();
    this.changeColor = this.changeColor.bind(this);
  }
  state = {
    isChange: false
  }

  changeColor(){
    this.setState({isChange: !this.state.isChange})
    console.log(this.state.isChange);
  }

  render(){
    
    return(
      <div>
        <MyContext.Consumer>
          {style =>{
            const {backgroundBlack,colorWhite,colorBlack,backgroundBlue, text} = style;                      
            return (
              <div>
                <h2 style={this.state.isChange
                  ?{background: backgroundBlack, color: colorWhite}
                  :{background: backgroundBlue, color: colorBlack}
                }>
                  {text}
                </h2>
                <button onClick={this.changeColor}>Change</button>
              </div>
            )
          }}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Context;
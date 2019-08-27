import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    bold: null,
    italic: null,
    underline: null,
    color: "black"
  };

  colorSetter = color => this.setState({ color: color });

  styleSetter = style => {
    this.setState({
      [style]: style
    });
    if (this.state[style]) {
      this.setState({ [style]: null });
    }
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          className={this.state[style] ? "change" : ""}
          style={styles[style]}
          key={style}
          onClick={() => this.styleSetter(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.colorSetter(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          className={this.state.color}
          style={{
            fontWeight: this.state.bold,
            fontStyle: this.state.italic,
            textDecorationLine: this.state.underline
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;

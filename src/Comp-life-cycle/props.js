import React, { Component } from "react";

class CompLifeCycle extends Component {
  constructor() {
    // Call the constructor of the parent class (Component)
    super(this.props);

    // Initialize the state with an empty object
    this.state = {};
  }

  render() {   // Log the props to the console   we only use render method inside  class
    console.log(this.props);

    // Render an h1 element with the text "Tabemasu ka"
    return(<div><h1>Tabemasu ka</h1>
    
    <h1>{this.props}</h1>
    </div>)
  }
}

// Export the CompLifeCycle component as the default export
export default CompLifeCycle;


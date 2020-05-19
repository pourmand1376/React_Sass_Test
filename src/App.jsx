import React from "react";
import Login from "./login";
import Navbar from "./navbar";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="card mt-3">
          <div class="card-header">Form</div>
          <div className="card-body">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

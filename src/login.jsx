import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      name: "",
      familyname: "",
      mail: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <div className="text-center">
          <svg
            class="bi bi-bookmarks rotate"
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7 13l5 3V4a2 2 0 00-2-2H4a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10.234z"
              clip-rule="evenodd"
            />
            <path d="M14 14l-1-.6V2a1 1 0 00-1-1H4.268A2 2 0 016 0h6a2 2 0 012 2v12z" />
          </svg>
        </div>

        <div className="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={this.myChangeHandler}
          />
        </div>

        <div className="form-group">
          <label for="familyName">FamilyName</label>
          <input
            id="familyName"
            name="familyname"
            type="text"
            className="form-control"
            onChange={this.myChangeHandler}
          />
        </div>

        <div className="form-group">
          <label for="age">Age</label>
          <input
            id="age"
            name="age"
            type="text"
            className="form-control"
            onChange={this.myChangeHandler}
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.myChangeHandler}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }

  mySubmitHandler = event => {
    console.log(this.state);
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
      return;
    }
    if (this.state.name === "") {
      alert("Name can't be empty.");
      return;
    }
  };

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
}
export default Login;

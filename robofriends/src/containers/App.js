import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";

// STATE-->DYNAMIC; PARENT TO CHILD >> PROPS -->STATIC; CHILD TO PARENT

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? ( //robots.length ==0
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );

    // if (!robots.length) { //robots.length === 0
    //   return <h1>Loading</h1>;
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">RoboFriends</h1>
    //       <SearchBox searchChange={this.onSearchChange} />
    //       <Scroll>
    //         <CardList robots={filteredRobots} />
    //       </Scroll>
    //     </div>
    //   );
    // }
  }
}

export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

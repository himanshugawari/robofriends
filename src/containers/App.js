import React from "react";

import CardList from "../components/cardList/CardList";
import SearchBox from "../components/searchBox/SearchBox";
import Scroll from "../components/scroll/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // robots: robots,
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    // this.setState({ robots: robots })
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="tc f-headline lh-solid mb4">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <CardList robots={this.state.robots} /> */}
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
// use hooks for function for state
// const App = () => {
//   return (
//     <div className="tc">
//       <h1 className="tc f-headline lh-solid mb4">RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

export default App;

import React from "react";

import CardList from "../components/cardList/CardList";
import SearchBox from "../components/searchBox/SearchBox";
import Scroll from "../components/scroll/Scroll";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     // robots: robots,
  //     robots: [],
  //     // searchfield: "",
  //   };
  // }

  componentDidMount() {
    // this.setState({ robots: robots })
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }));
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="tc f-headline lh-solid mb4">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        {/* <CardList robots={this.state.robots} /> */}
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

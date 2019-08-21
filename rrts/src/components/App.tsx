import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map(({ id, title }: Todo) => {
      return <div key={id}>{title}</div>;
    });
  }
  render() {
    return (
      <div onClick={this.onButtonClick}>
        <button>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);

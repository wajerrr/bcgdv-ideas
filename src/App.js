/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tile from './components/tile/tile';
import {
  fetchDeleteTile as fetchDeleteTileAction,
  fetchUpdateTile as fetchUpdateTileAction,
  fetchNewTile as fetchNewTileAction,
  fetchTiles as fetchTilesAction,
} from './reducers/action_creators';
import './app.css';

export class Main extends Component {
  componentDidMount() {
    const { fetchTiles } = this.props;
    fetchTiles();
  }

  render() {
    const {
      ideas, fetchNewTile, fetchDeleteTile, fetchUpdateTile,
    } = this.props;
    return (

      <section className="main">
        <button type="button" onClick={() => fetchNewTile()}>ADD TILE</button>
        <ul>
          { ideas.map(idea => (
            <Tile
              body={idea.body}
              title={idea.title}
              createdDate={idea.created_date}
              id={idea.id}
              deleteTileCallback={fetchDeleteTile}
              updateTileCallback={fetchUpdateTile}
              key={idea.id}
            />
          )) }
        </ul>
      </section>
    );
  }
}

Main.propTypes = {
  ideas: PropTypes.array.isRequired,
  fetchTiles: PropTypes.func.isRequired,
  fetchNewTile: PropTypes.func.isRequired,
  fetchDeleteTile: PropTypes.func.isRequired,
  fetchUpdateTile: PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  const { ideas } = state;
  return { ideas };
}


const App = connect(
  mapStateToProps, {
    fetchDeleteTile: fetchDeleteTileAction,
    fetchUpdateTile: fetchUpdateTileAction,
    fetchNewTile: fetchNewTileAction,
    fetchTiles: fetchTilesAction,
  },
)(Main);


export default App;

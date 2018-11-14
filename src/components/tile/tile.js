import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tile.css';

class Tile extends Component {
  constructor(props, context) {
    super(props, context);
    const { title, body } = props;
    this.state = {
      title: title || '',
      body: body || '',
    };
  }


  componentDidMount() {
    const { title, id } = this.props;

    if (title === undefined) {
      document.getElementById(`${id}-input`).focus();
    }
  }

  componentWillReceiveProps(newProps) {
    const { title, body } = this.state;

    this.state = {
      title: newProps.title || title,
      body: newProps.body || body,
    };
  }

  updateTile(id, body, title) {
    const { updateTileCallback } = this.props;
    updateTileCallback(id, body, title);
  }

  deleteTile(id) {
    const { deleteTileCallback } = this.props;
    deleteTileCallback(id);
  }


  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const { id, createdDate } = this.props;
    const { title, body } = this.state;

    return (
      <li className="idea-tile">
        <input
          id={`${id}-input`}
          onBlur={() => this.updateTile(id, body, title)}
          value={title}
          onChange={e => this.handleTitleChange(e)}
        />
        <input
          onBlur={() => this.updateTile(id, body, title)}
          onChange={e => this.handleBodyChange(e)}
          maxLength="140"
          value={body}
        />
        <p className="tile-id">
id:
          {' '}
          {id.includes('-temp-local-id') ? '' : id}
        </p>
        <p className="tile-create-date">
created_date:
          {' '}
          {createdDate}
        </p>
        <button type="button" className="delete-button" onClick={() => this.deleteTile(id)}>Delete</button>
      </li>
    );
  }
}

Tile.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateTileCallback: PropTypes.func.isRequired,
  deleteTileCallback: PropTypes.func.isRequired,

};

export default Tile;

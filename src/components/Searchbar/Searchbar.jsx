import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = { name: '' };

  handleChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({ name: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Please input name for search');
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
              <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={css.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

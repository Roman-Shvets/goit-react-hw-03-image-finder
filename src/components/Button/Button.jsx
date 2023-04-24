import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  handlePagination = evt => {
    this.props.pageSubmit();
  };

  render() {
    const { pictures } = this.props.toVisible;
    return (
      <>
        {pictures.length > 0 ? (
          <div className={css.ButtonContainer}>
            <button
              className={css.ButtonLoad}
              type="button"
              onClick={this.handlePagination}
            >
              Load more
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

export default Button;

Button.propTypes = {
  toVisible: PropTypes.shape({
    name: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }),
  pageSubmit: PropTypes.func.isRequired,
};

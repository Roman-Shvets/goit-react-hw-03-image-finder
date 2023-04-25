import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleCloseBackdrop = e => {
    const { onClose } = this.props;
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  render() {
    const { pathImage } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleCloseBackdrop}>
        <div className={css.Modal}>
          <img src={pathImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pathImage: PropTypes.string.isRequired,
};

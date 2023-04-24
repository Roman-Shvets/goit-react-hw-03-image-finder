import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  handleKeuDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeuDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeuDown);
  }

  render() {
    const { onClose } = this.props;
    const { pathImage } = this.props;
    return (
      <div className={css.Overlay} onClick={onClose}>
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

import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    pathImage: '',
  };

  openModal = event => {
    this.setState({ isModalOpen: true, pathImage: event.target.src });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { pictures } = this.props.toRender;
    const { isModalOpen } = this.state;

    return (
      <>
        {pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li
            key={id}
            className={css.ImageGalleryItem}
            onClick={this.openModal}
          >
            <img
              className={css.ImageGalleryItemImage}
              src={webformatURL}
              alt={tags}
            />
          </li>
        ))}
        {isModalOpen && (
          <Modal onClose={this.closeModal} pathImage={this.state.pathImage} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  toRender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }),
};

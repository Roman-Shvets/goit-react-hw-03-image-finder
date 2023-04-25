import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ toRender }) => {
  const { pictures } = toRender;

  return (
    <ul className={css.ImageGallery}>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  toRender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }),
};

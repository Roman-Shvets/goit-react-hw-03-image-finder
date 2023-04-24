import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ toRender }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem toRender={toRender} />
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

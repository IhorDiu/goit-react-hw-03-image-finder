import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <Gallery>
      {gallery.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImage={largeImageURL}
            previewImage={webformatURL}
            tags={tags}
          />
        );
      })}
    </Gallery>
  );
};

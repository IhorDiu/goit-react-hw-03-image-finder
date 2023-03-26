
import {GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({largeImage, previewImage, tags}) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={previewImage} alt={tags} />
          </GalleryItem>
  );
};

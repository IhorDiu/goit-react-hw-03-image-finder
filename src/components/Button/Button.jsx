// При натисканні на кнопку < Load more > повинна довантажуватись
// наступна порція зображень і рендеритися разом із попередніми.
// Кнопка повинна рендеритися лише тоді, коли є якісь завантажені
// зображення. Якщо масив зображень порожній, кнопка не рендериться.

import { LoadMoreBtn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={loadMore}>
      Load more
    </LoadMoreBtn>
  );
};

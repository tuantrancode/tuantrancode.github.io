
import React from 'react';
import MasonryComponent  from './MasonryComponent';
import styles from './masonry-gallery.module.css';

export const metadata = {
  title: "Masonry Gallery",
  description: "An example of masonry effect similar to Pinterest",
};

export default function MasonryGallery() {

  return (
    <>
      {/* <!-- USING GRID AND CALCULATING ROW SPAN OF EACH IMAGE TO MAKE MASONRY GALLERY --> */}
      <MasonryComponent className={styles.grid} id="masonryGallery"/>
    </>
  );
}
import React from 'react';
import s from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);
const Gallery = () => {
  return (
    <div className={cx('Component')}>
      <div className={cx('Offset')}>
        <h1>GALLERY</h1>
      </div>
      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/image162-mobile.png"/>
          <img
            width={700}
            height={700}
            loading='lazy' className={cx('Image')}
            srcSet='/images/image162.png, /images/image162@2x.png 2x'
            alt='image'/>
        </picture>

        <picture>
          <source srcSet='/images/img.webp' type='image/webp'/>
          <img loading='lazy' className={cx('Image')} src='/images/img.png' alt='image'/>
        </picture>

        <img loading='lazy'
             className={cx('Image')} src='/images/mg.png' alt='image 2'/>
      </div>

    </div>
  );
};

export default Gallery;
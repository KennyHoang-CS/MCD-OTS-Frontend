import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Image({ src, alt }) {
    return (
        <div>
        <LazyLoadImage
            alt={alt}
            effect="blur"
            height="100"
            width="100"
            src={src}
        />
    </div>
    )
};

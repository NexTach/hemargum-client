import React from 'react';

const ArrowSvg: React.FC = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_142_45)">
        <circle cx="18" cy="18" r="18" transform="matrix(-1 0 0 1 40 4)" fill="#FAFAFA" />
        <circle cx="18" cy="18" r="17.5" transform="matrix(-1 0 0 1 40 4)" stroke="#44BE76" />
      </g>
      <path
        d="M30.7071 21.2929C31.0976 21.6834 31.0976 22.3166 30.7071 22.7071L24.3431 29.0711C23.9526 29.4616 23.3195 29.4616 22.9289 29.0711C22.5384 28.6805 22.5384 28.0474 22.9289 27.6569L28.5858 22L22.9289 16.3431C22.5384 15.9526 22.5384 15.3195 22.9289 14.9289C23.3195 14.5384 23.9526 14.5384 24.3431 14.9289L30.7071 21.2929ZM14 21L30 21L30 23L14 23L14 21Z"
        fill="#44BE76"
      />
      <defs>
        <filter
          id="filter0_d_142_45"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_142_45" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_142_45" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowSvg;

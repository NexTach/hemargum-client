import React from 'react';

const CardArrowSignSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
      <g filter="url(#filter0_d_117_45)">
        <circle cx="22" cy="22" r="18" fill="#FAFAFA" />
      </g>
      <path
        d="M13.2929 21.2929C12.9024 21.6834 12.9024 22.3166 13.2929 22.7071L19.6569 29.0711C20.0474 29.4616 20.6805 29.4616 21.0711 29.0711C21.4616 28.6805 21.4616 28.0474 21.0711 27.6569L15.4142 22L21.0711 16.3431C21.4616 15.9526 21.4616 15.3195 21.0711 14.9289C20.6805 14.5384 20.0474 14.5384 19.6569 14.9289L13.2929 21.2929ZM30 21L14 21L14 23L30 23L30 21Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_117_45"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_45" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_117_45" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
export default CardArrowSignSvg;

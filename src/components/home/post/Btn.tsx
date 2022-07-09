import React from 'react';
import { FilmIcon, VolumeUpIcon } from '@heroicons/react/outline';

function CartBtn({ value }: { value: string }) {
  return (
    <div
      className=" absolute right-[20%] top-10 z-50  opacity-0  flex  -translate-y-7 -translate-x-8 gap-4 transition-all  duration-500
   group-hover:opacity-80 sm:-translate-x-3 md:right-0 md:top-auto md:-translate-x-8 md:group-hover:opacity-100"
    >
      <a
        target="_blank"
        href={`https://getyarn.io/yarn-find?text=${value}`}
        className="cart-btn "
        rel="noreferrer"
      >
        <FilmIcon className="w-3/5 transition-all  duration-200" />
      </a>

      <a
        href={`https://fa.forvo.com/word/${value}/#en`}
        target="_blank"
        className="cart-btn"
        rel="noreferrer"
      >
        <VolumeUpIcon className="w-3/5 transition-all duration-200 " />
      </a>

      {/* <div className="cart-btn">
        <StarIcon className=" w-3/5 transition-all  duration-200" />
      </div> */}
    </div>
  );
}

export default CartBtn;

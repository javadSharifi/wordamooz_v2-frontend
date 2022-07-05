import React from 'react'

function CartCategory({ img, text }: { img: number, text: string}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="center   cart h-72 w-full flex-col gap-2 overflow-hidden "
    >
      <img
        className="h-4/5 w-11/12 rounded-2xl object-cover "
        src={`https://picsum.photos/id/${img}/400/200`}
        alt="img"
      />
      <h1 className="center text-lg font-bold ">{text}</h1>
    </div>
  );
}

export default CartCategory
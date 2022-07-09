import Dropdown from "shared/dropdown/Dropdown";
import { ICartPost } from "interfaces";
import CartBtn from "./Btn";
import Action from "./Action";



function CartPost({ id: postId, body, word, meaning, categoryId }: ICartPost) {


  return (
    <div
      data-aos="zoom-in-up"
      className="  cart group h-fit  "
    >
      <img
        className=" relative aspect-square h-52 w-full rounded-3xl  object-cover  object-center p-2    "
        loading="lazy"
        src={`https://picsum.photos/id/${postId}/534/200`}
        alt="avatar"
      />

      <Action categoryId={categoryId} postId={postId} />

      <CartBtn value={word} />

      <div className=" absolute inline-block translate-x-6 -translate-y-9 cursor-pointer items-center rounded-xl   bg-slate-50  px-6 py-3 shadow-md shadow-slate-200/70 dark:bg-[#272727db] dark:shadow-slate-900">
        <h1 className="mx-3 inline-block text-lg font-semibold text-gray-500  dark:text-gray-300 ">
          {word}
        </h1>
      </div>

      <div className="px-6 py-4  font-bold text-gray-500/90">
        <p className="py-2 text-lg selection:bg-sky-300 selection:text-white">
          {meaning}
        </p>
        <p className=" whitespace-pre-wrap break-words   py-2 selection:bg-sky-300 selection:text-white">
          {body}
        </p>
      </div>
    </div>
  );
}

export default CartPost;

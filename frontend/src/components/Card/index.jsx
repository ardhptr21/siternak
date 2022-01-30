import React from 'react';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

const Card = ({ product, isAdmin = false, onDeleteEvent = () => {} }) => {
  return (
    <div className="flex flex-col items-center justify-center w-min">
      <Link
        to={`/detail-product/${product?.slug}`}
        className="w-48 bg-white shadow-lg cursor-pointer h-80 rounded-xl __montserat-text"
      >
        <img
          src={product?.image || '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg'}
          alt="gambar sapi slurd"
          className="object-cover w-48 h-44 rounded-t-xl"
        />
        <div className="p-3">
          <p className="text-sm font-semibold text-textDefault __text-elipsis-one-line">{product?.name || 'no data'}</p>
          <p className="mt-1 text-xs text-subtitle __text-elipsis-two-line">{product?.description || 'no data'}</p>
          {product?.discount_price && (
            <div className="flex items-center mt-2">
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-semibold leading-none text-red-100 bg-red-500 rounded-full">
                {((product?.price - product?.discount) * 100) / product?.price + '%'}
              </span>
              <p className="text-xs line-through text-subtitle">
                Rp {Intl.NumberFormat('en-US').format(product?.price)}
              </p>
            </div>
          )}
          <p className="text-textDefault text-sm font-semibold mt-1.5">
            Rp {Intl.NumberFormat('en-US').format(product?.price)}
          </p>
        </div>
      </Link>
      {isAdmin && (
        <div className="flex items-center w-full py-2 mt-5 border-2 rounded-lg justify-evenly">
          <FaEdit className="text-yellow-500 cursor-pointer" />
          <BsTrash className="text-red-500 cursor-pointer" onClick={onDeleteEvent} />
        </div>
      )}
    </div>
  );
};

export default Card;

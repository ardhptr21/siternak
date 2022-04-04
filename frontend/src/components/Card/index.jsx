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
          <p className="text-base text-textDefault __text-elipsis-one-line">{product?.name || 'no data'}</p>
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
          <div className="w-full h-1 my-2 bg-gray-200 inner-shadow"></div>
          <small className="inline-block text-xs text-textDefault">
            Terjual <span className="font-bold text-warning">{product?.total_sold || 0}</span>
          </small>
        </div>
      </Link>
      {isAdmin && (
        <div className="flex items-center w-full py-2 mt-5 border-2 rounded-lg justify-evenly">
          <Link to="/user-profile/tambah-produk" state={{ product }}>
            <FaEdit className="text-yellow-500 cursor-pointer" />
          </Link>
          <BsTrash className="text-red-500 cursor-pointer" onClick={onDeleteEvent} />
        </div>
      )}
    </div>
  );
};

export default Card;

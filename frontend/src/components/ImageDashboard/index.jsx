import { FaUserEdit } from 'react-icons/fa';

const ImageDashboard = ({ isEdit, image, handleChange, name }) => {
  return (
    <>
      <label htmlFor="image" className={`relative${isEdit && ' cursor-pointer'}`}>
        <img
          src={image || '/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png'}
          alt="profile_pict"
          className="object-cover w-48 h-48 border rounded-md"
        />
        {isEdit && (
          <div className="absolute top-0 left-0 flex items-center justify-center w-48 h-48 bg-black rounded opacity-80">
            <FaUserEdit className="w-32 h-32 text-white" />
          </div>
        )}
      </label>
      {isEdit && (
        <small className="inline-block w-48 mt-2 text-xs text-gray-400">
          *Otomatis diperbarui ketika anda memilih foto baru
        </small>
      )}
      {isEdit && <input type="file" name={name} className="hidden" id="image" required onChange={handleChange} />}
    </>
  );
};

export default ImageDashboard;

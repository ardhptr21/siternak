const DashboardData = ({ value, isEdit, onChange, name, title, type = 'text', isTextarea = false }) => {
  return (
    <>
      <div>{title}</div>
      {isEdit ? (
        <>
          {isTextarea ? (
            <textarea
              value={value}
              type={type}
              onChange={onChange}
              name={name}
              className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      mt-1 mb-1
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
              rows={8}
              style={{ resize: 'none' }}
            />
          ) : (
            <input
              value={value}
              type={type}
              onChange={onChange}
              name={name}
              className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      mt-1 mb-1
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
            />
          )}
        </>
      ) : (
        <div>{value}</div>
      )}
    </>
  );
};

export default DashboardData;

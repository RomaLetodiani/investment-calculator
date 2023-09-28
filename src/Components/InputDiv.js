import React from 'react';

const InputDiv = ({ title, setVal, val, objKey }) => {
  const onChangeHandler = (e) => {
    setVal((prev) => {
      console.log(prev);
      return {
        ...prev,
        [objKey]: +e.target.value,
      };
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="ml-5 text-xs">{title}</label>
      <input
        min={1}
        onChange={onChangeHandler}
        value={val[objKey] || ''}
        type="number"
        className="w-full outline-none rounded-full bg-transparent border-2 px-5 p-2 text-xl"
      />
    </div>
  );
};

export default InputDiv;

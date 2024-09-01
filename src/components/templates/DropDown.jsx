

const DropDown = ({ title,options,func }) => {
  return (
    <div className="select relative ">
      <select
        defaultValue="0"
        name="format"
        onChange={func}
        id="format"
        className="absolute top-[-8%] left-[5%] w-full h-full"
      >
        <option value="0"  disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

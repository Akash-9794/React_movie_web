

const DropDown = ({ title,options,func }) => {
  return (
    <div className="select pl-8">
      <select
        defaultValue="0"
        name="format"
        onChange={func}
        id="format"
        className="text-white "
      >
        <option value="0" disabled>
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

const DropDown = ({ title, options, func }) => {
  return (
    <div className="select  ">
      <select defaultValue="0" name="format" onChange={func} id="format"className="w-5 " >
        <option value="0" disabled className="text-blue-600"  >
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o} className="text-blue-600" >
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

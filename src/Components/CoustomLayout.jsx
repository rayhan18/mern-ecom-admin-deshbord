

const CoustomLayout = (props) => {
    // eslint-disable-next-line react/prop-types
    const {type,label, i_id, i_class,name,val,onCng,onBl} =props;
  return (
    <div className="form-floating mb-3">
      <input type={type} 
       className ={`form-control ${i_class}`}
       id={i_id}
       placeholder={label}
       name={name}
       value={val}
       onChange={onCng}
       onBlur={onBl}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CoustomLayout

import React, {useId} from 'react'


const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props}, ref){

  const id = useId();

  return (
    <div className='w-full'>
      {label && <label className="block text-gray-700" htmlFor={id}>{label}</label>}
    <input type={type} className={`w-full mt-1 p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 ${className}`} 
    id={id} ref={ref} {...props} />
    </div>
  )
})

export default Input;

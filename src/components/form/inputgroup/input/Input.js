import './Input.css';

function Input(props) {

  // const handleChange = (event) => {
  // props.parentCallback(event.target.value);
  // event.preventDefault();
  // }
  
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input type={props.type} id={props.label} />
    </p>
  )
}

export default Input;

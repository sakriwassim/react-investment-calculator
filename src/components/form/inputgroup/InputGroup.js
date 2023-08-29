import './InputGroup.css';
import Input from './input/Input';

function InputGroup(props) {

 return (
  <div className="input-group">

   <Input htmlFor={props.htmlFor1} label={props.label1} id={props.id1} type={props.type1} />
   
   <Input htmlFor={props.htmlFor2} label={props.label2} id={props.id2} type={props.type2} />

  </div>
 )
}

export default InputGroup;

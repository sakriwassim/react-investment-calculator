import './Form.css';
import InputGroup from './inputgroup/InputGroup';
import Actions from './actions/Actions'


function Form(props) {

const submitHandler = (event) => {
 event.preventDefault();
 console.log('SUBMIT')
}

const resetHandler = () => {
console.log('RESET');
}


 return (
  <form onSubmit={submitHandler} className="form">
   <InputGroup 
   className="input-group" 
   htmlFor1={props.htmlFor1} 
   htmlFor2={props.htmlFor2}
   label1={props.label1}
   label2={props.label2}
   id1={props.id1}
   id2={props.id2}
   type1={props.type1}
   type2={props.type2} />

   <InputGroup 
   className="input-group" 
   htmlFor1={props.htmlFor3} 
   htmlFor2={props.htmlFor4}
   label1={props.label3}
   label2={props.label4}
   id1={props.id3}
   id2={props.id4}
   type1={props.type3}
   type2={props.type4} />
   
   <Actions className="actions" onClickreset={resetHandler} ></Actions>
  
  </form>
 )
}

export default Form;

import './Actions.css';

function Actions(props) {

 
 return (
  <p className="actions">
   <button type="reset" className="buttonAlt" onClick={props.onClickreset}>
    Reset
   </button>
   <button type="submit" className="button">
    Calculate
   </button>
  </p>
 )
}

export default Actions;

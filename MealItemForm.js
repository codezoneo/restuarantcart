import { useRef  , useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/input';

const MealItemForm = (props)=>{
    const [amountIsValid, setAmountIsValid] = useState();
    const amountInputRef = useRef()
    const submitHandler = event=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length===0 || 
        enteredAmountNumber<1 || 
        enteredAmountNumber>5){
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber);

    }

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+Add</button>
        {!amountIsValid && <p>please enter a vaild amount</p>}
      </form>
    );
}
export default MealItemForm;
import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsvalid, setAmountIsValid]=useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber= +enteredAmount;

    if(enteredAmount.trim().length===0 ||
    enteredAmount<1 ||
     enteredAmount>5){
      setAmountIsValid(false);
      return ;
     }
     props.onAddToCart(enteredAmountNumber);
  };
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
      <button>+ Add</button>
      {!amountIsvalid && <p>please provide valid input</p>}
    </form>
  );
};
export default MealItemForm;

export default (expenses)=>{
    const total=expenses.reduce((preValue,currentValue)=>
            preValue+currentValue.amount,0);
        return total;
};
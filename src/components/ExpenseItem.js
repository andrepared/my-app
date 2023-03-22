// component is just a javascript function
// must have one root element per return statement.
// Root element of one JSX should only have one return statement
function ExpenseItem() {
  return (
    <div>
      <div>March 21st 2023</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

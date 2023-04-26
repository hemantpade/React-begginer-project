import ExpenseItem from "./components/ExpenseItem";


function App() 
{
        const expense=[
        {
          id:'e1',
          title:'toilet-paper',
          amount:294.6,
          date:new Date(2023 ,05,14)
        },
        {
          id:'e2',
          title:'new tv',
          amount:294.6,
          date:new Date(2023 ,05,14)
        },
        {
          id:'e3',
          title:'Car Insurance',
          amount:294.6,
          date:new Date(2023 ,05,14)
        },
        {
          id:'e4',
          title:'toilet-paper',
          amount:294.6,
          date:new Date(2023 ,05,14),
        },
      ];
     
      return (
      <div>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} ></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} ></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} ></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} ></ExpenseItem>
    </div>
  );
}
export default App;

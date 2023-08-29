import Form from './components/form/Form';
import Header from './components/header/Header';
import Result from './components/result/Result';

function App() {


  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header className="header" />
      <Form htmlFor1="current-savings"
        label1="Current Savings ($)"
        id1="current-savings"
        type="number"

        htmlFor2="yearly-contribution"
        label2="Yearly Savings ($)"
        id2="yearly-contribution"
        type2="number"

        htmlFor3="expected-return"
        label3="Expected Interest (%, per year)"
        id3="expected-return"
        type3="number"

        htmlFor4="duration"
        label4="Investment Duration (years)"
        id4="duration"
        type4="number"

        className="form"/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Result className="result"/>
    </div>
  );
}

export default App;

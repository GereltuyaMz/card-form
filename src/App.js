import './App.css';

function App() {
  return (
    <div className="flex h-screen items-center relative">
      <img src="/images/bg-main-desktop.png" alt="background-gradient" />
      <img src="/images/bg-card-front.png" alt="front" className='absolute top-20 left-32 shadow-2xl' />
      <img src="/images/bg-card-back.png" alt="back" className='absolute bottom-32 left-60 shadow-2xl' />
      <div className="card-form mx-auto flex justify-end w-full">
        <div className='card'>
          <form>
            <div className='card-name mb-5'>
              <p>cardholder name</p>
              <input type="text" placeholder='e.g. Jane Appleseed' className="w-6/12" required />
            </div>
            <div className='card-number mb-5'>
              <p>card number</p>
              <input type="number" placeholder='e.g. 1234 5678 9123 0000' className="w-6/12" required />
            </div>
            <div className="date-cvc mb-5 flex w-1/2 flex-nowrap">
              <div className="card-date w-4/5" >
                <p>exp. date (mm/yy)</p>
                <input type="number" placeholder='MM' className="w-4/12 mr-3" required />
                <input type="number" placeholder='YY' className="w-4/12" required />
              </div>
              <div className="card-cvc">
                <p>cvc</p>
                <input type="number" placeholder='e.g. 123' className='w-full' required />
              </div>
            </div>
            <button className='w-1/2 py-2 rounded-lg bg-dark-violet text-white'>Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

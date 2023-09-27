import { Footer } from './Components/Global';

function App() {
  return (
    <div className="w-full p-5 overflow-hidden min-h-screen min-w-[280px] bg-[#1FA2A5] text-[#fff] flex justify-center items-center">
      <div className="max-w-[850px] flex flex-col items-center justify-center">
        <header className="text-center">
          <h1 className="text-3xl">Investment Calculator</h1>
        </header>
        <form className="flex flex-col gap-5 my-10 max-w-[335px] md:max-w-full w-full bg-[#009192] rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="ml-5 text-xs">CURRENT SAVINGS ($)</label>
                <input
                  type="number"
                  className="outline-none rounded-full bg-transparent border-2 px-5 p-2 text-xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="ml-5 text-xs">
                  EXPECTED INTEREST (%, PER YEAR)
                </label>
                <input
                  type="number"
                  className="outline-none rounded-full bg-transparent border-2 px-5 p-2 text-xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="ml-5 text-xs">YEARLY SAVINGS ($)</label>
                <input
                  type="number"
                  className="outline-none rounded-full bg-transparent border-2 px-5 p-2 text-xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="ml-5 text-xs">
                  INVESTMENT DURATION (YEARS)
                </label>
                <input
                  type="number"
                  className="outline-none rounded-full bg-transparent border-2 px-5 p-2 text-xl"
                />
              </div>
            </div>
          </div>
          <div className="md:self-end self-center flex gap-5">
            <button className=" rounded-lg outline-none border-none py-3 px-5 text-center bg-[#0e535556]">
              Reset
            </button>
            <button className=" rounded-lg outline-none border-none py-3 px-5 text-center bg-[#156365]">
              Calculate
            </button>
          </div>
        </form>
        <Footer>
          <div>
            <div>
              <p>year</p>
              <ul className="years">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
              </ul>
            </div>
            <div>
              <p>Total Savings</p>
              <ul>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
              </ul>
            </div>
            <div>
              <p>Interest (Year)</p>
              <ul>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
              </ul>
            </div>
            <div>
              <p>Total Interest</p>
              <ul>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
              </ul>
            </div>
            <div>
              <p>Invested Capital</p>
              <ul>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
                <li>$11700</li>
              </ul>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default App;

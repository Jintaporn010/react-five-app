import React, { useState } from "react";
import calculator from "../../src/assets/cal.jpeg";

function SumNumber() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('0.00');

  const handleCancelClick = () => {
    setNum1('');
    setNum2('');
    setSum('0.00');
  };

  const handleSumNumberClick = () => {
    if (num1 === '' || num2 === '') {
      alert('กรุณาป้อนตัวเลขให้ครบทั้งสองช่อง');
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert('กรุณาป้อนเฉพาะตัวเลขเท่านั้น');
      return;
    }
    const result = parseFloat(num1) + parseFloat(num2);
    setSum(result.toFixed(2));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-400">
        <div className="flex flex-col items-center justify-center w-2/4 bg-yellow-200 shadow-lg rounded-md py-10 px-20">
          <span className="text-2xl font-bold text-amber-950">
            คำนวณผลรวมตัวเลข
          </span>
          <img
            src={calculator}
            alt="รูปเครื่องคิดเลข"
            className="w-2/5 mt-4 rounded-md shadow-md"
          />
          <br />
          <div className="text-1xl font-bold text-yellow-90 w-full text-left">
            ป้อนตัวเลขตัวที่ 1
          </div>
          <div className="text-yellow-900 w-full text-left mt-4">
            <input
              type="text"
              inputMode="decimal"
              pattern="[0-9]*"
              onChange={(e) => setNum1(e.target.value)}
              value={num1}
              className="border w-full bg-amber-100 border-black rounded-md"
            />
          </div>
          <br />
          <div className="text-1xl font-bold text-yellow-90 w-full text-left">
            ป้อนตัวเลขตัวที่ 2
          </div>
          <div className="text-yellow-900 w-full text-left mt-4">
            <input
              type="text"
              inputMode="decimal"
              pattern="[0-9]*"
              onChange={(e) => setNum2(e.target.value)}
              value={num2}
              className="border w-full bg-amber-100 border-black rounded-md"
            />
          </div>
          <div className="flex mt-6 gap-5">
            <button
              onClick={handleSumNumberClick}
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer"
            >
              คำนวณ
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md cursor-pointer"
            >
              ยกเลิก
            </button>
          </div>
          <div className="mt-5" />
          <span className="text-2xl font-bold">ผลรวมคือ</span>
          <span className="text-4xl font-bold text-red-900">{sum}</span>
        </div>
      </div>
    </>
  );
}

export default SumNumber;

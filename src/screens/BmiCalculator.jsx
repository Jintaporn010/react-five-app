import React, { useState } from "react";
import calculator from '../../src/assets/bmi.jpg';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('0.00');
  const [bmiResult, setBmiResult] = useState('');
  const [gender, setGender] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('กรุณาป้อนข้อมูลให้ครบ');
      return;
    }

    const h = parseFloat(height.replace(',', '.'));
    const w = parseFloat(weight.replace(',', '.'));

    if (isNaN(h) || isNaN(w) || h === 0) {
      alert('กรุณาป้อนตัวเลขที่ถูกต้อง');
      return;
    }

    const result = w / (h * h);
    const bmiValue = result.toFixed(2);
    setBmi(bmiValue);

    let interpretation = '';
    if (result < 18.5) {
      interpretation = 'น้ำหนักน้อย / ผอม';
    } else if (result < 23) {
      interpretation = 'น้ำหนักปกติ';
    } else if (result < 25) {
      interpretation = 'น้ำหนักเกิน';
    } else if (result < 30) {
      interpretation = 'โรคอ้วนระดับ 1';
    } else {
      interpretation = 'โรคอ้วนระดับ 2';
    }

    setBmiResult(interpretation);
  };

  const clearForm = () => {
    setWeight('');
    setHeight('');
    setBmi('0.00');
    setBmiResult('');
    setGender('');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-amber-200">
        <div className="flex flex-col items-center justify-center w-2/4 bg-amber-300 shadow-lg rounded-md py-10 px-10">
          <span className="text-2xl font-bold text-amber-950">
            คำนวณ BMI
          </span>
          <img src={calculator} alt="รูปเครื่องคิดเลข" className="w-2/5 mt-4 rounded-md shadow-md" />
          <br />

          <div className="flex flex-col items-center w-full mt-4">
            <label className="text-1xl font-bold text-yellow-900 w-full text-left">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border w-full bg-amber-100 border-black rounded-md mt-2"
            />
          </div>

          <div className="flex flex-col items-center w-full mt-4">
            <label className="text-1xl font-bold text-yellow-900 w-full text-left">ป้อนส่วนสูง (เมตร)</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border w-full bg-amber-100 border-black rounded-md mt-2"
            />
          </div>

          {/* เลือกเพศ */}
          <div className="flex justify-center items-center gap-8 mt-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-yellow-900 font-medium">ชาย</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
                className="form-radio text-pink-600"
              />
              <span className="ml-2 text-yellow-900 font-medium">หญิง</span>
            </label>
          </div>

          <div className='flex mt-6 gap-5'>
            <button
              className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer'
              onClick={calculateBMI}
            >
              คำนวณ
            </button>
            <button
              className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md cursor-pointer'
              onClick={clearForm}
            >
              ยกเลิก
            </button>
          </div>

          <div className="mt-6 text-xl font-bold text-yellow-900">
            ค่า BMI ของคุณคือ {bmi}
          </div>

          {bmiResult && (
            <div className="text-lg font-medium text-yellow-900 mt-2">
              ผลวิเคราะห์: {bmiResult}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BmiCalculator;

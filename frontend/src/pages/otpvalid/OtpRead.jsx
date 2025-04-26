import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const OTP_DIGITS = 4; // You can change this number easily later

export default function OTP() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const [otp, setOtp] = useState(new Array(OTP_DIGITS).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is filled
    if (value && index < OTP_DIGITS - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div
      className={`p-4 transition-all duration-300 text-center ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      <h1 className="font-bold text-xl text-blue-600 mb-4">OTP Validation</h1>

      <div className="flex justify-center">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="border border-gray-400 rounded text-center w-16 h-10 text-xl mx-2"
          />
        ))}
      </div>
    </div>
  );
}

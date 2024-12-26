import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [unitType, setUnitType] = useState("length");
  const [unitFrom, setUnitFrom] = useState("meters");
  const [unitTo, setUnitTo] = useState("kilometers");

  const units = {
    length: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
    weight: { kilograms: 1, grams: 1000, pounds: 2.20462, ounces: 35.274 },
  };

  const handleConversion = () => {
    const conversionRate = units[unitType][unitTo] / units[unitType][unitFrom];
    setOutputValue((inputValue * conversionRate).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Unit Converter</h2>
      <label className="block mb-2 text-black hover:text-gray-600">
        Select Unit Type:
      </label>
      <select
        className="block w-full p-2 border rounded-md mb-4"
        value={unitType}
        onChange={(e) => {
          setUnitType(e.target.value);
          setUnitFrom(Object.keys(units[e.target.value])[0]);
          setUnitTo(Object.keys(units[e.target.value])[1]);
        }}
      >
        <option value="length">Length</option>
        <option value="weight">Weight</option>
      </select>

      <div className="mb-4">
        <label className="block mb-2 text-black hover:text-gray-600">
          Input Value:
        </label>
        <input
          type="number"
          className="block w-full p-2 border rounded-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2 text-black hover:text-gray-600">
            From:
          </label>
          <select
            className="block w-full p-2 border rounded-md"
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
          >
            {Object.keys(units[unitType]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-black hover:text-gray-600">
            To:
          </label>
          <select
            className="block w-full p-2 border rounded-md"
            value={unitTo}
            onChange={(e) => setUnitTo(e.target.value)}
          >
            {Object.keys(units[unitType]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-500"
        onClick={handleConversion}
      >
        Convert
      </button>

      {outputValue && (
        <div className="mt-4 p-2 bg-gray-100 border rounded-md">
          <p className="text-lg font-semibold">
            Result: {outputValue} {unitTo}
          </p>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/azman08/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0A66C2" }}
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/azman08"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
        >
          <FaGithub size={30} />
        </a>
      </div>
      <h2 className="text-center mt-3 text-xl font-semibold">
        Created by{" "}
        <span>
          {" "}
          <a href="https://github.com/azman08"> Azman Ali🥷</a>
        </span>
      </h2>
    </div>
  );
};

export default UnitConverter;

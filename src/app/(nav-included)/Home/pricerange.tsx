import React, { useState, useEffect } from "react";

const PriceRangeSlider = ({ onFilterSelect } : any) => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(40);

  const handleMinChange = (event : any) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
    onFilterSelect({ type: "priceRange", value: `${value}-${maxValue}` });
  };

  const handleMaxChange = (event: any) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
    onFilterSelect({ type: "priceRange", value: `${minValue}-${value}` });
  };

  const handleSliderChange = (event: any) => {
    const { id, value } = event.target;
    if (id === "fromSlider") {
      setMinValue(value);
      onFilterSelect({ type: "priceRange", value: `${value}-${maxValue}` });
    } else {
      setMaxValue(value);
      onFilterSelect({ type: "priceRange", value: `${minValue}-${value}` });
    }
  };

  useEffect(() => {
    onFilterSelect({ type: "priceRange", value: `${minValue}-${maxValue}` });
  }, [minValue, maxValue, onFilterSelect]);

  return (
    <div className="w-4/5 mx-auto my-12 flex flex-col">
      <div className="relative mb-8">
        <input
          id="fromSlider"
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={handleSliderChange}
          className="absolute w-full appearance-none bg-gray-300 h-1 pointer-events-none"
        />
        <input
          id="toSlider"
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={handleSliderChange}
          className="absolute w-full appearance-none bg-gray-300 h-1 pointer-events-none"
        />
      </div>
      <div className="flex justify-between text-lg text-gray-600">
        <div className="flex flex-col items-center">
          <span>Min</span>
          <input
            type="number"
            id="fromInput"
            value={minValue}
            min="0"
            max="100"
            onChange={handleMinChange}
            className="w-16 p-1 text-center text-gray-700 bg-gray-200 rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <span>Max</span>
          <input
            type="number"
            id="toInput"
            value={maxValue}
            min="0"
            max="100"
            onChange={handleMaxChange}
            className="w-16 p-1 text-center text-gray-700 bg-gray-200 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

import { useState } from "react";

const App = () => {
  const [hex, setHex] = useState("#ffffff");
  const [rgb, setRgb] = useState("rgb(255, 255, 255)");
  const [isValid, setIsValid] = useState(true);

  // Функция конвертации HEX в RGB
  const hexToRgb = (hex: string) => {
    if (!/^#([0-9A-F]{6})$/i.test(hex)) {
      setIsValid(false);
      return "Ошибка!";
    }

    setIsValid(true);
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Обработчик изменения ввода
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHex(value);

    if (value.length === 7) {
      setRgb(hexToRgb(value));
    }
  };

  return (
    <div className="app" style={{ backgroundColor: isValid ? hex : "#d9534f" }}>
      <div className="converter">
        <input type="text" className="input" value={hex} onChange={handleChange} maxLength={7} />
        <div className="output" style={{ backgroundColor: isValid ? "#333" : "#a94442" }}>
          {rgb}
        </div>
      </div>
    </div>
  );
};

export default App;

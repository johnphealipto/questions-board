import { useState } from "react";
import LeftLayout from "./components/left-layout";
import RightLayout from "./components/right-layout";

function App() {
  const [selected, setSelected] = useState(
    (JSON.parse(localStorage.getItem("selected") as string) as number[]) ?? []
  );
  const [active, setActive] = useState(
    JSON.parse(localStorage.getItem("active") as string) as number
  );

  const handleSelect = (idx: number) => {
    const _selected: number[] =
      (JSON.parse(localStorage.getItem("selected") as string) as number[]) ??
      [];
    localStorage.setItem("active", JSON.stringify(idx));
    setActive(idx);

    if (_selected.includes(idx)) return;
    localStorage.setItem("selected", JSON.stringify([..._selected, idx]));
    setSelected([..._selected, idx]);
  };

  return (
    <div style={{ display: "flex", height: "100%", padding: 30 }}>
      <LeftLayout selected={selected} handleSelect={handleSelect} />
      <RightLayout active={active} selected={selected} />
    </div>
  );
}

export default App;

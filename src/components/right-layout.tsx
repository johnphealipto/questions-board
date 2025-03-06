import { useEffect, useState } from "react";
import { QUESTIONS_BOARD } from "../constants";

const LETTERS = ["A", "B", "C", "D"];

const RightLayout = ({
  active,
  selected,
}: {
  active: number;
  selected: number[];
}) => {
  const [picked, setPicked] = useState("");
  const [selectedOption, setSelectedOption] = useState<number>();

  const handleRandomQuestion = (min = 1, max = 30) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    const option = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    setPicked(`${number}-${option}`);
  };

  const { question, options } = QUESTIONS_BOARD[active ?? 0];

  const isAnswered =
    selected.includes(active) && selected[selected.length - 1] !== active;

  useEffect(() => {
    // reset selected option when question changes
    setSelectedOption(undefined);
  }, [active]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: 20,
        padding: 30,
        overflow: "auto",
      }}
    >
      {!selected.includes(active) && (
        <div className="space-y-4">
          <p>Ranomly pick a question</p>
          <p className="text-2xl font-bold">{picked}</p>
          <button
            onClick={() => handleRandomQuestion()}
            className="bg-black/85 text-white px-8 py-2.5 rounded-3xl font-semibold"
          >
            Pick
          </button>
        </div>
      )}
      {selected.includes(active) && (
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-black/55 text-sm">
              Question {active + 1}:{" "}
              {isAnswered && (
                <span className="text-green-800 bg-green-100 px-2 py-1 rounded-md">
                  Answered
                </span>
              )}
            </p>
            <p className="text-2xl font-bold border-b border-gray-100 pb-6">
              {question}
            </p>
          </div>
          <div className="space-y-4">
            {options.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(idx)}
                className="border rounded-2xl py-4 px-5 block w-full text-left"
                style={{
                  borderColor: selectedOption === idx ? "#000" : "#f3f4f6",
                }}
              >
                <p className="text-lg">
                  <span className="text-black/55">{LETTERS[idx]}.</span>{" "}
                  <span className="font-medium text-black">{item.item}</span>
                </p>
                {"url" in item && (
                  <img
                    src={item.url}
                    alt={item.item}
                    width={150}
                    height={150}
                    className="mt-2 rounded-lg"
                    style={{ width: "15%" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightLayout;

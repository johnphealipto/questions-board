import { useEffect, useState } from "react";
import { QUESTIONS_BOARD } from "../constants";

const LETTERS = ["A", "B", "C", "D"];
const NUMBERS = Array.from(Array(QUESTIONS_BOARD.length), (_, x) => x + 1);

const LeftLayout = ({
  active,
  selected,
  handleSelect,
}: {
  active: number;
  selected: number[];
  handleSelect: (idx: number) => void;
}) => {
  const [picked, setPicked] = useState("");
  const [lifeLine, setLifeLine] = useState(5);

  useEffect(() => {
    // reset life line when question changes
    setPicked("");
  }, [active]);

  const handleRandomQuestion = () => {
    const unselected = NUMBERS.filter((x) => !selected.includes(x - 1));
    // const number = Math.floor(Math.random() * (max - min + 1) + min);
    const number = unselected[Math.floor(Math.random() * unselected.length)];
    const option = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    setPicked(`${number}-${option}`);
    setLifeLine((prev) => prev - 1);
  };

  return (
    <div className="w-full max-w-sm pr-8 flex flex-col justify-between">
      <div className="space-y-5 divide-y divide-gray-200">
        <div className="flex items-center gap-3 pb-5">
          <img
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <p className="text-xl font-bold text-black">Product Studio HQ</p>
        </div>
        <div className="space-y-3 pb-5">
          <p className="text-lg font-semibold text-black/80">Questions</p>
          <div
            style={{
              width: "100%",
              gap: 10,
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            }}
          >
            {new Array(QUESTIONS_BOARD.length).fill("").map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                style={{
                  color: selected.includes(idx) ? "white" : "#6b6b6b",
                  borderRadius: 25,
                  padding: "7px 20px",
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: selected.includes(idx) ? "#000000d4" : "#d5d5d5",
                  backgroundColor: selected.includes(idx)
                    ? "#000000d8"
                    : "#f0f0f0",
                }}
              >
                {(idx + 1).toString().padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-semibold text-black">
            Life Line:{" "}
            <span className="text-red-700 bg-red-100 px-2 py-px rounded-md">
              {lifeLine}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleRandomQuestion()}
              disabled={lifeLine === 0}
              className={
                lifeLine === 0
                  ? "bg-gray-400 px-8 py-2.5 rounded-3xl font-semibold disabled:!cursor-not-allowed"
                  : "bg-black/85 text-white px-8 py-2.5 rounded-3xl font-semibold"
              }
            >
              Pick
            </button>
            <p className="text-2xl font-bold"> {picked}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold text-black mb-3 border-b pb-2 border-gray-200">
          Instructions:
        </p>
        <div className="text-black/90 text-sm space-y-4">
          <p>
            ✅ There's No Entirely Right or Wrong Answers - Each question has
            multiple choices, and the correct answer depends on the individual.
          </p>
          <p>
            🔄 Turn-Based Selection - After answering a question, the player
            selects the next question and picks an option for the next player.
          </p>
          <p>
            ✅❌ Validation or Change - The next player can either agree with
            the given option or choose a different one, then give their reasons.
          </p>
          <p>
            😂 Funniest & Most Relatable Wins
            {/* - After all rounds, the group
            votes for the player with the funniest or most relatable responses. */}
          </p>
          {/* <p>
          🏆 Winner Selection – The player with the most votes at the end wins
          the game!
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default LeftLayout;

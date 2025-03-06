import { QUESTIONS_BOARD } from "../constants";

const LeftLayout = ({
  selected,
  handleSelect,
}: {
  selected: number[];
  handleSelect: (idx: number) => void;
}) => {
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
        <div className="space-y-3">
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
      </div>
      <div>
        <p className="text-lg font-semibold text-black mb-3 border-b pb-2 border-gray-200">
          Instructions:
        </p>
        <div className="text-black/90 text-sm space-y-4">
          <p>
            ✅ No Entirely Right or Wrong Answers - Each question has multiple
            choices, and the correct answer depends on the individual.
          </p>
          <p>
            🔄 Turn-Based Selection - After answering a question, the player
            selects the next question and picks an option for the next player.
          </p>
          <p>
            ✅❌ Validation or Change - The next player can either agree with
            the given option or choose a different one, then give their reasons.
          </p>
          {/* <p>
          😂 Funniest & Most Relatable Votes - After all rounds, the group votes
          for the player with the funniest or most relatable responses.
        </p>
        <p>
          🏆 Winner Selection – The player with the most votes at the end wins
          the game!
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default LeftLayout;

export default function Button({ text, type }) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-green-500 hover:bg-green-400"
          : "border-gray-400 hover:text-green-500"
      } p-3 border rounded-md text-lg font-medium px-5 min-w-28`}
    >
      {text}
    </button>
  );
}

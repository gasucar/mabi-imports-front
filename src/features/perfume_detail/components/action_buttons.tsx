export const ActionButtons = () => {
  return (
    <div className="flex gap-3">

      <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition">
        Add to Cart
      </button>

      <button className="cursor-pointer border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
        Ask Perfumina AI
      </button>

    </div>
  );
};
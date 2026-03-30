type Props = {
  page: number;
  onChange: (page: number) => void;
  total: number;
  limit: number;
};

const Pagination = ({ page, onChange, total, limit }: Props) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center mt-12 gap-2">

      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="px-4 py-2 border text-sm disabled:opacity-30"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={`px-4 py-2 border text-sm ${page === i + 1 ? "bg-black text-white" : ""
            }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="px-4 py-2 border text-sm disabled:opacity-30"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
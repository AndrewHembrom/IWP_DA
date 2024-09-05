export const Searchbar = () => {
  return (
    <div className="w-2/4 pt-3">
      <form>
        <div className="w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
          <input
            id="deafult-search"
            className="w-full bg-slate-950 text-white border-none outline-none"
            placeholder="Search"
            required
          />
          <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="feather feather-search"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

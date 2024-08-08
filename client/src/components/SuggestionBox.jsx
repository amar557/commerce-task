function SuggestionBox({ children }) {
  return (
    <div className="bg-black text-nowrap transition-all text-white px-3 py-1 rounded-md group-hover:opacity-100 opacity-0 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full  font-medium ">
      {children}
    </div>
  );
}

export default SuggestionBox;

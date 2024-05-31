const Grid4 = () => {
  return (
    <div className="m-4 gap-4 grid sm:grid-cols-12 mt-10">
      <div className="min-h-[100px] rounded-lg bg-pink-600 sm:col-span-2"></div>
      <div className="min-h-[100px] rounded-lg bg-lime-500 sm:col-span-2"></div>
      <div className="min-h-[100px] rounded-lg bg-sky-300 sm:col-span-8"></div>
    </div>
  );
};

export default Grid4;

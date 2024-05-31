const Grid3 = () => {
  return (
    <div className="m-4 grid sm:grid-cols-12 gap-4 grid-cols-2 mt-10">
      <div className="min-h-[100px] rounded-lg bg-orange-600 shadow sm:col-span-2"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-600 shadow sm:col-span-10"></div>
    </div>
  );
};

export default Grid3;

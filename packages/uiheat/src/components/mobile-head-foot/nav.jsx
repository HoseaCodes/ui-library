export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md md:relative md:shadow-none md:bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
        <div className="text-xl font-bold">Logo</div>
        <div className="text-3xl cursor-pointer">&#9776;</div>
      </div>
    </header>
  );
};

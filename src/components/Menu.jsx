export default function Menu({ onCloseMenu }) {
  return (
    <div className="relative mt-8">
      <div className="bg-white rounded-lg shadow-lg ">
        <nav className="flex flex-col px-5 divide-y divide-gray-200 text-preset-5--medium text-black">
          <a href="#" onClick={onCloseMenu} className="py-5">
            About
          </a>
          <a href="#" onClick={onCloseMenu} className="py-5">
            Discover
          </a>
          <a href="#" onClick={onCloseMenu} className="py-5">
            Get started
          </a>
        </nav>
      </div>
    </div>
  );
}

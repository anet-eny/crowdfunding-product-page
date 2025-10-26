export default function Menu({ onCloseMenu }) {
  return (
    <div className="relative mt-8">
      <div className="bg-white rounded-lg shadow-lg ">
        <nav className="flex flex-col gap-6 divide-y divide-gray-200 text-preset-5--medium text-black">
          <a href="#" onClick={onCloseMenu}>
            About
          </a>
          <a href="#" onClick={onCloseMenu}>
            Discover
          </a>
          <a href="#" onClick={onCloseMenu}>
            Get started
          </a>
        </nav>
      </div>
    </div>
  );
}

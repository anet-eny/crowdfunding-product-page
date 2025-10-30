export default function Menu({ onCloseMenu }) {
  return (
    <div className="fixed top-18 left-0 right-0 bottom-0 z-10">
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent to-black/30"
        onClick={onCloseMenu}
        aria-hidden="true"
      ></div>
      <div className="relative max-w-[90%] mx-auto">
        <div className="bg-white rounded-lg">
          <nav className="flex flex-col px-5 divide-y divide-gray-200 text-preset-5--medium text-black">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCloseMenu();
              }}
              className="py-5"
            >
              About
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCloseMenu();
              }}
              className="py-5"
            >
              Discover
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCloseMenu();
              }}
              className="py-5"
            >
              Get started
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

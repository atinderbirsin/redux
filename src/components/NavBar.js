import { AiFillBehanceCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar({ items }) {
  const renderedLinks = items.map((item) => {
    return (
      <li
        key={item.label}
        className="block p-2 transition duration-500 ease-in-out hover:bg-black hover:text-white"
      >
        <Link to={item.path}>{item.label}</Link>
      </li>
    );
  });

  return (
    <div className="flex items-center justify-between px-3 py-4 bg-[#f3f3f3]">
      <div className="text-2xl font-bold">
        <Link to='/' className="flex items-center justify-center gap-1">
          <AiFillBehanceCircle />
          Dummy
        </Link>
      </div>

      <div>
        <ul className="flex gap-3 text-2xl font-bold">{renderedLinks}</ul>
      </div>
    </div>
  );
}

export default NavBar;

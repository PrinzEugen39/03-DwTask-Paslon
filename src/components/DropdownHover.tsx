import { FiAirplay, FiEdit, FiTrash } from "react-icons/fi";

export default function DropdownHover() {
  return (
    <div className="dropdown dropdown-hover absolute top-2 right-2">
      <label tabIndex={0} className="">
        <button className="btn btn-ghost">
          <FiAirplay />
        </button>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>
            <FiEdit /> Edit
          </a>
        </li>
        <li>
          <a>
            <FiTrash /> Delete
          </a>
        </li>
      </ul>
    </div>
  );
}

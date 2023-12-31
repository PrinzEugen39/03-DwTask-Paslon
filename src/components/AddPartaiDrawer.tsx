import { useState } from "react";

export default function AddPartaiDrawer() {
  const [img, setImg] = useState("https://random.imagecdn.app/500/500");
  const [author, setAuthor] = useState("");
  const [partai, setPartai] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      if (!author) return alert("Please enter todo");

      const body = { author, partai, img };
      const res = await fetch("http://localhost:9000/paslons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location ="/paslon" ;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="drawer">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          Add New Partai
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <form
          className="menu p-4 w-[25rem] min-h-full bg-base-100 flex gap-6 pl-9"
          onSubmit={handleSubmit}
        >
          <h1 className="font-semibold text-2xl text-center">
            Create New Partai
          </h1>
          {/* Sidebar content here */}
          <div className="flex flex-col">
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="VISI">VISI</label>
            <input
              id="VISI"
              value={img}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Partai">Partai</label>
            <input
              id="Partai"
              type="text"
              value={partai}
              onChange={(e) => setPartai(e.target.value)}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <button className="btn btn-accent w-[8rem]">Create</button>
        </form>
      </div>
    </div>
  );
}

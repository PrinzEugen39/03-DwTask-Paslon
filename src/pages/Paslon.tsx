import ThemeToggle from "../components/ThemeToggle";

export default function Paslon() {
  return (
    <>
      <div className="w-full h-min  p-10">
        <div className="flex justify-center">
          <div className="grid flex-initial h-16 w-72  card bg-base-300 rounded-box place-items-center">
            <h1 className="text-2xl text-center font-bold">PEMILU PRESIDEN</h1>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-initial h-16 w-16 card place-items-center">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <div className="grid gap-6 grid-cols-2 ">
            <div className="card card-side bg-base-100 shadow-2xl w-[30rem] h-auto">
              <figure>
                <img
                  src="https://random.imagecdn.app/500/500"
                  alt="paslon_profile"
                  className="w-[75%] rounded-2xl border-8 border-neutral-400"
                />
              </figure>
              <div className="card-body  ">
                <h2 className="card-title">Patchouli</h2>
                <p>Ekonomi maju</p>
                <div className="card-actions justify-start">
                  <h2 className="text-md text-left font-semibold mt-10">
                    Partai Pengusung:
                  </h2>
                  <ul className="text-md text-left font-light list-inside list-disc">
                    <li>PDI</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-2xl w-[30rem] h-auto">
              <figure>
                <img
                  src="https://random.imagecdn.app/500/500"
                  alt="paslon_profile"
                  className="w-[75%] rounded-2xl border-8 border-neutral-400"
                />
              </figure>
              <div className="card-body  ">
                <h2 className="card-title">Patchouli</h2>
                <p>Ekonomi maju</p>
                <div className="card-actions justify-start">
                  <h2 className="text-md text-left font-semibold mt-10">
                    Partai Pengusung:
                  </h2>
                  <ul className="text-md text-left font-light list-inside list-disc">
                    <li>PDI</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-2xl w-[30rem] h-auto">
              <figure>
                <img
                  src="https://random.imagecdn.app/500/500"
                  alt="paslon_profile"
                  className="w-[75%] rounded-2xl border-8 border-neutral-400"
                />
              </figure>
              <div className="card-body  ">
                <h2 className="card-title">Patchouli</h2>
                <p>Ekonomi maju</p>
                <div className="card-actions justify-start">
                  <h2 className="text-md text-left font-semibold mt-10">
                    Partai Pengusung:
                  </h2>
                  <ul className="text-md text-left font-light list-inside list-disc">
                    <li>PDI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex-[35%]  w-full p-5 lg:p-10 rounded-2xl drop-shadow-md border border-neutral-100">
            <h1 className="text-xl text-left  font-bold">Suara Saat Ini:</h1>
            <ul className="text-md text-left  font-light list-inside list-disc">
              <li key="">
                <span className="font-medium">Aldi</span>:{" "}
                <span className="countdown">
                  <span>2</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-[65%]  w-full p-5 lg:p-10 rounded-2xl drop-shadow-md border border-neutral-100">
            <h1 className="text-xl text-left  font-bold">Masukkan nama:</h1>
            <input
              type="text"
              className="  mt-1 border border-neutral-900 rounded-xl p-3"
              value="voterName"
            />
            <p className="text-sm text-left  font-light mt-1">
              Pilih paslon menurut pilihan hati dan pikiranmu yang random,
              jangan pernah dibawa serius!
            </p>
            <div className="mt-5 flex flex-col lg:flex-row justify-between">
              <div className="grid lg:grid-cols-3 lg:grid-flow-row gap-10">
                <label key="" className="flex gap-2 items-center">
                  <input
                    className="radio radio-accent"
                    type="radio"
                    name="paslon"
                    value=""
                    id=""
                  />
                  <span className="label-text text-md lg:text-xl  font-bold">
                    Bing
                  </span>
                </label>
              </div>
              <button className="btn btn-accent mt-10 lg:mt-0">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

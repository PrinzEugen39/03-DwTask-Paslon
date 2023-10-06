import { Link } from "react-router-dom";

import PageNav from "./HomepageNav";

export default function Homepage() {
  return (
    <section >
        <PageNav />
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(hero.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="-mt-[10rem] max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold text-white">
              DeWe Paslon
            </h1>
            <p className="mb-3 text-neutral-300 text-lg font-semibold">
            “Pemilihan umum memang perlu dilihat sebagai upacara merayakan tekad tapi juga kerendahan hati: "sebuah Indonesia yang lebih baik" selamanya akan jadi sebuah janji--tapi yang selamanya layak jadi ikhtiar.”
            </p>
            <p className="mb-5 text-neutral-300 text-lg">― Goenawan Mohamad</p>
            <Link to="paslon">
              <button className="btn btn-ghost text-neutral-100 bg-green-100 bg-opacity-10">
                Start Voting Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

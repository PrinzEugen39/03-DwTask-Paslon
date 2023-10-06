export default function Leftside() {
  return (
    <div
      className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{ backgroundImage: "url(hero.jpg)" }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="w-full px-24 z-10 -mt-[4rem]">
        <h1 className="text-5xl font-bold text-left tracking-wide">Paslon</h1>
        <p className="text-3xl my-4">
          BING CHILLING 🥶🍦 wǒ hěn xǐhuān BING CHILLING 🥶🍦 dànshì sùdù yǔ
          jīqíng 9 bǐ BING CHILLING 🥶🍦
        </p>
      </div>
      <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
        {/* logo */}
      </div>
    </div>
  );
}

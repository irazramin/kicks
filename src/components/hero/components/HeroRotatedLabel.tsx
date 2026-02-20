export function HeroRotatedLabel() {
  return (
    <div className="absolute left-0 top-[160px] z-10 -ml-1">
      <div
        className="absolute left-[-85px] flex origin-center justify-center bg-[#2d2d2d] p-6 -rotate-90"
        style={{ transformOrigin: "center center" }}
      >
        <span className="whitespace-nowrap text-base font-semibold tracking-wide text-white">
          Nike product of the year
        </span>
      </div>
    </div>
  );
}

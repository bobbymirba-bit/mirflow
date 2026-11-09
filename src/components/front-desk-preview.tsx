const bars = [10, 18, 27, 18, 38, 54, 32, 59, 38, 25, 40, 21, 12];

export function FrontDeskPreview() {
  return (
    <aside
      aria-label="Illustration of an after-hours call"
      className="overflow-hidden rounded-[2rem] border border-[#6c4957] bg-[radial-gradient(ellipse_at_30%_35%,#72464d_0%,#3e293a_42%,#241824_85%)] p-5 text-[#fff4e9] shadow-[0_24px_55px_-34px_#351f30] sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#a27b81]/45 pb-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
        <span className="text-[#fbb592]">Mirflow / Front desk</span>
        <span className="text-[#ead3cc]">Example call</span>
      </div>
      <div className="relative flex h-48 items-center justify-center sm:h-56" aria-hidden="true">
        <svg viewBox="0 0 270 208" className="h-full w-full max-w-72">
          <circle cx="135" cy="104" r="90" fill="none" stroke="#ad7d85" strokeOpacity=".55" />
          <circle cx="135" cy="104" r="72" fill="none" stroke="#ad7d85" strokeOpacity=".65" />
          <circle cx="135" cy="104" r="55" fill="#2f202e" stroke="#fbb592" />
          <circle cx="75" cy="37" r="3" fill="#fbb592" />
          <circle cx="187" cy="154" r="3" fill="#f0acc9" />
          {bars.map((height, index) => (
            <rect key={index} x={97 + 6 * index} y={104 - height / 2} width="3.5" height={height} rx="1.75" fill="#fbb592" />
          ))}
        </svg>
      </div>
      <p className="text-center font-display text-xl sm:text-2xl">&ldquo;Do I need a consultation first?&rdquo;</p>
      <div className="mt-5 grid gap-2 rounded-2xl border border-[#a27b81]/45 bg-[#251a27]/60 p-3 text-xs text-[#f1ded8] sm:grid-cols-2">
        <span className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#fbb592]" />Approved answer</span>
        <span className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#f0acc9]" />Consult link by text</span>
      </div>
    </aside>
  );
}

import svgPaths from "./svg-8sgmvuwdgf";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(-59.0362deg, rgb(80, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#c9ccde] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
      <div className="content-stretch flex flex-col gap-[35px] h-[248px] items-center relative shrink-0">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[319px]">
          <div className="relative shrink-0 size-[24px]" data-name="stash:save-ribbon-solid">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="stash:save-ribbon-solid" opacity="0.3">
                <path d={svgPaths.p3a8aa800} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="relative shrink-0 size-[36px]">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                <div className="h-[18px] relative shrink-0 w-[22px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                    <g id="Frame 2085670804">
                      <path clipRule="evenodd" d={svgPaths.p2b579b00} fill="var(--fill-0, #E6E3F1)" fillRule="evenodd" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] h-[143px] items-center not-italic relative shrink-0 text-center">
          <p className="font-['Google_Sans:Bold',sans-serif] leading-[39px] relative shrink-0 text-[28px] text-white tracking-[0.0703px] w-[297px]">How should I revise this design?</p>
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#b5b5b5] text-[14px] tracking-[-0.1504px] whitespace-nowrap">탭하여 해석보기</p>
        </div>
      </div>
    </div>
  );
}
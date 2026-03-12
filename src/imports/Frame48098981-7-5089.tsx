import svgPaths from "./svg-don2ylv7zg";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_-6px_13px_0px_rgba(153,153,153,0.15)] size-full">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="bg-white col-1 h-[27px] ml-0 mt-[60px] relative row-1 w-[393px]" data-name="Component / Home Indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
        <div className="bg-white col-1 h-[60px] ml-0 mt-0 relative row-1 w-[393px]" data-name="navigation">
          <div aria-hidden="true" className="absolute border-[#f0f0f0] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[24px] items-center justify-center relative size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                <Wrapper>
                  <g id="material-symbols-light:home-rounded">
                    <path d={svgPaths.p23788300} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9ccde] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">홈</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                <Wrapper>
                  <g id="material-symbols:monitor">
                    <path d={svgPaths.pb0daf00} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">1:1 수업</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                <Wrapper>
                  <g id="ri:chat-ai-2-fill">
                    <path d={svgPaths.p31e81830} fill="var(--fill-0, #150F33)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#150f33] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">AI 튜터</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                <Wrapper>
                  <g id="famicons:call">
                    <path d={svgPaths.p1a36e380} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">AI 전화</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]">
                  <div className="content-stretch flex gap-[2px] items-end justify-center relative shrink-0">
                    <div className="bg-[#c9ccde] h-[18px] rounded-[1px] shrink-0 w-[6.5px]" />
                    <div className="bg-[#c9ccde] h-[14px] rounded-[1px] shrink-0 w-[6.5px]" />
                    <div className="bg-[#c9ccde] h-[22px] rounded-[1px] shrink-0 w-[6.5px]" />
                  </div>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">성취</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                <Wrapper>
                  <g id="ix:user-profile-filled">
                    <path clipRule="evenodd" d={svgPaths.p28fe4f0} fill="var(--fill-0, #C9CCDE)" fillRule="evenodd" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">마이링글</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import clsx from "clsx";
import svgPaths from "./svg-rpreap2xh9";
import imgImage6019 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";
import { useNavigate } from 'react-router';
type BackgroundImage15Props = {
  text: string;
  text1: string;
};

function BackgroundImage15({ children, text, text1 }: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className="h-[51px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-end relative">
        <div className="content-stretch flex items-center leading-[29.344px] not-italic relative shrink-0 text-[18.864px] text-right whitespace-nowrap">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] relative shrink-0 text-[#503cc8]">{text}</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#c9ccde]">{text1}</p>
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[2px] py-[5px] relative">{children}</div>
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage13Props = {
  additionalClassNames?: string;
};

function BackgroundImage13({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage13Props>) {
  return (
    <div className={clsx("h-[30.003px] w-[36.003px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0031 30.0031">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-between min-w-[inherit] overflow-clip px-[18px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 18 18" className="absolute block size-full">
      <g id="ChevronLeft">{children}</g>
    </svg>
  );
}

function ChevronLeftBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-[18px]">
      <BackgroundImage8>{children}</BackgroundImage8>
    </div>
  );
}

function BackgroundImage7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[10px] items-center justify-between left-1/2 top-1/2 w-[329px]">
      <div className="h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="bg-white h-full shrink-0 w-px" />
      <div className="h-full shrink-0 w-px" />
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  text: string;
  text1: string;
};

function ContainerBackgroundImage1({ text, text1 }: ContainerBackgroundImage1Props) {
  return (
    <div className="h-[21px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center relative">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#140f33] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
        <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20.96px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">{text1}</p>
        <div className="bg-[#fff3ef] h-[24px] relative rounded-[4px] shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[6px] py-[2px] relative">
            <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#f9725c] text-[11px] whitespace-nowrap">{"Beta"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[16px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[45.83%_45.84%_45.84%_45.83%]" data-name="Vector">
            <div className="absolute inset-[-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
                <path d={svgPaths.pc8c3b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText4({ text, additionalClassNames = "" }: BackgroundImageAndText4Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center p-[5.455px] rounded-[54.545px] size-[16px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#80839e] border-[0.545px] border-solid inset-0 pointer-events-none rounded-[54.545px]" />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#80839e] text-[6.545px] text-center w-full">{text}</p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
  return (
    <div className={clsx("absolute bg-gradient-to-b content-stretch flex flex-col from-[#7a5de8] items-center justify-center p-[10px] rounded-[10px] to-[#533bac] w-[34px]", additionalClassNames)}>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white w-full">{text}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(rgb(195, 206, 255) 0%, rgb(189, 187, 255) 66.827%), linear-gradient(rgb(213, 221, 255) 0%, rgb(202, 200, 255) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(153, 153, 153) 100%)" }} className={clsx("absolute content-stretch flex flex-col items-center justify-center p-[10px] rounded-[10px] w-[34px]", additionalClassNames)}>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white w-full">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] h-[10px] leading-[8px] not-italic relative shrink-0 text-[#140f33] text-[12px] text-center w-[25px]">{text}</p>
    </div>
  );
}

function HelperbuttonBackgroundImage1() {
  return (
    <div className="-scale-y-100 flex-none rotate-90">
      <ChevronLeftBackgroundImage>
        <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #484B71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
      </ChevronLeftBackgroundImage>
    </div>
  );
}
type HelperbuttonBackgroundImageProps = {
  text: string;
  text1: string;
};

function HelperbuttonBackgroundImage({ text, text1 }: HelperbuttonBackgroundImageProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[1.43] not-italic relative shrink-0 text-left whitespace-nowrap">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] relative shrink-0 text-[#484b71] text-[16px]">{text}</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[#a4a7be] text-[14px]">{text1}</p>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ additionalClassNames = "" }: BackgroundImage6Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("absolute flex h-[16px] items-center justify-center left-[78px] w-0", additionalClassNames)}>
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[16px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
              <line id="Line 4" stroke="var(--stroke-0, #E4E7F4)" x2="16" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-end left-[16px]", additionalClassNames)}>
      <BackgroundImage9>
        <g id="material-symbols-light:e911-emergency">
          <path d={svgPaths.p16cbec00} id="Vector" stroke="var(--stroke-0, #869AB8)" strokeWidth="1.3" />
        </g>
      </BackgroundImage9>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20.96px] not-italic relative shrink-0 text-[#80839e] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ additionalClassNames = "" }: BackgroundImage5Props) {
  return (
    <div className={clsx("absolute left-[44px] size-[18px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill="var(--fill-0, #503CC8)" id="Ellipse 656" r="9" />
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ additionalClassNames = "" }: BackgroundImage4Props) {
  return (
    <div className={clsx("absolute left-[11px] size-[28px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame 48099109">
          <rect fill="var(--fill-0, #E2E9F2)" height="28" rx="14" width="28" />
          <path d={svgPaths.p12924300} fill="var(--fill-0, #4E5B73)" id="Vector 14" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="absolute bg-[#7a5de8] left-[17px] overflow-clip rounded-[40px] size-[32px] top-[78px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="ix:sound-loud-filled">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="ix:sound-loud-filled">
            <path clipRule="evenodd" d={svgPaths.p375e4700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage2() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className="absolute flex items-center justify-center left-[317px] size-[18px] top-[21px]">
      <div className="-scale-y-100 flex-none rotate-90">
        <button className="block cursor-pointer relative size-[18px]" data-name="ChevronLeft">
          <BackgroundImage8>
            <path d="M11.25 13.5L6.75 9L11.25 4.5" id="Vector" stroke="var(--stroke-0, #484B71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </BackgroundImage8>
        </button>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute h-0 top-[61px] w-[317px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 1">
          <line id="Line 3" stroke="var(--stroke-0, #E4E7F4)" x2="317" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center leading-[1.43] left-[18px] not-italic top-[20px] whitespace-nowrap">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] relative shrink-0 text-[#140f33] text-[16px]">{text}</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[#a4a7be] text-[14px]">{text1}</p>
    </div>
  );
}
type TheProps = {
  className?: string;
  dropdown?: boolean;
};

function The({ className, dropdown = false }: TheProps) {
  if (dropdown) {
    return (
      <div className={className || "bg-white h-[379px] relative rounded-[8px] w-[353px]"} data-name="Dropdown=On">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <BackgroundImage text="the" text1="오류율 25%" />
          <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[57px] not-italic text-[#80839e] text-[18px] top-[84px] whitespace-nowrap">the</p>
          <p className="absolute font-['Pretendard_Variable:Medium',sans-serif] leading-[20.96px] left-[33px] not-italic text-[#f9725c] text-[14px] top-[285px] whitespace-nowrap">the</p>
          <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[95px] not-italic text-[#80839e] text-[14px] top-[285px] whitespace-nowrap">th를 t으로 발음한 경우</p>
          <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[95px] not-italic text-[#80839e] text-[14px] top-[310px] whitespace-nowrap">i를 i-으로 발음한 경우</p>
          <p className="absolute font-['Pretendard_Variable:Medium',sans-serif] leading-[20.96px] left-[33px] not-italic text-[#f9725c] text-[14px] top-[309px] whitespace-nowrap">the</p>
          <BackgroundImage1 additionalClassNames="left-[18px]" />
          <BackgroundImage2 />
          <BackgroundImage3 />
          <div className="absolute bg-[#fbfbff] h-[137px] left-[18px] overflow-clip rounded-[2px] top-[124px] w-[317px]">
            <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[261px] not-italic text-[#80839e] text-[12px] top-[109px] whitespace-nowrap">00:09</p>
            <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[44px] not-italic text-[#80839e] text-[12px] top-[109px] whitespace-nowrap">00:00</p>
            <div className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[1.5] left-[15px] not-italic text-[#140f33] text-[16px] top-[7px] w-[296px] whitespace-pre-wrap">
              <p className="mb-0">{`My main focus was on creating a `}</p>
              <p className="mb-0">user-friendly interface that enhances</p>
              <p>the overall experience</p>
            </div>
            <BackgroundImage4 additionalClassNames="top-[96px]" />
            <div className="absolute bg-[#e4e7f4] h-[4px] left-[54px] rounded-[24px] top-[99px] w-[249px]" />
            <BackgroundImage5 additionalClassNames="top-[92px]" />
          </div>
          <BackgroundImageAndText text="오류 제보" additionalClassNames="top-[339px]" />
          <BackgroundImage6 additionalClassNames="top-[288px]" />
          <BackgroundImage6 additionalClassNames="top-[313px]" />
          <div className="absolute bottom-[18px] content-stretch flex gap-[2px] items-center left-[225px]">
            <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#80839e] text-[14px] text-right whitespace-nowrap">오류 문장 더보기</p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="relative size-[16px]" data-name="ChevronLeft">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="ChevronLeft">
                      <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #80839E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eff1f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  return (
    <button className={className || "bg-white cursor-pointer h-[63px] min-w-[112px] relative rounded-[8px] w-[353px]"} data-name="Dropdown=Off">
      <BackgroundImage10>
        <HelperbuttonBackgroundImage text="the" text1="오류율 25%" />
        <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "65", "--transform-inner-height": "16" } as React.CSSProperties}>
          <HelperbuttonBackgroundImage1 />
        </div>
      </BackgroundImage10>
      <div aria-hidden="true" className="absolute border border-[#eff1f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}
type TheyProps = {
  className?: string;
  dropdown?: boolean;
};

function They({ className, dropdown = false }: TheyProps) {
  if (dropdown) {
    return (
      <div className={className || "bg-white h-[363px] relative rounded-[8px] w-[353px]"} data-name="Dropdown=On">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <BackgroundImage text="they" text1="오류율 100%" />
          <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[75px] not-italic text-[#80839e] text-[18px] text-center top-[84px] whitespace-nowrap">they</p>
          <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Medium',sans-serif] leading-[20.96px] left-[47.5px] not-italic text-[#f9725c] text-[14px] text-center top-[269px] whitespace-nowrap">they</p>
          <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[95px] not-italic text-[#80839e] text-[14px] top-[269px] whitespace-nowrap">th를 t으로 발음한 경우</p>
          <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[95px] not-italic text-[#80839e] text-[14px] top-[294px] whitespace-nowrap">th를 d으로 발음한 경우</p>
          <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Medium',sans-serif] leading-[20.96px] left-[47.5px] not-italic text-[#f9725c] text-[14px] text-center top-[293px] whitespace-nowrap">they</p>
          <BackgroundImage1 additionalClassNames="-translate-x-1/2 left-1/2" />
          <BackgroundImage2 />
          <BackgroundImage3 />
          <div className="absolute bg-[#fbfbff] h-[121px] left-[18px] overflow-clip rounded-[2px] top-[124px] w-[317px]">
            <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[261px] not-italic text-[#80839e] text-[12px] top-[93px] whitespace-nowrap">00:06</p>
            <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[44px] not-italic text-[#80839e] text-[12px] top-[93px] whitespace-nowrap">00:00</p>
            <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[0] left-[15px] not-italic text-[#140f33] text-[0px] text-[16px] top-[7px] w-[296px]">
              <span className="leading-[1.5]">{`This way, `}</span>
              <span className="leading-[1.5] text-[#f9725c]">they</span>
              <span className="leading-[1.5]">{` can easily find what `}</span>
              <span className="leading-[1.5] text-[#f9725c]">{`they `}</span>
              <span className="leading-[1.5]">need without any confusion.</span>
            </p>
            <BackgroundImage4 additionalClassNames="top-[80px]" />
            <div className="absolute bg-[#e4e7f4] h-[4px] left-[54px] rounded-[24px] top-[83px] w-[249px]" />
            <BackgroundImage5 additionalClassNames="top-[76px]" />
          </div>
          <BackgroundImageAndText text="오류 제보" additionalClassNames="top-[323px]" />
          <BackgroundImage6 additionalClassNames="top-[272px]" />
          <BackgroundImage6 additionalClassNames="top-[297px]" />
        </div>
        <div aria-hidden="true" className="absolute border border-[#eff1f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  return (
    <button className={className || "bg-white cursor-pointer h-[63px] min-w-[112px] relative rounded-[8px] w-[353px]"} data-name="Dropdown=Off">
      <BackgroundImage10>
        <HelperbuttonBackgroundImage text="they" text1="오류율 100%" />
        <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "72", "--transform-inner-height": "16" } as React.CSSProperties}>
          <HelperbuttonBackgroundImage1 />
        </div>
      </BackgroundImage10>
      <div aria-hidden="true" className="absolute border border-[#eff1f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

export default function AiE() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-b from-[#efefff] from-[3.988%] relative size-full to-[#dddcff] to-[13.438%]" data-name="AI 튜터-기록 (E-표현 학습)">
      <div className="absolute bg-white h-[2186px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[216px] w-[393px]" data-name="8017" />
      <div className="absolute content-stretch flex items-center left-0 pb-px pt-[16px] px-[16px] top-[1154px] w-[453px]" data-name="롤플레잉">
        <div aria-hidden="true" className="absolute border-[#e4e7f4] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[11px] items-center px-[9px] relative shrink-0">
            <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.24px] whitespace-nowrap">AI 분석</p>
            <div className="bg-black h-[2px] shrink-0 w-full" />
            <div className="absolute left-[59px] size-[6px] top-[-6px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #F9725C)" id="Ellipse 682" r="3" />
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="content-stretch flex flex-col h-full items-center px-[9px] relative shrink-0">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[16px] text-center tracking-[-0.24px] whitespace-nowrap">발음</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[11px] items-center px-[9px] relative shrink-0">
            <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[16px] text-center tracking-[-0.24px] whitespace-nowrap">정확성</p>
            <div className="bg-[rgba(0,0,0,0)] h-[2px] shrink-0 w-full" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[21px] top-[1577px] w-[353px]">
        <div className="bg-white h-[92px] min-w-[112px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
          <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start min-w-[inherit] px-[18px] py-[20px] relative size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div className="absolute bg-[#e6e3f1] h-[8px] left-0 top-[13px] w-[149px]" />
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.43] min-w-full not-italic relative shrink-0 text-[#140f33] text-[16px] w-[min-content]">발음 연습이 필요한 단어가 2개 있어요.</p>
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20.96px] not-italic relative shrink-0 text-[#80839e] text-[12px] text-center whitespace-nowrap">Pronounciation</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#eff1f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="bg-[#eff1f9] min-w-[112px] relative rounded-[8px] shrink-0 w-[353px]" data-name="Container">
          <div className="content-stretch flex items-center justify-between min-w-[inherit] overflow-clip px-[18px] py-[16px] relative rounded-[inherit] w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[194px]">
              <div className="bg-[#3d3d3d] overflow-clip relative rounded-[32px] shadow-[0px_0px_8px_0px_rgba(213,243,255,0.44),0px_0px_20px_0px_rgba(225,184,255,0.7)] shrink-0 size-[32px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[53px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] w-[52px]">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="h-[53px] relative w-[52px]" data-name="image 6019">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[232.2%] left-[-231.34%] max-w-none top-[-15.19%] w-[353.92%]" src={imgImage6019} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="-translate-x-1/2 absolute font-['Pacifico:Regular',sans-serif] leading-[1.4] left-[calc(50%-1px)] not-italic text-[#7a5de8] text-[18px] text-center top-[calc(50%-12.5px)] whitespace-nowrap">R</p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_2px_0px_rgba(161,152,195,0.4),inset_-2px_-1px_2px_0px_rgba(255,255,255,0.7)]" />
              </div>
              <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[1.43] left-[43px] not-italic text-[#7a5de8] text-[14px] top-[6px] whitespace-nowrap">Ringle’s Tip</p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <ChevronLeftBackgroundImage>
                  <path d="M11.25 13.5L6.75 9L11.25 4.5" id="Vector" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                </ChevronLeftBackgroundImage>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <They className="bg-white h-[363px] relative rounded-[8px] shrink-0 w-[353px]" dropdown />
        <The className="bg-white cursor-pointer h-[63px] min-w-[112px] relative rounded-[8px] shrink-0 w-[353px]" />
      </div>
      <div className="absolute h-[44px] left-px overflow-clip right-[-1px] top-0" data-name="iOS/Status Bar/Black">
        <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Right Side">
          <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Battery">
            <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-name="Rectangle">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11.3333">
                <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2E2E)" />
              </svg>
            </div>
            <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-name="Combined Shape">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
                <path d={svgPaths.p32d253c0} fill="var(--fill-0, #2E2E2E)" id="Combined Shape" opacity="0.4" />
              </svg>
            </div>
            <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-name="Rectangle">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7.33333">
                <path d={svgPaths.p3544af00} fill="var(--fill-0, #2E2E2E)" id="Rectangle" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]" data-name="Wifi">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
              <path d={svgPaths.p1df9f180} fill="var(--fill-0, #2E2E2E)" id="Wifi" />
            </svg>
          </div>
          <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
              <path d={svgPaths.p300d3000} fill="var(--fill-0, #2E2E2E)" id="Mobile Signal" />
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[19px] top-[17px]" data-name="Left Side">
          <div className="absolute h-[11.089px] left-[19px] top-[17px] w-[28.426px]" data-name="9:41">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4262 11.0889">
              <g id="9:41">
                <path d={svgPaths.p1218b780} fill="var(--fill-0, #2E2E2E)" />
                <path d={svgPaths.p25dc35c0} fill="var(--fill-0, #2E2E2E)" />
                <path d={svgPaths.p38b62380} fill="var(--fill-0, #2E2E2E)" />
                <path d={svgPaths.p3a930400} fill="var(--fill-0, #2E2E2E)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex h-[40px] items-center justify-between left-[calc(50%-1px)] pl-[20px] pr-[15px] top-[234px] w-[393px]" data-name="Container">
        <BackgroundImage11 additionalClassNames="h-[33.482px] w-[37.583px]">
          <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[33.489px] left-0 not-italic text-[#140f33] text-[18px] top-[-0.76px] whitespace-nowrap">이번 주 학습 기록</p>
        </BackgroundImage11>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 pb-[8px] pt-[12px] px-[20px] top-[44px] w-[393px]">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.24px] whitespace-nowrap">AI 튜터</p>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:fire-fill">
            <div className="absolute inset-[5.78%_12.5%_0.77%_11.82%]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1637 22.427">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.p2ef2ba00} fill="url(#paint0_linear_2_1132)" id="Vector_2" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_1132" x1="9.08183" x2="9.08183" y1="0" y2="20.715">
                    <stop stopColor="#FF6F84" />
                    <stop offset="1" stopColor="#FF8555" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <BackgroundImage9>
            <g id="list-bold">
              <path d={svgPaths.p160cd200} fill="var(--fill-0, black)" id="Vector" />
            </g>
          </BackgroundImage9>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[42px] items-start left-0 pb-[8px] px-[36px] top-[104px] w-[393px]">
        <div 
          onClick={() => navigate('/')}
          className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 relative cursor-pointer"
        >
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[60px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 644" r="30" />
              </svg>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12.71px] mt-[12.71px] place-items-start relative row-1">
              <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[34.561px]" data-name="📖 펼쳐진 책">
                <div className="absolute inset-[13.88%_6.45%_13.88%_6.46%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0969 24.9706">
                    <g id="Group">
                      <path d={svgPaths.pb248700} fill="var(--fill-0, #7A5DE8)" id="Vector" />
                      <path d={svgPaths.p88f3300} fill="var(--fill-0, #DBD2FD)" id="Vector_2" />
                      <path d={svgPaths.p2d966800} fill="var(--fill-0, #F4F2FF)" id="Vector_3" />
                    </g>
                  </svg>
                </div>
                <div className="absolute flex inset-0 items-center justify-center">
                  <div className="-rotate-90 flex-none size-[34.561px]">
                    <div className="relative size-full" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[21.05%_57.89%_34.21%_18.42%] leading-[1.4] not-italic text-[#9a85e8] text-[12px] tracking-[-0.24px]">A</p>
                <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[13.16%_15.79%_34.21%_60.53%] leading-[1.4] not-italic text-[#533bac] text-[14px] tracking-[-0.24px]">a</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(17,17,17,0.3)] tracking-[-0.24px] whitespace-nowrap">표현 학습</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 relative">
          <BackgroundImage12>
            <g id="Group 48098815">
              <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 644" r="30" />
              <g clipPath="url(#clip0_3_564)" id="ð¬ ë§íì" opacity="0.5">
                <g id="Group">
                  <path d={svgPaths.p2b9e6580} fill="url(#paint0_linear_3_564)" id="Vector" />
                  <g id="Group_2">
                    <path d={svgPaths.p20864000} fill="var(--fill-0, white)" id="Vector_2" />
                    <path d={svgPaths.p1ba1e080} fill="var(--fill-0, white)" id="Vector_3" />
                    <path d={svgPaths.p310a0680} fill="var(--fill-0, white)" id="Vector_4" />
                  </g>
                </g>
                <g id="Vector_5" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_564" x1="30.0382" x2="30.0382" y1="17.3779" y2="43.5388">
                <stop stopColor="#7A5DE8" />
                <stop offset="1" stopColor="#533BAC" />
              </linearGradient>
              <clipPath id="clip0_3_564">
                <rect fill="white" height="30.4581" transform="translate(15.2571 15.2291)" width="29.5623" />
              </clipPath>
            </defs>
          </BackgroundImage12>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(17,17,17,0.3)] tracking-[-0.24px] whitespace-nowrap">롤플레잉</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 relative">
          <BackgroundImage12>
            <g id="Group 48098815">
              <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 644" r="30" />
              <g clipPath="url(#clip0_3_605)" id="ð í¼ì¹ì§ ìì ì±">
                <g id="Group">
                  <path d={svgPaths.pc126900} fill="var(--fill-0, #F6F6F6)" id="Vector" />
                  <path d={svgPaths.p399c74c0} fill="url(#paint0_linear_3_605)" id="Vector_2" />
                  <path d={svgPaths.p1cf4d100} fill="var(--fill-0, #BEBEDE)" id="Vector_3" />
                </g>
                <g id="Vector_4" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_605" x1="19.6981" x2="40.8969" y1="33.005" y2="33.005">
                <stop stopColor="#9077F3" />
                <stop offset="1" stopColor="#ADA1F0" />
              </linearGradient>
              <clipPath id="clip0_3_605">
                <rect fill="white" height="30.4581" transform="translate(15.2186 15.2291)" width="30.4581" />
              </clipPath>
            </defs>
          </BackgroundImage12>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic opacity-70 relative shrink-0 text-[12px] text-[rgba(17,17,17,0.4)] tracking-[-0.24px] whitespace-nowrap">교재 학습</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative">
          <BackgroundImage12>
            <g id="Group 48098815">
              <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 644" r="30" />
              <g clipPath="url(#clip0_6_4061)" id="ð° ì ë¬¸">
                <g id="Vector" />
                <g id="Group">
                  <g id="Group_2">
                    <path d={svgPaths.pa0b8000} fill="var(--fill-0, #D0D5DA)" id="Vector_2" />
                    <path d={svgPaths.p5403e00} fill="var(--fill-0, #7A5DE8)" id="Vector_3" />
                    <path d={svgPaths.p1b0cfe00} fill="var(--fill-0, #8A94A0)" id="Vector_4" />
                  </g>
                  <path d={svgPaths.p39938780} fill="var(--fill-0, #7A5DE8)" id="Vector_5" />
                  <path d={svgPaths.p3342800} fill="var(--fill-0, #7A5DE8)" id="Vector_6" />
                  <path d={svgPaths.p1a53f300} fill="var(--fill-0, #7A5DE8)" id="Vector_7" />
                  <path d={svgPaths.pddc3680} fill="var(--fill-0, #7A5DE8)" id="Vector_8" />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_6_4061">
                <rect fill="white" height="30.4581" transform="translate(15.2326 15.2081)" width="30.4581" />
              </clipPath>
            </defs>
          </BackgroundImage12>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic opacity-70 relative shrink-0 text-[#503cc8] text-[12px] tracking-[-0.24px] whitespace-nowrap">리포트</p>
        </div>
      </div>
      <div className="absolute h-[33.482px] left-[25px] top-[367px] w-[37.583px]" data-name="h2" />
      <div className="absolute content-stretch flex items-center justify-between left-[25px] top-[603px] w-[344px]">
        <BackgroundImageAndText1 text="Mon" />
        <BackgroundImageAndText1 text="Tue" />
        <BackgroundImageAndText1 text="Wed" />
        <BackgroundImageAndText1 text="Thu" />
        <BackgroundImageAndText1 text="Fri" />
        <BackgroundImageAndText1 text="Sat" />
        <BackgroundImageAndText1 text="Sun" />
      </div>
      <div className="absolute contents left-[21px] top-[476px]" data-name="학습">
        <BackgroundImageAndText2 text="E" additionalClassNames="h-[107px] left-[21px] top-[476px]" />
      </div>
      <div className="absolute contents left-[72px] top-[538px]" data-name="학습">
        <BackgroundImageAndText2 text="E" additionalClassNames="h-[45px] left-[72px] top-[538px]" />
      </div>
      <div className="absolute contents left-[calc(50%+34.5px)] top-[538px]" data-name="학습">
        <BackgroundImageAndText2 text="E" additionalClassNames="h-[45px] left-[calc(50%+34.5px)] top-[538px]" />
      </div>
      <div className="absolute contents left-[calc(75%-12.75px)] top-[552px]" data-name="학습">
        <BackgroundImageAndText2 text="E" additionalClassNames="h-[31px] left-[calc(75%-12.75px)] top-[552px]" />
      </div>
      <div className="absolute contents left-[calc(25%+81.75px)] top-[411px]" data-name="학습">
        <div className="absolute content-stretch flex flex-col h-[172px] items-center justify-center left-[calc(25%+81.75px)] opacity-80 p-[10px] rounded-[10px] top-[411px] w-[34px]" style={{ backgroundImage: "linear-gradient(rgb(195, 206, 255) 0%, rgb(189, 187, 255) 66.827%), linear-gradient(rgb(213, 221, 255) 0%, rgb(202, 200, 255) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(153, 153, 153) 100%)" }}>
          <div aria-hidden="true" className="absolute border-2 border-[#fbfbff] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white w-full">E</p>
        </div>
      </div>
      <div className="absolute contents left-[21px] top-[422px]" data-name="학습">
        <BackgroundImageAndText3 text="R" additionalClassNames="h-[45px] left-[21px] top-[422px]" />
      </div>
      <div className="absolute contents left-[calc(25%+81.75px)] top-[371px]" data-name="학습">
        <BackgroundImageAndText3 text="R" additionalClassNames="h-[30px] left-[calc(25%+81.75px)] top-[371px]" />
      </div>
      <div className="absolute contents left-[calc(25%+28.75px)] top-[436px]" data-name="학습">
        <BackgroundImageAndText3 text="R" additionalClassNames="h-[147px] left-[calc(25%+28.75px)] top-[436px]" />
      </div>
      <div className="absolute contents left-[calc(50%+34.5px)] top-[482px]" data-name="학습">
        <BackgroundImageAndText3 text="R" additionalClassNames="h-[49px] left-[calc(50%+34.5px)] top-[482px]" />
      </div>
      <div className="absolute contents left-[calc(75%-11.75px)] top-[422px]" data-name="학습">
        <div className="absolute content-stretch flex flex-col h-[123px] items-center justify-center left-[calc(75%-11.75px)] p-[10px] rounded-[10px] top-[422px] w-[34px]" style={{ backgroundImage: "linear-gradient(180deg, rgb(175, 153, 255) 0%, rgb(148, 118, 255) 100%), linear-gradient(180deg, rgb(122, 93, 232) 0%, rgb(83, 59, 172) 100%)" }}>
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white w-full">D</p>
        </div>
      </div>
      <div className="absolute contents left-[calc(75%+44.25px)] top-[571px]" data-name="학습">
        <div className="absolute bg-[#e4e7f4] h-[10px] left-[calc(75%+44.25px)] rounded-[10px] top-[571px] w-[34px]">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="size-full" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[231px] items-start left-[11px] top-[284px]">
        <div className="content-stretch flex flex-col gap-[4px] h-[64px] items-center not-italic relative shrink-0 text-center w-[105px]">
          <p className="font-['Pretendard:Bold',sans-serif] h-[40px] leading-[33.489px] relative shrink-0 text-[#140f33] text-[48px] w-full">178</p>
          <p className="font-['Pretendard:Medium',sans-serif] h-[18px] leading-[1.5] relative shrink-0 text-[#80839e] text-[12px] tracking-[0.72px] w-full">Average Words</p>
        </div>
        <BackgroundImageAndText4 text="i" additionalClassNames="relative shrink-0" />
        <div className="absolute bg-[#fff6d3] content-stretch flex gap-[10px] items-center justify-center left-[184px] p-[10px] rounded-[100px] top-[14px]">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5a5e7f] text-[10px] tracking-[-0.1504px] whitespace-nowrap">가장 오래 시간 학습했어요!</p>
          <div className="absolute h-[8px] left-[10px] top-[38px] w-[21px]">
            <div className="absolute inset-[0_21.11%_12.38%_6.77%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.146 7.0094">
                <path d={svgPaths.p3d75ef00} fill="var(--fill-0, #FFF6D3)" id="Vector 235" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(25%+88.75px)] size-[20px] top-[343px]" data-name="⭐️ 별">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="â­ï¸ ë³">
            <path d={svgPaths.p2e859580} fill="var(--fill-0, #FFCD00)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[26px] items-center left-[20px] px-[11px] py-[22px] rounded-[8px] top-[793px] w-[353px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#c9ccde] border-[0.571px] border-solid inset-[-0.571px] pointer-events-none rounded-[8.571px]" />
        <div className="content-stretch flex flex-col gap-[19px] h-[231px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-[187px]">
            <div className="content-stretch flex gap-[7.995px] h-[20px] items-center relative shrink-0 w-[184px]" data-name="Container">
              <div className="relative shrink-0 size-[14px]" data-name="📰 신문">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_6_4040)" id="ð° ì ë¬¸">
                    <g id="Vector" />
                    <g id="Group">
                      <g id="Group_2">
                        <path d={svgPaths.p2e67f700} fill="var(--fill-0, #D0D5DA)" id="Vector_2" />
                        <path d={svgPaths.p174f3780} fill="var(--fill-0, #AFB7C0)" id="Vector_3" />
                        <path d={svgPaths.p22317300} fill="var(--fill-0, #8A94A0)" id="Vector_4" />
                      </g>
                      <path d={svgPaths.p3295c000} fill="var(--fill-0, #AFB7C0)" id="Vector_5" />
                      <path d={svgPaths.p17c75180} fill="var(--fill-0, #AFB7C0)" id="Vector_6" />
                      <path d={svgPaths.p336bf970} fill="var(--fill-0, #AFB7C0)" id="Vector_7" />
                      <path d={svgPaths.p3ba063c0} fill="var(--fill-0, #AFB7C0)" id="Vector_8" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_4040">
                      <rect fill="white" height="14" width="14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <BackgroundImage11 additionalClassNames="h-[20px] w-[162px]">
                <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#80839e] text-[12px] top-[0.71px] tracking-[-0.1504px] whitespace-nowrap">학습하는데 시간이 걸렸던 표현</p>
              </BackgroundImage11>
            </div>
            <BackgroundImageAndText4 text="i" additionalClassNames="absolute right-0 top-[2px]" />
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
                <div className="font-['Google_Sans:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] text-center tracking-[-0.4492px] w-[311px]">
                  <p className="mb-0">What if we visualize</p>
                  <p>this to _______?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center py-[3px] relative shrink-0" data-name="p">
            <p className="font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center tracking-[-0.3125px] w-[331px] whitespace-pre-wrap">
              <span className="leading-[24px]">{`오늘 `}</span>
              <span className="font-['Pretendard:SemiBold',sans-serif] leading-[24px]">AI 카드 학습</span>
              <span className="leading-[24px]">{`에서 `}</span>
              <span className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] text-[#f9725c]">3회 이상 반복된 문장</span>
              <span className="leading-[24px]">
                이에요.
                <br aria-hidden="true" />
                {` 반복 학습은 기억을 더 오래 유지하는 데 도움이 됩니다.`}
                <br aria-hidden="true" />
                {` 한 번 더 연습해서 자연스럽게 말할 수 있도록 익혀보세요.`}
              </span>
            </p>
          </div>
          <div className="h-[80px] shrink-0 w-[317px]" />
        </div>
        <div className="content-stretch flex gap-[7.995px] h-[44px] items-center justify-center pr-[0.009px] relative rounded-[8px] shrink-0 w-[311px]" data-name="button" style={{ backgroundImage: "linear-gradient(90deg, rgb(122, 93, 232) 0%, rgb(182, 153, 255) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(13, 55, 150) 100%)" }}>
          <div className="relative shrink-0 size-[19.997px]" data-name="Play">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.997 19.997">
              <g id="Play">
                <path d={svgPaths.p2ebbb332} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66641" />
              </g>
            </svg>
          </div>
          <BackgroundImage11 additionalClassNames="h-[27.992px] w-[62.266px]">
            <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[28px] left-[31.5px] not-italic text-[16px] text-center text-white top-[0.43px] tracking-[-0.24px] whitespace-nowrap">시작하기</p>
          </BackgroundImage11>
        </div>
      </div>
      <div className="absolute contents left-[20px] top-[743px]" data-name="학습">
        <div className="absolute content-stretch flex flex-col h-[34px] items-center justify-center left-[20px] p-[10px] rounded-[8px] top-[743px] w-[353px]" style={{ backgroundImage: "linear-gradient(rgb(195, 206, 255) 0%, rgb(189, 187, 255) 66.827%), linear-gradient(rgb(255, 255, 255) 0%, rgb(153, 153, 153) 100%)" }}>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-center text-white w-full">E - 표현학습 피드백</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[20px] p-[10px] rounded-[30px] top-[640px] w-[353px]">
        <div aria-hidden="true" className="absolute border border-[#c9ccde] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-[344px]">
          <BackgroundImage13 additionalClassNames="relative shrink-0">
            <g id="ChevronLeft">
              <path d={svgPaths.p65f1d40} id="Vector" stroke="var(--stroke-0, #C9CCDE)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </BackgroundImage13>
          <BackgroundImage13 additionalClassNames="absolute right-0 top-0">
            <g id="ChevronRight">
              <path d={svgPaths.p322e2f00} id="Vector" stroke="var(--stroke-0, #C9CCDE)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </BackgroundImage13>
          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[1.4] left-[calc(50%-86.5px)] not-italic text-[#5a5e7f] text-[13.651px] top-[5.5px] tracking-[0.4095px] whitespace-nowrap">2026. 03. 12(목) 오후 03:47</p>
        </div>
      </div>
      {/* Navigation removed - now using external fixed NavigationBar component */}
      <div className="absolute bg-[#fbfbff] h-[6px] left-0 top-[709px] w-[393px]" />
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 p-[20px] top-[1237px] w-[393px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-0 border-[#e4e7f4] border-solid inset-0 pointer-events-none" />
        <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#140f33] text-[16px] w-[min-content]">AI 자세한 피드백 보기</p>
        <p className="font-['Pretendard:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#5a5e7f] text-[14px] w-[min-content]">정확성 +1, 발음 +0.9 향상 되었어요. 계속 표현 연습하면 더 또렷하게 말할 수 있어요.</p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div className="bg-white content-stretch flex flex-col gap-[5px] items-start pb-[12px] pt-[8px] px-[12px] relative rounded-[8px] shrink-0 w-[353px]" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage2>
                <ContainerBackgroundImage />
                <ContainerBackgroundImage1 text="Pronunciation" text1="발음" />
              </ContainerBackgroundImage2>
              <BackgroundImage15 text="Lv 4" text1="/9" />
            </div>
            <div className="bg-[#e4e7f4] h-[8px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="Container">
              <div className="absolute bg-[#503cc8] h-[8px] left-0 rounded-[32px] top-[0.72px] w-[162px]" />
              <BackgroundImage7 />
            </div>
            <p className="-translate-x-full absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[176px] not-italic text-[#99a1af] text-[12px] text-right top-[38px] whitespace-nowrap">4.9</p>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[5px] items-start pb-[12px] pt-[8px] px-[12px] relative rounded-[8px] shrink-0 w-[353px]" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage2>
                <ContainerBackgroundImage />
                <ContainerBackgroundImage1 text="Accuracy" text1="정확성" />
              </ContainerBackgroundImage2>
              <BackgroundImage15 text="Lv 7" text1="/9" />
            </div>
            <div className="bg-[#e4e7f4] h-[8px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="Container">
              <div className="absolute bg-[#503cc8] h-[8px] left-0 rounded-[32px] top-[0.24px] w-[242px]" />
              <BackgroundImage7 />
            </div>
            <p className="-translate-x-full absolute font-['Pretendard_Variable:Regular',sans-serif] leading-[20.96px] left-[253px] not-italic text-[#99a1af] text-[12px] text-right top-[29.76px] whitespace-nowrap">7.6</p>
          </div>
        </div>
      </div>
    </div>
  );
}
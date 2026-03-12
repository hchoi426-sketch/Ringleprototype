import clsx from "clsx";
import svgPaths from "./svg-6ovhf6bme5";
import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";

type SpanBackgroundImageProps = {
  additionalClassNames?: string;
};

function SpanBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<SpanBackgroundImageProps>) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

type MotionDivProps = {
  onSavedExpressionsClick?: () => void;
  onAiCreateClick?: () => void;
};

export default function MotionDiv({ onSavedExpressionsClick, onAiCreateClick }: MotionDivProps) {
  return (
    <div className="relative size-full" data-name="motion.div">
      <div 
        onClick={onSavedExpressionsClick}
        className="absolute bg-white content-stretch flex gap-[12px] h-[71.999px] items-center left-0 pl-[12px] rounded-[17821100px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[169.25px] cursor-pointer hover:scale-105 active:scale-95 transition-transform" 
        data-name="motion.button"
      >
        <div className="relative rounded-[17821100px] shrink-0 size-[47.999px]" data-name="div" style={{ backgroundImage: "linear-gradient(-62.9823deg, rgb(105, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%)" }}>
          <div aria-hidden="true" className="absolute border border-[#d5b7ff] border-solid inset-0 pointer-events-none rounded-[17821100px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="stash:save-ribbon-solid">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="stash:save-ribbon-solid">
                  <path d={svgPaths.p3a8aa800} fill="var(--fill-0, #D1C4FF)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <SpanBackgroundImage additionalClassNames="w-[81.252px]">
          <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-[37.5px] not-italic text-[#101828] text-[16px] text-center top-[-0.34px] tracking-[-0.3125px] whitespace-nowrap">표현 저장함</p>
        </SpanBackgroundImage>
      </div>
      <div 
        onClick={onAiCreateClick}
        className="absolute bg-white content-stretch flex gap-[12px] h-[71.999px] items-center left-0 pl-[12px] rounded-[17821100px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[84px] w-[188.337px] cursor-pointer hover:scale-105 active:scale-95 transition-transform" 
        data-name="motion.button"
      >
        <div className="relative rounded-[34.468px] shrink-0 size-[43.15px]" data-name="FAB">
          <div aria-hidden="true" className="absolute bg-clip-padding border-[0.575px] border-[transparent] border-solid inset-0 pointer-events-none rounded-[34.468px]">
            <img alt="" className="absolute bg-clip-padding border-[0.575px] border-[transparent] border-solid max-w-none object-cover rounded-[34.468px] size-full" src={imgFab} />
            <div className="absolute bg-clip-padding border-[0.575px] border-[transparent] border-solid inset-0 overflow-hidden rounded-[34.468px]">
              <img alt="" className="absolute h-[935.7%] left-[-344.31%] max-w-none top-[-179.6%] w-[491.75%]" src={imgFab1} />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#d5b7ff] border-[1.149px] border-solid inset-0 pointer-events-none rounded-[35.043000000000006px] shadow-[2.298px_2.298px_4.596px_0px_rgba(98,72,194,0.3)]" />
          <div className="bg-clip-padding border-[0.575px] border-[transparent] border-solid content-stretch flex flex-col items-start px-[16.085px] py-[11.489px] relative size-full">
            <div className="absolute left-[13.09px] size-[16px] top-[13.49px]" data-name="Icon/AI">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_3_1164)" id="Icon/AI">
                  <path clipRule="evenodd" d={svgPaths.p1506440} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector" />
                  <path clipRule="evenodd" d={svgPaths.p2e6fc500} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector_2" />
                </g>
                <defs>
                  <clipPath id="clip0_3_1164">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <SpanBackgroundImage additionalClassNames="w-[100.339px]">
          <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-[46px] not-italic text-[#101828] text-[16px] text-center top-[-0.34px] tracking-[-0.3125px] whitespace-nowrap">AI 표현 만들기</p>
        </SpanBackgroundImage>
      </div>
    </div>
  );
}
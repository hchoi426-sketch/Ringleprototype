import clsx from "clsx";
import svgPaths from "./svg-vk8lhqw6kc";
import imgRectangle from "figma:asset/86341c7bede83b7cbe181f624568ab9e63463b5d.png";
import imgFrame48098576 from "figma:asset/19d0529e5aba2cd3397fde565e1ef51a4df0634e.png";
import imgGeminiGeneratedImageOyee9Noyee9Noyee1 from "figma:asset/5b0c15d9ee3500b757dc1e86fa0bad9979c14369.png";
import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("bg-[#fbfbff] content-stretch flex items-center px-[24px] py-[20px] relative rounded-[16px] shrink-0", additionalClassNames)}>
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#5a5e7f] text-[14px] tracking-[-0.24px] whitespace-pre">{children}</p>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[999px] shrink-0 size-[44px]", additionalClassNames)}>
      <BackgroundImage2>{children}</BackgroundImage2>
    </div>
  );
}

function Frame48098576BackgroundImage() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[6.482px]">
      <img alt="" className="absolute h-[148.75%] left-0 max-w-none top-[-24.37%] w-full" src={imgFrame48098576} />
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-[#fbfbff] content-stretch flex items-center px-[24px] py-[20px] relative rounded-[16px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#5a5e7f] text-[14px] tracking-[-0.24px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[34.561px]">
      <div className="absolute inset-[13.88%_6.45%_13.88%_6.46%]">
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
      <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[21.05%_57.89%_34.21%_18.42%] leading-[1.4] not-italic text-[#9a85e8] text-[12px] tracking-[-0.24px]">{text}</p>
      <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[13.16%_15.79%_34.21%_60.53%] leading-[1.4] not-italic text-[#533bac] text-[14px] tracking-[-0.24px]">{text1}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-[#7b69de] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border-4 border-[#e7e3fa] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Ai() {
  return (
    <div className="bg-gradient-to-b from-[#efefff] from-[3.988%] relative size-full to-[#dddcff] to-[13.438%]" data-name="AI 튜터-표현학습">
      <div className="absolute bg-white content-stretch flex flex-col gap-[28px] h-[1582px] items-center left-0 py-[20px] rounded-tl-[20px] rounded-tr-[20px] top-[201px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] relative shrink-0 w-[393px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="bg-[rgba(122,93,232,0.12)] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[36px] shrink-0">
                  <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a5de8] text-[12px] tracking-[-0.24px] whitespace-nowrap">
                    <p className="leading-[1.39]">UXUI 디자이너</p>
                  </div>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#80839e] text-[13px] whitespace-nowrap">글로벌 현장 / 글로벌 현장</p>
              </div>
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.24px] whitespace-nowrap">서비스 개발 기획하기</p>
            </div>
            <div className="h-[44px] shrink-0 w-[88px]" />
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[#eeebfa] content-stretch flex items-center p-[10px] relative rounded-[10px] shrink-0">
                <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[24px]" data-name="menu">
                  <div className="gap-x-[1.5px] gap-y-[1.5px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid relative shrink-0">
                    <div className="bg-[#503cc8] col-1 rounded-[0.6px] row-1 shrink-0 size-[6.5px]" />
                    <div className="bg-[#503cc8] col-2 rounded-[0.6px] row-1 shrink-0 size-[6.5px]" />
                    <div className="bg-[#503cc8] col-1 rounded-[0.6px] row-2 shrink-0 size-[6.5px]" />
                    <div className="bg-[#503cc8] col-2 rounded-[0.6px] row-2 shrink-0 size-[6.5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="bg-[#eff1f9] h-[6px] overflow-clip relative rounded-[99px] shrink-0 w-full">
              <div className="absolute bg-[#7a5de8] h-[6px] left-0 rounded-[99px] top-0 w-[80px]" />
            </div>
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[12px] tracking-[-0.24px] whitespace-nowrap">{`20% `}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[67px] h-[1399px] items-start relative shrink-0 w-[353px]">
          <div className="absolute flex h-[581px] items-center justify-center left-[21px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[581px]">
                <div className="absolute inset-[-2px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 581 2">
                    <line id="Line 455" stroke="url(#paint0_linear_3_614)" strokeDasharray="4 4" strokeWidth="2" x2="581" y1="1" y2="1" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_614" x1="0" x2="581" y1="2.5" y2="2.5">
                        <stop stopColor="#7A5DE8" />
                        <stop offset="0.215471" stopColor="#7A5DE8" />
                        <stop offset="0.393588" stopColor="#7A5DE8" stopOpacity="0.2" />
                        <stop offset="1" stopColor="#7A5DE8" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                    <g id="Group 2">
                      <circle cx="22" cy="22" fill="var(--fill-0, #EEEBFA)" id="Ellipse 641" r="20" stroke="var(--stroke-0, #E0D8FC)" strokeWidth="4" />
                    </g>
                  </svg>
                </div>
                <div className="col-1 ml-[11.73px] mt-[11.73px] relative row-1 size-[20.533px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5333 20.5334">
                    <g id="Group 1">
                      <circle cx="10.2667" cy="10.2667" fill="var(--fill-0, #7B69DE)" id="Ellipse 641" r="10.2667" />
                      <g id="check-bold">
                        <path d={svgPaths.p193aea80} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="bg-[#7a5de8] content-stretch flex items-center p-[16px] relative rounded-[16px] shrink-0">
                <div className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.24px] whitespace-nowrap">
                  <p className="mb-0">아이디어를 브레인스토밍</p>
                  <p>해 봅시다.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[317px] items-start relative shrink-0 w-full">
              <div className="bg-white relative rounded-[999px] shrink-0 size-[44px]">
                <BackgroundImage2>
                  <BackgroundImageAndText text="02" />
                </BackgroundImage2>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[20px] shrink-0 w-[302px]">
                <div className="content-stretch flex flex-col h-[104px] items-start relative shrink-0 w-full">
                  <div className="bg-white h-[104px] relative rounded-[20px] shrink-0 w-full">
                    <div className="overflow-clip relative rounded-[inherit] size-full">
                      <div className="absolute content-stretch flex flex-col gap-[6.482px] h-[55.904px] items-center leading-[1.5] left-[-3px] not-italic text-[#111] text-center top-[27px] tracking-[-0.1944px] w-[286px]">
                        <p className="font-['Google_Sans:Bold',sans-serif] relative shrink-0 text-[18.635px] whitespace-nowrap">How ___ we ___ this __?</p>
                        <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[11.343px] w-[140.975px]">이것을 스케치해 보는 게 어때요?</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-2 border-[#7a5de8] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_3.241px_20.255px_0px_#f1f1f3]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-center justify-end py-[16px] relative rounded-[20px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-51.9325deg, rgb(105, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%)" }}>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                        <div className="bg-white content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[64px]">
                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                            <BackgroundImage text="A" text1="a" />
                          </div>
                        </div>
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap">문장 구조 학습</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center opacity-50 relative shrink-0">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                          <div className="col-1 ml-0 mt-0 relative row-1 size-[63.023px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g id="Ellipse 644" />
                            </svg>
                          </div>
                          <div className="col-1 ml-[0.98px] mt-0 relative row-1 size-[63.023px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.0228 63.0228">
                              <path d={svgPaths.pad35100} fill="var(--fill-0, #D0C4FF)" id="Ellipse 643" />
                            </svg>
                          </div>
                          <div className="col-1 h-[47.515px] ml-[7.5px] mt-[16.48px] relative row-1 w-[49px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 47.5152">
                              <ellipse cx="24.5" cy="23.7576" fill="url(#paint0_radial_3_588)" id="Ellipse 645" rx="24.5" ry="23.7576" />
                              <defs>
                                <radialGradient cx="0" cy="0" gradientTransform="translate(24.5 23.7576) rotate(90) scale(23.7576 24.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_3_588" r="1">
                                  <stop stopColor="#7A5DE8" stopOpacity="0.5" />
                                  <stop offset="1" stopColor="#7A5DE8" stopOpacity="0" />
                                </radialGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="col-1 h-[29.091px] ml-[17px] mt-[14.55px] relative row-1 w-[30px]" data-name="Rectangle">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute left-[-50%] max-w-none size-[200%] top-[-50%]" src={imgRectangle} />
                            </div>
                          </div>
                        </div>
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap">전체 문장 학습</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center opacity-50 relative shrink-0">
                        <div className="h-[64px] relative shrink-0 w-[63.999px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                            <g id="Group 48098818">
                              <g id="Ellipse 644" />
                              <path d={svgPaths.pe8c7400} fill="var(--fill-0, #D0C4FF)" id="Ellipse 643" />
                              <ellipse cx="32" cy="40.2424" fill="url(#paint0_radial_3_575)" id="Ellipse 645" rx="24.5" ry="23.7576" />
                              <g clipPath="url(#clip0_3_575)" id="ð¬ ë§íì">
                                <g id="Group">
                                  <path d={svgPaths.p12f778c0} fill="var(--fill-0, #E2E5E8)" id="Vector" />
                                  <g id="Group_2">
                                    <path d={svgPaths.p2c13aa80} fill="var(--fill-0, #333D4B)" id="Vector_2" />
                                    <path d={svgPaths.p23e0a100} fill="var(--fill-0, #333D4B)" id="Vector_3" />
                                    <path d={svgPaths.pe4fd000} fill="var(--fill-0, #333D4B)" id="Vector_4" />
                                  </g>
                                </g>
                                <g id="Vector_5" />
                              </g>
                            </g>
                            <defs>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(32 40.2424) rotate(90) scale(23.7576 24.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_3_575" r="1">
                                <stop stopColor="#7A5DE8" stopOpacity="0.5" />
                                <stop offset="1" stopColor="#7A5DE8" stopOpacity="0" />
                              </radialGradient>
                              <clipPath id="clip0_3_575">
                                <rect fill="white" height="31.5114" transform="translate(16 16)" width="31.5114" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap">미니 롤플레잉</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[10px] py-[16px] relative rounded-[8px] shrink-0 w-[250px]">
                    <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[15px] tracking-[-0.24px] whitespace-nowrap">학습 시작하기</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <BackgroundImage1>
                <div className="bg-[#d0cbe9] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
                  <div aria-hidden="true" className="absolute border-4 border-[#f4f1ff] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
                  <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">03</p>
                </div>
              </BackgroundImage1>
              <BackgroundImage3 additionalClassNames="shadow-[0px_1px_8px_0px_rgba(103,100,115,0.16)]">
                {`이 레이아웃에 대해 `}
                <br aria-hidden="true" />
                어떻게 생각하세요?
              </BackgroundImage3>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <BackgroundImage1 additionalClassNames="opacity-40">
                <BackgroundImageAndText text="04" />
              </BackgroundImage1>
              <BackgroundImageAndText1 text="여기 디자인 초안이 있습니다." />
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <BackgroundImage1 additionalClassNames="opacity-40">
                <BackgroundImageAndText text="05" />
              </BackgroundImage1>
              <BackgroundImage3>
                {`여기 보시는 것은 `}
                <br aria-hidden="true" />
                {`아주 초기 버전입니다. `}
              </BackgroundImage3>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <BackgroundImage1 additionalClassNames="opacity-40">
                <BackgroundImageAndText text="06" />
              </BackgroundImage1>
              <BackgroundImageAndText1 text="디자인 시안을 디벨롭하여 봅시다" />
            </div>
          </div>
          <div className="absolute bottom-[148px] content-stretch flex flex-col gap-[22px] items-start left-0 w-[353px]">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <BackgroundImage1 additionalClassNames="opacity-40">
                <BackgroundImageAndText text="07" />
              </BackgroundImage1>
              <div className="bg-[#fbfbff] content-stretch flex items-center px-[24px] py-[20px] relative rounded-[16px] shrink-0">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#5a5e7f] text-[14px] tracking-[-0.24px] w-[261px]">그동안 배운 표현으로 롤플레잉에서 실전 연습을 해보아요!</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[273px] items-start opacity-60 relative shrink-0 w-full">
              <div className="bg-white h-[273px] relative rounded-[16px] shrink-0 w-full">
                <div className="overflow-clip relative rounded-[inherit] size-full">
                  <div className="absolute content-stretch flex flex-col gap-[6.482px] h-[55.904px] items-center leading-[1.5] left-[34px] text-center top-[22.69px] tracking-[-0.1944px] w-[286px]">
                    <p className="font-['Google_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#111] text-[18.635px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                      UX 디자이너 Ardelle의 POV
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] not-italic relative shrink-0 text-[#808080] text-[11.343px] w-[140.975px]">와이어 프레임 준비 완료!</p>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.91px)] top-[calc(50%+102px)] w-[178.244px]">
                    <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-90 relative shrink-0 text-[#484b71] text-[8.102px] text-center w-full">
                      <p className="leading-[11.343px]">이 표현은 아이디어를 더 잘 이해하기 위해 그것을 그리거나 시각적으로 표현하자고 제안할 때 사용됩니다.</p>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[113px] left-1/2 overflow-clip rounded-[6.482px] top-[calc(50%+10px)] w-[259px]">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6.482px]">
                      <Frame48098576BackgroundImage />
                      <Frame48098576BackgroundImage />
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[145.836px] left-0 overflow-clip rounded-[6.482px] top-[-25.12px] w-[259.263px]">
                      <div className="absolute h-[201.003px] left-[-38.89px] top-[-40.51px] w-[368.505px]" data-name="Gemini_Generated_Image_o7oonoo7oonoo7oo 1" />
                      <div className="absolute flex h-[372px] items-center justify-center left-[-33.96px] top-[-86.88px] w-[682px]">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="h-[372px] relative w-[682px]" data-name="Gemini_Generated_Image_oyee9noyee9noyee 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageOyee9Noyee9Noyee1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#edeff3] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_3.241px_20.255px_0px_#f1f1f3]" />
              </div>
            </div>
            <div className="bg-[#7a5de8] h-[40px] opacity-60 relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative size-full">
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.24px] whitespace-nowrap">롤플레잉</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <div className="relative shrink-0 size-[24px]" data-name="list-bold">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="list-bold">
                <path d={svgPaths.p160cd200} fill="var(--fill-0, black)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[42px] items-start left-0 pb-[8px] px-[36px] top-[108px] w-[393px]">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[60px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 644" r="30" />
              </svg>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12.71px] mt-[12.71px] place-items-start relative row-1">
              <BackgroundImage text="A" text1="a" />
            </div>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#503cc8] text-[12px] tracking-[-0.24px] whitespace-nowrap">표현 학습</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 relative">
          <BackgroundImage4>
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
          </BackgroundImage4>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(17,17,17,0.3)] tracking-[-0.24px] whitespace-nowrap">롤플레잉</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 relative">
          <BackgroundImage4>
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
          </BackgroundImage4>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic opacity-70 relative shrink-0 text-[12px] text-[rgba(17,17,17,0.4)] tracking-[-0.24px] whitespace-nowrap">교재 학습</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 relative">
          <BackgroundImage4>
            <g id="Group 48098815">
              <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 644" r="30" />
              <g clipPath="url(#clip0_3_544)" id="ð° ì ë¬¸">
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
              <clipPath id="clip0_3_544">
                <rect fill="white" height="30.4581" transform="translate(15.2326 15.2081)" width="30.4581" />
              </clipPath>
            </defs>
          </BackgroundImage4>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic opacity-70 relative shrink-0 text-[12px] text-[rgba(17,17,17,0.4)] tracking-[-0.24px] whitespace-nowrap">리포트</p>
        </div>
      </div>
      <div className="absolute bg-[#fff6d3] content-stretch flex gap-[10px] items-center justify-center left-[283px] p-[10px] rounded-[100px] top-[180px]">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5a5e7f] text-[10px] tracking-[-0.1504px] whitespace-nowrap">연습 구간 변경하기</p>
        <div className="absolute flex h-[8px] items-center justify-center left-[58px] top-[38px] w-[17px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[8px] relative w-[17px]">
              <div className="absolute inset-[0_20.42%_14.23%_7.06%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3271 6.86121">
                  <path d={svgPaths.p34fd6c00} fill="var(--fill-0, #FFF6D3)" id="Vector 235" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_-6px_13px_0px_rgba(153,153,153,0.15)]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="bg-white col-1 h-[27px] ml-0 mt-[60px] relative row-1 w-[393px]" data-name="Component / Home Indicator">
            <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
          </div>
          <div className="bg-white col-1 h-[60px] ml-0 mt-0 relative row-1 w-[393px]" data-name="navigation">
            <div aria-hidden="true" className="absolute border-[#f0f0f0] border-solid border-t inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[24px] items-center justify-center relative size-full">
                <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                  <BackgroundImage5>
                    <g id="material-symbols-light:home-rounded">
                      <path d={svgPaths.p23788300} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                    </g>
                  </BackgroundImage5>
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9ccde] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">홈</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                  <BackgroundImage5>
                    <g id="material-symbols:monitor">
                      <path d={svgPaths.pb0daf00} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                    </g>
                  </BackgroundImage5>
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">1:1 수업</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                  <BackgroundImage5>
                    <g id="ri:chat-ai-2-fill">
                      <path d={svgPaths.p31e81830} fill="var(--fill-0, #150F33)" id="Vector" />
                    </g>
                  </BackgroundImage5>
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#150f33] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">AI 튜터</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]">
                  <BackgroundImage5>
                    <g id="famicons:call">
                      <path d={svgPaths.p1a36e380} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                    </g>
                  </BackgroundImage5>
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
                  <BackgroundImage5>
                    <g id="ix:user-profile-filled">
                      <path clipRule="evenodd" d={svgPaths.p28fe4f0} fill="var(--fill-0, #C9CCDE)" fillRule="evenodd" id="Vector" />
                    </g>
                  </BackgroundImage5>
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a4a7be] text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">마이링글</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[310px] px-[16.085px] py-[11.489px] rounded-[34.468px] top-[766px] w-[53px]" data-name="FAB">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34.468px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[34.468px] size-full" src={imgFab} />
          <div className="absolute inset-0 overflow-hidden rounded-[34.468px]">
            <img alt="" className="absolute h-[935.7%] left-[-344.31%] max-w-none top-[-179.6%] w-[491.75%]" src={imgFab1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d5b7ff] border-[1.149px] border-solid inset-[-0.575px] pointer-events-none rounded-[35.043000000000006px] shadow-[4px_10px_15px_0px_rgba(98,72,194,0.3),4px_2.298px_4.596px_0px_rgba(125,110,179,0.3)]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+0.5px)] top-[calc(50%-3.3px)]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[17.234px] justify-center leading-[0] not-italic relative shrink-0 text-[#7a5de8] text-[40.213px] tracking-[-0.8043px] w-[26.426px]">
            <p className="leading-none">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
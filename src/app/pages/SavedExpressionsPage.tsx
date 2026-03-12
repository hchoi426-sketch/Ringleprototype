import { useNavigate } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import clsx from "clsx";
import svgPaths from "../../imports/svg-zof0m5ndfa";
import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";

function ButtonBackgroundImage1({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <div onClick={onClick} className="relative rounded-[10px] shrink-0 size-[35.999px] cursor-pointer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[142px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
      <div className="content-stretch flex flex-col items-start pt-[20px] px-[20px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[113px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">{children}</div>
    </div>
  );
}

type RefreshCwVectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function RefreshCwVectorBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<RefreshCwVectorBackgroundImage1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83323 5.83323">
          {children}
        </svg>
      </div>
    </div>
  );
}

type RefreshCwVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function RefreshCwVectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<RefreshCwVectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute left-[12.5%] right-[12.5%]", additionalClassNames)}>
      <div className="absolute inset-[-11.11%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6664 9.16651">
          {children}
        </svg>
      </div>
    </div>
  );
}

function ContainerBackgroundImage1() {
  const navigate = useNavigate();
  
  return (
    <div className="h-[36px] relative shrink-0 w-[81px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div 
          onClick={() => navigate('/review-cards')}
          style={{ backgroundImage: "linear-gradient(-41.2785deg, rgb(105, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%), linear-gradient(90deg, rgb(240, 177, 0) 0%, rgb(255, 105, 0) 100%)" }} 
          className="h-[35.999px] relative rounded-[8px] shrink-0 w-[80.422px] cursor-pointer hover:opacity-90 active:scale-95 transition-all"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[40.98px] not-italic text-[14px] text-center text-white top-[8.59px] tracking-[-0.1504px] whitespace-nowrap">{"학습하기"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconAiBackgroundImage() {
  return (
    <div className="absolute left-0 size-[10px] top-[-0.25px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_3_1346)" id="Icon/AI">
          <path clipRule="evenodd" d={svgPaths.p20bdde00} fill="var(--fill-0, #C9CCDE)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p20abc000} fill="var(--fill-0, #C9CCDE)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1346">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonBackgroundImage() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="button">
          <path d={svgPaths.p1d857a00} fill="var(--fill-0, #7A5DE8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[51.999px] items-start min-h-px min-w-px relative">
      <PBackgroundImageAndText text="How should I revise this design?" />
      <PBackgroundImageAndText1 text="이 디자인 어떻게 수정하면 좋을까요?" />
    </div>
  );
}

type PBackgroundImageAndText1Props = {
  text: string;
};

function PBackgroundImageAndText1({ text }: PBackgroundImageAndText1Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.59px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}

type PBackgroundImageAndTextProps = {
  text: string;
};

function PBackgroundImageAndText({ text }: PBackgroundImageAndTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Google_Sans:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.34px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function SavedExpressionsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full" data-name="영어 문장 암기 앱" style={{ backgroundImage: "linear-gradient(112.82deg, rgb(249, 247, 255) 0%, rgb(216, 205, 255) 100%)" }}>
      {/* 헤더 - 고정 */}
      <div className="fixed bg-white content-stretch flex flex-col h-[87.998px] items-start left-0 pt-[18px] px-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-full z-50" data-name="div">
        <div className="content-stretch flex gap-[12px] h-[47.999px] items-center pl-[-8px] relative shrink-0 w-[361.023px]" data-name="Container">
          <ButtonBackgroundImage1 onClick={() => navigate('/')}>
            <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ArrowLeft">
              <div className="absolute inset-[20.83%_49.99%_20.84%_20.84%]" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49987 13.3331">
                    <path d={svgPaths.p3eacd568} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-[20.84%] right-[20.83%] top-1/2" data-name="Vector">
                <div className="absolute inset-[-0.83px_-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3331 1.66664">
                    <path d="M12.4998 0.833319H0.833319" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
                  </svg>
                </div>
              </div>
            </div>
          </ButtonBackgroundImage1>
          <div className="flex-[1_0_0] h-[47.999px] min-h-px min-w-px relative" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <div className="h-[28px] relative shrink-0 w-full" data-name="h1">
                <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[0.19px] tracking-[-0.4395px] whitespace-nowrap">표현 저장함</p>
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="p">
                <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.59px] tracking-[-0.1504px] whitespace-nowrap">저장한 문장으로 복습하세요</p>
              </div>
            </div>
          </div>
          <ButtonBackgroundImage1>
            <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="RefreshCw">
              <RefreshCwVectorBackgroundImage additionalClassNames="bottom-1/2 top-[12.5%]">
                <path d={svgPaths.p1b7b5780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
              </RefreshCwVectorBackgroundImage>
              <RefreshCwVectorBackgroundImage1 additionalClassNames="inset-[12.5%_12.51%_66.67%_66.66%]">
                <path d={svgPaths.p709900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
              </RefreshCwVectorBackgroundImage1>
              <RefreshCwVectorBackgroundImage additionalClassNames="bottom-[12.5%] top-1/2">
                <path d={svgPaths.p325dff80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
              </RefreshCwVectorBackgroundImage>
              <RefreshCwVectorBackgroundImage1 additionalClassNames="inset-[66.67%_66.67%_12.5%_12.5%]">
                <path d={svgPaths.p16624c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
              </RefreshCwVectorBackgroundImage1>
            </div>
          </ButtonBackgroundImage1>
        </div>
      </div>

      {/* 스크롤 가능한 컨텐츠 영역 */}
      <div 
        className="absolute left-0 right-0 top-[88px] bottom-0 overflow-y-auto z-10"
      >
        <div className="px-[16px] pt-[16px] pb-[20px]">
          <div className="content-stretch flex h-[51.999px] items-center justify-between mb-[12px] w-full" data-name="Container">
            <div className="h-[20px] relative shrink-0 w-[64.928px]" data-name="p">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans_KR:Bold',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a5565] text-[0px] text-[14px] top-[0.59px] tracking-[-0.1504px] whitespace-nowrap">
                  <span className="leading-[20px]">{`총 `}</span>
                  <span className="font-['Inter:Semi_Bold','Noto_Sans_KR:Regular','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[20px] text-[#101828]">5개</span>
                  <span className="leading-[20px]">{` 문장`}</span>
                </p>
              </div>
            </div>
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
          </div>
          
          <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
            <ContainerBackgroundImage2>
              <div className="content-stretch flex flex-col gap-[12px] h-[112.529px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <ContainerBackgroundImage />
                  <ButtonBackgroundImage />
                </div>
                <div className="content-stretch flex h-[48.53px] items-center justify-between pt-[0.531px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.531px] inset-0 pointer-events-none" />
                  <BackgroundImage>
                    <div className="relative shrink-0 size-[10px]" data-name="span">
                      <IconAiBackgroundImage />
                    </div>
                    <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#80839e] text-[12px] whitespace-nowrap">AI로 내가 만든 표현</p>
                  </BackgroundImage>
                  <ContainerBackgroundImage1 />
                </div>
              </div>
            </ContainerBackgroundImage2>
            <ContainerBackgroundImage2>
              <div className="content-stretch flex flex-col gap-[12px] h-[112.529px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[51.999px] items-start min-h-px min-w-px relative" data-name="Container">
                    <PBackgroundImageAndText text="What if we simplify onboarding?" />
                    <PBackgroundImageAndText1 text="온보딩을 단순화해보면 어떨까요?" />
                  </div>
                  <ButtonBackgroundImage />
                </div>
                <div className="content-stretch flex h-[48.53px] items-center justify-between pt-[0.531px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.531px] inset-0 pointer-events-none" />
                  <div className="relative shrink-0 w-[128px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                        <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[15px]" data-name="📖 펼쳐진 책">
                          <div className="absolute inset-[13.87%_6.46%_13.88%_6.46%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0632 10.8375">
                              <g id="Group">
                                <path d={svgPaths.pd949172} fill="var(--fill-0, #C9CCDE)" id="Vector" />
                                <path d={svgPaths.p394de880} fill="var(--fill-0, #E4E7F4)" id="Vector_2" />
                                <path d={svgPaths.p2a303500} fill="var(--fill-0, #EFF1F9)" id="Vector_3" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute flex inset-0 items-center justify-center">
                            <div className="-rotate-90 flex-none size-[15px]">
                              <div className="relative size-full" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                                  <g id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[21.05%_57.89%_34.21%_18.42%] leading-[1.4] not-italic text-[#80839e] text-[3.819px] tracking-[-0.0764px]">A</p>
                          <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[13.16%_15.79%_34.21%_60.52%] leading-[1.4] not-italic text-[#a4a7be] text-[4.456px] tracking-[-0.0764px]">a</p>
                        </div>
                      </div>
                      <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#80839e] text-[12px] whitespace-nowrap">서비스 개발 기획하기</p>
                    </div>
                  </div>
                  <ContainerBackgroundImage1 />
                </div>
              </div>
            </ContainerBackgroundImage2>
            <ContainerBackgroundImage2>
              <div className="content-stretch flex flex-col gap-[12px] h-[112.529px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <ContainerBackgroundImage />
                  <ButtonBackgroundImage />
                </div>
                <div className="content-stretch flex h-[48.53px] items-center justify-between pt-[0.531px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.531px] inset-0 pointer-events-none" />
                  <BackgroundImage>
                    <div className="relative shrink-0 size-[10px]" data-name="span">
                      <IconAiBackgroundImage />
                    </div>
                    <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#80839e] text-[12px] whitespace-nowrap">AI로 내가 만든 표현</p>
                  </BackgroundImage>
                  <ContainerBackgroundImage1 />
                </div>
              </div>
            </ContainerBackgroundImage2>
            <ContainerBackgroundImage2>
              <div className="content-stretch flex flex-col gap-[12px] h-[112.529px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <ContainerBackgroundImage />
                  <ButtonBackgroundImage />
                </div>
                <div className="content-stretch flex h-[48.53px] items-center justify-between pt-[0.531px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.531px] inset-0 pointer-events-none" />
                  <BackgroundImage>
                    <div className="relative shrink-0 size-[10px]" data-name="span">
                      <IconAiBackgroundImage />
                    </div>
                    <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#80839e] text-[12px] whitespace-nowrap">AI로 내가 만든 표현</p>
                  </BackgroundImage>
                  <ContainerBackgroundImage1 />
                </div>
              </div>
            </ContainerBackgroundImage2>
            <ContainerBackgroundImage2>
              <div className="content-stretch flex flex-col gap-[12px] h-[112.529px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <ContainerBackgroundImage />
                  <ButtonBackgroundImage />
                </div>
                <div className="content-stretch flex h-[48.53px] items-center justify-between pt-[0.531px] relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.531px] inset-0 pointer-events-none" />
                  <BackgroundImage>
                    <div className="relative shrink-0 size-[10px]" data-name="span">
                      <IconAiBackgroundImage />
                    </div>
                    <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#80839e] text-[12px] whitespace-nowrap">AI로 내가 만든 표현</p>
                  </BackgroundImage>
                  <ContainerBackgroundImage1 />
                </div>
              </div>
            </ContainerBackgroundImage2>
          </div>
        </div>
      </div>
    </div>
  );
}
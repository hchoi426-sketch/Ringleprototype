import clsx from "clsx";
import svgPaths from "./svg-lsg583045h";
import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[3.994px] items-start p-[16px] relative w-full">{children}</div>
    </div>
  );
}
type IconAiBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconAiBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<IconAiBackgroundImageProps>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function XVectorBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6665 11.6665">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.53px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 pt-[23.999px] px-[23.999px] top-[85px] w-[393px]" data-name="ea">
        <div className="content-stretch flex flex-col gap-[7.997px] h-[155.045px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[19.988px] relative shrink-0 w-full" data-name="Label">
            <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.06px] tracking-[-0.1504px] whitespace-nowrap">한국어 또는 영어로 문장을 입력하세요</p>
          </div>
          <div className="h-[121.019px] relative rounded-[14px] shrink-0 w-full" data-name="Text Area">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
                <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] tracking-[-0.3125px] whitespace-nowrap">
                  <p className="mb-0">예: 나는 매일 아침 운동을 해요</p>
                  <p>또는: I exercise every morning</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.528px] border-solid inset-0 pointer-events-none rounded-[14px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[30px] h-[360px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="relative rounded-[16px] shrink-0 w-full" data-name="ea" style={{ backgroundImage: "linear-gradient(143.52deg, rgb(249, 247, 255) 0%, rgb(216, 205, 255) 100%)" }}>
            <div aria-hidden="true" className="absolute border border-[#6932c2] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="content-stretch flex flex-col gap-[15.994px] items-start pb-[1.585px] pt-[25.584px] px-[25.584px] relative w-full">
              <div className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="h-[19.988px] relative shrink-0 w-full" data-name="Paragraph">
                  <div className="absolute content-stretch flex gap-[5px] items-start left-[100.42px] top-0">
                    <IconAiBackgroundImage additionalClassNames="relative shrink-0">
                      <g clipPath="url(#clip0_3_1525)" id="Icon/AI">
                        <path clipRule="evenodd" d={svgPaths.p1506440} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector" />
                        <path clipRule="evenodd" d={svgPaths.p2e6fc500} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector_2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_1525">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </IconAiBackgroundImage>
                    <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a5de8] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">생성된 표현</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[15.994px] h-[191.943px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage>
                  <ParagraphBackgroundImageAndText text="한국어" />
                  <div className="h-[23.999px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.36px] tracking-[-0.3125px] whitespace-nowrap">이 디자인 어떻게 수정하면 좋을까요?</p>
                  </div>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage>
                  <ParagraphBackgroundImageAndText text="영어" />
                  <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.36px] tracking-[-0.3125px] w-[254px]">How should I revise this design?</p>
                  </div>
                </ContainerBackgroundImage>
              </div>
            </div>
          </div>
          <div className="h-[47.998px] relative shrink-0 w-full" data-name="ea">
            <div className="absolute bg-[#f3f4f6] h-[47.998px] left-0 rounded-[14px] top-0 w-[166.483px]" data-name="Button">
              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[24px] left-[83.61px] not-italic text-[#364153] text-[16px] text-center top-[11.64px] tracking-[-0.3125px] whitespace-nowrap">다시 만들기</p>
            </div>
            <div className="absolute h-[47.998px] left-[178.48px] rounded-[14px] top-0 w-[166.483px]" data-name="Button" style={{ backgroundImage: "linear-gradient(-29.4838deg, rgb(105, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%), linear-gradient(90deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}>
              <p className="-translate-x-1/2 absolute font-['Pretendard:SemiBold',sans-serif] leading-[24px] left-[82.87px] not-italic text-[16px] text-center text-white top-[11.64px] tracking-[-0.3125px] whitespace-nowrap">이 표현 저장하기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[76.53px] items-start left-0 pb-[0.531px] pt-[16px] px-[24px] rounded-tl-[24px] rounded-tr-[24px] top-[8px] w-[393.022px]" data-name="div">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.531px] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
        <div className="content-stretch flex h-[43.999px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <div className="h-[44px] relative shrink-0 w-[195px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11px] items-center relative size-full">
              <div className="relative rounded-[34.468px] shrink-0 size-[43.15px]" data-name="FAB">
                <div aria-hidden="true" className="absolute bg-clip-padding border-[0.575px] border-[transparent] border-solid inset-0 pointer-events-none rounded-[34.468px]">
                  <img alt="" className="absolute bg-clip-padding border-[0.575px] border-[transparent] border-solid max-w-none object-cover rounded-[34.468px] size-full" src={imgFab} />
                  <div className="absolute bg-clip-padding border-[0.575px] border-[transparent] border-solid inset-0 overflow-hidden rounded-[34.468px]">
                    <img alt="" className="absolute h-[935.7%] left-[-344.31%] max-w-none top-[-179.6%] w-[491.75%]" src={imgFab1} />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#d5b7ff] border-[1.149px] border-solid inset-0 pointer-events-none rounded-[35.043000000000006px] shadow-[2.298px_2.298px_4.596px_0px_rgba(98,72,194,0.3)]" />
                <div className="bg-clip-padding border-[0.575px] border-[transparent] border-solid content-stretch flex flex-col items-start px-[16.085px] py-[11.489px] relative size-full">
                  <IconAiBackgroundImage additionalClassNames="absolute left-[13.09px] top-[13.49px]">
                    <g clipPath="url(#clip0_3_1164)" id="Icon/AI">
                      <path clipRule="evenodd" d={svgPaths.p1506440} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector" />
                      <path clipRule="evenodd" d={svgPaths.p2e6fc500} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector_2" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_1164">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </IconAiBackgroundImage>
                </div>
              </div>
              <div className="h-[44px] relative shrink-0 w-[141px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute h-[28px] left-[-0.15px] top-0 w-[141px]" data-name="h2">
                    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-0 w-[141px]">
                      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] tracking-[-0.4395px] whitespace-nowrap">AI 표현 만들기</p>
                      <div className="content-stretch flex flex-col items-center justify-center p-[5.455px] relative rounded-[54.545px] shrink-0 size-[16px]">
                        <div aria-hidden="true" className="absolute border-[#80839e] border-[0.545px] border-solid inset-0 pointer-events-none rounded-[54.545px]" />
                        <p className="font-['Pretendard:Medium',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#80839e] text-[6.545px] text-center w-full">i</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[16px] left-0 top-[28px] w-[120.911px]" data-name="p">
                    <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.53px] whitespace-nowrap">나만의 표현을 학습하세요</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[10px] shrink-0 size-[35.999px]" data-name="button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
              <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="X">
                <XVectorBackgroundImage>
                  <path d={svgPaths.p3db5ab00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
                </XVectorBackgroundImage>
                <XVectorBackgroundImage>
                  <path d={svgPaths.p27e4dc80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
                </XVectorBackgroundImage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import clsx from "clsx";
import svgPaths from "./svg-jdvvbwyisx";
type ContainerBackgroundImage1Props = {
  text: string;
};

function ContainerBackgroundImage1({ children, text }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className="bg-[#f8f7ff] h-[52.785px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pt-[15.994px] px-[15.994px] relative size-full">
        <div className="h-[20.797px] relative shrink-0 w-full">
          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20.8px] left-0 not-italic text-[#140f33] text-[13px] top-[0.64px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ListItemBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[41.594px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20.8px] left-0 not-italic text-[#484b71] text-[13px] top-[0.64px] w-[259px]">{children}</p>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-[268.974px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative rounded-[17722700px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return <BackgroundImage1 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage1>;
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[20.995px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[21px] left-0 not-italic text-[#140f33] text-[14px] top-[0.11px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage1 additionalClassNames={clsx("h-[17.999px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-[-0.42px] whitespace-nowrap">{text}</p>
    </BackgroundImage1>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[0.528px] items-start overflow-clip relative rounded-[20px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <div className="bg-white h-[71.989px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="LearningTipModal">
        <div aria-hidden="true" className="absolute border-[rgba(153,153,153,0.5)] border-b-[0.6px] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[0.6px] px-[20px] relative size-full">
            <BackgroundImage additionalClassNames="h-[26.995px] w-[86.06px]">
              <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#140f33] text-[18px] top-[-0.36px] whitespace-nowrap">표현 학습 팁</p>
            </BackgroundImage>
            <BackgroundImage2 additionalClassNames="size-[31.996px]">
              <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
                  <g id="Icon">
                    <path d={svgPaths.p14b72600} id="Vector" stroke="var(--stroke-0, #80839E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66637" />
                    <path d={svgPaths.p109ea980} id="Vector_2" stroke="var(--stroke-0, #80839E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66637" />
                  </g>
                </svg>
              </div>
            </BackgroundImage2>
          </div>
        </div>
      </div>
      <div className="h-[927.52px] relative shrink-0 w-full" data-name="LearningTipModal">
        <div className="content-stretch flex flex-col gap-[23.999px] items-start pt-[19.996px] px-[23.999px] relative size-full">
          <div className="h-[101.377px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(-68.322deg, rgb(80, 50, 194) 2.5944%, rgb(143, 114, 255) 96.664%)" }}>
            <div className="content-stretch flex flex-col gap-[12px] items-start pt-[19.996px] px-[19.996px] relative size-full">
              <div className="h-[26.995px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-white top-[-0.36px] whitespace-nowrap">What if we ______?</p>
              </div>
              <div className="h-[22.39px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[22.4px] left-0 not-italic text-[#c6d2ff] text-[14px] top-[-0.36px] whitespace-nowrap">~해보는 건 어떨까요? (제안하기)</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] h-[284.539px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[7.997px] h-[27.993px] items-center relative shrink-0 w-full" data-name="Container">
              <BackgroundImage2 additionalClassNames="bg-[#eae4ff] size-[24px]">
                <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 15.9939">
                    <g clipPath="url(#clip0_2_442)" id="Icon">
                      <path d={svgPaths.p140c5300} id="Vector" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33282" />
                      <path d="M5.99769 11.9954H9.99616" id="Vector_2" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33282" />
                      <path d="M6.66411 14.661H9.32975" id="Vector_3" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33282" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_442">
                        <rect fill="white" height="15.9939" width="15.9939" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </BackgroundImage2>
              <BackgroundImage additionalClassNames="h-[23.999px] w-[59.106px]">
                <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#140f33] text-[16px] top-[-0.89px] whitespace-nowrap">표현 구조</p>
              </BackgroundImage>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] h-[244.546px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[12px] h-[87.38px] items-start relative shrink-0 w-full" data-name="Container">
                <BackgroundImage2 additionalClassNames="bg-[#7a5de8] size-[23.999px]">
                  <TextBackgroundImageAndText text="1" additionalClassNames="w-[5.628px]" />
                </BackgroundImage2>
                <ContainerBackgroundImage additionalClassNames="h-[87.38px]">
                  <ParagraphBackgroundImageAndText text="What if" />
                  <div className="h-[62.391px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20.8px] left-0 not-italic text-[#484b71] text-[13px] top-[0.64px] w-[265px]">{`가정이나 제안을 할 때 사용하는 표현입니다. '만약 ~한다면 어떨까?'라는 의미로, 부드럽게 아이디어를 제시할 때 유용합니다.`}</p>
                  </div>
                </ContainerBackgroundImage>
              </div>
              <div className="content-stretch flex gap-[12px] h-[66.583px] items-start relative shrink-0 w-full" data-name="Container">
                <BackgroundImage2 additionalClassNames="bg-[#7a5de8] size-[23.999px]">
                  <TextBackgroundImageAndText text="2" additionalClassNames="w-[7.328px]" />
                </BackgroundImage2>
                <ContainerBackgroundImage additionalClassNames="h-[66.583px]">
                  <ParagraphBackgroundImageAndText text="주어 + 동사" />
                  <div className="h-[41.594px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20.8px] left-0 not-italic text-[#484b71] text-[13px] top-[0.64px] w-[266px]">{`'we'와 동사를 이어서 '우리가 ~한다면'이라는 의미를 만듭니다. 팀워크나 협업 상황에서 자주 사용됩니다.`}</p>
                  </div>
                </ContainerBackgroundImage>
              </div>
              <div className="content-stretch flex gap-[12px] h-[66.583px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#7a5de8] relative rounded-[17722700px] shrink-0 size-[23.999px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
                    <TextBackgroundImageAndText text="3" additionalClassNames="w-[7.667px]" />
                  </div>
                </div>
                <ContainerBackgroundImage additionalClassNames="h-[66.583px]">
                  <ParagraphBackgroundImageAndText text="물음표 (?)" />
                  <div className="h-[41.594px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20.8px] left-0 not-italic text-[#484b71] text-[13px] top-[0.64px] w-[267px]">제안이지만 질문 형태로 표현하여 상대방의 의견을 존중하는 뉘앙스를 줍니다.</p>
                  </div>
                </ContainerBackgroundImage>
              </div>
            </div>
          </div>
          <div className="bg-[#fff9e3] h-[220.761px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[11.999px] items-start pt-[19.996px] px-[19.996px] relative size-full">
              <div className="content-stretch flex gap-[7.997px] h-[27.993px] items-center relative shrink-0 w-full" data-name="Container">
                <BackgroundImage2 additionalClassNames="bg-[#ffecb9] size-[28px]">
                  <div className="relative shrink-0 size-[13px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                      <g clipPath="url(#clip0_2_439)" id="Icon">
                        <path d={svgPaths.paf62080} id="Vector" stroke="var(--stroke-0, #D4A017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33282" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_439">
                          <rect fill="white" height="13" width="13" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </BackgroundImage2>
                <BackgroundImage additionalClassNames="h-[22.505px] w-[68.358px]">
                  <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[22.5px] left-0 not-italic text-[#140f33] text-[15px] top-[-0.89px] whitespace-nowrap">말하기 꿀팁</p>
                </BackgroundImage>
              </div>
              <div className="content-stretch flex flex-col gap-[7.997px] h-[140.776px] items-start relative shrink-0 w-full" data-name="List">
                <ListItemBackgroundImage>• 회의나 브레인스토밍에서 새로운 아이디어를 제안할 때 사용하세요</ListItemBackgroundImage>
                <ListItemBackgroundImage>{`• 'What if we try...?'처럼 동사를 바로 이어서 말하면 자연스럽습니다`}</ListItemBackgroundImage>
                <div className="h-[41.594px] relative shrink-0 w-full" data-name="List Item">
                  <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20.8px] left-0 not-italic text-[#484b71] text-[13px] top-[0.64px] w-[263px]">• 친근하고 부담 없는 분위기에서 효과적인 표현입니다</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] h-[208.853px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[22.505px] relative shrink-0 w-full" data-name="Heading 4">
              <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[22.5px] left-0 not-italic text-[#140f33] text-[15px] top-[-0.89px] whitespace-nowrap">💬 이렇게 활용하세요</p>
            </div>
            <div className="content-stretch flex flex-col gap-[7.997px] h-[174.348px] items-start relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage1 text="What if we start the meeting earlier?" />
              <ContainerBackgroundImage1 text="What if we add more colors to the design?" />
              <ContainerBackgroundImage1 text="What if we postpone this until next week?" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
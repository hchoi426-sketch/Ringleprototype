import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-z06z31qwwq";
import navSvgPaths from "../../imports/svg-don2ylv7zg";
import iconSvgPaths from "../../imports/svg-h58fptvju1";
import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";
import imgGeminiGeneratedImageOyee9Noyee9Noyee1 from "figma:asset/5b0c15d9ee3500b757dc1e86fa0bad9979c14369.png";
import imgFrame48098991 from "figma:asset/a0db5049c92eeae60ab6585dab1e80c418a41c43.png";
import imgGeminiGeneratedImageOyee9Noyee9Noyee2 from "figma:asset/8e7da691afaee5d8435b7875ff9402c7d3a38a4e.png";
import headerSvgPaths from "../../imports/svg-vk8lhqw6kc";

export default function RolePlayPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#efefff] from-[3.988%] relative size-full to-[#dddcff] to-[13.438%]">
      {/* 상단 헤더 */}
      <div className="absolute h-[44px] left-0 overflow-clip right-px top-0">
        <div className="absolute contents right-[14.67px] top-[17.33px]">
          <div className="absolute contents right-[14.67px] top-[17.33px]">
            <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11.3333">
                <path d={headerSvgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2E2E)" />
              </svg>
            </div>
            <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
                <path d={headerSvgPaths.p32d253c0} fill="var(--fill-0, #2E2E2E)" id="Combined Shape" opacity="0.4" />
              </svg>
            </div>
            <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7.33333">
                <path d={headerSvgPaths.p3544af00} fill="var(--fill-0, #2E2E2E)" id="Rectangle" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
              <path d={headerSvgPaths.p28808ef0} fill="var(--fill-0, #2E2E2E)" id="Wifi" />
            </svg>
          </div>
          <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
              <path d={headerSvgPaths.p1d181800} fill="var(--fill-0, #2E2E2E)" id="Mobile Signal" />
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[19px] top-[17px]">
          <div className="absolute h-[11.089px] left-[19px] top-[17px] w-[28.426px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4262 11.0889">
              <g id="9:41">
                <path d={headerSvgPaths.p1218b780} fill="var(--fill-0, #2E2E2E)" />
                <path d={headerSvgPaths.p25dc35c0} fill="var(--fill-0, #2E2E2E)" />
                <path d={headerSvgPaths.p38b62380} fill="var(--fill-0, #2E2E2E)" />
                <path d={headerSvgPaths.p3a930400} fill="var(--fill-0, #2E2E2E)" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 상단 타이틀 및 아이콘 */}
      <div className="absolute content-stretch flex items-center justify-between left-0 pb-[8px] pt-[12px] px-[20px] top-[44px] w-[393px]">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.24px] whitespace-nowrap">AI 튜터</p>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[5.78%_12.5%_0.77%_11.82%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1637 22.427">
                <g>
                  <g />
                  <path d={iconSvgPaths.p2ef2ba00} fill="url(#paint0_linear_fire)" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_fire" x1="9.08183" x2="9.08183" y1="0" y2="20.715">
                    <stop stopColor="#FF6F84" />
                    <stop offset="1" stopColor="#FF8555" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="list-bold">
                <path d={iconSvgPaths.p160cd200} fill="var(--fill-0, black)" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="absolute left-0 right-0 top-[104px] px-[20px]">
        <div className="flex items-center gap-[8px] pb-px pt-[16px]">
          <div className="border-b-[1.2px] border-black px-[8px]">
            <div className="flex gap-[2px] items-center">
              <div className="flex items-center">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_roleplay_emoji)">
                      <g>
                        <g>
                          <g>
                            <path d={svgPaths.p1f6e7900} fill="var(--fill-0, #333333)" />
                            <path d={svgPaths.p1c5ebc00} fill="var(--fill-0, #333333)" />
                          </g>
                          <path d={svgPaths.p31a19580} fill="var(--fill-0, #FFCCA8)" />
                          <g>
                            <path d={svgPaths.p15c31640} fill="var(--fill-0, black)" />
                            <path d={svgPaths.pc9c7900} fill="var(--fill-0, black)" />
                          </g>
                          <path d={svgPaths.p3dac7f60} fill="var(--fill-0, #5C2F17)" />
                        </g>
                        <path d={svgPaths.p1c884800} fill="var(--fill-0, #333333)" />
                        <path d={svgPaths.p3c491680} fill="var(--fill-0, #262626)" />
                        <path d={svgPaths.p15d90200} fill="var(--fill-0, #FFAA00)" />
                      </g>
                      <g />
                    </g>
                    <defs>
                      <clipPath id="clip0_roleplay_emoji">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[#272727] text-[16px] text-center tracking-[-0.24px] whitespace-nowrap">학습중</p>
              </div>
              <div className="flex items-center pt-px">
                <div className="relative shrink-0 size-[4px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                    <circle cx="2" cy="2" fill="var(--fill-0, #FF6877)" r="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[8px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[#8c90aa] text-[16px] text-center tracking-[-0.24px] whitespace-nowrap">생활필수</p>
          </div>
          <div className="px-[8px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[#8c90aa] text-[16px] text-center tracking-[-0.24px] whitespace-nowrap">직장인</p>
          </div>
          <div className="px-[8px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[#8c90aa] text-[16px] text-center tracking-[-0.24px] whitespace-nowrap">글로벌 현장</p>
          </div>
        </div>
        <div className="border-b border-[#e4e7f4]" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="absolute bg-white content-stretch flex flex-col gap-[20px] left-0 pb-[20px] rounded-tl-[20px] rounded-tr-[20px] top-[198px] bottom-[87px] overflow-y-auto">
        {/* 제목 섹션 */}
        <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[20px] relative">
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
            <div 
              onClick={() => navigate('/')}
              className="relative shrink-0 size-[24px] cursor-pointer"
            >
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p3f0f6f40} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.00033" />
                </g>
              </svg>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.24px] whitespace-nowrap">UX 디자이너</p>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic opacity-50 relative shrink-0 text-[#8c90aa] text-[19px] text-center tracking-[-0.24px] whitespace-nowrap">|</p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c90aa] text-[18px] text-center tracking-[-0.24px] whitespace-nowrap">글로벌 현장</p>
                <div className="relative shrink-0 size-[3px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
                    <circle cx="1.5" cy="1.5" fill="var(--fill-0, #8C90AA)" r="1.5" />
                  </svg>
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c90aa] text-[18px] text-center tracking-[-0.24px] whitespace-nowrap">직무별</p>
              </div>
            </div>
          </div>

          {/* 타임라인 라인 */}
          <div className="absolute flex h-[866px] items-center justify-center left-[41px] top-[74px] w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[866px]">
                <div className="absolute inset-[-2px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 866 2">
                    <line stroke="url(#paint0_linear_roleplay_line)" strokeDasharray="4 4" strokeWidth="2" x2="866" y1="1" y2="1" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_roleplay_line" x1="0" x2="866" y1="2.5" y2="2.5">
                        <stop stopColor="#7A5DE8" />
                        <stop offset="0.330149" stopColor="#7A5DE8" />
                        <stop offset="0.468321" stopColor="#7A5DE8" stopOpacity="0.2" />
                        <stop offset="1" stopColor="#7A5DE8" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 카드 리스트 */}
          <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
            {/* 카드 1 - 완료됨 */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" fill="var(--fill-0, #EEEBFA)" r="20" stroke="var(--stroke-0, #E0D8FC)" strokeWidth="4" />
                  </svg>
                </div>
                <div className="col-1 ml-[11.73px] mt-[11.73px] relative row-1 size-[20.533px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5333 20.5334">
                    <circle cx="10.2667" cy="10.2667" fill="var(--fill-0, #7B69DE)" r="10.2667" />
                    <path d={svgPaths.p26c22200} fill="var(--fill-0, white)" />
                  </svg>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[#e6e3f1] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="bg-[#e8e3ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[10px] tracking-[-0.24px] whitespace-nowrap">Advanced</p>
                    </div>
                    <div className="bg-[#e9e9e9] h-[104px] overflow-clip relative rounded-[8px] shrink-0 w-full">
                      <div className="absolute flex h-[180px] items-center justify-center left-[-5px] top-[-31px] w-[320px]">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="bg-[rgba(0,0,0,0.4)] h-[180px] overflow-clip relative rounded-[8px] w-[320px]">
                            <div className="absolute h-[248px] left-[-48px] top-[-50px] w-[455px]" />
                            <div className="absolute h-[274px] left-[-131px] top-[-50px] w-[502px]">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageOyee9Noyee9Noyee1} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.24px] w-full">UX 디자이너 Ardelle의 시선</p>
                      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] opacity-50 relative shrink-0 text-[10px] w-full">
                        <p className="leading-[14px]">Ardelle이 UX디자이너로서 직면하는 상황과 이를 설명하기 위해 사용하는 문구를 살펴보세요.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]">
                      <div aria-hidden="true" className="absolute border border-[#7a5de8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[18px] py-[12px] relative size-full">
                          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a5de8] text-[13px] tracking-[-0.24px] whitespace-nowrap">대화 기록 보기</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(122,93,232,0.1)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[18px] py-[12px] relative size-full">
                          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a5de8] text-[13px] tracking-[-0.24px] whitespace-nowrap">다시 대화하기</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 카드 2 - 진행 중 */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-white relative rounded-[999px] shrink-0 size-[44px]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
                    <div className="bg-[#7b69de] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
                      <div aria-hidden="true" className="absolute border-4 border-[#e7e3fa] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
                      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">01</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[#e6e3f1] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="bg-[#e8e3ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[10px] tracking-[-0.24px] whitespace-nowrap">Advanced</p>
                    </div>
                    <div className="bg-[#e9e9e9] h-[104px] overflow-clip relative rounded-[8px] shrink-0 w-full">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[180px] items-center justify-center left-[calc(50%+0.5px)] top-[calc(50%+8px)] w-[320px]">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="bg-[rgba(0,0,0,0.4)] h-[180px] overflow-clip relative rounded-[8px] w-[320px]">
                            <div className="absolute h-[248px] left-[-48px] top-[-50px] w-[455px]" />
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[127px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[319px]">
                              <div className="-scale-y-100 flex-none rotate-180">
                                <div className="h-[127px] relative rounded-[8px] w-[319px]">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame48098991} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.24px] w-full">안녕하세요, Ardelle 입니다!</p>
                      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] opacity-50 relative shrink-0 text-[10px] w-full">
                        <p className="leading-[14px]">Ardelle이 인터랙티브 디자이너로서 업무를 진행할 때 사용하는 표현들을 알아봅시다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#7a5de8] h-[36px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#6b4ed7] transition-colors">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[18px] py-[12px] relative size-full">
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.24px] whitespace-nowrap">대화 시작하기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 카드 3 - 잠김 */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-white relative rounded-[999px] shrink-0 size-[44px]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
                    <div className="bg-[#d0cbe9] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
                      <div aria-hidden="true" className="absolute border-4 border-[#f4f1ff] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
                      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">03</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[#e6e3f1] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="bg-[#e8e3ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[10px] tracking-[-0.24px] whitespace-nowrap">Advanced</p>
                    </div>
                    <div className="bg-[#e9e9e9] h-[104px] overflow-clip relative rounded-[8px] shrink-0 w-full">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[180px] items-center justify-center left-[calc(50%+0.5px)] top-[calc(50%+8px)] w-[320px]">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="bg-[rgba(0,0,0,0.4)] h-[180px] overflow-clip relative rounded-[8px] w-[320px]">
                            <div className="absolute h-[248px] left-[-48px] top-[-50px] w-[455px]" />
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[127px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[319px]">
                              <div className="-scale-y-100 flex-none rotate-180">
                                <div className="h-[127px] relative rounded-[8px] w-[319px]">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgGeminiGeneratedImageOyee9Noyee9Noyee2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.24px] w-full">UX 품질 높 이어야 프래킹 인정받기</p>
                      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] opacity-50 relative shrink-0 text-[10px] w-full">
                        <p className="leading-[14px]">Ardelle이 사용하는 방법으로 문제의 대한 의견을 뛰어넘습니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#a8a8a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[18px] py-[12px] relative size-full">
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[13px] tracking-[-0.24px] whitespace-nowrap">학습하기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 카드 4 - 잠김 */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-white relative rounded-[999px] shrink-0 size-[44px]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
                    <div className="bg-[#d0cbe9] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
                      <div aria-hidden="true" className="absolute border-4 border-[#f4f1ff] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
                      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">04</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[#e6e3f1] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="bg-[#e8e3ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[10px] tracking-[-0.24px] whitespace-nowrap">Advanced</p>
                    </div>
                    <div className="bg-[#e9e9e9] h-[104px] overflow-clip relative rounded-[8px] shrink-0 w-full" />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.24px] w-full">피드백 빌르스 대응하기</p>
                      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] opacity-50 relative shrink-0 text-[10px] w-full">
                        <p className="leading-[14px]">Ardelle이 인터랙티브 디자이너로서 발생한 문제에 반응 및 설명하는 표현입니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#a8a8a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[18px] py-[12px] relative size-full">
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[13px] tracking-[-0.24px] whitespace-nowrap">학습하기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAB 버튼 */}
      <div className="absolute bottom-[107px] content-stretch flex flex-col h-[48px] items-start px-[14px] py-[10px] right-[20px] rounded-[30px] w-[123px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgFab} />
          <div className="absolute inset-0 overflow-hidden rounded-[30px]">
            <img alt="" className="absolute h-[935.7%] left-[-344.31%] max-w-none top-[-179.6%] w-[491.75%]" src={imgFab1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d5b7ff] border-solid inset-[-0.5px] pointer-events-none rounded-[30.5px] shadow-[0px_2px_4px_0px_rgba(79,82,104,0.12)]" />
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[3px] items-center left-1/2 top-[16px]">
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_roleplay_fab)">
                <path clipRule="evenodd" d={svgPaths.p1506440} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2e6fc500} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip0_roleplay_fab">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a5de8] text-[14px] tracking-[-0.28px] whitespace-nowrap">
            <p className="leading-none">AI 롤플레잉</p>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 shadow-[0px_-6px_13px_0px_rgba(153,153,153,0.15)]">
        <div className="bg-white border-t border-[#f0f0f0] h-[60px]">
          <div className="flex items-center justify-center size-full">
            <div className="flex gap-[24px] items-center justify-center w-full">
              <div 
                onClick={() => navigate('/')}
                className="flex flex-col gap-[2px] items-center w-[36px] cursor-pointer"
              >
                <div className="relative size-[36px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                    <path d={navSvgPaths.p23788300} fill="var(--fill-0, #C9CCDE)" />
                  </svg>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-normal text-[#c9ccde] text-center tracking-[-0.24px] whitespace-nowrap">홈</p>
              </div>

              <div className="flex flex-col gap-[2px] items-center w-[36px]">
                <div className="relative size-[36px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                    <path d={navSvgPaths.pb0daf00} fill="var(--fill-0, #C9CCDE)" />
                  </svg>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-normal text-[#a4a7be] text-center tracking-[-0.24px] whitespace-nowrap">1:1 수업</p>
              </div>

              <div className="flex flex-col gap-[2px] items-center w-[36px]">
                <div className="relative size-[36px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                    <path d={navSvgPaths.p31e81830} fill="var(--fill-0, #150F33)" />
                  </svg>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-normal text-[#150f33] text-center tracking-[-0.24px] whitespace-nowrap">AI 튜터</p>
              </div>

              <div className="flex flex-col gap-[2px] items-center w-[36px]">
                <div className="relative size-[36px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                    <path d={navSvgPaths.p1a36e380} fill="var(--fill-0, #C9CCDE)" />
                  </svg>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-normal text-[#a4a7be] text-center tracking-[-0.24px] whitespace-nowrap">AI 전화</p>
              </div>

              <div className="flex flex-col gap-[2px] items-center w-[36px]">
                <div className="flex items-center justify-center size-[36px]">
                  <div className="flex gap-[2px] items-end justify-center">
                    <div className="bg-[#c9ccde] h-[18px] rounded-[1px] w-[6.5px]" />
                    <div className="bg-[#c9ccde] h-[14px] rounded-[1px] w-[6.5px]" />
                    <div className="bg-[#c9ccde] h-[22px] rounded-[1px] w-[6.5px]" />
                  </div>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-normal text-[#a4a7be] text-center tracking-[-0.24px] whitespace-nowrap">성취</p>
              </div>

              <div className="flex flex-col gap-[2px] items-center w-[36px]">
                <div className="relative size-[36px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                    <path clipRule="evenodd" d={navSvgPaths.p28fe4f0} fill="var(--fill-0, #C9CCDE)" fillRule="evenodd" />
                  </svg>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-normal text-[#a4a7be] text-center tracking-[-0.24px] whitespace-nowrap">마이링글</p>
              </div>
            </div>
          </div>
        </div>
        {/* Home Indicator */}
        <div className="bg-white h-[27px] relative">
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-black h-[5px] rounded-[100px] w-[134px]" />
        </div>
      </div>
    </div>
  );
}

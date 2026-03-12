import { useNavigate } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-vk8lhqw6kc";
import navSvgPaths from "../../imports/svg-don2ylv7zg";
import tabSvgPaths from "../../imports/svg-w1sxuzqwcl";
import learningSvgPaths from "../../imports/svg-70k3z1jpsw";
import iconSvgPaths from "../../imports/svg-h58fptvju1";
import imgRectangle from "figma:asset/86341c7bede83b7cbe181f624568ab9e63463b5d.png";
import imgFrame48098576 from "figma:asset/19d0529e5aba2cd3397fde565e1ef51a4df0634e.png";
import imgGeminiGeneratedImageOyee9Noyee9Noyee1 from "figma:asset/5b0c15d9ee3500b757dc1e86fa0bad9979c14369.png";
import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";
import Fab from "../../imports/Fab";
import MotionDiv from "../../imports/MotionDiv";
import { AiExpressionBottomSheet } from "../components/AiExpressionBottomSheet";

export default function HomePage() {
  const navigate = useNavigate();
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false);
  const [isAiBottomSheetOpen, setIsAiBottomSheetOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#efefff] from-[3.988%] relative size-full to-[#dddcff] to-[13.438%]">
      {/* 상단 헤더 */}
      <div className="absolute h-[44px] left-0 overflow-clip right-px top-0">
        <div className="absolute contents right-[14.67px] top-[17.33px]">
          <div className="absolute contents right-[14.67px] top-[17.33px]">
            <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11.3333">
                <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #2E2E2E)" />
              </svg>
            </div>
            <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
                <path d={svgPaths.p32d253c0} fill="var(--fill-0, #2E2E2E)" id="Combined Shape" opacity="0.4" />
              </svg>
            </div>
            <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7.33333">
                <path d={svgPaths.p3544af00} fill="var(--fill-0, #2E2E2E)" id="Rectangle" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
              <path d={svgPaths.p28808ef0} fill="var(--fill-0, #2E2E2E)" id="Wifi" />
            </svg>
          </div>
          <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
              <path d={svgPaths.p1d181800} fill="var(--fill-0, #2E2E2E)" id="Mobile Signal" />
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[19px] top-[17px]">
          <div className="absolute h-[11.089px] left-[19px] top-[17px] w-[28.426px]">
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

      {/* 아이콘 메뉴 */}
      <div className="absolute left-0 right-0 top-[104px] flex gap-[42px] items-start pb-[8px] px-[36px]">
        {/* 표현 학습 - 활성화 */}
        <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px min-w-px">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[60px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                <circle cx="30" cy="30" fill="white" r="30" />
              </svg>
            </div>
            <div className="col-1 ml-[12.71px] mt-[12.71px] relative row-1 size-[34.561px]">
              <div className="absolute inset-[13.88%_6.45%_13.88%_6.46%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0969 24.9706">
                  <g>
                    <path d={tabSvgPaths.pb248700} fill="var(--fill-0, #7A5DE8)" />
                    <path d={tabSvgPaths.p88f3300} fill="var(--fill-0, #DBD2FD)" />
                    <path d={tabSvgPaths.p2d966800} fill="var(--fill-0, #F4F2FF)" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[21.05%_57.89%_34.21%_18.42%] leading-[1.4] not-italic text-[#9a85e8] text-[12px] tracking-[-0.24px]">A</p>
              <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[13.16%_15.79%_34.21%_60.53%] leading-[1.4] not-italic text-[#533bac] text-[14px] tracking-[-0.24px]">a</p>
            </div>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.4] text-[#503cc8] tracking-[-0.24px] whitespace-nowrap">표현 학습</p>
        </div>

        {/* 롤플레잉 - 비활성화 */}
        <div 
          onClick={() => navigate('/roleplay')}
          className="flex flex-1 flex-col gap-[4px] items-center min-h-px min-w-px opacity-50 cursor-pointer"
        >
          <div className="relative shrink-0 size-[60px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <circle cx="30" cy="30" fill="white" r="30" />
              <g clipPath="url(#clip0_3_564)" opacity="0.5">
                <g>
                  <path d={tabSvgPaths.p2b9e6580} fill="url(#paint0_linear_3_564)" />
                  <g>
                    <path d={tabSvgPaths.p20864000} fill="white" />
                    <path d={tabSvgPaths.p1ba1e080} fill="white" />
                    <path d={tabSvgPaths.p310a0680} fill="white" />
                  </g>
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
            </svg>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.4] text-[rgba(17,17,17,0.3)] tracking-[-0.24px] whitespace-nowrap">롤플레잉</p>
        </div>

        {/* 교재 학습 - 비활성화 */}
        <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px min-w-px opacity-50">
          <div className="relative shrink-0 size-[60px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <circle cx="30" cy="30" fill="white" r="30" />
              <g clipPath="url(#clip0_3_605)">
                <g>
                  <path d={tabSvgPaths.pc126900} fill="#F6F6F6" />
                  <path d={tabSvgPaths.p399c74c0} fill="url(#paint0_linear_3_605)" />
                  <path d={tabSvgPaths.p1cf4d100} fill="#BEBEDE" />
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
            </svg>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.4] text-[rgba(17,17,17,0.4)] tracking-[-0.24px] whitespace-nowrap opacity-70">교재 학습</p>
        </div>

        {/* 리포트 - 비활성화 */}
        <div 
          onClick={() => navigate('/report')}
          className="flex flex-1 flex-col gap-[4px] items-center min-h-px min-w-px cursor-pointer opacity-50"
        >
          <div className="relative shrink-0 size-[60px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <circle cx="30" cy="30" fill="white" r="30" />
              <g clipPath="url(#clip0_3_544)">
                <g>
                  <g>
                    <path d={tabSvgPaths.pa0b8000} fill="#D0D5DA" />
                    <path d={tabSvgPaths.p5403e00} fill="#7A5DE8" />
                    <path d={tabSvgPaths.p1b0cfe00} fill="#8A94A0" />
                  </g>
                  <path d={tabSvgPaths.p39938780} fill="#7A5DE8" />
                  <path d={tabSvgPaths.p3342800} fill="#7A5DE8" />
                  <path d={tabSvgPaths.p1a53f300} fill="#7A5DE8" />
                  <path d={tabSvgPaths.pddc3680} fill="#7A5DE8" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3_544">
                  <rect fill="white" height="30.4581" transform="translate(15.2326 15.2081)" width="30.4581" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.4] text-[rgba(17,17,17,0.4)] tracking-[-0.24px] whitespace-nowrap">리포트</p>
        </div>
      </div>

      {/* 고정된 메인 콘텐츠 카드 배경 및 "진행 중인 학습" 섹션 */}
      <div className="absolute bg-white left-0 right-0 rounded-tl-[24px] rounded-tr-[24px] top-[216px] z-20">
        <div className="px-[20px] pt-[20px] pb-[16px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[4px] items-center">
                  <div className="bg-[rgba(122,93,232,0.12)] px-[8px] py-[2px] rounded-[36px]">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.39] text-[#7a5de8] tracking-[-0.24px]">
                      UXUI 디자이너
                    </p>
                  </div>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[13px] leading-[1.4] text-[#80839e]">
                    글로벌 현장 / 글로벌 현장
                  </p>
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[20px] leading-[1.4] text-black tracking-[-0.24px]">
                  서비스 개발 기획하기
                </p>
              </div>
              <div className="bg-[#eeebfa] p-[10px] rounded-[10px]">
                <div className="grid grid-cols-2 grid-rows-2 gap-[1.5px]">
                  <div className="bg-[#503cc8] rounded-[0.6px] size-[6.5px]" />
                  <div className="bg-[#503cc8] rounded-[0.6px] size-[6.5px]" />
                  <div className="bg-[#503cc8] rounded-[0.6px] size-[6.5px]" />
                  <div className="bg-[#503cc8] rounded-[0.6px] size-[6.5px]" />
                </div>
              </div>
            </div>

            {/* 프로그레스 바 */}
            <div className="flex flex-col gap-[4px]">
              <div className="bg-[#eff1f9] h-[6px] rounded-[99px] relative overflow-hidden">
                <div className="absolute bg-[#7a5de8] h-[6px] left-0 rounded-[99px] w-[80px]" />
              </div>
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.4] text-[#7a5de8] tracking-[-0.24px]">
                20%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 가능한 타임라인 영역 */}
      <div className="absolute bg-white left-0 right-0 top-[336px] bottom-[87px] overflow-y-auto z-10">
        <div className="px-[20px] pt-[20px] pb-[20px]">
          <div className="flex flex-col gap-[22px] relative">
            {/* 세로 점선 */}
            <div className="absolute left-[21px] top-0 bottom-0 w-0 border-l-2 border-dashed border-[#7a5de8] opacity-30 z-0" />

            {/* 1단계 */}
            <div className="flex gap-[8px] items-start relative z-10">
              <div className="relative size-[44px] shrink-0">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" fill="#EEEBFA" r="20" stroke="#E0D8FC" strokeWidth="4" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[20.533px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5333 20.5334">
                    <circle cx="10.2667" cy="10.2667" fill="#7B69DE" r="10.2667" />
                    <path d={svgPaths.p193aea80} fill="white" />
                  </svg>
                </div>
              </div>
              <div className="bg-[#7a5de8] px-[16px] py-[16px] rounded-[16px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] leading-[1.5] text-white tracking-[-0.24px]">
                  아이디어를 브레인스토밍<br />해 봅니다.
                </p>
              </div>
            </div>

            {/* 2단계 */}
            <div className="flex flex-col gap-[16px] relative z-10">
              <div className="flex gap-[8px] items-start">
                <div className="relative size-[44px] shrink-0">
                  <div className="bg-white rounded-[999px] size-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
                        <div className="bg-[#7b69de] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
                          <div aria-hidden="true" className="absolute border-4 border-[#e7e3fa] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
                          <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">02</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <div className="bg-white h-[104px] relative rounded-[20px] shrink-0 w-full">
                    <div className="overflow-clip relative rounded-[inherit] size-full">
                      <div className="absolute content-stretch flex flex-col gap-[6.482px] h-[55.904px] items-center leading-[1.5] left-[-3px] not-italic text-[#111] text-center top-[27px] tracking-[-0.1944px] w-[286px]">
                        <p className="font-['Google_Sans:Bold',sans-serif] relative shrink-0 text-[18.635px] whitespace-nowrap">What if we_____?</p>
                        <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[11.343px] w-[140.975px]">이것을 ______해 보는 게 어때요?</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-2 border-[#7a5de8] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_3.241px_20.255px_0px_#f1f1f3]" />
                  </div>
                </div>
              </div>

              {/* 학습 옵션 */}
              <div className="ml-[52px] content-stretch flex flex-col gap-[12px] items-center justify-end px-[16px] py-[12px] relative rounded-[20px]" style={{ backgroundImage: "linear-gradient(-51.9325deg, rgb(105, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%)" }}>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                    {/* 문장 구조 학습 - 활성화 */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                      <div className="bg-white content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[48px]">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                          <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[26px]">
                            <div className="absolute inset-[13.88%_6.45%_13.88%_6.46%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0969 24.9706">
                                <g>
                                  <path d={learningSvgPaths.pb248700} fill="var(--fill-0, #7A5DE8)" />
                                  <path d={learningSvgPaths.p88f3300} fill="var(--fill-0, #DBD2FD)" />
                                  <path d={learningSvgPaths.p2d966800} fill="var(--fill-0, #F4F2FF)" />
                                </g>
                              </svg>
                            </div>
                            <div className="absolute flex inset-0 items-center justify-center">
                              <div className="-rotate-90 flex-none size-[26px]">
                                <div className="relative size-full">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                                    <g />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[21.05%_57.89%_34.21%_18.42%] leading-[1.4] not-italic text-[#9a85e8] text-[9px] tracking-[-0.18px]">A</p>
                            <p className="absolute font-['Google_Sans:Bold',sans-serif] inset-[13.16%_15.79%_34.21%_60.53%] leading-[1.4] not-italic text-[#533bac] text-[10px] tracking-[-0.18px]">a</p>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[11px] text-white tracking-[-0.22px] whitespace-nowrap">문장 구조 학습</p>
                    </div>

                    {/* 전체 문장 학습 - 비활성화 */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center opacity-50 relative shrink-0">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                        <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g />
                          </svg>
                        </div>
                        <div className="col-1 ml-[0.74px] mt-0 relative row-1 size-[48px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.0228 63.0228">
                            <path d={learningSvgPaths.pad35100} fill="var(--fill-0, #D0C4FF)" />
                          </svg>
                        </div>
                        <div className="col-1 h-[36px] ml-[5.7px] mt-[12.5px] relative row-1 w-[37px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 47.5152">
                            <ellipse cx="24.5" cy="23.7576" fill="url(#paint0_radial_3_588)" rx="24.5" ry="23.7576" />
                            <defs>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(24.5 23.7576) rotate(90) scale(23.7576 24.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_3_588" r="1">
                                <stop stopColor="#7A5DE8" stopOpacity="0.5" />
                                <stop offset="1" stopColor="#7A5DE8" stopOpacity="0" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="col-1 h-[22px] ml-[12.9px] mt-[11px] relative row-1 w-[22.8px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-[-50%] max-w-none size-[200%] top-[-50%]" src={imgRectangle} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[11px] text-white tracking-[-0.22px] whitespace-nowrap">전체 문장 학습</p>
                    </div>

                    {/* 미니 롤플레잉 - 비활성화 */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center opacity-50 relative shrink-0">
                      <div className="h-[48px] relative shrink-0 w-[48px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                          <g>
                            <g />
                            <path d={learningSvgPaths.pe8c7400} fill="var(--fill-0, #D0C4FF)" />
                            <ellipse cx="32" cy="40.2424" fill="url(#paint0_radial_3_575)" rx="24.5" ry="23.7576" />
                            <g clipPath="url(#clip0_3_575)">
                              <g>
                                <path d={learningSvgPaths.p12f778c0} fill="var(--fill-0, #E2E5E8)" />
                                <g>
                                  <path d={learningSvgPaths.p2c13aa80} fill="var(--fill-0, #333D4B)" />
                                  <path d={learningSvgPaths.p23e0a100} fill="var(--fill-0, #333D4B)" />
                                  <path d={learningSvgPaths.pe4fd000} fill="var(--fill-0, #333D4B)" />
                                </g>
                              </g>
                              <g />
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
                      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[11px] text-white tracking-[-0.22px] whitespace-nowrap">미니 롤플레잉</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/learning')}
                  className="bg-white content-stretch flex h-[48px] items-center justify-center px-[10px] py-[16px] relative rounded-[8px] shrink-0 w-[250px] cursor-pointer"
                >
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#7a5de8] text-[15px] tracking-[-0.24px] whitespace-nowrap">학습 시작하기</p>
                </button>
              </div>
            </div>

            {/* 3단계 */}
            <div className="flex gap-[8px] items-start relative z-10">
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
              <div className="bg-[#fbfbff] content-stretch flex items-center px-[24px] py-[20px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(103,100,115,0.16)] shrink-0">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#5a5e7f] text-[14px] tracking-[-0.24px]">
                  이 레이아웃에 대해<br />어떻게 생각하세요?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 - 고정 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 shadow-[0px_-6px_13px_0px_rgba(153,153,153,0.15)]">
        <div className="bg-white border-t border-[#f0f0f0] h-[60px]">
          <div className="flex items-center justify-center size-full">
            <div className="flex gap-[24px] items-center justify-center w-full">
              <div className="flex flex-col gap-[2px] items-center w-[36px]">
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

      {/* FAB - 네비게이션 바 위 오른쪽 하단 고정 */}
      <div 
        onClick={() => setIsFabMenuOpen(true)}
        className="fixed bottom-[110px] right-[20px] z-[60] size-[60px] cursor-pointer hover:scale-110 active:scale-95 transition-transform"
      >
        <Fab />
      </div>

      {/* FAB 메뉴 오버레이 및 메뉴 */}
      <AnimatePresence>
        {isFabMenuOpen && (
          <>
            {/* 딤드 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsFabMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[65]"
            />

            {/* FAB 메뉴 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="fixed bottom-[185px] right-[20px] z-[70] w-[200px] h-[170px]"
            >
              <MotionDiv 
                onSavedExpressionsClick={() => {
                  setIsFabMenuOpen(false);
                  navigate('/saved-expressions');
                }}
                onAiCreateClick={() => {
                  setIsFabMenuOpen(false);
                  setIsAiBottomSheetOpen(true);
                }}
              />
            </motion.div>

            {/* FAB 버튼 (열린 상태) */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 45 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsFabMenuOpen(false)}
              className="fixed bottom-[110px] right-[20px] z-[70] size-[60px] cursor-pointer"
            >
              <Fab />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* AI 표현 생성 하단 시트 */}
      <AiExpressionBottomSheet
        isOpen={isAiBottomSheetOpen}
        onClose={() => setIsAiBottomSheetOpen(false)}
      />
    </div>
  );
}
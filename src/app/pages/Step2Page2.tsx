import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-vvqlhwbfwd";

export default function Step2Page2() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);

  const handleLearnedClick = () => {
    navigate('/step2-3');
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(244, 248, 255) 0%, rgb(244, 248, 255) 100%), linear-gradient(90deg, rgb(252, 252, 255) 0%, rgb(252, 252, 255) 100%)" }}>
      {/* 배경 그라데이션 */}
      <div className="absolute flex items-center justify-center left-[-24px] w-[443px] h-[661px] top-[81px]">
        <div className="flex-none rotate-90">
          <div className="h-[443px] relative w-[661px]">
            <div className="absolute inset-[-22.35%_-14.98%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 859 641">
                <g filter="url(#filter0_f_2_139)" id="Ellipse 686">
                  <ellipse cx="429.5" cy="320.5" fill="url(#paint0_radial_2_139)" rx="330.5" ry="221.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="641" id="filter0_f_2_139" width="859" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2_139" stdDeviation="49.5" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(429.5 299.5) rotate(90) scale(289 431.217)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_139" r="1">
                    <stop stopColor="#BDBBFF" />
                    <stop offset="0.504808" stopColor="#E0DFFF" />
                    <stop offset="1" stopColor="white" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center left-[-24px] w-[443px] h-[587px] top-[264px]">
        <div className="flex-none rotate-90">
          <div className="h-[443px] relative w-[587px]">
            <div className="absolute inset-[-22.35%_-16.87%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 785 641">
                <g filter="url(#filter0_f_2_126)" id="Ellipse 687">
                  <ellipse cx="392.5" cy="320.5" fill="url(#paint0_radial_2_126)" rx="293.5" ry="221.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="641" id="filter0_f_2_126" width="785" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2_126" stdDeviation="49.5" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(392.5 299.5) rotate(-90) scale(267 353.79)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_126" r="1">
                    <stop stopColor="#AEC5FF" stopOpacity="0.7" />
                    <stop offset="0.447115" stopColor="#E1E7FF" />
                    <stop offset="1" stopColor="white" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 상단 상태바 */}
      <div className="absolute h-[44px] left-px overflow-clip right-[3px] top-0">
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

      {/* 프로그레스바 */}
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 p-[20px] top-[44px] w-[393px]">
        <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shadow-[0px_2px_8px_0px_rgba(103,100,115,0.1)] shrink-0 size-[36px]">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[22px]">
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.p38f75840} fill="var(--fill-0, #999999)" id="Vector_2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[4px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(103,100,115,0.1)] shrink-0">
          <div className="content-stretch flex font-['Google_Sans:Medium',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">
            <p className="relative shrink-0 text-black">02</p>
            <p className="relative shrink-0 text-[#80839e]">/ 05</p>
          </div>
          <div className="bg-[#e4e7f4] content-stretch flex flex-col h-[4px] items-start relative rounded-[30px] shrink-0 w-[244px]">
            <div className="bg-[#503cc8] h-[4px] rounded-[30px] shrink-0 w-[91px]" />
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shadow-[0px_2px_8px_0px_rgba(103,100,115,0.1)] shrink-0 size-[36px]">
          <div className="relative shrink-0 size-[18px]">
            <div className="absolute inset-[16.67%]">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d="M13 1L1 13M13 13L1 1" id="Icon" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 상단 정보 */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 px-[20px] py-[8px] top-[120px] w-[393px]">
        <div className="bg-white content-stretch flex gap-[4px] items-center opacity-80 px-[16px] py-[8px] relative rounded-[99px] shrink-0">
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9997 15.9997">
              <g id="RotateCcw">
                <path d={svgPaths.p69ca000} id="Vector" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33331" />
                <path d={svgPaths.p121bd700} id="Vector_2" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33331" />
              </g>
            </svg>
          </div>
          <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a5de8] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">2단계: 예문 살펴보기</p>
        </div>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center tracking-[-0.3125px] w-[min-content] whitespace-pre-wrap">
          {`표현이 실제로 어떻게 활용되는지 살펴보고, `}
          <br aria-hidden="true" />
          스피커 버튼을 눌러 발음을 들어보세요.
        </p>
      </div>

      {/* 카드들 */}
      <div className="absolute bg-[#f3f4f6] content-stretch flex h-[312px] items-center justify-center left-[57.49px] p-px rounded-[24px] top-[287.5px] w-[281px]">
        <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_20px_0px_rgba(157,141,216,0.1)]" />
      </div>
      <div className="absolute bg-[#f2f2f2] content-stretch flex h-[315px] items-center justify-center left-[41px] p-px rounded-[24px] top-[300px] w-[311px]">
        <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
      </div>
      
      {/* 메인 카드 */}
      <div className="absolute bg-white content-stretch flex flex-col h-[300px] items-center justify-center left-[20px] rounded-[24px] top-[315px] w-[353px]">
        <div aria-hidden="true" className="absolute border border-[#c9ccde] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
        <div className="content-stretch flex flex-col gap-[38px] h-[248px] items-center relative shrink-0">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[319px]">
            {/* 저장 버튼 */}
            <button 
              onClick={toggleSave}
              className="relative shrink-0 size-[24px] cursor-pointer"
            >
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="stash:save-ribbon-solid">
                  <path d={svgPaths.p3a8aa800} fill="var(--fill-0, #7A5DE8)" id="Vector" opacity={isSaved ? "1" : "0.2"} />
                </g>
              </svg>
            </button>
            {/* 스피커 버튼 */}
            <div className="relative shrink-0 size-[36px]">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                  <div className="h-[18px] relative shrink-0 w-[22px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                      <g id="Frame 2085670804">
                        <path clipRule="evenodd" d={svgPaths.p2b579b00} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] h-[143px] items-center not-italic relative shrink-0 text-center">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[39px] relative shrink-0 text-[#7a5de8] text-[24px] tracking-[0.0703px] w-[297px]">What if we simplify onboarding?</p>
            <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#999] text-[14px] tracking-[-0.1504px] whitespace-nowrap">온보딩을 단순화해보면 어떨까요?</p>
          </div>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="-translate-x-1/2 absolute content-stretch flex h-[96px] items-center justify-between left-[calc(50%-0.5px)] top-[697px] w-[345px]">
        <button 
          onClick={() => navigate('/step2-1')}
          className="bg-white content-stretch flex gap-[7px] h-[44px] items-center px-[18px] py-[10px] relative rounded-[101px] shrink-0 w-[117px] cursor-pointer"
        >
          <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a5de8] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">이전 학습</p>
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9997 15.9997">
              <g id="RotateCcw">
                <path d={svgPaths.p69ca000} id="Vector" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33331" />
                <path d={svgPaths.p121bd700} id="Vector_2" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33331" />
              </g>
            </svg>
          </div>
        </button>
        <button 
          onClick={() => setShowTipModal(true)}
          className="bg-white content-stretch flex gap-[7px] items-center px-[18px] py-[10px] relative rounded-[101px] shrink-0 cursor-pointer"
        >
          <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a5de8] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">Tip</p>
          <div className="h-[15px] relative shrink-0 w-[10px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
              <path d={svgPaths.pd244de0} id="Vector" stroke="var(--stroke-0, #7A5DE8)" />
            </svg>
          </div>
        </button>
        <button 
          onClick={handleLearnedClick}
          className="bg-[#7a5de8] content-stretch flex h-[44px] items-center pl-[18px] pr-[10px] py-[10px] relative rounded-[101px] shrink-0 w-[117px] cursor-pointer"
        >
          <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] w-[67px]">배웠어요</p>
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9997 19.9997">
              <g id="ChevronRight">
                <path d={svgPaths.p1610f580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
              </g>
            </svg>
          </div>
        </button>
      </div>

      {/* Tip 모달 */}
      <AnimatePresence>
        {showTipModal && (
          <>
            {/* 딤드 배경 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTipModal(false)}
              className="absolute inset-0 bg-black/40 z-10 cursor-pointer"
            />
            
            {/* 모달 */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] p-[24px] z-20"
            >
              <div className="flex justify-between items-center mb-[16px]">
                <h3 className="font-['Pretendard:SemiBold',sans-serif] text-[18px] text-[#1a1a1a]">💡 학습 팁</h3>
                <button 
                  onClick={() => setShowTipModal(false)}
                  className="size-[24px] flex items-center justify-center cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M13 13L1 1" stroke="#999999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <p className="font-['Pretendard:Regular',sans-serif] text-[14px] leading-[22px] text-[#4a5565]">
                이 표현을 실제 대화에서 사용해보세요. 반복해서 듣고 따라 말하면 더 빠르게 익힐 수 있습니다.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

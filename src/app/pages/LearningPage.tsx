import svgPaths from '../../imports/svg-i3gg1l2xr3';
import FlippableCard from '../components/FlippableCard';
import TipModal from '../components/TipModal';
import { useState } from 'react';
import { useNavigate } from 'react-router';

type Ai1BackgroundImageProps = {
  additionalClassNames?: string;
};

function Ai1BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<Ai1BackgroundImageProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={`absolute flex items-center justify-center left-[-24px] w-[443px] ${additionalClassNames}`}>
      <div className="flex-none rotate-90">{children}</div>
    </div>
  );
}

function RotateCcwIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9997 15.9997">
        <g id="RotateCcw">
          <path d={svgPaths.p69ca000} id="Vector" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33331" />
          <path d={svgPaths.p121bd700} id="Vector_2" stroke="var(--stroke-0, #7A5DE8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33331" />
        </g>
      </svg>
    </div>
  );
}

export default function LearningPage() {
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/completion');
  };

  return (
    <div className="relative size-full" data-name="AI 학습 - 1단계" style={{ backgroundImage: "linear-gradient(90deg, rgb(244, 248, 255) 0%, rgb(244, 248, 255) 100%), linear-gradient(90deg, rgb(252, 252, 255) 0%, rgb(252, 252, 255) 100%)" }}>
      {/* 배경 그라디언트 */}
      <Ai1BackgroundImage additionalClassNames="h-[661px] top-[81px]">
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
      </Ai1BackgroundImage>
      
      <Ai1BackgroundImage additionalClassNames="h-[587px] top-[264px]">
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
      </Ai1BackgroundImage>

      {/* 상단 상태바 */}
      <div className="absolute h-[44px] left-px overflow-clip right-[3px] top-0" data-name="iOS/Status Bar/Black">
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
              <path d={svgPaths.p28808ef0} fill="var(--fill-0, #2E2E2E)" id="Wifi" />
            </svg>
          </div>
          <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
              <path d={svgPaths.p1d181800} fill="var(--fill-0, #2E2E2E)" id="Mobile Signal" />
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

      {/* 프로그레스바 */}
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 p-[20px] top-[44px] w-[393px]" data-name="학습 카드 프로그레스바">
        <button 
          onClick={() => navigate('/')}
          className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shadow-[0px_2px_8px_0px_rgba(103,100,115,0.1)] shrink-0 size-[36px] cursor-pointer"
        >
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[22px]" data-name="mingcute:back-2-line">
            <div className="relative shrink-0 size-[20px]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.p38f75840} fill="var(--fill-0, #999999)" id="Vector_2" />
                </g>
              </svg>
            </div>
          </div>
        </button>
        <div className="bg-white content-stretch flex flex-col gap-[4px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(103,100,115,0.1)] shrink-0">
          <div className="content-stretch flex font-['Google_Sans:Medium',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[10px] text-center tracking-[-0.24px] whitespace-nowrap">
            <p className="relative shrink-0 text-black">01</p>
            <p className="relative shrink-0 text-[#80839e]">/ 05</p>
          </div>
          <div className="bg-[#e4e7f4] content-stretch flex flex-col h-[4px] items-start relative rounded-[30px] shrink-0 w-[244px]" data-name="진행률">
            <div className="bg-[#503cc8] h-[4px] rounded-[30px] shrink-0 w-[45px]" />
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shadow-[0px_2px_8px_0px_rgba(103,100,115,0.1)] shrink-0 size-[36px]">
          <div className="relative shrink-0 size-[18px]" data-name="x-01">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d="M13 1L1 13M13 13L1 1" id="Icon" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="-translate-x-1/2 absolute content-stretch flex h-[96px] items-center justify-between left-1/2 top-[697px] w-[345px]">
        <div className="bg-white content-stretch flex gap-[7px] h-[44px] items-center px-[18px] py-[10px] relative rounded-[101px] shrink-0 w-[117px]">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a5de8] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">이전 학습</p>
          <RotateCcwIcon />
        </div>
        <div 
          className="bg-white content-stretch flex gap-[7px] items-center px-[18px] py-[10px] relative rounded-[101px] shrink-0 cursor-pointer"
          onClick={() => setIsTipModalOpen(true)}
        >
          <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a5de8] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">Tip</p>
          <div className="h-[15px] relative shrink-0 w-[10px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
              <path d={svgPaths.pd244de0} id="Vector" stroke="var(--stroke-0, #7A5DE8)" />
            </svg>
          </div>
        </div>
        <div 
          className="bg-[#7a5de8] content-stretch flex h-[44px] items-center pl-[18px] pr-[10px] py-[10px] relative rounded-[101px] shrink-0 w-[117px] cursor-pointer"
          onClick={handleComplete}
        >
          <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] w-[67px]">배웠어요</p>
          <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9997 19.9997">
              <g id="ChevronRight">
                <path d={svgPaths.p1610f580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66664" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 뒤집을 수 있는 카드 */}
      <FlippableCard />

      {/* 상단 안내 텍스트 */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 px-[20px] py-[8px] top-[120px] w-[393px]">
        <div className="bg-white content-stretch flex gap-[4px] items-center opacity-80 px-[16px] py-[8px] relative rounded-[99px] shrink-0">
          <RotateCcwIcon />
          <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a5de8] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">1단계: 표현 알아보기</p>
        </div>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center tracking-[-0.3125px] w-[min-content] whitespace-pre-wrap">
          카드를 뒤집어 표현을 확인해 보세요.
          <br aria-hidden="true" />
          {` Tip을 눌러 자세한 설명도 함께 살펴볼 수 있어요.`}
        </p>
      </div>

      {/* Tip 모달 */}
      <TipModal isOpen={isTipModalOpen} onClose={() => setIsTipModalOpen(false)} />
    </div>
  );
}
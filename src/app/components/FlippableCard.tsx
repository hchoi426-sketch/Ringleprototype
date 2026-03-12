import { useState } from 'react';
import { motion } from 'motion/react';
import svgPathsFront from '../../imports/svg-i3gg1l2xr3';
import svgPathsBack from '../../imports/svg-m6sysrsmsx';

function ContainerFrontText() {
  return (
    <div className="h-[121.99px] relative shrink-0 w-[297.024px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <div className="h-[77.99px] relative shrink-0 w-full">
          <div className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[39px] left-[149px] not-italic text-[24px] text-center text-white top-[-0.22px] tracking-[0.0703px] w-[297px] whitespace-pre-wrap">
            <p className="mb-0">{`나는 매일 아침 조깅을 `}</p>
            <p>{"하곤 했어요."}</p>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-full">
          <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[148.86px] not-italic text-[#c6d2ff] text-[14px] text-center top-[0.59px] tracking-[-0.1504px] whitespace-nowrap">{"탭하여 정답 확인"}</p>
        </div>
      </div>
    </div>
  );
}

export default function FlippableCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 뒤집기 방지
    setIsSaved(!isSaved);
  };

  return (
    <div className="absolute left-[20px] top-[314px] w-[353px] h-[300px]">
      {/* 뒷배경 카드 1 */}
      <div className="absolute bg-[#f3f4f6] content-stretch flex h-[312px] items-center justify-center left-[37.49px] p-px rounded-[24px] top-[-26.5px] w-[281px]" data-name="div">
        <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_20px_0px_rgba(157,141,216,0.1)]" />
        <ContainerFrontText />
      </div>

      {/* 뒷배경 카드 2 */}
      <div className="absolute bg-[#f2f2f2] content-stretch flex h-[315px] items-center justify-center left-[21px] p-px rounded-[24px] top-[-14px] w-[311px]" data-name="div">
        <div aria-hidden="true" className="absolute border border-[#e4e7f4] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
        <ContainerFrontText />
      </div>

      {/* 메인 카드 컨테이너 */}
      <div 
        className="absolute w-[353px] h-[300px] cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={handleCardClick}
      >
        {/* 카드 앞면 */}
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="bg-white content-stretch flex flex-col h-[300px] items-center justify-center rounded-[24px] w-[353px]">
            <div aria-hidden="true" className="absolute border border-[#c9ccde] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
            <div className="content-stretch flex flex-col gap-[54px] h-[248px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[319px]">
                <div 
                  className="relative shrink-0 size-[24px] cursor-pointer" 
                  data-name="stash:save-ribbon-solid"
                  onClick={handleSaveClick}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="stash:save-ribbon-solid">
                      <path d={svgPathsFront.p3a8aa800} fill={isSaved ? '#7A5DE8' : '#D1C4FF'} id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="relative shrink-0 size-[36px]">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                      <div className="h-[18px] relative shrink-0 w-[22px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                          <g id="Frame 2085670804">
                            <path clipRule="evenodd" d={svgPathsFront.p2b579b00} fill="var(--fill-0, #7A5DE8)" fillRule="evenodd" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full">
                <p className="font-['Google_Sans:Bold',sans-serif] leading-[39px] min-w-full relative shrink-0 text-[#7a5de8] text-[28px] tracking-[0.0703px] w-[min-content]">What if we ____?</p>
                <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#999] text-[14px] tracking-[-0.1504px] whitespace-nowrap">~해보는건 어떨까요?</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 카드 뒷면 */}
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            rotateY: -180,
          }}
          animate={{
            rotateY: isFlipped ? 0 : -180,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="content-stretch flex flex-col gap-[16px] h-[300px] items-center justify-center rounded-[24px] w-[353px]" style={{ backgroundImage: "linear-gradient(-59.0362deg, rgb(80, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%)" }}>
            <div aria-hidden="true" className="absolute border border-[#c9ccde] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_16px_0px_rgba(160,171,216,0.2)]" />
            <div className="absolute left-[299px] size-[36px] top-[15px]">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                  <div className="h-[18px] relative shrink-0 w-[22px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                      <g id="Frame 2085670804">
                        <path clipRule="evenodd" d={svgPathsBack.p2b579b00} fill="var(--fill-0, #E6E3F1)" fillRule="evenodd" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-['Pretendard:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.24px] whitespace-nowrap">
              <p className="mb-0">we 뒤에는 항상 동사원형이 들어가요</p>
              <p className="mb-0">상대에게 부드럽게 제안할 때 사용해요</p>
              <p>{`"How about ~?" 와 비슷한 느낌!`}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
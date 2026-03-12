import svgPaths from "../../imports/svg-ur5c933i02";

export default function SpeechBubble() {
  return (
    <div className="bg-[#9d89ea] content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[16px] relative rounded-[100px] w-full max-w-[280px]">
      <div className="absolute flex h-[10.5px] items-center justify-center left-[124.99px] top-[-5px] w-[24.5px]">
        <div className="flex-none rotate-180">
          <div className="h-[10.5px] relative w-[24.5px]">
            <div className="absolute inset-[0_7.43%_3.02%_6.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0966 10.1824">
                <path d={svgPaths.p19180680} fill="var(--fill-0, #9D89EA)" id="Vector 235" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3125px]">
        <p className="mb-0">{`💡 표현을 맥락 속에서 보면`}</p>
        <p className="mb-0">이해와 기억이 더 쉬워져요!</p>
      </div>
    </div>
  );
}
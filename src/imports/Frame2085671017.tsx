import svgPaths from "./svg-ur5c933i02";

export default function Frame() {
  return (
    <div className="bg-[#7a5de8] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[100px] size-full">
      <div className="absolute flex h-[10.5px] items-center justify-center left-[124.99px] top-[-5px] w-[24.5px]">
        <div className="flex-none rotate-180">
          <div className="h-[10.5px] relative w-[24.5px]">
            <div className="absolute inset-[0_7.43%_3.02%_6.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0966 10.1824">
                <path d={svgPaths.p19180680} fill="var(--fill-0, #7A5DE8)" id="Vector 235" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3125px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`💡 표현을 맥락 속에서 보면 `}</p>
        <p>이해와 기억이 더 쉬워져요!</p>
      </div>
    </div>
  );
}
import svgPaths from "./svg-6f65126t4q";

export default function Frame() {
  return (
    <div className="bg-[#9d89ea] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[100px] size-full">
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
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3125px] whitespace-nowrap">
        <p className="mb-0">💡 먼저 떠올려 보는 연습을</p>
        <p>하면 기억이 오래 남아요</p>
      </div>
    </div>
  );
}
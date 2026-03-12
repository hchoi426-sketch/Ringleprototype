export default function Frame() {
  return (
    <div className="bg-white relative rounded-[999px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
          <div className="bg-[#7b69de] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[32px]">
            <div aria-hidden="true" className="absolute border-4 border-[#e7e3fa] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
            <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">02</p>
          </div>
        </div>
      </div>
    </div>
  );
}
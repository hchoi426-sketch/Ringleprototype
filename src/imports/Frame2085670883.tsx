export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="bg-white h-[104px] relative rounded-[20px] shrink-0 w-full">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute content-stretch flex flex-col gap-[6.482px] h-[55.904px] items-center leading-[1.5] left-[-3px] not-italic text-[#111] text-center top-[27px] tracking-[-0.1944px] w-[286px]">
            <p className="font-['Google_Sans:Bold',sans-serif] relative shrink-0 text-[18.635px] whitespace-nowrap">How ___ we ___ this __?</p>
            <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[11.343px] w-[140.975px]">이것을 스케치해 보는 게 어때요?</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#7a5de8] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_3.241px_20.255px_0px_#f1f1f3]" />
      </div>
    </div>
  );
}
import svgPaths from "./svg-zw416p3p7f";

export default function Button() {
  return (
    <div className="relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="button" style={{ backgroundImage: "linear-gradient(-17.6562deg, rgb(105, 50, 194) 16.229%, rgb(143, 114, 255) 83.771%)" }}>
      <div className="absolute left-[115.03px] size-[16px] top-[18px]" data-name="Icon/AI">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g clipPath="url(#clip0_3_1436)" id="Icon/AI">
            <path clipRule="evenodd" d={svgPaths.p1506440} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p2e6fc500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          </g>
          <defs>
            <clipPath id="clip0_3_1436">
              <rect fill="white" height="16" width="16" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Pretendard:SemiBold',sans-serif] leading-[24px] left-[186.53px] not-italic text-[16px] text-center text-white top-[15.65px] tracking-[-0.3125px] whitespace-nowrap">표현 생성하기</p>
    </div>
  );
}
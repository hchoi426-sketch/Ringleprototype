import imgFab from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFab1 from "figma:asset/84cee6742548d35c0a22a1672224d3a6defd224b.png";

export default function Fab() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16.085px] py-[11.489px] relative rounded-[34.468px] size-full" data-name="FAB">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34.468px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[34.468px] size-full" src={imgFab} />
        <div className="absolute inset-0 overflow-hidden rounded-[34.468px]">
          <img alt="" className="absolute h-[935.7%] left-[-344.31%] max-w-none top-[-179.6%] w-[491.75%]" src={imgFab1} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d5b7ff] border-[1.149px] border-solid inset-[-0.575px] pointer-events-none rounded-[35.043000000000006px] shadow-[4px_10px_15px_0px_rgba(98,72,194,0.3),4px_2.298px_4.596px_0px_rgba(125,110,179,0.3)]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+0.5px)] top-[calc(50%-3.3px)]">
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[17.234px] justify-center leading-[0] not-italic relative shrink-0 text-[#7a5de8] text-[40.213px] tracking-[-0.8043px] w-[26.426px]">
          <p className="leading-none">+</p>
        </div>
      </div>
    </div>
  );
}
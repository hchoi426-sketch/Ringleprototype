import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import P from '../../imports/P';
import Frame2085671017 from '../../imports/Frame2085671017-3-1087';

// 파티클 타입 정의
type Particle = {
  id: number;
  left: string;
  top: string;
  delay: number;
  color: string;
  size: number;
};

export default function CompletionPage2() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 파티클 생성
    const colors = ['#FFC859', '#A8A3FF', '#F8B6FF', '#8BE98B', '#FF9A9A'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 8, // 8px ~ 20px
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(180deg, rgb(244, 248, 255) 0%, rgb(252, 252, 255) 100%)" }}>
      {/* 파티클 애니메이션 */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1, 1.2, 0.8],
            y: [0, -20, -40, -60]
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* 중앙 컨텐츠 */}
      <div className="absolute left-1/2 top-[180px] -translate-x-1/2 flex flex-col items-center gap-[32px] w-full px-[24px]">
        {/* 체크 아이콘 */}
        <motion.div
          className="relative size-[120px] rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #8BE98B 0%, #5FD65F 100%)" }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
        >
          <motion.svg 
            width="64" 
            height="64" 
            viewBox="0 0 64 64" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.path
              d="M16 32L28 44L48 20"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        {/* 텍스트 */}
        <motion.div
          className="flex flex-col items-center gap-[16px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="font-['Pretendard:Bold',sans-serif] text-[32px] leading-[1.2] text-[#7a5de8] text-center tracking-[-0.5px]">
            2단계 완료
          </h1>
          
          {/* 설명 텍스트 */}
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] text-[#4a5565] text-[14px] text-center tracking-[-0.3125px]">
            표현이 어떻게 쓰이는지 감이 오셨나요?
            <br />
            이번에는 뜻을 보고 직접 영어 문장을 떠올려 볼 거예요.
          </p>
        </motion.div>

        {/* 말풍선 - Figma 임포트 컴포넌트 */}
        <motion.div
          className="w-full max-w-[280px] h-[68px]"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.4,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <Frame2085671017 />
        </motion.div>
      </div>

      {/* 하단 버튼들 */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 bottom-[40px] flex gap-[12px] w-full max-w-[345px] px-[24px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        {/* 이전 단계 버튼 */}
        <motion.button
          className="bg-[#cec5ef] content-stretch flex items-center justify-center px-[10px] py-[16px] relative rounded-[8px] flex-1 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/step2-3')}
        >
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">
            이전 단계
          </p>
        </motion.button>

        {/* 다음 단계 버튼 */}
        <motion.button
          className="bg-[#7a5de8] content-stretch flex items-center justify-center px-[10px] py-[16px] relative rounded-[8px] flex-1 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
        >
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.24px] whitespace-nowrap">
            홈으로 가기
          </p>
        </motion.button>
      </motion.div>
    </div>
  );
}
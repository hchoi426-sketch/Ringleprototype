import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export default function ReviewCompletePage() {
  const navigate = useNavigate();

  const confettiDots = [
    { color: '#5EDE8A', size: 16, top: 30, left: 298, delay: 0 },
    { color: '#B7B0FF', size: 16, top: 70, left: 259, delay: 0.1 },
    { color: '#5EDE8A', size: 12, top: 84, left: 234, delay: 0.15 },
    { color: '#EDCCF8', size: 16, top: 95, left: 318, delay: 0.2 },
    { color: '#F8B662', size: 16, top: 139, left: 145, delay: 0.05 },
    { color: '#5EDE8A', size: 16, top: 74, left: 371, delay: 0.25 },
    { color: '#EDCCF8', size: 20, top: 160, left: 365, delay: 0.3 },
    { color: '#F8B662', size: 16, top: 220, left: 260, delay: 0.12 },
    { color: '#B7B0FF', size: 16, top: 183, left: 254, delay: 0.18 },
    { color: '#EDCCF8', size: 12, top: 238, left: 247, delay: 0.22 },
    { color: '#B7B0FF', size: 16, top: 230, left: 124, delay: 0.08 },
    { color: '#EDCCF8', size: 12, top: 259, left: 347, delay: 0.28 },
    { color: '#F8B662', size: 16, top: 303, left: 62, delay: 0.02 },
    { color: '#EDCCF8', size: 16, top: 370, left: 140, delay: 0.14 },
    { color: '#F8B662', size: 12, top: 221, left: 314, delay: 0.26 },
  ];

  return (
    <div 
      className="bg-white relative size-full overflow-hidden"
    >
      {/* Animated confetti dots */}
      {confettiDots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            top: dot.top,
            left: dot.left,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 1, 1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 0.6,
            delay: dot.delay,
            times: [0, 0.6, 1]
          }}
        />
      ))}

      {/* Status bar */}
      <div className="absolute h-[44px] left-0 right-0 top-0 bg-transparent" />

      {/* Green checkmark circle */}
      <motion.div 
        className="absolute left-1/2 top-[283px] -translate-x-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 0.5, times: [0, 0.7, 1] }}
      >
        <div className="w-[74px] h-[74px] rounded-full bg-gradient-to-b from-[#5EDE8A] to-[#41C171] flex items-center justify-center shadow-lg">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
            <path d="M2 15L14 27L38 3" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        className="absolute left-1/2 top-[398px] -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="font-['Pretendard:Bold',sans-serif] text-[32px] leading-[1.4] text-[#503CC8] text-center whitespace-nowrap">
          표현 학습 완료
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className="absolute left-1/2 top-[463px] -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] leading-[1.6] text-[#4E5B73]">
          내가 외우고 싶은 문장을
          <br />
          익혔어요!
        </p>
      </motion.div>

      {/* Save to learning expressions tip */}
      <motion.div
        className="absolute left-1/2 top-[532px] -translate-x-1/2 w-[333px] h-[68px] rounded-[16px] bg-[#7A5DE8] flex items-center justify-center px-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[16px]">💡</span>
          <p className="font-['Pretendard:Medium',sans-serif] text-[14px] leading-[1.4] text-white text-center">
            배운 표현 문장을 직접
            <br />
            만들고 학습해보세요.
          </p>
        </div>
      </motion.div>

      {/* Bottom buttons */}
      <motion.div
        className="absolute bottom-[21px] left-1/2 -translate-x-1/2 w-[353px] flex gap-[8px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <button
          onClick={() => navigate('/review-cards')}
          className="flex-1 h-[48px] rounded-[8px] bg-[#E4E7F4] flex items-center justify-center cursor-pointer"
        >
          <span className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#7A5DE8]">
            한번 더 학습
          </span>
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex-1 h-[48px] rounded-[8px] bg-[#7A5DE8] flex items-center justify-center cursor-pointer"
        >
          <span className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-white">
            완료하기
          </span>
        </button>
      </motion.div>
    </div>
  );
}
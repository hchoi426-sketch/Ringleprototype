import { motion, AnimatePresence } from 'motion/react';
import TipModalContent from './TipModalContent';

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TipModal({ isOpen, onClose }: TipModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 딤드 배경 */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* 모달 컨텐츠 */}
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-t-[24px] w-full max-w-[393px] max-h-[80vh] overflow-y-auto pointer-events-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <TipModalContent onClose={onClose} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
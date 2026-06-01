import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Brown wipe overlay */}
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#1a0d06',
            zIndex: 9999,
            transformOrigin: 'left',
          }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
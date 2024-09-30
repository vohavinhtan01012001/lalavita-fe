'use client'
import { motion, MotionProps } from 'framer-motion';
import clsx from 'clsx';

type ButtonType = {
    variant?: 'primary' | 'secondary' | 'light' | 'ghost';
    children?: string;
    className?: string;
    onClick?: () => void;
} & MotionProps;

const Button = ({ variant = 'primary', children, className, onClick, ...props }: ButtonType) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={
                clsx(
                    'px-[20px] py-[8px] rounded-full text-[14px] font-semibold leading-[30px]',
                    variant === 'primary' && 'bg-[#fed71441] text-[#f0a72e]',
                    variant === 'secondary' && 'bg-[#42c1cc36] text-[#42c0cc]',
                    variant === 'light' && 'bg-[#f5f5f5] text-[#999999]',
                    variant === 'ghost' && 'text-[#222222]',
                    className
                )
            }
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    )
};

export default Button;

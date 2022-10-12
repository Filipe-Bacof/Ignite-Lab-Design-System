import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

// parei em 50min e 38 seg
// npm run dev (para rodar o servidor)
// npm run storybook (para rodar o storybook)

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export function Text({ size = 'md', children }: TextProps) {
    return(
        <span
        className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',

            }
            )}
        >
            {children}
        </span>
    )
}
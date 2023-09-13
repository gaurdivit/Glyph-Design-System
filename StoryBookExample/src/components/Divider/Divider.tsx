import clsx from 'clsx'
import React from 'react'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Type of Divider
	 * @default horizontal
	 */
	variant?: 'horizontal' | 'vertical'
}

const Divider: React.FC<DividerProps> = React.memo((props) => {
	return <div {...props} className={clsx('bg-gray-50/10', props.variant === 'vertical' ? 'h-full w-px' : 'h-px w-full', props.className)} />
})

export default Divider

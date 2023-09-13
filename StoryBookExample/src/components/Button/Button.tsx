import clsx from 'clsx'
import React, { useMemo } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Text of the button
	 */
	text?: string

	/**
	 * Button varient.
	 * @Default 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'negative' | 'outline' | 'transparent'

	/**
	 * Icon in Button
	 */
	suffixIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = React.memo((props) => {
	const variantStyles = useMemo(() => {
		const variant = props.variant ?? 'primary'
		switch (variant) {
			case 'primary':
				return 'bg-blue-400 border-blue-400 hover:bg-blue-300 hover:border-blue-300 disabled:bg-gray-500 disabled:border-gray-500 disabled:text-gray-200'
			case 'secondary':
				return 'bg-gray-700 border-gray-700 hover:bg-gray-50/30 hover:border-gray-50/30 disabled:bg-gray-50/10 disabled:border-gray-50/10'
			case 'negative':
				return 'bg-red-400 border-red-400 hover:bg-red-500 hover:border-red-500 disabled:bg-gray-50/10 disabled:border-gray-50/10'
			case 'outline':
				return 'bg-transparent border-gray-400 hover:border-gray-200'
			case 'transparent':
				return 'border-transparent'
			default:
				return ''
		}
	}, [props.variant])

	return (
		<button
			{...props}
			className={clsx(
				'flex w-fit cursor-pointer items-center border text-gray-50',
				props.suffixIcon ? 'justify-between' : 'justify-center',
				'rounded-lg py-3 text-base-bold',
				'focus:outline-none disabled:pointer-events-none disabled:cursor-default disabled:text-gray-200',
				props.suffixIcon ? 'px-5' : 'px-8',
				variantStyles,
				props.className
			)}
		>
			<>{props.text || props.children}</> {props.suffixIcon}
		</button>
	)
})

export default Button

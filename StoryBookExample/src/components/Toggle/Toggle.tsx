import clsx from 'clsx'
import React from 'react'
import { Button } from '../'

export interface ToggleProps {
	/**
	 * Styles to be applied on the toggle.
	 */
	style?: React.CSSProperties

	/**
	 * If true, first option is selected. Otherwise the other one.
	 */
	value: boolean

	/**
	 * Options name for the toggle.
	 */
	options: {
		first: string
		second: string
	}

	/**
	 * Function to be called when toggle is changed.
	 */
	onClick: (value: boolean) => void
}

const Toggle: React.FC<ToggleProps> = React.memo((props: ToggleProps) => {
	return (
		<div className='relative flex w-[100%] rounded-lg border border-white/10'>
			<Button
				className='!w-[50%] cursor-pointer rounded-lg bg-transparent py-2 text-base text-gray-50 outline-none'
				variant='transparent'
				text={props.options.first}
				onClick={() => props.onClick(true)}
			/>
			<Button
				className='!w-[50%] cursor-pointer bg-transparent py-2 text-base text-gray-50 outline-none'
				variant='transparent'
				text={props.options.second}
				onClick={() => props.onClick(false)}
			/>
			<button
				className={clsx(
					'text-gray-5 absolute z-[1] h-full w-[50%] cursor-pointer rounded-lg bg-blue-400 text-base transition-all hover:bg-blue-500',
					!props.value && ' translate-x-[100%]'
				)}
			>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
})

export default Toggle

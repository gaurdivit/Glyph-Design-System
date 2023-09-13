import { CheckIcon, TickIcon } from '@aftershootco/unicorn-icons'
import clsx from 'clsx'
import React, { useCallback } from 'react'
export interface CheckBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
	/**
	 *
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * Parent div classes
	 */
	parentClassname?: string

	/**
	 * child div classes
	 */
	childClassname?: string

	/**
	 * color of a checkbox
	 */
	color?: string

	/**
	 * Value of the checkbox.
	 * @Default false
	 */
	value: boolean

	/**
	 * Whether the checkbox is disabled
	 * @Default false
	 */
	disabled?: boolean

	/**
	 * Function to be called when checkbox is checked.
	 */
	onChange: (value: boolean, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CheckBox: React.FC<CheckBoxProps> = React.memo((props) => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.value, e)
		},
		[props.onChange, props.value]
	)

	return (
		<>
			{props.variant === 'primary' && (
				<div
					className={clsx(
						'w-fit rounded-sm border border-solid border-gray-400 p-0.5',
						props.disabled ? 'pointer-events-none cursor-default bg-transparent' : 'cursor-pointer bg-gray-50/30',
						props.className
					)}
					onClick={onClick}
				>
					{props.value ? (
						<CheckIcon
							className={clsx(
								'pointer-events-auto h-5 w-5 rounded-sm transition-all duration-300	',
								props.disabled ? 'bg-gray-50/30' : 'bg-blue-400 hover:bg-blue-500'
							)}
						/>
					) : (
						<div className={clsx('h-5 w-5 rounded-sm transition-all duration-300', !props.disabled && 'hover:bg-gray-50/30')} />
					)}
				</div>
			)}
			{props.variant === 'secondary' && (
				<div
					className={clsx(
						props.parentClassname,
						props.disabled ? 'pointer-events-none' : 'my-auto cursor-pointer border border-solid p-[1px]'
					)}
					style={{
						background: !props.value ? (props.color ? props.color : 'rgb(226 226 226/0.3)') : 'transparent',
						borderColor: props.value ? (props.color ? props.color : 'rgb(226 226 226/0.3)') : 'rgb(226 226 226/0.3)',
					}}
					onClick={onClick}
				>
					{props.value ? (
						<div
							className={clsx(
								props.childClassname,
								'pointer-events-auto flex h-full w-full items-center justify-center transition-all duration-300	'
							)}
							style={{ background: props.value ? (props.color ? props.color : 'rgb(34 121 206)') : 'transparent' }}
						>
							<TickIcon />
						</div>
					) : (
						<div className={clsx(props.childClassname, 'transition-all duration-300')}></div>
					)}
				</div>
			)}
		</>
	)
})

CheckBox.defaultProps = {
	variant: 'primary',
	parentClassname: 'w-5 h-5 rounded-sm',
	disabled: false,
}

export default CheckBox

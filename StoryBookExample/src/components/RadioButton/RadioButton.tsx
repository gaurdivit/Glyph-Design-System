import clsx from 'clsx'
import React, { useCallback } from 'react'
export interface RadioButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
	selected: boolean | string
	disabled?: boolean
	onChange?: (selected: boolean, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const RadioButtons: React.FC<RadioButtonProps> = React.memo((props) => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.selected, e)
		},
		[props.onChange, props.selected]
	)

	return (
		<div
			className={clsx(
				'flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-gray-50/30 bg-gray-50/10 hover:brightness-110',
				props.disabled && '!bg-gray-50/30 hover:!brightness-95',
				props.className
			)}
			onClick={onClick}
		>
			<div
				className={clsx(
					'h-3 w-3 rounded-full',
					!props.selected ? 'hover:bg-gray-50/30' : 'bg-blue-400 hover:bg-blue-500',
					props.disabled && '!bg-gray-200'
				)}
			></div>
		</div>
	)
})
export default RadioButtons

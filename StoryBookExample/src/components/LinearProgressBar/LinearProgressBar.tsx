import clsx from 'clsx'
import React from 'react'
import './LinearProgressBar.scss'

export interface LinearProgressBarProps {
	/**
	 * Set the value to change between determinant and indeterminant, 0 for indeterminant
	 */
	value?: number | string

	/**
	 * Variant for linearprogressbar
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * Classes to be applied to the progress bar.
	 */
	className?: string

	/**
	 * Set custom styles
	 */
	style?: React.CSSProperties

	/**
	 * Background color of progress bar
	 */
	backgroundColor?: string

	/**
	 * Color of progress bar
	 */
	progressBarColor?: string
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ variant = 'primary', ...props }) => {
	return (
		<>
			{props.value > '0' ? (
				<div className={clsx('relative h-2 w-full overflow-x-hidden rounded-xl', props.className)}>
					<div className='absolute h-2 w-full rounded-xl bg-gray-50/10' style={{ background: `${props.backgroundColor}` }} />
					{variant === 'primary' ? (
						<div
							className='subline absolute h-2 rounded-xl bg-blue-400'
							style={{
								background: `${props.progressBarColor}`,
								width: props.value + '%',
							}}
						/>
					) : (
						<div
							className='subline absolute h-2 rounded-xl'
							style={{
								background: `linear-gradient(270deg, #7E68B0 -3.96%, #008AD2 20.51%, #21B24B 42.89%, #FFC40E 64.99%, #F6821F 87.25%, #EF4023 109.23%, #7E68B0 128.71%)`,
								width: props.value + '%',
							}}
						/>
					)}
				</div>
			) : (
				<div className={clsx('relative h-2 w-full overflow-x-hidden rounded-xl', props.className)}>
					<div className='absolute h-2 w-full rounded-xl bg-gray-50/10' style={{ background: `${props.backgroundColor}` }} />
					<div
						className='subline inc absolute h-2 rounded-xl bg-blue-400'
						style={
							variant === 'primary'
								? { background: `${props.progressBarColor}` }
								: {
										background: `linear-gradient(270deg, #7E68B0 -3.96%, #008AD2 20.51%, #21B24B 42.89%, #FFC40E 64.99%, #F6821F 87.25%, #EF4023 109.23%, #7E68B0 128.71%)`,
								  }
						}
					/>
					<div
						className='subline dec absolute h-2 rounded-xl bg-blue-400'
						style={
							variant === 'primary'
								? { background: `${props.progressBarColor}` }
								: {
										background: `linear-gradient(270deg, #7E68B0 -3.96%, #008AD2 20.51%, #21B24B 42.89%, #FFC40E 64.99%, #F6821F 87.25%, #EF4023 109.23%, #7E68B0 128.71%)`,
								  }
						}
					/>
				</div>
			)}
		</>
	)
}

export default React.memo(LinearProgressBar)

import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLDivElement> {
	/**
	 * Value of the input
	 */
	value?: any

	/**
	 * Type of the input field.
	 * @default primary
	 */
	variant?: 'primary' | 'secondary' | 'tertiary'

	/**
	 * Heading for Input
	 */
	label?: string

	/**
	 * Description for Input.
	 */
	description?: string

	/**
	 * Whether the input is optional or not.
	 */
	optional?: boolean

	/**
	 * SVG icon for prefixIcon
	 */
	prefixIcon?: JSX.Element

	/**
	 * SVG icon for suffixIcon
	 */
	suffixIcon?: JSX.Element

	/**
	 * Error in input
	 */
	error?: boolean

	/**
	 * The classname for the wrapper div.
	 */
	wrapperClassName?: string
}

enum ErrorState {
	ACTIVE,
	INACTIVE,
}

const TextInput: React.FC<TextInputProps> = React.memo((props) => {
	// const iconRef = useRef<HTMLDivElement>(null)
	const [variantStyle, setClasses] = useState(ErrorState.ACTIVE)

	const onFocus = useCallback(() => {
		if (props.error) {
			setClasses(ErrorState.ACTIVE)
		}
	}, [props.error])

	useEffect(() => {
		if (props.error) {
			setClasses(ErrorState.INACTIVE)
		}
	}, [props.error])

	const onKeyDown = useCallback((e: any) => {
		if ((e.metaKey || (!(process.platform === 'darwin') && e.ctrlKey)) && e.key === 'a') {
			e.target.select()
		}
		if ((e.metaKey || (!(process.platform === 'darwin') && e.ctrlKey)) && e.key === 'c') {
			const selectedText = getSelection().toString()
			if (selectedText.length > 0) navigator.clipboard.writeText(selectedText)
		}
		if (e.metaKey && e.key === 'v') {
			const initialText = e.target.value
			const selectedText = getSelection().toString()
			const cursorPosiiton = e.target.selectionStart
			navigator.clipboard.readText().then((text) => {
				const finalValue = selectedText.length
					? initialText.replace(selectedText, text)
					: initialText.slice(0, cursorPosiiton) + text + initialText.slice(cursorPosiiton)
				props.onChange({
					target: {
						value: finalValue,
					},
				} as any)
			})
		}
	}, [])

	return (
		<div className={clsx('w-full flex-col', props.wrapperClassName)}>
			{props.label && (
				<div className='text-white-1000 mb-2 flex items-center justify-between px-1'>
					<span className='text-base-bold text-gray-50'>{props.label}</span>
					{props.optional && <span className='text-xs text-gray-200'>Optional</span>}
				</div>
			)}
			<div className='relative flex items-center'>
				<div className='absolute left-4 cursor-pointer py-2 pl-2'>{props.prefixIcon}</div>
				<input
					{...props}
					className={clsx(
						'relative w-full rounded-lg border bg-transparent py-2 text-base-bold',
						variantStyle === ErrorState.ACTIVE &&
							'border-gray-50/10  text-gray-200 hover:border-gray-200 hover:text-gray-200 focus:border-blue-400 focus:text-gray-50 disabled:pointer-events-none disabled:border-gray-50/30 disabled:bg-gray-50/30 disabled:text-gray-200',
						variantStyle === ErrorState.INACTIVE && 'border-red-400 text-gray-50',
						props.readOnly && 'cursor-default',
						props.prefixIcon ? 'pl-12' : 'pl-3',
						props.suffixIcon ? 'pr-8' : 'pr-2',
						props.className
					)}
					onFocus={onFocus}
					onKeyDown={onKeyDown}
				/>
				<div className='absolute right-4 cursor-pointer py-2 pr-2'>{props.suffixIcon}</div>
			</div>
			{props.description && <div className='mt-2 overflow-hidden text-ellipsis pl-1 text-xs text-gray-200'>{props.description}</div>}
		</div>
	)
})

export default TextInput

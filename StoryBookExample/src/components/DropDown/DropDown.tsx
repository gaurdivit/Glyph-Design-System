import { DropDownIcon } from '@aftershootco/unicorn-icons'
import clsx from 'clsx'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export interface DropdownData {
	label: string | JSX.Element
	value: string | number | boolean
	[key: string]: any
}

export interface DropDownProps {
	/**
	 * Current value selected of the dropdown
	 * It is the key of the dropdown object.
	 */
	value: string | number | JSX.Element

	/**
	 * Options to be shown when dropdown is opened.
	 * @example { 'Option 1': { label: 'Label 1', value: 'Value 1' }, 'Option 2': { label: 'Label 2', value: 'Value 2' } }
	 */
	data: {
		[key: string | number]: DropdownData
	}

	/**
	 * Classes to be applied to the dropdown
	 */
	className?: string

	/**
	 * Classes to be applied to the outer div of dropdown.
	 */
	outerClassName?: string

	/**
	 * Width of the dropdown
	 */
	width?: string

	/**
	 * Style to be applied to the dropdown.
	 */
	style?: React.CSSProperties

	/**
	 * Style to be applied on the outer div element
	 */
	outerStyle?: React.CSSProperties

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
	 * Function to be called when any option is clicked
	 */
	onChange: (clickedOn: DropdownData) => void

	/**
	 * ID for Playwright testing.
	 */
	dataTestId?: string

	/**
	 * Children element.
	 */
	children?: React.ReactNode

	/**
	 * To be shown when none is selected.
	 */
	placeholder?: string

	/**
	 * Place holder element
	 */
	placeholderData?: { [key: string | number]: DropdownData }

	inputClassName?: string

	maxHeight?: string
}

const DropDown: React.FC<DropDownProps> = React.forwardRef((props: DropDownProps, ref: any) => {
	const inputRef = useRef(null)
	const firstElement = useRef(null)
	const lastElement = useRef(null)

	const [expanded, setExpanded] = useState(false)
	const [height, setHeight] = useState(0)
	const [prevKey, setPrevKey] = useState('')

	const restProps: any = useMemo(() => {
		const temp = { ...props }

		delete temp.value
		delete temp.data
		delete temp.className
		delete temp.outerClassName
		delete temp.style
		delete temp.outerStyle
		delete temp.width
		delete temp.onChange
		delete temp.dataTestId
		delete temp.children

		return temp
	}, [props])

	const [selected, setSelected] = useState<string | number | JSX.Element>()
	const [data, setData] = useState<typeof props.data>(props.data)

	// To make sure dropdown not exceeds the page.
	const measureHeight = useCallback(() => {
		const viewportOffset = inputRef.current.getBoundingClientRect()
		setHeight(viewportOffset.top + 65)
	}, [])

	// To use updated data.
	useEffect(() => {
		setTimeout(() => {
			if (props.placeholderData !== undefined) {
				setData({
					...props.placeholderData,
					...props.data,
				})
			} else if (props.placeholder !== undefined) {
				setData({
					'': { label: props.placeholder, value: '' },
					...props.data,
				})
			} else setData(props.data)
		}, 10)
	}, [props.data])

	// To update the "props.value" in case "props.data" changes.
	useEffect(() => {
		setTimeout(() => {
			const valueExist = Object.keys(data).find((key) => String(data[key].value) === String(props.value))
			if (valueExist) setSelected(data[valueExist].label)
			else {
				// show placeholder.
				if (props.placeholderData) {
					setSelected(props.placeholderData[Object.keys(props.placeholderData)[0]].label)
					return
				}
				if (props.placeholder) setSelected(data[''].label)
				else setSelected('')
			}
		}, 10)
	}, [props.value, data])

	// To get the selected value into view when dropdown clicked.
	useEffect(() => {
		measureHeight()
		if (expanded) {
			document.getElementById('apply')?.scrollIntoView({
				behavior: 'auto',
				block: 'start',
				inline: 'nearest',
			})
			document.getElementById('apply')?.focus()
		}
	}, [expanded])

	// To handle onChange.
	const handleChange = React.useCallback(
		(e, clickedOn: DropdownData) => {
			e.preventDefault()
			props.onChange(clickedOn)

			inputRef.current.click()
			firstElement.current = null
			lastElement.current = null
		},
		[props.onChange]
	)

	// Key Down event for searching values with keys.
	const onKeyDown = useCallback(
		(e) => {
			if (typeof props.value === 'number') return
			const selectedKey = props.value[0]?.toUpperCase() ?? 'A'
			const selectedKeyDiv = document.getElementById('apply')

			const currentKey = e.key.toString()?.toUpperCase() ?? 'A'
			const currentKeyDiv = document.getElementById(currentKey)

			// const prevKeyDiv = document.getElementById(prevKey);

			// prevKeyDiv?.classList.remove('bg-red-300'); // Remove bg from the prevKey

			// If currentKey is first letter of the selected value
			if (currentKey === selectedKey) {
				selectedKeyDiv?.scrollIntoView({
					behavior: 'auto',
					block: 'start',
					inline: 'nearest',
				})
				return
			}
			currentKeyDiv?.scrollIntoView({
				behavior: 'auto',
				block: 'start',
				inline: 'nearest',
			})
			// currentKeyDiv?.classList.add('hover:bg-gray-50/10');

			setPrevKey(currentKey)
		},
		[prevKey]
	)

	return (
		<div {...restProps} className={clsx('relative w-full', props.outerClassName)} ref={ref}>
			{props.label && (
				<div className='text-white-1000 mb-2 flex items-center justify-between px-1'>
					<span className='text-base-bold text-gray-50'>{props.label}</span>
					{props.optional && <span className='text-xs text-gray-200'>Optional</span>}
				</div>
			)}
			<div className='relative flex' ref={inputRef} onClick={() => setExpanded((state) => !state)}>
				<div
					className={`w-full cursor-pointer overflow-hidden text-ellipsis rounded-lg border border-gray-50/10 bg-transparent py-2 pl-2 pr-8 text-base-bold text-gray-200 ${
						props.inputClassName ?? ''
					}`}
				>
					{selected}
				</div>
				<DropDownIcon
					className={clsx(
						'absolute right-4 top-[30%] h-4 w-4 transform-gpu cursor-pointer text-gray-400 transition duration-300',
						expanded ? 'rotate-180' : 'rotate-0'
					)}
				/>
			</div>
			{props.description && <div className='mt-2 overflow-hidden text-ellipsis pl-1 text-xs text-gray-200'>{props.description}</div>}

			{/* {The z-index must be greater than titlebar's z-index} */}
			{expanded && (
				<div
					className='fixed inset-0 z-[1600] flex cursor-pointer items-center justify-between bg-transparent'
					onClick={() => setExpanded(false)}
				/>
			)}

			{/* {Drop Down for Accountdetails, Settings} */}
			{expanded && (
				<div
					className={clsx(
						'absolute z-[1700] mt-2 flex w-full flex-col overflow-y-scroll',
						'rounded-lg border border-gray-500 bg-gray-800 text-base-bold text-gray-50'
					)}
					style={{ maxHeight: props.maxHeight ?? `calc(100vh - ${height}px)` }}
					onKeyDown={onKeyDown}
				>
					{Object.keys(data).map((_key, i) => {
						let objectLength = Object.keys(data).length
						return (
							<button
								ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
								key={_key}
								id={props.value == _key ? 'apply' : data[_key].label[0]}
								className={clsx(
									'word-break-all flex w-full cursor-pointer items-center justify-start',
									'border-none px-5 py-3 text-left text-gray-50 outline-none',
									'hover:bg-gray-50/10 active:bg-gray-800',
									String(props.value) === _key && 'bg-blue-300/20 text-blue-400'
								)}
								onClick={(e) => handleChange(e, data[_key])}
								data-test-id={`${props.dataTestId}-${_key}`}
							>
								{data[_key].label}
							</button>
						)
					})}
					<div onClick={() => setExpanded(false)}>{props.children}</div>
				</div>
			)}
		</div>
	)
})

DropDown.defaultProps = {
	dataTestId: 'uds-dropdown',
}

export default React.memo(DropDown)

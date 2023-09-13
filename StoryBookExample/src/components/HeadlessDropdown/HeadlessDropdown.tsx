import { DropDownIcon } from '@aftershootco/unicorn-icons'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Fragment, useEffect, useState } from 'react'

export interface HeadlessDropDownData {
	label: string | JSX.Element
	value: string | number | boolean
	[key: string]: any
}

export interface HeadlessDropDownProps {
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
		[key: string | number]: HeadlessDropDownData
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
	onChange: (clickedOn: HeadlessDropDownData) => void

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
	placeholderData?: { [key: string | number]: HeadlessDropDownData }

	/**
	 * To regulate the placeholder button styles
	 */
	inputClassName?: string

	/**
	 * To regulate the height of dropdown options.
	 * Should be valid tailwind class
	 * 'max-h-[value]'  <- format
	 */
	maxHeightClassName?: string

	/**
	 * To disable the dropdown
	 */
	disabled?: boolean
}

const HeadlessDropDown: React.FC<HeadlessDropDownProps> = (props: HeadlessDropDownProps) => {
	const [selectedValue, setSelected] = useState<string | number | JSX.Element>()
	const [data, setData] = useState(props.data)
	// DropDown.defaultProps = {
	// 	dataTestId: 'uds-dropdown',
	// } Dont know about this logic yet.

	useEffect(() => {
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
	}, [props.placeholderData, props.data])

	useEffect(() => {
		const valueExist = Object.keys(data).find((key) => String(data[key].value) === String(props.value))

		if (valueExist) {
			setSelected(data[valueExist].label)
		} else {
			if (props.placeholderData) {
				setSelected(props.placeholderData[Object.keys(props.placeholderData)[0]].label)
				return
			}
			if (props.placeholder) setSelected(data[''].label)
		}
	}, [props.value, data])

	const handleChange = (profile: HeadlessDropDownData) => {
		setSelected(profile.label)
		props.onChange(profile)
	}

	return (
		<div className={clsx('flex w-full flex-col gap-1', props.outerClassName)}>
			{props.label && (
				<div className='text-white-1000 flex items-center justify-between px-1'>
					<span className='text-base-bold text-gray-50'>{props.label}</span>
					{props.optional && <span className='text-xs text-gray-200'>Optional</span>}
				</div>
			)}
			<div className='w-full'>
				<Listbox
					value={selectedValue}
					disabled={props.disabled}
					// onChange={() => handleChange}
				>
					{({ open }) => (
						<div className='relative mt-1 text-base'>
							<Listbox.Button
								className={clsx(
									'relative flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-50/10 px-3 py-2 text-left focus:outline-none',
									props.inputClassName ?? ''
								)}
							>
								<span className='block w-full truncate pr-5 text-gray-200 '>{selectedValue}</span>
								<DropDownIcon className={`h-3 w-3 transition-all duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} />
							</Listbox.Button>
							{props.description && (
								<div className='mt-2 overflow-hidden text-ellipsis pl-1 text-xs text-gray-200'>{props.description}</div>
							)}
							<Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
								<Listbox.Options
									className={clsx(
										'grid-scollbar absolute z-[50] mt-2 w-full overflow-y-auto rounded-lg border border-gray-500 bg-gray-800 focus:outline-none',
										props.maxHeightClassName ?? 'max-h-60'
									)}
								>
									{Object.keys(data).map((profile, profileIdx) => (
										<Listbox.Option
											key={profileIdx}
											data-test-id={`${props.dataTestId}-${profile}`}
											className={({ selected, active }) =>
												`} relative cursor-pointer select-none py-3 pl-5 pr-4 
											text-gray-50 ${selected ? 'bg-blue-300/20' : ''} hover:bg-gray-50/10 ${active ? 'bg-gray-50/10' : ''} }`
											}
											value={data[profile].label}
											onClick={() => handleChange(data[profile])}
										>
											{({ selected }) => (
												<>
													<span className={`block truncate ${selected ? 'font-medium' : ''}`}>{data[profile].label}</span>
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					)}
				</Listbox>
			</div>
		</div>
	)
}
HeadlessDropDown.defaultProps = {
	dataTestId: 'uds-dropdown',
}
export default React.memo(HeadlessDropDown)

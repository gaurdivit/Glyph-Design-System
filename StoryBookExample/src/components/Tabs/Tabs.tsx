import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'

export interface TabsProps {
	/**
	 * The current selected tab.
	 */
	selected: number

	/**
	 * The tabs to display.
	 */
	tabs: string[]

	/**
	 * Event when the tab is changed.
	 */
	onChange: (index: number) => void

	/**
	 * The class name to apply to the tabs.
	 */
	className?: string
}

const Tabs: React.FC<TabsProps> = React.memo((props) => {
	const sliderRef = useRef(null)

	useEffect(() => {
		const doc = document.getElementById(props.tabs[props.selected])
		sliderRef.current.style.width = doc.offsetWidth + 'px'
		sliderRef.current.style.left = doc.offsetLeft + 'px'
	}, [props.selected])

	return (
		<nav className='w-full flex-col'>
			<div className='flex w-full'>
				{props.tabs.map((tab, index) => {
					return (
						<div
							id={tab}
							className={clsx(
								'text-bold mx-3 flex min-w-8 cursor-pointer justify-center py-3 text-gray-50',
								'first-of-type:ml-8',
								props.className
							)}
							onClick={() => props.onChange(index)}
							key={tab}
						>
							{tab}
						</div>
					)
				})}
			</div>
			<div className='relative h-[1px] w-full bg-gray-600'>
				<div className='absolute left-8 h-[1px] w-32 rounded-lg bg-gray-50 duration-200' ref={sliderRef} />
			</div>
		</nav>
	)
})

export default Tabs

import { ArrowIcon } from '@aftershootco/unicorn-icons'
import clsx from 'clsx'
import React, { useCallback, useRef } from 'react'

export interface AccordionProps {
	id?: string
	expanded?: boolean
	onChange?: (value: boolean) => void

	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties

	children: React.ReactNode
	childrenClassName?: string

	suffixIcon?: JSX.Element
	className?: string
}

const Accordion: React.FC<AccordionProps> = React.memo((props) => {
	const contentSpace = useRef(null)

	const toggleAccordion = useCallback(
		(e) => {
			e.stopPropagation()
			props.onChange(!props.expanded)
		},
		[props.onChange]
	)

	return (
		<div className={clsx('mb-2 w-full cursor-pointer rounded bg-gray-800 p-4 text-lg', props.className)} id={props.id}>
			<div className='flex w-full items-center justify-between' onClick={toggleAccordion}>
				<div className='w-100 flex items-center break-words'>
					<ArrowIcon className={clsx('text-gray-400 transition-all duration-300', props.expanded ? 'rotate-90' : 'rotate-0')} />
					<div className={clsx('w-auto pl-3 text-gray-50', props.headerClassName)} style={props.headerStyle}>
						{props.header}
					</div>
				</div>
				<div>{props.suffixIcon}</div>
			</div>
			<div
				ref={contentSpace}
				className={clsx(
					'transition-height min-h-0 w-full text-base text-gray-200 duration-300 ease-in-out',
					props.expanded ? 'mt-2 h-auto overflow-visible opacity-100' : 'h-0 overflow-hidden py-0 opacity-0',
					props.childrenClassName
				)}
			>
				{props.children}
			</div>
		</div>
	)
})

export default Accordion

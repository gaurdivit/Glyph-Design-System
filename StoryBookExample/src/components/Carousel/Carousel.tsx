import clsx from 'clsx'
import React from 'react'
export interface CarouselProps {
	/**
	 * ClassName for the outer div.
	 */
	className?: string
	/**
	 * Styles to be aplied for the outer div.
	 */
	style?: React.CSSProperties
	/**
	 * Data to be shown. It should be an array of JSX.
	 */
	children: string[] | JSX.Element[]
	/**
	 * Default view to be shown. It should be an index of data.
	 */
	view: number

	/**
	 * To show the carousal indicators or not.
	 * @param index
	 * @returns
	 */
	showCarousalIndicators?: boolean

	/**
	 * Fucntion to be called on changing view.
	 */
	onChange: (index: number) => void
}
const Carousel: React.FC<CarouselProps> = ({ showCarousalIndicators = true, ...props }: CarouselProps) => {
	return (
		<div className={clsx('w-full flex-col', props.className)} style={props.style}>
			{props.children[props.view]}
			{showCarousalIndicators && props.children.length > 1 && (
				<div className='mt-3 flex w-full items-center justify-center'>
					{props.children.map((_, index) => {
						return (
							<div
								className={clsx(
									'mr-2 h-3 w-3 cursor-pointer rounded-full',
									'transition-all duration-200',
									index === props.view ? 'bg-gray-50' : 'bg-gray-500'
								)}
								onClick={() => props.onChange(index)}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}
export default React.memo(Carousel)

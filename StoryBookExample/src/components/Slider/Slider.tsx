import React from 'react'
import './Slider.scss'

const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<>
			<div className={`flex h-[34px] w-full items-center justify-center rounded`}>
				<input
					{...props}
					disabled={props.disabled}
					className={`w-4/5 rounded-sm bg-gradient-to-b ${
						!props.disabled ? 'from-[#2279CE] to-[#2279CE]' : 'from-[#e2e2e2] to-[#e2e2e2] opacity-40'
					} slider-input bg-[#E2E2E21A] bg-no-repeat ${props.className}`}
					type='range'
					style={{
						...props.style,
						backgroundSize: ((Number(props.value) - Number(props.step)) * 100) / (Number(props.max) - Number(props.min)) + '%',
					}}
				/>
			</div>
		</>
	)
}

export default Slider

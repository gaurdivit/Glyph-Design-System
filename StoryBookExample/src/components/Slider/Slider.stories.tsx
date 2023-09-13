import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Slider } from '..'

export default {
	title: 'component/Slider',
	component: Slider,
} as Meta

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (args: React.InputHTMLAttributes<HTMLInputElement>) => <Slider {...args} />

const Default = Template.bind({})
Default.args = {
	min: 1,
	max: 10,
	value: 5,
	steps: 1,
}

export { Default }

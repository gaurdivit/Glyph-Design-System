import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LinearProgressBar, LinearProgressBarProps } from '..'

export default {
	title: 'component/LinearProgressBar',
	component: LinearProgressBar,
} as Meta

const Template: Story<LinearProgressBarProps> = (args: LinearProgressBarProps) => <LinearProgressBar {...args} />

const Default = Template.bind({})
Default.args = {
	value: 0,
	variant: 'secondary',
}

export { Default }

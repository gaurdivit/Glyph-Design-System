import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RadioButtons } from '..'

export default {
	title: 'component/RadioButtons',
	component: RadioButtons,
} as Meta

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (args: React.InputHTMLAttributes<HTMLInputElement>) => <RadioButtons {...args} />

const Default = Template.bind({})
Default.args = {
	checked: true,
}

export { Default }

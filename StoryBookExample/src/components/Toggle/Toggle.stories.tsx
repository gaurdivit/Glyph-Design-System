import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Toggle, ToggleProps } from '..'

export default {
	title: 'component/Toggle',
	component: Toggle,
} as Meta

const Template: Story<ToggleProps> = (args: ToggleProps) => <Toggle {...args} />

const Default = Template.bind({})
Default.args = {
	value: true,
	options: {
		first: 'Yearly',
		second: 'Monthly',
	},
	onClick: null,
}

export { Default }

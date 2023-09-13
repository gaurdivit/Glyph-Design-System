import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckBox, CheckBoxProps } from '..'

export default {
	title: 'component/CheckBox',
	component: CheckBox,
} as Meta

const Template: Story<CheckBoxProps> = (args: CheckBoxProps) => <CheckBox {...args} />

const Default = Template.bind({})
Default.args = {
	value: false,
	disabled: false,
	varient: 'primary',
}

export { Default }

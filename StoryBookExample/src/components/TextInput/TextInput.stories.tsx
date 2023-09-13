import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TextInput, TextInputProps } from '..'

export default {
	title: 'component/TextInput',
	component: TextInput,
} as Meta

const Template: Story<TextInputProps> = (args: TextInputProps) => <TextInput {...args} />

const Default = Template.bind({})
Default.args = {
	value: 'aftershoot',
}

export { Default }

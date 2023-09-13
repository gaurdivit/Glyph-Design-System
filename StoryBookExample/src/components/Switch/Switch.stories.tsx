import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Switch } from '..'
import { SwitchProps } from './Switch'

export default {
	title: 'component/Switch',
	component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args: SwitchProps) => <Switch {...args} />

const Default = Template.bind({})
Default.args = {
	value: true,
	disabled: false
}

export { Default }

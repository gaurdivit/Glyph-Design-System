import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Divider, DividerProps } from '..'

export default {
	title: 'component/Divider',
	component: Divider,
} as Meta

const Template: Story<DividerProps> = (args: DividerProps) => <Divider {...args} />

const Default = Template.bind({})
Default.args = {
	variant: 'horizontal',
}

export { Default }

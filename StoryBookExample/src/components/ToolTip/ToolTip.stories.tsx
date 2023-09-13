import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ToolTip, ToolTipProps } from '..'

export default {
	title: 'component/ToolTip',
	component: ToolTip,
} as Meta

const Template: Story<ToolTipProps> = (args: ToolTipProps) => <ToolTip {...args} />

const Default = Template.bind({})
Default.args = {
	title: 'ToolTip',
}

export { Default }

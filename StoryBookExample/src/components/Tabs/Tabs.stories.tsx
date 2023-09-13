import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Tabs, TabsProps } from '..'

export default {
	title: 'component/Tabs',
	component: Tabs,
} as Meta

const Template: Story<TabsProps> = (args: TabsProps) => <Tabs {...args} />

const Default = Template.bind({})
Default.args = {
	selected: 0,
	tabs: ['Articles', 'Videos', 'Photos'],
}

export { Default }

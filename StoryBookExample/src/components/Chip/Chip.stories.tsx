import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Chip, ChipProps } from '..'

export default {
	title: 'component/Chip',
	component: Chip,
} as Meta

const Template: Story<ChipProps> = (args: ChipProps) => <Chip {...args} />

const Default = Template.bind({})
Default.args = {
	selected: false,
	text: 'Chip',
}

export { Default }

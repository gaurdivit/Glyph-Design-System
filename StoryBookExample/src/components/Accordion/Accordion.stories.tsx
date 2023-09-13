import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Accordion, AccordionProps } from '..'

export default {
	title: 'component/Accordion',
	component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (args: AccordionProps) => <Accordion {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

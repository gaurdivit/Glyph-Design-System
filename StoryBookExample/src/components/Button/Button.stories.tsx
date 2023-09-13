import { ArrowForwardIcon } from '@aftershootco/unicorn-icons'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from '..'

export default {
	title: 'component/Button',
	component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

const Default = Template.bind({})
Default.args = {
	text: 'Button',
	variant: 'primary',
	suffixIcon: <ArrowForwardIcon className='h-4 w-4 pl-14' />,
}

export { Default }

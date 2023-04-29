import React from 'react'
import { ColoredDiv } from 'ui'

type Props = {}

export const Colors = (props: Props) => {
  return (
    <div className='w-full h-full relative p-60'>
    <ColoredDiv
      color='purple'
      direction='top'
      height={12}
      width={28}
      rotateZ={45}
      className='absolute z-10 -right-12'
    />
    <ColoredDiv
      color='blue'
      direction='top'
      height={16}
      width={6}
      // rotateZ={45}
      className='absolute z-10 left-16 bottom-1/2'
    />
    <ColoredDiv
      color='blue'
      direction='right'
      height={16}
      width={16}
      // rotateZ={45}
      className='absolute z-10 right-16 bottom-20 rounded-full'
    />
    <ColoredDiv
      color='green'
      direction='bottom'
      height={10}
      width={16}
      className='absolute z-20 left-24 bottom-12'
    />
    <ColoredDiv
      color='orange'
      direction='top'
      height={10}
      width={32}
      // rotateZ={}
      className='absolute z-10 -right-4 top-1/3 rounded-full'
    />
    <ColoredDiv
      color='peach'
      direction='bottom'
      height={32}
      width={12}
      rotateZ={-10}
      className='absolute z-10 right-1/2 bottom-24'
    />
  </div>
  )
}

import React from 'react';
import { benefits } from './benefits-data';
import { ColoredDiv } from '@repo/ui';
import { container } from '../../styles/styles';

type Props = {};

export const Benefits = (props: Props) => {
  return (
    <section className={`w-5/6 mx-auto my-16 grid md:grid-cols-2 gap-6 ${container}`}>
      {benefits.map((benefit) => {
        return (
          <div key={benefit.title} className="">
            <ColoredDiv
              color={benefit.color}
              direction={benefit.direction}
              height={16}
              className="p-8 "
            >
              <div className="flex flex-col justify-center h-full">
                <p className="md:text-2xl font-bold">{benefit.title}</p>
                <p className="text-md max-w-xs">{benefit.text}</p>
              </div>
            </ColoredDiv>
          </div>
        );
      })}
    </section>
  );
};

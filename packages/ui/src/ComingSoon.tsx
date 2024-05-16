import { ColoredDiv } from "./ColoredDiv";

type Props = {
  pageName: string;
  containerClass: string;
};

export const ComingSoon = ({ pageName, containerClass }: Props) => {
  return (
    <section
      className={`main-height mt-16 flex flex-col justify-center items-center gap-4 ${containerClass}`}>
      <h1 className='text-5xl'>{pageName}</h1>
      <h1 className='text-3xl'>Coming Soon..</h1>
      <div className='grid grid-cols-5 w-3/4'>
        <ColoredDiv color='pink' direction='top' height={12} width={24} rotateZ={45} />
        <ColoredDiv color='green' direction='bottom' height={8} width={8} rotateZ={22.5} />
        <ColoredDiv
          color='blue'
          direction='top'
          height={12}
          width={12}
          rotateZ={45}
          className='rounded-full'
        />
        <ColoredDiv color='beige' direction='bottom' height={12} width={12} rotateZ={45} />
        <ColoredDiv
          color='black'
          direction='top'
          height={12}
          width={18}
          rotateZ={90}
          className='rounded-3xl'
        />
        <ColoredDiv color='white' direction='bottom' height={10} width={22} rotateZ={15} />
        <ColoredDiv color='orange' direction='top' height={16} width={6} rotateZ={90} />
        <ColoredDiv
          color='purple'
          direction='top'
          height={14}
          width={8}
          rotateZ={-35}
          className='rounded-full'
        />
        <ColoredDiv
          color='red'
          direction='bottom'
          height={16}
          width={12}
          rotateZ={45}
          className='rounded-full'
        />
        <ColoredDiv
          color='yellow'
          direction='bottom'
          height={14}
          width={8}
          rotateZ={45}
          className='rounded-xl'
        />
      </div>
    </section>
  );
};

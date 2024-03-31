import { BiPurchaseTag } from 'react-icons/bi';

type Props = {
  text: string;
};

export const EventTag = ({ text }: Props) => {
  return (
    <div className='badge badge-info gap-2'>
      <BiPurchaseTag />
      {text}
    </div>
  );
};

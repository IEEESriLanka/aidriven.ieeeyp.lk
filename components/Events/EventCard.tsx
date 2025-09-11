import { ContactDetailProps } from '@/lib/type';
import Image from 'next/image';

export const EventFeatCard = ({
  contactDetail,
}: {
  contactDetail: ContactDetailProps;
}) => (
  <div className="flex gap-4 my-4">
      <Image className="size-[64px]" src={contactDetail.icon} alt="" />
      <p className="w-[320px] text-[16px] font-[400]">{contactDetail.title}</p>
  </div>
);


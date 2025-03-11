import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClient } from '@/fake/fake-data';

import { NoContactSelected } from './NoContactSelected';
import { ContactInfoSkeleton } from './ContactInfoSkeleton';
import { ContactInfo } from './ContactInfo';

export const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ['client', clientId],
    queryFn: () => getClient(clientId ?? ''),
    enabled: !!clientId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (!clientId) {
    return <NoContactSelected />;
  }

  if (isLoading && !client) {
    return <ContactInfoSkeleton />;
  }

  if (client) {
    return <ContactInfo client={client} />;
  }

  return <div>Client not found</div>;
};

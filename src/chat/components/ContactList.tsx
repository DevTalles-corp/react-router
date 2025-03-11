import { NavLink, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import { getClients } from '@/fake/fake-data';

export const ContactList = () => {
  const { clientId } = useParams();

  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getClients(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
                <div className="animate-pulse">Loading contacts...</div>
              </div>
            )}

            {clients?.map((client) => (
              <NavLink
                key={client.id}
                to={`/chat/${client.id}`}
                className={({ isActive }) =>
                  `w-full flex items-center mt-3 transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/10 text-primary font-medium rounded-md'
                      : 'hover:bg-muted/50 rounded-md'
                  }`
                }
              >
                <div
                  className={`h-6 w-6 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs ${
                    clientId === client.id
                      ? 'bg-blue-300 text-blue-600 font-medium'
                      : 'bg-gray-300'
                  }`}
                >
                  {client.name.charAt(0)}
                  {client.name.charAt(1)}
                </div>
                <span
                  className={`transition-all duration-300 ${
                    clientId === client.id
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  {client.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

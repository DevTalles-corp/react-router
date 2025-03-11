import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export const ContactList = () => {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <div className="h-6 w-6 rounded-full bg-blue-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                G5
              </div>
              G5 Customer
            </Button>
            <NavLink to="/chat/1" className="w-full flex items-center mt-3">
              <div className="h-6 w-6 rounded-full bg-green-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                JD
              </div>
              John Doe
            </NavLink>
            <NavLink to="/chat/2" className="w-full flex items-center mt-3">
              <div className="h-6 w-6 rounded-full bg-purple-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                AS
              </div>
              Alice Smith
            </NavLink>
            <Button variant="ghost" className="w-full justify-start">
              <div className="h-6 w-6 rounded-full bg-yellow-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                RJ
              </div>
              Robert Johnson
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <div className="h-6 w-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                EW
              </div>
              Emma Wilson
            </Button>
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

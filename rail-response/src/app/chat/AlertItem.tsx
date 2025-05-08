// chat/AlertItem.tsx
type AlertItemProps = {
  name: string;
  time: string;
  status?: 'unread' | 'read';
  initials: string;
};

export default function AlertItem({ name, time, initials, status = 'read' }: AlertItemProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
      <div className="flex gap-3 items-center">
        <div className="bg-gray-300 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
          {initials}
        </div>
        <div className="text-sm">
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">Supporting line text lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-right">
        {time}
        {status === 'unread' && <div className="w-2 h-2 bg-red-600 rounded-full mt-1 mx-auto" />}
      </div>
    </div>
  );
}

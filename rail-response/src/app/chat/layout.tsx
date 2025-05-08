// chat/layout.tsx
export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1b4263] text-black p-4">
      {children}
    </div>
  );
}

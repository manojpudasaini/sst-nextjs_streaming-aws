import { Suspense } from 'react';
import ChatComponent from './_components/chat';

export const dynamic = 'force-dynamic';

export default function Chat() {
  return (
    <div className='flex flex-col h-dvh overflow-y-auto max-w-md mx-auto px-1'>
      <h2 className='w-full text-center text-3xl font-semibold p-2 sticky top-0 drop-shadow bg-black/20 text-white'>Chat</h2>
      <Suspense fallback={<div>loading...</div>}>
        <ChatComponent />
      </Suspense>
    </div>
  )
};

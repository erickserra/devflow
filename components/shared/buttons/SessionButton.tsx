import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';

const SessionButton = () => {
  return (
    <SignedIn>
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: 'h-10 w-10',
          },
          variables: {
            colorPrimary: '#ff7000',
          },
        }}
      />
    </SignedIn>
  );
};

export default SessionButton;

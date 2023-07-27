import React from 'react';
import EmailCard from './EmailCard';

const EmailList = ({ emailData }: { emailData: any[] }) => {
  return (
    <ul className="grid place-items-center">
      {emailData.map((item: any) => {
        return (
          <EmailCard
            key={item._id}
            name={item.name}
            email={item.email}
          />
        );
      })}
    </ul>
  );
};

export default EmailList;
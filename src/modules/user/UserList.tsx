import * as React from 'react';
import UserItem from './UserItem';
import { User } from './User';

type Props = {
  items: User[];
};

const UserList = ({ items }: Props) => (
  <ul>
    {items?.map((item) => (
      <li key={item.id}>
        <UserItem data={item} />
      </li>
    ))}
  </ul>
);

export default UserList;

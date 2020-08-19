import * as React from 'react';

import { User } from './User';

type UserDetailProps = {
  item: User;
};

const UserDetail = ({ item: user }: UserDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default UserDetail;

import React from 'react';
import Link from 'next/link';

import { User } from './User';

type Props = {
  data: User;
};

const UserItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default UserItem;

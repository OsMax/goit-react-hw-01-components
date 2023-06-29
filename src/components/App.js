import user from './data-lists/user.json';
import data from './data-lists/data.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div
      style={{
        //height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
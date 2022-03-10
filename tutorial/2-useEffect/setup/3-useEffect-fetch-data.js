import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users)
    // console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);   //Do not forget the [], otherwise browser will go into infinite render because setUser(users) updates user, which leads to useEffect re-rendering, which again update user using setUsers so on
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {
          users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export default UseEffectFetchData;

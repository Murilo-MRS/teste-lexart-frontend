import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const appContext = useMemo(
    () => ({
      email,
      setEmail,
      username,
      setUsername,
      password,
      setPassword,
      error,
      setError,
      loading,
      setLoading,
    }),
    [
      email,
      setEmail,
      username,
      setUsername,
      password,
      setPassword,
      error,
      setError,
      loading,
      setLoading,
    ],
  );

  return (
    <Context.Provider value={appContext}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

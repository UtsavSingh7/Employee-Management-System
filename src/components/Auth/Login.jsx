import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    setEmail(''); // Reset email state
    setPassword(''); // Reset password state
    console.log('Hello guys');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-100"
            placeholder="Enter your email"
            type="email"
          />
          <input
            value={password} // Bind to state
            onChange={(e) => {
              setPassword(e.target.value); // Update state on change
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 mt-3 px-5 rounded-full placeholder:text-gray-100"
            placeholder="Enter your password"
            type="password"
          />
          <button
            className="mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

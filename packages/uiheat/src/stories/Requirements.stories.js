import React, { useState } from 'react';
// import { storiesOf } from '@storybook/react';
import './styles.css';
import { Requirements } from '../components/requirements';

export default {
  title: 'Example/Requirements', // Define the title for your stories
  component: Requirements, // Specify the component being used in the stories
};

// Define your stories using the 'args' pattern
export const App = (args) => {
  const [valid,  setValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const passwordRequirements = [
    {
      text: 'Must be at least 8 characters',
      validator: val => val.length >= 8,
    },
    {
      text: 'Must contain at least one number',
      validator: val => /\d/g.test(val),
    },
    {
      text: 'Must contain at least one lower-case letter',
      validator: val => /[a-z]/g.test(val),
    },
    {
      text: 'Must contain at least one upper-case letter',
      validator: val => /[A-Z]/g.test(val),
    }
  ];

  return (
    <div className='form'>
      <h1>Signup</h1>

      <Requirements
        value={password}
        requirements={passwordRequirements}
        onValidChange={isValid => setValid(isValid)}
      />

      <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />

      <button disabled={!valid || !username}>Sign Up</button>
    </div>
  );
};

// Optionally, provide default values for your component props
App.args = {
  // Define your component's props here
  password: "",

};

// const stories = storiesOf('App Test', module);

// stories.add('App', () => {
//   const [valid,  setValid] = useState(false);
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const passwordRequirements = [
//     {
//       text: 'Must be at least 8 characters',
//       validator: val => val.length >= 8,
//     },
//     {
//       text: 'Must contain at least one number',
//       validator: val => /\d/g.test(val),
//     },
//     {
//       text: 'Must contain at least one lower-case letter',
//       validator: val => /[a-z]/g.test(val),
//     },
//     {
//       text: 'Must contain at least one upper-case letter',
//       validator: val => /[A-Z]/g.test(val),
//     }
//   ];

//   return (
//     <div className='form'>
//       <h1>Signup</h1>

//       <Requirements
//         value={password}
//         requirements={passwordRequirements}
//         onValidChange={isValid => setValid(isValid)}
//       />

//       <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
//       <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />

//       <button disabled={!valid || !username}>Sign Up</button>
//     </div>
//   );
// });
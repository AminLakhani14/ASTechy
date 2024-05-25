// src/AddData.js
import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddData = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        debugger
      await addDoc(collection(db, 'users'), { name });
        debugger
        setName('');
    } catch (err) {
        debugger
        console.error('Error adding document: ', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddData;

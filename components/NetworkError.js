/* eslint-disable @next/next/no-img-element */
import React from 'react';
import error from '../images/error.png';

export default function NetworkError() {
  return (
    <div>
      <img src={error} alt="error" />
    </div>
  );
}

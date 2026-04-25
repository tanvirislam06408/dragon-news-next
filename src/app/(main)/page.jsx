
import { redirect } from 'next/navigation';
import React from 'react';

const homepage = () => {
  return redirect('/category/01')
};

export default homepage;
import Link from 'next/link';
import React from 'react';

const Pages = () => {
  return (
    <>
      <div className='mb-5'>Page</div>
      <Link href='/posts'>Postingan</Link>
      <br />
      <Link href='/albums'>Album Foto</Link>
    </>
  );
};

export default Pages;

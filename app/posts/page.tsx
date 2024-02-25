import React, { cache } from 'react';
import CardList from '../components/cardList';
import ViewUserButton from '../components/viewUserButton';

const base_url = 'https://jsonplaceholder.typicode.com/posts';

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  // const response = await fetch(base_url, { cache: 'no-store' });
  const response = await fetch(base_url, { next: { revalidate: 60 } });
  const posts: Iposts[] = await response.json();

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <div className='my-4 text-2xl'>Halaman Postingan</div>
      {posts.map(post => {
        return (
          <CardList key={post.id}>
            <p className='mb-2'>{post.id}</p>
            <i className='mb-2'>{post.title}</i>
            <p className='mb-2'>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;

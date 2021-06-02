import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Blog() {
  const [localStorageValue, setLocalStorageValue] = useState(null);
  const user = useSelector((state) => state.posts.user);

  useEffect(() => {
    const item = window.localStorage.getItem('name');

    setLocalStorageValue(item);

    console.log(window.location.href, item);
  }, []);

  return (
    <div>
      <h3>This is our blog</h3>
      <p>
        ⚛️ this value is from redux: <pre>{user}</pre>
      </p>
      <p>
        💾 this value is from localStorage: <pre> {localStorageValue}</pre>
      </p>

      <ul>
        <li>
          <Link href="/post/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/post/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
      <a href="/">Home</a>
      <div>
        <Image src="/blog/static/nextjs.png" alt="Next.js logo" width={200} height={160} />
      </div>
    </div>
  );
}

import Head from 'next/head';
import Homepage from '@/components/soundpaste/homepage';

export const metadata = {
  title: 'KLOYTools | Home',
  description: 'KLOYTools | Home',
};

export default function Homepage2() {
  return (
    <>
      <Head>
        <title>KLOYTools | Home</title>
        <meta name="description" content="KLOYTools | Home" />
      </Head>
      <Homepage />
    </>
  );
}

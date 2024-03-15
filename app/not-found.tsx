import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="background-light850_dark100 flex-center h-screen w-screen flex-col gap-4 px-8">
      <Image
        src="/assets/images/logo-dark.svg"
        width={350}
        height={300}
        alt="logo"
        className="mb-4 hidden dark:block"
      />
      <Image
        src="/assets/images/logo-light.svg"
        width={350}
        height={300}
        alt="logo"
        className="mb-4 block dark:hidden"
      />
      <h2 className="h1-bold mb-4">Page Not Found</h2>
      <p className="paragraph-medium mb-4 text-center md:max-w-[50%]">
        We are sorry, looks like the page you are trying to access does not exist.
      </p>
      <Button className="primary-button min-w-[auto]! px-8" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}

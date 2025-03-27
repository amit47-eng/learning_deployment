"use client"; // For Next.js App Router (if needed)

import { useRouter } from "next/navigation";

export default function MyButton() {
  const router = useRouter();

  const handleClick = () => {
    const targetPage = process.env.NEXT_PUBLIC_TARGET_PAGE_URL;
    if (targetPage) {
      router.push(targetPage);
    } else {
      console.error("Target page URL is not defined in the environment variables.");
    }
  };

  return <button onClick={handleClick}>Go to Target Page</button>;
}
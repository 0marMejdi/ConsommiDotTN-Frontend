import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  const DynamicStreamClient = dynamic(() => import('./Home/StreamClient'), {
    ssr: false,
  })
  return (
    <>
    <DynamicStreamClient></DynamicStreamClient>
    </>
  );
}

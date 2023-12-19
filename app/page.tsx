import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-1/4 text-center">
      <h1>Simple chat</h1>
      <Link className="btn btn-success m-4" href={"/client"}>Client</Link>
    </div>
  );
}

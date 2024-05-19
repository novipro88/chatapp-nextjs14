import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        className="mb-4"
        alt="ChatApp"
      />
      <h1 className="mb-1 text-6xl font-extrabold text-blue-500">
        Chat<span className="text-lime-500">App</span>
      </h1>
      <p className="mb-10">
        Aplikasi obrolan paling keren di negri wakanda😋✨
      </p>
      <Button as={Link} href="/chat">
        Yuk mulai🎉klik ajah
      </Button>
    </div>
  );
}

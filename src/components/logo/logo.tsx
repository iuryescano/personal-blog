import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href='/' title="Initial Page">
      <Image
        src="/logo.svg"
        alt="Logo Website"
        width={116}
        height={32}
      />
    </Link>
  )
}
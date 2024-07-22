import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "@/components/search/GlobalSearch";

export default function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed x-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevForum"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
          Dev <span className="text-primary-500">Forum</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
}

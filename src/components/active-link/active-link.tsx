import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps

const normalizePath = (path: string) => {
  if (!path) {
    return "";
  }

  const cleanPath = path.split("?")[0].split("#")[0];

  if (cleanPath.length > 1 && cleanPath.endsWith("/")) {
    return cleanPath.slice(0, -1);
  }

  return cleanPath;
};

export const ActiveLink = ({ children, href, ...rest}: ActiveLinkProps) => {
  const router = useRouter();
  const currentPath = normalizePath(router.pathname);
  const targetPath = normalizePath(typeof href === "string" ? href : href.pathname ?? "");
  const isCurrentPath = currentPath === targetPath;

  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  )
}
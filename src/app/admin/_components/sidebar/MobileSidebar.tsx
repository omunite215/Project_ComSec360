"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { sidebarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MobileSidebar = () => {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
            <Image src="/logo/logoFull.png" width={100} height={100} alt="logo-img" className="object-contain size-[50%]" />
            <SheetDescription>Admin Dashboard</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-2 text-lg font-medium my-6">
          {sidebarItems.map((navItem) => (
            <Link
              key={navItem.title}
              href={navItem.href}
              className={cn({
                "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary text-muted-foreground transition-all hover:text-primary":
                  true,
                "bg-muted text-primary": navItem.href === currentPath,
              })}
            >
              {navItem.icon}
              {navItem.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

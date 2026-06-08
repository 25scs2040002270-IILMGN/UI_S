import { Link, useLocation } from "wouter";
import { LayoutDashboard, Code2, Sigma, History, Trophy, Award, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { href: "/quiz-arena", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/quiz-arena/coding", label: "Coding Questions", icon: Code2 },
  { href: "/quiz-arena/math", label: "Mathematics", icon: Sigma },
  { href: "/quiz-arena/leaderboard", label: "Rankings", icon: Trophy },
  { href: "/quiz-arena/certificates", label: "Certificates", icon: Award },
];

export function QuizSidebar() {
  const [location] = useLocation();

  const SidebarContent = () => (
    <div className="flex flex-col gap-2 p-4">
      {sidebarLinks.map((link) => {
        const Icon = link.icon;
        const isActive = link.exact
          ? location === link.href
          : location.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
              isActive
                ? "bg-blue-500/10 text-blue-500 shadow-[inset_2px_0_0_0_rgba(59,130,246,1)]"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <Icon className="w-5 h-5" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 border-r border-white/5 bg-background h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
        <SidebarContent />
      </aside>

      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-background border-r border-white/10 p-0">
            <div className="h-16 flex items-center px-6 border-b border-white/5">
              <span className="font-bold text-lg">Arena Menu</span>
            </div>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

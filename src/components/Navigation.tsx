import { FileTextIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", active: location.pathname === "/" },
    {
      label: "Projects",
      path: "/projects",
      active: location.pathname === "/projects",
    },
    {
      label: "About me",
      path: "/about",
      active: location.pathname === "/about",
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20 p-4 md:p-2 relative w-full max-w-full bg-[#f7f7f7] rounded-[32px] md:rounded-[1000px] overflow-hidden border border-solid border-[#efefef]">
      <div className="flex items-center justify-between relative w-full md:w-auto">
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/portrait.png" alt="Kaypee" />
          </Avatar>
          <span className="relative w-fit [font-family:'Rethink_Sans',Helvetica] font-medium text-black text-lg">
            Kaypee
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-start md:items-center gap-4 relative flex-1 md:justify-end`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 relative w-full md:w-auto">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full md:w-auto justify-start md:justify-center p-4 rounded-[1000px] ${
                item.active
                  ? "bg-white border border-solid border-[#efefef]"
                  : "bg-[#f7f7f7]"
              }`}
              onClick={() => navigate(item.path)}
            >
              <span
                className={`[font-family:'Rethink_Sans',Helvetica] text-sm ${
                  item.active
                    ? "font-medium text-neutral-950"
                    : "font-normal text-neutral-700"
                }`}
              >
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <Button
          className="flex items-center gap-2 p-4 bg-[#ff6903] rounded-[1000px] w-full md:w-auto justify-center"
          onClick={() => window.open("https://read.cv/kwamefrimpong", "_blank")}
        >
          <FileTextIcon className="w-4 h-4 text-white" />
          <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-sm">
            Readme CV
          </span>
        </Button>
      </div>
    </nav>
  );
};

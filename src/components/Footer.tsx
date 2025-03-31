import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
export const Footer = () => {
  const { toast } = useToast();
  const contactInfo = [
    {
      type: "Email",
      value: "frimpongdarkwakwame@gmail.com",
      icon: "/group.png",
      copyIcon: "/mynaui-copy-1.svg",
    },
    {
      type: "Phone",
      value: "+233 55 458 8483",
      icon: "/fluent-call-16-regular.svg",
      copyIcon: "/mynaui-copy.svg",
    },
  ];

  const socialLinks = [
    {
      icon: "/logos-github-icon.svg",
      alt: "GitHub",
      link: "https://github.com/nanakwame667",
    },
    {
      icon: "/clip-path-group.png",
      alt: "Twitter",
      link: "https://x.com/kwame_piano",
    },
    {
      icon: "/group-1.png",
      alt: "LinkedIn",
      link: "www.linkedin.com/in/kwamedarkwafrimpong",
    },
  ];
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: (
        <div className="flex items-center gap-2">
          <span className="space-x-2">
            <b>{text}</b> has been copied to clipboard
            <img
              src="/smile.svg"
              alt="smile"
              className="w-4 h-4 inline-block "
            />
            !!
          </span>
        </div>
      ),
    });
  };
  return (
    <div className="flex flex-col items-start gap-6 p-4 md:p-6 relative self-stretch w-full bg-neutral-50 rounded-3xl border border-solid border-[#efefef]">
      <h2 className="relative w-fit [font-family:'Rethink_Sans',Helvetica] font-medium text-black text-lg">
        Let us work together and build great solutions
      </h2>

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 relative self-stretch w-full">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-2 relative flex-1 bg-[#fcfcfc] rounded-xl border border-solid border-[#efefef]"
          >
            <div className="relative w-[30px] h-[30px] bg-neutral-900 rounded-[100000px] overflow-hidden">
              {info.type === "Email" ? (
                <div className="relative w-4 h-4 top-[7px] left-[7px]">
                  <img
                    className="absolute w-3.5 h-[13px] top-0.5 left-px"
                    alt="Email icon"
                    src={info.icon}
                  />
                </div>
              ) : (
                <img
                  className="absolute w-4 h-4 top-[7px] left-[7px]"
                  alt="PhoneIcon icon"
                  src={info.icon}
                />
              )}
            </div>

            <div className="flex flex-col items-start justify-center gap-1 relative flex-1 self-stretch">
              <div className="relative w-fit [font-family:'Rethink_Sans',Helvetica] font-semibold text-neutral-950 text-xs">
                {info.type}
              </div>
              <div className="relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-950 text-xs">
                {info.value}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="p-0 [font-family:'Rethink_Sans',Helvetica]"
              onClick={() => handleCopy(info.value)}
            >
              <img className="relative" alt="Copy" src={info.copyIcon} />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-end gap-4 px-0 py-4 relative self-stretch w-full">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="p-0 h-4 w-4"
            onClick={() => window.open(link.link, "_blank")}
          >
            <img className="relative w-4 h-4" alt={link.alt} src={link.icon} />
          </Button>
        ))}
        <div className="relative flex-1 [font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-600 text-sm text-right">
          ©2025&nbsp;&nbsp;kaypee studios
        </div>
      </div>
    </div>
  );
};

import { IconType } from "react-icons";

interface ContactLinkProps {
  href: string;
  icon: IconType;
  text: string;
  color: "blue" | "green" | "red" | "gray"; // You can expand this if needed
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon: Icon,
  text,
  color,
  target,
  rel,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`flex flex-row items-center justify-center w-full
                  px-4 py-2 border rounded-full border-gray-400 text-xl
                  font-bold transition-colors
                  text-${color}-600 hover:text-${color}-800 hover:border-${color}-400`}
    >
      <Icon className="mr-4 fill-current" />
      {text}
    </a>
  );
};

export default ContactLink;

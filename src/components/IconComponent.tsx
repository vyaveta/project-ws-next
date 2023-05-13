import * as Icons from "react-icons/fa";

interface IconComponentProps {
    name: string,
}
export const CustomFaIcon: React.FC<IconComponentProps> = ({ name }) => {
    //@ts-ignore
    const FaIcon = Icons[name];
    if (!FaIcon) return <p>Icon not found!</p>;
  
    return <FaIcon />;
  };
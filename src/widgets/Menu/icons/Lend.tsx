import React from "react";
import Svg , {SvgIcon} from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon style={{ marginRight: "8px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 17.0001H15.333C15.766 17.0001 16.187 16.8601 16.533 16.6001L18.949 14.7881C19.552 14.3361 20.396 14.3961 20.929 14.9291C21.521 15.5211 21.521 16.4801 20.929 17.0711L18.856 19.1441C18.298 19.7021 17.586 20.0831 16.812 20.2381L13.882 20.8241C13.301 20.9401 12.702 20.9261 12.127 20.7821L9.477 20.1201C9.16 20.0401 8.835 20.0001 8.508 20.0001H7" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13 17H14.485C15.322 17 16 16.322 16 15.485V15.182C16 14.487 15.527 13.881 14.853 13.713L12.561 13.14C12.188 13.047 11.806 13 11.422 13C10.495 13 9.588 13.274 8.817 13.789L7 15" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 21H4C3.448 21 3 20.552 3 20V14C3 13.448 3.448 13 4 13H6C6.552 13 7 13.448 7 14V20C7 20.552 6.552 21 6 21Z" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.1687 5.15521C18.2771 6.26352 18.2771 8.06044 17.1687 9.16875C16.0604 10.2771 14.2635 10.2771 13.1552 9.16875C12.0469 8.06044 12.0469 6.26352 13.1552 5.15521C14.2635 4.0469 16.0604 4.0469 17.1687 5.15521Z" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.631 4.375C14.538 3.81 14.28 3.267 13.844 2.831C12.736 1.723 10.939 1.723 9.831 2.831C8.723 3.939 8.723 5.736 9.831 6.844C10.521 7.534 11.477 7.793 12.368 7.624" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>


  );
};
export default Icon;

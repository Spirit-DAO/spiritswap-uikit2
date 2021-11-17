/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../components/Svg";
import Link from "../../components/Link/Link";
import * as IconModule from "../Menu/icons";
import socials from "./config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18rem;
  margin: 0px 0.25em;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 30px;
    justify-content: space-around;
  }
`;
const SocialLinks: React.FC = () => (
  <SocialIcons>
    {socials.map((social) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" }, colorFill: "#6DD784" };
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </SocialIcons>
);

export default React.memo(SocialLinks, () => true);

import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";
import { useEffect } from "react"
import { themeChange } from "theme-change";
import { Search } from "./Search";

const LogoName = ({ name }) => {
  return (
    <div>
      <Heading>
        <PrismicLink href="/">
          <PrismicText field={name} />
        </PrismicLink>
      </Heading>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight primary-content flex items-center">{children}</li>
  );
};

export const Header = ({
  withDivider = false,
  // withProfile = true,
  navigation,
  settings,

}) => {

  const themeValues = [
    "Light",
    "Dark",
  ]


  useEffect(() => {
    themeChange(false)
  });


  return (
    <Bounded as="header">
      <div className="grid grid-cols-1 justify-items-end gap-10">
        <div className="flex w-full justify-between border border-slate-200 p-1 rounded-xl bg-base-200">
          <Search />
          <select className="select select-bordered" data-choose-theme>
              <option value="" >Default</option>
              {themeValues.map((value) => (
                <option key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
              ))}
            </select>
        </div>
        <nav className="flex w-full justify-between">
          <LogoName
            name={settings.data.name}
          />
          <ul className="flex flex-wrap justify-center gap-10">
            <NavItem>
              <PrismicLink href="/">
                <PrismicText field={navigation.data.homepageLabel} />
              </PrismicLink>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  );
};

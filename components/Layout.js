import { Header } from "./Header";
import { Footer } from "./Footer";
// import { Search } from "../components/Search";
export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div className="secondary-content">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      {/* <Search /> */}
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
};

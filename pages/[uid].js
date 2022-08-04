import Head from "next/head";
import { SliceZone, PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";


const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="mx-auto w-full max-w-xl">
        <PrismicLink href="/" tabIndex="-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300 mx-auto">
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                layout="fill"
                className="object-cover"
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
            <div className="grid grid-cols-1 gap-2 text-center py-4">
              {prismicH.isFilled.richText(name) && (
                <Heading>
                  <PrismicLink href="/">
                    <PrismicText field={name} />
                  </PrismicLink>
                </Heading>
              )}
              {prismicH.isFilled.richText(description) && (
                <p className="font-serif text-2xl italic leading-normal tracking-tight primary-content">
                  <PrismicText field={description} />
                </p>
              )}
            </div>
          )}
      </div>
    </div>
  );
};


const Page = ({ page, navigation, settings, withProfile = true }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismicH.asText(page.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      {withProfile && (
          <Profile
            name={settings.data.name}
            description={settings.data.description}
            profilePicture={settings.data.profilePicture}
          />
        )}
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}

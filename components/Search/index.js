import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import { PrismicLink} from "@prismicio/react";

//import CustomSearchBox from "./CustomSearchBox";
//import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

function Hit({ hit }) {
    return (
      <div>
        <h1 className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500 border-b-[1px] pt-5 pb-5">
          <PrismicLink href={`/articles/${hit.slug}`}>
              {hit.title}
          </PrismicLink>
        </h1>
      </div>
    );
  }

export const Search = ({ }) => {
    return (
        <section className="pb-8">
        <div className="mx-auto w-full max-w-xl">      
          <InstantSearch indexName="pilot_one" searchClient={searchClient}>
            <SearchBox
                classNames={{
                root: 'p-3',
                form: 'relative',
                input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
                submitIcon: 'absolute top-0 left-3 bottom-0 w-4 h-10',
                resetIcon: 'absolute top-0 right-3 bottom-0 w-4 h-10 hidden',
                }}
            />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </div>
        </section>
    );
  };




import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';


//import CustomSearchBox from "./CustomSearchBox";
//import CustomHits from "./CustomHits";

const searchClient = algoliasearch('QJCVSZFZ4X', '71550b670439305fc4af697514f69728');

function Hit({ hit }) {
    return (
      <h1>{hit.title}</h1>
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
                submitIcon: 'absolute top-0 right-0 bottom-0 w-6',
                resetIcon: 'absolute top-0 right-0 bottom-0 w-6',
                }}
            />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </div>
        </section>
    );
  };




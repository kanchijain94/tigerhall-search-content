import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import { useQuery, gql } from '@apollo/client';

function Search() {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const CARDS_QUERY = gql`
  query ExampleQuery {
    contentCards(filter: {limit: 20, keywords: "", types: [PODCAST]}) {
    edges {
    ... on Podcast {
    name
    image {
    ...Image
    }
    categories {
    ...Category
    }
    experts {
    ...Expert
    }
    }
    }
    }
   }
   fragment Image on Image {
    uri
   }
   fragment Category on Category {
    name
   }
   fragment Expert on Expert {
    firstName
    lastName
    title
    company
   }
   
`;

const { data, loading, error } = useQuery(CARDS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const filteredCards = data.contentCards.edges.filter(
    data => {
      return (
        data
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredCards={filteredCards} />
        </Scroll>
      );
    }
  }

  return (
    <section className="garamond">
      <div className="white georgia ma0 grow">
        <h2 className="f2">Search Tigerhall Content</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-dark-gray ma3"
          type = "search" 
          placeholder = "Search Content" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
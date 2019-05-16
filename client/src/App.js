import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//componentss
import BookList from './component/BookList';
import AddBook from './component/AddBook';


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div >
        <h1>Testing</h1>
        <BookList />
        <AddBook />
      </div>    
    </ApolloProvider>
  );
}
 
export default App;
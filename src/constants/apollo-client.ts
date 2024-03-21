import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from './urls';

import { onError } from '@apollo/client/link/error';
import { onLogout } from '../utils/logout';
import { excludedRoutes } from './excluded-routes';

const logoutLink = onError((error) => {
  if (error.graphQLErrors?.length && (error.graphQLErrors[0]?.extensions?.originalError as any)?.statusCode === 401) {
    // logout user
    if (!excludedRoutes.includes(window.location.pathname)) {
      onLogout();
    }
  }
});

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),

});

export { client, httpLink, logoutLink };


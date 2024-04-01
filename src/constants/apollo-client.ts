import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from './urls';

import { onError } from '@apollo/client/link/error';
import { onLogout } from '../utils/logout';
import { excludedRoutes } from './excluded-routes';

export const logoutLink = onError((error) => {
  if (error.graphQLErrors?.length && (error.graphQLErrors[0]?.extensions?.originalError as any)?.statusCode === 401) {
    // logout user
    if (!excludedRoutes.includes(window.location.pathname)) {
      onLogout();
    }
  }
});

export const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});




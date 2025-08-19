import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';
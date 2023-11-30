import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://api-sa-east-1.hygraph.com/v2/clpahnqq52o8d01t677bwfsgb/master',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config

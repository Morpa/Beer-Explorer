import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'

import Base from 'templates/Base'
import * as S from 'components/SearchPage/styles'
import BeerList from 'components/BeerList'

import { useSearch } from 'hooks/searchHook'

type SearchPageProps = {
  initialSearch: string
}

const Search = ({ initialSearch }: SearchPageProps) => {
  const { beers, error, query, setQuery, inputRef } = useSearch(initialSearch)

  return (
    <Base>
      <motion.div
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0px)' }}
        exit={{ transform: 'translateY(100%)' }}
      >
        <S.Form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search your favorite beer"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </S.Form>

        {error && (
          <S.ErrorMessage>An error occurred, please try again</S.ErrorMessage>
        )}

        {beers && (
          <>
            <S.ResultsTitle>Results for {query}</S.ResultsTitle>
            <BeerList beers={beers} />
          </>
        )}
      </motion.div>
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context
) => {
  const initialSearch = (context.query.query as string) || ''

  return {
    props: { initialSearch }
  }
}

export default Search

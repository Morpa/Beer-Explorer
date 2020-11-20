import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'

import BeerList from 'components/BeerList'
import Base from 'templates/Base'
import { PaginationLayout, PaginationLink } from 'components/HomePage/styles'
import { useScrollRestoration } from 'hooks/useScrollRestoration'
import { Beer } from 'types/Beer'

import api from 'services/api'

type HomePageProps = {
  beers: Beer[]
  previousPage: number | null
  nextPage: number
}

const HomePage = ({ beers, previousPage, nextPage }: HomePageProps) => {
  const router = useRouter()
  const scrollRestoration = useScrollRestoration(router.asPath)

  return (
    <Base>
      <motion.div
        {...scrollRestoration}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BeerList beers={beers} />

        <PaginationLayout>
          {previousPage && (
            <Link
              href={{ pathname: '/', query: { page: previousPage } }}
              passHref
            >
              <PaginationLink>Previous</PaginationLink>
            </Link>
          )}
          <Link href={{ pathname: '/', query: { page: nextPage } }} passHref>
            <PaginationLink>Next</PaginationLink>
          </Link>
        </PaginationLayout>
      </motion.div>
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  const currentPage = context.query.page ? Number(context.query.page) : 1
  const response = await api.get<Beer[]>(`beers?page=${currentPage}`)

  return {
    props: {
      beers: response.data,
      nextPage: currentPage + 1,
      previousPage: currentPage > 1 ? currentPage - 1 : null
    }
  }
}

export default HomePage

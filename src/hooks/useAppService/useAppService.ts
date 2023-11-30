import { useState } from 'react'
import {
  Report,
  ReportUser,
  useGetUserByEmailLazyQuery,
  useGetWhiteListUserByEmailLazyQuery,
} from '../../graphql/generated/graphql'

interface ReportsProps extends Report {
  user: ReportUser
}

function useAppService() {
  const [reports, setReports] = useState<ReportsProps[]>([])

  const [getWhiteListUserQuery, { loading: getWhiteListUserLoading }] = useGetWhiteListUserByEmailLazyQuery()
  const [getUserByEmailQuery, { loading: getUserByEmailLoading }] = useGetUserByEmailLazyQuery()

  async function getWhiteListUser(email: string) {
    const { data } = await getWhiteListUserQuery({
      variables: {
        email,
      },
    })

    return data
  }

  async function getUserByEmail(email: string) {
    const { data } = await getUserByEmailQuery({
      variables: {
        email,
      },
    })

    return data
  }

  return {
    reports,
    getWhiteListUserLoading,
    getUserByEmailLoading,
    getWhiteListUser,
    getUserByEmail,
    setReports,
  }
}

export { useAppService }

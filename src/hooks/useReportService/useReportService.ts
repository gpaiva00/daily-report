import {
  useCreateReportMutation,
  useDeleteReportMutation,
  useReportsLazyQuery,
  useUpdateReportMutation,
} from '../../graphql/generated/graphql'

function useReportService() {
  const [createReportMutation, { loading: createReportLoading }] = useCreateReportMutation()
  const [getReportsQuery, { loading: getReportsLoading }] = useReportsLazyQuery()
  const [deleteReport, { loading: deleteReportLoading }] = useDeleteReportMutation()
  const [updateReport, { loading: updateReportLoading }] = useUpdateReportMutation()

  return {
    createReportMutation,
    deleteReport,
    getReportsQuery,
    updateReport,
    createReportLoading,
    getReportsLoading,
    deleteReportLoading,
    updateReportLoading,
  }
}

export { useReportService }

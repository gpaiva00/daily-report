import { DocumentData, QuerySnapshot, collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore'
import { db } from '../../services'
import { Report } from '../../types'

interface SubscribeToReportsProps {
  observer: (snapshot: QuerySnapshot<DocumentData>) => void
}

function useReportService() {
  const reportsDocumentName = import.meta.env.VITE_REPORTS_DOCUMENT_NAME as string

  const reportsCollection = collection(db, reportsDocumentName)

  const subscribeToReports = ({ observer }: SubscribeToReportsProps) => {
    const reportsQuery = query(reportsCollection)

    const unsubscribe = onSnapshot(reportsQuery, observer)

    return unsubscribe
  }

  const createReport = async (report: Report) => {
    try {
      await setDoc(doc(db, reportsDocumentName, report.id), report)
    } catch (error) {
      console.error('createList', error)
    }
  }

  return {
    subscribeToReports,
    createReport,
  }
}

export { useReportService }

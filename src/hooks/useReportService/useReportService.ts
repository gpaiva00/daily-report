import { DocumentData, QuerySnapshot, collection, deleteDoc, doc, onSnapshot, query, setDoc } from 'firebase/firestore'
import { db } from '../../services'
import { Report } from '../../types'

interface SubscribeToReportsProps {
  observer: (snapshot: QuerySnapshot<DocumentData>) => void
}

function useReportService() {
  const reportsDocumentName = import.meta.env.VITE_REPORTS_DOCUMENT_NAME as string

  const reportsCollection = collection(db, reportsDocumentName)

  function subscribeToReports({ observer }: SubscribeToReportsProps) {
    const reportsQuery = query(reportsCollection)

    const unsubscribe = onSnapshot(reportsQuery, observer)

    return unsubscribe
  }

  async function createReport(report: Report, userRef: string) {
    try {
      const userDocumentReference = doc(db, userRef)
      await setDoc(doc(db, reportsDocumentName, report.id), {
        ...report,
        userRef: userDocumentReference,
      })
    } catch (error) {
      console.error('createReport', error)
    }
  }

  async function deleteReport(id: string) {
    try {
      await deleteDoc(doc(db, reportsDocumentName, id))
    } catch (error) {
      console.error('deleteReport', error)
    }
  }

  return {
    subscribeToReports,
    deleteReport,
    createReport,
  }
}

export { useReportService }

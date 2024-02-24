import {
  DocumentData,
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

import { db } from '@/shared/services'

import { Report } from '@/types'

interface SubscribeToReportsProps {
  observer: (snapshot: QuerySnapshot<DocumentData>) => void
  createdAtTimestamp: number
}

function useReportService() {
  const reportsDocumentName = import.meta.env.VITE_REPORTS_DOCUMENT_NAME

  const reportsCollection = collection(db, reportsDocumentName)

  function subscribeToReports({ observer, createdAtTimestamp }: SubscribeToReportsProps) {
    const reportsQuery = query(reportsCollection, where('createdAtWithoutHours', '==', createdAtTimestamp))

    const unsubscribe = onSnapshot(reportsQuery, observer)

    return unsubscribe
  }

  async function createReport(report: Report) {
    try {
      await setDoc(doc(db, reportsDocumentName, report.id), report)
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
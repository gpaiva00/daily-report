/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_KEY: string
  readonly VITE_AUTH_DOMAIN: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_STORAGE_BUCKET: string
  readonly VITE_MESSAGING_SENDER_ID: number
  readonly VITE_APP_ID: string
  readonly VITE_MEASUREMENT_ID: string
  readonly VITE_USERS_DOCUMENT_NAME: string
  readonly VITE_REPORTS_DOCUMENT_NAME: string
  readonly VITE_TEAMS_DOCUMENT_NAME: string
  readonly VITE_USER_TEAM_DOCUMENT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

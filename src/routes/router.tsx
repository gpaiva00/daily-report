import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { HOME_ROUTE, PRESENTATION_ROUTE, PROFILE_ROUTE, SIGN_IN_ROUTE } from '../constants'

import { Presentation, Profile, SignIn } from '../pages'
import Error from '../pages/Error'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../shared'
import { DefaultProvider } from './DefaultProvider'
import { PrivateRouter } from './PrivateRouter'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<DefaultProvider />}
      errorElement={<Error />}
    >
      <Route
        path="*"
        element={<Error />}
      />
      <Route
        path={SIGN_IN_ROUTE}
        element={<SignIn />}
        errorElement={<Error />}
      />
      <Route
        index
        path={PRESENTATION_ROUTE}
        element={<Presentation />}
        errorElement={<Error />}
      />
      <Route element={<DefaultLayout />}>
        <Route element={<PrivateRouter />}>
          <Route
            index
            path={HOME_ROUTE}
            element={<Home />}
            errorElement={<Error />}
          />
          <Route
            path={PROFILE_ROUTE}
            element={<Profile />}
            errorElement={<Error />}
          />
        </Route>
      </Route>
    </Route>
  )
)

function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes

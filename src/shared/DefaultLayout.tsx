import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <main className="flex h-screen w-full flex-col">
      {/* <div className="flex h-screen flex-1 items-center justify-center"> */}
      <Outlet />
      {/* </div> */}
    </main>
  )
}

export default DefaultLayout

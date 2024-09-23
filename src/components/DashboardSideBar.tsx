import React from 'react'
import GTechIcon from "../../public/icons/dashboard/Gtechicon.svg"
import StoreDashboard from "../../public/icons/dashboard/storeDashboard.svg"
import UserAccount from "../../public/icons/dashboard/userAccountDashboard.svg"
import Link from 'next/link'
const DashboardSideBar = () => {
  return (
    <div className='bg-headerInfoBgColor flex flex-col p-2 gap-6 w-[5%]'>
      <Link href={""}>
        <GTechIcon className="mb-2" />
      </Link>
      <Link href={""}><StoreDashboard /></Link>
      <Link href={""}><UserAccount /></Link>
    </div>
  )
}

export default DashboardSideBar
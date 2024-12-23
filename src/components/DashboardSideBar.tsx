import React from 'react'
import GTechIcon from "../../public/icons/dashboard/Gtechicon.svg"
// import StoreDashboard from "../../public/icons/dashboard/storeDashboard.svg"
// import UserAccount from "../../public/icons/dashboard/userAccountDashboard.svg"
import Link from 'next/link'
const DashboardSideBar = () => {
  return (
    <div className='bg-headerInfoBgColor flex flex-col h-[100%] gap-6 w-[15vw] sm:w-[10%] md:w-[5vw]'>
      <Link className="w-full h-[10%]  mx-auto  flex justify-center mt-5" href={"/admin/blogs"}>
        <GTechIcon className="h-[95%] mx-auto w-[90%]" />
      </Link>

      {/* <Link href={""} className="w-full  md:h-[10%]  mx-auto flex justify-center" >
        <StoreDashboard className="h-[95%] mx-auto w-[90%]" />
      </Link>
      <Link className="w-full  md:h-[10%]  mx-auto flex justify-center" href={""} >
        <UserAccount className="h-[95%] mx-auto w-[90%]" />
      </Link> */}
    </div>
  )
}

export default DashboardSideBar
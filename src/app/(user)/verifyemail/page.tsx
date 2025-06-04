import { Suspense } from "react"
import Verify from "./Verify"


function Page() {
    return(
      <>
      <Suspense fallback={<div>loading...</div>}>
        <Verify />
      </Suspense>
      </>
    )
}
export default Page

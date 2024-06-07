"use client"
import { useRouter } from "next/navigation"

const NotFoundPageGlobal = () => {
  const router = useRouter()
    const goToRootHandler = ()=>{
    router.push("/")    
    }
    return (
    <div>
<h1>Page Not Found</h1> 
<button onClick={goToRootHandler}>Go to Home</button>
       </div>
  )
}
export default NotFoundPageGlobal
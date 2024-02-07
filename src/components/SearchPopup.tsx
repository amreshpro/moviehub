import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";


export default function SearchPopup() {
    const router = useRouter();
    const [searchText, setSearchText] = useState<string | ''>('')
  const onSearchHandler = ()=>{
  console.log(searchText)
  router.push(`/search/${searchText}`)
  }
  
    return (
    <div className=" absolute w-screen flex  justify-center px-2 py-2">
        <input type="text" value={searchText} onKeyUp={onSearchHandler}  onChange={(e)=>setSearchText(e.target.value)} placeholder="Search your movie... " className="outline-none px-2 py-1 text-xl" />
    <Link href={`/search/${searchText}`}  onKeyDown={onSearchHandler} className="text-xl flex items-center bg-red-500 text-white  px-2 "><IoSearchOutline/></Link>
    </div>
  )
}
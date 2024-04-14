"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animation"

interface Props{
    href: string
    label: string
}

const TransitionLink = ({href,label}: Props) =>{
    const router = useRouter()
    const pathname = usePathname()

    const handClick =() => {
        if(pathname != href){
            animatePageOut(href, router)
        }
    }

    return(
        <button className="text-xl text-neutral-980 hover:text-neutral-700"
        onClick={handClick}
        >
            {label}
        </button>
    )
}

export default TransitionLink
 
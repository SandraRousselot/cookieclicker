import Image from "next/image"
import cookie from "@/images/5473473.png"

interface Props{
    totalCookies: number,
    onCookieClick: () => void,
    cps: number
}

export const CookieZone =({totalCookies = 0, onCookieClick, cps = 0}:Props) => {

    return(
        <div className="h-full w-full bg-purple-700 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold">{cps} cookies par seconde</p>
        <p className="text-3xl font-bold">Total cookies : {totalCookies.toFixed(0)}</p>
            <Image onClick={() => onCookieClick()} src={cookie} alt="Big Cookie" className="cursor-pointer h-60 hover:h-64 w-60 hover:w-64 ease-in-out duration-300" />
        </div>
    )
}
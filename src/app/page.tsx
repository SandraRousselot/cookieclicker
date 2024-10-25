"use client"
import { CookieZone } from "@/components/CookieZone";
import { ShopItem } from "@/components/ShopItem";
import { useEffect, useMemo, useState } from "react";

export interface ShopItemType{
  id: number,
  image_url: string,
  label: string,
  price: number,
  cps: number,
  total: number
}

const defaultShopItems : ShopItemType[] = [
      {id: 1, label: "Mamie", image_url:"https://brasserie-heritage.be/wp-content/uploads/2020/07/mamy.png", price: 10, cps:2, total:0},
      {id: 2, label: "Super Mamie", image_url:"https://image.spreadshirtmedia.net/image-server/v1/designs/183123386,width=178,height=178.png", price: 100, cps: 20, total:0}
]

export default function Home() {

  const [cookies, setCookies] = useState<number>(0)
  const [purchasedItems, setPurchasedItems] = useState(defaultShopItems)
  const[cookiesPerSecond, setCookiesPerSecond] = useState(0)

  const handlePurchasedItem = (item: ShopItemType) => {
    setCookies(cookies - item.price)

    let actualItems = [...purchasedItems]
    const itemIndex = actualItems.findIndex(o => o.id == item.id)

    actualItems[itemIndex].total++
    setPurchasedItems([...actualItems])
    setCookiesPerSecond(cookiesPerSecond + item.cps)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(prevCookies => prevCookies + (cookiesPerSecond / 100))
    }, 10)
    return () => {clearInterval(interval)}
  }, [cookiesPerSecond])

  return (
    <div className="h-screen w-screen flex">
        <div className="left w-1/4 bg-pink-500">
          <CookieZone totalCookies={cookies}cps={cookiesPerSecond}onCookieClick={()=> setCookies(cookies+1) }cookiesPerSecond={30} /> 
        </div>
        <div className="center flex-1 bg-purple-500"></div>
        <div className="right w-1/4 bg-orange-500 flex flex-col gap-3 p-2">
        {purchasedItems.map(item =>
          <ShopItem 
          item={item}
          totalCookies={cookies}
          key={item.id}
          onClick={()=> {handlePurchasedItem(item)}} />
          )}
        </div>
    </div>
  );
}

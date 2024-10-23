"use client"
import { CookieZone } from "@/components/CookieZone";
import { ShopItem } from "@/components/ShopItem";
import { useMemo, useState } from "react";

export interface ShopItemType{
  id: number,
  image_url: string,
  label: string,
  price: number,
  cps:number
}

export default function Home() {

  const [cookies, setCookies] = useState<number>(0)

  const shopItems = useMemo<ShopItemType[]>(() => {
    return [
      {id: 1, label: "Mamy", image_url:"https://brasserie-heritage.be/wp-content/uploads/2020/07/mamy.png", price: 100, cps:10},
      {id: 2, label: "Super Mamy", image_url:"https://image.spreadshirtmedia.net/image-server/v1/designs/183123386,width=178,height=178.png", price: 1000, cps: 100}
    ]
  },[])

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4 bg-pink-500"><CookieZone totalCookies={cookies} onCookieClick={() => { setCookies(cookies + 1)}}/></div>
      <div className="center flex-1 bg-purple-500"></div>
      <div className="right w-1/4 bg-orange-500">
        {shopItems.map(item =>
          <ShopItem item={item} key={item.id} onClick={() => { setCookies(cookies - item.price)}} />
        )}
      </div>
    </div>
  );
}

"use client"

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription
} from "@/components/ui/dialog"
import React from "react";
import Basket from "@/components/Basket";
function BasketInterception() {

  const router = useRouter();

  function onDismiss(){
    router.back();
  }

  return (
   <Dialog open
      onOpenChange={(isOpen) => {
        if (!isOpen){
          onDismiss();
        }
      }}

   >
    <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
      <DialogHeader>
        <DialogTitle>Basket</DialogTitle>
        <DialogDescription>
          <p>Contents of your basket</p> 
        </DialogDescription>
      </DialogHeader>

      <Basket />
    </DialogContent>
   </Dialog>
  )
}

export default BasketInterception;

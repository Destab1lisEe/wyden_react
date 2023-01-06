import { MouseEventHandler } from "react";

interface ModalProps{
  children: React.ReactNode,
  title: string,
  click: MouseEventHandler,
}

export function Modal({ children, title, click }: ModalProps){
  return(
    <>
      <div className="absolute bg-textColor/50 top-0 right-0 left-0 bottom-0 w-full h-full" onClick={ click }>      
      </div>
      <div className="max-w-[500px] p-[20px] rounded-[10px] w-full bg-white fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <h3 className="font-bold text-xl">{ title }</h3>
          { children } 
      </div> 
    </>
  )
}
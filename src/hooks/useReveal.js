import { useLayoutEffect,useRef } from 'react'
import { gsap } from '../utils/gsap'
export default function useReveal(){
 const root=useRef(null)
 useLayoutEffect(()=>{
  const mm=gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const ctx=gsap.context(()=>{
    root.current.querySelectorAll('[data-reveal]').forEach((element,index)=>{
     gsap.from(element,{opacity:0,y:25,duration:.6,delay:Math.min(index,3)*.06,ease:'power2.out',scrollTrigger:{trigger:element,start:'top 94%',once:true}})
    })
   },root)
   return ()=>ctx.revert()
  })
  return ()=>mm.revert()
 },[])
 return root
}

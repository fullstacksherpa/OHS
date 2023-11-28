import { useEffect } from "react";

useEffect(()=>{
    const handleScroll = ()=>{
        const scrollTop=window.scrollY;
        if (scrollTop>100){
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    };

    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)

},[]);

className=`${
    scrolled ? "bg-primary" : "bg-transparent"
  }`
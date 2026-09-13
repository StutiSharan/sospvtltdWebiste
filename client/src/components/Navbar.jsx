import {Link} from "react-router-dom"
import {useState,useRef,useEffect} from "react"
import {HiMenu,HiX} from "react-icons/hi"
import {FiDownload,FiYoutube} from "react-icons/fi"
import logo from "../assets/sos-logo.png"

function Navbar(){

const[hoverOpen,setHoverOpen]=useState(false)
const[clickOpen,setClickOpen]=useState(false)
const[mobileOpen,setMobileOpen]=useState(false)
const[mobileServiceOpen,setMobileServiceOpen]=useState(false)
const[appMenuOpen,setAppMenuOpen]=useState(false)
const dropdownRef=useRef(null)

const isOpen=hoverOpen||clickOpen
const youtubeLink="https://youtube.com/shorts/Cd5EbVAHnQM?si=0L7U3wcRSiQRnMnN"
useEffect(()=>{
function handleClickOutside(e){
if(dropdownRef.current&&!dropdownRef.current.contains(e.target)){
setClickOpen(false)
}
}
document.addEventListener("mousedown",handleClickOutside)
return()=>document.removeEventListener("mousedown",handleClickOutside)
},[])

return(

<nav className="bg-white shadow sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

{/* LOGO */}

<div className="flex items-center gap-2">

<img src={logo} className="w-11 md:w-14"/>

<h1 className="font-semibold text-[#1d398d] text-sm md:hidden">
SOS Pvt Ltd
</h1>

<h1 className="font-semibold text-[#1d398d] whitespace-nowrap hidden md:block">
Salvation Outsourcing Solution Pvt Ltd
</h1>

</div>

{/* DESKTOP MENU */}

<ul className="hidden md:flex gap-8 text-gray-700 font-medium">

<li><Link to="/">HOME</Link></li>

<li><Link to="/about">ABOUT</Link></li>

{/* SERVICES */}

<li
ref={dropdownRef}
className="relative"
onMouseEnter={()=>setHoverOpen(true)}
onMouseLeave={()=>setHoverOpen(false)}
>

<span
className="cursor-pointer"
onClick={()=>setClickOpen(!clickOpen)}
>
SERVICES ▾
</span>

{isOpen&&(

<div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg py-2">

<Link to="/services/manpower" className="block px-4 py-2 hover:bg-blue-50">
Man Power Services
</Link>

<Link to="/services/inspection" className="block px-4 py-2 hover:bg-blue-50">
Third Party Inspection
</Link>

<Link to="/services/payroll" className="block px-4 py-2 hover:bg-blue-50">
Payroll Management
</Link>

</div>

)}

</li>

<li><Link to="/jobs">JOBS</Link></li>

<li><Link to="/contact">CONTACT</Link></li>
<li>
    <Link
  to="/privacy-policy"
  className="hover:text-[#1d398d]"
>
  PRIVACY POLICY
</Link>
</li>
</ul>

{/* DESKTOP BUTTON */}
{/* 
<Link
to="/jobs"
className="hidden md:block bg-[#1d398d] text-white px-5 py-2 rounded-lg hover:bg-[#142a66]"
>
Apply Now →
</Link> */}
<div className="hidden md:block relative">

<button
  onClick={()=>setAppMenuOpen(!appMenuOpen)}
  className="flex items-center gap-2 bg-[#1d398d] text-white px-5 py-2 rounded-lg hover:bg-[#142a66]"
>
  <FiDownload className="text-lg" />
  Salvation App
</button>

{appMenuOpen && (

<div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">

<a
  href={youtubeLink}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50"
>
  <FiYoutube className="text-red-600 text-lg" />
  Watch Video
</a>

<a
  href="/salvation_app.apk"
  download="Salvation-App.apk"
  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50"
>
  <FiDownload className="text-[#1d398d] text-lg" />
  Download App
</a>

</div>

)}

</div>
{/* HAMBURGER */}

<button
className="md:hidden text-3xl text-[#1d398d]"
onClick={()=>setMobileOpen(!mobileOpen)}
>
{mobileOpen?<HiX/>:<HiMenu/>}
</button>

</div>


{/* MOBILE MENU */}

{mobileOpen&&(

<div className="md:hidden bg-white border-t shadow-inner">

<ul className="flex flex-col items-center text-center gap-5 py-6 font-semibold text-gray-700">

<li>
<Link
to="/"
onClick={()=>setMobileOpen(false)}
className="hover:text-[#1d398d]"
>
HOME
</Link>
</li>

<li>
<Link
to="/about"
onClick={()=>setMobileOpen(false)}
className="hover:text-[#1d398d]"
>
ABOUT
</Link>
</li>


{/* SERVICES MOBILE */}

<li className="w-full">

<button
className="flex justify-center items-center gap-2 w-full"
onClick={()=>setMobileServiceOpen(!mobileServiceOpen)}
>
SERVICES
<span className="text-lg">{mobileServiceOpen?"−":"+"}</span>
</button>

{mobileServiceOpen&&(

<div className="mt-3 flex flex-col gap-3 text-sm text-gray-600">

<Link
to="/services/manpower"
onClick={()=>setMobileOpen(false)}
>
Man Power Services
</Link>

<Link
to="/services/inspection"
onClick={()=>setMobileOpen(false)}
>
Third Party Inspection
</Link>

<Link
to="/services/payroll"
onClick={()=>setMobileOpen(false)}
>
Payroll Management
</Link>

</div>

)}

</li>

<li>
<Link
to="/jobs"
onClick={()=>setMobileOpen(false)}
className="hover:text-[#1d398d]"
>
JOBS
</Link>
</li>

<li>
<Link
to="/contact"
onClick={()=>setMobileOpen(false)}
className="hover:text-[#1d398d]"
>
CONTACT
</Link>
</li>

<li>
    <Link
  to="/privacy-policy"
  onClick={()=>setMobileOpen(false)}
  className="hover:text-[#1d398d]"
>
  PRIVACY POLICY
</Link>
</li>

<li className="w-full px-8">

<button
  onClick={()=>setAppMenuOpen(!appMenuOpen)}
  className="w-full flex items-center justify-center gap-2 bg-[#1d398d] text-white py-2 rounded-lg hover:bg-[#142a66]"
>
  <FiDownload className="text-lg" />
  Salvation App
</button>

{appMenuOpen && (

<div className="mt-2 bg-white rounded-lg shadow-md border overflow-hidden">

<a
  href={youtubeLink}
  target="_blank"
  rel="noopener noreferrer"
  onClick={()=>setMobileOpen(false)}
  className="flex items-center justify-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50"
>
  <FiYoutube className="text-red-600 text-lg" />
  Watch Video
</a>

<a
  href="/salvation_app.apk"
  download="Salvation-App.apk"
  onClick={()=>setMobileOpen(false)}
  className="flex items-center justify-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50"
>
  <FiDownload className="text-[#1d398d] text-lg" />
  Download App
</a>

</div>

)}

</li>

</ul>

</div>

)}

</nav>

)

}

export default Navbar
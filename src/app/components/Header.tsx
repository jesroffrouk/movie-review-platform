'use client'
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { CgProfile } from "react-icons/cg";

export default function Header(){
    const user = useAppSelector((state) => state.Auth.value)
    return (
      <>
      <div className="navbar shadow-sm relative z-10 bg-transparent">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><Link href="/">Home</Link></li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li><Link href='/moviezone'>Search</Link></li>
          <li><Link href="/find">Find</Link></li>
        </ul>
      </div>
      <button className="btn btn-ghost text-xl"><Link href="/" >Mzone</Link></button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link href='/'>Home</Link></li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li><Link href='/moviezone'>Search</Link></li>
        <li><Link href='/find'>Find</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      <div className="btn">
        <Link href={'/profile'}>{user.username == '' ? "login":<CgProfile />}</Link>
      </div>
    </div>
  </div>
      </>
    )
  }
import React from 'react'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <div>
      <Link href="/auth">
          <div className="w-full flex justify-center items-center mt-6">
            <button className="text-white text-xl w-[335px] bg-[#004CFF] rounded-md py-4 flex items-center justify-center hover:bg-[#003bcc] transition duration-300 ease-in-out group">
              Let&apos;s Get Started
              <span className="ml-2 transform transition-transform duration-300 ease-in-out  group-hover:translate-x-1">
                ➔
              </span>
            </button>
          </div>
        </Link>
    </div>
  )
}

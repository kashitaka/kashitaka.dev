"use client"
import { useState, useRef, useEffect } from "react"
import { IoShareOutline } from "react-icons/io5"
import { IoIosLink } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { PROFILE } from "@/lib/constants"

export default function ShareDropdown({ title }: { title: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const url = typeof window !== "undefined" ? window.location.href : ""
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const handleCopy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    setOpen(false)
  }

  const handleShareX = () => {
    const tweetText = title ? `${title} | @${PROFILE.xid} ${url}` : url
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`)
    setOpen(false)
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="
          w-10 h-10 flex items-center justify-center rounded-full
          border border-gray-300 dark:border-gray-600
          hover:bg-gray-200 dark:hover:bg-gray-700
          transition text-2xl shadow dark:text-gray-100
        "
        onClick={() => setOpen((v) => !v)}
        aria-label="Share"
        type="button"
      >
        <IoShareOutline className="text-xl" />
      </button>
      {open && (
        <div className="absolute z-10 mt-2 right-0 bg-white border border-gray-200 rounded shadow-lg w-40 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
          <button
            className="flex items-center w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
            onClick={handleCopy}
            type="button"
          >
            <IoIosLink className="mr-2" /> URLをコピー
          </button>
          <button
            className="flex items-center w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
            onClick={handleShareX}
            type="button"
          >
            <FaXTwitter className="mr-2" /> Xでシェア
          </button>
        </div>
      )}
      {copied && (
        <div className="absolute right-4 top-14 bg-gray-800 text-white text-xs rounded px-3 py-1 shadow-lg dark:bg-gray-700 animate-fade-in-out pointer-events-none whitespace-nowrap">
          コピーしました
        </div>
      )}
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CssDisplayProps {
  css: string
  onChange: (css: string) => void
  isCorrect: boolean
}

export default function CssDisplay({ css, onChange, isCorrect }: CssDisplayProps) {
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">CSS</span>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-500" />}
          </button>
        </div>
      </div>

      <div className="p-4">
        <textarea
          value={css}
          onChange={handleChange}
          className={`w-full h-40 p-3 font-mono text-sm border rounded-md focus:outline-none focus:ring-2 ${
            isCorrect ? "border-green-300 focus:ring-green-300" : "border-gray-300 focus:ring-[#00FFC5]"
          }`}
          spellCheck="false"
        />

        {isCorrect && (
          <div className="mt-3 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
            <Check size={18} className="mr-2" />
            <span>Perfect! Your CSS matches the target layout.</span>
          </div>
        )}
      </div>
    </div>
  )
}

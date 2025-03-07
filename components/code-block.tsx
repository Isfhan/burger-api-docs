"use client"

import { useState, useEffect } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  language: string
  code: string
  className?: string
}

export default function CodeBlock({ language, code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  // Map language names to what syntax highlighter expects
  const languageMap: Record<string, string> = {
    ts: "typescript",
    js: "javascript",
    bash: "bash",
    sh: "bash",
    text: "text",
  }

  const syntaxLanguage = languageMap[language] || language

  return (
    <div className={cn("relative rounded-md overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted-foreground/10">
        <span className="text-xs font-medium">{language}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={syntaxLanguage}
          style={a11yDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            borderRadius: 0,
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}


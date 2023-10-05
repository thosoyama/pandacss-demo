import React from "react"

import { cva } from "@/styled-system/css"

type Button3Props = React.ComponentPropsWithRef<"button"> & {
  color: "primary" | "secondary"
  size?: "lg" | "sm"
}

export function Button3(props: Button3Props) {
  const { color, size, ...buttonProps } = props
  return <button {...buttonProps} type={buttonProps.type} className={button({ color, size })} />
}

export const button = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    rounded: "md",
    borderWidth: "1px",
    padding: "5px",
    whiteSpace: "nowrap",

    // 疑似クラス
    _hover: {
      bg: "red",
      color: "white",
      cursor: "pointer",
    },
    _active: {
      bg: "red.500",
    },

    // 疑似要素
    _before: { content: '"👉"' },
    _after: { content: '"👈"' },

    // クエリ
    width: { base: "100%", sm: "500px" },
    fontSize: { base: "xl", sm: "md" },
  },
  // Recipes
  variants: {
    color: {
      primary: { bg: "primary", color: "black" },
      secondary: { bg: "secondary", color: "black" },
    },
    size: {
      lg: { fontSize: "24px", padding: "8px" },
      sm: { fontSize: "12px", padding: "4px" },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      size: "sm",
      css: {
        border: "2px solid blue",
      },
    },
    {
      color: "secondary",
      size: "lg",
      css: {
        border: "2px solid blue",
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
})

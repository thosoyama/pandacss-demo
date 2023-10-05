import React from "react"
import { css } from "@/styled-system/css"

/**
 * Button
 */
export function Button(props: React.ComponentPropsWithRef<"button">) {
  return <button {...props} type={props.type} className={styles.button} />
}

export const styles = {
  button: css({
    rounded: "md",
    borderWidth: "1px",
    padding: "5px",
    width: "500px",
    whiteSpace: "nowrap",
    bg: "white",

    // 疑似クラス
    _hover: {
      bg: "red.700",
      color: "white",
      cursor: "pointer",
    },
    _active: {
      bg: "red.500",
    },
    _disabled: {
      bg: "gray",
      color: "gray.300",
      pointerEvents: "none",
      // ネスト可能
      _hover: {
        bg: "gray",
        color: "gray.200",
        cursor: "default",
      },
    },

    // 疑似要素
    _before: { content: '"👉"' },
    _after: { content: '"👈"' },

    // クエリ
    "@media (max-width: 640px)": {
      width: "100%",
      fontSize: "xl",
    },
    "@supports (display: flex)": {
      display: "flex",
      justifyContent: "space-between",
    },
  }),
}

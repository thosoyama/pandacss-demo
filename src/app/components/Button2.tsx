import React from "react"
import { css } from "@/styled-system/css"

/**
 * Button
 */
export function Button2(props: React.ComponentPropsWithRef<"button">) {
  return <button {...props} type={props.type} className={styles.button} />
}

export const styles = {
  button: css({
    display: "flex",
    justifyContent: "space-between",
    rounded: "md",
    borderWidth: "1px",
    padding: "5px",
    whiteSpace: "nowrap",
    _hover: {
      bg: "red.700",
      color: "white",
      cursor: "pointer",
    },
    _active: {
      bg: "red.500",
    },
    _before: { content: '"👉"' },
    _after: { content: '"👈"' },
    width: { base: "100%", sm: "500px" },
    fontSize: { base: "xl", sm: "md" },
  }),
}

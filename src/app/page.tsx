import { flex } from "@/styled-system/patterns"
import { Button } from "./components/Button"
import { Button2 } from "./components/Button2"
import { Button3 } from "./components/Button3"

export default function Home() {
  return (
    <main>
      <Button type="button">Panda CSS</Button>
      <Button type="button" disabled>
        Panda CSS
      </Button>
      <Button2 type="button">Panda CSS</Button2>

      <div className={styles.buttonWrapper}>
        <Button3 type="button" color="primary">
          Panda CSS
        </Button3>
        <Button3 type="button" color="secondary" size="lg">
          Panda CSS
        </Button3>
      </div>
    </main>
  )
}

const styles = {
  buttonWrapper: flex({
    justify: "space-around",
    align: "center",
    wrap: "wrap",
    marginTop: "5",
  }),
}

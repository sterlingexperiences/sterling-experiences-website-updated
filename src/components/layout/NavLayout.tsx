import React from "react"

type Props = {
  children: React.ReactNode
  bg: string
}

const styles = {
  parentContainer:
    "w-full h-full overflow-x-hidden md:overflow-x-auto transition-all duration-300 ease-in-out",
  container: "2xl:container 2xl:mx-auto",
  chiefCenter:
    "w-full px-4 md:px-6 2xl:px-0 mx-auto overflow-x-hidden overflow-y-hidden",
}

function NavLayout({ children, bg }: Props) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={styles.parentContainer}
    >
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  )
}

export { NavLayout }

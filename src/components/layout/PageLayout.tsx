import React from "react"

type Props = {
  children: React.ReactNode
}

const styles = {
  parentContainer:
    "w-full h-full overflow-x-hidden md:overflow-x-auto overflow-y-hidden",
  container: "2xl:container 2xl:mx-auto",
  chiefCenter:
    "max-w-[1300px] w-full px-4 md:px-6 2xl:px-0 mx-auto overflow-x-visible overflow-y-visible",
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  )
}

export { PageLayout }

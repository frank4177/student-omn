import styles from "./loaders.module.css"

interface ISpinnerProps{
  className?: string
}

const Spinner = ({className} :ISpinnerProps) => {
  return (
    <span className={`${className} ${styles.spinner}`}></span>
  )
}

export default Spinner
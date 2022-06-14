import styles from '../styles/Home.module.css'
import classNames from 'classNames/bind'

const cs = classNames.bind(styles)

const Home = () => {
  return (
    <div className={cs('title')}>Fucking Lotto</div>
  )
}

export default Home
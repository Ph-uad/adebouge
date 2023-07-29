import classes from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.nav__container} flex`}>
        <a href="####" className='nav__link'>Adebouge</a>

        <ul className="list flex">
          <li className="item">About</li>
          <li className="item">About</li>
          <li className="item">About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
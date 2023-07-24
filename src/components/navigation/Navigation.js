import classes from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav>
      <div className={`${classes.nav__container} flex`}>
        <a href="####" className='nav__link'>Logo</a>

        <ul className="list flex">
          <li className="list__item">About</li>
          <li className="list__item">About</li>
          <li className="list__item">About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
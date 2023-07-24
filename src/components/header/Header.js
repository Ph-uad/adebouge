import classes from './header.module.scss';

const Header = () => {

    return (
        <header className={ classes.header }>
            <div className="container">
                <h1>Build with Adebouge</h1>
                <h3>with us, build optimized and secured business </h3>
            </div>
        </header>
    )
}

export default Header
import classes from './header.module.scss';

const Header = () => {

    return (
        <header className={ classes.header }>
            <div className="container">
                <h1>Adebouge International</h1>
                <h3>Creating innovavative opportunity window for emerging communities</h3>
            </div>
        </header>
    )
}

export default Header
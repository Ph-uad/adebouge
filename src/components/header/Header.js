import classes from './header.module.scss';

const Header = () => {

    return (
        <header className={ classes.header }>
            <div className="container text-center">
                <h1>Adebouge International</h1>
                <h3>A solution platform for talents, business and commuinities</h3>
            </div>
        </header>
    )
}

export default Header
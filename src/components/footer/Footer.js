import classes from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={ classes.footer }>
            <div className={`${classes.footer__topSection} container flex`}>
                <h2 className="heading-secondary">
                     With <br />
                    Adebouge International
                </h2>

                <section>
                    <h3>Social</h3>
                    <ul className='flex'>
                        <li className='item'>linkedIn</li>
                        <li className='item'>Insatgram</li>
                        <li className='item'>Twitter</li>
                    </ul>
                </section>
       
            </div>

            <div className={ `${classes.footer__footSection} container` }>
                <h3>Adebouge International</h3>
            </div>

        </footer>
    )
}

export default Footer
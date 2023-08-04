import classes from './form.module.scss'

const Form = () => {
    return (
        <section className={ classes.form }>
            <form action="" className=" ">
                <div className={ `${classes.form__container}` }>
                    <div className={ classes.form__control }>
                        <input autoComplete='true' type="text" name='name' placeholder='First and Last Name' id='name' />
                        <label htmlFor="name">Names</label>
                    </div>
                    <div className={ classes.form__control }>
                        <input autoComplete='true' type="text" placeholder='Company Name' name='comapny' id='comapny' />
                        <label htmlFor="comapny">Comapny's Name</label>
                    </div>
                    <div className={ classes.form__control }>
                        <input autoComplete='true' type="email" placeholder='johndoe@gmail.com' name='email' id='email' />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={ classes.form__control }>
                        <textarea name="message" placeholder='Send us a message' id="message" cols="30" rows="10"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>

                    {/* <div className={ classes.form__control }>
                        <input type="radio" name="join" id="join" />
                        <label htmlFor="join">Sign Up</label>
                    </div>
                    <div className={ classes.form__control }>
                        <input type="radio" name="join" id="joins" />
                        <label htmlFor="joins">Email</label>
                    </div> */}

                    <button type="submit" className={`button ${classes.button}`}>Join Innitiative</button>
                </div>
            </form>
        </section>
    )
}

export default Form
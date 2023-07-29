import classes from './form.module.scss'

const Form = () => {
  return (
    <form action="" className="">
        <div className={`container ${classes.form__container}`}>
            <div className="form-control half">
                <input autoComplete type="text" name='name' placeholder='First and Last Name' id='name'/>
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-control half">
                <input autoComplete type="text" placeholder='Company Name' name='comapny' id='comapny'/>
                <label htmlFor="comapny">Comapny Name</label>
            </div>
            <div className="form-control">
                <input autoComplete type="email" placeholder='johndoe@gmail.com' name='email' id='email'/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-control">
             <select name="" id="">
                <option value="Social ">Social</option>
                <option value="Data ">Data</option>
             </select>
            </div>
            <div className="form-control">
                <textarea name="message" placeholder='Send us a message' id="message" cols="30" rows="10"></textarea>
                <label htmlFor="message">Message</label>
            </div>
        </div>
    </form>
  )
}

export default Form
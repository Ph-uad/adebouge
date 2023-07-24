import classes from './form.module.scss'

const Form = () => {
  return (
    <form action="" className="">
        <div className={`container ${classes.form__container}`}>
            <div className="form-control half">
                <input type="text" name='firstname' id='firstname'/>
                <label htmlFor="firstname">First Name</label>
            </div>
            <div className="form-control half">
                <input type="text" name='lastname' id='lastname'/>
                <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="form-control">
                <input type="email" name='email' id='email'/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-control">
                <input type="text" name='subject' id='subject'/>
                <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-control">
             <select name="" id="">
                <option value="Social ">Social</option>
                <option value="Data ">Data</option>
             </select>
            </div>
            <div className="form-control">
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <label htmlFor="message">Message</label>
            </div>
        </div>
    </form>
  )
}

export default Form
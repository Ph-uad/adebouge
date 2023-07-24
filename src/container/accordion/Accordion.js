import { useState } from 'react'
import classes from './accordion.module.scss'

const Accordion = () => {

  const [doShowMessage, setDoShowMessage] = useState(false);

  function toggleAccordionHandler() { setDoShowMessage(!doShowMessage) }


  return (
    <section className={classes.accordion}>
      <span className={ `${classes.label} flex` } onClick={ toggleAccordionHandler }>
        <h3>title</h3>
        <div className={ `${classes.icon} + ${doShowMessage ? classes['icon-rotate'] : ' '}` }>&#43;</div>
      </span>
      <div className={ ` ${classes.content} + ${doShowMessage ? classes['content-show'] : ' '}` }>
        <h3>subtitle</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur officia perspiciatis accusantium voluptatibus vitae? Totam adipisci at quia sapiente.</p>
      </div>
    </section>
  )
}

export default Accordion
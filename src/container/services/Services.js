import { useState } from 'react'
import classes from './services.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

const Services = ({ data }) => {

  const [selectedId, setSelectedId] = useState(null)

  const list = data?.map((item, i) => (
    <motion.li key={ i } className={ `item ${classes.list}` } layoutId={ item.id } onClick={ () => setSelectedId(item) }>
      <a href="#more-info">
        <figure className={ classes.list__figure }>
          <img src={ item.poster } alt={ item.title } />
        </figure>
        <article>
          <h2 className='heading-secondary'>{ item.title }</h2>
          <p className='text-ellipse'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, modi voluptatibus cumque incidunt magni suscipit.</p>
        </article>
        <button href="" className="link">Learn More</button>
      </a>
    </motion.li>
  ))

  return (
    <div className='position-relative'>
      <section>
        <div className="container">
          <ul className='flex'>
            { list }
          </ul>
        </div>
      </section>

      <AnimatePresence>
        { selectedId && (
          <motion.div
            layoutId={ selectedId }
            className={ `${classes.modal}` }
            id="more-info"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
          >
            <div className="container">
              {/* <motion.button onClick={() => setSelectedId(null)}>&#10060;</motion.button> */ }
              <figure className={ classes.list__figure }>
                <img src={ selectedId.poster } alt={ selectedId.title } />
              </figure>
              <motion.h2>{ selectedId.title }</motion.h2>
              <motion.h5>item.subtitle</motion.h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui ratione facere itaque temporibus voluptates, sit minima. Necessitatibus, explicabo? Autem.</p>
            </div>
          </motion.div>
        ) }
      </AnimatePresence>
    </div>
  )
}
export default Services;
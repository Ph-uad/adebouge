import classes from './services.module.scss'

const Services = ({ data }) => {

  const list = data?.map((item, i) => (
    <li key={ i } className={`item ${classes.list }`}>
      <figure className={ classes.list__figure }>
        <img src={ item.poster } alt={ item.title } />
      </figure>
      <article>
        <h2 className='heading-secondary'>{ item.title }</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, modi voluptatibus cumque incidunt magni suscipit.</p>
      </article>
      <a href="" className="link">Learn More</a>
    </li>
  ))

  return (
    <section className="">
      <div className="container">
        <ul className='flex'>
          { list }
        </ul>
      </div>
    </section>
  )
}
export default Services;
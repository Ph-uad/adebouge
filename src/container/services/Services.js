import classes from './services.module.scss'

const Services = ({ data }) => {

  const list = data?.map((item, i) => (
    <li key={ i } className={ classes.list }>
      <div className="">
      </div>
      <span>
        <h3>{ item.title }</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, modi voluptatibus cumque incidunt magni suscipit.</p>
      </span>
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
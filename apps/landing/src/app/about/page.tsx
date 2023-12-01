import { container } from '../../styles/styles';
import { AboutUs } from './components/about/AboutUs'

export default function About() {
  return (
    // <section className='w-5/6 mx-auto my-16 grid grid-cols-2 gap-6'>
    <section className={`flex-center main-height ${container}`}>
      <AboutUs />
    </section>
  )
}
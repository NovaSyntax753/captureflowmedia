import AnimatedTitle from './Animated'
import ExpertiseCard from './ExpertiseCard'
import strategy from '../assets/strategy.png'
import research from '../assets/research.png'
import videoProduction from '../assets/videoproduction.png'
import videoEditing from '../assets/videoediting.png'
import graphicDesign from '../assets/graphics.png'
import storytelling from '../assets/storytelling.png'

const expertise = [
  {
    title: 'Strategy',
    img: strategy,
    desc: 'Strategic guidance and competitive analysis to grow brand identity.',
  },
  {
    title: 'Content Research',
    img: research,
    desc: 'Detailed value addition content that connects and sparks action.',
  },
  {
    title: 'Storytelling',
    img: storytelling,
    desc: 'Connect emotionally with your audience through storytelling.',
  },
  {
    title: 'Video Production',
    img: videoProduction,
    desc: 'From concept to creation, we bring your vision to life on screen.',
  },
  {
    title: 'Video Editing',
    img: videoEditing,
    desc: 'Turn your raw footages into captivating videos that tell stories.',
  },
  {
    title: 'Graphic Design',
    img: graphicDesign,
    desc: 'Turn ideas into stunning carousels, thumbnails and posters.',
  },
]

const Expertise = () => {
  return (
    <section className="w-full py-16 " id="expertise">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#53c926] ">Our Expertise</h2>
        </AnimatedTitle>
        <AnimatedTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {expertise.map((item, idx) => (
            <ExpertiseCard key={idx} img={item.img.src} title={item.title} desc={item.desc} />
          ))}
        </div>
        </AnimatedTitle>
      </div>
    </section>
  )
}

export default Expertise
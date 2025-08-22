
import { FaCheckCircle, FaTimesCircle, FaRocket } from 'react-icons/fa'
import AnimatedTitle from './Animated'
import InfoCard from './InfoCard'

const problems = [
  "You're posting content but getting no real engagement or clients",
  'Stuck with low reach and slow follower growth',
  'Too busy to focus on marketing or building a lead system',
  'Struggling to keep up with trends and content ideas',
]
const solutions = [
  'Hook-based video strategies built to convert views into leads',
  "Viral content made just for you and your audience",
  'Clear growth roadmap with automated funnels + lead magnets',
  'Weekly updates, real-time analytics, and growth reporting',
]

const Infosection = () => {
  return (
    <div className='relative w-full py-16 px-2 sm:px-4 md:px-12  text-white overflow-hidden'>
      <div className="container mx-auto px-2 sm:px-4 md:px-8 text-center">
        <AnimatedTitle>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-[#53c926] drop-shadow break-words leading-tight text-center">
            Making Your Life Easier
          </h2>
        </AnimatedTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto justify-center items-stretch">
          <InfoCard
            title="😡 Problems you face"
            icon={<FaTimesCircle />}
            color="#ff234b"
            accentcolor="#ff234b"
            items={problems.map(text => ({ icon: <FaTimesCircle />, text }))}
          />
          <InfoCard
            title="🚀 The Solutions We Bring"
            icon={<FaRocket />}
            color="#53c926"
            accentcolor="#53c926"
            items={solutions.map(text => ({ icon: <FaCheckCircle />, text }))}
          />
        </div>
      </div>
    </div>
  )
}

export default Infosection
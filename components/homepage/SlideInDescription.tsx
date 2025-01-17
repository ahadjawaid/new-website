import { useSpring, useChain, useSpringRef, animated } from 'react-spring'

function SlideInDescription(props)
{
  const dur = parseInt(props.duration)
  const ref = [useSpringRef()]

  const body = useSpring
  ({
    ref: ref[0],
    from: { x: -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config:  { duration: dur }
  })

  useChain(ref, [1], parseInt(props.delay))

  return(
    <>
    <animated.div style={{...body}}>
      Our mission: make AI understandable and accessible to everyone.
    </animated.div>
    </>
  )
}

export default SlideInDescription;
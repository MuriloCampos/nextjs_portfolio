import tw, { styled, css, theme } from 'twin.macro'
import { lighten } from 'polished'

const Card = styled.a(() => [
  tw`flex flex-col w-full p-5 text-white mb-2`,
  css`
    background: ${lighten(0.1, '#000')}
  `
])

export default Card
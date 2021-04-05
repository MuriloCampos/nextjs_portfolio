import tw from 'twin.macro'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: () => [
    tw`flex flex-col md:flex-row bg-black min-w-full min-h-screen p-8`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
  personalInfo: () => [
    tw`flex flex-col w-full md:w-2/5 md:mr-5 mb-20`
  ],
  portfolio: () => [
    tw`flex flex-col w-full md:w-3/5`
  ]
}

export default styles;
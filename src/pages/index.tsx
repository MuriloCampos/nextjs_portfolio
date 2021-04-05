import React from 'react'
import tw from 'twin.macro'
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

import { Card, Header } from '../components'

import styles from './styles'

const IndexPage = () => (
  <div css={styles.container()}>
    <div css={styles.personalInfo()}>
      <Header>Hello, I'm Alessandra Marimon.</Header>
      {/* <p tw="text-gray-400 mb-5">I’m a Software Engineer currently working at <a target="_blank" rel="noopener noreferrer" href="http://ateliware.com/" tw="text-white underline">Ateliware</a>. I mostly do front-end development, and I’m a React.js and CSS nerd. I can't shut up about test-driven development and utility-first CSS. I also share what I learn on my blog frontstuff.io, or at meetups and conferences.</p> */}
      <p tw="text-gray-400 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel eleifend nisl. Aliquam ac ex vel nisi ultricies mollis. Suspendisse tincidunt nisl ipsum, in scelerisque purus molestie vel. Integer enim diam, rhoncus vel lorem sed, blandit viverra lacus. Nullam quis leo tincidunt elit blandit placerat. Vestibulum facilisis lorem quam, at.</p>
      
      <div tw="flex items-center">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFpYA7sGzM8ng/profile-displayphoto-shrink_800_800/0/1612023531361?e=1623283200&v=beta&t=J1CVBrLirNmcpZBTVrs4_3fAaxLipEiO30V2s8tVPg8" tw="w-10 h-10 rounded-full mr-3" />
        <a tw="flex mr-3 items-center">
          <FaLinkedin tw="w-4 h-4 mr-2" color="#fff" />
          <span tw="text-white mr-2">LinkedIn</span>
          <FaExternalLinkAlt tw="w-4 h-4" color="#fff" />
        </a>
        <a tw="flex items-center">
          <FaGithub tw="w-4 h-4 mr-2" color="#fff" />
          <span tw="text-white mr-2">Github</span>
          <FaExternalLinkAlt tw="w-4 h-4" color="#fff" />
        </a>
      </div>
    </div>
    <div css={styles.portfolio()}>
      <h2 tw="text-white font-mono font-bold tracking-widest mb-10">TEXTOS</h2>
      <Card target="_blank" href="https://fas-amazonas.org/fas-realiza-pesquisa-para-aprimorar-atencao-basica-de-saude-na-amazonia/">
        <span tw="font-mono tracking-widest text-sm mb-2">JORNALÍSTICO</span>
        <span tw="text-xl font-bold mb-2">FAS realiza pesquisa para aprimorar atenção básica de saúde na Amazônia</span>
        <span tw="text-gray-400">Pesquisadoras ouvem profissionais da saúde de 26 municípios do Amazonas. Proposta é melhorar o SUS, elaborar guias de saúde e aprimorar legislação.</span>
      </Card>
      <Card target="_blank" href="http://fatecbauru.edu.br/ojs/index.php/rehutec/article/view/291/223">
        <span tw="font-mono tracking-widest text-sm mb-2">ACADÊMICO</span>
        <span tw="text-xl font-bold mb-2">As mulheres da favela Cidade de Deus de Campo Grande-MS: histórias de luta e resistência:</span>
        <span tw="text-gray-400"> Este artigo pretende compreender e expor as relações de luta e resistência das mulheres
da favela Cidade de Deus, em Campo Grande (MS), a fim de dar voz a esse grupo socialmente
marginalizado.</span>
      </Card>
    </div>
  </div>
)

export default IndexPage

import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
	globalStyles()

	return (
		<Container>
			<Header>
				<Image src={Logo} alt="" />
			</Header>

			<Component {...pageProps} />
		</Container>
	)
}

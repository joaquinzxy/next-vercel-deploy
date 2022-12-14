import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing</h1>

      <h1 className={'title'}>
        Volver al <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}

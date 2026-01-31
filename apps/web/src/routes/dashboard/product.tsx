import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/product')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/master/product"!</div>
}

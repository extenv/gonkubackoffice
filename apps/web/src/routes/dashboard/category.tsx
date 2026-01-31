import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/category')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/master/category"!</div>
}

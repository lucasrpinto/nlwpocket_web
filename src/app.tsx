import { Dialog } from './componentes/ui/dialog'
import { CreateGoal } from './componentes/create-goal'
import { Summary } from './componentes/summary'
import { EmptyGoal } from './componentes/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoal />}
      
      

      <CreateGoal />
    </Dialog>
  )
}
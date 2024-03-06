import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog'

interface Props {
  isOpen: boolean
  toggleModal: () => void
  handleSubmit: () => void
}

function MustHaveTeamModal({ isOpen, toggleModal, handleSubmit }: Props) {
  function _handleSubmit() {
    toggleModal()

    handleSubmit()
  }

  return (
    <Dialog
      open={isOpen}
      modal
      onOpenChange={toggleModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">Você ainda não tem um time?</DialogTitle>
          <DialogDescription>
            Antes de criar seu primeiro Report, você precisa criar ou estar em um time.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={toggleModal}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            onClick={_handleSubmit}
          >
            ir para times
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { MustHaveTeamModal }

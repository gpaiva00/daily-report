import { X } from '@phosphor-icons/react'
import classNames from 'classnames'
import { BaseSyntheticEvent } from 'react'

interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
  handleCancelModal: () => void
  handleSubmit: (e: BaseSyntheticEvent) => void
}

function CreateReportModal({ isOpen, toggleModal, handleCancelModal, handleSubmit }: ModalProps) {
  if (isOpen)
    return (
      <>
        <div
          id="overlay"
          className={classNames('fixed inset-0 z-40 h-screen w-screen bg-black/50 transition-all ease-in-out', {
            'opacity-1': isOpen,
            'hidden opacity-0': !isOpen,
          })}
        />
        <div
          id="modal"
          tabIndex={-1}
          aria-describedby="janela para criar um report"
          className={classNames(
            'fixed left-1/2 top-1/2 z-50 w-[700px] -translate-x-1/2 -translate-y-1/2 space-y-5 rounded-md bg-white px-8 py-6 drop-shadow-lg transition-all ease-in-out',
            {
              'opacity-1': isOpen,
              'hidden opacity-0': !isOpen,
            }
          )}
        >
          <header className="flex items-center justify-between">
            <h3 className="font-bold uppercase">Criar report</h3>
            <button
              aria-label="fechar janela"
              className="rounded-full p-2 transition-colors hover:bg-zinc-200"
              onClick={toggleModal}
            >
              <X weight="bold" />
            </button>
          </header>

          <div>
            <form
              className="group flex flex-col gap-2"
              noValidate
            >
              <label
                htmlFor="today"
                className="flex flex-col gap-2 font-semibold"
              >
                <span aria-describedby="insira suas conquistas e objetivos para hoje">Para hoje:</span>
                <textarea
                  placeholder="Minhas conquistas e objetivos para hoje são..."
                  required
                  name="today"
                  rows={5}
                  className="peer resize-none rounded-sm border border-zinc-200 p-2 font-normal invalid:border-red-500"
                ></textarea>
                <span className="invisible text-sm font-normal text-red-500 peer-invalid:visible">
                  Por favor, preencha este campo.
                </span>
              </label>

              <label
                htmlFor="nextDay"
                className="flex flex-col gap-2 font-semibold"
              >
                <span>Para o dia seguinte:</span>

                <textarea
                  placeholder="Meus próximos passos são..."
                  required
                  name="nextDay"
                  rows={5}
                  className="peer resize-none rounded-sm border border-zinc-200 p-2 font-normal invalid:border-red-500"
                ></textarea>
                <span className="invisible text-sm font-normal text-red-500 peer-invalid:visible">
                  Por favor, preencha este campo.
                </span>
              </label>

              <label
                htmlFor="blocks"
                className="flex flex-col gap-2 font-semibold"
              >
                <span>Impedimentos/Bloqueios (opcional):</span>

                <textarea
                  placeholder="Preciso de ajuda com..."
                  name="blocks"
                  rows={5}
                  className="peer resize-none rounded-sm border border-zinc-200 p-2 font-normal"
                ></textarea>
              </label>
              <div className="mt-8 flex items-center gap-4">
                <button
                  aria-label="cancelar"
                  onClick={handleCancelModal}
                  className="w-full rounded-md border border-zinc-900 p-2 capitalize transition-colors hover:border-zinc-200 hover:bg-zinc-200"
                >
                  Cancelar
                </button>
                <button
                  aria-label="criar report"
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-primary hover:bg-primary-darken w-full rounded-md p-2 capitalize text-white transition-colors group-invalid:pointer-events-none group-invalid:opacity-30"
                >
                  Criar
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )

  return <></>
}

export default CreateReportModal

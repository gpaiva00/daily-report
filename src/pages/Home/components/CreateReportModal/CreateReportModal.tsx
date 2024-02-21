'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { Textarea } from '@/shared/components/ui/textarea'
import { useForm } from 'react-hook-form'

interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
  handleSubmit: (values: z.infer<typeof formSchema>) => void
  isLoading: boolean
}

type FormSchemaProps = z.ZodObject<{
  forToday: z.ZodString
  nextSteps: z.ZodString
  blocks: z.ZodOptional<z.ZodString>
}>

const formSchema = z.object({
  forToday: z.string().min(10, { message: 'Este texto deve ter pelo menos 10 caracteres.' }).max(500, {
    message: 'Este texto deve ter até 500 caracteres.',
  }),
  nextSteps: z.string().min(10, { message: 'Este texto deve ter pelo menos 10 caracteres.' }).max(500, {
    message: 'Este texto deve ter até 500 caracteres.',
  }),
  blocks: z
    .string()
    .max(500, {
      message: 'Este texto deve ter até 500 caracteres.',
    })
    .optional(),
})

function CreateReportModal({ isOpen, handleSubmit, toggleModal, isLoading }: ModalProps) {
  const form = useForm<z.infer<FormSchemaProps>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      forToday: '',
      nextSteps: '',
      blocks: '',
    },
  })

  function handleClearForm() {
    form.reset(
      {
        blocks: '',
        nextSteps: '',
        forToday: '',
      },
      {
        keepErrors: false,
        keepDirty: false,
        keepDirtyValues: false,
        keepValues: false,
      }
    )

    form.clearErrors()

    toggleModal()
  }

  return (
    <Dialog
      open={isOpen}
      modal
      onOpenChange={toggleModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar report</DialogTitle>
          <DialogDescription>Descreva as informações mais relevantes do seu trabalho.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="forToday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">para hoje:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Minhas conquistas e objetivos para hoje são..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nextSteps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">para o dia seguinte:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Meus próximos passos são..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="blocks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">bloqueios ou impedimentos (opcional):</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Preciso de ajuda com..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="flex justify-between">
              <Button
                variant="secondary"
                onClick={handleClearForm}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
              >
                Criar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export type { FormSchemaProps }

export default CreateReportModal

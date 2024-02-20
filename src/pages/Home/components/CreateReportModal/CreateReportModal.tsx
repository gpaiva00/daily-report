'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'

interface ModalProps {
  isOpen: boolean
  handleCancelModal: () => void
  toggleModal: () => void
  handleSubmit: (values: z.infer<typeof formSchema>) => void
  isLoading: boolean
}

type FormSchemaProps = z.ZodObject<{
  forToday: z.ZodString
  forNextDay: z.ZodString
  blocks: z.ZodOptional<z.ZodString>
}>

const formSchema = z.object({
  forToday: z.string().min(10, { message: 'Este texto deve ter pelo menos 10 caracteres.' }).max(500, {
    message: 'Este texto deve ter até 500 caracteres',
  }),
  forNextDay: z.string().min(10, { message: 'Este texto deve ter pelo menos 10 caracteres.' }).max(500, {
    message: 'Este texto deve ter até 500 caracteres',
  }),
  blocks: z.string().max(300).optional(),
})

function CreateReportModal({ isOpen, handleSubmit, toggleModal, isLoading, handleCancelModal }: ModalProps) {
  const form = useForm<z.infer<FormSchemaProps>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      forToday: '',
      forNextDay: '',
      blocks: '',
    },
  })

  return (
    <Dialog
      open={isOpen}
      modal
      onOpenChange={toggleModal}
    >
      {/* <DialogPortal> */}
      {/* <DialogOverlay> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar report</DialogTitle>
          <DialogDescription>Adicione as informações mais relevantes do seu trabalho de hoje.</DialogDescription>
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
              name="forNextDay"
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
                onClick={handleCancelModal}
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
      {/* </DialogPortal> */}
      {/* </DialogOverlay> */}
    </Dialog>
  )
}

export type { FormSchemaProps }
export default CreateReportModal

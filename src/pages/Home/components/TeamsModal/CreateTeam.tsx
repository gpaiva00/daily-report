import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

import { capitalize } from '@/shared/utils'

interface Props {
  handleCreateTeam: (values: z.infer<CreateTeamFormProps>) => void
  randomID: string | undefined
}

type CreateTeamFormProps = z.ZodObject<{
  name: z.ZodString
  id: z.ZodString | z.ZodUndefined
  password: z.ZodString
}>

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome precisa ter pelo menos 2 caracteres.' }),
  id: z.string({ required_error: '' }).optional(),
  password: z.string().min(8, { message: 'A senha precisa ter 8 dígitos' }),
})

function CreateTeam({ randomID, handleCreateTeam }: Props) {
  const form = useForm<z.infer<CreateTeamFormProps>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      id: randomID,
      password: '',
    },
  })

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateTeam)}>
          <CardHeader>
            <CardTitle>Crie seu time</CardTitle>
            <CardDescription>Somente os membros do time poderão visualizar os Reports criados.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{capitalize('Nome do time')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Crie um nome fácil de achar e criativo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="id"
              disabled={true}
              defaultValue={randomID}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{capitalize('ID do time')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Crie um ID único para seu time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{capitalize('Senha de acesso')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Crie uma senha de no mínimo 8 caracteres"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="w-full">
            <Button
              type="submit"
              className="w-full"
            >
              Criar time
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

export { CreateTeam }
export type { CreateTeamFormProps }

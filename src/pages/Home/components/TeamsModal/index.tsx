'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Dialog, DialogContent, DialogHeader } from '@/shared/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'

interface Props {
  isOpen: boolean
  toggleModal: () => void
}

type FormSchemaProps = z.ZodObject<{
  name: z.ZodString
  id: z.ZodNumber
  password: z.ZodString
}>

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome precisa ter pelo menos 2 caracteres.' }),
  id: z.number({ required_error: '' }).min(4, { message: 'O ID precisa ter pelo menos 4 números' }),
  password: z.string().min(8, { message: 'A senha precisa ter 8 dígitos' }),
})

function TeamsModal({ isOpen, toggleModal }: Props) {
  const form = useForm<z.infer<FormSchemaProps>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      id: undefined,
      password: '',
    },
  })

  function handleSubmit() {}

  return (
    <Dialog
      open={isOpen}
      modal
      onOpenChange={toggleModal}
    >
      <DialogContent>
        <DialogHeader>
          <Tabs
            defaultValue="search"
            className="mt-6 w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="search"
                className="capitalize"
              >
                Procurar times
              </TabsTrigger>
              <TabsTrigger
                value="create"
                className="capitalize"
              >
                Criar time
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search">
              <Card>
                <CardHeader>
                  <CardTitle>Entre para um time</CardTitle>
                  <CardDescription>Procure por um time para visualizar seus Reports.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Label className="">Nome ou ID do time</Label>
                  <Input
                    type="search"
                    placeholder="Digite o nome ou ID do time..."
                    className="mt-2"
                  />
                  {/* <p className="text-muted-foreground">Os times aparecerão aqui.</p> */}
                  {/* results list */}
                  <div className="mt-10 flex flex-col gap-6">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-1 items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Peanut&backgroundColor=059ff2,d84be5,d9915b,f6d594,fcbc34,71cf62" />
                          <AvatarFallback>...</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="text-sm font-medium leading-none last:mt-0">Time Bitcoin</p>
                          <p className="text-xs text-muted-foreground last:mt-0">ID-123</p>
                        </div>
                      </div>
                      <Button variant="secondary">Entrar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="create">
              <Card>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <CardHeader>
                      <CardTitle>Crie seu time</CardTitle>
                      <CardDescription>
                        Somente os membros do time poderão visualizar os Reports criados.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="capitalize">Nome do time</FormLabel>
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
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="capitalize">ID do time</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
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
                            <FormLabel className="capitalize">Senha de acesso</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Crie uma senha de no mínimo 8 caracteres"
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
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export { TeamsModal }

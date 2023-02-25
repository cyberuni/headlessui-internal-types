import { Listbox } from '@headlessui/react'
import type { PropsWithChildren } from 'react'

export function CustomListboxFn<T>(props: PropsWithChildren<Record<any, any>>) {
	return <Listbox {...props} />
}

export const CustomListbox = Object.assign(CustomListboxFn, {
	Button: Listbox.Button
})
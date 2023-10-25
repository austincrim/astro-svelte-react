import {
  Button,
  ComboBox,
  Group,
  Input,
  Item,
  Label,
  ListBox,
  Popover,
} from 'react-aria-components'
import type { ItemProps } from 'react-aria-components'

const people = [
  { id: 1, name: 'Austin', avatar: 'https://github.com/austincrim.png' },
  { id: 2, name: 'Rich', avatar: 'https://github.com/rich-harris.png' },
  { id: 3, name: 'Devon', avatar: 'https://github.com/devongovett.png' },
  { id: 4, name: 'Fred', avatar: 'https://github.com/fredkschott.png' },
  { id: 5, name: 'Adam', avatar: 'https://github.com/adamwathan.png' },
]

export function Combo() {
  return (
    <div className="gap-4 bg-blue-50 border-4 border-[rgb(56,124,160)] p-8 rounded-lg flex items-center flex-col">
      <h2 className="text-2xl text-[rgb(56,124,160)]">Hello from React</h2>
      <ComboBox className="group flex flex-col gap-1 w-[200px]">
        <Label className="text-gray-900 cursor-default">Assignee</Label>
        <Group className="flex transition bg-white rounded-lg shadow-md bg-opacity-90 focus-within:bg-opacity-100 ring-1 ring-black/10 focus-visible:ring-2 focus-visible:ring-black">
          <Input className="flex-1 w-full px-3 py-2 text-base leading-5 text-gray-900 bg-transparent border-none outline-none" />
          <Button className="flex items-center px-1 text-gray-700 transition bg-transparent border-0 border-l border-solid rounded-r-lg border-l-sky-200 pressed:bg-sky-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </Button>
        </Group>
        <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
          <ListBox className="p-1 space-y-1 outline-none" items={people}>
            {(item) => (
              <ListBoxItem textValue={item.name}>
                <img
                  alt=""
                  src={item.avatar}
                  className="w-6 h-6 rounded-full"
                />
                <span className="truncate">{item.name}</span>
              </ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  )
}

function ListBoxItem(props: ItemProps & { children: React.ReactNode }) {
  return (
    <Item
      className="data-[hovered]:bg-blue-200 data-[selected]:bg-blue-100 rounded"
      {...props}
    >
      <span className="flex items-center gap-2 py-2 pl-2 pr-4 text-gray-900 rounded outline-none cursor-default select-none group focus:bg-sky-600 focus:text-white ">
        {props.children}
      </span>
    </Item>
  )
}

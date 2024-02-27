import { useState, type ReactNode } from 'react'
import { Download, ImageOff } from 'lucide-react'

import { downloadImage } from '../lib/utils/download-image'
import { cn } from '../lib/utils'

import { Dialog, DialogContent,  DialogTrigger } from './dialog'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'


export interface D4tImageProps {
  src?: string
  containerClassName?: string
  imageClassName?: string
  filename?: string
  zoom?: boolean
  download?: boolean
  fallback?: {
    className?: string
    children?: ReactNode
  }
}

export const D4TImage = ({ src, containerClassName, imageClassName, zoom, fallback, download, filename }: D4tImageProps) => {
  const [open, setOpen] = useState(false)

  if (zoom) {
    return (
      <div className='w-full h-fit relative'>
        {
          download && (
            <Button
              onClick={() => downloadImage(src, filename)}
            className='absolute top-2 right-2 w-fit h-fit p-2 z-10 border-border border hover:bg-zinc-700 dark:hover:bg-zinc-200 focus-visible:ring-offset-0 focus-visible:ring-1'
            >
              <Download size={18} />
            </Button>
          )
        }

        <Dialog open={open} onOpenChange={setOpen}>
          {/* <Avatar className={cn('h-[237px] rounded-md', containerClassName, src ? 'w-auto' : 'min-w-[300px]')} > */}
          <Avatar className={cn('relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200', containerClassName)}>
            <AvatarImage
              src={src}
              className={cn('w-auto rounded-md object-contain m-auto h-full cursor-zoom-in', imageClassName)} style={{ width: '-webkit-fill-available' }}
              onClick={() => setOpen(true)}
            />

            <AvatarFallback className={cn('w-full h-full rounded-md', fallback?.className)}>
              { fallback?.children || <ImageOff /> }
            </AvatarFallback>
          </Avatar>

          <DialogContent className='p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none' style={{ background: 'transparent !important' }} onClick={() => setOpen(false)}>
            <Avatar className={cn('w-full h-full rounded-md')}>
              <AvatarImage src={src} className={cn('rounded-md object-contain m-auto h-full')} style={{ width: '-webkit-fill-available' }} />

              <AvatarFallback className={cn('w-full h-full rounded-md', fallback?.className)}>
                { fallback?.children || <ImageOff /> }
              </AvatarFallback>
            </Avatar>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <Avatar className={cn('relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200', containerClassName)}>
      {
        download && (
          <Button
            onClick={() => downloadImage(src, filename)}
            className='absolute top-2 right-2 w-fit h-fit p-2 z-10 border-border border hover:bg-zinc-700 dark:hover:bg-zinc-200 focus-visible:ring-offset-0 focus-visible:ring-1'
          >
            <Download size={18} />
          </Button>
        )
      }

      <AvatarImage src={src} className={cn('rounded-md object-contain m-auto', imageClassName)} style={{ width: '-webkit-fill-available' }} />

      <AvatarFallback className={cn('w-full h-full rounded-md', fallback?.className)}>
        { fallback?.children || <ImageOff /> }
      </AvatarFallback>
    </Avatar>
  )
}
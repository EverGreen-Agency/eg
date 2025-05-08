import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  icon: string
  link: string
}

export default function Card({ title, description, icon, link }: CardProps) {
  return (
    <Link href={link} className="group">
      <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 p-2 dark:bg-zinc-700">
            <Image src={icon} alt={title} width={24} height={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
} 
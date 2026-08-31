

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import { FaGithub } from 'react-icons/fa6'

type Props = {
  title: string
  description: string
  image: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
}

const ProjectCard = ({
  description,
  image,
  techStack,
  title,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-black transition-colors group-hover:text-blue-500 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

<div className='flex gap-3 '>
{demoUrl && (
  <Button
  
    size="sm"
    className="flex-1"
    render={<a href={demoUrl} target="_blank" rel="noopener noreferrer" />}
  >
    <ExternalLink className="w-4 h-4 mr-2" />
    Live Demo
  </Button>
)}

{githubUrl && (
  <Button
  variant={"outline"}
    size="sm"
    className="flex-1 py-2"
    render={<a href={githubUrl} target="_blank" rel="noopener noreferrer" />}
  >
    <FaGithub className="w-4 h-4 mr-2" />
    Github
  </Button>
)}
</div>     
      </div>
    </div>
  )
}

export default ProjectCard


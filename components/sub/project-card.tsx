import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="project-card group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a031e] via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative p-5">
        <h1 className="text-lg font-semibold text-white font-heading group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

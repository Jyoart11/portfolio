import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 p-6 md:p-10 border-t border-[rgba(112,66,248,0.1)]">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-row items-start justify-center gap-16 flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-center gap-3"
            >
              <h3 className="font-bold text-[14px] text-gray-400 uppercase tracking-wider font-heading">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="text-[14px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="text-[13px] text-gray-500 text-center">
          &copy; Kalamkuri Jyothirmai {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

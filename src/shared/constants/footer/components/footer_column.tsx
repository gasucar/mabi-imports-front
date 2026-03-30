type LinkItem = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  links: LinkItem[];
};

const FooterColumn = ({ title, links }: Props) => {
  return (
    <div className="flex flex-col gap-5">

      <h3 className="text-sm font-semibold tracking-wider text-white">
        {title}
      </h3>

      <ul className="flex flex-col gap-3">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href || "#"}
              className="
              text-sm
              text-neutral-400
              transition
              duration-300
              hover:text-white
              hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default FooterColumn;
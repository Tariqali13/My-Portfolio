type Props = {
  id?: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ id, title, copy }: Props) {
  return (
    <div className="sectionHeading">
      <h2 id={id}>{title}</h2>
      {copy ? <p className="sectionCopy">{copy}</p> : null}
    </div>
  );
}

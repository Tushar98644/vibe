import Link from "next/link";
import { Key } from "react";

interface TimelineProps {
  year: string;
  data: any;
}

export default function TimelineItem({ year, data }: TimelineProps) {
  return (
    <div className="timeline-item">
      <h3 className="timeline-year">{year}</h3>
      <div className="timeline-content">
        {data.job && <p className="job">{data.job}</p>}
        <ul className="skills-list">
          {data.skills.map(
            (
              skill: {
                name: string;
                link: string;
              },
              index: Key | null | undefined,
            ) => (
              <li key={index} className="skill">
                <Link className="underline-magical" href={skill?.link}>
                  {skill?.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

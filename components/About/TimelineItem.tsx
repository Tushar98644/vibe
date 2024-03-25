import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";

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
              skill:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined,
              index: Key | null | undefined,
            ) => (
              <li key={index} className="skill">
                {skill}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

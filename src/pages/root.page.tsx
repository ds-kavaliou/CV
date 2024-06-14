import { profile, skills, education } from "../assets/data.json";
import { Section } from "../components";

export default function RootPage() {
  return (
    <>
      <Section>
        <div className="container">
          <Section.Title>Profile</Section.Title>
          <Section.Content>
            {profile.map((text, i) => (
              <p key={i} className="mb-2">
                {text}
              </p>
            ))}
          </Section.Content>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Section.Title>Education and Courses</Section.Title>
          <Section.Content>
            <ul className="flex flex-col gap-y-2 list-inside list-disc">
              {education.map(({ name, value }) => (
                <li>
                  <a
                    className="underline hover:no-underline"
                    href={value}
                    target="_blank"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </Section.Content>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Section.Title>Skills</Section.Title>
          <Section.Content>
            <ul className="flex flex-col gap-y-1 list-inside list-disc">
              {skills.map(({ name, value }) => (
                <li key={name}>
                  <strong className="text-md">{name}:</strong>{" "}
                  <span className="text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </Section.Content>
        </div>
      </Section>
    </>
  );
}

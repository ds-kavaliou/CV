import { Outlet } from "react-router-dom";

import { details } from "../assets/data.json";

export default function RootLayout() {
  return (
    <>
      <header className="py-8">
        <div className="container">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <img
              className="h-60 w-60 rounded-full select-none mb-4"
              src="https://avatars.githubusercontent.com/u/116199859?v=4"
              alt="Dzianis Kavaliou"
            />
            <h1 className="font-medium text-3xl">
              Dzianis <span className="text-blue-600">Kavaliou</span>
            </h1>
            <ul className="flex flex-wrap justify-center w-4/5 gap-x-4 gap-y-2 text-lg text-center">
              {details.map(({ name, value, type }) => (
                <li key={name}>
                  <span className="text-blue-600 font-medium">{name}:</span>
                  &nbsp;
                  {type === "email" && <a href={`mailto:${value}`}>{value}</a>}
                  {type === "tel" && <a href={`tel:${value}`}>{value}</a>}
                  {type === "link" && (
                    <a href={value} target="_blank">
                      {value}
                    </a>
                  )}
                  {type === "text" && <span>{value}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <main className="py-4">
        <Outlet />
      </main>
      <footer className="shadow-inner">
        <div className="container text-center py-5 text-sm">
          <p>
            <span>Designed and developed by</span>
            &nbsp;
            <a
              href="https://github.com/ds-kavaliou"
              className="tracking-wide font-medium uppercase text-xs"
            >
              Dzianis Kavaliou
            </a>
          </p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}

import * as React from "react";
import { createRoot } from "react-dom/client";

import "./application.css";

function Application() {
  return (
    <>
      <header>
        <div>First box</div>
        <div>Second box</div>
        <div>Third box</div>
        <div>Fourth box</div>
      </header>
      <main>
        <div className={"mapView"}>
          <div className={"map"}>Body content</div>
          <div className={"detail"}>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>Made with ❤️ by Johannes</footer>
    </>
  );
}

createRoot(document.getElementById("app")!).render(<Application />);

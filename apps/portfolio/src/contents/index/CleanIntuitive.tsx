"use client";

import { useState } from "react";

import { SectionButton } from "../../components/sections/SectionButton";
import SectionContent from "../../components/sections/SectionContent";
import SectionTitle from "../../components/sections/SectionTitle";

import TodoItem from "./Cards/TodoItem";

import type { TodoItemState } from "./Cards/TodoItem";
import { mc } from "merge-class";

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: "typography",
    shows: ["typography"],
    title: "Typography",
    description: "Selecting the font type, font size, and font weight.",
  },
  {
    state: "spacing",
    shows: ["typography", "spacing"],
    title: "Spacing",
    description: "Positioning and adding spacing between elements.",
  },
  {
    state: "colors",
    shows: ["typography", "spacing", "colors"],
    title: "Colors",
    description: "Choosing a color scheme with sufficient contrast.",
  },
  {
    state: "effects",
    shows: ["typography", "spacing", "colors", "effects"],
    title: "Effects",
    description: "Add effects like borders, shadows, rounded corners, etc.",
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={mc("mb-8 relative")}>
        <SectionTitle
          title="Eye Catching, Modern & Minimalist Design."
          caption="Clean & Intuitive"
          description="Keep the User Interface clean with a modern touch without
            compromising the User Experience."
        />
      </header>
      <SectionContent>
        <div className={mc("flex", "lg:gap-12")}>
          <div className={mc("-mt-8 hidden flex-1 flex-col gap-3", "lg:flex")}>
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={mc("relative flex flex-1 items-center justify-center")}
          >
            <div
              className={mc("-mt-8 flex gap-4", "md:gap-6 lg:top-8 lg:mt-0")}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ["typography", "spacing", "colors", "effects"]
                  }
                />
              </div>
              <div className={mc("hidden", "sm:block lg:hidden")}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ["typography", "spacing", "colors", "effects"]
                  }
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;

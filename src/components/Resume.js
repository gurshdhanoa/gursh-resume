import React from "react";
import "../index.css";

const robinhoodToolsBuilt = [
  "P0 & P1 iOS & Android tests fully automated",
  "LLM bug context logging tool",
  "Building of more tools are in progress",
];

const robinhoodAchievements = [
  "0 production hot fixes on Robinhood's biggest project of 2024, Index Options Trading",
  "All 2 quarters, 0 production hot fixes, 0 regressions",
  "100% P0 Test Automation Coverage",
  "100% P1 Test Automation Coverage",
];

const vetsterToolsBuilt = [
  "Custom mock server for api service. Unlocked ci/cd and improved developer experience",
  "Jest component web testing",
  "Playwright UI test framework for web-testing",
  "XCUITest framework for iOS",
  "Espresso framework for Android",
  "Test cases and test strategy definitions",
  "Test plan with backlog/tracking for automation",
  "Team/Stakeholder testing process before release of new features",
];

const vetsterAchievements = [
  "P0 E2E tests automated mobile",
  "P0 E2E tests automated web",
  "CI/CD integration for automated tests",
  "100 component tests for web project",
  "100% of new features are tested by the team and stakeholders",
];

const snapchatToolsBuilt = [
  "Custom pixel comparison test framework to validate Bitmoji Avatar edits in the web project",
  "Browserstack (cloud device test environment) integration",
  "Test cases and test strategy definitions",
  "Automated weekly high-priority bug emailer",
];

const snapchatAchievements = [
  "E2E iOS and Android mobile app tests with XCUITest and Espresso",
  "Bitmoji Avatar Builder E2E tests after user pushes",
  "Last 4 quarters, 0 production hotfixes, no regressions",
  "Last 4 quarters, 0 production high/critical new feature bugs in production",
  "Built and managed a regression testing QA team",
];

const personalProjects = [
  "World's first GPT-4 mental health therapist mobile chatbot with React-Native, Redux, OpenAI API, Firebase",
  "Web design and dev - Frameworks vary: React, Vue, NextJs",
];

export default function Resume() {
  return (
    <div className="bg-wetSand section py-10">
      <div className="pt-12 pb-4 px-6">
        <div className="py-4">
          <h2 className="font-bold text-4xl">RESUME</h2>
          <div className="border-t-4 border-black mt-1"></div>

          {/* Robinhood */}
          <div className="mt-4 my-2">
            <p className="font-semibold text-xl">
              Robinhood, Toronto — Staff QE Lead
            </p>
            <p className="text-sm">June 2023 - Current</p>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Tools Built:</h2>
              {robinhoodToolsBuilt.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Achievements:</h2>
              {robinhoodAchievements.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>

          {/* Vetster */}
          <div className="mt-10 mb-2">
            <p className="font-semibold text-xl">
              Vetster, Toronto — Lead SDET
            </p>
            <p className="text-sm">Jan 2023 - June 2024</p>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Tools Built:</h2>
              {vetsterToolsBuilt.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Achievements:</h2>
              {vetsterAchievements.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>

          {/* Snapchat */}
          <div className="mt-10 mb-2">
            <p className="font-semibold text-xl">
              Snapchat, Toronto — Quality Engineering Lead
            </p>
            <p className="text-sm">Jan 2018 - Jan 2023</p>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Tools Built:</h2>
              {snapchatToolsBuilt.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Achievements:</h2>
              {snapchatAchievements.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>

          {/* Personal Projects */}
          <div className="mt-4 mb-2">
            <p className="font-semibold text-xl">Personal Projects</p>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
          <div>
            <ul className="pt-1 list-disc text-base">
              <h2 className="text font-bold">Tools Built:</h2>
              {personalProjects.map((item, index) => (
                <li key={index} className="mx-4 my-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-black mt-2"></div>
        </div>
      </div>
    </div>
  );
}